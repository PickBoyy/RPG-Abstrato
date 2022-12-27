import {D4,D8,D10,D20 } from '../../scripts/dices'

export interface IArma{
    nome:string;
    price:number;
    dado:number;
    tipo:string;
}

export class Arma implements IArma{
    nome:string;
    price:number;
    dado: number;
    tipo:string;

    constructor(
        nome:string,
        price:number,
        tipo:string,
    ) {
        this.nome = nome
        this.price = price
        this.dado = D8()
        this.tipo = tipo

    }

}
