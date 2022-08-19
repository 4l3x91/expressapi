import { NextFunction, Request, Response } from 'express';

export const logger = ((req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    next();
});

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json(err.message)
}

export const notFoundHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(404).json(err.message)
}