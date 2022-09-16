import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";
import * as categoryRepository from "../repositories/categoryRepository";

export async function findCategory(name : string){
    const categoryId = await categoryRepository.findByName(name);
    if(!categoryId) throw new ErrorInfo("error_not_found", "That category doesn't exist");
};
