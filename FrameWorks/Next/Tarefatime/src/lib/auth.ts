import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const gerarToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
};

export const verificarToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch {
    return null;
  }
};

export const hashSenha = async (senha: string) => await bcrypt.hash(senha, 10);
export const compararSenha = async (senha: string, hash: string) => await bcrypt.compare(senha, hash);