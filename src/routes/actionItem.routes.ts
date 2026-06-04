import { Router } from "express";

import { authenticate }
from "../middleware/auth.middleware";

import {
  getActionItems,
  getOverdueActionItems,
  updateActionItemStatus
} from "../controllers/actionItem.controller";

const router = Router();

router.get(
  "/",
  authenticate,
  getActionItems
);

router.get(
  "/overdue",
  authenticate,
  getOverdueActionItems
);

router.patch(
  "/:id",
  authenticate,
  updateActionItemStatus
);

export default router;