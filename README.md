# Mediversal Healthcare — Frontend Prototype (Phase 1–3)

A modern, original, conversion-focused frontend for Mediversal Healthcare —
inspired by mediversal.in's ecosystem (hospital network, specialties, doctors)
but with a completely new visual system, copy, and UX. No content was copied
from the original site's layout, CSS, or components; only publicly-listed
factual information (unit names, locations, named doctors, contact details)
was preserved as the source of truth.

## What's built (this delivery)

A static, dependency-free prototype — open `index.html` directly in a browser,
or serve the folder with any static server. Every page is real, working HTML/CSS/JS:

- **Design system** (`assets/css/main.css`) — color, type, spacing, radius,
  shadow tokens; the "pulse line" signature divider; fully responsive
  (320px → large desktop), reduced-motion aware, keyboard-focus visible.
- **Homepage** (`index.html`) — hero, quick actions, smart search (debounced,
  categorized), 4-unit network, featured specialties, emergency banner, app promo.
- **Doctor discovery** (`doctors.html`, `doctor-profile.html`) — search + filters
  (specialty/hospital/language), skeleton loading, empty states, profile page
  with related doctors.
- **Specialties** (`specialties.html`, `specialty-detail.html`) — grouped
  directory (Medical / Surgical / Diagnostics / Emergency) + detail template
  with specialists, FAQ, and booking CTA.
- **Hospital units** (`hospital-detail.html?slug=`) — one data-driven template
  serving all four units (Multi Super Speciality Hospital, Maatri, Health
  Studio, Homecare).
- **Appointment booking** (`appointment.html`) — 8-step flow: hospital →
  specialty → doctor (optional) → date → time slot → patient details (validated)
  → consent (separate mandatory/marketing checkboxes) → confirmation with a
  reference number and `REQUESTED` status, matching the spec's status model.
- **Contact** (`contact.html`) — validated enquiry form, address/phone/email/hours,
  embedded map, emergency CTA.
- **About, Patient Care, Health Insights** — editorial/informational hubs ready
  for CMS-managed content.
- **Mobile** — dedicated bottom nav (Home / Doctors / Book / Call / Menu),
  full-screen mobile menu, large tap targets.

All doctor, hospital, and specialty data lives in `assets/js/data.js` in the
same shape a real API would return — nothing is hard-coded inside components,
and no fake reviews, ratings, or availability are shown (appointment slots are
clearly illustrative and marked as such in code comments).

## What's intentionally not built yet

This is a frontend prototype, not the full system in the brief. Not included:
FastAPI backend, PostgreSQL schema/migrations, admin dashboard, real auth,
i18n content translation (English-only copy; Hindi is wired as a locale switch
but translated JSON files aren't populated), automated tests, Docker/CI, and
real appointment/notification integrations.

## Suggested next phases

1. **Backend** — FastAPI + PostgreSQL implementing the schema and API modules
   from the brief (`/api/v1/hospitals`, `/doctors`, `/appointments`, etc.),
   replacing `data.js` with real fetch calls.
2. **Admin dashboard** — protected app for managing doctors, specialties,
   appointments, and content, with role-based permissions.
3. **i18n** — populate `assets/locales/en` and `assets/locales/hi` and wire
   `next-intl`/`i18next` if migrating to Next.js (recommended for SSR/SEO at
   this scale).
4. **SEO/structured data** — expand per-page JSON-LD (Physician, MedicalClinic,
   FAQPage, BreadcrumbList), sitemap.xml, robots.txt.
5. **Testing & DevOps** — component/API/e2e tests, Docker, CI pipeline.

## Structure

```
mediversal/
  index.html
  doctors.html
  doctor-profile.html
  specialties.html
  specialty-detail.html
  hospital-detail.html
  appointment.html
  contact.html
  about.html
  patient-care.html
  blog.html
  assets/
    css/main.css
    js/{icons,data,main}.js
    locales/{en,hi}/        (stub for future i18n content)
```
