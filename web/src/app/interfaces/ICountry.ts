export interface ICountry {
    name: string;
    countryCode: string;
    flagUrl: string,
    borders: IBorder[]
}

export interface IBorder {
    borders: ICountry[],
    commonName: string
    countryCode: string
    officialName: string
    region: string
}