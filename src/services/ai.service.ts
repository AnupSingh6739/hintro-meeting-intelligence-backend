import openai from "../config/ai";

interface TranscriptSegment {
  timestamp: string;
  speaker: string;
  text: string;
}

export const analyzeTranscript = async (
  transcript: TranscriptSegment[]
) => {

  const transcriptText = transcript
    .map(
      (segment) =>
        `[${segment.timestamp}] ${segment.speaker}: ${segment.text}`
    )
    .join("\n");

  const prompt = `
You are an AI meeting assistant.

Analyze the following meeting transcript.

IMPORTANT RULES:
- ONLY use information explicitly present in transcript.
- DO NOT hallucinate or invent details.
- Every decision and action item MUST include citation timestamp.
- If information is missing, say so.
- Return ONLY valid JSON.

Required JSON format:

{
  "summary": "string",

  "decisions": [
    {
      "decision": "string",
      "citation": "timestamp"
    }
  ],

  "actionItems": [
  {
    "task": "string",
    "assignee": "string",
    "dueDate": "YYYY-MM-DD or null",
    "citation": "timestamp"
  }
]
}

Transcript:

${transcriptText}
`;

  const completion = await openai.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "user",
        content: prompt
      }
    ],

    temperature: 0.2
  });

  const response =
  completion.choices[0].message.content || "{}";

const cleanedResponse = response
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanedResponse);
};