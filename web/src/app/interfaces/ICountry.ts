export interface ICountry {
    name: string;
    countryCode: string;
    flagUrl: string,
    borders: IBorder[]
    populationData: IPopulationData[]
}

export interface IBorder {
    borders: ICountry[],
    commonName: string
    countryCode: string
    officialName: string
    region: string
}

export interface IPopulationData {
    value: number,
    year: number
}