import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { testSchema } from "../schemas/testSchema";
import * as testController from "../controllers/testController";

const testRouter = Router();

testRouter.post(
    "/test/create", 
    validateSchemaMiddleware(testSchema), 
    testController.create
);

export default testRouter;