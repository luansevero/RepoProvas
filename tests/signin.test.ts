import { prisma } from "../src/config/database";
import supertest from "supertest";
import app from "../src/app";
import * as authFactory from "./factories/authFactory";

const agent = supertest(app);

beforeAll( async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users"`
})

describe("Test POST /signin", () => {
    it("Must return [200] if is right account data and login",async () => {
        const accountData = await authFactory.__InsertUser("signin", "notRandom", "right", "right");
        const response = await agent.post("/signin").send(accountData);
        expect(response.status).toBe(200);
    });
    it("Must return [403] if the body is in wrong format (Forget the email)", async () => {
        const accountData = authFactory.__createUser("signin", "random", "right");
        const response = await agent.post("/signin").send(accountData);
        expect(response.status).toBe(403);
    });
    it("Must return [403] if the body is in wrong format (Forget the password)", async () => {
        const accountData = authFactory.__createUser("signin", "notRandom", "wrong");
        const response = await agent.post("/signin").send(accountData);
        expect(response.status).toBe(403);
    });
})

afterAll( async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users"`
    await prisma.$disconnect()
})