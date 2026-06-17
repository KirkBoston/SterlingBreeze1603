# Sterling Breeze Condos — Implementation Tasks

Derived from [`design.md`](design.md). Work top-to-bottom; later phases depend on earlier ones.

---

## Phase 1 — Project Scaffold

- [ ] Initialize Vite + React + TypeScript project (`npm create vite@latest`)
- [ ] Install and configure Tailwind CSS with PostCSS
- [ ] Add custom colors, font, and border-radius to `tailwind.config.ts` (see Design System section of design.md)
- [ ] Install dependencies:
  - `react-router-dom` (routing)
  - `lucide-react` (icons)
  - `swiper` or `embla-carousel-react` (carousel)
- [ ] Set up `Inter` font via Google Fonts or `@fontsource/inter`
- [ ] Create folder structure:
  ```
  src/
    components/
    pages/
    assets/images/
  ```
- [ ] Copy all images from `images/` into `src/assets/images/`
- [ ] Create image index file `src/assets/images/index.ts` that exports all image paths with category metadata
- [ ] Configure React Router in `App.tsx` with routes for all 6 pages
- [ ] Verify dev server runs with `npm run dev`

---

## Phase 2 — Layout & Sidebar

- [ ] **`Layout.tsx`** — Page wrapper component
  - Renders sidebar (left) + main content area (right)
  - Manages sidebar open/closed state
  - Passes toggle handler down to Sidebar and TopBar

