import { prisma } from "../src/config/database";
import supertest from "supertest";
import app from "../src/app";
import * as authFactory from "./factories/authFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users"`;
});

const agent = supertest(app);

describe("Testa POST /signup",() => {
    it("Must return [201] if an account is sucessfuly registered",async () => {
        const accountData = authFactory.__createUser("signup", "random", "right", "right");
        const response = await agent.post("/signup").send(accountData);
        expect(response.status).toBe(201);
    });
    it("Must return [409] if already exist a account with that email registered", async () => {
        const user = await authFactory.__InsertUser("signup", "notRandom", "right", "right");
        const response = await agent.post("/signup").send(user["accountData"]);
        expect(response.status).toBe(409);
    });
});

afterAll( async () => {
    await prisma.$disconnect()
})