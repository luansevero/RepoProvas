import { prisma } from "../config/database";

export async function findByName(name : string){
    return await prisma.discipline.findUnique({
        where : {name},
        select : {
            id : true
        }
    })
}