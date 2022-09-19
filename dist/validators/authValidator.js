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
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountId = exports.passwordSync = exports.accountEmail = exports.samePassword = exports.newEmail = void 0;
const authRepository = __importStar(require("../repositories/authRepository"));
const errorHandlerMiddleware_1 = require("../middlewares/errorHandlerMiddleware");
const bcryptUtil_1 = require("../utils/bcryptUtil");
function newEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield authRepository.findByEmail(email);
        if (account)
            throw new errorHandlerMiddleware_1.ErrorInfo("error_conflict", "Email already in use!");
    });
}
exports.newEmail = newEmail;
;
function samePassword(password, confirmPassword) {
    if (password !== confirmPassword)
        throw new errorHandlerMiddleware_1.ErrorInfo("error_conflict", "Passwords do not match!");
}
exports.samePassword = samePassword;
function accountEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield authRepository.findByEmail(email);
        if (!account)
            throw new errorHandlerMiddleware_1.ErrorInfo("error_forbidden", "Invalid email our password!");
        return account;
    });
}
exports.accountEmail = accountEmail;
;
function passwordSync(typedPassword, accountPassword) {
    if (!(0, bcryptUtil_1.compareSync)(typedPassword, accountPassword))
        throw new errorHandlerMiddleware_1.ErrorInfo("error_forbidden", "Invalid email our password!");
}
exports.passwordSync = passwordSync;
;
function accountId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield authRepository.findById(id);
        if (!account)
            throw new errorHandlerMiddleware_1.ErrorInfo("error_forbidden", "Invalid token");
    });
}
exports.accountId = accountId;
//# sourceMappingURL=authValidator.js.map