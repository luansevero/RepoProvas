import { prisma } from "../config/database";
import { TestDataType } from "../types/testType";

export async function insert(testData : TestDataType){
    return await prisma.test.create({
        data : testData
    })
};
