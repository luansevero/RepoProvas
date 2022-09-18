import { prisma } from "../config/database";

export async function findByName(name : string){
    return await prisma.teacher.findUnique({
        where : {name},
        select : {
            id : true
        }
    })
}

export async function getAllTest() {
    return await prisma.teacher.findMany({
        select : {
            id : true,
            name : true,
            teacherDiscipline : {
            } 
        },
        orderBy : {
            name : "asc"
        }
    })
}