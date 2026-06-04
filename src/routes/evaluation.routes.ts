import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /api/evaluation:
 *   get:
 *     summary: Evaluation summary endpoint
 *     tags:
 *       - Evaluation
 *     responses:
 *       200:
 *         description: Evaluation information
 */
router.get("/", (req, res) => {

  res.status(200).json({

    traceId: res.locals.traceId,

    success: true,

    data: {

      candidateName: "Anup Singh",

repositoryUrl:
  "https://github.com/AnupSingh6739/hintro-meeting-intelligence-backend",

deployedUrl:
  "https://hintro-meeting-intelligence-backend.onrender.com",

externalIntegration:
  "Telegram Bot API",

      project:
        "Hintro Meeting Intelligence Backend",

      features: [

        "JWT Authentication",

        "AI-powered transcript analysis",

        "Grounded AI citations",

        "Action item extraction",

        "PostgreSQL persistence",

        "Automated overdue reminders",

        "Telegram integration",

        "Structured logging",

        "Trace IDs",

        "Swagger API documentation"

      ],

      aiApproach: {

        model: "Groq Llama 3",

        grounding:
          "Transcript-only grounded analysis",

        hallucinationReduction:
          "Prompt constraints + citations",

        structuredOutput:
          "Strict JSON parsing"

      },

      architecture: {

        backend:
          "Node.js + Express + TypeScript",

        database:
          "PostgreSQL + Prisma ORM",

        scheduler:
          "node-cron",

        integrations:
          ["Telegram Bot API", "Groq API"]

      }

    }

  });

});

export default router;