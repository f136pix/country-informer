import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import {IPopulationData} from "@/app/interfaces/ICountry";
import React from "react";


type IProps = {
    data: IPopulationData[]
}

function PopulationChart({data}: IProps) {
    return (
        <div className={"w-[80%] mx-auto"}>
            <h2 className={"text-[3rem] text-bold mb-[1rem]"}>Population</h2>
            <div className={"w-fit mx-auto"}>
                <LineChart width={600} height={330} data={data} margin={{left:10}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="year"/>
                    <YAxis dataKey="value"/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                </LineChart>
            </div>
        </div>
    );
}

export default PopulationChart;