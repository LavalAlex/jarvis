# Development Workflow

This document defines the mandatory development workflow for the Jarvis project.

The workflow described here must be followed by all contributors, including automated agents such as Claude.

The goal of this workflow is to ensure:

- predictable development processes
- traceable changes
- consistent code quality
- safe incremental delivery
- minimal risk of regression

No development task should be implemented outside of this workflow.

---

# Development Model

Jarvis follows a **task-based development model**.

All work must originate from a backlog task located in the `/backlog` directory.

Each task must be:

- isolated
- small in scope
- clearly defined
- traceable

Tasks are executed sequentially and independently.

No task may modify functionality outside its defined scope.

---

# Task Execution Process

When implementing a backlog task, the following steps must be executed in order.

Step 1 — Review Project Documentation

Before implementing any task, the developer or agent must read:

- `CLAUDE.md`
- `docs/DEVELOPMENT_WORKFLOW.md`
- `docs/CODING_STANDARDS.md`
- `docs/BRANCHING_STRATEGY.md`

This ensures that all development follows project rules.

---

Step 2 — Review the Task Specification

The developer must read the corresponding task file located in `/backlog`.

The task specification defines:

- goal
- technical requirements
- constraints
- definition of done

No implementation should begin without understanding the task completely.

---

Step 3 — Analyze the Repository

Before writing any code, the repository structure must be inspected.

This analysis must identify:

- relevant modules
- architectural patterns already in use
- existing dependencies
- potential integration points

Code should always follow existing patterns where possible.

---

Step 4 — Create a Dedicated Branch

Each task must be implemented in a dedicated branch.

Branch creation rules are defined in:

`docs/BRANCHING_STRATEGY.md`

No work should be committed directly to the main branch.

---

Step 5 — Implement the Task

The implementation must strictly follow:

- the task requirements
- coding standards
- architectural guidelines

During implementation:

- avoid modifying unrelated files
- avoid introducing new dependencies unless required
- maintain clear and readable code

---

Step 6 — Validate the Implementation

After implementing the task, validation must be performed.

Validation includes:

- lint checks
- type checks
- build validation
- test execution if tests are present

If validation fails, the implementation must be corrected before committing.

---

Step 7 — Commit the Changes

Commits must follow the commit conventions described in:

`docs/BRANCHING_STRATEGY.md`

Each task should ideally result in a small number of clear commits.

---

Step 8 — Provide an Implementation Summary

After completing a task, a summary must be produced containing:

- implementation plan
- files modified
- commands executed
- technical notes
- potential risks
- pending improvements

This summary ensures traceability of changes.

---

# Scope Control

Tasks must remain limited to their defined scope.

A task must not:

- implement additional features
- refactor unrelated modules
- introduce architectural changes

If additional improvements are identified, they must be documented separately as new backlog tasks.

---

# Definition of Done

A task is considered complete when all of the following conditions are satisfied:

1. The task requirements are fully implemented.
2. The implementation respects project architecture.
3. All code follows coding standards.
4. Linting and type checks pass.
5. The implementation summary has been produced.

Only then may the task be considered finished.

---

# Incremental Development

Jarvis follows an incremental development philosophy.

Features must be delivered in small, verifiable steps.

Large features must always be broken into smaller backlog tasks.

This approach ensures:

- easier debugging
- safer deployments
- higher reliability
