// CountryList.tsx
"use client"

import React from 'react';
import {useRouter} from 'next/navigation';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {IBorder} from "@/app/interfaces/ICountry";

interface IProps {
    data: IBorder[];
}

const NeighboursList = ({data}: IProps) => {
    const router = useRouter();

    const handleItemClick = (countryCode: string) => {
        router.push(`/${countryCode}`);
    };

    return (
        <div className={"w-[80%] mx-auto"}>
            <h2 className={"text-[3rem] text-bold mb-[1rem]"}>Neighbours</h2>
            
            {data.length == 0 && <div className={"text-neutral-50 min-h-[300px] bg-gray-800"}></div>}

            {data.length > 0 &&
                <List style={{maxHeight: '300px', overflow: 'auto', background: "#1F2937"}}>
                    {data.map((country) => (
                        <ListItem key={country.countryCode} onClick={() => handleItemClick(country.countryCode)}
                                  className={"text-neutral-50 cursor-pointer"} component={"div"}>
                            <ListItemText primary={country.commonName} secondary={country.countryCode}
                                          className={"text-neutral-50"}/>
                        </ListItem>
                    ))}
                </List>
            }
        </div>
    );
};

export default NeighboursList;