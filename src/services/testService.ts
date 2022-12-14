import * as categoryValidator from "../validators/categoryValidator";
import * as disciplineValidator from "../validators/disciplineValidator";
import * as teacherValidator from "../validators/teacherValidator";
import * as teacherDisciplineValidator from "../validators/teacherDisciplineValidator";
import * as testRepository from "../repositories/testRepository"
import * as disciplineRepository from "../repositories/disciplineRepository";
import { CreateTestType } from "../types/testType";

export async function test(createTestData : CreateTestType){
    const categoryId = await categoryValidator.findCategory(createTestData["category"]);
    const teacherId = await teacherValidator.findTeacher(createTestData["teacher"]);
    const disciplineId = await disciplineValidator.findDiscipline(createTestData["discipline"]);
    const teacherDisciplineId = await teacherDisciplineValidator.findTeacherDiscipline({teacherId, disciplineId})

    await testRepository.insert({
        name: createTestData["name"],
        pdfUrl: createTestData["pdfUrl"],
        categoryId,
        teacherDisciplineId
    })
}

export async function getTestByDiscipline(){
    const tests = await testRepository.getTest();
    return tests
};