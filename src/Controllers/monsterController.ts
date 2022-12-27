import {Request,Response } from "express"
import Monster, { IMonster } from "../Models/monster";
//------------------------------------------------------------------------------------//
//========================|Pegar todos os Personagens do banco|===========================================//
export const getAllCharacters = (req:Request, res:Response) => {
    Monster.find({}, (err:Error,data:IMonster) => {
        if(err) {                                                                   //aprovado!
            return res.json({Error:err});
        }
        return res.json(data)
    })
};
//------------------------------------------------------------------------------------//
//========================|Criar um novo personagem|===========================================//
export const newCharacter = (req:Request,res:Response) => {
Monster.findOne({nome: req.body.nome }, (err:Error, data:IMonster) => {
        if(!data) {
            const newPerson = new Monster(req.body)                                  //aprovado!
            newPerson.save((err,data) => {
                if(err) return res.json({Error: err});
                return res.json(Monster)
            })
        } else {
            if(err) return res.json(`Algo deu errado tente novamente ${err}`)
            return res.json({message:"Personagem já existe."})
        }
})
};
//------------------------------------------------------------------------------------//
//========================|!DELETAR TODOS OS PERSONAGENS!|===========================================//
export const deleteAllCharacter = (req:Request, res:Response) => {
    Monster.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Complete delete failed"});                    //aprovado!
        }
        return res.json({message: "Complete delete successful"});
    })
};
//------------------------------------------------------------------------------------//
//========================|Pegar uma pesonagem pelo nome|===========================================//
export const getOneCharacter = (req:Request, res:Response) => {
    let nome = req.params.nome; 

    Monster.findOne({nome:nome}, (err:Error, data:IMonster) => {             //aprovado!
    if(err || !data) {
        return res.json({message: "Personagem não existe."});
    }
    else {
    return res.json(data)
    } 
    });
};
//------------------------------------------------------------------------------------//
//========================|Deleta um personagem pelo nome|===========================================//
export const deleteOneCharacter = (req:Request, res:Response) => {
    const nome = req.params.nome

     Monster.deleteOne({nome:nome}, (err:Error, data:IMonster) => {

    if(!data) {
        return res.status(400).json({message: "Esse personagem não existe"});
    }
   
    else if (err) {
        return res.json(`Algum deu errado, tente novamente. ${err}`);
    }
    else {
        return res.json({message: "Personagem deletado com sucesso"});
    }
    });
};


//------------------------------------------------------------------------------------//

