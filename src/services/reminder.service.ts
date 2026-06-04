import prisma from "../config/prisma";

export const checkOverdueTasks = async () => {
  console.log("Current Time:", new Date());
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

  overdueTasks.forEach((task: any) => {

    console.log(`
Task: ${task.task}
Assignee: ${task.assignee}
Meeting: ${task.meeting.title}
Due Date: ${task.dueDate.toISOString()}
Status: ${task.status}
`);

  });
  console.log("Overdue Tasks:", overdueTasks);
};