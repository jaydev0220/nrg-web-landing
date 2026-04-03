# Project Overview

A static site landing page designed for a laboratory glassware manufacturer.

## Tech Stack

- **Framework:** SvelteKit (Svelte 5 with Runes)
- **Styling:** Tailwind CSS 4
- **Icons:** `lucide-svelte`, `simple-icons`
- **i18n:** Paraglide JS 2
- **Language:** TypeScript 5
- **Deployment:** Cloudflare Pages (via @sveltejs/cloudflare)
- **Package Manager:** pnpm 10

## Project Structure

```
project-root/
|-- messages/  # i18n translation files (JSON format)
|-- src/
|   |-- lib/
|   |   |-- components/     # Reuseable UI components
|   |   |-- types/          # Shared type definitions
|   |   `-- utils/          # Utility functions
|   `-- routes/      # SvelteKit file-based routing
|       |-- about/          # About page
|       |-- contact/        # Contact page
|       |-- +layout.svelte  # Root layout (apply globally)
|       |-- +layout.ts      # Root layout script (apply globally)
|       |-- +page.svelte    # Landing page
|       `-- layout.css      # Global CSS styles
`-- static/    # Static assets
```

## Action Rules

- **Objectivity & Logic:** Provide structured, evidence-based, and rational responses.
- **Zero Fabrication:** Strictly prohibited from hallucinating, forging evidence, or guessing.
- **Intellectual Independence:** Never agree with user premises without verification. Correct misinformation immediately.
- **Conciseness:** Avoid filler and emotional fluff.
- **Documentation Updates:** Modify README.md immediately when altering setup instructions, dependencies, or core features.
- **Git Commits:** Commit after every discrete unit of work. Never batch unrelated changes. Use `git-commit` skill for format and examples.

## Code Quality

- **KISS:** Simplest solution that works; no premature optimization
- **DRY:** Extract common logic; no copy-paste
- **YAGNI:** Don't build features before needed
- **Immutability:** Use spread operators; avoid direct mutation
- **Early returns:** Flatten nested conditionals
- **Named constants:** No magic numbers

## Skills

Svelte code generation:

- `svelte-code-writer`
- `svelte-core-bestpractices`

Styling & UI/UX:

- `modern-web-design-2026`
- `tailwind-best-practices`
- `web-design-guidelines`

## Available Scripts

| Script      | Description                      |
| ----------- | -------------------------------- |
| dev         | Start local development server   |
| build       | Build for production             |
| preview     | Preview production build locally |
| check       | Run type check                   |
| check:watch | Run type check in watch mode     |
| lint        | Run Prettier and ESLint check    |
| format      | Format code with Prettier        |
| gen         | Generate Cloudflare Worker types |

## Development Workflow

After modifying code, execute the following scripts to ensure code quality:

```bash
pnpm format
pnpm lint
pnpm check
pnpm build
```

If all 4 scripts pass without throwing errors, you can commit changes.

---

# lean-ctx — Context Engineering Layer

MANDATORY: Use lean-ctx MCP tools for ALL reads, searches, and shell commands.

| FORBIDDEN                | USE INSTEAD                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| Read / cat / head / tail | `ctx_read(path)` — cached, 8 compression modes, re-reads ~13 tokens |
| Shell / bash / terminal  | `ctx_shell(command)` — pattern compression for git/npm/cargo output |
| Grep / rg / search       | `ctx_search(pattern, path)` — compact, token-efficient results      |
| ls / find / tree         | `ctx_tree(path, depth)` — compact directory maps                    |

Keep using Write, StrReplace, Delete, Glob normally (no lean-ctx replacement).

REMINDER: NEVER use native Read, Shell, Grep, or ls. ALWAYS use ctx_read, ctx_shell, ctx_search, ctx_tree.
