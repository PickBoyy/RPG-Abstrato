import {Request,Response } from "express"
import Character, { ICharacter } from "../Models/character";
//------------------------------------------------------------------------------------//
//========================|Pegar todos os Personagens do banco|===========================================//
export const getAllCharacters = (req:Request, res:Response) => {
    Character.find({}, (err:Error,data:ICharacter) => {
        if(err) {                                                                   //aprovado!
            return res.json({Error:err});
        }
        return res.json(data)
    })
};
//------------------------------------------------------------------------------------//
//========================|Criar um novo personagem|===========================================//
export const newCharacter = (req:Request,res:Response) => {
Character.findOne({nome: req.body.nome }, (err:Error, data:ICharacter) => {
        if(!data) {
            const newPerson = new Character(req.body)                                  //aprovado!
            newPerson.save((err,data) => {
                if(err) return res.json({Error: err});
                return res.json(Character)
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
    Character.deleteMany({}, err => {
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

    Character.findOne({nome:nome}, (err:Error, data:ICharacter) => {             //aprovado!
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

     Character.deleteOne({nome:nome}, (err:Error, data:ICharacter) => {

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

