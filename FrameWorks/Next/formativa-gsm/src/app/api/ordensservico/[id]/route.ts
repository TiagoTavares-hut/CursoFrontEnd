//Rotas que PRecisam do ID (PATCH ou PUT, DELETE, GET(one))

import { deleteTask, getOneTask, updateTask } from "@/controllers/TasksController";
import { NextResponse } from "next/server";

interface Task{
    id: string;
}

//Patch
export async function PATCH(req: Request, {params}: {params: Task}){
    try {
        const {id} = params;
        const data = await req.json();
        const tasAtualizado = await updateTask(id, data);
        //quando o usuário não foi encontrado
        if(!tasAtualizado){
            return NextResponse.json({success:false, error:"Not Found"});
        }
        //usuario foi encontrado e atualizado
        return NextResponse.json({success:true, data: tasAtualizado});
    } catch (error) {
        //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error})
    }
}

// GET(One)
export async function GET({params}:{params:Task}){
    try{
        const {id} = params;
        const task = await getOneTask(id);
        if(!task){
            return NextResponse.json({success:false, error:"Not Found"});
        }
        //usuario foi encontrado e atualizado
        return NextResponse.json({success:true, data: task});
    } catch (error) {
        //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error})
    }   
}


//delete
export async function DELETE({params}:{params:Task}) {
    try {
        const {id} = params;
        await deleteTask(id);
        return NextResponse.json({success:true});
    } catch (error) {
        //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error})
    }   
}
