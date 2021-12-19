import { Router } from "express";
import { cityController } from "../controllers/city.controller";
import { stateController } from "../controllers/state.controller";

const statesRouter = Router()

statesRouter.get('/', stateController.findAll)
statesRouter.get('/:ufCode', stateController.findOne)

export { statesRouter }