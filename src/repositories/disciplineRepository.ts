import { prisma } from "../config/database";

export async function findByName(name : string){
    return await prisma.discipline.findUnique({
        where : {name},
        select : {
            id : true
        }
    })
}

export async function getDiscipline(){
    return await prisma.term.findMany({
        select : {
            id : true,
            number : true,
            discipline : {
                select : {
                    id : true,
                    name : true
                },
                orderBy : {
                    name : "asc"
                }
            }
        },
        orderBy : {
            number : "asc"
        }
    })
};


