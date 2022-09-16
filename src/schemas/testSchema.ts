import Joi from "joi";

export const testSchema = Joi.object({
    name: Joi.string().min(1).required(),
    pdfUrl: Joi.string().min(1).required(),
    category: Joi.string().min(1).required(),
    discipline: Joi.string().min(1).required(),
    teacher: Joi.string().min(1).required()
})