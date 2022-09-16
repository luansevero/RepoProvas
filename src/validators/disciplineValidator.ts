import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";
import * as disciplineRepository from "../repositories/disciplineRepository";

export async function findDiscipline(name : string){
    const disciplineId = await disciplineRepository.findByName(name);
    if(!disciplineId) throw new ErrorInfo("error_not_found", "That discipline doesn't exist");
    return disciplineId["id"]
};
