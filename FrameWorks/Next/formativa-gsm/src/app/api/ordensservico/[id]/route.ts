//Rotas que PRecisam do ID (PATCH ou PUT, DELETE, GET(one))

import { deleteOrdemServico, getOneOrdemServico, updateOrdemServico } from "@/controllers/OrdemServicoController";
import { NextResponse } from "next/server";

interface OrdenServico{
    id: string;
}

//Patch
export async function PATCH(req: Request, {params}: {params: OrdenServico}){
    try {
        const {id} = params;
        const data = await req.json();
        const ordemServicoAtualizado = await updateOrdemServico(id, data);
        //quando o usuário não foi encontrado
        if(!ordemServicoAtualizado){
            return NextResponse.json({success:false, error:"Not Found"});
        }
        //usuraio foi encontrado e atualizado
        return NextResponse.json({success:true, data: ordemServicoAtualizado});
    } catch (error) {
        //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error})
    }
}

// GET(One)
export async function GET({params}:{params:OrdenServico}){
    try{
        const {id} = params;
        const ordemServico = await getOneOrdemServico(id);
        if(!ordemServico){
            return NextResponse.json({success:false, error:"Not Found"});
        }
        //usuario foi encontrado e atualizado
        return NextResponse.json({success:true, data: ordemServico});
    } catch (error) {
        //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error})
    }   
}


//delete
export async function DELETE({params}:{params:OrdenServico}) {
    try {
        const {id} = params;
        await deleteOrdemServico(id);
        return NextResponse.json({success:true});
    } catch (error) {
        //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error})
    }   
}
