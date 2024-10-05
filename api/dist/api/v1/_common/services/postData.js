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
exports.postData = void 0;
const axios_1 = __importDefault(require("axios"));
const postData = (url, data, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("url" + url);
        console.log("data" + data.country);
        const response = yield axios_1.default.post(url, data, options);
        console.log(response);
        return response.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            // console.error(`Axios error: ${error.message}`);
            if (error.response) {
                // console.error(`Response error: ${error.response.status}`);
            }
        }
        else {
            // console.error(`Unexpected error: ${error.message}`);
        }
        throw error;
    }
});
exports.postData = postData;
