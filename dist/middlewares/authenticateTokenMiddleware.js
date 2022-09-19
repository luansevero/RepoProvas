"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorHandlerMiddleware_1 = require("./errorHandlerMiddleware");
dotenv_1.default.config();
function authenticateToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers["authorization"];
        if (!authHeader)
            throw new errorHandlerMiddleware_1.ErrorInfo("error_unauthorized", "Token must be send it");
        if (authHeader.split(" ")[0] !== "Bearer")
            throw new errorHandlerMiddleware_1.ErrorInfo("error_unauthorized", "Invalid token format");
        const token = authHeader && authHeader.split(" ")[1];
        if (token === null)
            throw new errorHandlerMiddleware_1.ErrorInfo("error_unauthorized", "Invalid Token");
        jsonwebtoken_1.default.verify(token, process.env.ACESS_SECRET_TOKEN, (err, user) => {
            if (err)
                throw new errorHandlerMiddleware_1.ErrorInfo("error_unauthorized", "This token is invalid");
            if (!user)
                throw new errorHandlerMiddleware_1.ErrorInfo("error_unauthorized", "This token is invalid");
            res.locals.user = user;
            next();
        });
    });
}
exports.default = authenticateToken;
//# sourceMappingURL=authenticateTokenMiddleware.js.map