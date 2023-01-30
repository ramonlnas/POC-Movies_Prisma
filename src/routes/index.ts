import { Router } from "express";
import moviesRouter from "./moviesRouter.js";

const router = Router()

router.use(moviesRouter)

export default router