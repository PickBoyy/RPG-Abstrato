import {D4,D8,D10,D20 } from '../../scripts/dices'
import {IArma} from './ModelosDeArmas'

 export interface IPersonagem {
    tipo : string;
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
    Vivo:boolean;
}



 export class Personagem implements IPersonagem{
    
    tipo: string;
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
    Arma:IArma;
    Vivo:boolean;
 


    constructor( 
    nomeDoJogador:string,
    nome:string,
    raca:string,
    classe:string,
    nivel:number,
    experiencia:number,
    //
    forca:number,
    destreza:number,
    constituicao:number,
    inteligencia:number,
    sabedoria:number,
    carisma:number,
    Arma:IArma
    //

    ){  this.tipo = "Personagem"
        this.nomeDoJogador = nomeDoJogador
        this.nome = nome
        this.raca = raca
        this.classe = classe
        this.nivel = nivel
        this.experiencia = experiencia
        //
        this.forca = forca
        this.destreza = destreza
        this.constituicao = constituicao
        this.inteligencia = inteligencia
        this.sabedoria = sabedoria
        this.carisma = carisma
        //
        this.modforca = CalcularModificador(forca)
        this.moddestreza = CalcularModificador(destreza)
        this.modconstituicao = CalcularModificador(constituicao)
        this.modinteligencia = CalcularModificador(inteligencia)
        this.modsabedoria = CalcularModificador(sabedoria)
        this.modcarisma = CalcularModificador(carisma)
        //
        this.PontosDeVida = this.vidaTotal()
        this.ClasseDeArmadura = 10 + this.moddestreza
        this.Arma = Arma
        this.Vivo = this.estaVivo()
    }
//------------------------------------------------------------------------------------------------------------------------
    estaVivo() {
        if(this.PontosDeVida > 0) {
            return true
        } else {
            return false
        }
    }
//------------------------------------------------------------------------------------------------------------------------
    
    vidaTotal() {
        if (this.classe == "barbaro") {
            return this.nivel * 12;
        }
        else if (this.classe == "bardo") {
            return this.nivel * 8;
        }
        else if (this.classe == "clerigo") {
            return this.nivel * 8;
        }
        else if (this.classe == "druid") {
            return this.nivel * 12;
        }
        else if (this.classe == "lutador") {
            return this.nivel * 10;
        }
        else {
            return this.nivel * 6;
        }
    }

}
function CalcularModificador(x:number){
    var resultado =  Math.floor((x -10) /2)
    return resultado
}
