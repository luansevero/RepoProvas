import { prisma } from "./seedConfig";

export async function terms() {
    try {
        console.log("(2/8)===Inserting terms...===");
        await prisma.term.createMany({
            data: [
                { number: 1 },
                { number: 2 },
                { number: 3 },
                { number: 4 },
                { number: 5 },
                { number: 6 }
            ]
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    };
};

export async function categories() {
    try {
        console.log("(3/8)===Inserting categories...===");
        await prisma.category.createMany({
            data: [
                { name: "Projeto" },
                { name: "Prática" },
                { name: "Recuperação" }
            ]
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    };
}

export async function teachers() {
    try {
        console.log("(4/8)===Inserting teachers...===");
        await prisma.teacher.createMany({
            data: [
                { name: "Diego Pinho" },
                { name: "Bruna Hamori" }
            ]
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    };
}

export async function disciplines() {
    try {
        console.log("(5/8)===Inserting disciplines...===");
        await prisma.discipline.createMany({
            data: [
                { name: "HTML e CSS", termId: 1 },
                { name: "JavaScript", termId: 2 },
                { name: "React", termId: 3 },
                { name: "Humildade", termId: 1 },
                { name: "Planejamento", termId: 2 },
                { name: "Autoconfiança", termId: 3 }
            ]
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

export async function teacherDisciplines() {
    try {
        console.log("(6/8)===Inserting teacher&discipline (relation table)...===");
        await prisma.teacherDiscipline.createMany({
            data: [
                { teacherId: 1, disciplineId: 1 },
                { teacherId: 1, disciplineId: 2 },
                { teacherId: 1, disciplineId: 3 },
                { teacherId: 2, disciplineId: 4 },
                { teacherId: 2, disciplineId: 5 },
                { teacherId: 2, disciplineId: 6 }
            ]
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

