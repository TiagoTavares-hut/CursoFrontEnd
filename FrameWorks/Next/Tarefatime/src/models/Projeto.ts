import mongoose, { Schema, Document } from 'mongoose';

export interface IProjeto extends Document {
  nome: string;
  descricao: string;
  idGerente: mongoose.Types.ObjectId; // Referência ao Usuário que gerencia o projeto
  dataCriacao: Date;
}

const ProjetoSchema: Schema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  idGerente: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
}, { 
    timestamps: { createdAt: 'dataCriacao', updatedAt: false } // Usa dataCriacao do diagrama
});

const Projeto = (mongoose.models.Projeto || mongoose.model<IProjeto>('Projeto', ProjetoSchema));
export default Projeto as mongoose.Model<IProjeto>;