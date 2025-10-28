'use client';

import React, { useEffect, useState } from "react";

type Projeto = {
  id: string;
  nome: string;
  descricao?: string;
  criadoEm?: string;
};

const STORAGE_KEY = "sgm_projects";

function uuid() {
  return Math.random().toString(36).substring(2, 9);
}

export default function DashboardGerente() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setProjetos(JSON.parse(raw));
      } catch {
        setProjetos([]);
      }
    } else {
      // seed with an example project
      const seed: Projeto[] = [
        { id: uuid(), nome: "Projeto Exemplo", descricao: "Projeto inicial", criadoEm: new Date().toISOString() }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      setProjetos(seed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projetos));
  }, [projetos]);

  const handleCreate = (ev?: React.FormEvent) => {
    ev?.preventDefault();
    setError(null);

    if (!nome.trim()) {
      setError("Nome do projeto é obrigatório.");
      return;
    }

    const newProj: Projeto = {
      id: uuid(),
      nome: nome.trim(),
      descricao: descricao.trim(),
      criadoEm: new Date().toISOString()
    };

    setProjetos(prev => [newProj, ...prev]);
    setNome("");
    setDescricao("");
  };

  const handleDelete = (id: string) => {
    if (!confirm("Confirma excluir este projeto?")) return;
    setProjetos(prev => prev.filter(p => p.id !== id));
  };

  return (
    <section style={{ padding: 20 }}>
      <h2>Painel do Gerente</h2>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
        <form onSubmit={handleCreate} style={{ minWidth: 320, padding: 12, border: "1px solid #ddd", borderRadius: 6 }}>
          <h3>Criar projeto</h3>
          {error && <div style={{ color: "#b00020", marginBottom: 8 }}>{error}</div>}
          <div style={{ marginBottom: 8 }}>
            <label style={{ display: "block", fontSize: 12 }}>Nome</label>
            <input value={nome} onChange={e => setNome(e.target.value)} style={{ width: "100%", padding: 8 }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: "block", fontSize: 12 }}>Descrição</label>
            <textarea value={descricao} onChange={e => setDescricao(e.target.value)} style={{ width: "100%", padding: 8 }} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="submit" style={{ padding: "8px 12px" }}>Criar</button>
            <button type="button" onClick={() => { setNome(""); setDescricao(""); setError(null); }} style={{ padding: "8px 12px" }}>Limpar</button>
          </div>
        </form>

        <div style={{ flex: 1, minWidth: 360 }}>
          <h3>Projetos</h3>
          <div style={{ overflowX: "auto", border: "1px solid #eee", borderRadius: 6 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#fafafa" }}>
                  <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #eee" }}>Nome</th>
                  <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #eee" }}>Descrição</th>
                  <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #eee" }}>Criado</th>
                  <th style={{ textAlign: "center", padding: 8, borderBottom: "1px solid #eee" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {projetos.map(p => (
                  <tr key={p.id}>
                    <td style={{ padding: 8, borderBottom: "1px solid #f5f5f5" }}>{p.nome}</td>
                    <td style={{ padding: 8, borderBottom: "1px solid #f5f5f5" }}>{p.descricao}</td>
                    <td style={{ padding: 8, borderBottom: "1px solid #f5f5f5" }}>{new Date(p.criadoEm || "").toLocaleString()}</td>
                    <td style={{ padding: 8, borderBottom: "1px solid #f5f5f5", textAlign: "center" }}>
                      <button onClick={() => handleDelete(p.id)} style={{ padding: "6px 8px" }}>Excluir</button>
                    </td>
                  </tr>
                ))}
                {projetos.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ padding: 12, textAlign: "center" }}>Nenhum projeto encontrado.</td>
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