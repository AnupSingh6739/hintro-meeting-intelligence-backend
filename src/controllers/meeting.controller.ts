import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { createMeetingSchema } from "../validators/meeting.validator";
import {
  createMeetingService,
  getMeetingsService,
  getMeetingByIdService,
  saveActionItemsService
} from "../services/meeting.service";
import { analyzeTranscript } from "../services/ai.service";


export const createMeeting = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const validatedData = createMeetingSchema.parse(req.body);

    const meeting = await createMeetingService({
      ...validatedData,
      userId: req.user!.userId
    });

    res.status(201).json({
      success: true,
      data: meeting
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

export const getMeetings = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const meetings = await getMeetingsService(
      req.user!.userId,
      page,
      limit
    );

    res.status(200).json({
      success: true,
      data: meetings
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

export const getMeetingById = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const meeting = await getMeetingByIdService(
      req.params.id as string,
      req.user!.userId
    );

    res.status(200).json({
      success: true,
      data: meeting
    });

  } catch (error: any) {

    res.status(404).json({
      success: false,
      message: error.message
    });

  }

};

export const analyzeMeeting = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const meeting = await getMeetingByIdService(
      req.params.id as string,
      req.user!.userId
    );

    const analysis = await analyzeTranscript(
      meeting.transcripts
    );

    await saveActionItemsService(
  meeting.id,
  analysis.actionItems || []
);

    res.status(200).json({
      success: true,
      data: analysis
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

