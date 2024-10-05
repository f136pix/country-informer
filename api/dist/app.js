"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./api/v1"));
// import v1Router from "./api/v1";
const app = (0, express_1.default)();
require('dotenv').config();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const port = 5000;
app.use('/api/v1', v1_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
