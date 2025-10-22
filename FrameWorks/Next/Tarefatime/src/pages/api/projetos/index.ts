import { connectDB } from "@/lib/db";
import Projeto from "@/models/Projeto";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        const projetos = await Projeto.find();
        return res.status(200).json(projetos);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar projetos" });
      }

    case "POST":
      try {
        const novoProjeto = new Projeto(req.body);
        await novoProjeto.save();
        return res.status(201).json(novoProjeto);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao criar projeto" });
      }

    default:
      return res.status(405).json({ error: "Método não permitido" });
  }
}
