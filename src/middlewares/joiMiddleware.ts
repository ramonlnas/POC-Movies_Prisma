
import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";


export default function joiMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      return res.sendStatus(404).send({
        error: validation.error.message
      })
    }

    next();
  }
}