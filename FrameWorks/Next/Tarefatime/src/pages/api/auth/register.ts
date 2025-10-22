import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import User from '@/models/Usuario';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido.' });
  }

  // 1. Conecta ao Banco de Dados
  try {
    await connectDB();
  } catch (error) {
    return res.status(500).json({ message: 'Falha ao conectar ao banco de dados.' });
  }

  const { nome, email, senha, funcao } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
  }

  try {
    // 2. Verifica se o usuário já existe
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'Este email já está cadastrado.' });
    }

    // 3. Cria um novo usuário
    // O Mongoose model User já aplica o hash na senha via middleware 'pre("save")'
    const novoUser = new User({
      nome,
      email,
      senha,
      // Define a função, se não for fornecida, o modelo User.ts usará 'Membro'
      funcao: funcao || 'Membro'
    });

    await novoUser.save();

    // 4. Resposta de Sucesso
    // Não é comum retornar o token no registro (pois o usuário ainda não logou)
    return res.status(201).json({
      success: true,
      message: 'Usuário registrado com sucesso!',
      user: {
        id: novoUser._id,
        nome: novoUser.nome,
        funcao: novoUser.funcao
      }
    });
  } catch (error) {
    console.error("Erro no registro:", error);
    return res.status(500).json({ message: 'Erro interno do servidor ao registrar usuário.' });
  }
}