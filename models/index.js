// we will create this after we set up the database
import query from "../db/index.js"

/*
INSERT INTO posts
(userName, projectGoal, projectType, projectTools, collaborators)
VALUES
('Jimmy08','Lord of the Rings API', 'Build', 'React', 1);
*/

// create function
    
export async function createPost(newPost){
    const result = await query(`INSERT INTO posts
    (userName, projectGoal, projectType, projectTools, collaborators)
    VALUES ($1,$2,$3,$4,$5) RETURNING *;`,[newPost.userName, newPost.projectGoal, newPost.projectType, newPost.projectTools, newPost.collaborators])
    const post = result.rows[0]
    console.log("createPost post: ", post)

    return post;
}


// read function 

export async function getAllPosts(){
    const result = await query (`SELECT * FROM posts;`)
    const posts = result.rows;
    return posts;

}
