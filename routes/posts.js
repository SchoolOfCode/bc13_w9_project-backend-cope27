import express from "express"
import { createPost, getAllPosts } from "../models/index.js"
const router = express.Router()
// import supertest from 'supertest';
// import { test, describe, expect, beforeEach, afterAll, beforeAll, afterEach } from '@jest/globals'

//import functions from models
/*

    {
    "username": "Steph",
    "projectgoal": "Build an API for helping people",
    "projecttype": "Build",
    "projecttools": "Express",
    "collaborators": "4"
}
*/
// Create *
router.post("/", async (req,res)=>{
    const newPostInfo = req.body;

    console.log("newPostInfo: ", newPostInfo)

    const newPost = await createPost(newPostInfo);
    res.json({success: true, payload: newPost});
})

// Read *
router.get("/", async (req,res)=>{
    // run get posts function and assign that to a variable
    const allPosts = await getAllPosts();
    res.json({success: true, payload: allPosts});

})
// Update

// Delete



export default router 