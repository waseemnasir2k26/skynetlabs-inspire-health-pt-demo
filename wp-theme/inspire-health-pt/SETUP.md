# Inspire Health PT — WP Deploy Checklist (Milestone 2)

**State:** FSE theme `inspire-health-pt` is BUILT + QA-passed + **installed on inspirehealthpt.co**.
Resume from "Pages" below.

Installable zip: `inspire-health-pt.zip` (repo root). Source: `wp-theme/inspire-health-pt/`.
Latest fix shipped: Founder's Vault CTA slug `/vault-offer` → `/founders-vault` (commit `5b66a57`).
If re-uploading the zip: must switch to a default theme + delete old copy first (WP blocks re-upload of an installed theme), or FTP-overwrite `patterns/pricing.php`.

---

## STEP 0 — before anything

- [ ] **Full site backup** (existing WP — theme activation replaced the front-end). NON-NEGOTIABLE.
- [ ] Confirm **WordPress ≥ 6.4** (FSE requirement).
- [ ] **Settings → Permalinks → "Post name" → Save** (or `/about` etc. 404).

## STEP 1 — create 10 Pages (homepage is automatic, do NOT create one)

Slugs are EXACT. `evaluation` + `founders-vault` are hardcoded in CTA buttons; header menu links to all. Typo = 404.

| #   | Title                | Slug                 | Template                | Insert pattern(s) in order     |
| --- | -------------------- | -------------------- | ----------------------- | ------------------------------ |
| 1   | About                | `about`              | Full-Width Page         | Story → Team                   |
| 2   | Services             | `services`           | Full-Width Page         | Services → Compare → Pricing   |
| 3   | The Space            | `the-space`          | Full-Width Page         | Facilities                     |
| 4   | The Gallery          | `gallery`            | Full-Width Page         | Gallery                        |
| 5   | The Shoulder Guide   | `shoulder-guide`     | Full-Width Page         | Ebook                          |
| 6   | The Founder's Vault  | `founders-vault`     | Full-Width Page         | Founder's Vault                |
| 7   | FAQ                  | `faq`                | Full-Width Page         | FAQ                            |
| 8   | Evaluation           | `evaluation`         | Evaluation Landing Page | none (VSL + Calendly baked in) |
| 9   | Thank You — Booking  | `thank-you-booking`  | Thank You — Booking     | none                           |
| 10  | Thank You — Purchase | `thank-you-purchase` | Thank You — Purchase    | none                           |

Per page: Pages → Add New → set Title → **verify slug** matches table → right sidebar **Page → Template** → pick template → for pages 1–7 click **＋ → Patterns → "Inspire Health PT"** category → insert listed pattern(s).

## STEP 2 — nav

- [ ] After pages exist, header menu links resolve. If nav looks empty: Appearance → Editor → Patterns → Header → click Navigation block → Save.

## STEP 3 — funnel wiring (needs creds/links)

- [ ] **WooCommerce**: install + create the Shoulder Guide product — $27, Virtual + Downloadable, attach `assets/shoulder-health-and-freedom.pdf`. Set "completed order" email to include the download link.
- [ ] **Stripe**: WooCommerce Stripe Payment Gateway plugin → connect (Waseem, post-install).
- [ ] On `shoulder-guide` page Ebook pattern: replace the checkout button placeholder with `[add_to_cart id="PRODUCT_ID"]`.
- [ ] **Vimeo**: upload the 4K `.mov` (Frame.io master) to Vimeo → on `evaluation` page swap the VSL placeholder `wp:html` block for `wp:embed` with the real Vimeo URL.
- [ ] **Email tool** (PTeverywhere / Mailchimp / etc — CLIENT TO CONFIRM): wire lead form + the 12-Day Challenge auto-send.

## STEP 4 — verify live

- [ ] Every nav link loads (no 404). Mobile + desktop.
- [ ] Prices correct ($279 / $1,800 / $2,550 featured / $3,280 / $27). Founder's Vault = no price.
- [ ] Disclaimers present (footer + testimonials). Calendly + Vimeo load. Checkout completes test order → PDF auto-emails.
- [ ] Run `/site-auditor` before client handoff.

## OPEN BLOCKERS (from client)

1. WP admin + host/SFTP (for Waseem to do STEP 3 + verify) — or client does STEP 1–2 self.
2. Vimeo link.
3. Email-tool name.
   (Stripe = Waseem has it.)
