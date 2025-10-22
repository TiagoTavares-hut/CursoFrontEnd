import mongoose, { Schema, Document } from 'mongoose';

// Status do Kanban
export type TaskStatus = 'A Fazer' | 'Em Andamento' | 'Concluído';

export interface ITarefa extends Document {
  titulo: string;
  descricao: string;
  status: TaskStatus;
  idProjeto: mongoose.Types.ObjectId; // Referência ao Projeto
  idResponsavel: mongoose.Types.ObjectId; // Referência ao Usuário Responsável
}

const TarefaSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['A Fazer', 'Em Andamento', 'Concluído'], 
    default: 'A Fazer' 
  },
  idProjeto: { 
    type: Schema.Types.ObjectId, 
    ref: 'Projeto', 
    required: true 
  },
  idResponsavel: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
}, { 
    timestamps: true 
});

const Tarefa = (mongoose.models.Tarefa || mongoose.model<ITarefa>('Tarefa', TarefaSchema));
export default Tarefa as mongoose.Model<ITarefa>;