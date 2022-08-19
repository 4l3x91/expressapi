import express from "express";

import { deleteAllObjects, deleteObject, editObject, getAllObjects, getObject, postObject } from "./resources/cats/cat.controller";
import { logger } from "./resources/middlewares";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get("/api", getAllObjects, logger);
app.get("/api/:id", getObject, logger);
app.post("/api", postObject, logger);
app.put("/api/:id", editObject, logger);
app.delete("/api", deleteAllObjects, logger);
app.delete("/api/:id", deleteObject, logger);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});