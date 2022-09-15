"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.signin = void 0;
const joi_1 = __importDefault(require("joi"));
exports.signin = joi_1.default.object({
    email: joi_1.default.string().email({ tlds: { allow: false } }).required(),
    password: joi_1.default.string().min(8).max(40).required
});
exports.signup = joi_1.default.object(Object.assign(Object.assign({}, exports.signin), { confirmPassword: joi_1.default.ref("password") }));
//# sourceMappingURL=authSchema.js.map