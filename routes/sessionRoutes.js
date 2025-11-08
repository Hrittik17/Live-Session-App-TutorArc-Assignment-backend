import express from "express";
import { httpGetSession, httpPostSession } from "../controllers/sessionsControllers.js";

const sessionRouter = express.Router()

sessionRouter.get('/',(req,res)=> console.log('api is running'))
sessionRouter.post('/api/session',httpPostSession)
sessionRouter.get('/api/session/:id',httpGetSession)

export default sessionRouter
