import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  createMeeting,
  getMeetings,
  getMeetingById,
  analyzeMeeting
} from "../controllers/meeting.controller";


const router = Router();

router.post(
  "/",
  authenticate,
  createMeeting
);

router.get(
  "/",
  authenticate,
  getMeetings
);

router.get(
  "/:id",
  authenticate,
  getMeetingById
);

router.post(
  "/:id/analyze",
  authenticate,
  analyzeMeeting
);

export default router;