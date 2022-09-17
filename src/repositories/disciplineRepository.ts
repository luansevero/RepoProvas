import { string } from "joi";
import { prisma } from "../config/database";

export async function findByName(name : string){
    return await prisma.discipline.findUnique({
        where : {name},
        select : {
            id : true
        }
    })
}

export async function getTestByDiscipline(){
    return await prisma.term.findMany({
        select : {
            id : true,
            number : true,
            discipline : {
                select : {
                    id : true,
                    name : true,
                    teacherDiscipline : {
                        select : {
                            id : true,
                            teacher : {
                                select : {
                                    name : true
                                }
                            },
                            test : {
                                select : {
                                    id : true,
                                    category : {
                                        select : {
                                            name : true
                                        }
                                    },
                                    name : true,
                                    pdfUrl : true
                                },
                                orderBy : {
                                    category : {
                                        name : "asc"
                                    }
                                }
                            }
                        },
                        orderBy : {
                            id : "asc"
                        }
                    }
                },
                orderBy : {
                    name : "asc"
                }
            },
        },
        orderBy : {
            number : "asc"
        }
    })
};


