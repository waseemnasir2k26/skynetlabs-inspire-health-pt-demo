# WordPress Port Map — Inspire Health PT

The client's brief specifies **WordPress + WooCommerce + Stripe + Calendly**. This React/Vite build is the **pitch demo** — it proves the design, funnel, and conversion logic fast and cheaply. Below is exactly how each demo element maps to the production WordPress build (Phase 2).

## Build method (production)

| Layer | Choice | Why |
|---|---|---|
| CMS | WordPress | Per client brief; client-editable |
| Builder | **Kadence** (or Bricks) + custom blocks | Fast, clean markup, Core Web Vitals friendly — not bloated like Divi/Elementor. Demo's design ports 1:1 |
| Theme | Kadence child theme w/ design tokens as CSS custom properties | The 3-variant CSS-variable system carries straight over; client's picked variant becomes the token set |
| E-commerce | **WooCommerce** + **Stripe** (official gateway) | Ebook = a virtual/downloadable WooCommerce product; Stripe Checkout for card payment |
| Digital delivery | WooCommerce downloadable product + **automated email** (order-complete email w/ secure download link) | Replaces demo's "instant download" stub |
| Booking | **Calendly** embed (inline widget) on the Evaluation LP | Replaces demo's interactive booking mock |
| Email capture | Fluent Forms / WPForms → email + **FluentCRM / Mailchimp / GHL** automation | Replaces demo's form stubs; triggers the ebook + nurture sequences |
| Video | VSL embed (YouTube/Vimeo/Wistia) via the video block | Drop-in for the demo's VSL slot |
| Schema | Rank Math / custom JSON-LD: MedicalClinic + Physician + Product + VideoObject + FAQ + Breadcrumb | Mirrors `src/components/Schema.jsx` |
| Perf | WP Rocket + image CDN + lazy-load | Hit the demo's load targets on WP |

## Page-by-page mapping

| Demo (React) | WordPress production |
|---|---|
| `pages/Home.jsx` | Front page — Kadence sections rebuilt from demo blocks (Hero, Trust marquee, Stats, Services, About, Process, Compare, Pricing, Testimonials, Gallery, FAQ, CTA) |
| `pages/About.jsx` | About page + Physician schema per real DPT bio |
| `pages/Services.jsx` | Services page — each service optionally its own SEO landing page later |
| `pages/Evaluation.jsx` | **Landing Page #1** — VSL + Calendly inline embed + lead form → CRM |
| `pages/Ebook.jsx` | **Landing Page #2** — WooCommerce product page / paywall; Stripe Checkout; order-complete auto-email w/ PDF download |
| `pages/ThankYou.jsx` | Two Thank-You pages — one post-booking, one post-purchase (conversion tracking fires here) |
| `components/Funnel.jsx` (BookingMock / StripeCheckout / EmailCapture) | Calendly widget · WooCommerce+Stripe checkout · Fluent Forms |
| `themes.js` CSS variables | Child-theme `:root` token set (client's chosen variant) |

## What stays identical
Design system, copy, funnel order, conversion logic, compliance/disclaimer copy, schema strategy, SEO keyword map — all defined here and carried into WP verbatim. The demo de-risks the build: the client approves the look and flow **before** any WordPress time is spent.
