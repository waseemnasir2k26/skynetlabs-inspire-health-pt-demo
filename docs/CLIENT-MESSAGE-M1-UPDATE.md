# Client Message — Milestone 1 Update (overlap fix + facility photos)

_Sent after deploy d2305d1 → live at https://skynetlabs-inspire-health-pt-demo.vercel.app_

---

**Subject: Updates are live — please take a look**

Hi [Name],

Thanks for the photos and for flagging that overlap — both are sorted and live on the demo now:

👉 **https://skynetlabs-inspire-health-pt-demo.vercel.app**

**What changed (please check on your phone):**

1. **The overlapping text is fixed.** That was on the "insurance mill vs. Inspire Health PT" comparison — the labels and answers were colliding on mobile. Open the **Services** page and scroll to that comparison; each row now reads cleanly, line by line.

2. **Your real photos are in.** Head to the **Facilities** page — the sauna, gym, treatment room, and the lounge/arcade space are now showing (replacing the placeholders). I used the four sharpest, best-lit shots; the others were a little dark or sideways, so I held them back rather than put them up at lower quality.

**One quick check on your end:** a couple of the sauna photos have framed black-and-white figure-study artwork on the walls. Looks great as boutique art — just want your thumbs-up that it reads the way you want on a clinic site before we lock it in.

**To get you launched on inspirehealthpt.co, I still need a few things from you:**

- Prices for the evaluation, per-session, and Founder's Vault tiers
- Your VSL video link
- Public phone + email for the site
- Artist bios + photos of the actual gallery pieces (Katie, Adrian, Carlo) + the exhibition title/season
- Your logo file, and an exterior/storefront shot if you have one

**Two pieces of good news:**

- **The ebook can be fully automated.** PTeverywhere now connects directly to the tool I already run for automations, so when someone signs up we can auto-send the 12-day Shoulder Reset protocol — no manual DM step needed.
- **Your Google rankings are safe.** I'll keep your existing blog + booking widget, back up everything first (files, database, email, DNS), build on a staging copy, and only switch over with proper redirects once you've approved.

Take a look and let me know what you think of the fixes — and send those assets over whenever you're ready.

Best,
Waseem

---

## Internal notes (not for client)

**Verified live on Vercel (commit d2305d1):**

- New divider class `border-b border-line pb-5 last:border-b-0` present in deployed bundle; old broken `hairline pb-5 last:border-0` gone.
- 4 facility images return 200: sauna.jpg / gym.jpg / lounge.jpg / treatment.jpg.
- Bundle hashes match local fixed build (index-B6JoQsUH.js, index-D3wkbURJ.css).

**Launch blockers carried forward:**

1. Hash routing (`#/services`) → SEO-invisible. Convert to path + SSG/prerender OR hybrid keep-WP-blog before cutover.
2. Remove `X-Robots-Tag: noindex, nofollow` from vercel.json at launch.
3. PTeverywhere → GHL native integration (Nov 2025) → build 12-day Shoulder Reset GHL workflow.
4. Migration: backup files+DB+MX/DNS → URL crawl baseline → staging → 1:1 301 map → cutover → GSC sitemap + 404 monitor.

**Still-missing client assets:** prices, VSL link, public phone+email, gallery artwork + artist bios, logo file, exterior shot.

**Unused photos:** IMG_2927 / IMG_2928 / IMG_2929 (rotated 90°, dark) — re-rotate if needed later.
