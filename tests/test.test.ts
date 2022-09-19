import { prisma } from "../src/config/database";
import supertest from "supertest";
import app from "../src/app";
import * as testFactory from "./factories/testFactory";
import * as authFactory from "./factories/authFactory";
import { generateUserToken } from "../src/utils/jwtUtils";

const agent = supertest(app);

beforeAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`
})

describe("Creating a user with Id = 1 to test all routes", () => {
    it("Must return [200] if the account is sucessfuly created", async () => {
        const accountData = authFactory.__createUser("signup", "random", "right", "right");
        const response = await agent.post("/signup").send(accountData);
        expect(response.status).toBe(201);
    })
})

describe("Testa POST /test/create", () => {
    const token = generateUserToken(1);
    it("Must return [201] if a test is sucessfuly create",async () => {
        const testData = testFactory.__createTest("hard");
        const response = await agent.post("/test/create").send(testData).set({ Authorization : `Bearer ${token}`});
        expect(response.status).toBe(201);
    });
    it("Must return [404] if don't find a valid category", async () => {
        const testData = testFactory.__createTest("hard", "category");
        const response = await agent.post("/test/create").send(testData).set({ Authorization : `Bearer ${token}`});
        expect(response.status).toBe(404);
    });
    it("Must return [404] if don't find a valid discipline", async () => {
        const testData = testFactory.__createTest("hard", "discipline");
        const response = await agent.post("/test/create").send(testData).set({ Authorization : `Bearer ${token}`});
        expect(response.status).toBe(404);
    });
    it("Must return [404] if don't find a valid teacher", async () => {
        const testData = testFactory.__createTest("hard", "teacher");
        const response = await agent.post("/test/create").send(testData).set({ Authorization : `Bearer ${token}`});
        expect(response.status).toBe(404);
    });
    it("Must return [404] if find all data but the teacher don't teach the discipline", async () => {
        const testData = testFactory.__createTest("hard", "teacherDiscipline");
        const response = await agent.post("/test/create").send(testData).set({ Authorization : `Bearer ${token}`});
        expect(response.status).toBe(404);
    });
});

afterAll( async () => {
    await prisma.$disconnect()
})