- [ ] **`Sidebar.tsx`** — Left navigation component
  - Expanded state: `260px` wide, `primary` (#0077B6) background
  - Logo area: wave SVG icon + "Sterling Breeze Condos" in white
  - Nav links: Home, Gallery, Amenities, Availability, Location, Contact
  - Each link: Lucide icon + label, `py-3 px-5` padding
  - Active link style: white/15% background + `border-l-4 border-accent`
  - Hover style: white/10% background
  - Collapse arrow button at bottom
  - Collapsed/rail state: `64px` wide, icons only, tooltips on hover

- [ ] **`TopBar.tsx`** — Mobile-only fixed top bar
  - Hamburger (`Menu`) icon button on left
  - Site name centered
  - Hidden on desktop (`hidden lg:hidden`)

- [ ] **Mobile drawer behavior**
  - Sidebar slides in from left on menu icon press
  - Semi-transparent backdrop (`bg-black/40`) behind drawer
  - Backdrop click closes sidebar
  - `X` button inside drawer closes sidebar
  - Slide animation: `translate-x-[-280px]` → `translate-x-0`, `250ms ease-out`

- [ ] **Sidebar collapse animation (desktop)**
  - Width animates `260px → 64px`, `200ms ease-in-out`
  - Labels fade out; icons remain centered

- [ ] Wire all nav links to correct routes in React Router
- [ ] Mark active route with `aria-current="page"` and active styles
- [ ] Test layout at mobile, tablet, and desktop breakpoints

---

## Phase 3 — Home Page

- [ ] **`HeroSection.tsx`**
  - Full-width image: `sterling-breeze-unit-1603_26.jpg`
  - Height: `70vh` desktop / `50vh` mobile
  - `object-cover` image fill
  - Gradient overlay: bottom 50%, `black/50%`
  - Overlaid text: site title, location, star rating badge, beachfront label
  - Two CTA buttons: "Check Availability" (primary) + "View Gallery" (ghost/outline)
  - Buttons link to `/availability` and `/gallery` routes

- [ ] **Property Stats Bar**
  - Horizontal flex row below hero
  - Four stats: Bedrooms (2), Bathrooms (2), Guests (6), Beachfront Gulf Views
  - Each stat: Lucide icon + bold value + muted label
  - White background, bottom border `sand-dark`
  - Wraps to 2×2 grid on mobile

- [ ] **Short description section**
  - 2–3 paragraph property description text
  - `max-w-3xl` centered content block

- [ ] **Teaser gallery strip**
  - 3 featured images displayed as a horizontal row
  - `rounded-2xl`, `aspect-video`, `object-cover`
  - "View All Photos" link routes to `/gallery`

- [ ] **`Home.tsx`** page — compose HeroSection + Stats Bar + description + teaser gallery

---

## Phase 4 — Gallery Page

- [ ] **`ImageCarousel.tsx`** — Core carousel component
  - Accepts array of `{ src, alt, category }` image objects
  - Main image: `aspect-video` (16:9), `rounded-2xl`, `object-cover`
  - Previous / Next arrow buttons: circular, white background, `shadow-md`, absolutely positioned
  - Dot indicators below image: active = `primary`, inactive = `sand-dark`
  - Keyboard navigation: left/right arrow keys
  - Touch/swipe support on mobile
  - Auto-play: 5-second interval, pauses on hover and touch
  - ARIA: `aria-label="Property photos"`, arrow buttons labeled "Previous photo" / "Next photo"

- [ ] **Thumbnail strip** (desktop only)
  - Row of up to 6 thumbnails: `64×48px`, `rounded-lg`, `object-cover`
  - Active thumbnail: `ring-2 ring-primary`
  - Clicking a thumbnail jumps to that image

- [ ] **Category filter tabs**
  - Tabs: All | Exterior | Interior | Amenities | Area
  - Clicking a tab filters the image array passed to the carousel
  - Active tab: underline or pill style in `primary`

- [ ] **`Gallery.tsx`** page — compose filter tabs + carousel + thumbnail strip
  - Import and categorize all images from the image index
  - Default to "All" tab on load

---

## Phase 5 — Amenities Page

- [ ] **`AmenityCard.tsx`** — Single amenity card
  - White background, `rounded-2xl shadow-md p-6`
  - Centered Lucide icon (`48px`, `primary` color) + label below

- [ ] **`AmenityGrid.tsx`** — Grid of amenity cards
  - `grid-cols-2` mobile → `grid-cols-3` tablet → `grid-cols-4` desktop
  - `gap-4` or `gap-6`

- [ ] Define amenity list (icon + label):
  - Pool, Hot Tub, Gym, Grill, Fire Pit, Laundry, Bunk Room, Patio, Wine Bar, Beachfront, Free WiFi, Full Kitchen

- [ ] **`Amenities.tsx`** page — section heading + `AmenityGrid` + optional descriptive text per category

---

## Phase 6 — Availability / Calendar Page

- [ ] **`CalendarEmbed.tsx`** — Responsive Google Calendar wrapper
  - Outer container: `relative w-full` with `padding-bottom: 75%`
  - Inner `<iframe>`: `absolute inset-0 w-full h-full`
  - iframe `src`: `https://calendar.google.com/calendar/embed?src=ksgab1lc8e6lqg9qgc59mt7bh16n7igi%40import.calendar.google.com&ctz=America%2FNew_York`
  - iframe `title`: `"Availability Calendar"` (accessibility)
  - `frameBorder="0"`, `scrolling="no"`

- [ ] **`Calendar.tsx`** page
  - Section heading: "Check Availability"
  - `CalendarEmbed` component
  - Booking contact info below: phone number, email, link to VRBO listing

---

## Phase 7 — Location Page

- [ ] **`Location.tsx`** page
  - Section heading: "Location"
  - Property address block: Panama City Beach, FL
  - Nearby attractions list with distances:
    - Pier Park (~1 mile)
    - Gulf of Mexico beach access (steps away)
    - Local restaurants and shops
  - Optional: embedded Google Maps iframe (same responsive wrapper pattern as calendar)

---

## Phase 8 — Contact Page

- [ ] **`ContactForm.tsx`** — Inquiry form component
  - Fields: Full Name, Email, Phone, Check-in Date, Check-out Date, Number of Guests (1–8), Message
  - Desktop layout: two-column grid for name/email and phone/guests; message full-width
  - Mobile layout: single column
  - Submit button: "Send Inquiry", full-width, `primary` background, `rounded-xl`
  - Input styles: `rounded-lg`, border `sand-dark`, focus ring `primary`
  - Basic client-side validation (required fields, email format)

- [ ] **`Contact.tsx`** page
  - Phone and email displayed prominently above the form
  - `ContactForm` component
  - VRBO / Airbnb listing link as alternative CTA

---

## Phase 9 — Polish & QA

- [ ] **Transitions & animations**
  - Confirm sidebar open/close animations work at all breakpoints
  - Confirm carousel slide transition is smooth (`300ms ease-in-out`)
  - Add button hover effects: darken + `shadow-lg`, `150ms`
  - Optional: page route fade-in, `200ms`

- [ ] **Accessibility audit**
  - All `<img>` tags have descriptive `alt` text
  - `<nav aria-label="Main navigation">` on sidebar
  - `aria-current="page"` on active nav link
  - Carousel arrow buttons have accessible labels
  - Google Calendar iframe has `title` attribute
  - Tab order is logical throughout
  - Focus-visible outlines are present and not suppressed

- [ ] **Responsive QA** — test each page at:
  - 375px (iPhone SE)
  - 768px (iPad)
  - 1024px (iPad landscape / small laptop)
  - 1440px (desktop)

- [ ] **Image optimization**
  - Confirm all images load correctly from `src/assets/images/`
  - Add `loading="lazy"` to non-hero images
  - Ensure hero image loads eagerly (`loading="eager"`)

- [ ] **Cross-browser check** — Chrome, Safari, Firefox

- [ ] **Production build** — run `npm run build`, verify no TypeScript errors, check bundle size

---

## Completion Checklist

| Phase | Description | Status |
|---|---|---|
| 1 | Project Scaffold | ⬜ |
| 2 | Layout & Sidebar | ⬜ |
| 3 | Home Page | ⬜ |
| 4 | Gallery Page | ⬜ |
| 5 | Amenities Page | ⬜ |
| 6 | Availability / Calendar Page | ⬜ |
| 7 | Location Page | ⬜ |
| 8 | Contact Page | ⬜ |
| 9 | Polish & QA | ⬜ |
