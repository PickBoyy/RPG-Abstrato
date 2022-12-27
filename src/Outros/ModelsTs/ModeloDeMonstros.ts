import {D4,D8,D10,D20 } from '../../scripts/dices'
import {IArma} from './ModelosDeArmas'



 export interface IMonstro {
    tipo: string;
    nome: string;
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
    Vivo: boolean;
}

 export class Monstro implements IMonstro {
    tipo: string;
     nome:string;
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
    Vivo: boolean;
 


    constructor(  
    nome:string,
    //
    forca:number,
    destreza:number,
    constituicao:number,
    inteligencia:number,
    sabedoria:number,
    carisma:number,
    Arma:IArma
    //

    ){  this.tipo = "Monstro"
        this.nome = nome
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
        this.PontosDeVida = this.vidaMonstro()
        this.ClasseDeArmadura = this.armaduraMonstro()
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
        vidaMonstro() {
        if (this.nome == "esqueleto") {
            var d8 = D8()
            return 8 + d8 +2
        }
        else if (this.nome == "aranha gigante") {
             var d10 = D10()
            return d10 + d10 + d10 + d10+ 4
        }
        else if (this.nome == "lobo atroz") {
             var d10 = D10()
            return  d10 + d10 + d10 + d10 
        }
        else if (this.nome == "corvo") {
             var d4 = D4()
            return 1 + d4 - 1
        }
        else if (this.nome == "coruja") {
             var d4 = D4()
            return 1 + d4 - 1
        }
        else {
            var d8 = D8()
            return 3 + d8 - 2
        }    
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    armaduraMonstro() {
        if (this.nome == "esqueleto") {
            return 13
        }
        else {
            return 10
        }    
    }
//--------------------------------------------------------------------------------------------------------------------------------------------    
}

function CalcularModificador(x:number){
    var resultado =  Math.floor((x -10) /2)
    return resultado
}

