import mongoose, { Schema } from "mongoose";


const tareaSchema = new Schema({
    tarea:{
        type: String,
        minLength:2,
        maxLength:50,
        required:true,
        unique: true
    }
},
    {
        timestamps:true
    }
);