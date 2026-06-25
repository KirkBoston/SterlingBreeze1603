# Sterling Breeze Condos — Update User Page Feature

## Feature Overview

Add an **Update User Page** that allows the property owner/admin to update contact information, listing details, and site configuration displayed across the website. This page should be accessible from the sidebar navigation (authenticated access only) and follow the existing coastal design system.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18+ with TypeScript |
| Styling | Tailwind CSS |
| Routing | React Router v6 (`/admin/update-user`) |
| Icons | Lucide React |
| Form State | React `useState` / controlled components |
| Validation | Client-side (required fields, email/phone format) |

---

## Requirements

### Functional Requirements

- Display a form pre-populated with current owner/contact data
- Allow editing of the following fields:
  - **Owner Name** (text)
  - **Email Address** (email)
  - **Phone Number** (tel)
  - **VRBO Listing URL** (url)
  - **Airbnb Listing URL** (url)
  - **Property Tagline** (text — short headline shown on the Home page hero)
  - **Property Description** (textarea — shown on the Home page)
- On submit, validate all fields and display inline error messages
- Show a success confirmation banner on save
- "Cancel" button resets the form to its last saved state

### Non-Functional Requirements

- Fully responsive — single-column on mobile, two-column grid on desktop
- Matches existing design system (colors, typography, border radius, shadows)
- All inputs must have accessible labels and focus-visible outlines
- Form state is preserved on accidental navigation away (unsaved-changes warning)

---

## Component Architecture

```
src/
├── components/
│   └── admin/
│       ├── UpdateUserForm.tsx     # Controlled form with validation
│       └── SuccessBanner.tsx      # Dismissible success confirmation
├── pages/
│   └── admin/
│       └── UpdateUserPage.tsx     # Page wrapper — composes form + banner
└── types/
    └── user.ts                    # UserProfile type definition
```

### `UserProfile` type (`src/types/user.ts`)

```ts
export interface UserProfile {
  ownerName: string;
  email: string;
  phone: string;
  vrboUrl: string;
  airbnbUrl: string;
  propertyTagline: string;
  propertyDescription: string;
}
```

---

## UI / UX Specifications

### Layout

- **Desktop (1024px+)**: Two-column grid — label/input pairs fill left column; textarea spans full width below
- **Mobile (< 768px)**: Single column, full-width inputs

### Input Styles (consistent with `ContactForm.tsx`)

| Element | Style |
|---|---|
| Input | `rounded-lg border border-sand-dark focus:ring-2 focus:ring-primary` |
| Label | `text-sm font-medium text-gray-700 mb-1` |
| Error message | `text-red-500 text-xs mt-1` |
| Submit button | `bg-primary text-white rounded-xl px-6 py-3 hover:bg-primary-dark` |
| Cancel button | `border border-sand-dark text-gray-600 rounded-xl px-6 py-3 hover:bg-sand` |

### Success Banner

- Full-width, `bg-teal-50 border border-teal-300 text-teal-800`
- Dismissible via `×` button
- Auto-dismisses after 5 seconds

---

## Routing

Add the route in `App.tsx`:

```tsx
<Route path="/admin/update-user" element={<UpdateUserPage />} />
```

Add a navigation link in `Sidebar.tsx` under an **Admin** section (below the main nav links):

```tsx
{ path: '/admin/update-user', label: 'Update Profile', icon: <UserCog /> }
```

---

## Validation Rules

| Field | Rule |
|---|---|
| Owner Name | Required, min 2 characters |
| Email | Required, valid email format |
| Phone | Required, 10-digit US phone (digits only) |
| VRBO URL | Optional, must start with `https://` if provided |
| Airbnb URL | Optional, must start with `https://` if provided |
| Property Tagline | Required, max 80 characters |
| Property Description | Required, min 50 characters |

---

## Implementation Tasks

- [ ] Define `UserProfile` interface in `src/types/user.ts`
- [ ] Create `UpdateUserPage.tsx` page component with section heading
- [ ] Create `UpdateUserForm.tsx` controlled form component
  - Pre-populate all fields from props or a shared config/store
  - Implement all validation rules (inline error display)
  - Wire up Cancel (reset) and Submit (validate → save) handlers
- [ ] Create `SuccessBanner.tsx` dismissible banner component
- [ ] Add `/admin/update-user` route to `App.tsx`
- [ ] Add **Update Profile** link to `Sidebar.tsx` admin section
- [ ] Verify responsive layout at 375px, 768px, 1024px, and 1440px
- [ ] Accessibility audit: labels, focus rings, `aria-describedby` on error messages
- [ ] Test unsaved-changes warning on navigation away

---

## Acceptance Criteria

| # | Criteria | Status |
|---|---|---|
| 1 | Form renders pre-populated with existing data | ⬜ |
| 2 | All validation rules trigger on submit with inline messages | ⬜ |
| 3 | Success banner appears after a valid save | ⬜ |
| 4 | Cancel resets form to last saved values | ⬜ |
| 5 | Layout is responsive at all defined breakpoints | ⬜ |
| 6 | All inputs have accessible labels and focus-visible outlines | ⬜ |
| 7 | Sidebar link routes correctly to `/admin/update-user` | ⬜ |
