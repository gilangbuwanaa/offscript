# AGENTS.md — Offscript

## 1. Project Context

Offscript is a personal website combining professional experiences, projects, research, technology, design, and creative exploration.

The goal is to create a distinctive, responsive, accessible, and maintainable website based on the supplied Figma design references.

Before making changes, read `README.md` and inspect the current repository.

### Design references

- `design-references/home.png`
- `design-references/experiences.png`

Treat these screenshots as the primary visual references for the website's identity, composition, typography, colors, spacing, and layering.

Do not replace the intended design with a generic portfolio template or dashboard aesthetic.

## 2. Current Development Priority

Follow this implementation order unless the user explicitly requests otherwise:

1. Inspect the repository and available assets.
2. Establish the project foundation.
3. Configure Vue, Vite, Tailwind CSS v4, and Vue Router.
4. Define the design tokens and global styles.
5. Build reusable UI primitives and shared layout components.
6. Create a component styleguide at `/styleguide`.
7. Validate responsiveness, accessibility, and visual consistency.
8. Implement the Home page at `/`.
9. Implement the Experiences page at `/experiences`.
10. Refine visual details, interactions, and production readiness.

Do not implement all pages at once.

Do not skip the design system or styleguide without the user's approval.

## 3. Technical Constraints

Use the following stack:

- Vue 3 with Composition API and Single File Components.
- Vite.
- Tailwind CSS v4 with its official Vite integration.
- JavaScript, not TypeScript.
- Vue Router.
- npm for package management.

Technical rules:

- Follow the installed versions and their corresponding documentation.
- Use Tailwind CSS v4 conventions; do not copy outdated v3 configuration patterns.
- Keep dependencies minimal.
- Do not introduce a backend unless explicitly requested.
- Do not add a component framework or animation library without a clear need.
- Preserve the existing project setup whenever possible.
- Never overwrite configuration files unnecessarily.

## 4. Design Principles

Preserve the visual identity established by the Figma references.

### Colors and atmosphere

- Use deep navy and near-black as the primary background colors.
- Use blue gradients and subtle atmospheric lighting.
- Use white and light gray for primary text.
- Use blue for primary actions.
- Use orange as a restrained accent.
- Maintain sufficient contrast across all surfaces.

### Typography

- Use bold, uppercase section headings where appropriate.
- Preserve the strong visual hierarchy between headings, body text, labels, and metadata.
- Keep body text readable on glass surfaces and image backgrounds.
- Use available original fonts when provided.
- Do not invent font files or reference nonexistent assets.

### Glassmorphism and depth

- Use translucent surfaces, backdrop blur, subtle borders, and controlled shadows.
- Centralize reusable glass styles where practical.
- Keep text readable regardless of background complexity.
- Use layering and overlap intentionally.
- Avoid excessive blur, transparency, or shadows that obscure content.

### Decorative backgrounds

- Preserve the perspective-grid and abstract geometric visual language.
- Implement decorative elements as reusable components or shared background styles when appropriate.
- Prevent decorative layers from blocking interactions.
- Avoid unnecessary duplication of large decorative assets.
- Respect reduced-motion preferences.

### Visual fidelity

- Match the composition, proportions, spacing, and hierarchy of the reference screenshots as closely as practical.
- Do not assume screenshot dimensions are the only supported viewport.
- Adapt layouts for mobile, tablet, and desktop while retaining the original visual identity.
- Do not claim pixel-perfect accuracy without inspecting the rendered page.

## 5. Architecture and Component Design

Use small, focused, reusable Vue components.

Suggested organization:

- `src/components/ui/` — buttons, cards, headings, and other UI primitives.
- `src/components/layout/` — navbar, page container, footer, and shared layout.
- `src/components/sections/` — reusable page sections.
- `src/views/` — routed pages.
- `src/data/` — content collections separated from presentation.
- `src/styles/` — design tokens and global styles.
- `public/images/` — photographs and other images.
- `public/logos/` — logos and technology marks.
- `public/backgrounds/` — decorative background assets.
- `design-references/` — supplied visual references.

Adapt the structure to the actual project. Do not create empty files, unnecessary abstractions, or redundant directories simply to match this list.

### Component rules

- Give each component one clear responsibility.
- Use descriptive and consistent filenames.
- Use props for configurable presentation and content.
- Use slots when they provide a clear benefit.
- Keep page composition separate from reusable UI primitives.
- Avoid duplicating markup and styles across pages.
- Keep components understandable and easy to edit independently.
- Avoid oversized components containing an entire page.
- Do not introduce global state when local state is sufficient.

### Design tokens

Centralize shared visual values where practical, including:

- Colors and gradients.
- Typography scales.
- Spacing and content widths.
- Border radii.
- Shadows.
- Glass surface styles.
- Transitions and motion settings.

Use the existing project's conventions rather than creating competing systems.

## 6. Content and Assets

