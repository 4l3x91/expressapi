import express from "express";

import { getAllObjects, getObject, postObject, deleteObject, deleteAllObjects, logger, editObject } from "./resources/cats/cat.controller";

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