"use strict";
// const client = require("./client");
import express from "express"
import bodyParser from "body-parser";

import {router as mainroute} from './routes/index.js'


const app = express();
app.use("/",mainroute);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT =3000;
app.listen(PORT, () => {
	console.log("Server running at port ", PORT);
});

