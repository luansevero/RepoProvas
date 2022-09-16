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
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = exports.findById = exports.findByEmail = void 0;
const database_1 = require("../config/database");
function findByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.user.findUnique({
            where: { email }
        });
    });
}
exports.findByEmail = findByEmail;
;
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.user.findUnique({
            where: { id }
        });
    });
}
exports.findById = findById;
;
function insert(authData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.prisma.user.create({
            data: authData
        });
    });
}
exports.insert = insert;
;
//# sourceMappingURL=authRepository.js.map