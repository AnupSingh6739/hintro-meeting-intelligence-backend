import { z } from "zod";

export const createMeetingSchema = z.object({
  title: z.string().min(3),

  participants: z.array(
    z.email()
  ),

  meetingDate: z.string(),

  transcript: z.array(
    z.object({
      timestamp: z.string(),
      speaker: z.string(),
      text: z.string()
    })
  )
});