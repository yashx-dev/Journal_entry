import  express, {type Express, type Request, type Response}  from "express";
const app: Express = express();
app.use(express.json());
const Port = process.env.PORT

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({message: "Server is running"})
})

app.listen(Port, ()=>{
 console.log(`Server is running on http://localhost:${Port}/`)
})