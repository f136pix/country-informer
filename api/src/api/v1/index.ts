import { Router } from 'express';
import cors from 'cors';
import {errorHandler} from "./_common/middlewares/errorHandler";
import countriesController from "./countries/countriesController";

const v1Router = Router();

v1Router.use(cors());

v1Router.use('/countries', countriesController);
v1Router.use(errorHandler);

export default v1Router;
