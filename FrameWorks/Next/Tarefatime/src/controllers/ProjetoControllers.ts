import Projeto, { IProjeto } from "@/models/Projeto"
import connectMongo from "@/service/mongodb"


//getAll
export const getAllProjetos = async () => {
    await connectMongo();
    const projetos = await Projeto.find([]);
    return projetos;
}

// getOne 
export const getOneProjeto = async (id: string) => {
    await connectMongo();
    const projeto = await Projeto.findById(id);
    return projeto;
}

//create
export const createProjeto = async(data: Partial<IProjeto>) =>{
    await connectMongo();
    const novoProjeto = new Projeto(data); //cria o projeto
    const novoProjetoId = novoProjeto.save(); //salva o projeto no BD
    return novoProjetoId;
}

//update
export const updateProjeto = async (id:string, data:Partial<IProjeto>) => {
    await connectMongo();
    const ProjetoAtualizado = await Projeto.findByIdAndUpdate(id, data, {new:true});
    return ProjetoAtualizado;    
}

//delete
export const deleteProjeto = async (id:string) =>{
    await connectMongo();
    await Projeto.findByIdAndDelete(id);
}