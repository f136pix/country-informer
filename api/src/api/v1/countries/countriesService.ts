import {IGetAllCountriesApiResponse} from "./interfaces/IGetAllCountriesApiResponse";
import {fetchData} from "../_common/services/fetchData";
import {UnexpectedError} from "../_common/exceptions/UnexpectedError";
import {
    IBorderData,
    IGetCountryInformationResponse,
    IPopulationData
} from "./interfaces/IGetCountryInformationResponse";
import {NotFoundError} from "../_common/exceptions/NotFoundError";
import {postData} from "../_common/services/postData";

class countriesService {
    async get(): Promise<IGetAllCountriesApiResponse> {
        try {
            const countries = await fetchData<IGetAllCountriesApiResponse>(process.env.DATE_NAGER_URL + "/AvailableCountries");
            return countries
        } catch (error: any) {
            throw new UnexpectedError("There was a error while fetching the countries.");
        }
    }

    async getByCode(countryCode: IGetCountryInformationResponse): Promise<IGetCountryInformationResponse> {
        try {
            const bordersApiResponse = await fetchData<any>(process.env.DATE_NAGER_URL + "/CountryInfo/" + countryCode);
            const borders: IBorderData[] = bordersApiResponse.borders;

            const populationDataApiResponse = await postData<any>(process.env.COUNTRIES_NOW_URL + "/countries/population", {country: bordersApiResponse.commonName});
            const populationData: IPopulationData[] = populationDataApiResponse.data.populationCounts.map((item: any) => ({
                year: item.year,
                value: item.value
            }));
           
            const flagUrlApiResponse = await postData<any>(process.env.COUNTRIES_NOW_URL + "/countries/flag/images", {iso2: countryCode});
            const flagUrl: string = flagUrlApiResponse.data.flag;

            const res: IGetCountryInformationResponse = {
                name: bordersApiResponse.officialName,
                countryCode: bordersApiResponse.countryCode,
                borders: borders,
                populationData: populationData,
                flagUrl: flagUrl
            }

            return res
        } catch (error: any) {
            if (error.status == 404) {
                throw new NotFoundError("Country with provided code was not found");
            }
            throw new UnexpectedError("There was a error while fetching the country data.");
        }
    }
}


export default new countriesService();