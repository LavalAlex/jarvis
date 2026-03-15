# Task Template

This document defines the standard template used for creating backlog tasks within the Jarvis repository.

All backlog tasks must follow this structure without exception.

This template ensures:

- consistent task definitions
- predictable agent execution
- clear development scope
- explicit requirements
- reliable validation criteria

When creating a new backlog task, this template must be copied and completed.

---

# Task {ID} — {Task Title}

Stage: {stage-number}

---

# Goal

Clearly describe the primary objective of this task.

The goal must explain what functionality must exist after the task is completed.

This section should answer the question:

What capability should exist once this task is implemented?

The goal must be written clearly and concisely.

---

# Context

Provide background information necessary to understand the task.

This section should explain:

- why the task exists
- where it fits in the system architecture
- how it relates to previous tasks
- any relevant design decisions

The context should enable a developer or agent to understand the broader system purpose.

---

# Requirements

This section defines the functional requirements of the task.

Requirements must be explicit and verifiable.

Each requirement should represent a specific implementation objective.

Example format:

1. Create a NestJS module named `whatsapp`.
2. Implement a controller responsible for receiving webhook events.
3. Implement a service responsible for processing webhook payloads.
4. Ensure incoming requests are validated before processing.

Requirements must avoid ambiguity.

---

# Technical Constraints

This section defines implementation restrictions.

Constraints may include:

- architecture rules
- framework usage
- dependency limitations
- security considerations
- coding standards requirements

Example constraints:

- Controllers must remain thin.
- Business logic must be placed in services.
- Direct database queries inside controllers are prohibited.
- No unnecessary dependencies may be introduced.

These constraints must be respected during implementation.

---

# Implementation Notes

This optional section may provide additional technical guidance.

Examples:

- integration considerations
- API usage notes
- performance considerations
- design recommendations

Implementation notes should not introduce new requirements.

They should provide helpful context only.

---

# Definition of Done

This section defines the exact conditions required for the task to be considered complete.

All items listed here must be satisfied.

Example:

The task is considered complete when:

1. The required module has been created.
2. The webhook endpoint accepts incoming requests.
3. Incoming payloads are validated.
4. Logging has been implemented.
5. The application builds successfully.
6. Lint checks pass.
7. No runtime errors occur during startup.

Definition of Done must always be explicit and verifiable.

---

# Expected Artifacts

This section describes the expected deliverables produced by the task.

Examples:

- new modules
- new services
- new controllers
- configuration changes
- documentation updates

Artifacts must correspond to the requirements defined earlier.

---

# Validation Steps

Describe how the task implementation should be validated.

Examples:

- run lint checks
- run unit tests
- start the application and verify endpoint behavior
- inspect logs for correct output

Validation ensures that the implementation behaves as expected.

---

# Branch Mapping

Each task must correspond to a dedicated Git branch.

Branch naming format:

task-{task-id}-{short-description}

Example:

task-003-whatsapp-webhook-endpoint

The branch must be created before implementation begins.

---

# Commit Convention

Commits related to this task must follow the format:

task-{task-id}: short description

Example:

task-003: implement whatsapp webhook endpoint

---

# Summary Requirement

After completing the task, a structured implementation summary must be produced containing:

PLAN  
FILES MODIFIED  
COMMANDS EXECUTED  
RESULT  
PENDING ITEMS  
TECHNICAL NOTES  
RISKS

This summary ensures traceability and facilitates code review.
