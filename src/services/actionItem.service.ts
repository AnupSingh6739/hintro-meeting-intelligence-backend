import prisma from "../config/prisma";

export const getActionItemsService = async (
  userId: string
) => {

  const actionItems = await prisma.actionItem.findMany({

    where: {
      meeting: {
        createdBy: userId
      }
    },

    orderBy: {
      createdAt: "desc"
    }
  });

  return actionItems;
};

export const getOverdueActionItemsService = async (
  userId: string
) => {

  const items = await prisma.actionItem.findMany({

    where: {
      status: {
        not: "COMPLETED"
      },

      dueDate: {
        lt: new Date()
      },

      meeting: {
        createdBy: userId
      }
    }

  });

  return items;
};

export const updateActionItemStatusService = async (
  actionItemId: string,
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED",
  userId: string
) => {

  const existingItem = await prisma.actionItem.findFirst({

    where: {
      id: actionItemId,

      meeting: {
        createdBy: userId
      }
    }

  });

  if (!existingItem) {
    throw new Error("Action item not found");
  }

  const updatedItem = await prisma.actionItem.update({

    where: {
      id: actionItemId
    },

    data: {
      status
    }

  });

  return updatedItem;
};