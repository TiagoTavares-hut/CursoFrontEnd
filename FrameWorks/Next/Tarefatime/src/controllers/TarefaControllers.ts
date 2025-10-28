import Tarefa, { ITarefa } from "@/models/Tarefa";
import connectMongo from "@/service/mongodb";

//getAll
export const getAllTarefa = async() =>{
    await connectMongo();//estabelece conexão com o BD
    const tarefas = await Tarefa.find([]); //listar todos os usuários da coleção
    return tarefas;
}

//getOne
export const getOneTarefa = async(id:string) => {
    await connectMongo();
    const tarefa = await Tarefa.findById(id); //listar o Tarefa pelo ID
    return tarefa;
}

//create
export const createTarefa = async(data: Partial<ITarefa>) =>{
    await connectMongo();
    const novoTarefa = new Tarefa(data); //cria o usuário
    const novoTarefaId = novoTarefa.save(); //salva o usuário no BD
    return novoTarefaId;
}

//update
export const updateTarefa = async (id:string, data:Partial<ITarefa>) => {
    await connectMongo();
    const tarefaAtualizado = await Tarefa.findByIdAndUpdate(id, data, {new:true});
    return tarefaAtualizado;    
}

//delete
export const deleteTarefa = async (id:string) =>{
    await connectMongo();
    await Tarefa.findByIdAndDelete(id);
}