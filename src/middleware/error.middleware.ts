import {
  Request,
  Response,
  NextFunction
} from "express";

import { AppError }
from "../utils/AppError";

export const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  console.error(error);

  if (error instanceof AppError) {

    return res.status(error.statusCode).json({

      traceId: res.locals.traceId,

      success: false,

      error: {
        code: "APP_ERROR",
        message: error.message
      }

    });

  }

  return res.status(500).json({

    traceId: res.locals.traceId,

    success: false,

    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Something went wrong"
    }

  });

};