import prisma from "../db/database.js";
import { MovieInput } from "../protocols/movies.js";

async function createMovie(movie: MovieInput) {
  await prisma.films.create({
    data: movie,
  });
}

async function verifyMovie(movie: string) {
  const data = await prisma.films.findFirst({
    where: { movie },
  });

  return data;
}

async function getMovies() {
  const movies = await prisma.films.findMany();

  return movies;
}

async function getMovie(movieId: number): Promise<MovieInput> {
  const movie = await prisma.films.findFirst({
    where: { id: movieId },
  });

  return movie;
}

async function updateMovie(movieId: number, movie: MovieInput) {
  await prisma.films.update({
    where: { id: movieId },
    data: movie,
  });
}

async function deleteMovie(movieId: number) {
  await prisma.films.delete({
    where: { id: movieId },
  });
}

const movieRepository = {
  createMovie,
  verifyMovie,
  getMovies,
  updateMovie,
  getMovie,
  deleteMovie
};

export default movieRepository;
