"use strict";
// const client = require("./client");
import express from "express"
import bodyParser from "body-parser";

import {router as mainroute, router} from './routes/index.js'


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", mainroute);


const PORT =3000;
app.listen(PORT, () => {
	console.log("Server running at port ", PORT);
});

