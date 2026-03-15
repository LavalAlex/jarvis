# Architecture Guidelines

This document describes the architectural principles guiding the development of Jarvis.

These guidelines ensure that the system remains:

- modular
- maintainable
- scalable
- testable

All implementations must follow these architectural rules.

---

# Layered Architecture

Jarvis follows a layered architecture composed of three main layers.

1. Channel Layer  
2. Command Layer  
3. Intelligence Layer

---

# Channel Layer

The channel layer is responsible for external integrations.

Examples include:

- WhatsApp
- messaging platforms
- webhook integrations

Responsibilities:

- receive external messages
- normalize incoming payloads
- forward messages to internal services

This layer must not contain business logic.

---

# Command Layer

The command layer interprets user requests and maps them to system actions.

Responsibilities:

- command parsing
- intent detection
- request validation
- command execution routing

This layer transforms natural language input into structured actions.

---

# Intelligence Layer

The intelligence layer introduces optional AI capabilities.

Responsibilities include:

- natural language interpretation
- mapping free-form requests to structured commands
- enforcing safety restrictions

Important constraint:

The intelligence layer must never directly execute database queries.

All queries must be routed through controlled services.

---

# Database Access

Database access must be centralized through repository or service layers.

Direct database queries inside controllers are prohibited.

This ensures:

- consistent data access
- easier refactoring
- better testability

---

# Security Constraints

The system must enforce strict restrictions on AI-generated actions.

AI systems must never:

- modify database records
- generate destructive queries
- access restricted tables

All AI-generated requests must pass validation layers before execution.

---

# Modularity

Each feature should be implemented as a self-contained module.

Modules must:

- expose clear interfaces
- avoid tight coupling
- remain independently testable

---

# Scalability

Architecture decisions must prioritize long-term scalability.

Features should be designed so that:

- new channels can be added easily
- new commands can be introduced without major refactoring
- AI capabilities can evolve independently
