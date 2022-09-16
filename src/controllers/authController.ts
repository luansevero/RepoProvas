import { Request, Response } from 'express';

import { TCreateAuthData, TAuthData } from '../types/authTypes';
import * as authService from "../services/authService";

export async function signup(req:Request, res:Response){
    const { email, password, confirmPassword } : TCreateAuthData  = req.body;
    await authService.signup({email, password, confirmPassword});
    res.sendStatus(201);
};

export async function signin(req:Request, res:Response){
    const { email, password } : TAuthData = req.body;
    const headers = await authService.signin({email, password});
    res.status(200).send(headers);
};