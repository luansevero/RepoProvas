import { prisma } from "./seedConfig";

export async function restartTable(){
    try{
        console.log("(2/8)===Restarting all tables...===");
        await prisma.$queryRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
        await prisma.$queryRaw`TRUNCATE TABLE categories RESTART IDENTITY CASCADE;`;
        await prisma.$queryRaw`TRUNCATE TABLE teachers RESTART IDENTITY CASCADE;`;
        await prisma.$queryRaw`TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE;`;
        await prisma.$queryRaw`TRUNCATE TABLE terms RESTART IDENTITY CASCADE;`;
        await prisma.$queryRaw`TRUNCATE TABLE teachers_disciplines RESTART IDENTITY CASCADE;`;
        await prisma.$queryRaw`TRUNCATE TABLE tests RESTART IDENTITY CASCADE;`;
        console.log("===Restarting is complete===");
    }catch (e){
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};