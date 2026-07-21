# Alle Tech — component reuse rules

This app is a Next.js (App Router) site built by converting a Framer export
page by page. **Before building or converting any page, check this file
first and reuse what exists below instead of hand-rolling markup.** Only add
a new component when a pattern will repeat (2+ places) or is a distinct,
self-contained block worth reusing later — don't extract one-off page
furniture.

## Design tokens (already defined, don't redeclare)

- Colors: `primary`, `dark-blue`, `body-gray`, `ink`, `bg-1`/`bg-2`/`bg-3`,
  `border-gray`, `bg-gradient-primary` — see `tailwind.config.ts`.
- Headings: `.heading-1` (h1, page hero) → `.heading-6` — see `app/globals.css`.
  Never hand-write heading font sizes; always use these classes.
- Body text: `text-body-16` / `text-body-18` / `text-body-20` + `text-body-gray`.
- Layout: `.container-main` (max-width + responsive px) and `.section-padding`
  (vertical rhythm) — every top-level `<section>` uses one or both.
- Rounding: `rounded-card` (16px, used for photo-heavy cards) vs
  `rounded-section` (20px, the default for section/image corners).
- CMS rich text: `.rich-text` styles `h3/h4/p/ul/strong/a` — always go
  through `RichText`, never apply the class by hand.

## Component library

| Component | Path | Use for |
|---|---|---|
| `PageHero` | `components/PageHero.tsx` | The **h1** hero block at the top of a page: optional `Badge`, `title`, optional `subtitle`. Used by About/Contact/Blogs. |
| `SectionHeader` | `components/SectionHeader.tsx` | An **h2** header *within* a page (badge + title + optional subtitle, `align="center"\|"left"`). Used to introduce a mid-page section, not the page itself. |
| `ImageFrame` | `components/ui/ImageFrame.tsx` | Any `relative overflow-hidden` image block (`aspect`, `rounded`, `sizes`, `priority`, extra `className` for margins/max-width). Covers hero images, body images, card media. |
| `RichText` | `components/ui/RichText.tsx` | Any CMS `content01`/`content02`-style HTML blob (`dangerouslySetInnerHTML`). Wraps it in `.rich-text`. |
| `Badge` | `components/ui/Badge.tsx` | Small pill label (eyebrow tag, category chip). |
| `Eyebrow` | `components/ui/Eyebrow.tsx` | The small dot + uppercase label above a heading (e.g. "ABOUT US", "OUR PRODUCTS"). `variant="light"\|"dark"` (default light) — light for white/light-bg sections (ink text, gradient dot), dark for dark-bg sections (white text, white dot). `className` for wrapper spacing, `textClassName`/`dotClassName` for one-off tweaks (e.g. extra letter-spacing, pulse animation). |
| `Button` | `components/ui/Button.tsx` | Solid/outline/white pill CTA button (`href` or `onClick`). |
| `ArrowButton` | `components/ui/ArrowButton.tsx` | CTA button with a circular arrow affordance (`variant="light"\|"solid"`, `size="sm"\|"md"`) — used in Navbar and forms. |
| `AnimatedHeading` | `components/ui/AnimatedHeading.tsx` | Word-by-word blur-in reveal for a heading (`as` tag prop). Used for the big "hook" headings (FAQ, ContactForm), not every heading. |
| `CtaSection` | `components/CtaSection.tsx` | The dark full-bleed "Schedule Now" banner. Drop in as-is near the end of a page. |
| `FaqSection` | `components/FaqSection.tsx` | The FAQ accordion, sourced from `FAQS` in `lib/constants.ts`. |
| `ContactFormSection` | `components/ContactFormSection.tsx` | The split contact-info/form card. |
| `ContactCallBanner` | `components/ContactCallBanner.tsx` | The "Call Us Now" info strip, phone number pulled from `CONTACT_INFO.phone`. |
| `SectionCard`-style cards | `components/{ServiceCard,BlogCard,PricingCard}.tsx`, `components/about/*` | Per-listing-item cards; each takes the matching data-model object as a prop — follow this shape for any new listing (Products, Solutions, Industries). |

## Page anatomy (the pattern every converted page follows)

1. Hero `<section>` (bg-bg-3 or bg-bg-1, padded) wrapping `PageHero` (page has
   exactly one `<h1>`; everything in-page after this uses `SectionHeader`'s `h2`).
2. One or more content `<section>`s, alternating `bg-white` / `bg-bg-3`,
   built from the data-driven grid + card components above.
3. `CtaSection` before the tail sections, where relevant.
4. `FaqSection` and/or `ContactFormSection` near the bottom (most pages end
   with one or both).

Detail pages (`services/[slug]`, `blogs/[slug]`) follow the CMS pattern:
hero (`Badge` + `h1` + subtitle, optional tags/`ImageFrame`) → alternating
`RichText` / `ImageFrame` content blocks driven by `content01/bodyImage/content02`-
shaped fields on the data model (see `lib/data.ts`) → `ContactFormSection`.
Reuse this `content01`/`bodyImage`/`content02` shape for any new detail-page
data model (Products, Solutions) so the same page skeleton applies.

## Known deviations (leave as-is unless asked to fix)

- `services` and `pricing` hero sections use `SectionHeader` (renders `h2`)
  instead of `PageHero` (renders `h1`), so those two pages currently have no
  `h1`. Flag it if asked about SEO/accessibility, but don't silently change it.
- `lib/constants.ts` already has `PRODUCTS` and `SOLUTIONS` data and
  `NAV_LINKS` pointing at `/solutions`, `/products`, `/industries`, but those
  pages don't exist yet — this is mid-rebrand from the Cevira cleaning-company
  Framer template to Alle Tech. The project folder and all "Cevira" brand
  strings (package name, `<title>`, Footer logo/wordmark, 404 copy) have been
  renamed to Alle Tech, but the actual page **copy** (hero text, services,
  blogs, pricing plans) still describes a cleaning company, not an ERP/tech
  consultancy — that content rewrite hasn't happened yet.
- Layout components (`Navbar`, `Footer`, `SmoothScroll`) are singletons wired
  in `app/layout.tsx` — don't split these further for "reuse," they only ever
  render once.
