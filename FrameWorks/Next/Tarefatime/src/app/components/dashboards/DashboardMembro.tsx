'use client';

import React, { useEffect, useState } from 'react';

type Tarefa = {
  id: string;
  titulo: string;
  descricao?: string;
  projeto?: string;
  status: 'pendente' | 'em-andamento' | 'concluida';
  criadoEm?: string;
};

const STORAGE_KEY = 'sgm_tasks';
const PROJECTS_KEY = 'sgm_projects';

function uuid() {
  return Math.random().toString(36).substring(2, 9);
}

export default function DashboardMembro() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [filtro, setFiltro] = useState<'todas' | Tarefa['status']>('todas');

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [projeto, setProjeto] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [projetos, setProjetos] = useState<{ id: string; nome: string }[]>([]);

  useEffect(() => {
    // carregar projetos (se houver) para o select
    const rawProj = localStorage.getItem(PROJECTS_KEY);
    if (rawProj) {
      try {
        const arr = JSON.parse(rawProj);
        setProjetos(Array.isArray(arr) ? arr.map((p: any) => ({ id: p.id || p._id || uuid(), nome: p.nome || p.nome })) : []);
      } catch {
        setProjetos([]);
      }
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setTarefas(JSON.parse(raw));
      } catch {
        setTarefas([]);
      }
    } else {
      // seed exemplo
      const seed: Tarefa[] = [
        { id: uuid(), titulo: 'Verificar logs', descricao: 'Checar erros recentes', projeto: 'Manutenção', status: 'pendente', criadoEm: new Date().toISOString() },
        { id: uuid(), titulo: 'Atualizar documentação', descricao: 'Adicionar novo endpoint', projeto: 'Docs', status: 'em-andamento', criadoEm: new Date().toISOString() },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      setTarefas(seed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
  }, [tarefas]);

  const handleCreate = (ev?: React.FormEvent) => {
    ev?.preventDefault();
    setError(null);

    if (!titulo.trim()) {
      setError('Título é obrigatório.');
      return;
    }

    const nova: Tarefa = {
      id: uuid(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      projeto: projeto || undefined,
      status: 'pendente',
      criadoEm: new Date().toISOString(),
    };

    setTarefas(prev => [nova, ...prev]);
    setTitulo('');
    setDescricao('');
    setProjeto('');
  };

  const toggleStatus = (id: string) => {
    setTarefas(prev =>
      prev.map(t => {
        if (t.id !== id) return t;
        const next =
          t.status === 'pendente' ? 'em-andamento' : t.status === 'em-andamento' ? 'concluida' : 'pendente';
        return { ...t, status: next };
      })
    );
  };

  const handleDelete = (id: string) => {
    if (!confirm('Confirma excluir esta tarefa?')) return;
    setTarefas(prev => prev.filter(t => t.id !== id));
  };

  const listaFiltrada = tarefas.filter(t => (filtro === 'todas' ? true : t.status === filtro));

  return (
    <section style={{ padding: 20 }}>
      <h2>Painel do Membro</h2>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <form onSubmit={handleCreate} style={{ minWidth: 320, padding: 12, border: '1px solid #ddd', borderRadius: 6 }}>
          <h3>Adicionar tarefa</h3>
          {error && <div style={{ color: '#b00020', marginBottom: 8 }}>{error}</div>}

          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', fontSize: 12 }}>Título</label>
            <input value={titulo} onChange={e => setTitulo(e.target.value)} style={{ width: '100%', padding: 8 }} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label style={{ display: 'block', fontSize: 12 }}>Descrição</label>
            <textarea value={descricao} onChange={e => setDescricao(e.target.value)} style={{ width: '100%', padding: 8 }} />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', fontSize: 12 }}>Projeto (opcional)</label>
            {projetos.length > 0 ? (
              <select value={projeto} onChange={e => setProjeto(e.target.value)} style={{ width: '100%', padding: 8 }}>
                <option value="">-- seleciona projeto --</option>
                {projetos.map(p => <option key={p.id} value={p.nome}>{p.nome}</option>)}
              </select>
            ) : (
              <input value={projeto} onChange={e => setProjeto(e.target.value)} placeholder="Nome do projeto" style={{ width: '100%', padding: 8 }} />
            )}
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit" style={{ padding: '8px 12px' }}>Adicionar</button>
            <button type="button" onClick={() => { setTitulo(''); setDescricao(''); setProjeto(''); setError(null); }} style={{ padding: '8px 12px' }}>Limpar</button>
          </div>
        </form>

        <div style={{ flex: 1, minWidth: 420 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <h3>Minhas tarefas</h3>
            <div>
              <label style={{ marginRight: 8, fontSize: 13 }}>Filtro:</label>
              <select value={filtro} onChange={e => setFiltro(e.target.value as any)} style={{ padding: 6 }}>
                <option value="todas">Todas</option>
                <option value="pendente">Pendentes</option>
                <option value="em-andamento">Em andamento</option>
                <option value="concluida">Concluídas</option>
              </select>
            </div>
          </div>

          <div style={{ overflowX: 'auto', border: '1px solid #eee', borderRadius: 6 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#fafafa' }}>
                  <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #eee' }}>Título</th>
                  <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #eee' }}>Projeto</th>
                  <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #eee' }}>Status</th>
                  <th style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #eee' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {listaFiltrada.map(t => (
                  <tr key={t.id}>
                    <td style={{ padding: 8, borderBottom: '1px solid #f5f5f5' }}>
                      <strong>{t.titulo}</strong>
                      <div style={{ fontSize: 13, color: '#666' }}>{t.descricao}</div>
                    </td>
                    <td style={{ padding: 8, borderBottom: '1px solid #f5f5f5' }}>{t.projeto || '-'}</td>
                    <td style={{ padding: 8, borderBottom: '1px solid #f5f5f5' }}>{t.status}</td>
                    <td style={{ padding: 8, borderBottom: '1px solid #f5f5f5', textAlign: 'center' }}>
                      <button onClick={() => toggleStatus(t.id)} style={{ padding: '6px 8px', marginRight: 6 }}>
                        Próx. status
                      </button>
                      <button onClick={() => handleDelete(t.id)} style={{ padding: '6px 8px' }}>Excluir</button>
                    </td>
                  </tr>
                ))}
                {listaFiltrada.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ padding: 12, textAlign: 'center' }}>Nenhuma tarefa encontrada.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}