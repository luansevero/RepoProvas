import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import * as schema from "../schemas/authSchema";
import * as authController from "../controllers/authController";

const authRouter = Router();

authRouter.post(
    "/signup", 
    validateSchemaMiddleware(schema.signup), 
    authController.signup
);

authRouter.post(
    "/signin", 
    validateSchemaMiddleware(schema.signin), 
    authController.signin
);

export default authRouter;