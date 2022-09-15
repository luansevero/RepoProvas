import Joi from "joi";

export const auth = Joi.object({
    email : Joi.string().email({ tlds : { allow : false }}).required(),
    password: Joi.string().min(8).max(40).required,
    confirmPassword: Joi.ref("password")
})