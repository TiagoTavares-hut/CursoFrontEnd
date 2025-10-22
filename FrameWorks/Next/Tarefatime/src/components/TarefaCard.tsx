import React from "react";

interface TarefaCardProps {
  titulo: string;
  descricao?: string;
  responsavel?: string;
}

export default function TarefaCard({ titulo, descricao, responsavel }: TarefaCardProps) {
  return (
    <div className="bg-white p-3 rounded-xl shadow-md mb-3">
      <h3 className="font-semibold text-gray-800">{titulo}</h3>
      {descricao && <p className="text-gray-600 text-sm">{descricao}</p>}
      {responsavel && <p className="text-xs text-blue-600 mt-1">{responsavel}</p>}
    </div>
  );
}