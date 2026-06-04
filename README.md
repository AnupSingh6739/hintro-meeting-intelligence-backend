# Hintro Meeting Intelligence Backend

AI-powered meeting intelligence backend built with:

- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Swagger Documentation
- Groq AI
- Telegram Notifications
- Cron Jobs

---

## Features

### Authentication
- User Signup
- User Login
- JWT Protected Routes

### Meetings
- Create Meetings
- Store Transcript Segments
- Get All Meetings
- Get Meeting By ID

### AI Analysis
- Extract action items from transcripts using Groq AI

### Action Items
- Create action items
- Track status
- Due dates

### Reminder System
- Cron-based overdue task checker
- Telegram bot notifications

### Observability
- Request tracing
- Logger middleware
- Error middleware

### API Docs
Swagger documentation available at:

/api-docs

---

## Tech Stack

- Express
- TypeScript
- Prisma
- PostgreSQL
- Swagger
- Node-cron
- Groq SDK
- Telegram Bot API

---

## Local Setup

### Clone

```bash
git clone <repo-url>
```

### Install dependencies

```bash
npm install
```

### Environment variables

Create `.env`

```env
DATABASE_URL=
JWT_SECRET=
GROQ_API_KEY=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
PORT=3000
```

### Prisma setup

```bash
npx prisma migrate dev
npx prisma generate
```

### Run project

```bash
npm run dev
```

---

## Deployment

Deployed on Render.

Production URL:

https://hintro-meeting-intelligence-backend.onrender.com

---

## API Documentation

Swagger Docs:

https://hintro-meeting-intelligence-backend.onrender.com/api-docs

## Live Deployment

https://hintro-meeting-intelligence-backend.onrender.com

## Swagger Docs

https://hintro-meeting-intelligence-backend.onrender.com/api-docs

## Evaluation Endpoint

https://hintro-meeting-intelligence-backend.onrender.com/api/evaluation