Never invent or present fabricated information as real personal content.

This includes:

- Employment history.
- Education details.
- Organizations.
- Projects and technologies used.
- Research titles and publications.
- Dates, achievements, and metrics.
- Contact details and social links.

Use verified content supplied by the user or existing project files.

If content or assets are missing:

1. Use an explicitly identified placeholder when necessary.
2. Keep content data separate from presentation.
3. Document the missing asset or information.
4. Do not create fake links or claim that placeholders are original assets.

Prefer original images, logos, fonts, and other assets exported from Figma.

Do not replace available original assets with generic stock images without permission.

## 7. Interaction and Accessibility

All interactive elements must work as expected.

Requirements:

- Use semantic HTML elements.
- Ensure navigation works with mouse, keyboard, and touch.
- Provide visible focus indicators.
- Maintain appropriate text contrast.
- Use accessible labels and state attributes for interactive controls.
- Ensure mobile navigation opens and closes correctly.
- Respect `prefers-reduced-motion`.
- Avoid animation that interferes with reading or navigation.
- Prevent decorative layers from intercepting pointer events.
- Avoid horizontal overflow at supported viewport sizes.

Buttons must perform their stated actions. Links must have meaningful destinations. Do not use fake interactions merely to make a page appear functional.

## 8. Responsive Behavior

Design for mobile, tablet, laptop, and desktop.

Pay particular attention to:

- Navigation layout and mobile menu behavior.
- Hero image positioning and overlap.
- Glass card width and readability.
- Project card arrangements.
- Research card layouts.
- Technology logo sizing.
- Contact section layout.
- Background grid scaling and clipping.
- Typography and section spacing.

Use responsive CSS and Tailwind utilities appropriately.

Do not simply scale down the desktop layout. Reorganize content where necessary while preserving the design's identity.

Test narrow viewports for clipped text, overlapping elements, and horizontal scrolling.

## 9. Styleguide Requirements

The `/styleguide` route is an internal component development and inspection page.

Use it to demonstrate reusable components independently before implementing the complete pages.

Include examples of:

- Design tokens and typography.
- Primary and secondary buttons.
- Button interaction states.
- Glass cards.
- Section headings.
- Page containers.
- Navbar and responsive navigation.
- Decorative grid backgrounds.
- Relevant responsive layouts.

Keep the styleguide consistent with the supplied design references.

Do not treat it as a finished public portfolio page unless requested.

## 10. Workflow for Every Task

Before editing:

1. Read `README.md` and these instructions.
2. Inspect relevant source files and assets.
3. Understand the current implementation and available npm scripts.
4. Identify the smallest set of changes that solves the task.
5. Check whether the task depends on missing assets or information.

While editing:

- Make incremental, focused changes.
- Follow the existing architecture unless there is a clear reason to change it.
- Preserve unrelated user work.
- Avoid unnecessary dependencies and configuration changes.
- Keep visual values consistent with the design system.
- Do not silently remove existing functionality.
- Explain important trade-offs when relevant.

After editing:

1. Run relevant lint checks.
2. Run relevant tests if configured.
3. Run `npm run build`.
4. Fix errors introduced by the changes.
5. Report what changed and which checks were actually run.
6. Identify missing assets, incomplete tasks, or unresolved issues.

Use only commands that exist in the project's configuration. Do not claim a test, build, browser check, or visual comparison passed unless it was actually performed.

## 11. Browser and Visual Verification

When browser preview or screenshot tools are available:

- Inspect the rendered application.
- Compare it against the supplied Figma screenshots.
- Check desktop and mobile layouts.
- Look for spacing differences, typography mismatches, incorrect layering, contrast problems, and overflow.
- Verify interactive states and navigation.
- Fix the most important discrepancies before proceeding.

If browser inspection is unavailable, state that visual verification remains incomplete and provide the steps needed to perform it.

## 12. Scope Control

Implement only what the user currently requests.

For the initial foundation task:

- Configure the project.
- Establish the design tokens.
- Build reusable primitives.
- Implement shared layout components.
- Create the styleguide.
- Add only minimal placeholder views for the future pages.
- Validate the result.

Do not build the complete Home and Experiences pages during the foundation stage.

Do not add authentication, a database, a CMS, or backend infrastructure without an explicit requirement.

Ask a concise clarification when a missing decision materially affects the architecture or design. Otherwise, choose a sensible, reversible default and document it.

## 13. Completion Summary

At the end of each meaningful task, report:

- **Implemented:** features and components completed.
- **Files changed:** important files created or modified.
- **Validation:** commands executed and their actual outcomes.
- **Remaining:** missing assets, known issues, or incomplete checks.
- **Next step:** the smallest logical step toward the project goal.

Keep the report concise, factual, and specific to the current task.

---

**Core principle:** Build Offscript incrementally, preserve the Figma design identity, and prioritize reusable components, visual consistency, accessibility, and maintainable code.