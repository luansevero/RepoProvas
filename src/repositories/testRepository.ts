import { prisma } from "../config/database";
import { CreateTestType } from "../types/testType";

export async function insert(createTestData : CreateTestType){
    return await prisma.test.create({
        data : createTestData
    })
}