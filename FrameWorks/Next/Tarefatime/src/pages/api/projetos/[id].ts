import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/db";
import Projeto from "../../../models/Projeto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const projeto = await Projeto.findById(id);
      return res.status(200).json(projeto);

    case "PATCH":
      const atualizado = await Projeto.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json(atualizado);

    case "DELETE":
      await Projeto.findByIdAndDelete(id);
      return res.status(204).end();

    default:
      return res.status(405).end();
  }
}