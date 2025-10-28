//rotas que não precisa passar o ID (GET e POST)

import { createProjeto, getAllProjetos } from "@/controllers/ProjetoControllers";
import { NextRequest, NextResponse } from "next/server";

export async  function GET() {
    try {
        const data = await getAllProjetos();
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false,error:error});  
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const newProjeto = await createProjeto(data);
        return NextResponse.json({success:true, data: newProjeto});
        } catch (error) {
            return NextResponse.json({success:false,error:error});
        }
}

