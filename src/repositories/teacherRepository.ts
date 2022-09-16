import { prisma } from "../config/database";

export async function findByName(name : string){
    return await prisma.teacher.findUnique({
        where : {name},
        select : {
            id : true
        }
    })
}