// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Função principal do middleware
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Pega o cookie de autenticação (exemplo: "token")
  const token = req.cookies.get("token")?.value;

  // Se não estiver logado e tentar acessar uma rota protegida
  if (!token && url.pathname.startsWith("/dashboard")) {
    // Redireciona para a página de login
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Se estiver logado ou acessando rota pública, deixa seguir
  return NextResponse.next();
}

// Configuração de quais rotas o middleware deve interceptar
export const config = {
  matcher: [
    "/dashboard/:path*", // todas rotas que começam com /dashboard
    "/projetos/:path*",  // todas rotas que começam com /projetos
  ],
};