import prisma from "../config/prisma";

interface TranscriptInput {
  timestamp: string;
  speaker: string;
  text: string;
}

interface CreateMeetingInput {
  title: string;
  participants: string[];
  meetingDate: string;
  transcript: TranscriptInput[];
  userId: string;
}

export const createMeetingService = async (
  data: CreateMeetingInput
) => {

  const meeting = await prisma.meeting.create({
    data: {
      title: data.title,
      participants: data.participants,
      meetingDate: new Date(data.meetingDate),
      createdBy: data.userId,

      transcripts: {
        create: data.transcript
      }
    },

    include: {
      transcripts: true
    }
  });

  return meeting;
};

export const getMeetingsService = async (
  userId: string,
  page: number,
  limit: number
) => {

  const skip = (page - 1) * limit;

  const meetings = await prisma.meeting.findMany({
    where: {
      createdBy: userId
    },

    include: {
      transcripts: true
    },

    skip,
    take: limit,

    orderBy: {
      createdAt: "desc"
    }
  });

  return meetings;
};

export const getMeetingByIdService = async (
  meetingId: string,
  userId: string
) => {

  const meeting = await prisma.meeting.findFirst({
    where: {
      id: meetingId,
      createdBy: userId
    },

    include: {
      transcripts: true,
      actionItems: true
    }
  });

  if (!meeting) {
    throw new Error("Meeting not found");
  }

  return meeting;
};

interface AIActionItem {
  task: string;
  assignee: string;
  dueDate?: string | null;
  citation: string;
}

export const saveActionItemsService = async (
  meetingId: string,
  actionItems: AIActionItem[]
) => {

  if (!actionItems.length) {
    return;
  }

  await prisma.actionItem.createMany({
    data: actionItems.map((item) => ({
      meetingId,
      task: item.task,
      assignee: item.assignee,

      dueDate: item.dueDate
        ? new Date(item.dueDate)
        : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }))
  });

};