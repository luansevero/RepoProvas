"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path = process.env.NODE_ENV === "dev" ? ".env" : ".env.test";
dotenv_1.default.config({ path });
//# sourceMappingURL=config.js.map