import { prisma } from "../src/config/database";
import supertest from "supertest";
import app from "../src/app";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "user"`;
});

const agent = supertest(app);

describe("Testa POST /signup",() => {
    it.todo("Must return [201] if an account is sucessfuly registered");
    it.todo("Must return [409] if already exist a account with that email registered");
    it.todo("Must return [422] if the body is in wrong format (Invalid Email)");
    it.todo("Must return [422] if the body is in wrong format (Invalid Password)");
    it.todo("Must return [422] if the body is in wrong format (Unmatch passwords)");
});

describe("Test POST /signin", () => {
    it.todo("Must return [201] if an account is sucessfuly registered");
    it.todo("Must return [403] if the body is in wrong format (Forget the email)");
    it.todo("Must return [403] if the body is in wrong format (Forget tje password)");
})