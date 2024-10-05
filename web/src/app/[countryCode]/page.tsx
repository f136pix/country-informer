"use client"

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import NeighboursList from "@/app/[countryCode]/components/NeighboursList";
import {ICountry} from "@/app/interfaces/ICountry";
import Image from "next/image";

const CountryDetails = () => {
    const pathName = usePathname();
    const [country, setCountry] = useState<ICountry | null>(null);

    useEffect(() => {
        console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/countries${pathName}`)

        if (pathName) {
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/countries${pathName}`)
                .then(response => response.json())
                .then(data => setCountry(data.data));
        }
    }, [pathName]);


    useEffect(() => {
        console.log(country)

    }, [country]);


    if (!country) {
        return <div></div>;
    }

    return (
        <div className={"text-center mx-auto"}>
            <h1 className={"mt-8 text-[4rem] my-auto text-bold"}>{country.name}</h1>
            <Image src={country.flagUrl} alt={`${country.name} flag`} className={"mt-4 mx-auto"} width={300} height={300}/>

            <section className={"flex mt-12 h-[]"}>
                <div className={"w-[50%]"}>
                    <NeighboursList data={country.borders} />
                </div>
                <div className={"w-[50%]"}></div>
            </section>
        </div>
    );
};

export default CountryDetails;