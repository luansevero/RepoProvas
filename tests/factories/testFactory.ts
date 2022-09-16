import { faker } from "@faker-js/faker";

export function __createTest(
        skill : "soft" | "hard",
        fake? : "category" | "discipline" | "teacher" | "teacherDiscipline"
    ){
        const categories  = {
            "Projeto" : 1,
            "Prática" : 2,
            "Recuperação" : 3
        }
        const disciplines = {
            hard : {
                "HTML e CSS" : 1,
                "JavaScript": 2,
                "React": 3
            },
            soft : {
                "Humildade" : 4,
                "Planejamento" : 5,
                "Autoconfiança" : 6
            }
        }
        const teachers = {
            hard : {
                "Diego Pinho" : 1
            },
            soft : {
                "Bruna Hamori" : 2
            },
        }

        const categoryKey = Object.keys(categories)
        const categoryValues = Object.values(categories);
        const disciplineKey = Object.keys(disciplines[skill])
        const disciplineValues = Object.values(disciplines[skill]);
        const teacherKey = Object.keys(teachers[skill])
        const teacherValues = Object.values(teachers[skill]);

        const testBody = {
                name : faker.name.fullName(),
                pdfUrl: faker.internet.url(),
                category: categoryKey[faker.datatype.number({min:categoryValues[0], max:categoryValues["length"] - 1})],
                discipline : disciplineKey[faker.datatype.number({min: disciplineValues[0], max: disciplineValues["length"] - 1})],
                teacher : teacherKey[faker.datatype.number({min: teacherValues[0], max: teacherValues["length"] - 1})]
        }  
        if(fake !== undefined){
            if(fake !== "teacherDiscipline")  return {...testBody, [fake]: faker.animal.dog()};
            return {...testBody, discipline : disciplines[skill === "soft" ? "hard" : "soft"][1]}
        }
        return testBody;
}
