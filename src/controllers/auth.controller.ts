import { Request, Response } from "express";
import { signupSchema, loginSchema } from "../validators/auth.validator";

import {
  signupService,
  loginService
} from "../services/auth.service";

export const signup = async (req: Request, res: Response) => {
  try {
    const validatedData = signupSchema.parse(req.body);

    const result = await signupService(validatedData);

    res.status(201).json({
  traceId: res.locals.traceId,
  success: true,
      message: "Signup successful",
      data: result
    });
  } catch (error: any) {
    res.status(400).json({
  traceId: res.locals.traceId,
  success: false,
      message: error.message || "Something went wrong"
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {

    const validatedData = loginSchema.parse(req.body);

    const result = await loginService(
      validatedData.email,
      validatedData.password
    );

    res.status(201).json({
  traceId: res.locals.traceId,
  success: true,
      message: "Login successful",
      data: result
    });

  } catch (error: any) {

    res.status(400).json({
  traceId: res.locals.traceId,
  success: false,
      message: error.message || "Something went wrong"
    });

  }
};