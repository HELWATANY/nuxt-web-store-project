# Repository Agent Rules: Nuxt 4 Web Store

## 1. Project Shape & Technology Stack

- **Application Type**: Full-stack web store application.
- **Core Framework & Testing**:
  - **Nuxt 4** (SSR / Full-Stack)
  - **Unit Testing**: `@nuxt/test-utils` powered by **Vitest**
  - **E2E Testing**: **Playwright**
- **Core Nuxt Modules**:
  - `@nuxtjs/i18n`: Internationalization module
  - `nuxt-authorization`: Authorization and access control module
  - `nuxt-seo`: Comprehensive SEO optimization module
- **UI & Design System**:
  - **Nuxt UI** component library
  - Tailwind CSS with semantic design tokens
- **Data & Utilities**:
  - **TypeScript** (Strict mode)
  - **Valibot**: Schema validation for forms, APIs, and data models
  - **SQLite**: Local/embedded database layer
  - **date-fns**: Date parsing, arithmetic, and formatting
  - `@internationalized/date`: Date and calendar model manipulation for Nuxt UI inputs

---

## 2. Agent Workflow & Governance

### 2.1 Pre-Task Skill Evaluation Gate
Before planning implementation or modifying any file:
1. Evaluate **every** installed/available skill (workspace skills in `.agents/skills/` and global/plugin skills) against the current task and determine `YES` or `NO` relevance.
2. Invoke **all `YES` skills** (read their `SKILL.md` instructions in full) before proceeding.
3. Explicitly note which skills were `YES` (invoked) and `NO` (skipped).

### 2.2 Ponytail Enforcement (Before & During Code Changes)
Before modifying or writing any code, always apply the `ponytail` plugin and skills:
- **Invoke `ponytail`** (default `full` mode unless the user specifies `lite`, `ultra`, or `normal mode` / `stop ponytail`):
  1. Read and understand the full problem and affected flow first.
  2. Stop at the highest rung of the ponytail ladder that holds: YAGNI → reuse existing codebase code → stdlib → native platform feature → already-installed dependency → one-liner → minimum working code.
  3. Avoid unrequested abstractions, speculative scaffolding, unnecessary dependencies, and bloated diffs.
  4. Include one minimal runnable check for non-trivial logic (no heavy test scaffolding unless requested).
- **Review non-trivial diffs with `ponytail-review`** (and use `ponytail-audit` / `ponytail-debt` when auditing or checking `ponytail:` shortcut comments).

### 2.3 Elephant-Goldfish Model (EGM)
For architectural designs, feature specifications, and critical reviews:
- **Elephant Persona (Context Keeper & Drafter)**: Maintain project context, explore requirements, and draft specifications or feature plans (using `/egm-brainstorm` or `/egm-draft`).
- **Goldfish Personas (Fresh Eyes Reviewers)**: Review specifications and non-trivial diffs with clean, unpolluted context subagents (via `/egm-review`, `/egm-review-loop`, or specialized EGM reviewer personas such as design, implementation readiness, style, comprehension, zoom-out, and codebase details) to uncover unstated assumptions and edge cases.
- **Human Alignment**: Present trade-offs and obtain explicit approval before implementing drafted specifications.

### 2.4 MCP Servers & Source of Truth Policy
- Use available MCP servers whenever relevant to the task.
- **Nuxt UI MCP Server**: When planning or implementing UI, check the Nuxt UI MCP server for the right components, props, slots, and usage patterns before choosing or changing Nuxt UI components.
- **Nuxt SEO MCP Server**: Consult the Nuxt SEO MCP server to verify and follow SEO best practices.
- **External Documentation**: When implementation details depend on external documentation, use the relevant configured MCP server as the primary source of truth before modifying code.
- **Single Source of Truth**: Keep shared project policy in this file. Agent-specific instruction files should link here instead of repeating rules.

---

## 3. Package Management & Commands

- **Package Manager**: Prefer `pnpm` exclusively (`pnpm install`, `pnpm run <script>`, `pnpm test`, etc.).
- **Dependency Freeze**: The project is dedicated to e-learning sessions; **no new dependencies should be added** unless explicitly approved by the user. Rely on the installed stack.

---

## 4. CRUD Architecture & Component Patterns

