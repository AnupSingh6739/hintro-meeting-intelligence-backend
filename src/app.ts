import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import testRoutes from "./routes/test.routes";
import meetingRoutes from "./routes/meeting.routes";
import actionItemRoutes from "./routes/actionItem.routes";
import { startCronJobs } from "./utils/cron";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/test", testRoutes);
app.use("/api/meetings", meetingRoutes);
app.use("/api/action-items", actionItemRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hintro Backend Running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.use("/api/auth", authRoutes);

startCronJobs();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});