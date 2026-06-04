import cron from "node-cron";

import { checkOverdueTasks }
from "../services/reminder.service";

export const startCronJobs = () => {

  cron.schedule("* * * * *", async () => {

    console.log("Running overdue task checker...");

    await checkOverdueTasks();

  });

};