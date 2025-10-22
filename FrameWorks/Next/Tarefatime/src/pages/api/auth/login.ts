// ARQUIVO: src/pages/api/auth/login.ts (CORRIGIDO)

import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
// 💡 NOTA: Mantenho o nome do seu modelo (Usuario), mas o padrão de mercado é 'User'.
import User from '@/models/Usuario'; 
import cookie from 'cookie'; 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  // 1. Conecta ao Banco de Dados
  try {
    await connectDB();
  } catch (error) {
    return res.status(500).json({ message: 'Falha ao conectar ao banco de dados.' });
  }

  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    // 2. Busca o usuário pelo email
    // O nome do modelo 'User' deve bater com o que está em '@/models/Usuario'
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    // 3. Compara a senha (usando o método do modelo com bcrypt)
    // 💡 IMPORTANTE: Este método (comparePassword) deve estar definido no seu modelo Mongoose.
    const isMatch = await user.comparePassword(senha);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    // 4. Gera o Token JWT (usando o método do modelo)
    // 💡 IMPORTANTE: Este método (generateAuthToken) deve estar definido no seu modelo Mongoose.
    const token = user.generateAuthToken();

    // 5. Define o token como um cookie HTTP-Only (Requisito de Segurança)
    // 🚨 CORREÇÃO PRINCIPAL: Uso de cookie.serialize com res.setHeader()
    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
      httpOnly: true, // Não acessível via JavaScript (segurança)
      secure: process.env.NODE_ENV !== 'development', // Somente HTTPS em produção
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 dia
      path: '/',
    }));

    // 6. Resposta de Sucesso
    res.status(200).json({ 
        success: true, 
        message: 'Login bem-sucedido!',
        user: { 
            id: user._id, 
            nome: user.nome, 
            funcao: user.funcao 
        } 
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}