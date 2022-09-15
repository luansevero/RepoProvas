import { prisma } from "../config/database"
import { TAuthData } from "../types/authTypes"

export async function findByEmail( email : string ){
    return await prisma.user.findUnique({
        where: { email }
    })
};

export async function findById( id : number ){
    return await prisma.user.findUnique({
        where: { id }
    })
};

export async function insert(authData : TAuthData){
    await prisma.user.create({
        data: authData
    })
};
