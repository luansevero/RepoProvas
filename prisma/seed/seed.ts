import { prisma } from "./seedConfig";
import {restartTable} from "./seedRestart";
import * as seedInsert from "./seedInsert";

async function main(){
    try{
        console.log("(1/8)===Starting seed creation!===")
        await restartTable();
        await seedInsert.terms();
        await seedInsert.categories();
        await seedInsert.teachers();
        await seedInsert.disciplines();
        await seedInsert.teacherDisciplines();
        console.log("(8/8)===Seed creation complete!===")
    } catch (e) {
        console.log(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

main();