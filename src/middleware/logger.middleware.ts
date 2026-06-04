import { Request, Response, NextFunction }
from "express";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const startTime = Date.now();

  res.on("finish", () => {

    const log = {
      timestamp: new Date().toISOString(),

      traceId: res.locals.traceId,

      method: req.method,

      path: req.originalUrl,

      status: res.statusCode,

      duration: `${Date.now() - startTime}ms`
    };

    console.log(JSON.stringify(log, null, 2));

  });

  next();

};