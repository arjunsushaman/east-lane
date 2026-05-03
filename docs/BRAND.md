# East Lane — Brand System

## Colors

| Token (Tailwind class) | Hex | Use |
|---|---|---|
| `terracotta` | `#A8481A` | Primary — CTA buttons, accents, highlights |
| `terracotta-dark` | `#8A3A14` | Button hover state |
| `amber` | `#C8681A` | Accent — secondary highlights |
| `olive` | `#5C6B3A` | Secondary — nav, section backgrounds |
| `olive-deep` | `#2C3B1E` | Sticky navbar bg, dark hero overlay |
| `olive-light` | `#7A8F52` | Subtle decorative accents |
| `cream` | `#E8DEC8` | Primary light background |
| `cream-light` | `#F5F0E8` | Page base / card backgrounds |
| `cream-dark` | `#D4C9AC` | Borders, dividers on light bg |
| `brand-dark` | `#1A1612` | Footer, deep backgrounds |

## Typography

| Role | Font | Import | Weights | Use |
|---|---|---|---|---|
| Primary / Display | **DM Serif Display** | `next/font/google` | 400 (regular + italic) | All major headings, hero |
| Secondary / Decorative | **Cormorant Garamond** | `next/font/google` | 300–700 (normal + italic) | Italic partner in heading motif |
| Body / UI | **Jost** | `next/font/google` | 300, 400, 500, 600 | Navigation, body, buttons, labels |

### Heading Motif
Every major section title uses mixed typography: DM Serif Display bold for the first word + Cormorant Garamond italic for the second:

```html
<h2>
  <span class="font-dm-serif font-bold">East</span>
  <em class="font-cormorant italic font-normal"> Lane</em>
</h2>
```

Seen throughout brand manual (e.g. "Logo *Structure*", "Color *Palette*", "Primary *Typeface*").

## Logo Files

| File | Path | Use |
|---|---|---|
| Wordmark (full) | `/images/logo-wordmark.png` | Header navbar, footer |
| Icon (lotus only) | `/images/logo-icon.png` | Hero section, favicon, mobile |

### Logo Color Rules
- Dark backgrounds (olive-deep, brand-dark): use **white/cream** version  
- Light backgrounds (cream, cream-light): use **terracotta** version
- Never modify, rotate, shadow, or recolor logo

## Brand Personality
- Warm, earthy, nature-inspired
- Premium but accessible
- Pan-Asian cultural authenticity
- "Sharing plates made for passing around"

## Photography Direction
- Warm lighting, earthy tones
- Hands reaching in — abundant, inviting
- Moody atmospheric shots (ramen, curries, sharing spreads)
- Instagram handle: @eastlane_bistro
