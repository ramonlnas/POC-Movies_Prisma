import { MovieInput } from "../protocols/movies";
import movieRepository from "../repository/movieRepository.js";

async function createMovie(movie: MovieInput){
    const filmExist = await movieRepository.verifyMovie(movie.movie) 

    if(filmExist) {
        return null
    }

    await movieRepository.createMovie(movie)
}

async function getMovies() {
    const movies = await movieRepository.getMovies()

    return movies
}

async function getMovie(movieId: number) {
    const movie = await movieRepository.getMovie(movieId);
    if (!movie) {
      return null
    }
  
    return movie;
  }
  

async function updateMovie(movieId: number, movie: MovieInput) {
    await getMovie(movieId)
    await movieRepository.updateMovie(movieId, movie)
}

async function deleteMovie(movieId: number) {
    await getMovie(movieId);
    await movieRepository.deleteMovie(movieId);
  }
  

const movieService = {
    createMovie,
    getMovies,
    updateMovie,
    getMovie,
    deleteMovie
}

export default movieService