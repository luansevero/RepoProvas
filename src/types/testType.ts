import { Test } from "@prisma/client";

export type CreateTestType = Omit<Test, "id"| "createAt">

export interface TTestData extends CreateTestType { "discipline": string, "teacher": string }

