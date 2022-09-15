"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchemaMiddleware = void 0;
function validateSchemaMiddleware(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            const details = validation.error.details;
            const errors = details.map(details => {
                const erro = details.path[0];
                const message = details.message.split(" ").splice(1).join(" ");
                return { [erro]: message };
            });
            return res.status(422).send(errors);
        }
        next();
    };
}
exports.validateSchemaMiddleware = validateSchemaMiddleware;
//# sourceMappingURL=validateSchemaMiddleware.js.map