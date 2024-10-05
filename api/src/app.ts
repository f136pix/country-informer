import bodyParser from "body-parser";
import express, {Express} from 'express';
import {server} from "typescript";
import v1Router from "./api/v1";

// import v1Router from "./api/v1";

const app : Express  = express();

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;

app.use('/api/v1', v1Router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});