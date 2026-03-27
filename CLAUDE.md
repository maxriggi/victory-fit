# Victory Fit - Project Guidelines

## About
Victory Fit is a gym/fitness center located in Metz, France.
Slogan: "Sportivement Metz."
Core values: Strength, Vitality, Dynamism, Energy, Confidence.

## Brand Identity (from Charte Graphique)

### Color Palette (from new logo)
| Name          | Hex       | RGB              | Usage                              |
|---------------|-----------|------------------|------------------------------------|
| Burgundy Red  | `#7A1B1F` | rgb(122,27,31)   | Primary — VF letters, dominant     |
| Orange        | `#F29031` | rgb(242,144,49)  | Accent — weight bars, heartbeat    |
| Orange Deep   | `#EF6C3E` | rgb(239,108,62)  | Accent — heartbeat gradient end    |
| Gradient      | —         | #F29031 → #7A1B1F| Backgrounds, decorative            |

- Background on dark: use white logo variant
- Background on brand colors: use white logo variant
- Background on white/light: use black logo with orange accents

### Typography
| Level     | Font                    | Weight    |
|-----------|-------------------------|-----------|
| H1        | Domus Titling           | Bold      |
| H2        | Domus Titling           | Semi-Bold |
| H3        | New Zen                 | Medium    |
| Paragraph | New Zen                 | Regular   |

- Both fonts are sans-serif
- Domus Titling: used only for titles and brand name
- New Zen: used for H3 and body text

### Logo Rules
- Logo = VF initials + weight bars (3 per side) + heartbeat line + brand name
- Variants: icon only, icon + horizontal name, icon + name below
- **Allowed:** resizing proportionally at different scales
- **Forbidden:** placing on brand-colored bg without white version, rearranging elements, rotating, excessive shrinking, removing parts

## Tech Stack
- **Framework:** Astro (static site generator, zero JS output)
- **Styling:** Global CSS + Astro scoped styles (no CSS framework)
- **Animations:** AOS (Animate On Scroll) for scroll-triggered animations
- **Fonts:** Bebas Neue + Inter (Google Fonts placeholders for Domus Titling + New Zen)
- **Build:** `npm run dev` (dev server) / `npm run build` (static output to `dist/`)
- **Pages:** index, concept, coach, cours, coaching, planning, tarifs, contact, mentions-legales
- **Audit & tâches:** voir `TASKS.md` à la racine du projet

## Development Conventions
- Components in `src/components/`, layouts in `src/layouts/`, pages in `src/pages/`
- Shared styles in `src/styles/global.css`, CSS variables for all brand values
- Reusable components: `HeroSection`, `ContentSection`, `CTAButton`, `StatsBar`, `ReviewCard`
- Static assets in `public/assets/`
- Copywriting reference docs in `assets/copywriting/*.md`
