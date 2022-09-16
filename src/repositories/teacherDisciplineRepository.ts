import { prisma } from "../config/database";
import { TeacherDiscipline } from "@prisma/client";

type TFindUnique = Omit<TeacherDiscipline, "id" | "createAt">

export async function findByTeacherIdAndDisciplineId(teacherId_disciplineId : TFindUnique){
    return await prisma.teacherDiscipline.findUnique({
        where : {teacherId_disciplineId},
        select : {
            id : true
        }
    })
}