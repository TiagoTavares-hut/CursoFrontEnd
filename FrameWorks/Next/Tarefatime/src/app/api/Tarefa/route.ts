//rotas que não precisa passar o ID (GET e POST)

import { createTarefa, getAllTarefa } from "@/controllers/TarefaControllers";
import { NextRequest, NextResponse } from "next/server";



export async function GET(){

    try {
        const data = await getAllTarefa();//chama o controlador
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false,error:error});        
    }
}

export async function POST(req: NextRequest) { //req são os dados que estou enviando

    try {
        const data = await req.json();
        const newTarefa = await createTarefa(data);
        return NextResponse.json({success:true, data: newTarefa});
    } catch (error) {
        return NextResponse.json({success:false,error:error}); 
    }
}
