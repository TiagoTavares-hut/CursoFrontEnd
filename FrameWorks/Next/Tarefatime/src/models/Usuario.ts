import bcrypt from "bcryptjs";
import mongoose, { Document, Model } from "mongoose";
import { Schema } from "mongoose";

  
//class de modelagem de dados para Usuario

//atributos do Usuario
export interface IUsuario extends Document {
  _id: string;
  nome: string;
  email: string;
  senha?: string;
  funcao: string;
  compareSenha(senhaUsuario:string):Promise<boolean>;
}

//schema -> construtor 
const UsuarioSchema:Schema<IUsuario> = new Schema({
  nome: {type:String, required:true},
  email: {type:String, required:true, unique:true},
  senha: {type:String, required:true, select:false}, //select:false -> não retorna a senha nas consultas
  funcao: {type: String, enum:[
    "admin","gerente","membro"
  ], required:true}
});

//middleware para hashear a senha
// serve para hashear a senha antes de salvar no BD
UsuarioSchema.pre<IUsuario>('save', async function (next) { 
    // se a senha não foi modificada ou se esta nula
    if(!this.isModified('senha') || !this.senha) return next();
    try {
        //gema para criptografar a senha
        const salt = await bcrypt.genSalt(10);
        // faz a criptografia da senha a partir de senha
        this.senha = await bcrypt.hash(this.senha, salt);
        // salva a senha criptografada
        next();
    } catch (error:any) {
        next(error);
    }
    
})

// método para compara senhas
//quando faz o login ( compara a senha digita 
//e criptografada com a senha criptografa do banco)
UsuarioSchema.methods.compareSenha = 
function (senhaUsuario:string): Promise<boolean>{
    return bcrypt.compare(senhaUsuario,this.senha);
}


//toMap // FromMap

const Usuario: Model<IUsuario> = mongoose.models.User 
|| mongoose.model<IUsuario>("Usuario", UsuarioSchema);


export default Usuario;
