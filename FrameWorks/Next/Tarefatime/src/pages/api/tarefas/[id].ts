import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/db";
import Tarefa from "../../../models/Tarefa";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const tarefa = await Tarefa.findById(id);
        if (!tarefa) return res.status(404).json({ error: "Tarefa não encontrada" });
        return res.status(200).json(tarefa);
      } catch {
        return res.status(500).json({ error: "Erro ao buscar tarefa" });
      }

    case "PATCH":
      try {
        const atualizado = await Tarefa.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(atualizado);
      } catch {
        return res.status(500).json({ error: "Erro ao atualizar tarefa" });
      }

    case "DELETE":
      try {
        await Tarefa.findByIdAndDelete(id);
        return res.status(204).end();
      } catch {
        return res.status(500).json({ error: "Erro ao deletar tarefa" });
      }

    default:
      return res.status(405).json({ error: "Método não permitido" });
  }
}