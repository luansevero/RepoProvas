"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.signin = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const authValidator = __importStar(require("../validators/authValidator"));
const authRepository = __importStar(require("../repositories/authRepository"));
const bcryptUtil_1 = require("../utils/bcryptUtil");
dotenv_1.default.config();
function signup(createAuthData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield authValidator.newEmail(createAuthData["email"]);
        authValidator.samePassword(createAuthData["password"], createAuthData["confirmPassword"]);
        const password = (0, bcryptUtil_1.hashSync)(createAuthData["password"], 10);
        yield authRepository.insert({
            email: createAuthData["email"],
            password
        });
    });
}
exports.signup = signup;
;
function signin(authData) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield authValidator.accountEmail(authData["email"]);
        authValidator.samePassword(authData["password"], user["password"]);
        return createHeaders(user["id"]);
    });
}
exports.signin = signin;
;
function createHeaders(userId) {
    const token = jsonwebtoken_1.default.sign({ id: userId }, process.env.ACESS_SECRET_TOKEN, { expiresIn: process.env.TOKEN_EXPIRES_IN });
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}
;
//# sourceMappingURL=authService.js.map