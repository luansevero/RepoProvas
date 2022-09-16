import Joi from "joi";

const authSchema = {
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(8).max(40).required()
}



export const testSchema = Joi.object({
    ...authSchema,
    confirmPassword: Joi.string().min(8).max(40).valid(Joi.ref("password")).required().messages({
        "any.only": `"confirmPassword" must be the same as password`
    })
    name: Joi.string().min(1).required(),
    pdfUrl: Joi.string().min(1).required(),
    category: Joi.string().min(1).required()
    discipline: Joi.string().min(1).required()
    teacher: Joi.string().min(1).required()
})