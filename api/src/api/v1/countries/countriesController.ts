import {Router} from "express";
import asyncHandler from "../_common/middlewares/asyncHandler";
import {MessageResponse} from "../_common/interfaces";
import {CountriesResponse} from "../../../contracts/countries/CountriesResponse";
import countriesService from "./countriesService";

const countriesController = Router();

countriesController.get('/',
    asyncHandler(async (req: any, res: any) => {
        const ret = await countriesService.get();
        const response: MessageResponse<CountriesResponse> = {
            message: "Countries retrieved",
            data: ret
        };
        res.json(response);
    }));

countriesController.get('/:countryCode',
    asyncHandler(async (req: any, res: any) => {
        const countryCode = req.params.countryCode;
        const ret = await countriesService.getByCode(countryCode);
        const response: MessageResponse<any> = {
            message: "Country retrieved",
            data: ret
        };
        res.json(response);
    }));



export default countriesController;