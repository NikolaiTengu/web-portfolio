# DESIGN.md: Marlowe Ian Jumagbas Portfolio

An original design language: Persona 3 Reload kinetic geometry fused with frosted glass.
Implemented in Next.js 16 + Tailwind CSS v4. Tokens live in `app/globals.css`.

## Provenance

Measured from a reference site (computed CSS, verified): near-system font stacks, a very large bold white H1 (294px, weight 700) with a long transition, glass link pills (`backdrop-filter: blur(12px)`, `border-radius: 16px`, `padding: 12px`), serif H2 at 24px/500, and the easing `cubic-bezier(.16,1,.3,1)`.
Only those ideas informed this system: oversized display type, frosted pills, snappy easing. Palette, fonts, shapes, skew language, and motion here are original decisions.

## 1. Visual Theme & Atmosphere

Cold, sharp, nocturnal. A deep-navy canvas lit by cobalt glow and crimson accents, cut by 12° diagonals everywhere: tabs, buttons, chips, avatar frame. Frosted glass cards carry the content; game-HUD details (corner brackets, mono status lines like `// SYS_STATUS: ONLINE`) add flavor without clutter.
One memorable element: the specialization selector with its diagonal swipe. Everything else stays quiet.
Mood keywords: kinetic, precise, nocturnal, technical.

## 2. Color Palette & Roles (CSS variables)

```css
:root {
  --color-bg: #080d1a;            /* page background */
  --color-bg-raised: #0c1428;     /* inset panels, image wells */
  --color-surface: #111b36;       /* glass card base */
  --color-primary: #0055ff;       /* active tab, focus fills, offset shadow */
  --color-secondary: #70b5ff;     /* metadata text, borders, links on hover */
  --color-accent: #e63946;        /* HUD brackets, status dot, offset shadow */
  --color-accent-fill: #c8283a;   /* filled button background (text contrast 5.4:1) */
  --color-text: #e6efff;          /* primary text */
  --color-text-muted: #93a8cf;    /* secondary text */
  --color-border: rgb(112 181 255 / 0.2);
}
```

Crimson is for accents and one primary button per view. Never use it for body text.

## 3. Typography Rules (scale + stack)

- Display and titles: Instrument Serif (400, plus italic for taglines). Self-hosted via `next/font/local`.
- Body: Inter variable. Metadata and labels: JetBrains Mono. All three are open-licensed (SIL OFL); verify on the Fontsource pages before redistributing.
- Fallbacks: Georgia, system-ui, ui-monospace.

| Role | Size | Line height |
|---|---|---|
| H1 (name) | clamp(3rem, 9vw, 7rem) | 0.95 |
| Section title | 2.25 to 3.75rem | 1.05 |
| Card title | 2.25 to 3.75rem | 1.05 |
| Body | 15px | 1.6 |
| Mono label | 11px, tracking 0.12em | 1.2 |

Optional upgrade: push the H1 larger (up to about 12rem) for a poster-like hero, as the reference does.

## 4. Component Stylings (button, card, input, nav)

- **Button:** skewX(-12deg), inner text counter-skewed; mono 12px/600; padding 0.75rem 1.35rem. Hover: translate(4px,-4px) plus shadow `-8px 8px 0 var(--color-primary)`; active shrinks the shadow. Primary = crimson-fill, ghost = translucent ice.
- **Tab:** same skew; selected = cobalt fill, ice border, shadow `-6px 6px 0 var(--color-accent)`.
- **Card (`.glass .hud`):** gradient surface, 1px border, inset top highlight, crimson corner brackets (top-left, bottom-right).
- **Chip:** skewed, 1px ice border, mono 12px; core skills get a cobalt tint.
- **Input (not yet used):** abyss fill at 60%, 1px ice border, no skew, 2px ice focus ring.
- **Nav:** sticky, 56px, translucent navy with blur; mono links with a skewed crimson underline on hover.

## 5. Layout Principles (grid, max-width, spacing scale)

- Container: `max-w-6xl` (72rem), horizontal padding 16px (mobile) and 24px (sm and up).
- Hero selector: 12-column grid at lg, stage 5 / card 7, gap 36px. Projects zig-zag 7 / 5.
- Section padding: 64px (mobile), 96px (md).
- Spacing scale: 4, 8, 12, 16, 24, 32, 40, 64, 96.
- Rule: every responsive grid needs an explicit `grid-cols-1` base to prevent overflow.
- Text measure: under 65ch.

## 6. Depth & Elevation

Depth comes from translucency and offset, not soft black shadows.
1. Canvas: static radial glows plus a faint -12° hatch (fixed pseudo-element, no animation).
2. Glass: gradient fill, 1px ice border, `inset 0 1px 0 rgb(255 255 255 / .06)`, glow `0 24px 60px -28px rgb(0 85 255 / .5)`.
3. Blur: 6px on mobile, 14px from 768px (reference uses 12px).
4. Hard offset shadows (`-8px 8px 0`) mark interactive lift.
5. Modals use a dark scrim (82% navy) behind the glass panel.

## 7. Do's and Don'ts

**Do**
- Animate only transform, opacity, clip-path.
- Counter-skew text inside skewed shapes.
- Keep mono text for metadata only.
- Use `cubic-bezier(0.16, 1, 0.3, 1)` for all entrances.
- Gate entrance animations until after the first interaction.

**Don't**
- Add full-screen blur layers, canvas loops, or animation libraries.
- Use crimson for long text.
- Round the corners of skewed elements.
- Stack more than one glass blur on top of another.
- Invent metrics or skills.

## 8. Responsive Behavior

- Breakpoints: sm 640, md 768, lg 1024.
- Selector stacks vertically below lg; the avatar stage is centered, max 24rem.
- Tab bar scrolls horizontally on small screens (scrollbar hidden).
- Header drops the clock below sm.
- Decorative shards fade to 55% opacity under md.
- Zero horizontal overflow at 360px.
- `prefers-reduced-motion` collapses all animation and transition durations.

## 9. Agent Prompt Guide

> Build UI in this system: deep navy canvas (`#080d1a`), frosted glass cards with 1px ice borders and crimson corner brackets, Instrument Serif headlines, JetBrains Mono metadata, Inter body. All buttons, tabs, and chips are skewed -12° with counter-skewed text and hard offset shadows on hover. Use `cubic-bezier(0.16, 1, 0.3, 1)`, animate only transform, opacity, clip-path, respect reduced motion, keep layouts overflow-free at 360px. Reuse existing classes (`.glass`, `.hud`, `.btn`, `.tab`, `.rise`, `.swipe`) before writing new CSS.
