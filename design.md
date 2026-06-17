# Sterling Breeze Condos — Design Specification

Derived from [`claude requirements.md`](claude%20requirements.md).

---

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#0077B6` | Sidebar background, primary buttons, links |
| `primary-dark` | `#005F92` | Hover states on primary elements |
| `accent` | `#F4A261` | Highlights, badges, call-to-action accents |
| `accent-dark` | `#E08C4A` | Hover states on accent elements |
| `sand` | `#FDF6EC` | Page background, card backgrounds |
| `sand-dark` | `#EDE8DF` | Dividers, input borders |
| `white` | `#FFFFFF` | Cards, sidebar text, modal backgrounds |
| `text-primary` | `#1A1A2E` | Body text, headings |
| `text-muted` | `#6B7280` | Subtext, captions, placeholders |
| `success` | `#10B981` | Available dates indicator |
| `danger` | `#EF4444` | Booked/unavailable indicator |

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Site logo | Inter | 700 | 1.25rem (20px) |
| Page heading (H1) | Inter | 700 | 2.25rem (36px) |
| Section heading (H2) | Inter | 600 | 1.5rem (24px) |
| Card title (H3) | Inter | 600 | 1.125rem (18px) |
| Body | Inter | 400 | 1rem (16px) |
| Caption / label | Inter | 400 | 0.875rem (14px) |
| Navigation link | Inter | 500 | 0.9375rem (15px) |

### Spacing Scale (Tailwind defaults)

Use Tailwind's default spacing scale. Key values:
- Component padding: `p-4` (16px) or `p-6` (24px)
- Section vertical gap: `py-12` (48px) desktop, `py-8` (32px) mobile
- Card gap in grids: `gap-4` or `gap-6`

### Border Radius

| Element | Radius |
|---|---|
| Cards | `rounded-2xl` (16px) |
| Buttons | `rounded-xl` (12px) |
| Inputs | `rounded-lg` (8px) |
| Sidebar | Square (no radius) |
| Image carousel | `rounded-2xl` |
| Badges / pills | `rounded-full` |

### Shadows

| Element | Tailwind class |
|---|---|
| Cards | `shadow-md` |
| Sidebar | `shadow-lg` |
| Dropdown / Drawer | `shadow-2xl` |
| Buttons (hover) | `shadow-lg` |

### Icons

Use **Lucide React** throughout. Key icon assignments:

| Icon | Usage |
|---|---|
| `Menu` / `X` | Sidebar toggle |
| `Home` | Home nav link |
| `Image` | Gallery nav link |
| `Star` | Amenities nav link |
| `CalendarDays` | Availability nav link |
| `MapPin` | Location nav link |
| `Mail` | Contact nav link |
| `ChevronLeft` / `ChevronRight` | Carousel arrows |
| `Bed` | Bedrooms stat |
| `Bath` | Bathrooms stat |
| `Users` | Max guests stat |
| `Waves` | Beachfront indicator |
| `Wifi`, `Utensils`, `Dumbbell`, `Flame`, `WashingMachine` | Amenity icons |

---

## Layout

### Desktop (≥ 1024px)

```
┌─────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌───────────────────────────────────┐│
│  │          │  │                                   ││
│  │ SIDEBAR  │  │         MAIN CONTENT              ││
│  │ 260px    │  │         flex-1                    ││
│  │ fixed    │  │         scrollable                ││
│  │          │  │                                   ││
│  └──────────┘  └───────────────────────────────────┘│
└─────────────────────────────────────────────────────┘
```

### Tablet (768px – 1023px)

```
┌─────────────────────────────────────────────────────┐
│  ┌──────┐  ┌─────────────────────────────────────┐  │
│  │ RAIL │  │         MAIN CONTENT                │  │
│  │ 64px │  │         flex-1                      │  │
│  │icons │  │         scrollable                  │  │
│  │only  │  │                                     │  │
│  └──────┘  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Mobile (< 768px)

```
┌──────────────────────────────────────┐
│  ┌────────────────────────────────┐  │
│  │  ☰  Sterling Breeze Condos     │  │  ← Top bar (fixed)
│  └────────────────────────────────┘  │
│  ┌────────────────────────────────┐  │
│  │                                │  │
│  │         MAIN CONTENT           │  │
│  │         (full width)           │  │
│  │                                │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

  When menu icon pressed → overlay drawer slides in from left
```

---

## Component Designs

### Sidebar

**Expanded state (desktop)**
- Width: `260px`, fixed position, full viewport height
- Background: `primary` (`#0077B6`)
- Top section: logo + site name in white
- Nav links: icon + label, white text, `py-3 px-5`
- Active link: white background at 15% opacity + left accent bar (`border-l-4 border-accent`)
- Hover: white background at 10% opacity
- Bottom: collapse arrow button

**Collapsed / icon-rail state (tablet)**
- Width: `64px`
- Icons centered, tooltips on hover showing link label
- Logo collapses to icon only (wave SVG)

**Mobile drawer**
- Full height overlay from left, `280px` wide
- Same styling as expanded desktop sidebar
- Dark semi-transparent backdrop (`bg-black/40`) covers rest of screen
- Closes on backdrop click or `X` button press
- Slide-in animation: `translate-x-0` from `translate-x-[-280px]`, duration `250ms ease-out`

---

