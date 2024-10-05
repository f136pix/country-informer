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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncHandler_1 = __importDefault(require("../_common/middlewares/asyncHandler"));
const countriesService_1 = __importDefault(require("./countriesService"));
const countriesController = (0, express_1.Router)();
countriesController.get('/', (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ret = yield countriesService_1.default.get();
    const response = {
        message: "Countries retrieved",
        data: ret
    };
    res.json(response);
})));
countriesController.get('/:countryCode', (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countryCode = req.params.countryCode;
    const ret = yield countriesService_1.default.getByCode(countryCode);
    const response = {
        message: "Country retrieved",
        data: ret
    };
    res.json(response);
})));
exports.default = countriesController;
