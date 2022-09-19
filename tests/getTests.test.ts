import { prisma } from "../src/config/database";
import supertest from "supertest";
import app from "../src/app";
import * as authFactory from "./factories/authFactory";
import { generateUserToken } from "../src/utils/jwtUtils";

const agent = supertest(app);

beforeAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users"`
})

describe("Testa Get /test/discipline",() => {
    it("Must return [200] and the list of tests grouped by disciplines",async () => {
        const user = await authFactory.__InsertUser("signin", "notRandom", "right", "right");
        const token = generateUserToken(user["id"]);
        const response = await agent.get("/test/discipline").set({ Authorization : `Bearer ${token}`})
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    });
});

describe("Testa Get /test/teacher",() => {
    it("Must return [200] and the list of tests grouped by teacher",async () => {
        const user = await authFactory.__InsertUser("signin", "notRandom", "right", "right");
        const token = generateUserToken(user["id"]);
        const response = await agent.get("/test/teacher").set({ Authorization : `Bearer ${token}`})
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
    });
});

afterAll( async () => {
    await prisma.$disconnect()
})