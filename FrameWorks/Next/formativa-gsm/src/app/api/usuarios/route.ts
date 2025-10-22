// rotas de requisicao de api que nao usa id (get / post)

import { createUsuario, getAllUsuario } from "@/controllers/UsersController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const usuarios = await getAllUsuario(); //busca todos os usuario no BD
        return NextResponse.json({success:true, data: usuarios}); //retorna os usuários encontrados no BD
    } catch (error) {
        return NextResponse.json({success:false, error: error});
    }    
}

export async function POST(req:NextRequest){ //pega o conteudo do HTML(visual)
    try {
        const data = await req.json(); //converte o HTML para JSON
        const novoUsuario = await createUsuario(data); //cria um usuario no BD
        return NextResponse.json({success:true, data: novoUsuario}); //retorna os usuários encontrados no BD
    } catch (error) {
        return NextResponse.json({success:false, error: error});
    }
}