import prisma from "../config/prisma";
import { sendTelegramMessage }
from "./telegram.service";

export const checkOverdueTasks = async () => {
  const overdueTasks = await prisma.actionItem.findMany({

    where: {

      status: {
        not: "COMPLETED"
      },

      dueDate: {
        lt: new Date()
      }

    },

    include: {
      meeting: true
    }

  });

  if (!overdueTasks.length) {

    console.log("No overdue tasks found.");

    return;
  }

  console.log("\n===== OVERDUE TASK REMINDERS =====\n");

  for (const task of overdueTasks) {  

    const message = `
🚨 Overdue Task Reminder

Task: ${task.task}

Assignee: ${task.assignee}

Meeting: ${task.meeting.title}

Due Date:
${task.dueDate.toISOString()}

Status: ${task.status}
`;

console.log(message);

try {

  await sendTelegramMessage(message);

  console.log("Telegram reminder sent.");

} catch (error) {

  console.error(
    "Failed to send Telegram message:",
    error
  );

}

  }
};