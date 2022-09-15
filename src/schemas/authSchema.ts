import Joi from "joi";

export const signin = Joi.object({
    email : Joi.string().email({ tlds : { allow : false }}).required(),
    password: Joi.string().min(8).max(40).required
})

export const signup = Joi.object({
    ...signin,
    confirmPassword: Joi.ref("password")
})