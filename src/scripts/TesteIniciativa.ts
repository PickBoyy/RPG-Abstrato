import { D20 } from './dices';
import {IPersonagem, Personagem} from '../Outros/ModelsTs/ModeloDePersonagem'
import { IMonstro,Monstro } from '../Outros/ModelsTs/ModeloDeMonstros';
import {Ataque} from  './ataque'
//----------------------------------------------------------------
export interface IParticipante_iniciativa{
    Participante:IPersonagem|IMonstro;
    Iniciativa?:number
}
export class Participante_iniciativa implements IParticipante_iniciativa{
    Participante: IPersonagem | IMonstro;
    iniciativa?:number
    constructor(Participante:IPersonagem|IMonstro){
        this.Participante = Participante
        this.iniciativa = D20() + Participante.moddestreza
    }
}
//----------------------------------------------------------------
export function OrdemDeAtaque(...Participantes:IPersonagem[]|IMonstro[]){
console.log('=============================================================================================//')
console.log(`Definindo ordem de ataque`)
console.log('=============================================================================================//')
    let arrayParticipantes_iniciativa = Participantes.map(
        function(Participante:IPersonagem|IMonstro){
            let  Participant_iniciativa = new Participante_iniciativa(Participante)
            console.log(`${Participant_iniciativa.Participante.nome} tirou ${Participant_iniciativa.iniciativa}`)
            return Participant_iniciativa
        }
        
    ) 

    var ordemdeataque = arrayParticipantes_iniciativa.sort(function(a,b){
        if(!a.iniciativa||!b.iniciativa){
            return NaN
        }else{
        if(a.iniciativa < b.iniciativa){
            return +1
        }else if(a.iniciativa > b.iniciativa){
            return -1
        }else{
            return 0
        }
        }

    })
    console.log('=============================================================================================//')
    console.log('Ordem de Ataque!')
    console.log('=============================================================================================//')
    let OrdemFinal = ordemdeataque.map(ordemdeataque => {
        console.log(`${ordemdeataque.Participante.nome}`)
        delete ordemdeataque.iniciativa
        return ordemdeataque.Participante
    })
    return OrdemFinal
}


