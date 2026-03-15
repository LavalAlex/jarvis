# Task 001 — Project Initialization

Stage: 1 — Messaging Infrastructure

---

# Goal

Initialize the backend structure for the Jarvis API using NestJS.

The purpose of this task is to establish a clean and scalable project structure that will support future messaging integrations and conversational capabilities.

This task focuses exclusively on creating the foundational backend architecture.

---

# Context

Jarvis is a conversational assistant designed to interact with farm data through messaging channels.

The backend will act as the central orchestration layer for:

- messaging integrations
- voice transcription
- command parsing
- AI-assisted interpretation

At this stage, only the foundational API structure is required.

---

# Requirements

1. Initialize a NestJS project using TypeScript.
2. Configure a clean project structure following NestJS standards.
3. Ensure the following folders exist:

src/modules  
src/common  
src/config  

4. Enable basic logging functionality.
5. Ensure the project can start successfully.

---

# Technical Constraints

- Use NestJS.
- Use TypeScript.
- Do not introduce unnecessary dependencies.
- Follow the architecture guidelines defined in `docs/ARCHITECTURE_GUIDELINES.md`.

---

# Definition of Done

The task is complete when:

- The NestJS project structure exists.
- The application starts successfully.
- No lint or build errors occur.
