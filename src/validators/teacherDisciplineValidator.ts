import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";
import * as teacher_disciplineRepository from "../repositories/teacherDisciplineRepository";
import { TeacherDiscipline } from "@prisma/client";

export type TFindUnique = Omit<TeacherDiscipline, "id" | "createAt">

export async function findTeacherDiscipline(teacherId_disciplineId : TFindUnique){
    const teacherDisciplineId = await teacher_disciplineRepository.findByTeacherIdAndDisciplineId(teacherId_disciplineId);
    if(!teacherDisciplineId) throw new ErrorInfo("error_not_found", "That teacher don't teach that descipline");
    return teacherDisciplineId["id"]
};
