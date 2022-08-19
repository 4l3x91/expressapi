import express from "express";
import { deleteAllObjects, deleteObject, editObject, getAllObjects, getObject, postObject } from "./cat.controller";

const catRouter = express.Router();
catRouter.get("/id/:id", getObject);
catRouter.get("/", getAllObjects);
catRouter.post("/", postObject);
catRouter.put("/", editObject);
catRouter.delete("/id/:id", deleteObject);
catRouter.delete("/", deleteAllObjects);

export default catRouter;