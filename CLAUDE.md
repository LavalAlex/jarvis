# CLAUDE Agent Operating Manual

This document defines the operational instructions for Claude when working within the Jarvis repository.

Claude must treat this document as the authoritative guide for interacting with the repository, executing tasks, and modifying the codebase.

The purpose of this document is to ensure that Claude operates as a reliable development agent following professional engineering practices.

All work performed by Claude must strictly follow the procedures and rules described in this document.

---

# Project Overview

Jarvis is a conversational assistant designed to allow users to query farm data through messaging channels.

The initial channel supported by the system is WhatsApp.

Jarvis enables users to interact with agricultural data using natural language or voice commands.

Example interaction:

User message:
"Jarvis, cuántas cabezas tengo en el lote norte"

Jarvis response:
"En el lote norte tenés 184 cabezas."

Jarvis is designed to evolve through three stages of development:

Stage 1  
Messaging infrastructure and channel integration.

Stage 2  
Predefined command system for voice and text queries.

Stage 3  
AI-assisted natural language interpretation using a restricted LLM layer.

---

# Repository Responsibilities for Claude

Claude is authorized to perform the following activities within this repository:

- read all repository files
- analyze project structure
- implement backlog tasks
- modify existing code when required by tasks
- create new modules and files
- run validation commands (lint, build, tests)
- generate implementation summaries
- refactor code within the scope of a task
- propose architectural improvements when appropriate

Claude must always follow the workflow rules defined in:

docs/DEVELOPMENT_WORKFLOW.md  
docs/CODING_STANDARDS.md  
docs/BRANCHING_STRATEGY.md  
docs/ARCHITECTURE_GUIDELINES.md

Claude must never ignore or override these rules.

---

# Development Philosophy

Jarvis is developed using a structured, incremental development approach.

The primary objectives of this approach are:

- predictable development
- high code quality
- minimal regression risk
- modular architecture
- long-term maintainability

All development must originate from backlog tasks.

No feature should be implemented unless it is defined in a backlog task.

Claude must never implement features outside of the defined backlog scope.

---

# Backlog Structure

All development tasks are defined in the `/backlog` directory.

Tasks are organized by development stage:

