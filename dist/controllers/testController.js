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
exports.getByTeacher = exports.getByDiscipline = exports.create = void 0;
const authValidator = __importStar(require("../validators/authValidator"));
const testService = __importStar(require("../services/testService"));
const teacherRepository = __importStar(require("../repositories/teacherRepository"));
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = res.locals.user;
        yield authValidator.accountId(id);
        const { name, pdfUrl, category, discipline, teacher } = req.body;
        yield testService.test({ name, pdfUrl, category, discipline, teacher });
        res.sendStatus(201);
    });
}
exports.create = create;
;
function getByDiscipline(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = res.locals.user;
        yield authValidator.accountId(id);
        const allTests = yield testService.getTestByDiscipline();
        res.status(200).send(allTests);
    });
}
exports.getByDiscipline = getByDiscipline;
function getByTeacher(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = res.locals.user;
        yield authValidator.accountId(id);
        const allTests = yield teacherRepository.getAllTest();
        res.status(200).send(allTests);
    });
}
exports.getByTeacher = getByTeacher;
;
//# sourceMappingURL=testController.js.map