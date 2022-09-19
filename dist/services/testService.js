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
exports.getTestByDiscipline = exports.test = void 0;
const categoryValidator = __importStar(require("../validators/categoryValidator"));
const disciplineValidator = __importStar(require("../validators/disciplineValidator"));
const teacherValidator = __importStar(require("../validators/teacherValidator"));
const teacherDisciplineValidator = __importStar(require("../validators/teacherDisciplineValidator"));
const testRepository = __importStar(require("../repositories/testRepository"));
function test(createTestData) {
    return __awaiter(this, void 0, void 0, function* () {
        const categoryId = yield categoryValidator.findCategory(createTestData["category"]);
        const teacherId = yield teacherValidator.findTeacher(createTestData["teacher"]);
        const disciplineId = yield disciplineValidator.findDiscipline(createTestData["discipline"]);
        const teacherDisciplineId = yield teacherDisciplineValidator.findTeacherDiscipline({ teacherId, disciplineId });
        yield testRepository.insert({
            name: createTestData["name"],
            pdfUrl: createTestData["pdfUrl"],
            categoryId,
            teacherDisciplineId
        });
    });
}
exports.test = test;
function getTestByDiscipline() {
    return __awaiter(this, void 0, void 0, function* () {
        const tests = yield testRepository.getTest();
        return tests;
    });
}
exports.getTestByDiscipline = getTestByDiscipline;
;
//# sourceMappingURL=testService.js.map