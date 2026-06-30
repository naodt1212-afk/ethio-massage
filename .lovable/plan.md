# Ethiomassage Landing Page

Recreate the uploaded mobile design as a single landing route, matching layout, colors, typography, and spacing as closely as possible.

## Design tokens (added to `src/styles.css`)
- Emerald `#0B5B50` → `--primary`
- Gold `#C89A3D` → `--accent`
- Cream `#F6EFE2` for icon bubbles
- White background, soft shadows, radii 20–30px
- Fonts via `<link>` in `__root.tsx`:
  - Display serif: **Playfair Display** (headings, brand)
  - Script: **Dancing Script** (the "Where You Are")
  - Body: **Inter**

## Sections (single route `src/routes/index.tsx`)
1. **Sticky header** — rounded white pill: hamburger ☰ · centered logo (generated gold massage silhouette inside green leaf wreath) + "Ethiomassage" wordmark (green "Ethio", gold "massage") + tagline "Relax. Renew. Rejuvenate." · circular emerald phone button.
2. **Hero** — two-column. Heading "Professional / Massage Therapy / Where You Are" (gold middle line, script third line with underline accent). Subtext "Indoor & Outdoor Massage Services". Pill buttons "Book Now" (emerald + white arrow circle) and "Call Us" (white, gold outline). Right column: generated spa therapist photo. Decorative curved green+gold wave divider at bottom.
3. **Our Services** — centered title with gold leaf flourishes. 6 rounded white icon cards in a 6-col scrollable row on mobile (matches screenshot): Swedish, Deep Tissue, Relaxation, Sports, Home Service, Hotel Service (lucide icons in green). "See All Services →" link in green.
4. **Indoor / Outdoor cards** — 2 large rounded image cards side by side with dark overlay, white circular icon badge (Home / Tree), title, subtitle, gold "Book Now" pill.
5. **Why Choose Ethiomassage?** — centered title with leaves. 6 circular cream-bg icons in a row with labels: Professional Therapists, We Come To You, 24/7 Booking, Safe & Private, Easy Payment, Addis Ababa Coverage.
6. **Our Therapists** — header with "View All →". 3 portrait cards (Sara M., Helen T., Liya A.) with gold 5-star row and "5.0".
7. **Floating WhatsApp button** — fixed bottom-right, green pill, WhatsApp icon, "Book via WhatsApp".
8. **Bottom nav** — fixed rounded bar, 4 items (Home active emerald, Services, Booking, Contact in gray).

## Images (generated via imagegen, saved to `src/assets/`)
- `hero-therapist.jpg` — female therapist in black uniform performing massage, warm spa lighting
- `indoor-room.jpg` — luxury hotel room interior
- `outdoor-gazebo.jpg` — garden gazebo with curtains
- `therapist-sara.jpg`, `therapist-helen.jpg`, `therapist-liya.jpg` — professional portraits
- `logo-ethiomassage.png` — gold sitting massage silhouette inside green leaf wreath (transparent)

## Technical notes
- All icons via `lucide-react` (already installed).
- Update `__root.tsx` head: site title, description, OG tags, Google Fonts `<link>` for Playfair Display, Dancing Script, Inter.
- All colors via semantic tokens (no hard-coded hex in components except via CSS vars).
- Smooth fade-in on scroll using a small CSS `@keyframes` + `animate-*` utility class; subtle hover lift on cards/buttons.
- Mobile-first; scales up cleanly to tablet/desktop (max-w container, hero stays 2-col).
- No backend/auth required.

## Files touched
- `src/styles.css` — tokens, fonts ref, wave/keyframes
- `src/routes/__root.tsx` — font `<link>` tags, meta
- `src/routes/index.tsx` — full page composition
- `src/components/site/*` — Header, Hero, Services, IndoorOutdoor, WhyChoose, Therapists, WhatsAppFab, BottomNav
- `src/assets/*` — generated images + logo
