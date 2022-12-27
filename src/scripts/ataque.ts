import * as dice from './dices'
import {IArma} from '../Outros/ModelsTs/ModelosDeArmas'
import {IPersonagem} from '../Outros/ModelsTs/ModeloDePersonagem'
import { IMonstro } from '../Outros/ModelsTs/ModeloDeMonstros'

export function Ataque(Atacante:IPersonagem|IMonstro, Alvo:IMonstro|IPersonagem):void {

    
    console.log(`${Atacante.nome} vai desferir um ataque em ${Alvo.nome}`)
    var d20 = dice.D20()
     var ataque = d20 + Atacante.modforca
    
    if(d20 == 20) {
        console.log('Acerto crítico!')
        var dano = Atacante.modforca + Atacante.Arma.dado + Atacante.Arma.dado + Atacante.modforca
        var vidaAtual = Alvo.PontosDeVida - dano  
        Alvo.PontosDeVida = vidaAtual
        console.log(`Ataque de ${Atacante.nome} causou ${dano} de dano`)
        console.log(`Pontos de vida de ${Alvo.nome} são ${Alvo.PontosDeVida}`)


    } else 
    if (d20 == 1) {
        console.log('Falha crítica!')


    } else 
    if (ataque >= Alvo.ClasseDeArmadura) {

        console.log(`${Atacante.nome} tirou ${ataque}`)
        console.log('Ataque bem sucecido')

        var dano = Atacante.Arma.dado + Atacante.modforca
        var vidaAtual = Alvo.PontosDeVida - dano 
        Alvo.PontosDeVida = vidaAtual
        console.log(`Ataque de ${Atacante.nome} causou ${dano} de dano`)
        console.log(`Pontos de vida de ${Alvo.nome} são ${Alvo.PontosDeVida}`)
        

       
    } else {
        console.log(`${Atacante.nome} tirou ${ataque}`)

        console.log('Ataque falhou!')
    }
}
