import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import { ErrorInfo } from "./errorHandlerMiddleware";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, {abortEarly: false});
    if (validation.error) {
        const details = validation.error.details;
        const errors = details.map(details => {
            const erro = details.path[0];
            const message = details.message.split(" ").splice(1).join(" ");
            return {[erro]:message}
        })
      throw new ErrorInfo("error_unprocessable_entity", errors) 
    }
    next();
  };
}