# Project Architecture

This document defines the target architecture for the Jarvis project.

Its purpose is to establish a clear and stable architectural model that guides all implementation decisions across the repository.

This document must be treated as the authoritative architectural reference for:

- human contributors
- automated agents
- future maintainers

All implementation work must remain aligned with the principles, layers, and boundaries defined in this document.

---

# Architecture Objectives

The Jarvis architecture is designed to achieve the following objectives:

- modularity
- maintainability
- extensibility
- clear separation of responsibilities
- safe integration with external systems
- controlled adoption of AI capabilities
- predictable long-term evolution

The system must be able to evolve incrementally without requiring repeated architectural redesign.

---

# Project Purpose

Jarvis is a conversational assistant designed to allow users to interact with farm data through messaging channels.

The initial business goal is to enable users to send voice or text messages through WhatsApp and receive responses based on agricultural or livestock data stored in the system.

Example interaction:

User:
"Jarvis, decime cuántas cabezas tengo en el lote norte"

Jarvis:
"En el lote norte tenés 184 cabezas."

The project is intentionally designed to evolve through controlled stages, beginning with messaging infrastructure and later introducing AI-assisted interpretation.

---

# Architecture Philosophy

Jarvis follows a layered, modular, and service-oriented architecture.

The architecture is based on the principle that each layer must have a clearly defined responsibility and must not assume responsibilities belonging to other layers.

This separation exists to ensure:

- code clarity
- easier testing
- lower coupling
- safer iteration
- controlled scalability

The architecture must remain explicit.

Convenience-based shortcuts that collapse layers or mix responsibilities are not allowed.

---

# High-Level Layer Model

Jarvis is organized into five architectural layers:

1. Channel Layer
2. Input Processing Layer
3. Command and Intent Layer
4. Query and Domain Layer
5. Intelligence Layer

In addition to these layers, the system also includes:

- Configuration Layer
- Shared Infrastructure Layer
- Persistence Layer
- Observability and Logging Support

Each layer has a different role and must remain isolated from responsibilities that belong elsewhere.

---

# Architectural Evolution by Stage

Jarvis evolves through three implementation stages.

The architecture must support all three stages from the beginning, even if some layers remain partially implemented in the initial phases.

## Stage 1 — Messaging Infrastructure

Focus:

- WhatsApp integration
- webhook ingestion
- message type detection
- media download
- temporary storage
- audio transcription
- outbound response messaging

At this stage, the system is primarily concerned with communication and message transport.

No business query execution is required yet.

## Stage 2 — Predefined Command System

Focus:

- command parsing
- predefined supported queries
- controlled mapping of requests to system actions
- query execution through a safe domain layer
- response formatting based on real data

At this stage, Jarvis becomes a structured data assistant.

The system understands only supported commands and uses controlled application logic to answer them.

## Stage 3 — Restricted Intelligence Layer

Focus:

- natural language interpretation using an LLM
- controlled mapping from free-form language to structured commands
- strict read-only data access
- validation of all AI-generated outputs
- semantic command execution through existing domain services

At this stage, Jarvis becomes more flexible in how it interprets requests, but it must remain bounded by safety and system constraints.

The LLM must never become a direct executor of database operations.

---

# Layer 1 — Channel Layer

## Purpose

The Channel Layer is responsible for interacting with external communication platforms.

In the initial version of Jarvis, the first supported channel is WhatsApp.

In the future, additional channels may be introduced, such as:

- web chat
- Telegram
- internal mobile clients
- voice integrations
- other messaging systems

## Responsibilities

The Channel Layer is responsible for:

- receiving incoming events from external platforms
- validating the basic structure of inbound payloads
- normalizing channel-specific payloads
- forwarding normalized messages to the internal processing flow
- sending outbound messages back through the appropriate platform

## Non-Responsibilities

The Channel Layer must not:

- contain business logic
- contain domain-specific query logic
- interpret agricultural meaning
- access the database directly
- implement AI reasoning

## Design Principles

The Channel Layer must remain replaceable and isolated.

This means that the internal business system must not become tightly coupled to WhatsApp-specific payload structures.

Whenever possible, incoming messages should be transformed into internal message objects before entering the rest of the system.

---

# Layer 2 — Input Processing Layer

## Purpose

The Input Processing Layer transforms raw inbound content into normalized processable input.

This layer exists because external messages may arrive in different formats, such as:

- plain text
- audio
- attachments
- structured channel payloads

The system must normalize these inputs before interpretation or execution can occur.

## Responsibilities

This layer is responsible for:

- detecting message type
- identifying supported and unsupported inputs
- retrieving media metadata
- downloading audio files
- storing media temporarily
- sending audio files to speech-to-text systems
- returning normalized text content for downstream processing

## Non-Responsibilities

This layer must not:

- decide which domain query should run
- contain business decision logic
- query farm data
- generate final business responses
- implement LLM-based interpretation

## Design Principles

The output of this layer must be normalized and predictable.

For example, after transcription, the system should produce a consistent internal representation such as:

- source channel
- sender identity
- original message metadata
- normalized text
- message context metadata

This normalized representation becomes the input to the Command and Intent Layer.

---

# Layer 3 — Command and Intent Layer

## Purpose

The Command and Intent Layer translates normalized user input into structured internal actions.

This is the first layer that begins to understand what the user is asking for.

In Stage 2, this understanding is rule-based and limited to predefined supported commands.

