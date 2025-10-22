// //Rotas que PRecisam do ID (PATCH ou PUT, DELETE, GET(one))

import { deleteProject, getOneProject, updateProject } from "@/controllers/ProjectsController";
import { NextRequest, NextResponse } from "next/server";

//criar uma interface, PArametro ==id:string
interface Parametro{
    id:string;
}

//PATCH
export async function PATCH(req: NextRequest, {params}:{params:Parametro}){
    try {
        const {id} = params;
        const data = await req.json();
        const projetoAtualizado = await updateProject(id, data);
        //quando o usuário não foi encontrado
        if(!projetoAtualizado){
            return NextResponse.json({success:false, error:"Not Found"});
        }
        //usuraio foi encontrado e atualizado
        return NextResponse.json({success:true, data: projetoAtualizado});
    } catch (error) {
        //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error});
    }
}

// GET(One)
export async function GET(req: NextRequest, { params }: { params: Parametro }) {
    try {
        const project = await getOneProject(params.id);
        if (!project) {
            return NextResponse.json({ success: false, error: "Projeto não encontrado" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: project });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

//DELETE
export async function DELETE(req: NextRequest, { params }: { params: Parametro }) {
    try {
        await deleteProject(params.id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}