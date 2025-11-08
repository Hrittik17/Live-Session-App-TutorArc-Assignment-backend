import http from 'http';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import sessionRouter from './routes/sessionRoutes.js';

dotenv.config();

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PATCH','DELETE']
}))

app.use(sessionRouter)

// error handling middlewares
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).json({
        message:"Something went wrong"
    })
})

// customs events for the mongoose connections 
mongoose.connection.once('open',()=>{
    console.log('Mongoose connection is ready')
})

mongoose.connection.on('error',(error)=>{
    console.error("Something went wrong when connecting to the database : ", error)
})

// a function to connect the database and start the server
async function startServer(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        server.listen(PORT,()=>{
            console.log(`Server is listening at ${PORT}`)
        })
    }catch(error){
        console.error('Something went wrong :',error)
    }
}


startServer()