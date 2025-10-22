import { connectDB } from "@/lib/db";
import Tarefa from "@/models/Tarefa";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        const tarefas = await Tarefa.find();
        return res.status(200).json(tarefas);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar tarefas" });
      }
      
    case "POST":
      try {
        const novaTarefa = new Tarefa(req.body);
        await novaTarefa.save();
        return res.status(201).json(novaTarefa);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao criar tarefa" });
      }
    default:
      return res.status(405).json({ error: "Método não permitido" });
  }
}