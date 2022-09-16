import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "@prisma/client";

import * as authValidator from "../validators/authValidator";
import * as authRepository from "../repositories/authRepository";
import { TAuthData, TCreateAuthData } from "../types/authTypes";
import { hashSync } from "../utils/bcryptUtil";

dotenv.config();

export async function signup(createAuthData: TCreateAuthData) {
    await authValidator.newEmail(createAuthData["email"]);
    authValidator.samePassword(createAuthData["password"], createAuthData["confirmPassword"]);
    const password: string = hashSync(createAuthData["password"], 10);
    await authRepository.insert({
        email: createAuthData["email"],
        password
    });
};

export async function signin(authData: TAuthData){
    const user : User = await authValidator.accountEmail(authData["email"]);
    authValidator.passwordSync(authData["password"], user["password"]);
    return createHeaders(user["id"]);
};

function createHeaders(userId : number){
    const token : string = jwt.sign({id:userId}, process.env.ACESS_SECRET_TOKEN!, {expiresIn: process.env.TOKEN_EXPIRES_IN});
    return {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
};