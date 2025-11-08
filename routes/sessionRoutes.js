/* This code snippet is setting up a router using the Express framework in a Node.js application. It
imports the necessary modules from the Express framework and a sessions controller file. It then
defines routes for handling HTTP GET and POST requests related to sessions. Finally, it exports the
sessionRouter for use in other parts of the application. */

import express from "express";
import { httpGetSession, httpPostSession } from "../controllers/sessionsControllers.js";

const sessionRouter = express.Router()

sessionRouter.get('/',(req,res)=> console.log('api is running'))
sessionRouter.post('/api/session',httpPostSession)
sessionRouter.get('/api/session/:id',httpGetSession)

export default sessionRouter
