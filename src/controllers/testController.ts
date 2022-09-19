import { Request, Response } from 'express';
import * as authValidator from "../validators/authValidator";
import * as testTypes from "../types/testType";
import * as testService from "../services/testService";
import * as teacherRepository from "../repositories/teacherRepository";

export async function create(req:Request, res:Response){
  const { id } = res.locals.user;
  await authValidator.accountId(id);
  const { name, pdfUrl, category, discipline, teacher } : testTypes.CreateTestType  = req.body;
  await testService.test({ name, pdfUrl, category, discipline, teacher });
  res.sendStatus(201);
};

export async function getByDiscipline(req:Request, res:Response) {
  const { id } = res.locals.user;
  await authValidator.accountId(id);
  const allTests = await testService.getTestByDiscipline();
  res.status(200).send(allTests)
}

export async function getByTeacher(req:Request, res:Response) {
  const { id } = res.locals.user;
  await authValidator.accountId(id);
  const allTests = await teacherRepository.getAllTest();
  res.status(200).send(allTests);
};