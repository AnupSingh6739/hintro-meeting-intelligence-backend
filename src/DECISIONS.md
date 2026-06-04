# Technical Decisions

## Database: PostgreSQL

Chosen because:
- Reliable relational database
- Strong consistency
- Excellent Prisma support
- Suitable for structured meeting and action item data

Alternatives considered:
- MongoDB
- SQLite

Tradeoffs:
- Slightly more setup complexity than SQLite
- Better production scalability

---

## ORM: Prisma

Chosen because:
- Type safety
- Excellent TypeScript integration
- Fast schema iteration
- Clean migrations

Alternatives:
- Sequelize
- TypeORM

Tradeoffs:
- Prisma generates client code
- Slight learning curve

---

## Authentication: JWT

Chosen because:
- Stateless authentication
- Easy API integration
- Suitable for distributed systems

Alternatives:
- Session-based authentication

Tradeoffs:
- Requires token management
- Simpler scaling compared to sessions

---

## AI Provider: Groq

Chosen because:
- Fast inference
- Free developer usage
- OpenAI-compatible APIs

Alternatives:
- OpenAI
- Gemini
- Claude

Tradeoffs:
- Smaller ecosystem than OpenAI
- Excellent performance

---

## External Integration: Telegram Bot API

Chosen because:
- Easy setup
- Real-time notifications
- Public API support

Alternatives:
- Slack
- Discord
- Email APIs

Tradeoffs:
- Simpler than enterprise integrations
- Excellent for assignment workflow