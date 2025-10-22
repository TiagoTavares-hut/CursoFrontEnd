import React from "react";

interface ProjetoCardProps {
  nome: string;
  descricao?: string;
}

export default function ProjetoCard({ nome, descricao }: ProjetoCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4 border-l-4 border-blue-500">
      <h2 className="font-semibold text-gray-800">{nome}</h2>
      {descricao && <p className="text-gray-600 text-sm mt-1">{descricao}</p>}
    </div>
  );
}