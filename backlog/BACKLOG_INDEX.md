# Jarvis Backlog Index

This document defines the canonical index of all backlog tasks within the Jarvis repository.

The purpose of this index is to maintain a clear and verifiable mapping between:

- task identifiers
- backlog task files
- Git branches
- commits
- pull requests

This index acts as the authoritative registry of implementation tasks for the project.

It exists to support:

- clear development planning
- predictable execution order
- reliable traceability
- safe automated agent operation

This file must always remain synchronized with the `/backlog` directory.

No backlog task may exist without a corresponding entry in this index.

---

# Task Identification Model

Jarvis uses a strict task identification model.

Each task is uniquely identified by:

1. a numeric identifier
2. a descriptive task name
3. a dedicated Git branch
4. a corresponding backlog task file

All four elements must remain aligned.

Example:

Task Identifier  
003

Branch Name  
task-003-whatsapp-webhook-endpoint

Task File  
backlog/stage-1/003-whatsapp-webhook-endpoint.md

Commit Example  
task-003: implement whatsapp webhook endpoint

Pull Request Example  
task-003: implement whatsapp webhook endpoint

This alignment is mandatory and must never be broken.

---

# Task Execution Order

Tasks are executed sequentially within each stage.

The numeric identifier represents the intended execution order.

Tasks must not be executed out of order unless explicitly authorized.

This ordering ensures that system dependencies are respected during implementation.

---

# Stage 1 — Messaging Infrastructure

The following tasks establish the foundational messaging infrastructure required for Jarvis to interact with WhatsApp.

These tasks focus on message ingestion, media handling, and response capability.

---

## Task 001

Identifier  
001-project-initialization

Title  
Project Initialization

Expected Branch  
task-001-project-initialization

Task File  
backlog/stage-1/001-project-initialization.md

Description  
Initialize the NestJS backend project structure and establish the foundational API architecture.

---

## Task 002

Identifier  
002-whatsapp-module

Title  
WhatsApp Module Creation

Expected Branch  
task-002-whatsapp-module

Task File  
backlog/stage-1/002-whatsapp-module.md

Description  
Create the dedicated WhatsApp integration module responsible for receiving and processing messaging events.

---

## Task 003

Identifier  
003-whatsapp-webhook-endpoint

Title  
WhatsApp Webhook Endpoint

Expected Branch  
task-003-whatsapp-webhook-endpoint

Task File  
backlog/stage-1/003-whatsapp-webhook-endpoint.md

Description  
Implement the webhook endpoint responsible for receiving incoming WhatsApp message events.

---

## Task 004

Identifier  
004-webhook-logging

Title  
Webhook Payload Logging

Expected Branch  
task-004-webhook-logging

Task File  
backlog/stage-1/004-webhook-logging.md

Description  
Implement structured logging for incoming webhook payloads.

---

## Task 005

Identifier  
005-message-type-detection

Title  
Message Type Detection

Expected Branch  
task-005-message-type-detection

Task File  
backlog/stage-1/005-message-type-detection.md

Description  
Detect incoming WhatsApp message types such as text and audio.

---

## Task 006

Identifier  
006-audio-message-detection

Title  
Audio Message Detection

Expected Branch  
task-006-audio-message-detection

Task File  
backlog/stage-1/006-audio-message-detection.md

Description  
Identify audio messages and extract media identifiers from incoming webhook payloads.

---

## Task 007

Identifier  
007-media-download-service

Title  
Media Download Service

Expected Branch  
task-007-media-download-service

Task File  
backlog/stage-1/007-media-download-service.md

Description  
Implement the service responsible for downloading media files from the WhatsApp API.

---

## Task 008

Identifier  
008-media-storage

Title  
Temporary Media Storage

Expected Branch  
task-008-media-storage

Task File  
backlog/stage-1/008-media-storage.md

Description  
Implement temporary storage for downloaded media files.

---

## Task 009

Identifier  
009-audio-transcription

Title  
Audio Transcription Integration

Expected Branch  
task-009-audio-transcription

Task File  
backlog/stage-1/009-audio-transcription.md

Description  
Integrate a speech-to-text system to convert audio messages into text.

---

## Task 010

Identifier  
010-response-messaging

Title  
Response Messaging

Expected Branch  
task-010-response-messaging

Task File  
backlog/stage-1/010-response-messaging.md

Description  
Implement the ability for Jarvis to send response messages back through the WhatsApp API.

---

# Index Maintenance Rules

Whenever a new backlog task is created, the following steps must be performed:

1. Create the task file inside the appropriate stage directory.
2. Assign a unique numeric identifier.
3. Add the corresponding entry to this backlog index.
4. Define the expected branch name.
5. Ensure the identifier sequence remains continuous.

Identifiers must not be reused or skipped.

---

# Agent Validation Rule

Automated agents such as Claude must use this index to verify task identity before starting implementation.

The agent must confirm:

1. the current Git branch name
2. the task identifier embedded in the branch name
3. the existence of the task in this backlog index
4. the corresponding task file

If any mismatch is detected, the implementation must stop immediately and the inconsistency must be reported.

---

# Traceability Requirement

Every implementation activity must remain traceable through the following chain:

Backlog Index Entry  
Backlog Task File  
Task Branch  
Commit Messages  
Pull Request

Breaking this chain is not permitted.

---

# Final Principle

The backlog index represents the official registry of all implementation work in the Jarvis repository.

All development activities must be traceable through this document.
