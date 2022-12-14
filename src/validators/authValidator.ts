import { User } from "@prisma/client";
import * as authRepository from "../repositories/authRepository";
import { ErrorInfo } from "../middlewares/errorHandlerMiddleware";
import { compareSync } from "../utils/bcryptUtil";

//SignUp
export async function newEmail(email : string){
    const account : User | null = await authRepository.findByEmail(email);
    if(account) throw new ErrorInfo("error_conflict", "Email already in use!");
};
export function samePassword(password : string, confirmPassword : string){
    if(password !== confirmPassword) throw new ErrorInfo("error_conflict", "Passwords do not match!");
}

//SignIn
export async function accountEmail(email : string){
    const account : User | null = await authRepository.findByEmail(email);
    if(!account) throw new ErrorInfo("error_forbidden", "Invalid email our password!");
    return account
};
export function passwordSync(typedPassword : string, accountPassword : string){
    if(!compareSync(typedPassword, accountPassword)) throw new ErrorInfo("error_forbidden", "Invalid email our password!");
};

export async function accountId(id : number){
    const account : User | null = await authRepository.findById(id);
    if(!account) throw new ErrorInfo("error_forbidden", "Invalid token");
}