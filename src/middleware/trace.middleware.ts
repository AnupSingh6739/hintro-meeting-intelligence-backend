import { Request, Response, NextFunction }
from "express";

import { v4 as uuidv4 }
from "uuid";

export const traceMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const traceId =
    req.headers["x-trace-id"] as string
    || uuidv4();

  req.headers["x-trace-id"] = traceId;

  res.locals.traceId = traceId;

  next();

};