# Task 003 — WhatsApp Webhook Endpoint

Stage: 1 — Messaging Infrastructure

---

# Goal

Implement the webhook endpoint that will receive incoming messages from the WhatsApp Cloud API.

---

# Context

WhatsApp sends message events to a configured webhook URL.

Jarvis must expose an endpoint capable of receiving these events.

---

# Requirements

1. Implement the following endpoint:

POST /webhooks/whatsapp

2. The endpoint must:

- receive webhook payloads
- validate payload structure
- forward the payload to the WhatsApp service

3. The endpoint must return a valid HTTP response.

---

# Technical Constraints

- Controller must not contain business logic.
- Payload validation should occur before processing.

---

# Definition of Done

- Endpoint exists and accepts requests.
- Payloads are forwarded to the service layer.
