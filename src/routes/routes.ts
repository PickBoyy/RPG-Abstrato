//============================|(IMPORT'S)|=====================================//
import { Router } from "express"
import express, { Request, Response }  from "express";
import * as characterController from '../Controllers/characterControllers'
import multer from "multer";
//============================|(Const's)|=====================================//
const upload = multer()
const routes = Router()
export const Deus = "Sr.PickBoyy"
//============================|(Rota raiz)|=====================================//
routes.get('/',(req:Request, res:Response) =>{
    res.json({message:`Seja bem vindo novamente ${Deus}`})
})
//============================|(Rotas)|=====================================//
routes.get('/personagens', characterController.getAllCharacters);
routes.post('/create', upload.none(), characterController.newCharacter);
routes.delete('/deleteall', characterController.deleteAllCharacter);

 routes.get('/personagem/:nome', characterController.getOneCharacter);
 routes.delete('/delete/:nome', characterController.deleteOneCharacter);
//  routes.put('/personagem/:nome', controllerRoutes.updateCharacter);

//--------------------------------------------------------------------------//
export default routes     // exportando rotas por padrão.
