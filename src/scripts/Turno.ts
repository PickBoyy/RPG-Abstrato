//                                                 IMPORT'S!
//=====================================================================================================//

import {IPersonagem, Personagem} from '../Outros/ModelsTs/ModeloDePersonagem'
import { IMonstro,Monstro } from '../Outros/ModelsTs/ModeloDeMonstros';
import {Ataque} from  './ataque'
import { OrdemDeAtaque, Participante_iniciativa } from './TesteIniciativa';
//=====================================================================================================//
//////////////////////////////////////////////FUNÇÃO DE DUELO!/////////////////////////////////////////
//=====================================================================================================//

export function Turno(...Lutadores:IPersonagem[]|IMonstro[]) {
    var Ordem = OrdemDeAtaque(...Lutadores)
    var OrdemDeHerois = Ordem.filter(Participante=> Participante.tipo === "Personagem")
    var OrdemDeMonstros = Ordem.filter(Participante=> Participante.tipo === "Monstro")      
console.log('-------------------------------------------------------------------------------------------')
console.log('Iniciando o Duelo!')

let iHer1 = 0
let iMonst1 = 0 
let iMonst = 0 
let iHer = 0
let iOrd = 0         

while (OrdemDeHerois.length > 0 || OrdemDeMonstros.length > 0 )  {
//============================================================================//Verificando o tipo do lutador//========================
        if(Ordem[iOrd].tipo == 'Personagem') {
            console.log('------------------------------------------------------------')   //Se for um Personagem     
            Ataque(OrdemDeHerois[iHer1],OrdemDeMonstros[iMonst1])               //realizando ataque//=======================
            console.log('------------------------------------------------------------')
//------------------------------------------------------------------------------------------------------------------------
            if(OrdemDeMonstros[iMonst1].PontosDeVida <= 0){                    //Verificando se o alvo morreu no ataque
                console.log('-------------------------------------------------------------------------------------------')
                console.log(`${OrdemDeHerois[iHer1].nome} Derrotou ${OrdemDeMonstros[iMonst1].nome} !`)
                console.log('-------------------------------------------------------------------------------------------')
                delete OrdemDeMonstros[iMonst1]                               // se morreu deleta do array "DE MONSTROS"!
                OrdemDeMonstros = OrdemDeMonstros.filter((i)=>{return i})   // e filtra o falso valor
            } 

//------------------------------------------------------------------------------------------------------------------------//

            iOrd++
            iHer1++
            iMonst1++

            if(iHer1 >= OrdemDeHerois.length) {                 //Verificando se o indice ultrapassou o tamanho do array
                    iHer1 = 0                                      //Reiniciando a contagem caso tenha passado do ultimo
            }                                 
            if(iMonst1 >= OrdemDeMonstros.length) {            //Verificando se o indice ultrapassou o tamanho do array
                iMonst1 = 0                                        //Reiniciando a contagem caso tenha passado do ultimo
            }
            if(iOrd >= Ordem.length){
                    iOrd = 0 
            }
//------------------------------------------------------------------------------------------------------------------------//
             if(Ordem[iOrd].PontosDeVida <= 0) {                             // Verificando se o proximo da ordem está vivo          
                delete Ordem[iOrd]                                          // se estar morto deleta do array da "ORDEM"!
                Ordem = Ordem.filter((i)=>{return i})                       // E filtra o falso valor.
            }
                
            if(OrdemDeMonstros.length == 0) {
                console.log('Fim do Duelo')
                console.log(`A equipe de Herois saiu vitoriosa!`)

                break
            } else {
                console.log('--------------------------------------------------------------------------------') 
                console.log(`Proximo Ataque...`)       //Depois de todas a verificações se encerra a vez do atacante.
                console.log('--------------------------------------------------------------------------------') 
            } 
            

//=========================================================================================================================// 

        }else if(Ordem[iOrd].tipo == 'Monstro') {  
            console.log('------------------------------------------------------------')//Verificando o tipo 
            Ataque(OrdemDeMonstros[iMonst],OrdemDeHerois[iHer])             //Se for um Monstro 
            console.log('------------------------------------------------------------') //realiza o ataque
//------------------------------------------------------------------------------------------------------------------------//
            if(OrdemDeHerois[iHer].PontosDeVida <= 0){                      //Verificando se o alvo morreu no ataque
                console.log('-------------------------------------------------------------------------------------------')
                console.log(`${OrdemDeMonstros[iMonst].nome} Derrotou ${OrdemDeHerois[iHer].nome} !`)
                console.log('-------------------------------------------------------------------------------------------')
                
                delete OrdemDeHerois[iHer]                                  //se morreu deleta do array "DE HEROIS"!
                OrdemDeHerois = OrdemDeHerois.filter((i)=>{return i}) // e filtra o falso valor
            }

//------------------------------------------------------------------------------------------------------------------------//

            iOrd++
            iMonst++
            iHer++
            
        
            if(iMonst >= OrdemDeMonstros.length ) {                         //Verificando se o indice ultrapassou o tamanho do array
                iMonst = 0                                                      //Reiniciando a contagem caso tenha passado do ultimo
            }
            if(iHer >= OrdemDeHerois.length ) {                              //Verificando se o indice ultrapassou o tamanho do array
                iHer = 0                                                        //Reiniciando a contagem caso tenha passado do ultimo
            }
            if(iOrd >= Ordem.length){
                iOrd = 0
            }
//------------------------------------------------------------------------------------------------------------------------//
            if(Ordem[iOrd].PontosDeVida <= 0) {                             // Verificando se o proximo da ordem está vivo
                delete Ordem[iOrd]                                          // se estar morto deleta do array da "ORDEM"!
                Ordem = Ordem.filter((i)=>{return i})                       // E filtra o falso valor.
            } 

            if(OrdemDeHerois.length == 0) {
                console.log('Fim do Duelo')
                console.log(`Equipe de Monstros saiu vitoriosa!`)
                break
            } else {
                console.log('--------------------------------------------------------------------------------') 
                console.log(`Proximo Ataque...`)                          //Depois de todas a verificações se encerra a vez do atacante.
                console.log('--------------------------------------------------------------------------------')
            }    
    
        } else {
            console.log("ERRO!")
        }
      }  
      console.log(Ordem,OrdemDeHerois,OrdemDeMonstros)         
   }
