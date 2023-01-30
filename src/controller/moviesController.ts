import { Request, Response } from "express";
import prisma from "../db/database.js";
import { MovieInput } from "../protocols/movies.js";
import movieService from "../services/moviesService.js";

async function postMovie(req: Request, res: Response) {
  const movie = req.body as MovieInput;

  try {
    await movieService.createMovie(movie);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getMovies(req: Request, res: Response) {
  try {
    const movies = await movieService.getMovies();
    res.status(201).send(movies);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getMovie(req: Request, res: Response) {
  const { movieId } = req.params;

  try {
    const movie = await movieService.getMovie(parseInt(movieId));
    res.send(movie);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function updateMovie(req: Request, res: Response) {
  const movie = req.body as MovieInput;
  const { movieId } = req.params;


  try {
    await movieService.updateMovie(parseInt(movieId), movie);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function deleteMovie (req: Request, res: Response) {
  const { movieId } = req.params;

  try {
    await prisma.films.delete({
      where: { id: parseInt(movieId) },
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const movieController = {
  postMovie,
  getMovies,
  updateMovie,
  getMovie,
  deleteMovie
}

export default movieController