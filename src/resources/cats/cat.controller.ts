import { NextFunction, Request, Response } from "express";
import { cats } from "../data/data.handler";
import catRouter from "./cat.router";

export const getObject = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const cat = cats.find((x) => x.id === id);

  if (cat) res.status(200).json(cat);
  else res.status(204).json({ message: "Not found" });

  next();
};

export const getAllObjects = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json(cats);
  next();
};

export const deleteAllObjects = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json(cats.splice(0, cats.length));
  next();
};

export const deleteObject = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  var cat = cats.find((x) => x.id === id);

  if (cat) res.status(200).json(cats.splice(cats.indexOf(cat), 1));
  else res.status(204).json({ message: "Not found" });

  next();
};

export const validateObject = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: Validate object
};

export const postObject = (req: Request, res: Response, next: NextFunction) => {
  // TODO: Post object
};

export const editObject = (req: Request, res: Response, next: NextFunction) => {
  // TODO: Put object
};

export const getEndPoints = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(
    catRouter.stack
    .filter(r => r.route)
    .map(r => {
      return {
        method: Object.keys(r.route.methods)[0].toUpperCase(),
        path: r.route.path
      };
    }));
}