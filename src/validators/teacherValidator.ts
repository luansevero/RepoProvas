import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";
import * as teacherRepository from "../repositories/teacherRepository";

export async function findTeacher(name : string){
    const teacherId = await teacherRepository.findByName(name);
    if(!teacherId) throw new ErrorInfo("error_not_found", "That teacher doesn't exist");
    return teacherId["id"]
};
