# Task 005 — Message Type Detection

Stage: 1 — Messaging Infrastructure

---

# Goal

Detect the type of incoming WhatsApp messages.

Jarvis must differentiate between message types before processing.

---

# Context

WhatsApp messages can include:

- text
- audio
- media

At this stage, detection is required.

---

# Requirements

1. Detect message types:

- text
- audio
- unsupported

2. Route messages to appropriate handlers.

---

# Definition of Done

- Message type detection works.
- Unsupported message types are safely handled.
