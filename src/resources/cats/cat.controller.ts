import { NextFunction, Request, Response } from "express";
import { cats, dbPath, jsonReader, saveToFile } from "../data/data.handler";
import { Cat } from "./cat.model";
import catRouter from "./cat.router";

export const getObject = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const cat = cats.find((x) => x.id === id);

  if (cat) res.status(200).json(cat);
  else res.status(204).json({ message: "Not found" });

  next();
};

// Only works if it's here(?)
jsonReader(dbPath);

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
    let cat: Cat = {
      weight: req.body.weight + "kg",
      id: req.body.name[0].toLowerCase() + "-test",
      name: req.body.name,
      temperament: req.body.temperament,
      origin: req.body.origin,
      description: req.body.description,
      life_span: req.body.life_span,
      indoor: req.body.indoor,
      lap: req.body.lap,
      adaptability: req.body.adaptability,
      affection_level: req.body.affection_level,
      child_friendly: req.body.child_friendly,
      cat_friendly: req.body.cat_friendly,
      dog_friendly: req.body.dog_friendly,
      energy_level: req.body.energy_level,
      grooming: req.body.grooming,
      health_issues: req.body.health_issues,
      intelligence: req.body.intelligence,
      shedding_level: req.body.shedding_level,
      social_needs: req.body.social_needs,
      stranger_friendly: req.body.stranger_friendly,
      vocalisation: req.body.vocalisation,
      experimental: req.body.experimental,
      hairless: req.body.hairless,
      natural: req.body.natural,
      rare: req.body.rare,
      rex: req.body.rex,
      suppressed_tail: req.body.suppressed_tail,
      short_legs: req.body.short_legs,
      hypoallergenic: req.body.hypoallergenic,
      image: req.body.image
    };
    
    cats.push(cat);
    saveToFile(cats);
    console.log(cats);
    res.status(200).json(cat);

    next();
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