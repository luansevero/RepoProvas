import { prisma } from "../../src/config/database";
import { faker } from "@faker-js/faker";

export function __createUser(
    method : "signin" | "signup",
    emailMethod : "notRandom" | "random" | "wrong",
    passwordMethod: "wrong" | "right",
    confirmPasswordMethod? : "wrong" | "right"
    ){

    const email = {
        notRandom : "masterdev@icloud.com",
        random : faker.internet.url()
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
    emailMethod : "notRandom" | "random" | "wrong",
    passwordMethod: "wrong" | "right",
    confirmPasswordMethod? : "wrong" | "right"
    ){

    const accountData = __createUser(method, emailMethod, passwordMethod, confirmPasswordMethod);
    if(method === "signup"){
        const responseData = await prisma.user.create({data:accountData});
        return responseData;
    };
}

