import Character from '../Models/character'
import { EspadaLonga,Machado } from '../repositorios/RespositorioDeArmas/Armas'

const Emilly = new Character ({
    playerName:'Emilly',
    name:'Emy',
    race:'humano',
    class:'barbaro',
    level:1,
    experience:0,
    strength:15,
    dextery:16,
    constitution:14,
    intelligence: 6,
    wisdom: 5,
    charisma:10,
    weapon:Machado}) 
 
export async function savePerson(){
    try{
       await Emilly.save()
       console.log('Salvo com sucesso!')
    }catch(err){console.log(err)}
}
    