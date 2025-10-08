//class de modelagem de dados para Usuarios
//mongoose -> vai ajudar na modelagem da classe


import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

//atributos
export interface IUsuario extends Document{
    _id: string;
    nome: string;
    email: string;
    senha: string; //permite que a senha retorne nulo( nao retorna a senha para o client_side)
    funcao: string;
    compareSenha(senhaUsuario:string):Promise<boolean>; // ele vai comparar a senha com a que ta criptografada
    //devolve para o usuário apenas a booleana de comparação da senha
}

//costrutor (Schema)
const UsuarioSchema: Schema<IUsuario> = new Schema({
    nome: {type: String, required:true},
    email: {type: String, required:true},
    senha: {type: String, required:true},
    funcao: {
        type: String,
        enum: ["tecnico","gerente","admin"],
        required:true
    }
})

//criptografia
//metodo para comparar a senha antes de enviar para o BD
UsuarioSchema.pre<IUsuario>("save", async function (next) {
    if(!this.isModified('senha') || this.senha) return next; 
    // Se o campo senha não foi modificado, não preciso fazer nada — apenas siga em frente.
    try {
        const salt = await bcrypt.genSalt(10); //todos as senha o usam o mesmo padrão
        this.senha = await bcrypt.hash(this.senha,salt);
        next();
    } catch (error:any) {
        next(error);
    }
})

//metodo para comparer a senha antes de fazer o login
//quando o faz o login ( compara a senha digita e criptografada , com a senha criptografada
UsuarioSchema.methods.compareSenha = function (senhaUsuario:string):Promise<boolean>{
    return bcrypt.compare(senhaUsuario, this.senha);
}


//toMap <=> fromMap
const Usuario: Model<IUsuario> = mongoose.models.Usuario
    || mongoose.model<IUsuario>("Usuario", UsuarioSchema);


//componente reutilizavel
export default Usuario;