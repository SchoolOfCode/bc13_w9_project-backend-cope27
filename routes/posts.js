import express from "express"
const router = express.Router()

//import functions from models

// Create *

// Read *
router.get("/",(req,res)=>{
    // run get posts function and assign that to a variable
    res.json({success: true, payload:''})

})
// Update

// Delete







export default router 