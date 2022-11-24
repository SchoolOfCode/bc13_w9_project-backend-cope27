// we will create this after we set up the database
import query from "../db/index.js"

/*
INSERT INTO posts
(userName, projectGoal, projectType, projectTools, collaborators)
VALUES
('Jimmy08','Lord of the Rings API', 'Build', 'React', 1);


INSERT INTO posts
(userName, projectGoal, projectType, projectTools, collaborators)
VALUES 
('Steph',
 'Build an API for helping people',
 'Build',
 'Express',
 4)
RETURNING *;


*/

// create function
    
export async function createPost(newPost){
    const result = await query(`INSERT INTO posts
    (username, projectgoal, projecttype, projecttools, collaborators)
    VALUES ($1,$2,$3,$4,$5) RETURNING *;`,[newPost.username, newPost.projectgoal, newPost.projecttype, newPost.projecttools, newPost.collaborators])
    const post = result.rows[0]
    console.log("createPost post: ", post)

    return post;
}


// read function 

export async function getAllPosts(){
    const result = await query (`SELECT * FROM posts ORDER BY id DESC;`)
    const posts = result.rows;
    return posts;

}
