/**
 * The above code includes functions for creating a session with a unique ID and retrieving sessions
 * from a database.
 * @param req - `req` is the request object, which contains information about the HTTP request made by
 * the client to the server. It includes details such as the request headers, parameters, body, URL,
 * and more. In the provided code snippets, `req` is used to access parameters sent in the request,
 * @param res - The `res` parameter in the functions `httpPostSession` and `httpGetSession` stands for
 * the response object in Express.js. It is used to send a response back to the client making the HTTP
 * request. The response object has methods like `res.status()` to set the HTTP status code
 * @returns The code provided includes two functions for handling HTTP requests related to creating and
 * retrieving sessions.
 */
import LiveSession from '../models/liveSessionSchema.js'
import { v4 as uuidv4 } from 'uuid'

// a post request for creating a session
export async function httpPostSession(req, res) {
    try {
        // create a uniqueId
        const uniqueId = uuidv4()
        const userurl = `http://localhost:5173/session/${uniqueId}`;

        // create a session
        const session = await LiveSession.create({
            type: 'admin',
            unique_id: uniqueId,
            userurl
        })

        // if sessions is not created
        if (!session) {
            return res.status(400).json({
                message: "Failed to create the session",
                success: false,
            })
        }

        res.status(201).json({
            message: "Successfully created the session",
            success: true,
            session: session
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
}


// a fuction to get the sessions from the database
export async function httpGetSession(req, res) {
    try {
        const uniqueId = req.params?.id

        // find if the session exists in the db or not
        const isSessionExists = await LiveSession.findOne({unique_id:uniqueId})

        // if the session doesnt exists
        if(!isSessionExists){
            return res.status(404).json({
                message:"Session doesnt exists",
                success:false
            })
        }

        // if the session exists
        res.status(200).json({
            message:'Successfull found the session',
            success:true,
            session:isSessionExists
        })

    } catch (error) {
        res.status(500).json({
            message: err.message,
            success: false
        });
    }
}
