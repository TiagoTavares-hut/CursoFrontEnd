// montar o schema da tabela

import mongoose from "mongoose";

//function para definir o schema
const TodoSchema = new mongoose.Schema({
    title: { type: String, 
        required: [true, "Title é obrigatório"],
        trim: true, //remove espaços desnecessários
        maxlength: [100, "Title deve ter no máximo 100char"]
    },

    completed: { type: Boolean,
        default: false,   // o padro é false
    },
    createdAt:{
        type: Date,
        default: Date.now, //registra a Data atual
    }

});

export default TodoSchema;