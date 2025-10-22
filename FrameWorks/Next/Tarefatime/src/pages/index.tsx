"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ProjetoCard from "@/components/ProjetoCard";
import TarefaCard from "@/components/TarefaCard";

interface Tarefa {
  _id: string;
  titulo: string;
  descricao: string;
  status: "A Fazer" | "Em Progresso" | "Concluída";
  responsavel: string;
}

interface Projeto {
  _id: string;
  nome: string;
  descricao: string;
}

export default function KanbanPage() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    // Busca projetos e tarefas do backend
    async function fetchData() {
      try {
        const [projRes, tarRes] = await Promise.all([
          fetch("/api/projetos"),
          fetch("/api/tarefas"),
        ]);
        const [projetosData, tarefasData] = await Promise.all([
          projRes.json(),
          tarRes.json(),
        ]);
        setProjetos(projetosData);
        setTarefas(tarefasData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    fetchData();
  }, []);

  const colunas = ["A Fazer", "Em Progresso", "Concluída"];

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Quadro Kanban</h1>

      <div className="grid grid-cols-3 gap-4">
        {colunas.map((coluna) => (
          <div key={coluna} className="bg-gray-200 p-4 rounded-xl shadow-inner min-h-[70vh]">
            <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">{coluna}</h2>

            {tarefas
              .filter((t) => t.status === coluna)
              .map((tarefa) => (
                <TarefaCard
                  key={tarefa._id}
                  titulo={tarefa.titulo}
                  descricao={tarefa.descricao}
                  responsavel={tarefa.responsavel}
                />
              ))}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projetos.map((proj) => (
            <ProjetoCard key={proj._id} nome={proj.nome} descricao={proj.descricao} />
          ))}
        </div>
      </div>
    </Layout>
  );
}