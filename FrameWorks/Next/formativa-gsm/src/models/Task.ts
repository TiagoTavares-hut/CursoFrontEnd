//classe para Projects

import mongoose, { Document, Model, Schema } from "mongoose";

// atributos da classe
export interface ITask extends Document {
  _id: string;
  titulo: string;
  descricao?: string;
  status: "A Fazer" | "Em Andamento" | "Concluído";
  projetoId: string;
  responsavelId?: string;
  criadoEm: Date;
  concluidoEm?: Date;
}

//Schema da Classe ( Construtor)
const TaskSchema: Schema<ITask> = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  status: { type: String, enum: ["A Fazer", "Em Andamento", "Concluído"], default: "A Fazer" },
  projetoId: { type: String, required: true },
  responsavelId: { type: String },
  criadoEm: { type: Date, default: Date.now },
  concluidoEm: { type: Date },
});

// fromMap toMap
const Task: Model<ITask> =
  mongoose.models.Task ||
  mongoose.model<ITask>("Task", TaskSchema);

export default Task;