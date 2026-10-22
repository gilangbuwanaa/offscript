# Offscript

A personal space for ideas, experiments, and things that exist beyond the ordinary.

Offscript brings together technology, design, visual exploration, and creative expression in one evolving digital experience.

## Project Vision

Offscript is a personal website designed to present professional experiences, projects, research, tools, and creative interests through a distinctive visual identity.

The website should feel intentional, expressive, and immersive rather than like a generic portfolio template.

The goal is to combine a strong visual presentation with maintainable code, reusable components, responsive layouts, and meaningful interactions.

## Design References

The primary visual references are stored in:

- `design-references/home.png`
- `design-references/experiences.png`

These screenshots represent the intended visual direction. Treat them as the source of truth for layout, visual hierarchy, colors, typography, layering, and decorative elements.

Preserve the identity of the designs while adapting layouts and interactions for different screen sizes.

Do not replace the visual direction with a generic dashboard or a conventional portfolio template.

### Visual Identity

- Deep navy and near-black backgrounds.
- Primary color: #112E59, #080A12, #ffffff
- Subtle blue gradients and atmospheric lighting.
- Bold, uppercase section headings.
- White and light-gray text.
- Blue primary buttons and restrained orange accents.
- Translucent glass panels with backdrop blur, borders, and soft shadows.
- Perspective grids and abstract geometric backgrounds.
- Layered imagery and overlapping visual elements.
- Generous spacing and clear content hierarchy.

The result should feel modern, technical, creative, and slightly experimental.

## Technology Stack

- **Vue 3** — component-based user interface.
- **Vite** — development server and build tooling.
- **Tailwind CSS v4** — utility-first styling.
- **JavaScript** — application logic.
- **Vue Router** — client-side navigation.
- **Git and GitHub** — version control and project hosting.

Keep dependencies minimal. Introduce additional tools only when they solve a clear problem.

Storybook may be introduced later if isolated component development becomes beneficial.

## Development Principles

### 1. Design System First

Build the visual foundation before implementing complete pages.

Establish reusable design tokens for:

- Colors and gradients.
- Typography and heading scales.
- Spacing and container widths.
- Border radii.
- Shadows and glass effects.
- Transitions and motion.
- Responsive breakpoints where custom breakpoints are necessary.

Avoid scattering inconsistent visual values across components.

### 2. Component-Based Architecture

Each reusable interface element should have a clear responsibility.

Examples include:

- Navigation bar.
- Page container.
- Section heading.
- Primary and secondary buttons.
- Glass cards.
- Experience cards.
- Project cards.
- Research cards.
- Tools and technology showcase.
- Contact section.
- Decorative background elements.

Prefer small, composable Vue components over large components containing an entire page.

### 3. Separate Content from Presentation

Store repeatable content in data modules when appropriate.

Examples include project information, work experiences, research publications, organizations, and tool lists.

Components should receive data through props instead of duplicating markup for every item.

Do not invent personal information, project details, dates, achievements, or external links. Use clearly labeled placeholders until the actual content is available.

### 4. Responsive by Design

The website must work across mobile, tablet, laptop, and desktop screens.

Responsive behavior should preserve the design's visual character instead of simply shrinking desktop layouts.

Pay particular attention to:

- Navigation and mobile menus.
- Hero image positioning.
- Glass card readability.
- Project card layouts.
- Typography scaling.
- Background decorations and clipping.
- Horizontal overflow.
- Touch target sizes.

### 5. Accessibility and Interaction

- Use semantic HTML.
- Provide keyboard-accessible navigation and controls.
- Maintain visible focus states and sufficient text contrast.
- Respect `prefers-reduced-motion`.
- Use meaningful link destinations.
- Avoid decorative motion that interferes with reading.
- Ensure buttons and interactive elements perform their stated actions.

### 6. Maintainability

- Keep global styles and design tokens centralized.
- Use Vue Single File Components.
- Prefer clear, descriptive filenames.
- Avoid unnecessary abstractions and dependencies.
- Preserve existing working code when making changes.
- Do not overwrite project configuration without a clear reason.

## Planned Pages

### Home — `/`

The main landing page introduces the website and its content.

Planned sections:

1. Navigation.
2. Hero introduction.
3. About section.
4. Education background.
5. Education organizations.
6. Tools and technologies.
7. Contact and social links.
8. Footer.

The hero should preserve the layered image composition shown in the design reference.

### Experiences — `/experiences`

A page dedicated to professional and project-related work.

Planned sections:

1. Navigation.
2. Work experiences.
3. Project showcase.
4. Research and publication cards.
5. Footer.

Project cards may use layered compositions, depth, and subtle motion where appropriate.

### Styleguide — `/styleguide`

An internal development page for previewing reusable components.

It should demonstrate:

- Color tokens and typography.
- Buttons and their interaction states.
- Glass cards.
- Section headings.
- Page containers.
- Navigation.
- Decorative backgrounds.
- Responsive component layouts.

This page helps validate visual consistency before components are used across the main pages.

It is a development tool, not necessarily a public-facing destination in the final website.

## Suggested Project Structure

```text
offscript/
├── design-references/
│   ├── home.png
│   └── experiences.png
├── public/
│   ├── images/
│   ├── logos/
│   └── backgrounds/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── sections/
│   ├── data/
│   ├── router/
│   ├── styles/
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── ExperiencesView.vue
│   │   └── StyleguideView.vue
│   ├── App.vue
│   └── main.js
├── AGENTS.md
├── README.md
└── package.json
```

Adapt this structure to the actual generated project where necessary. Do not create redundant folders or files merely to match the example.

## Working with Figma

Use the supplied screenshots as visual references and use original exported assets whenever available.

Preferred workflow:

1. Inspect the design references and available project assets.
2. Establish the design tokens.
3. Build reusable components.
4. Preview components in the styleguide.
5. Compare the rendered result with the references.
6. Refine spacing, typography, transparency, layering, and responsive behavior.
7. Compose the complete pages only after the foundation is stable.

Do not claim pixel-perfect accuracy without inspecting the rendered implementation.

If exact font files, image assets, measurements, or interactions are unavailable, document the limitation and use a reasonable, clearly identified fallback.

## Instructions for AI Coding Agents

Before making changes:

1. Read this README and `AGENTS.md`, if present.
2. Inspect the existing repository and package scripts.
3. Identify the installed framework and styling versions.
4. Inspect available design references and assets.
5. Explain any necessary deviations from the existing architecture before making disruptive changes.

Implementation priorities:

1. Establish a working project foundation.
2. Configure Vue, Vite, Tailwind CSS, and routing.
3. Build design tokens and reusable UI primitives.
4. Implement shared layout and decorative components.
5. Create the styleguide for component inspection.
6. Validate responsiveness and accessibility.
7. Implement the Home page.
8. Implement the Experiences page.
9. Refine visual fidelity and interactions.

Make focused, incremental changes. Do not attempt to implement the entire website in a single step.

After each meaningful stage:

- Run relevant lint and test commands.
- Run the production build.
- Fix errors introduced by the changes.
- Summarize changed files and validation results.
- Identify missing assets or unresolved issues.

Never fabricate assets, claim checks passed without running them, or silently replace the intended visual direction.

## Development Commands

Use the scripts defined in `package.json`. A typical Vite project provides:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Lint and test commands depend on the project configuration.

## Project Status

**Current phase:** Project setup and design system planning.

**Immediate priority:** Establish the technical foundation and reusable component system before implementing the complete pages.

**Long-term goal:** Build a distinctive, responsive, and maintainable personal website that combines professional presentation with creative exploration.

---

*Offscript — Building, learning, experimenting.*