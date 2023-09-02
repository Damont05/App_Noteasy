import { Schema, model } from 'mongoose';

const noteSchema = Schema
(
    {
        title: {
            type : String,
            required: true,
            unique: true,
            trim: true
        },
        content:{
            type:String,
            default:"No Content",
            trim: true,
        },
        date:{
            type:String,
            //default: Date.now()
        },
        tags:{
            type:String,
            //index:true //for searching by tags in database
        }
    }
);

export default model('Note',noteSchema);
