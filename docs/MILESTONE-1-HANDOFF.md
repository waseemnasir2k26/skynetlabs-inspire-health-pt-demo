# Milestone 1 — Handoff, Asset Requests & Launch/Migration Plan
_Inspire Health PT — The Vault · updated 2026-06-04_

## Status
**Milestone 1 delivered.** Site built, deployed, running on real client content.
Live demo: https://skynetlabs-inspire-health-pt-demo.vercel.app

### Done this milestone
- 10-page premium site on real brand (hunter green #0F3024 + brass #B8893A, Bebas/Cormorant)
- Conversion funnel: Home, About, Services, The Space, Gallery, FAQ, Evaluation(+TY), Founder's Vault(+TY)
- Real ebook live: **"Shoulder Health & Freedom" $27** + 12-Day Shoulder Challenge bonus; PDF delivered on checkout + Thank-You
- Rotating art gallery, **easy-swap** (drop file + edit one array): Katie Hirshfield (feature, mixed-media collage) · Adrian Mesa (photography on metal) · Carlo Guzman (colored pencil)
- Real team (Dr. Juan Guzman, Freddy Mendoza, Annie De Jesus), compliance-safe copy, mobile-first, SEO + schema
- Live client intake form at `/intake.html`
- Branch `feat/full-brand-build` @ `149a803`, build green, deployed to prod

---

## ⚠️ Current live domain = inspirehealthpt.co (DO NOT overwrite blindly)
It is a **live WordPress site with real value**:
- Condition pages (knee/back/shoulder/hip pain, running, performance) — **ranking in Google = SEO**
- Blog (more SEO), Reviews page
- Booking via **Clinical Marketer** widget
- Smush plugin, custom theme

**Decision: do NOT point the domain at the new build yet.** Reasons:
1. New build still has placeholder prices/VSL/photos = not launch-ready.
2. A wholesale swap risks losing Google rankings, breaking the existing booking flow, and breaking email.

**Correct path:** access → full backup → build on a **staging copy** → client approves → cut over with **301 redirects** so SEO carries. Keep blog + condition pages.

---

## Need from client

### Content / assets
1. Prices: evaluation / per-session / Founder's Vault tiers _(ebook $27 confirmed)_
2. VSL video link (Miami Starroom)
3. Public phone + email
4. Facility photos (sauna, gym, treatment room)
5. Artist bios (Katie, Adrian, Carlo) + exhibition title/season

### Access
6. WordPress admin login
7. Hosting login (+ domain registrar if separate)

### Decisions
8. Keep current blog + condition pages + Clinical Marketer booking, or move booking to **PTeverywhere**? Which tools stay?
9. PTeverywhere — API / Zapier / webhook for auto-assigning the 12-day protocol? (yes → automate; no → keep IG-DM "SHOULDER RESET" claim)
10. Where are the bonus shoulder protocol videos hosted?

---

## 🔒 Pre-change BACKUP CHECKLIST (run before ANY DNS/hosting/theme change)
- [ ] **Full file backup** — entire WP install (esp. `wp-content/` themes, plugins, uploads). Download a zip off-server.
- [ ] **Database export** — full `.sql` dump (UpdraftPlus / All-in-One WP Migration / phpMyAdmin export). Store a copy locally.
- [ ] **DNS snapshot** — export all DNS records (A, CNAME, **MX**, TXT/SPF/DKIM) before changing nameservers. Screenshot the registrar zone.
- [ ] **Email / MX** — confirm where their email is hosted; do NOT change MX. Note SPF/DKIM so mail keeps flowing.
- [ ] **URL / redirect map** — crawl the live site (Screaming Frog) → list every indexed URL so we 301 old→new and keep SEO.
- [ ] **Booking widget** — record the Clinical Marketer form/embed details so bookings aren't lost.
- [ ] **Blog content** — export posts (WP Tools → Export) to preserve articles + their rankings.
- [ ] **Reviews / testimonials** — save copies (and confirm FTC "results vary" handling).
- [ ] **Rollback plan** — keep the staging cutover reversible; verify the backup restores before go-live.

---

## Sequence to launch
1. Client sends assets + access (above)
2. **Backup everything** (checklist) — verify restore works
3. Build new site on **staging** (WordPress Kadence port — see `WORDPRESS-PORT.md`); migrate/keep blog + condition pages
4. Client review + approve on staging
5. **Cut over** with 301 redirects (protect SEO + bookings + email)
6. **Connect Stripe** (real ebook payments) + PTeverywhere auto-assign if API exists
7. **Pre-launch gate:** FL Board of Physical Therapy + healthcare-attorney review

---

## Client message (sent / ready to send)
> Hi! Milestone 1 is done and your demo is live:
> https://skynetlabs-inspire-health-pt-demo.vercel.app
>
> To move toward launching it on inspirehealthpt.co, here's what I need from you:
>
> CONTENT / ASSETS
> 1. Prices for the evaluation, per-session, and Founder's Vault tiers
> 2. Your VSL video link (the one being produced)
> 3. Public phone + email for the site
> 4. Facility photos (sauna, gym, treatment room)
> 5. Short bios for the artists (Katie, Adrian, Carlo) + exhibition title/season
>
> ACCESS (so I can build safely)
> 6. WordPress admin login
> 7. Hosting login (and domain registrar, if separate)
>
> A couple of important notes on your current site:
> • Your live site already has SEO value (blog + condition pages ranking on Google) and a booking widget. I won't replace it blindly — before ANY change I'll take a full backup (files + database + your email/DNS settings), build the new site on a staging copy, and only switch it over once you approve, using redirects so you keep your Google rankings.
> • Do you want to KEEP your current blog + condition pages and booking widget (Clinical Marketer), or move booking fully to PTeverywhere? Let me know which tools stay.
>
> On the ebook bonus + PTeverywhere: does PTeverywhere offer an API, Zapier, or webhook to auto-assign the 12-day protocol when someone signs up? If yes I'll automate it; if not we keep the "DM SHOULDER RESET on Instagram" claim.
>
> Once I have the assets + access, I'll back everything up, build on staging, and we launch when you're happy.
