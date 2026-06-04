import { Router } from "express";

import { authenticate }
from "../middleware/auth.middleware";

import {
  getActionItems,
  getOverdueActionItems,
  updateActionItemStatus
} from "../controllers/actionItem.controller";

const router = Router();

/**
 * @swagger
 * /api/action-items:
 *   get:
 *     summary: Get all action items
 *     tags:
 *       - Action Items
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Action items fetched
 */

router.get(
  "/",
  authenticate,
  getActionItems
);

/**
 * @swagger
 * /api/action-items/overdue:
 *   get:
 *     summary: Get overdue action items
 *     tags:
 *       - Action Items
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Overdue action items fetched
 */

router.get(
  "/overdue",
  authenticate,
  getOverdueActionItems
);

/**
 * @swagger
 * /api/action-items/{id}:
 *   patch:
 *     summary: Update action item status
 *     tags:
 *       - Action Items
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: COMPLETED
 *     responses:
 *       200:
 *         description: Action item updated
 */

router.patch(
  "/:id",
  authenticate,
  updateActionItemStatus
);

export default router;