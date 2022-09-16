import { prisma } from "../config/database";
import { TFindUnique } from "../validators/teacherDisciplineValidator";

export async function findByTeacherIdAndDisciplineId(teacherId_disciplineId : TFindUnique){
    return await prisma.teacherDiscipline.findUnique({
        where : {teacherId_disciplineId},
        select : {
            id : true
        }
    })
}