import { Router } from "express";
import { cityController } from "../controllers/city.controller";

const citiesRouter = Router()

citiesRouter.get('/', cityController.findOneByCordinates)
citiesRouter.get('/:ufCode', cityController.findAllByUF)

export { citiesRouter }