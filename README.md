# Jarvis

Jarvis is a conversational assistant designed to allow users to interact with farm data through messaging channels.

The primary objective of the project is to enable users to retrieve agricultural and livestock information using natural language through platforms such as WhatsApp.

Jarvis acts as a bridge between messaging platforms and structured farm data stored within backend systems.

The system is designed to evolve incrementally from a simple messaging integration into a structured conversational data assistant with controlled AI support.

---

# Project Vision

Farm data is often stored in structured systems but accessed through complex interfaces.

Jarvis aims to simplify data access by allowing users to ask questions directly through messaging channels.

Example interaction:

User  
"Jarvis, decime cuántas cabezas tengo en el lote norte."

Jarvis  
"En el lote norte tenés 184 cabezas."

The system converts conversational input into structured queries that retrieve the requested data from the system.

---

# Core Capabilities

Jarvis is designed to support the following capabilities:

- messaging integration with external platforms
- audio message processing
- speech-to-text transcription
- structured command interpretation
- domain-specific data queries
- conversational responses
- optional AI-assisted language interpretation

The system is intentionally designed to grow through controlled development stages.

---

# Development Stages

Jarvis evolves through three clearly defined implementation stages.

## Stage 1 — Messaging Infrastructure

Focus:

- WhatsApp integration
- webhook ingestion
- message type detection
- media download
- temporary media storage
- audio transcription
- outbound response messaging

At this stage Jarvis acts as a messaging processing system.

---

## Stage 2 — Command-Based Queries

Focus:

- predefined commands
- structured command parsing
- domain query execution
- response construction based on real system data

At this stage Jarvis becomes a structured data assistant.

---

## Stage 3 — AI-Assisted Interpretation

Focus:

- natural language interpretation using an LLM
- mapping free-form language to structured commands
- strict validation of AI outputs
- safe domain query execution

At this stage Jarvis becomes a conversational data interface.

AI components remain strictly controlled and must never directly execute database operations.

---

# Architecture Overview

Jarvis follows a layered architecture designed to ensure separation of responsibilities and long-term maintainability.

The system is organized into the following layers:

1. Channel Layer
2. Input Processing Layer
3. Command and Intent Layer
4. Query and Domain Layer
5. Intelligence Layer

Each layer has clearly defined responsibilities.

Detailed architectural documentation is available in:

