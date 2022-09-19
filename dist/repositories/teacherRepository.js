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
exports.getAllTest = exports.findByName = void 0;
const database_1 = require("../config/database");
function findByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.teacher.findUnique({
            where: { name },
            select: {
                id: true
            }
        });
    });
}
exports.findByName = findByName;
function getAllTest() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.$queryRaw `
        SELECT t.id, t.name,
        (
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
                                'discipline', d.name
                            )
                        )
                        FROM tests
                        JOIN teachers_disciplines td
                        ON tests."teacherDisciplineId" = td.id
                        JOIN disciplines d
                        ON d.id = td."disciplineId"
                        WHERE t.id = td."teacherId"
                        AND c.id = tests."categoryId"
                    )
                )
            )
            FROM categories c
        ) as categories
        FROM teachers t
    `;
    });
}
exports.getAllTest = getAllTest;
//# sourceMappingURL=teacherRepository.js.map