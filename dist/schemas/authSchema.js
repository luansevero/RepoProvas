"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.signin = void 0;
const joi_1 = __importDefault(require("joi"));
const authSchema = {
    email: joi_1.default.string().email({ tlds: { allow: false } }).required(),
    password: joi_1.default.string().min(8).max(40).required()
};
exports.signin = joi_1.default.object(Object.assign({}, authSchema));
exports.signup = joi_1.default.object(Object.assign(Object.assign({}, authSchema), { confirmPassword: joi_1.default.string().min(8).max(40).valid(joi_1.default.ref("password")).required().messages({
        "any.only": `"confirmPassword" must be the same as password`
    }) }));
//# sourceMappingURL=authSchema.js.map