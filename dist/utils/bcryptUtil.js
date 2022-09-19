"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareSync = exports.hashSync = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashSync(value, saltRounds) {
    return bcrypt_1.default.hashSync(value, saltRounds);
}
exports.hashSync = hashSync;
;
function compareSync(encryptValue, cryptValue) {
    return bcrypt_1.default.compareSync(encryptValue, cryptValue);
}
exports.compareSync = compareSync;
;
//# sourceMappingURL=bcryptUtil.js.map