import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";

import {
  getActionItemsService,
  getOverdueActionItemsService,
  updateActionItemStatusService
} from "../services/actionItem.service";

export const getActionItems = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const items = await getActionItemsService(
      req.user!.userId
    );

    res.status(200).json({
      success: true,
      data: items
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

export const getOverdueActionItems = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const items = await getOverdueActionItemsService(
      req.user!.userId
    );

    res.status(200).json({
      success: true,
      data: items
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

export const updateActionItemStatus = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const updatedItem =
      await updateActionItemStatusService(
        req.params.id as string,
        req.body.status,
        req.user!.userId
      );

    res.status(200).json({
      success: true,
      data: updatedItem
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};