### Hero Section (Home page)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│    [full-width image: sterling-breeze-unit-1603]    │
│    height: 70vh desktop / 50vh mobile               │
│    object-fit: cover                                │
│                                                     │
│    ┌──────────────────────────────────────┐         │
│    │  Sterling Breeze Condos              │         │
│    │  Panama City Beach, FL               │         │
│    │  ★★★★★  Beachfront • Unit 1603       │         │
│    │                                      │         │
│    │  [Check Availability]  [View Gallery]│         │
│    └──────────────────────────────────────┘         │
│    (gradient overlay: bottom 50%, black/50%)        │
└─────────────────────────────────────────────────────┘
```

Below hero — **Property Stats Bar**:

```
┌──────────┬──────────┬──────────┬──────────────────┐
│  🛏 2     │  🚿 2    │  👥 6    │  🌊 Beachfront   │
│ Bedrooms  │  Baths   │  Guests  │  Gulf Views       │
└──────────┴──────────┴──────────┴──────────────────┘
```

- Background: `white`, border bottom `sand-dark`
- Stats displayed as a horizontal flex row, centered
- Each stat: icon + value in bold + label in muted text

---

### Image Carousel (Gallery page)

```
┌─────────────────────────────────────────────────────┐
│  ◀  ┌─────────────────────────────────────┐   ▶   │
│     │                                     │        │
│     │         [Current Image]             │        │
│     │         aspect-ratio: 16/9          │        │
│     │                                     │        │
│     └─────────────────────────────────────┘        │
│                  ● ○ ○ ○ ○ ○                        │
└─────────────────────────────────────────────────────┘
```

- Main image: `aspect-video` (16:9), `rounded-2xl`, `object-cover`
- Left/right arrows: circular button, white background, `shadow-md`, positioned absolutely inside the carousel
- Dot indicators: below image, active dot = `primary` color, inactive = `sand-dark`
- Optional tab filters above carousel: **All** | **Exterior** | **Interior** | **Amenities** | **Area**
- Touch/swipe enabled on mobile
- Auto-play: 5s interval, pauses on hover/touch

**Thumbnail strip** (desktop only, below dots):
- Row of 5–6 thumbnail images, `64x48px`, `rounded-lg`, active thumbnail has `ring-2 ring-primary`

---

### Amenity Grid (Amenities page)

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  🏊 Pool    │  │  ♨ Hot Tub  │  │  🏋 Gym     │
└─────────────┘  └─────────────┘  └─────────────┘
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  🔥 Fire Pit│  │  🍖 Grill   │  │  🌊 Beach   │
└─────────────┘  └─────────────┘  └─────────────┘
```

- Grid: `grid-cols-2` mobile → `grid-cols-3` tablet → `grid-cols-4` desktop
- Each card: white background, `rounded-2xl shadow-md p-6`, centered icon + label
- Icon size: `48px`, color: `primary`

---

### Calendar Embed (Availability page)

```
┌─────────────────────────────────────────────────────┐
│  Check Availability                                  │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │                                              │  │
│  │       [Google Calendar iframe]               │  │
│  │       800px × 600px (responsive wrapper)     │  │
│  │                                              │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  To book: contact us at (850) 555-0000              │
│  or visit our VRBO listing →                        │
└─────────────────────────────────────────────────────┘
```

- Iframe wrapped in `relative w-full` container with `padding-bottom: 75%` (4:3 ratio) for responsive scaling
- `iframe` set to `absolute inset-0 w-full h-full`
- On mobile the container width is `100%`, so the calendar scales down naturally

---

### Contact Form (Contact page)

Fields:
1. Full Name (text)
2. Email (email)
3. Phone (tel)
4. Dates of Interest (date range or two date inputs: Check-in / Check-out)
5. Number of Guests (number, 1–8)
6. Message (textarea, 4 rows)
7. Submit button: "Send Inquiry" — full-width, `primary` background

Layout: single column on mobile, two columns (name+email, phone+guests) on desktop with message spanning full width.

---

## Page-by-Page Wireframe Summary

| Page | Hero | Primary Content | Secondary |
|---|---|---|---|
| Home | Full-width image + overlay CTA | Stats bar, short description | Teaser gallery strip (3 images) |
| Gallery | None | Full carousel + tab filters | Thumbnail strip |
| Amenities | Small banner | Icon grid | Descriptive text per category |
| Availability | Small banner | Google Calendar embed | Booking contact info |
| Location | Map embed | Nearby attractions list | Distance callouts |
| Contact | None | Contact form | Phone / email display |

---

## Interaction & Animation

| Interaction | Behavior |
|---|---|
| Sidebar open (mobile) | Slide in from left, `250ms ease-out`; backdrop fades in |
| Sidebar close (mobile) | Slide out left, `200ms ease-in`; backdrop fades out |
| Sidebar collapse (desktop) | Width animates `260px → 64px`, `200ms ease-in-out` |
| Carousel next/prev | Slide transition, `300ms ease-in-out` |
| Carousel auto-play | 5-second interval, pause on hover/focus |
| Button hover | Slight darken + `shadow-lg`, `150ms` |
| Nav link hover | Background tint, `100ms` |
| Page route change | Fade in, `200ms` (optional) |

---

## Tailwind Configuration Additions

Add to `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#0077B6',
        dark: '#005F92',
      },
      accent: {
        DEFAULT: '#F4A261',
        dark: '#E08C4A',
      },
      sand: {
        DEFAULT: '#FDF6EC',
        dark: '#EDE8DF',
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
},
```

---

## Accessibility Notes

- All images require `alt` attributes describing the content
- Sidebar nav: `<nav aria-label="Main navigation">`
- Carousel: `aria-label="Property photos"`, arrow buttons labeled "Previous photo" / "Next photo"
- Active nav item: `aria-current="page"`
- Google Calendar iframe: `title="Availability Calendar"`
- Focus-visible outlines must remain visible (do not remove Tailwind's focus ring globally)
- Color contrast: all text on `primary` background must meet WCAG AA (white text passes)
