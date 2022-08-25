import { NextFunction, Request, Response } from "express";
import { nanoid } from "nanoid";
import { cats, dbPath, jsonReader, saveToFile } from "../data/data.handler";
import { Cat } from "./cat.model";
import catRouter from "./cat.router";

jsonReader(dbPath);

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
  res.status(204).json(cats.splice(0, cats.length));
  next();
};

export const deleteObject = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  var cat = cats.find((x) => x.id === id);

  if (cat) {
    res.status(204).json(cats.splice(cats.indexOf(cat), 1));
    saveToFile(cats);
  }
  else res.status(404).json({ message: "Not found" });

  next();
};

export const postObject = (req: Request, res: Response, next: NextFunction) => {
  let cat: Cat = {
    weight: req.body.weight,
    id: nanoid(),
    name: req.body.name,
    origin: req.body.origin,
    description: req.body.description,
    life_span: req.body.life_span,
    adaptability: req.body.adaptability,
    affection_level: req.body.affection_level,
    grooming: req.body.grooming,
    health_issues: req.body.health_issues,
    intelligence: req.body.intelligence,
    energy_level: req.body.energy_level,
    image: req.body.image,
  };

  cats.push(cat);
  saveToFile(cats);
  console.log("Cat posted successfully!");
  res.status(200).json(cat);

  next();
};

export const editObject = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const cat = cats.find((x) => x.id === id);
    if (cat) {
      const catIndex = cats.indexOf(cat);
      cats[catIndex] = {id, ...req.body};
      res.status(200).json(cats[catIndex]);
      saveToFile(cats);
    } else res.status(404).json({ message: "Cat not found." });
  
    next();
};

export const getEndPoints = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json(
    catRouter.stack
      .filter((r) => r.route)
      .map((r) => {
        return {
          method: Object.keys(r.route.methods)[0].toUpperCase(),
          path: r.route.path,
        };
      })
  );
};