# Grooming Wala

Premium luxury pet grooming website built with Next.js 15, Tailwind CSS, Framer Motion, and Supabase.

## Structure

- `app/` - Next.js App Router pages
- `components/` - Reusable UI components
- `lib/` - Data and Supabase client helpers

## Features

- Elegant premium homepage with glassmorphism cards
- Booking flow with pet type, breed, service, date/time, and photo upload
- Admin dashboard overview for appointments and analytics
- Responsive mobile-first design
- FAQ accordion, Instagram feed, and WhatsApp booking button
- Supabase booking API stub

## Getting started

1. Install dependencies: `npm install`
2. Create `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Run locally: `npm run dev`

## Notes

- Payment integration is prepared in the booking flow with placeholder logic; current demo flow sets reservations and shares the final total after service.
- Google Maps iframe is included in Contact.
- Replace placeholder images with brand assets for production.
	- Place your logo file at `public/logo.png` (recommended: PNG, 400x400 or SVG). The header will use `/logo.png` automatically.
	- To set a favicon, add `public/favicon.ico` or update `app/layout.tsx` metadata icons.
