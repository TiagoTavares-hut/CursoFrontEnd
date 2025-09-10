

// Funçoes do Controller 

import Tarefa, { ITarefa } from "@/models/tarefa";
import connectMongo from "@/services/mongodb";

//get
export const getAllTarefas = async(): Promise<ITarefa[]> => {
    await connectMongo();
    const tarefas = Tarefa.find({});
    return tarefas;
}

//post
export const createTarefa = async (data: Partial<ITarefa>): Promise<ITarefa> => {
    await connectMongo();
    const tarefa = await Tarefa.create(data)
    return tarefa;
}

//put
                                                    //Partial - pode ser um pedaço do obj
export const updateTarefa = async(id: string, data: Partial<ITarefa>): Promise<ITarefa | null> =>{
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id, data,{
        new: true, runValidators: true
    });
    return tarefa;
}

//delete
export const deleteTarefa = async(id:string):Promise<boolean> =>{
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id: id});
    return resultado.deletedCount>0;
}