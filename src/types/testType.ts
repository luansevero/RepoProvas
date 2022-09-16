import { Test } from "@prisma/client";

interface ITestData extends Test { "discipline": string, "teacher": string };

export type TTestData = Omit<ITestData, "id" | "createAt">;