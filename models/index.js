import query from "../db/index.js";

/**
 * This creates a new post
 * @param {} newPost new post object
 * @returns post with newly created id
 */

export async function createPost(newPost) {
  const result = await query(
    `INSERT INTO posts
    (username, projectgoal, projecttype, projecttools, collaborators)
    VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
    [
      newPost.username,
      newPost.projectgoal,
      newPost.projecttype,
      newPost.projecttools,
      newPost.collaborators,
    ]
  );
  const post = result.rows[0];
  return post;
}

/**
 * Queries and retrieves all entries from post database
 * @returns An array of post objects
 */

export async function getAllPosts() {
  const result = await query(`SELECT * FROM posts ORDER BY id DESC;`);
  const posts = result.rows;
  return posts;
}
