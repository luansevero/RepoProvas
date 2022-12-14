"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.testSchema = joi_1.default.object({
    name: joi_1.default.string().min(1).required(),
    pdfUrl: joi_1.default.string().min(1).required(),
    category: joi_1.default.string().min(1).required(),
    discipline: joi_1.default.string().min(1).required(),
    teacher: joi_1.default.string().min(1).required()
});
//# sourceMappingURL=testSchema.js.map