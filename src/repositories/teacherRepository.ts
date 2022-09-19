import { prisma } from "../config/database";

export async function findByName(name: string) {
    return await prisma.teacher.findUnique({
        where: { name },
        select: {
            id: true
        }
    })
}

export async function getAllTest() {
    return await prisma.$queryRaw`
        SELECT t.id, t.name,
        (
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
                                'discipline', d.name
                            )
                        )
                        FROM tests
                        JOIN teachers_disciplines td
                        ON tests."teacherDisciplineId" = td.id
                        JOIN disciplines d
                        ON d.id = td."disciplineId"
                        WHERE t.id = td."teacherId"
                        AND c.id = tests."categoryId"
                    )
                )
            )
            FROM categories c
        ) as categories
        FROM teachers t
    `
}