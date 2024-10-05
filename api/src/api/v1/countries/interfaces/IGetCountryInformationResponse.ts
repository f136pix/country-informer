import {IGetCountryApiResponse} from "./IGetAllCountriesApiResponse";

export interface IGetCountryInformationResponse extends IGetCountryApiResponse {
    borders: IBorderData[];
    populationData : IPopulationData[],
    flagUrl: string
}

export interface IPopulationData {
    year: number;
    value: number;
}

export interface IBorderData {
    commonName: string;
    countryCode: string;
}