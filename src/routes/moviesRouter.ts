import { Router } from "express";
import movieController from "../controller/moviesController.js";
import joiMiddleware from "../middlewares/joiMiddleware.js";
const moviesRouter = Router()

moviesRouter.post("/movies", joiMiddleware, movieController.postMovie)
moviesRouter.get("/movies", movieController.getMovies)
moviesRouter.get("/movies/:movieId", movieController.getMovie)
moviesRouter.put("/movies/:movieId", movieController.updateMovie)
moviesRouter.delete("/movies/:movieId", movieController.deleteMovie)

export default moviesRouter