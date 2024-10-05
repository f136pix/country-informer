import CountriesList from "@/app/components/CountriesList";
import {ICountry} from "@/app/interfaces/ICountry";


export default async function Home() {
    const response = await fetch(process.env.BACKEND_URL! + "/countries");
    const data = await response.json();
    const countries = data.data.map((country: ICountry) => ({
        ...country,
        id: country.countryCode,
    }));

    return (
        <div className={"mx-auto mt-[5rem] w-[70%]"}>
            <h1 className={"text-[4rem] font-bold"}>FIND INFORMATIONS ABOUT </h1>
            <h1 className={"text-[4rem] font-bold"}>COUNTRIES</h1>
            <CountriesList countries={countries}/>
        </div>
    );
}