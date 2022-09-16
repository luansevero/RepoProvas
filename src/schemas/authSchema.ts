import Joi from "joi";

const authSchema = {
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(8).max(40).required()
}

export const signin = Joi.object({ ...authSchema })

export const signup = Joi.object({
    ...authSchema,
    confirmPassword: Joi.string().min(8).max(40).valid(Joi.ref("password")).required().messages({
        "any.only": `"confirmPassword" must be the same as password`
    })
})