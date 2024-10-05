"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./_common/middlewares/errorHandler");
const countriesController_1 = __importDefault(require("./countries/countriesController"));
const v1Router = (0, express_1.Router)();
v1Router.use((0, cors_1.default)());
v1Router.use('/countries', countriesController_1.default);
v1Router.use(errorHandler_1.errorHandler);
exports.default = v1Router;
