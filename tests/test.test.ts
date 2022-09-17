import { prisma } from "../src/config/database";
import supertest from "supertest";
import app from "../src/app";
import * as testFactory from "./factories/testFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users"`;
});

const agent = supertest(app);

describe("Testa POST /test/create",() => {
    it("Must return [201] if an account is sucessfuly registered",async () => {
        const testData = testFactory.__createTest("hard");
        console.log(testData)
        const response = await agent.post("/test/create").send(testData);
        expect(response.status).toBe(201);
    });
    it("Must return [404] if don't find a valid category", async () => {
        const testData = testFactory.__createTest("hard", "category");
        const response = await agent.post("/test/create").send(testData);
        expect(response.status).toBe(404);
    });
    it("Must return [404] if don't find a valid discipline", async () => {
        const testData = testFactory.__createTest("hard", "discipline");
        const response = await agent.post("/test/create").send(testData);
        expect(response.status).toBe(404);
    });
    it("Must return [404] if don't find a valid teacher", async () => {
        const testData = testFactory.__createTest("hard", "teacher");
        const response = await agent.post("/test/create").send(testData);
        expect(response.status).toBe(404);
    });
    it("Must return [404] if find all data but the teacher don't teach the discipline", async () => {
        const testData = testFactory.__createTest("hard", "teacherDiscipline");
        const response = await agent.post("/test/create").send(testData);
        expect(response.status).toBe(404);
    });
});

afterAll( async () => {
    await prisma.$disconnect()
})