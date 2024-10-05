export interface IGetCountryApiResponse {
    countryCode: string;
    name: string;
}

export interface IGetAllCountriesApiResponse extends Array<IGetCountryApiResponse> {
}
    

