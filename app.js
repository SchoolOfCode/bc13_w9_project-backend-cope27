import express from "express";
import morgan from "morgan";
import router from "./routes/posts.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Place for middleware for CORS handling, logger and json body reader
 */
app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.json());

/**
 * Set up final endpoint for router
 */
app.use("/api/posts", router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;
