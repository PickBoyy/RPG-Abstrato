import {D4,D8,D10,D20 } from '../scripts/dados'
import {IArma} from '../ModelsTs/ModelosDeArmas'
import mongoose from 'mongoose'

export interface IPersonagem {
    nomeDoJogador:string;
    nome:string;
    raca:string;
    classe:string;
    nivel:number;
    experiencia:number;
    //
    forca:number;
    destreza:number;
    constituicao:number;
    inteligencia:number;
    sabedoria:number;
    carisma:number;
    //
    modforca:number;
    moddestreza:number;
    modconstituicao:number;
    modinteligencia:number;
    modsabedoria:number;
    modcarisma:number;
    //
    PontosDeVida:number;
    ClasseDeArmadura:number;
    Arma: IArma;
}

const personagemSchema = new mongoose.Schema<IPersonagem>({
    
    nomeDoJogador: {
        type: String,
        required:true
    },
    nome: {
        type: String,
        required:true,
        unique: true
    },
    raca: {
        type: String,
        required:true
    },
    classe: {
        type: String,
        required:true
    },
    nivel: {
        type: Number,
        required:true
    },
    experiencia: {
        type: Number,
        required:true
    },
    // 
    forca: {
        type: Number,
        required:true
    },
    destreza: {
        type: Number,
        required:true
    },
    constituicao: {
        type: Number,
        required:true
    },
    inteligencia: {
        type: Number,
        required:true
    },
    sabedoria: {
        type: Number,
        required:true
    },
    carisma: {
        type: Number,
        required:true
    },
    //
    modforca: {
        type: Number,
        required:true
    },
    moddestreza: {
        type: Number,
        required:true
    },
    modconstituicao: {
        type: Number,
        required:true
    },
    modinteligencia: {
        type: Number,
        required:true
    },
    modsabedoria: {
        type: Number,
        required:true
    },
    modcarisma: {
        type: Number,
        required:true
    },
    //
    PontosDeVida: {
        type: Number,
        required:true
    },
    ClasseDeArmadura: {
        type: Number,
        required:true
    }
});

personagemSchema.pre('save',function(next) {
    if (this.classe == "barbaro") {
        this.PontosDeVida = 12;
    }
    else if (this.classe == "bardo") {
        this.PontosDeVida = 8;
    }
    else if (this.classe == "clerigo") {
        this.PontosDeVida = 8;
    }
    else if (this.classe == "druid") {
        this.PontosDeVida = 12;
    }
    else if (this.classe == "lutador") {
        this.PontosDeVida = 10;
    }
    else {
        this.PontosDeVida = 6;
    }
    next()
})

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
     var classeDeArmadura = 10 + this.moddestreza
     this.ClasseDeArmadura = classeDeArmadura
     next()
})


const Personagem = mongoose.model <IPersonagem>('Personagem',personagemSchema);

export default Personagem