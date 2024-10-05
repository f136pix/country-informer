"use client"

import React from 'react';
import {Box, List, ListItem, ListItemText, Paper, Typography} from '@mui/material';
import {useRouter} from "next/navigation";

type IProps = {
    countries: { id: number, countryCode: string, name: string }[];
}

function CountriesList({countries}: IProps) {
    const router = useRouter();

    const handleItemClick = (country: { id: number, countryCode: string, name: string }) => {
        router.push(`/${country.countryCode}`);
    };

    return (
        <Box>
            <div style={{display: 'flex', padding: '16px', borderBottom: '1px solid', background: "#1F2937", marginTop: "4rem" }}>
                <Typography style={{fontWeight: 'bold', fontSize: "2rem"}}>
                    Select a country
                </Typography>
            </div>
            <Paper style={{
                maxHeight: '400px',
                overflow: 'auto',
                borderTopLeftRadius: "0px",
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: "4px",
                background: 'white'
            }}>

                <List>
                    {countries.map((country) => (
                        <ListItem key={country.id} onClick={() => handleItemClick(country)} className={"cursor-pointer"} component={"div"}>
                            <ListItemText primary={country.name} secondary={country.countryCode}/>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}

export default CountriesList;