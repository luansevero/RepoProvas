import { faker } from "@faker-js/faker";
import * as authRepository from "../../src/repositories/authRepository"
import { hashSync } from "../../src/utils/bcryptUtil";

export function __createUser(
    method : "signin" | "signup",
    emailMethod : "notRandom" | "random",
    passwordMethod: "wrong" | "right",
    confirmPasswordMethod? : "wrong" | "right"
    ){

    const email = {
        notRandom : "superultramasterdev@icloud.com",
        random : faker.internet.email()
    };
    const password = {
        right: "1234567890",
        wrong: "1234567899"
    };
    
    const userData = {
        email : email[emailMethod] ,
        password : password[passwordMethod],
    };
    if(method === "signup" && confirmPasswordMethod !== undefined) return {...userData, confirmPassword : password[confirmPasswordMethod]};
    return userData

}

export async function __InsertUser(
    method : "signin" | "signup",
    emailMethod : "notRandom" | "random",
    passwordMethod: "wrong" | "right",
    confirmPasswordMethod? : "wrong" | "right"
    ){

    const accountData = __createUser(method, emailMethod, passwordMethod, confirmPasswordMethod);
    const insertedUser = await authRepository.insert({email: accountData["email"], password: hashSync(accountData["password"], 10)});
    return {accountData, id:insertedUser["id"]};
}

