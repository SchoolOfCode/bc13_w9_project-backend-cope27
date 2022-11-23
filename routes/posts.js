import express from "express"
//import { getAllPosts } from "../models/index.js"
const router = express.Router()

//import functions from models

// Create *

// Read *
router.get("/", async (req,res)=>{
    // run get posts function and assign that to a variable
    //const allPosts = await getAllPosts();
    res.json({success: true, payload: allPosts})

})
// Update

// Delete







export default router 