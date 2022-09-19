import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function generateUserToken(userId : number){
    return jwt.sign({id: userId}, process.env.ACESS_SECRET_TOKEN!, {expiresIn: process.env.TOKEN_EXPIRES_IN})
}