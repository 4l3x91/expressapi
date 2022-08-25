import express from "express";
import { deleteObject, editObject, getAllObjects, getEndPoints, getObject, postObject } from "./cat.controller";

const catRouter = express.Router();
catRouter.get("/id/:id", getObject);
catRouter.get("/", getAllObjects);
catRouter.post("/", postObject); 
catRouter.put("/:id", editObject);
catRouter.delete("/id/:id", deleteObject);
catRouter.get("/endpoints", getEndPoints)

export default catRouter;