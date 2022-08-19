import express from "express";
import { deleteAllObjects, deleteObject, editObject, getAllObjects, getEndPoints, getObject, getRandomObject, postObject } from "./cat.controller";

const catRouter = express.Router();
catRouter.get("/id/:id", getObject);
catRouter.get("/", getAllObjects);
catRouter.post("/", postObject);
catRouter.put("/", editObject);
catRouter.delete("/id/:id", deleteObject);
catRouter.delete("/", deleteAllObjects);
catRouter.get("/random", getRandomObject)
catRouter.get("/endpoints", getEndPoints)

export default catRouter;