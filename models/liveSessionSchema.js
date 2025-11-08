/* This code snippet is written in JavaScript and it defines a Mongoose schema for storing live
sessions. Here's a breakdown of what each part of the code is doing: */

import mongoose from "mongoose";

// a mongoose schema for live sessions storage

const liveSessionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["admin", "student"],
        required: true
    },
    unique_id: {
        type: String,
        required: true,
        unique: true
    },
    userurl: {
        type: String,
        required: true
    }
},{timestamps:true})


// exporting the model 
export default mongoose.model('LiveSession',liveSessionSchema);