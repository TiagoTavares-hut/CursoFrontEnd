// rotas de requisicao api que nao usa id (get / post)

import { createOrdemServico, getAllOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try{
        //requisicao HTTP -> é front -> request -> backend
        const ordensservico = await getAllOrdemServico();
        return NextResponse.json({success:true, data: ordensservico});
    }catch(error){
        return NextResponse.json({success:false, error});
    }
}

export async function POST(req:NextRequest){
    try{
        const data = await req.json();
        const ordensservico = await createOrdemServico(data);
        return NextResponse.json({success:true, data: ordensservico});
    }catch(error){
        return NextResponse.json({success:false, error});
    }
}
