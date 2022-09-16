import * as categoryValidator from "../validators/categoryValidator";
import * as disciplineValidator from "../validators/disciplineValidator";
import * as teacherValidator from "../validators/teacherValidator";
import * as teacher_disciplineRepository from "../repositories/teacherDisciplineRepository";
import * as testRepository from "../repositories/testRepository"

export async function test(createTestData : TCreateTestData){
    const categoryId = await categoryValidator.findCategory(createTestData["name"]);
    const disciplineId = await disciplineValidator.findDiscipline(createTestData["name"]);
    const teacherId = await teacherValidator.findTeacher(createTestData["name"]);
    const teacherDisciplineId = await teacher_disciplineRepository.findByTeacherIdAndDisciplineId({teacherId, disciplineId});

    await testRepository.insert({
        name: createTestData["name"],
        pdfUrl: createTestData["pdfURL"],
        categoryId,
        teacherDisciplineId
    })
}