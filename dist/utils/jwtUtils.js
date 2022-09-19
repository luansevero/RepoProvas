"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function generateUserToken(userId) {
    return jsonwebtoken_1.default.sign({ id: userId }, process.env.ACESS_SECRET_TOKEN, { expiresIn: process.env.TOKEN_EXPIRES_IN });
}
exports.generateUserToken = generateUserToken;
//# sourceMappingURL=jwtUtils.js.map