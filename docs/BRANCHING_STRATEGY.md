# Branching Strategy

This document defines the branching strategy used in the Jarvis repository.

The objective of this strategy is to ensure:

- clear traceability of work
- consistent branch naming
- predictable version control practices
- explicit task-to-branch mapping
- safe isolated delivery of changes

All contributors and automated agents must follow these rules without exception.

---

# Main Branch

The `main` branch represents the stable state of the repository.

Rules for the main branch:

- direct commits are not allowed
- all changes must be introduced via dedicated task branches
- the main branch must remain stable and deployable
- no experimental work may be performed directly on main

---

# Development Model

Jarvis follows a backlog-driven development model.

Each implementation task originates from a backlog file located in the `/backlog` directory.

Each backlog task must be implemented in its own dedicated branch.

The branch is not only a version control mechanism. It is also a task execution boundary.

This means that the branch identifies:

- which task is being executed
- what scope is allowed
- what changes are expected
- when the task can be considered complete

---

# Task Branches

Each backlog task must be implemented in its own branch.

The branch must be created before writing any code.

Branch naming convention:

```txt
task-{number}-{short-description}