### 4.1 Authorization & Access Control
- Use the `nuxt-authorization` module ([documentation](https://nuxt.com/modules/authorization)) for permissions, ability definitions, and access control checks across server routes, middleware, and UI components.

### 4.2 Listing UIs & Asynchronous State
- Listing UIs must explicitly handle loading, empty, and error states.
- Always retain `status` and `error` in scope to display informative feedback rather than leaving table or list regions blank during fetch or failure.

### 4.3 Form Architecture
- Build non-trivial forms as standalone, reusable feature components.
- Form components must use:
  - `UForm` and `UFormField` with corresponding Nuxt UI inputs.
  - A single, typed reactive state object.
  - Explicit `pending` and `error` state management.
  - Typed `success` and `error` emits.
  - An exposed `submit()` method, `isSubmitting` flag, and `submitLabel` string so parent wrappers can trigger submission programmatically.

### 4.4 Modals, Slideovers, & Overlay Lifecycle
- **Modal vs. Slideover Convention**:
  - Use **Modal** (`UModal`) for create flows.
  - Use **Slideover** (`USlideover`) for edit and preview flows.
- **Interaction Constraints**:
  - Always prevent closing when clicking outside the overlay (set `prevent-close`).
  - Provide an explicit close button.
  - Use the `#title` slot for the overlay header and `#footer` slot for actions so that the header and action buttons remain sticky and visible while the inner body content scrolls.
- **Separation of Concerns**:
  - Child form components handle form state and expose `submit`, `isSubmitting`, and `submitLabel`.
  - Parent overlays manage modal visibility, trigger submission, handle success/error toasts, and control overlay reset/close behavior.

---

## 5. UI, Styling, & RTL Design System

- **Nuxt UI & Tailwind**: Prefer Nuxt UI components and Tailwind utilities.
- **Mobile-First Layout**: Always start with unprefixed mobile-first Tailwind classes. Add responsive prefixes (`md:`, `lg:`, `xl:`, `2xl:`) only when a larger-screen adjustment is specifically required.
- **Styling Escape Hatches**: Use scoped CSS, `@apply`, or custom style values only when Tailwind utilities, semantic design tokens, Nuxt UI slots, or layout composition cannot express the required style.
- **Design Tokens & Lucide Icons**:
  - Use semantic Nuxt UI colors and classes (`text-muted`, `text-highlighted`, `bg-elevated`, `border-default`).
  - Use Lucide icon names (e.g., `i-lucide-plus`, `i-lucide-trash-2`, `i-lucide-shopping-bag`).
- **RTL & Logical Properties**: The application may support Right-to-Left (RTL) languages in the future.
  - Always prefer logical utility classes over directional ones:
    - Margin: `ms-*` / `me-*` (avoid `ml-*` / `mr-*`)
    - Padding: `ps-*` / `pe-*` (avoid `pl-*` / `pr-*`)
    - Alignment: `start` / `end` / `text-start` / `text-end` (avoid `left` / `right`)
    - Borders & Radii: `rounded-s-*` / `rounded-e-*` (avoid `rounded-l-*` / `rounded-r-*`)
    - Positioning: `start-*` / `end-*` (avoid `left-*` / `right-*`)

---

## 6. Internationalization (i18n) & Copy Conventions

- **Locale Support**: The project currently supports English (`en-US`). Additional languages may be introduced later.
- **Translation File**: Always add translation strings to `i18n/locales/en-us.json`. When new languages are added, update `AGENTS.md` to ensure corresponding translation files are maintained.
- **No Hardcoded Copy**: Never hardcode user-facing copy in templates, metadata, table columns, forms, modals, toasts, or validation messages.
- **Component Boundary Resolution**:
  - Call `useI18n()` at the top level of component setup scripts.
  - Dynamic validators, helper functions, and error mappers must return translation keys, resolving them via `t()` only at the final UI/template boundary.
- **Translation Key Namespaces**: Group translation keys hierarchically by feature domain:
  - Forms: `forms.<formName>.<fieldName>`
  - Tables: `tables.<tableName>.<columnOrAction>`
  - Metadata: `<feature>.meta.<titleOrDesc>`
  - Modals: `<feature>.modals.<modalName>.<slotOrKey>`
  - Toasts: `<feature>.toasts.<toastName>.<titleOrMessage>`
- **Valibot Schemas**:
  - Always import as: `import * as v from 'valibot'`
  - Issue message arguments and custom `v.check()` error issues must strictly be translation keys, never hardcoded English copy or pre-resolved `t()` strings.

---

## 7. Date & Time Standards

- **Libraries**:
  - Use `date-fns` for date formatting, arithmetic, comparisons, and parsing.
  - Use `@internationalized/date` for Nuxt UI calendar and date picker reactive models (`CalendarDate`, `ZonedDateTime`, etc.).
  - Use native `Intl.DateTimeFormat` when locale-aware runtime display is optimal.
- **Input Components**:
  - When adding date or time fields, use Nuxt UI `UInputDate` and `UInputTime`, or `UCalendar` for single and range date selection.
  - Do not implement custom hand-rolled date pickers.
- **12-Hour Display Format**:
  - All user-facing times must be displayed in 12-hour format with AM/PM indicators.
  - Use `h:mm a` with `date-fns` or `{ hour12: true }` with `Intl.DateTimeFormat`.
  - **Never use 24-hour tokens** such as `H`, `HH`, or `kk` for user-facing times.

---

## 8. SEO Standards

- Integrate with and use the **Nuxt SEO MCP server** to follow Nuxt SEO best practices.
- Ensure all pages declare appropriate metadata (title templates, meta descriptions, OpenGraph, Canonical URLs, and Twitter cards) via Nuxt SEO composables (`useSeoMeta()`).

---

## 9. TypeScript & Constants

- **No Enums**: Do not introduce `enum` or `const enum` declarations in handwritten TypeScript code.
- **`as const` Source of Truth**: Prefer `as const` arrays and objects. Derive TypeScript union types from runtime data sources:
  ```typescript
  export const ORDER_STATUSES = ['pending', 'processing', 'completed', 'cancelled'] as const
  export type OrderStatus = (typeof ORDER_STATUSES)[number]
  ```
- **Single Source Reuse**: Reuse exported constants for validators, selects, dropdown options, table filters, lookup tables, UI badges/colors, icons, and feature flags rather than duplicating enum-like strings across modules.

---

## 10. Git Lifecycle, Branching, & Commit Standards

### 10.1 Branching Strategy
- Every new feature, fix, or task must be developed on its own dedicated branch off `development`.
- **Branch Naming Convention**: The branch name must include the associated GitHub issue number:
  - `feat/<issue-number>-<short-description>` (e.g., `feat/12-add-pdf-download`)
  - `fix/<issue-number>-<short-description>` (e.g., `fix/34-header-alignment`)
  - `chore/<issue-number>-<short-description>`
- **Direct Commits Prohibited**: Never commit directly to `main` or `development`.

### 10.2 Conventional Commits & Atomic Commits
- **Atomic Commits**: Each commit must be a focused, self-contained unit of change that builds cleanly. Do not combine unrelated changes or multi-feature tasks into one monolithic commit.
- **Conventional Commits Specification**:
  - Format: `<type>(<scope>): <subject> (#<issue-number>)`
  - Allowed Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
  - Formatting Rules:
    - Keep `type` lowercase.
    - Keep `scope` kebab-case and feature-oriented.
    - Keep `subject` under 72 characters.
    - Do not use emojis in type, scope, or subject.
- **GitHub Issue Mention**: Every commit message must explicitly reference the associated GitHub issue (e.g., `feat(cart): add item removal confirmation (#42)` or footer `Refs #42`).

### 10.3 Pull Requests & Merging
- **Target Branch**: Feature and fix branches must always be merged into the `development` branch via a Pull Request (PR).
- **PR Description Requirements**:
  1. **Summary of Changes**: Detail the modifications, components touched, and architectural decisions made in the branch.
  2. **Breaking Changes**: Explicitly document any breaking changes with a dedicated `Breaking Changes` section or state `Breaking Changes: None`.
  3. **Issue Closing Keyword**: Automatically link and close the related issue using standard GitHub keywords (e.g., `Closes #<issue-number>`, `Fixes #<issue-number>`, or `Resolves #<issue-number>`).
