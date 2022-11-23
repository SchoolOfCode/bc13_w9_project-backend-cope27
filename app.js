import express from "express"
import morgan from "morgan"
import router from "./routes/posts.js" //need to create routes/posts.js
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

//put middleware here
app.use(morgan ("dev"));
//app.use(express.static("public"))
app.use(express.json());
//set main URL for end points

app.use(cors("*"));

app.use("/api/posts",router);

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
});