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

testRouter.get(
    "/test/discipline",
    testController.getByDiscipline
);

testRouter.get(
    "/test/teacher",
    testController.getByTeacher
)

export default testRouter;