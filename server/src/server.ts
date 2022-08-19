import express from "express";
import catRouter from "./resources/cats/cat.router";
import { errorHandler, logger, notFoundHandler } from "./resources/middlewares";
require("express-async-errors");
var cors = require('cors');
const app = express();
export const port = 3000;
export const url = "http://localhost:"

app.use(express.json());
app.use(express.static('public'))
app.use(cors());
app.use(logger);
app.use("/api/cats", catRouter);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on: ${url}${port}`);
});