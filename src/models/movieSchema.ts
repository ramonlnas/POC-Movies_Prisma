import joi from "joi";
import { MovieInput, MovieEntity } from "../protocols/movies.js";

export const movieSchema = joi.object<MovieInput>({
  movie: joi.string().required(),
  gender: joi.string().required()
});
