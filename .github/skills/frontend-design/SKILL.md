---
name: frontend-design
description: "Create distinctive, production-grade frontend interfaces with high design quality. Use when the user asks to build or redesign a webpage, component, landing page, dashboard, or web app UI. Produces polished code with a clear visual direction, responsive behavior, accessibility checks, and non-generic aesthetics."
argument-hint: "Describe product goal, audience, stack, constraints, and desired tone (or ask me to choose one)."
user-invocable: true
disable-model-invocation: false
license: "Complete terms in LICENSE.txt"
---

# Frontend Design

Design and implement memorable, production-grade frontend interfaces that avoid generic AI aesthetics.

## What This Skill Produces
- Working frontend code (HTML/CSS/JS or framework-specific code).
- A clear and intentional visual concept, not a default template look.
- Responsive layouts for desktop and mobile.
- Meaningful motion and interaction details.
- Accessibility-conscious structure and states.

## When to Use
Use this skill when the user asks to:
- Build a page, component, or full frontend experience.
- Redesign an existing UI for stronger visual identity.
- Improve aesthetics, interaction quality, or layout composition.
- Create a polished prototype that is close to production quality.

Do not use this skill for backend-only tasks, data modeling, or API-only work.

## Required Inputs
Collect or infer the following before coding:
1. Product purpose and primary user.
2. Delivery format: static HTML/CSS/JS, React, Vue, etc.
3. Constraints: existing design system, browser targets, performance limits, accessibility requirements.
4. Scope: single component, page, or multi-page app.
5. Tone direction: minimal, editorial, playful, industrial, retro-futuristic, luxury, etc.

If tone is not provided, pick one bold direction and state it.

## Workflow

### 1. Frame The Creative Direction
- Define one specific concept in one sentence.
- Name the memorable signature element (for example: diagonal split hero, oversized kinetic headline, textured grid overlays).
- Commit to this concept throughout typography, color, spacing, and motion.

### 2. Plan The System
- Define design tokens first with CSS variables: color, typography, spacing, radius, shadows, timing.
- Choose a distinctive font pairing:
	- Display font: expressive and high-character.
	- Body font: readable and complementary.
- Avoid overused defaults (Arial, Roboto, Inter, system-first stacks unless required by constraints).

### 3. Build The Layout
- Use composition with intent: asymmetry, overlap, controlled negative space, and hierarchy.
- Avoid interchangeable template patterns unless required by an existing system.
- Prioritize one strong focal area before polishing secondary sections.

### 4. Add Motion With Purpose
- Add one orchestrated page-load sequence (staggering, reveal choreography, or layered entrance).
- Add selective hover/focus interactions that reinforce hierarchy.
- Keep animation purposeful; avoid noisy micro-interactions everywhere.
- Respect reduced-motion preferences.

### 5. Create Atmosphere
- Use background treatment to support the concept: gradients, mesh fields, texture/noise, geometric patterns, layered transparency, depth shadows.
- Keep decorative details cohesive with the chosen tone.

### 6. Implement Responsive Behavior
- Verify mobile-first behavior and typography scaling.
- Ensure spacing and hierarchy survive small screens.
- Check touch targets and interaction affordances on mobile.

### 7. Accessibility And Robustness Pass
- Semantic HTML landmarks and heading order.
- Keyboard-accessible navigation and controls.
- Visible focus states.
- Sufficient color contrast.
- Sensible fallback behavior if fonts or effects fail.

### 8. Final Polish Pass
- Tighten spacing, rhythm, and visual alignment.
- Remove any generic-looking sections that dilute the concept.
- Ensure naming and structure are clean enough for team handoff.

## Decision Points
- If an existing design system is present: preserve core tokens/components and push creativity through composition, motion, and content treatment.
- If the project is greenfield: establish a stronger custom identity with new tokens, layout logic, and interaction language.
- If the direction is minimalist: favor precision, restraint, and subtle interaction details.
- If the direction is maximalist: use richer layering, stronger contrast, and more pronounced reveal choreography.

## Quality Gates
A delivery is complete only if all checks pass:
1. Interface has a clear, stated aesthetic concept and signature element.
2. Typography is intentional and non-generic.
3. Color system is cohesive and tokenized.
4. Layout is responsive and visually strong on both desktop and mobile.
5. Motion is meaningful and respects reduced motion.
6. Accessibility basics are implemented.
7. Code is working, clean, and maintainable.

## Anti-Patterns To Avoid
- Generic AI look with interchangeable cards and hero sections.
- Cliched purple-on-white gradients by default.
- Uniform spacing and visual rhythm that remove hierarchy.
- Random effects with no relation to concept.
- Shipping code that looks polished on desktop but breaks on mobile.

## Output Contract
When using this skill, provide:
1. The selected design concept in 1-2 sentences.
2. A concise implementation summary.
3. The final code changes.
4. Any caveats, test notes, and next-step refinements.
