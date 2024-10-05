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
const fetchData_1 = require("../_common/services/fetchData");
const UnexpectedError_1 = require("../_common/exceptions/UnexpectedError");
const NotFoundError_1 = require("../_common/exceptions/NotFoundError");
const postData_1 = require("../_common/services/postData");
class countriesService {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const countries = yield (0, fetchData_1.fetchData)(process.env.DATE_NAGER_URL + "/AvailableCountries");
                return countries;
            }
            catch (error) {
                throw new UnexpectedError_1.UnexpectedError("There was a error while fetching the countries.");
            }
        });
    }
    getByCode(countryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bordersApiResponse = yield (0, fetchData_1.fetchData)(process.env.DATE_NAGER_URL + "/CountryInfo/" + countryCode);
                const borders = bordersApiResponse.borders;
                const populationDataApiResponse = yield (0, postData_1.postData)(process.env.COUNTRIES_NOW_URL + "/countries/population", { country: bordersApiResponse.commonName });
                const populationData = populationDataApiResponse.data.populationCounts.map((item) => ({
                    year: item.year,
                    value: item.value
                }));
                const flagUrlApiResponse = yield (0, postData_1.postData)(process.env.COUNTRIES_NOW_URL + "/countries/flag/images", { iso2: countryCode });
                const flagUrl = flagUrlApiResponse.data.flag;
                const res = {
                    name: bordersApiResponse.officialName,
                    countryCode: bordersApiResponse.countryCode,
                    borders: borders,
                    populationData: populationData,
                    flagUrl: flagUrl
                };
                return res;
            }
            catch (error) {
                if (error.status == 404) {
                    throw new NotFoundError_1.NotFoundError("Country with provided code was not found");
                }
                throw new UnexpectedError_1.UnexpectedError("There was a error while fetching the country data.");
            }
        });
    }
}
exports.default = new countriesService();
