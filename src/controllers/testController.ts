import { Request, Response } from 'express';
import * as testTypes from "../types/testType";
import * as testService from "../services/testService";

export async function create(req:Request, res:Response){
    const { name, pdfUrl, category, discipline, teacher } : testTypes.CreateTestType  = req.body;
    await testService.test({ name, pdfUrl, category, discipline, teacher });
    res.sendStatus(201);
};

export async function getByDiscipline(req:Request, res:Response) {
    const allTests = await testService.getAllTestByDiscipline();
    res.status(200).send(allTests)
}

export async function getByTeacher(req:Request, res:Response) {
    
};