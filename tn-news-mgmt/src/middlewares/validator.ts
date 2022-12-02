import { plainToClass } from "class-transformer";
import { NextFunction, Request, Response } from "express";

export class EntityValidable { }

export const validator = <T extends EntityValidable> (entity: T) => {
    return function (req: Request, res: Response, next: NextFunction) {
        next();
    };
};
