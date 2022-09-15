import { prisma }

export async function findByEmail( email : string ){
    return await prisma.users.find
}