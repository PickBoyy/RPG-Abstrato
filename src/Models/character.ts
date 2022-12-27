import {IArma} from '../Outros/ModelsTs/ModelosDeArmas'
import mongoose from 'mongoose'

export interface ICharacter {
    playerName:string;
    name:string;
    race:string;
    class:string;
    level:number;
    experience:number;
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
    weapon?: IArma | null
}

const characterSchema = new mongoose.Schema<ICharacter>({
    
    playerName: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true,
        unique: true
    },
    race: {
        type: String,
        required:true
    },
    class: {
        type: String,
        required:true
    },
    level: {
        type: Number,
        required:true
    },
    experience: {
        type: Number,
        required:true
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
    weapon:{
        type:Object
    }
});
characterSchema.pre('save',function(next){
    if(this.race == "Anão"){
        this.constitution == +2
    }
})

characterSchema.pre('save',function(next) {
    if (this.class == "barbarian") {
        this.hit_points = this.level * 12;
    }
    else if (this.class == "bard") {
       this.hit_points = this.level * 8;
    }
    else if (this.class == "cleric") {
       this.hit_points = this.level * 8;
    }
    else if (this.class == "druid") {
       this.hit_points = this.level * 8;
    }
    else if (this.class == "fighter") {
       this.hit_points = this.level * 10;
    }
    else if (this.class == "monk") {
        this.hit_points = this.level * 8;
    }
    else if (this.class == "paladin") {
       this.hit_points = this.level * 10;
    }
    else if (this.class == "ranger") {
        this.hit_points = this.level * 10;
    }
    else if (this.class == "rogue") {
        this.hit_points = this.level * 8;
    }
    else if (this.class == "sorcerer") {
        this.hit_points = this.level * 6;
    }
    else if (this.class == "warlock"){
       this.hit_points = this.level * 8;
    }
    else if (this.class == "wizard"){
        this.hit_points = this.level * 6;
    }
    next()
})

/* 
Não faz sentido salvar isso no banco de dados.

personagemSchema.pre('save',function(next) {
//------------------------------------------------------------------------
    var modforca =  Math.floor(( this.forca -10) /2)
    this.modforca = modforca
//------------------------------------------------------------------------
    var moddestreza =  Math.floor(( this.destreza -10) /2)
    this.moddestreza = moddestreza
//------------------------------------------------------------------------
    var modconstituicao =  Math.floor(( this.constituicao -10) /2)
    this.modconstituicao = modconstituicao
//------------------------------------------------------------------------
    var modinteligencia =  Math.floor(( this.inteligencia -10) /2)
    this.modinteligencia = modinteligencia
//------------------------------------------------------------------------
    var modsabedoria =  Math.floor(( this.sabedoria -10) /2)
    this.modsabedoria = modsabedoria
//------------------------------------------------------------------------
    var modcarisma =  Math.floor(( this.carisma -10) /2)
    this.modcarisma = modcarisma
//------------------------------------------------------------------------
    next()
}) 

personagemSchema.pre('save',function(next){
      this.armor_class = 10 + this.moddestreza
     next()
})
*/

const Character = mongoose.model <ICharacter>('Character',characterSchema);

export default Character
