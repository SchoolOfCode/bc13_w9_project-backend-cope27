import express from "express";
import { createPost, getAllPosts } from "../models/index.js";
const router = express.Router();

/**
 * Create POSTrouter which takes in a post object in the body of the request.
 *
 * The object should have this structure:
 *
 *   {
 *   "username": "Steph",
 *   "projectgoal": "Build an API for helping people",
 *   "projecttype": "Build",
 *   "projecttools": "Express",
 *   "collaborators": "4"
 *   }
 *
 * If successful, returns an object with status of 201, and body with success as true and a payload of the successfully created object with a unique ID
 */

router.post("/", async (req, res) => {
  const newPostInfo = req.body;
  const newPost = await createPost(newPostInfo);
  res.status(201).json({ success: true, payload: newPost });
});

/**
 * GET route which reads all the database entries in the posts table and returns these with a 200 request status and a body which consists of success: true
 * and a payload which is an array of post objects
 */

router.get("/", async (req, res) => {
  const allPosts = await getAllPosts();
  res.json({ success: true, payload: allPosts });
});

// TODO: Update

// TODO: Delete

export default router;
