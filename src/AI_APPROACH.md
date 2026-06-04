# AI Approach

## Prompt Design

The AI prompt instructs the model to:
- Analyze meeting transcripts
- Extract grounded action items
- Generate summaries
- Avoid hallucinations
- Include transcript citations

---

## Citation Strategy

Each generated insight references transcript timestamps.

Example:

```json
{
  "task": "Prepare release notes",
  "citation": "00:20"
}
```

This ensures traceability to transcript segments.

---

## Hallucination Prevention

The prompt explicitly instructs the model:
- Do not invent attendees
- Do not invent tasks
- Do not add information outside transcript

Only transcript-grounded outputs are allowed.

---

## Output Validation

Outputs are parsed and validated before saving:
- Required fields checked
- Citations verified
- Invalid AI outputs rejected

---

## Known Limitations

- AI quality depends on transcript clarity
- Timestamp extraction relies on transcript formatting
- No semantic speaker verification