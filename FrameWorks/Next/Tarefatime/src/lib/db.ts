// ARQUIVO: src/lib/db.ts

import mongoose, { Mongoose } from 'mongoose';


// Definição de Tipos Globais para Cache

// Define a estrutura que armazenará a conexão em cache no objeto global do Node.js
declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  }
}


// Busca a URI de conexão (dá preferência para MONGODB_URI, mas aceita DATABASE_URL)
const URI = process.env.MONGODB_URI || process.env.DATABASE_URL;

if (!URI) {
  // Garante que a variável foi definida
  throw new Error('Por favor, defina a variável MONGODB_URI ou DATABASE_URL em .env.local');
}

// Inicializa ou reutiliza o cache global
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB(): Promise<Mongoose> {
  // Se já houver uma conexão estabelecida (conn), retorna ela imediatamente.
  if (cached.conn) {
    return cached.conn;
  }

  // Se houver uma promessa de conexão em andamento, espera por ela.
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Otimização para Next.js/Serverless
      // Evita warnings de métodos deprecated
      // useNewUrlParser: true, 
      // useUnifiedTopology: true, 
    };

    // Inicia a promessa de conexão
    cached.promise = mongoose.connect(URI!, opts);
  }

  try {
    // Aguarda a promessa e armazena a conexão estabelecida.
    cached.conn = await cached.promise;
  } catch (e) {
    // Se a conexão falhar, reseta a promessa para tentar novamente na próxima chamada.
    cached.promise = null;
    console.error("Falha ao conectar ao MongoDB:", e);
    throw e;
  }

  return cached.conn;
}