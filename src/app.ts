import express, { application } from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/moviesRouter.js";

dotenv.config()
const app = express();
app.use(express.json())
app.use(moviesRouter)


const port = +process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
})