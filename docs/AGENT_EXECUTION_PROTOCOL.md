# Agent Execution Protocol

This document defines the operational protocol that automated agents must follow when performing development tasks within the Jarvis repository.

The purpose of this protocol is to guarantee that automated development activity remains:

- structured
- traceable
- safe
- predictable
- aligned with project standards

This protocol applies to all automated agents working within the repository, including Claude.

Agents must follow this protocol without exception.

---

# Protocol Objectives

The execution protocol exists to ensure that automated development activity:

1. follows the defined backlog structure
2. respects architectural constraints
3. produces predictable and traceable changes
4. prevents uncontrolled modifications
5. aligns with professional engineering practices

Agents must treat this protocol as the authoritative procedure for executing tasks.

---

# Execution Model Overview

Every implementation task must follow the same structured lifecycle.

The lifecycle consists of the following phases:

1. Task Identification
2. Documentation Loading
3. Repository Analysis
4. Implementation Planning
5. Task Implementation
6. Validation
7. Commit and Reporting

Agents must execute these phases sequentially.

Skipping phases is not permitted.

---

# Phase 1 — Task Identification

Before beginning any implementation work, the agent must determine the task currently assigned.

The active task is determined by the current Git branch.

Branch naming convention:

task-{task-id}-{short-description}

Example:

task-004-webhook-logging

The agent must extract the task identifier from the branch name.

Example:

Branch name  
task-004-webhook-logging

Task identifier  
004

The agent must then locate the corresponding backlog entry.

The backlog entry must exist in:

backlog/BACKLOG_INDEX.md

The agent must verify that the task exists in the backlog index.

If the task cannot be located in the backlog index, implementation must not begin.

The inconsistency must be reported.

---

# Phase 2 — Documentation Loading

Before executing any task, the agent must load and review the following project documentation:

CLAUDE.md  
docs/DEVELOPMENT_WORKFLOW.md  
docs/BRANCHING_STRATEGY.md  
docs/CODING_STANDARDS.md  
docs/ARCHITECTURE_GUIDELINES.md  
docs/AGENT_EXECUTION_PROTOCOL.md  

These documents define the operational and architectural rules of the repository.

Agents must fully respect the rules defined in these documents.

---

# Phase 3 — Backlog Task Loading

The agent must locate the task file corresponding to the active branch.

Example:

Branch  
task-004-webhook-logging

Task file  
backlog/stage-1/004-webhook-logging.md

The agent must read the full task specification before performing any implementation.

The following sections must be analyzed:

Goal  
Context  
Requirements  
Technical Constraints  
Definition of Done  

The agent must ensure that the task requirements are clearly understood.

If requirements are ambiguous, the agent must report the ambiguity before proceeding.

---

# Phase 4 — Repository Analysis

Before modifying the codebase, the agent must analyze the repository structure.

The analysis must identify:

- relevant modules
- existing architectural patterns
- related services
- existing code conventions

The agent must prefer integration with existing modules rather than creating redundant components.

Architectural consistency must be preserved.

---

# Phase 5 — Implementation Planning

Before writing code, the agent must construct a brief internal implementation plan.

The plan should include:

- modules that will be created or modified
- services that will be introduced
- controllers or endpoints involved
- integration points with existing components

The plan must ensure that the implementation remains within the scope of the task.

The agent must not expand the scope of the task beyond the backlog definition.

---

# Phase 6 — Task Implementation

The agent may now implement the task.

Implementation must follow these principles:

Controllers must remain thin.

Business logic must be implemented in services.

Services must remain modular and reusable.

Code must remain readable and maintainable.

All modifications must remain within the scope of the task.

The agent must avoid modifying unrelated modules unless absolutely required.

---

# Phase 7 — Code Validation

After implementing the task, the agent must validate the codebase.

Validation steps include:

Run lint checks.

Verify that the project builds successfully.

Ensure that no runtime errors occur during startup.

Verify that newly introduced modules integrate correctly.

If validation fails, the agent must correct the issue before proceeding.

---

# Phase 8 — Commit Procedure

Once validation succeeds, the agent may commit the changes.

Commit messages must follow the project commit convention.

Commit format:

task-{task-id}: short description

Example:

task-004: implement webhook logging

Commits must remain focused on the task.

Unrelated changes must not be included.

---

# Phase 9 — Implementation Summary

After completing the task, the agent must produce a structured summary.

The summary must contain the following sections:

PLAN  
FILES MODIFIED  
COMMANDS EXECUTED  
RESULT  
PENDING ITEMS  
TECHNICAL NOTES  
RISKS  

The summary ensures traceability and supports code review.

---

# Scope Control Rules

Agents must strictly respect task boundaries.

Agents must not:

- implement additional tasks
- introduce unrelated features
- perform architectural refactors outside the task scope
- modify unrelated modules

If improvements are identified outside the task scope, the agent must propose them as future backlog tasks.

---

# Error Handling

If any inconsistency is detected, the agent must stop execution and report the issue.

Examples of inconsistencies include:

branch name does not match backlog index  
missing backlog task file  
conflicting documentation  
ambiguous task requirements  

The agent must not continue implementation until the issue is resolved.

---

# Security Considerations

Agents must avoid introducing security risks.

Sensitive information must never be logged.

External integrations must be validated.

Unsafe operations must be avoided.

Security considerations must be respected throughout the implementation.

---

# Final Principle

Automated agents operating within the Jarvis repository must behave as disciplined software engineers working within a professional engineering environment.

Every implementation must prioritize:

clarity  
traceability  
maintainability  
architectural consistency  

The objective of this protocol is to ensure that automated development remains safe, predictable, and aligned with long-term system sustainability.
