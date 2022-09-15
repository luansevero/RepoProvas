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
exports.ErrorInfo = exports.errorHandler = void 0;
function errorHandler(error, _req, res, _next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { type, message } = error;
        const Errors = {
            error_bad_request: { status: 400 },
            error_unauthorized: { status: 401 },
            error_forbidden: { status: 403 },
            error_not_found: { status: 404 },
            error_conflict: { status: 409 },
            error_unprocessable_entity: { status: 422 },
            error_internal_server_error: { status: 500 }
        };
        if ((_a = Errors[type]) === null || _a === void 0 ? void 0 : _a.status) {
            const { status } = Errors[type];
            return res.status(status).send(message);
        }
        return res.sendStatus(500);
    });
}
exports.errorHandler = errorHandler;
class ErrorInfo {
    constructor(errorType, message) {
        this.type = errorType;
        this.message = message;
    }
}
exports.ErrorInfo = ErrorInfo;
//# sourceMappingURL=errorHandlerMiddleware.js.map