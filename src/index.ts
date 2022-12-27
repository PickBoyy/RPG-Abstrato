import  Express, { Router }  from "express"
import routes from "./routes/routes"
import connectToMongoDB from './config/database/databaseconfig'
import { savePerson } from "./test/testes2"
import cors from 'cors'

connectToMongoDB()
const app = Express()
app.use(express.json()) // Pedido pra q o express aceite "Json"
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST")
    app.use(cors())
    next()
})


app.use(routes)

app.use(Express.json()) // Pedido pra q o express aceite "Json"
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST")
    app.use(cors())
    next()
})

savePerson()

app.listen(3000, ()=>{
    console.log(`Rodando na porta 3000`)
})





export default app
