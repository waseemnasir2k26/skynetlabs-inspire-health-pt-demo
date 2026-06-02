# SEO / Schema — Inspire Health PT (Miami, FL)

Keyword map, structured-data plan, and local SEO requirements. Cash-pay, out-of-network, direct-access angles are the high-intent differentiators.

---

## 1. Keywords by page

| Page | Primary keywords |
|---|---|
| **Home** | cash pay physical therapy Miami · out-of-network physical therapy Miami · sports physical therapy Miami |
| **Services** | dry needling Miami · manual therapy Miami · ACL rehab Miami · blood flow restriction training Miami · return-to-sport testing Miami |
| **Evaluation LP** | physical therapy evaluation Miami · book physical therapy appointment Miami · 1-on-1 physical therapy Miami |

**High-intent local (weave across Home / Eval / About):**
- cash pay physical therapist near me Miami
- out-of-network PT Miami reimbursement
- direct access physical therapy Miami *(FL no-referral angle)*

---

## 2. Schema @types by page

Root entity = **`MedicalClinic`** (inherits `MedicalBusiness` + `LocalBusiness` → **Google Maps eligible**).

| Page | Schema @types |
|---|---|
| **Home** | `MedicalClinic` (root) · `Physician` (per practitioner) · `BreadcrumbList` · `FAQPage` |
| **About** | `MedicalClinic` · `Physician` (per PT) · `BreadcrumbList` |
| **Services** | `Service` (per treatment) · `MedicalClinic` ref · `BreadcrumbList` · `FAQPage` |
| **Evaluation LP** | `Service` · `MedicalClinic` ref · `VideoObject` (VSL) · `BreadcrumbList` · `FAQPage` |
| **Ebook LP** | `Product` + `Offer` · `VideoObject` (VSL) · `BreadcrumbList` |
| **Thank-You** | (none required — noindex) |

**Entity details to populate:**
- `Physician`: `medicalSpecialty: PhysicalTherapy`, `hasCredential: DPT`, **NPI**, FL license #.
- `Service`: one per treatment (dry needling, manual therapy, ACL rehab, BFR, return-to-sport testing).
- `Product` + `Offer`: ebook (price, availability, Stripe/Woo checkout).
- `VideoObject`: each VSL embed (name, description, thumbnailUrl, uploadDate, duration).

---

## 3. Local SEO musts

- **Google Business Profile** primary category: **"Physical Therapy Clinic."**
- **NAP consistency** (Name / Address / Phone) — identical across site, GBP, and all citations.
- Embedded map + click-to-call + physical address on Home, About, Eval LP.
- **Neighborhood targeting:** Brickell · Coral Gables · Wynwood · Coconut Grove · Miami Beach (work into copy, service-area sections, and metadata).
- Reviews: drive to 50+ / 4.5★ (also an EEAT signal — see `COMPLIANCE.md`).

---

## 4. May-2026 FAQ rich-result note

> **Google removed FAQ rich results on May 7, 2026.** FAQ schema no longer earns expandable SERP snippets for most sites.

- **Keep `FAQPage` schema anyway** — it remains valuable for **AI-search / LLM parsing** (ChatGPT, Perplexity, Gemini, AI Overviews) and answer extraction.
- Do **not** expect or promise FAQ rich snippets in Google SERPs.
- Continue authoring genuine, high-intent Q&A (cash-pay, out-of-network, direct-access, reimbursement) for AEO value.