In Stage 3, this layer may be assisted by the Intelligence Layer, but it must still produce structured, validated command objects.

## Responsibilities

This layer is responsible for:

- parsing normalized text input
- identifying supported commands
- extracting parameters from user input
- validating command structure
- producing structured command objects
- routing commands to the appropriate domain services

Examples of structured commands include:

- get current stock by lot
- get total animals
- get monthly births
- get stock by category
- compare stock between periods

## Non-Responsibilities

This layer must not:

- execute raw SQL
- access the database directly
- contain WhatsApp-specific payload handling
- contain speech-to-text logic
- allow unrestricted AI output to pass directly to execution

## Design Principles

This layer is the bridge between user language and business logic.

Its output must always be structured, deterministic, and safe to validate.

Free-form user language must never directly trigger uncontrolled execution.

---

# Layer 4 — Query and Domain Layer

## Purpose

The Query and Domain Layer contains the business logic that answers structured requests.

This is the core business layer of Jarvis.

It is responsible for turning validated commands into controlled queries against the system's farm-related data.

## Responsibilities

This layer is responsible for:

- implementing domain services
- querying business data
- applying business rules
- aggregating results
- enforcing controlled read-only data access
- formatting domain-level results for response construction

Examples of domain responsibilities:

- determine the stock in a given lot
- aggregate animals by category
- calculate total active animals
- retrieve movement counts for a period
- compare current values against a previous period

## Non-Responsibilities

This layer must not:

- parse raw WhatsApp payloads
- transcribe audio
- interpret unrestricted natural language
- send outbound messages directly through channels
- delegate database structure decisions to the LLM

## Design Principles

All data access must remain centralized in controlled services or repositories.

The LLM, if present, must never bypass this layer.

The domain layer is the system of record for how Jarvis answers business questions.

---

# Layer 5 — Intelligence Layer

## Purpose

The Intelligence Layer adds optional AI-assisted interpretation to the system.

Its role is not to replace the application architecture, but to increase flexibility in how user requests are interpreted.

This layer is introduced only in Stage 3.

## Responsibilities

This layer is responsible for:

- interpreting free-form user language
- mapping natural language to structured command candidates
- proposing structured intent objects
- assisting with parameter extraction when language is ambiguous or flexible

## Non-Responsibilities

The Intelligence Layer must not:

- execute database queries directly
- generate unrestricted SQL for direct execution
- modify application state
- write to the database
- access unauthorized data
- bypass validation rules
- become the source of truth for business logic

## Safety Rules

All outputs from the Intelligence Layer must be treated as untrusted until validated.

The output must always be converted into structured internal commands and then validated by controlled application logic.

The recommended pattern is:

User language  
→ Intelligence Layer  
→ Structured command candidate  
→ Validation  
→ Domain execution

The following pattern is prohibited:

User language  
→ LLM  
→ direct SQL execution

## Design Principles

The Intelligence Layer is an interpretation layer, not an execution layer.

It enhances flexibility, but it must not weaken architectural control.

---

# Configuration Layer

## Purpose

The Configuration Layer centralizes access to environment-dependent settings.

Examples include:

- API tokens
- WhatsApp credentials
- storage paths
- speech-to-text configuration
- LLM configuration
- database settings
- runtime environment values

## Responsibilities

This layer is responsible for:

- reading environment variables
- validating required configuration
- exposing configuration values in a structured way
- preventing scattered configuration logic across the codebase

## Design Principles

Configuration must not be hardcoded.

Secrets must not be logged or committed.

Configuration access must be centralized and explicit.

---

# Shared Infrastructure Layer

## Purpose

The Shared Infrastructure Layer contains reusable technical components used across modules.

Examples include:

- logging utilities
- error models
- response builders
- common DTOs
- utility functions
- shared interfaces

## Responsibilities

This layer is responsible for supporting reuse without introducing domain confusion.

It must contain only technical shared concerns, not business-specific logic.

## Design Principles

Shared components must remain generic enough to be reused safely.

Business rules must not be moved into common helpers simply for convenience.

---

# Persistence Layer

## Purpose

The Persistence Layer encapsulates access to stored data.

This includes both business data and, if needed, interaction trace data.

Examples include:

- livestock data
- lots
- movements
- aggregated metrics
- message interaction logs
- task or audit records, if introduced later

## Responsibilities

This layer is responsible for:

- repository access
- query execution through controlled interfaces
- data retrieval optimized for business services
- persistence of operational records when required

## Design Principles

Controllers must never access the database directly.

Persistence access must remain behind repositories or domain services.

The database schema must not be exposed directly to AI components.

---

# Observability and Logging

## Purpose

Jarvis must remain observable during development and production operation.

Observability is critical because the system interacts with multiple boundaries:

- external messaging APIs
- media flows
- speech-to-text services
- domain queries
- optional AI interpretation

## Responsibilities

The observability strategy should include:

- structured logging
- traceable message processing steps
- explicit error reporting
- controlled operational visibility

## Logging Rules

Logs must not expose:

- credentials
- tokens
- sensitive personal data
- secrets

Logs should be meaningful enough to diagnose failures without creating security exposure.

---

# Recommended Module Structure

The repository should be organized in a way that reflects the architectural model.

A recommended application structure is:

```txt
src/
  modules/
    whatsapp/
    messaging/
    media/
    transcription/
    commands/
    domain/
    intelligence/
    response/
    interaction-log/
  common/
  config/
