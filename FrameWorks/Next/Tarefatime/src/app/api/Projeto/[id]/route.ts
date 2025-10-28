import { deleteProjeto, getOneProjeto, updateProjeto } from "@/controllers/ProjetoControllers";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id:string
}

//patch
export async function PATCH(req: NextRequest, {params}:{params:Parametro}){
    try {
        const {id} = params;
        const data = await req.json();
        const ProjetoAtualizado = await updateProjeto(id, data);
        if(!ProjetoAtualizado){
            return NextResponse.json({success:false, error: "Not Found"});
        }
        return NextResponse.json({success:true, data: ProjetoAtualizado});
    } catch (error) {
        return NextResponse.json({success:false,error:error}); 
    }
}

//GET(ONE)
export async function GET({params}:{params:Parametro}){
    try {
        const {id} = params;
        const data = await getOneProjeto(id);
        if(!data){
            return NextResponse.json({success:false, error: "Not Found"});
        }
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false,error:error});
    }
}

//DELETE
export async function DELETE({params}:{params:Parametro}){
    try {
        const {id} = params;
        await deleteProjeto(id);
        return NextResponse.json({success:true, data:{}});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}