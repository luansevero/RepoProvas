import { prisma } from "../config/database";
import { TestDataType } from "../types/testType";

export async function insert(testData: TestDataType) {
    return await prisma.test.create({
        data: testData
    })
};

export async function getTest() {
    return await prisma.$queryRaw`
        SELECT t.id, t.number,
        (
            SELECT
            ARRAY_AGG(
                jsonb_build_object(
                    'id', d.id,
                    'name', d.name,
                    'categories', (
                        SELECT
                        ARRAY_AGG(
                            jsonb_build_object(
                                'id', c.id,
                                'name', c.name,
                                'tests', (
                                    SELECT
                                    ARRAY_AGG(
                                        jsonb_build_object(
                                            'id', tests.id,
                                            'name', tests.name,
                                            'pdfUrl', tests."pdfUrl",
                                            'teacher', teachers.name
                                        )
                                    )
                                    FROM tests 
                                    JOIN teachers_disciplines td
                                    ON tests."teacherDisciplineId" = td.id
                                    JOIN teachers
                                    ON teachers.id = td."teacherId"
                                    WHERE d.id = td."disciplineId" AND c.id = tests."categoryId"
                                )
                            )
                        )
                        FROM categories c
                    )
                )
            )
            FROM disciplines d
            WHERE t.id = d."termId"
        ) AS disiciplines
        FROM terms t
    `
}

// SELECT c.id, c.name as category,
// (
//     SELECT
//     ARRAY_AGG(
//         jsonb_build_object(
//             'id', t.id,
//             'name', t.name,
//             'pdfUrl', t."pdfUrl"
//         )
//     )
//     FROM tests t
//     WHERE t."categoryId" = c.id
// ) AS tests
// FROM categories c
// ORDER BY c.name ASC