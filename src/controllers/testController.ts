import { Request, Response } from 'express';
import * as testTypes from "../types/testType";
import * as testService from "../services/testService";

export async function create(req:Request, res:Response){
    const { name, pdfUrl, category, discipline, teacher } : testTypes.CreateTestType  = req.body;
    await testService.test({ name, pdfUrl, category, discipline, teacher });
    res.sendStatus(201);
};