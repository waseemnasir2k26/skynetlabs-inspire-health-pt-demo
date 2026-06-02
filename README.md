# Inspire Health PT — Premium Clinic Demo

A conversion-focused website demo for **Inspire Health PT**, a premium cash-pay physical therapy & performance clinic in Miami, FL. Built by [SkynetLabs](https://skynetjoe.com) as a speculative pitch demo.

## What's inside

- **3 live design variants** (top-right switcher) — Editorial (warm luxe) · Cinematic (dark performance) · Minimal (clinical clean). Each is a full CSS-variable theme; the whole site restyles instantly.
- **Full conversion funnel** — Home, About, Services, Evaluation landing page (VSL + Calendly booking flow + lead capture), Ebook landing page (WooCommerce/Stripe-style paywall), Thank-You.
- **Medical-grade compliance** — `MedicalClinic` JSON-LD schema, out-of-network/superbill framing, HIPAA-safe forms, results-vary + medical disclaimers, no cure claims.
- **Premium signatures** — Ken Burns hero, film grain, scroll reveals, marquee trust band, magnetic CTAs.

## Stack

React 18 + Vite 6 + Tailwind 3 + CSS-variable theming. No backend — forms are demo stubs ready to wire to Web3Forms / Formspree / GHL, Calendly, and Stripe/WooCommerce at handoff.

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # production build → dist/
```

## Handoff notes

Real assets swap in via `src/data.js` (`CLINIC.calendly`, `CLINIC.vsl`, copy, pricing) and `src/components/Photo.jsx` (clinic photography). WordPress port map in `docs/WORDPRESS-PORT.md`.

MIT — fork to use.
