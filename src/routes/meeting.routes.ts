import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  createMeeting,
  getMeetings,
  getMeetingById,
  analyzeMeeting
} from "../controllers/meeting.controller";


const router = Router();

/**
 * @swagger
 * /api/meetings:
 *   post:
 *     summary: Create meeting
 *     tags:
 *       - Meetings
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               participants:
 *                 type: array
 *                 items:
 *                   type: string
 *               meetingDate:
 *                 type: string
 *               transcript:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                     speaker:
 *                       type: string
 *                     text:
 *                       type: string
 *     responses:
 *       201:
 *         description: Meeting created
 */
router.post(
  "/",
  authenticate,
  createMeeting
);

/**
 * @swagger
 * /api/meetings:
 *   get:
 *     summary: Get all meetings
 *     tags:
 *       - Meetings
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Meetings fetched
 */
router.get(
  "/",
  authenticate,
  getMeetings
);

/**
 * @swagger
 * /api/meetings/{id}:
 *   get:
 *     summary: Get meeting by ID
 *     tags:
 *       - Meetings
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Meeting fetched
 */

router.get(
  "/:id",
  authenticate,
  getMeetingById
);

/**
 * @swagger
 * /api/meetings/{id}/analyze:
 *   post:
 *     summary: Analyze meeting transcript using AI
 *     tags:
 *       - AI Analysis
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: AI analysis completed
 */

router.post(
  "/:id/analyze",
  authenticate,
  analyzeMeeting
);

export default router;