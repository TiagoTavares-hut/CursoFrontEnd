import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb"

export const getAllOrdemServico = async() =>{
    await connectMongo(); 
    const ordensServico = await OrdemServico.find([]); 
    return ordensServico;
};

export const getOneOrdemServico = async(id:string) =>{
    await connectMongo(); 
    const ordemServico = await OrdemServico.findById(id); 
    return ordemServico;
};
export const createOrdemServico = async(data: Partial<IOrdemServico>) =>{
    await connectMongo();
    const novaOrdemServico = new OrdemServico(data); 
    const novaOrdemServicoId = novaOrdemServico.save();
    return novaOrdemServicoId; 
};
export const updateOrdemServico = async(id:string, data: Partial<IOrdemServico>) =>{
    await connectMongo();
    const ordemServicoAtualizado = await OrdemServico.findByIdAndUpdate
    (id, data, {new:true});
    return ordemServicoAtualizado; 
};
export const deleteOrdemServico = async(id: string) =>{
    await connectMongo();
    await OrdemServico.findByIdAndDelete(id);
};  



