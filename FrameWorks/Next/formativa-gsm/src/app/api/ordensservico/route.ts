// rotas de requisicao api que nao usa id (get / post)

import { createTask, getAllTask } from "@/controllers/TasksController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try{
        //requisicao HTTP -> é front -> request -> backend
        const ordensservico = await getAllTask();
        return NextResponse.json({success:true, data: ordensservico});
    }catch(error){
        return NextResponse.json({success:false, error});
    }
}

export async function POST(req:NextRequest){
    try{
        const data = await req.json();
        const ordensservico = await createTask(data);
        return NextResponse.json({success:true, data: ordensservico});
    }catch(error){
        return NextResponse.json({success:false, error});
    }
}
