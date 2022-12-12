import mongoose from "mongoose";
import "dotenv/config"

const mongoURI = process.env.MONGO_URI

export default async function connectToMongoDB(){
    if(mongoURI){
        await mongoose.connect(
            mongoURI,
        () => console.log('Conectado a base de dados'))
    } else{
        console.log('Base de dados não conectada')
    }
    console.log(mongoURI)
}

export const closeMongoDB = (): Promise<void> => mongoose.connection.close()
