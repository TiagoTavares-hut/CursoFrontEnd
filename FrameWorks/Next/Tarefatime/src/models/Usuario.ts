import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Funções baseadas no Diagrama de Caso de Uso: Membro, Gerente, Administrador
export type UserRole = 'Membro' | 'Gerente' | 'Administrador';

export interface IUser extends Document {
  nome: string;
  email: string;
  senha: string;
  funcao: UserRole;
  
  // Métodos
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateAuthToken(): string;
}

const UserSchema: Schema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  senha: { type: String, required: true },
  funcao: { 
    type: String, 
    enum: ['Membro', 'Gerente', 'Administrador'], 
    default: 'Membro' 
  },
}, { 
    timestamps: true 
});

// Middleware PRE-SAVE: Criptografia da Senha
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('senha')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

// Método: Comparar Senha
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.senha);
};

// Método: Gerar JWT
UserSchema.methods.generateAuthToken = function (): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET não está definido nas variáveis de ambiente.");
  }

  return jwt.sign(
    { _id: this._id, funcao: this.funcao, nome: this.nome },
    secret,
    { expiresIn: '1d' }
  );
};

const User = (mongoose.models.User || mongoose.model<IUser>('User', UserSchema));
export default User as mongoose.Model<IUser>;