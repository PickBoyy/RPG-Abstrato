import {IArma} from '../Outros/ModelsTs/ModelosDeArmas'
import mongoose from 'mongoose'

export interface IMonster {
    name:string;
    size:string;
    type?:string
    //
    strength:number;
    dextery:number;
    constitution:number;
    intelligence:number;
    wisdom:number;
    charisma:number;
    //
    hit_points:number;
    armor_class:number;
    speed?:object
    challenge_rating:number
}

const monsterSchema = new mongoose.Schema<IMonster>({
    
    name: {
        type: String,
        required:true,
        unique: true
    },
    size: {
        type: String,
    },
    // 
    strength: {
        type: Number,
        required:true
    },
    dextery: {
        type: Number,
        required:true
    },
    constitution: {
        type: Number,
        required:true
    },
    intelligence: {
        type: Number,
        required:true
    },
    wisdom: {
        type: Number,
        required:true
    },
    charisma: {
        type: Number,
        required:true
    },
    //
    //
    hit_points: {
        type: Number,

    },
    armor_class: {
        type: Number,
    
    },
    speed:{
      type:Object
    },
    challenge_rating:{
      type:Number
    }


});

const Monster = mongoose.model <IMonster>('Monster',monsterSchema);

export default Monster