import { Test } from "@prisma/client";

export type TestDataType = Omit<Test, "id"| "createAt">

export type CategoryAndDisciplineIdType = Omit <TestDataType, "name" | "pdfUrl">

export interface CreateTestDataI extends TestDataType { "category":string , "discipline": string, "teacher": string, }

export type CreateTestType = Omit<CreateTestDataI, "categoryId" | "teacherDisciplineId">

