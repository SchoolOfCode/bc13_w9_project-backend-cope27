import express from "express"
import { createPost, getAllPosts } from "../models/index.js"
const router = express.Router()

//import functions from models
/*
{
        'userName': 'Steph',
        'projectGoal': 'Build an API for helping people',
        'projectType': 'Build',
        'projectTools': 'Express',
        'collaborators': '4'
    },

    {
    "userName": "Steph",
    "projectGoal": "Build an API for helping people",
    "projectType": "Build",
    "projectTools": "Express",
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