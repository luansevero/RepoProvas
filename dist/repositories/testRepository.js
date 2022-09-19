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
exports.getTest = exports.insert = void 0;
const database_1 = require("../config/database");
function insert(testData) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.test.create({
            data: testData
        });
    });
}
exports.insert = insert;
;
function getTest() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.$queryRaw `
        SELECT t.id, t.number,
        (
            SELECT
            ARRAY_AGG(
                jsonb_build_object(
                    'id', d.id,
                    'name', d.name,
                    'categories', (
                        SELECT
                        ARRAY_AGG(
                            jsonb_build_object(
                                'id', c.id,
                                'name', c.name,
                                'tests', (
                                    SELECT
                                    ARRAY_AGG(
                                        jsonb_build_object(
                                            'id', tests.id,
                                            'name', tests.name,
                                            'pdfUrl', tests."pdfUrl",
                                            'teacher', teachers.name
                                        )
                                    )
                                    FROM tests 
                                    JOIN teachers_disciplines td
                                    ON tests."teacherDisciplineId" = td.id
                                    JOIN teachers
                                    ON teachers.id = td."teacherId"
                                    WHERE d.id = td."disciplineId" AND c.id = tests."categoryId"
                                )
                            )
                        )
                        FROM categories c
                    )
                )
            )
            FROM disciplines d
            WHERE t.id = d."termId"
        ) AS disiciplines
        FROM terms t
    `;
    });
}
exports.getTest = getTest;
//# sourceMappingURL=testRepository.js.map