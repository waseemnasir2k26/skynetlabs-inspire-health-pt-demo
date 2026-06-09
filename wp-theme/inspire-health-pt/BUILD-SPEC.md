I have everything I need. Writing the build spec now.

# BUILD SPEC — `inspire-health-pt` (WordPress FSE Block Theme)

Port of the React demo at `skynetlabs-inspire-health-pt-demo`. Target WP 6.6+ (theme.json **v3**). Text domain `inspire-health-pt`. Build agents MUST read `src/data.js` and use the listed strings **verbatim** (curly quotes `'` `"` included). All copy below references the exact `data.js` export keys — do not paraphrase.

Theme root: `C:/Users/info/GITHUB/skynetlabs-inspire-health-pt-demo/wp-theme/inspire-health-pt/`. Photos already live in `assets/img/` (see paths in brief). Image refs in `data.js` use `/img/...`; in the theme rewrite to `<?php echo get_theme_file_uri('assets/img/...') ?>`-resolved URLs inside patterns (use absolute placeholder paths agents replace at register time, or hardcode the deployed `wp-content/themes/inspire-health-pt/assets/img/...` URL — pattern PHP can interpolate `get_theme_file_uri()` into the markup string).

---

## 1. `theme.json` (full, valid, version 3)

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "appearanceTools": true,
    "useRootPaddingAwareAlignments": true,
    "layout": { "contentSize": "720px", "wideSize": "1200px" },
    "color": {
      "defaultPalette": false,
      "defaultGradients": false,
      "custom": true,
      "customGradient": true,
      "palette": [
        { "name": "Background", "slug": "bg", "color": "#0C0F0D" },
        { "name": "Surface", "slug": "surface", "color": "#141915" },
        { "name": "Surface 2", "slug": "surface-2", "color": "#1A1F1A" },
        { "name": "Hunter Green", "slug": "green", "color": "#0F3024" },
        { "name": "Green Deep", "slug": "green-deep", "color": "#0A2019" },
        { "name": "Pine", "slug": "pine", "color": "#2D6B52" },
        { "name": "Sage", "slug": "sage", "color": "#4A8B6F" },
        { "name": "Mint", "slug": "mint", "color": "#C9D9CF" },
        { "name": "Ink", "slug": "ink", "color": "#F2ECDD" },
        { "name": "Muted", "slug": "muted", "color": "#9DA39A" },
        { "name": "Muted 2", "slug": "muted-2", "color": "#6E726B" },
        { "name": "Accent", "slug": "accent", "color": "#B8893A" },
        { "name": "Accent Soft", "slug": "accent-soft", "color": "#CB9B3C" },
        { "name": "On Accent", "slug": "onaccent", "color": "#120F08" },
        { "name": "Line", "slug": "line", "color": "rgba(184,137,58,0.24)" },
        {
          "name": "Line Soft",
          "slug": "line-soft",
          "color": "rgba(242,236,221,0.08)"
        }
      ]
    },
    "typography": {
      "defaultFontSizes": false,
      "fluid": true,
      "customFontSize": true,
      "fontFamilies": [
        {
          "name": "Bebas Neue",
          "slug": "display",
          "fontFamily": "'Bebas Neue', sans-serif",
          "fontFace": [
            {
              "fontFamily": "Bebas Neue",
              "fontWeight": "400",
              "fontStyle": "normal",
              "fontDisplay": "swap",
              "src": ["file:./assets/fonts/bebas-neue-400.woff2"]
            }
          ]
        },
        {
          "name": "Inter",
          "slug": "body",
          "fontFamily": "'Inter', system-ui, sans-serif",
          "fontFace": [
            {
              "fontFamily": "Inter",
              "fontWeight": "100 900",
              "fontStyle": "normal",
              "fontStretch": "normal",
              "fontDisplay": "swap",
              "src": ["file:./assets/fonts/inter-variable.woff2"]
            },
            {
              "fontFamily": "Inter",
              "fontWeight": "100 900",
              "fontStyle": "italic",
              "fontStretch": "normal",
              "fontDisplay": "swap",
              "src": ["file:./assets/fonts/inter-variable-italic.woff2"]
            }
          ]
        },
        {
          "name": "Cormorant Garamond",
          "slug": "serif",
          "fontFamily": "'Cormorant Garamond', Georgia, serif",
          "fontFace": [
            {
              "fontFamily": "Cormorant Garamond",
              "fontWeight": "400",
              "fontStyle": "normal",
              "fontDisplay": "swap",
              "src": ["file:./assets/fonts/cormorant-garamond-400.woff2"]
            },
            {
              "fontFamily": "Cormorant Garamond",
              "fontWeight": "600",
              "fontStyle": "normal",
              "fontDisplay": "swap",
              "src": ["file:./assets/fonts/cormorant-garamond-600.woff2"]
            },
            {
              "fontFamily": "Cormorant Garamond",
              "fontWeight": "400",
              "fontStyle": "italic",
              "fontDisplay": "swap",
              "src": ["file:./assets/fonts/cormorant-garamond-400-italic.woff2"]
            }
          ]
        }
      ],
      "fontSizes": [
        { "name": "Small", "slug": "small", "size": "0.875rem" },
        { "name": "Base", "slug": "base", "size": "1rem" },
        { "name": "Medium", "slug": "medium", "size": "1.125rem" },
        {
          "name": "Lede",
          "slug": "lede",
          "size": "clamp(1.15rem, 1.6vw, 1.4rem)"
        },
        { "name": "Large", "slug": "large", "size": "1.5rem" },
        {
          "name": "X Large",
          "slug": "x-large",
          "size": "clamp(2rem, 4vw, 3rem)"
        },
        {
          "name": "XX Large",
          "slug": "xx-large",
          "size": "clamp(2.75rem, 7vw, 5rem)"
        },
        {
          "name": "Display",
          "slug": "display",
          "size": "clamp(3.5rem, 11vw, 8rem)"
        }
      ]
    },
    "spacing": {
      "defaultSpacingSizes": false,
      "customSpacingSize": true,
      "units": ["px", "em", "rem", "vh", "vw", "%"],
      "spacingSizes": [
        { "name": "1", "slug": "20", "size": "0.5rem" },
        { "name": "2", "slug": "30", "size": "1rem" },
        { "name": "3", "slug": "40", "size": "1.5rem" },
        { "name": "4", "slug": "50", "size": "2rem" },
        { "name": "5", "slug": "60", "size": "3rem" },
        { "name": "6", "slug": "70", "size": "5rem" },
        { "name": "7", "slug": "80", "size": "8rem" }
      ]
    },
    "border": { "radius": true, "color": true, "style": true, "width": true }
  },
  "styles": {
    "color": {
      "background": "var(--wp--preset--color--bg)",
      "text": "var(--wp--preset--color--ink)"
    },
    "spacing": {
      "blockGap": "var(--wp--preset--spacing--50)",
      "padding": {
        "top": "0",
        "right": "var(--wp--preset--spacing--40)",
        "bottom": "0",
        "left": "var(--wp--preset--spacing--40)"
      }
    },
    "typography": {
      "fontFamily": "var(--wp--preset--font-family--body)",
      "fontSize": "var(--wp--preset--font-size--base)",
      "lineHeight": "1.65"
    },
    "elements": {
      "heading": {
        "typography": {
          "fontFamily": "var(--wp--preset--font-family--display)",
          "fontWeight": "400",
          "letterSpacing": "0.012em",
          "lineHeight": "1.04",
          "textTransform": "uppercase"
        },
        "color": { "text": "var(--wp--preset--color--ink)" }
      },
      "h1": {
        "typography": { "fontSize": "var(--wp--preset--font-size--xx-large)" }
      },
      "h2": {
        "typography": { "fontSize": "var(--wp--preset--font-size--x-large)" }
      },
      "h3": {
        "typography": { "fontSize": "var(--wp--preset--font-size--large)" }
      },
      "link": {
        "color": { "text": "var(--wp--preset--color--ink)" },
        ":hover": {
          "color": { "text": "var(--wp--preset--color--accent-soft)" }
        }
      },
      "button": {
        "border": { "radius": "2px" },
        "color": {
          "background": "var(--wp--preset--color--accent)",
          "text": "var(--wp--preset--color--onaccent)"
        },
        "typography": {
          "fontFamily": "var(--wp--preset--font-family--display)",
          "letterSpacing": "0.06em",
          "textTransform": "uppercase"
        },
        ":hover": {
          "color": {
            "background": "var(--wp--preset--color--accent-soft)",
            "text": "var(--wp--preset--color--onaccent)"
          }
        }
      }
    },
    "blocks": {
      "core/paragraph": { "typography": { "lineHeight": "1.65" } },
      "core/quote": {
        "typography": {
          "fontFamily": "var(--wp--preset--font-family--serif)",
          "fontStyle": "italic",
          "fontSize": "var(--wp--preset--font-size--large)"
        },
        "color": { "text": "var(--wp--preset--color--ink)" }
      },
      "core/separator": {
        "color": { "text": "var(--wp--preset--color--line)" }
      }
    }
  }
}
```

> Note: `letterSpacing`/`textTransform` under `elements.heading.typography` are valid v3 keys. RADIUS 2px is set on button + carried by `.card-*` classes in `theme.css`.

---

## 2. File list (one-line purpose)

```
inspire-health-pt/
├─ style.css                         Theme header block (Name, Version, Text Domain, Tags).
├─ theme.json                        §1 — tokens, palette, fonts, spacing, styles.
├─ functions.php                     Enqueue theme.css (front + add_editor_style), register_block_style() set (§6), register nav menu, image sizes.
├─ readme.txt                        Install + page-mapping + Calendly/Vimeo replacement notes.
├─ screenshot.png                    Theme thumbnail (export hero frame, 1200x900).
├─ assets/
│  ├─ css/theme.css                  Ported signature CSS (§6 classes) — film grain, marquee, cards, diamond rule, eyebrow, ken-burns, underline-draw, btn, vsl-frame. Tokens mapped to var(--wp--preset--color--*).
│  ├─ js/reveal.js                   IntersectionObserver → adds .in to .reveal (ports index.css reveal). Enqueued front-end only.
│  ├─ fonts/                         Self-hosted woff2 (bebas-neue-400, inter-variable[-italic], cormorant-garamond-400/600/400-italic). NO Google hotlink.
│  └─ img/                           EXISTS — facilities/, space/, juan|freddy|annie.jpg, gallery/katie-*.jpg, logo-brass|white|black.png.
├─ parts/
│  ├─ header.php                     Logo (logo-brass.png) + NAV (8 items) + brass "Book Your Evaluation" → Calendly. (§4)
│  └─ footer.php                     Identical NAV + NAP + disclaimers + marquee brand band. (§4)
├─ templates/
│  ├─ index.html                     Fallback: header + post-content + footer.
│  ├─ front-page.html                Home composition (§5).
│  ├─ page.html                      Generic page: header + post-content (constrained) + footer.
│  ├─ page-wide.html                 Full-bleed page (Services/Space/Gallery/Vault/Evaluation): header + alignfull post-content + footer.
│  ├─ page-evaluation.html           VSL+Calendly LP — minimal chrome (§7).
│  ├─ page-thank-you-booking.html    THANKYOU.evaluation thank-you.
│  ├─ page-thank-you-purchase.html   THANKYOU.ebook thank-you.
│  └─ 404.html                       header + 404 pattern + footer (§5).
└─ patterns/                         15 patterns (§3) — auto-registered via file header.
```

Page→template mapping (set per-page "Template" in WP, or rely on slug-matched `page-{slug}.html`): About/FAQ/Founders-Vault/Shoulder-Guide → `page-wide.html`; Services/The-Space(`the-space`)/Gallery → `page-wide.html`; Evaluation(`evaluation`) → `page-evaluation.html`; the-space slug is `the-space`, gallery `gallery`, ebook page slug `shoulder-guide`, vault page slug `founders-vault`. Thank-you pages use the two thank-you templates.

---

## 3. The 15 Patterns

All slugs namespaced `ihpt/`. Header keys are space-separated Title Case. Eyebrows = `<p class="eyebrow ...">` (NOT a heading) using the `.eyebrow` class + `accent` color. Diamond rule = a raw `core/html` or `core/group` carrying `.diamond-rule` markup, OR `core/separator is-style-diamond` (registered in §6). Section numerals optional via `.numeral`. Every section is a top-level `core/group {align:"full", layout:{type:"constrained"}}` with `surface`/`bg` background and `var:preset|spacing|70` vertical padding unless noted.

| #   | Pattern (slug)      | data.js export                                        | Layout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Block style / color slug                                                                                                                                                                      | Heading                                                                                                         |
| --- | ------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 1   | `ihpt/hero`         | `HERO` (+ `BRANDLINES.oneLine`)                       | `core/cover` useFeaturedImage off → `space/wide.jpg`, dimRatio 60, overlayColor `bg`, minHeight 760px, `.kenburns` on the cover image via className; inner constrained group: eyebrow `HERO.kicker` → H1 `HERO.h1` → `.lede` serif `HERO.lede` → buttons                                                                                                                                                                                                                                                                                                                                               | Cover image gets `className:"kenburns"`; primary button default (accent), secondary `is-style-outline`                                                                                        | **H1** = `HERO.h1`                                                                                              |
| 2   | `ihpt/method`       | `METHOD`                                              | group(bg) → eyebrow `METHOD.eyebrow` + H2 `METHOD.title` + `.lede` `METHOD.intro` → `core/columns` 4 cols, one per `phases[]`: numeral `n`, H3 `title`, `.eyebrow`/tagline `tag`, paragraph `body`                                                                                                                                                                                                                                                                                                                                                                                                     | columns 1-3 `is-style-brass-top` (`.card-brass-top`); phase 04 (`peak:true`) `is-style-green-featured` (`.card-green`, green slug)                                                            | H2 title, **H3** per phase                                                                                      |
| 3   | `ihpt/archetypes`   | `ARCHETYPES`                                          | group(surface) → eyebrow + H2 `title` → `core/columns` 4 cols per `items[]`: `.eyebrow` `tag`, H3 `title`, paragraph `body`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | each column `is-style-brass-edge` (`.card-brass`)                                                                                                                                             | H2 + **H3** per item                                                                                            |
| 4   | `ihpt/story`        | `STORY` (+ `BRANDLINES.philosophy` as pull-quote)     | group(green slug bg, full) constrained inner: eyebrow `eyebrow` + H2 `title` → 3 `core/paragraph` from `paras[]` (first as `.lede` serif) → `core/quote` `STORY.last`                                                                                                                                                                                                                                                                                                                                                                                                                                  | group `green` background; quote uses core/quote serif style                                                                                                                                   | **H2** `title`                                                                                                  |
| 5   | `ihpt/services`     | `SERVICES`                                            | group(bg) → eyebrow + H2 `title` + `.lede` `intro` → `core/columns` (2 rows × 3) per `items[]`: H3 `title`, paragraph `body` (icons rendered as `.eyebrow` label of `icon` name OR omit icon glyph)                                                                                                                                                                                                                                                                                                                                                                                                    | each column `is-style-brass-edge` (`.card-brass`)                                                                                                                                             | H2 + **H3** per service                                                                                         |
| 6   | `ihpt/compare`      | `COMPARE`                                             | group(surface-2) → eyebrow `eyebrow` + H2 `heading` → `core/columns` header row ("Insurance mill" / "The Vault") then per `rows[]` a 3-col line: `label` / `mill` (muted) / `us` (mint/sage)                                                                                                                                                                                                                                                                                                                                                                                                           | "us" column group `is-style-green-featured`; mill text color `muted`                                                                                                                          | **H2** `heading`                                                                                                |
| 7   | `ihpt/pricing`      | `PRICING`                                             | group(bg). Block A: eyebrow `eyebrow`+H2 `title`+ note paragraph → single `evaluation` card. Block B: eyebrow `programsEyebrow`+H3 `programsTitle`+note → `core/columns` 3 per `programs[]` (price, unit, desc, `core/list` `points[]`, button → `evaluation`). Block C: `vault` callout card (eyebrow/name/line/cta → `founders-vault`)                                                                                                                                                                                                                                                               | evaluation card `is-style-brass-top`; featured 3-Month (`featured:true`) `is-style-green-featured`; other programs `is-style-brass-edge`; vault block `is-style-brass-edge`                   | H2 title; **H3** program names                                                                                  |
| 8   | `ihpt/team`         | `TEAM`                                                | group(surface) → eyebrow + H2 `title` → `core/columns` 3 per `members[]`: `core/image` (`juan/freddy/annie.jpg`), H3 `name`, `.eyebrow` `cred`, paragraph `bio`                                                                                                                                                                                                                                                                                                                                                                                                                                        | founder (`founder:true`) column `is-style-green-featured`; others `is-style-brass-edge`                                                                                                       | H2 + **H3** per member                                                                                          |
| 9   | `ihpt/testimonials` | `TESTIMONIALS` (+ `DISCLAIMERS.results`)              | group(green-deep) → eyebrow `eyebrow` + heading line `rating` ⭐ `count` reviews → `core/columns` 2×2 `core/quote` per `items[]` (`quote`, cite `who`) → small muted paragraph `DISCLAIMERS.results`                                                                                                                                                                                                                                                                                                                                                                                                   | quote cards `is-style-brass-edge`; disclaimer color `muted-2`                                                                                                                                 | **H2** = "What clients say" (`eyebrow` promoted) — keep eyebrow as eyebrow, H2 = `5.0 · 72 reviews` rating line |
| 10  | `ihpt/faq`          | `FAQ`                                                 | group(bg) → eyebrow `eyebrow` + H2 `title` → `core/details` (one per `items[]`): summary = `q`, paragraph = `a`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | each `core/details` `is-style-brass-edge`; summary uses `.eyebrow`-adjacent display font                                                                                                      | **H2** `title`; q's are `<summary>` not headings                                                                |
| 11  | `ihpt/facilities`   | `FACILITIES`                                          | group(bg). Hero sub-band: eyebrow `hero.kicker` + H2 `hero.h1` + `.lede` `hero.lede` → thesis paragraph (serif). Then `core/columns` 2×2 per `amenities[]`: `core/image` (facilities/\*.jpg per `photo`), H3 `name`, paragraph `body`, optional link (Curated Walls → `gallery`). Then walkthrough: eyebrow `walkthrough.eyebrow`+H3 `walkthrough.title` + 3-col `steps[]` (numeral `n`, H3 `title`, body). Then CTA band `cta` (title/body/`label`→Calendly)                                                                                                                                          | amenity cards `is-style-brass-edge`; walkthrough steps `is-style-brass-top`; CTA band group `green` bg                                                                                        | H2 `hero.h1`; **H3** per amenity & step                                                                         |
| 12  | `ihpt/gallery`      | `GALLERY`                                             | group(bg). Hero: eyebrow `hero.kicker`+H2 `hero.h1`+`.lede` `hero.lede` → manifesto paragraph (serif). `current` block: eyebrow `current.eyebrow`+`season`+H3 `current.title`+statement. Featured artist (`artists[0]`, Katy Hirschfeld): H3 `name`, `.eyebrow` `medium`, bio paragraph, `core/gallery` of `images[]` (gallery/katie-1..5.jpg, masonry-ish via columns honoring `ratio`). `applyCta` band (title/body/`label`→`freeCall`)                                                                                                                                                              | gallery hero plain; artist block `is-style-brass-edge`; applyCta band `green` bg                                                                                                              | H2 `hero.h1`; **H3** `current.title` + artist `name`                                                            |
| 13  | `ihpt/ebook`        | `EBOOK` (+ `DISCLAIMERS.medical`, `EBOOK.disclaimer`) | group(surface). Hero: eyebrow `eyebrow`+H2 `title`+ subtitle `.lede`+ `tagline` (serif italic accent). 2-col: left `core/image` mock cover (logo-brass or `space/door-logo.jpg`) + `author`; right `price` + `core/list` `bullets[]` + buy button (checkout note muted). TOC block: H3 "What's inside" + `core/list` `toc[]`. Bonus block: eyebrow `bonus.eyebrow`+H3 `bonus.title`+`bonus.lede`+`bonus.body`+`core/list` `bonus.points[]`+`bonus.claim`. Then `valueLine`, `guarantee`, then `EBOOK.disclaimer` (muted-2)                                                                             | hero band `surface`; bonus block `is-style-green-featured`; bullets card `is-style-brass-edge`; price card `is-style-brass-top`                                                               | H2 `title`; **H3** TOC + bonus                                                                                  |
| 14  | `ihpt/vault-offer`  | `VAULT_OFFER` (+ `DISCLAIMERS.results`)               | group(bg). Hero: eyebrow `hero.kicker`+H1 `hero.h1`+`.lede` `hero.lede`+ buttons (`ctaPrimary`→`founders-vault`/Calendly, `ctaSecondary` is-style-outline). authorityBar: 4-col `.eyebrow` chips from `authorityBar[]`. forWho: eyebrow+H2 `forWho.title`+intro → 2-col "Fit" `fit[]` (mint) / "Not fit" `notFit[]` (muted) lists. inside: eyebrow+H3 `inside.title`+4-col `steps[]` (numeral n, H3 title, body). included: eyebrow+H3 `included.title`+`core/list` `items[]`. investment: eyebrow+H3 `investment.title`+body+note+cta. riskReversal: H3 `title`+body. faq: `core/details` per `faq[]` | hero plain; fit list `is-style-green-featured`, notFit `is-style-brass-edge`; inside steps `is-style-brass-top`; investment card `is-style-green-featured`; faq details `is-style-brass-edge` | **H1** `hero.h1`; H2 `forWho.title`; H3 inside/included/investment/riskReversal                                 |
| 15  | `ihpt/cta-band`     | `CLINIC` + `BRANDLINES.closing`                       | group(green, full, padding 70) constrained: `.eyebrow` "Book Your Evaluation" + H2 `BRANDLINES.closing` (serif allowed) + button → `CLINIC.calendly` + phone `CLINIC.phoneHref` link + address line. Reused as page tail + on front-page.                                                                                                                                                                                                                                                                                                                                                              | group `green` background, `is-style-brass-top`                                                                                                                                                | **H2** = `BRANDLINES.closing`                                                                                   |

Pattern header template (every file):

```php
<?php
/**
 * Title: Method
 * Slug: ihpt/method
 * Categories: ihpt
 * Inserter: true
 */
?>
```

404 pattern (`ihpt/404`, used by 404.html): eyebrow "404" + H1 "This page left the Vault." + paragraph + button Home. Counts as supporting markup, not one of the 15.

---

## 4. Header / Footer parts

**`parts/header.php`** — `core/group {align:"full", className:"site-header"}`, `layout:flex space-between`, sticky, bg `bg`, bottom `line` hairline:

- Left: `core/site-logo` OR `core/image` `logo-brass.png` linked to Home.
- Center: `core/navigation` (or manual `core/columns` of `.ulink`) with the 8 `NAV` items in order: Home(`/`), About(`/about`), Services(`/services`), The Space(`/the-space`), The Gallery(`/gallery`), The Shoulder Guide(`/shoulder-guide`), The Founder's Vault(`/founders-vault`), FAQ(`/faq`). Use `.ulink` underline-draw class.
- Right: `core/button` (default accent) "Book Your Evaluation" → `https://calendly.com/inspirehealthpt/60min` (target \_blank).

**`parts/footer.php`** — `core/group {align:"full", className:"site-footer"}`, bg `surface`, top `line` hairline:

- Row 0: marquee brand band — `core/group className:"marquee"` repeating `Inspire Health PT —◆— The Vault —◆— One room. One doctor. One hour.` (`BRANDLINES.oneLine`).
- Col 1: logo-white.png + tagline `BRANDLINES.philosophy` (serif italic).
- Col 2: **identical** 8-item NAV (same links/order as header — top===bottom requirement).
- Col 3: NAP — `CLINIC.name` "The Vault", address `3257 NW 7th Ave Circle, Miami, FL 33127`, phone `(305) 479-7757` → `tel:+13054797757`, email `inspirehealthpt@gmail.com`, rating `5.0 / 72 reviews`.
- Bottom band: the three `DISCLAIMERS` (`results`, `medical`, `network`) in `muted-2`, small font. Copyright line.

---

## 5. Template compositions

- **`front-page.html`**: `header` → patterns in order: `ihpt/hero`, `ihpt/method`, `ihpt/archetypes`, `ihpt/story`, `ihpt/services`, `ihpt/compare`, `ihpt/pricing`, `ihpt/team`, `ihpt/testimonials`, `ihpt/faq`, `ihpt/cta-band` → `footer`. Insert `<!-- wp:pattern {"slug":"ihpt/hero"} /-->` refs (theme template can reference patterns by slug).
- **`page.html`** (constrained, narrow): `header` → `core/post-title` (H1) → `core/post-content {layout:constrained}` → `footer`. Used for any page with no slug-specific template.
- **`page-wide.html`**: `header` → `core/post-content {align:"full"}` (no post-title; the page's pattern carries its own H1/H2 hero) → `ihpt/cta-band` → `footer`. Page content = the matching section pattern inserted as that page's body (e.g. Services page body = `ihpt/services`; About = `ihpt/story`+`ihpt/team`+`ihpt/method`; The-Space = `ihpt/facilities`; Gallery = `ihpt/gallery`; Shoulder-Guide = `ihpt/ebook`; Founders-Vault = `ihpt/vault-offer`; FAQ = `ihpt/faq`). Builders seed page content via the starter-modal pattern (Block Types `core/post-content`, Post Types `page`) or by writing the pattern ref into the page on import.
- **`404.html`**: `header` → `ihpt/404` pattern → `footer`.
- **Thank-you templates** (`page-thank-you-booking.html` / `page-thank-you-purchase.html`): `header` → centered constrained group: H1 `THANKYOU.evaluation.title` / `THANKYOU.ebook.title`, paragraph `body`, `.btn-underline` link `next` → `nextTo` slug → `footer`.

---

## 6. `register_block_style` names → `theme.css` class

Registered in `functions.php` on `init` (use `register_block_style`, target `core/group`, `core/column`, `core/columns`, `core/quote`, `core/details`, `core/separator`; rely on `theme.css` for the actual rules — pass only `name`+`label`, NOT inline_style, since classes live in the enqueued sheet):

| register_block_style name | label           | theme.css class                              | applies to blocks                |
| ------------------------- | --------------- | -------------------------------------------- | -------------------------------- |
| `brass-edge`              | Brass Edge      | `.card-brass` (3px brass left border)        | core/group, core/column          |
| `brass-top`               | Brass Top       | `.card-brass-top` (2px brass top, surface-2) | core/group, core/column          |
| `green-featured`          | Hunter Featured | `.card-green` (hunter green, 2px brass top)  | core/group, core/column          |
| `card`                    | Card            | `.card` (surface, line-soft, radius 2px)     | core/group, core/column          |
| `diamond`                 | Diamond Rule    | `.diamond-rule` (—◆— break)                  | core/separator                   |
| `eyebrow`                 | Brass Eyebrow   | `.eyebrow` (Bebas, .26em, accent)            | core/paragraph                   |
| `lede`                    | Lede            | `.lede` (Cormorant, serif, clamp)            | core/paragraph                   |
| `tagline`                 | Tagline         | `.tagline` (serif italic accent)             | core/paragraph                   |
| `ken-burns`               | Ken Burns       | `.kenburns` (hero zoom)                      | core/cover, core/image           |
| `marquee`                 | Marquee         | `.marquee` (brand band scroll)               | core/group                       |
| `underline-draw`          | Underline Draw  | `.ulink` (link underline)                    | core/navigation-link / paragraph |

`is-style-{name}` is what the markup must carry (e.g. `is-style-brass-edge`). `theme.css` must remap React `--c-*` tokens to `var(--wp--preset--color--*)` at `:root`: `--c-bg:var(--wp--preset--color--bg)`, `--c-surface`, `--c-surface2:var(--wp--preset--color--surface-2)`, `--c-green`, `--c-pine`, `--c-accent`, `--c-accent-soft`, `--c-onaccent`, `--c-ink`, `--c-muted2:var(--wp--preset--color--muted-2)`, `--c-line`, `--c-line-soft`, plus `--font-display/body/serif` → preset font families, `--radius:2px`, `--shadow:0 26px 64px -22px rgba(0,0,0,0.78)`, `--grain:.05`, `--display-tracking:.012em`, `--display-weight:400`, `--uppercase:uppercase`. Add `.grain::after` to `body` (functions.php adds `grain` body class via `body_class` filter). Port `@keyframes kenburns/marquee/reveal`, `prefers-reduced-motion` block, `.btn-primary/.btn-ghost/.btn-underline`, `.vsl-frame/.vsl-play`, `.numeral`, `.hairline` verbatim from `index.css`.

`functions.php` enqueue: `wp_enqueue_style('ihpt-theme', get_theme_file_uri('assets/css/theme.css'), [], wp_get_theme()->get('Version'))` on `wp_enqueue_scripts` **and** `add_editor_style('assets/css/theme.css')` on `after_setup_theme`. Enqueue `assets/js/reveal.js` (defer) front-end only. Register `register_nav_menus` is unnecessary for FSE; nav is block-based.

---

## 7. Evaluation LP composition (`page-evaluation.html`)

Minimal chrome — header logo only (no full nav, optional), no footer marquee. Body = pattern `ihpt/evaluation` (supporting pattern, registered like the 15 but LP-specific). Composition top→bottom:

1. **Eyebrow + H1**: `.eyebrow` `HERO.kicker` → H1 `HERO.h1`.
2. **VSL frame** — `core/group className:"vsl-frame"` wrapping a responsive 16:9 Vimeo embed placeholder:
   ```html
   <div class="vsl-frame">
     <!-- Replace VIMEO_ID — VSL by Miami Starroom (CLINIC.vslNote) -->
     <iframe
       src="https://player.vimeo.com/video/VIMEO_ID?title=0&byline=0&portrait=0"
       loading="lazy"
       allow="autoplay; fullscreen; picture-in-picture"
       style="position:absolute;inset:0;width:100%;height:100%;border:0"
     ></iframe>
   </div>
   ```
   Until the cut lands (`CLINIC.vsl` is `null`), render the `.vsl-frame` with a `.vsl-play` button and caption `CLINIC.vslNote` ("VSL by Miami Starroom — final edit in progress").
3. **Lede**: `.lede` serif `HERO.lede`.
4. **Calendly inline embed** — `core/html`:
   ```html
   <div
     class="calendly-inline-widget"
     data-url="https://calendly.com/inspirehealthpt/60min"
     style="min-width:320px;height:760px"
   ></div>
   <script
     src="https://assets.calendly.com/assets/external/widget.js"
     async
   ></script>
   ```
   (enqueue the Calendly script in functions.php conditionally for this template, or inline as above).
5. **Lead form** (fallback / pre-qualify) — `core/group is-style-brass-edge`, native `<form>` in `core/html` posting to `admin-post.php` (action `ihpt_lead`) OR a CF7/Fluent shortcode placeholder. Fields: Name, Email, Phone, "What's nagging you?" (textarea). Submit button `.btn-primary` "Book Your Evaluation". On success redirect → `/thank-you-booking`.
6. **Trust strip**: `.eyebrow` chips — `5.0 · 72 reviews`, `Out-of-network · superbill provided`, `Direct access · no referral`.
7. **Disclaimers**: `DISCLAIMERS.medical` + `DISCLAIMERS.network` in `muted-2`.

Calendly success and Stripe/ebook purchase route to `THANKYOU.evaluation` (`page-thank-you-booking.html`) and `THANKYOU.ebook` (`page-thank-you-purchase.html`) respectively.

---

## Compliance hard rules (enforce in every pattern)

- Surface `DISCLAIMERS.results` on `ihpt/testimonials`; `DISCLAIMERS.medical` on `ihpt/ebook` + Evaluation LP; `DISCLAIMERS.network` in footer + pricing note.
- Use `PRICING.note` verbatim ("Out-of-network · superbill provided…").
- NEVER introduce the words "cure", "guarantee(d)", "eliminate". `VAULT_OFFER.riskReversal` is a service promise, not an outcome guarantee — keep its wording exact.
- All prices verbatim: Evaluation `$279`, 2-Month `$1,800`, 3-Month `$2,550` (featured), 4-Month `$3,280`, Ebook `$27`. Founder's Vault price is intentionally NOT shown — application-gated.

Spec files of record: copy source `C:/Users/info/GITHUB/skynetlabs-inspire-health-pt-demo/src/data.js`; CSS source `C:/Users/info/GITHUB/skynetlabs-inspire-health-pt-demo/src/index.css`; theme root `C:/Users/info/GITHUB/skynetlabs-inspire-health-pt-demo/wp-theme/inspire-health-pt/`; images `C:/Users/info/GITHUB/skynetlabs-inspire-health-pt-demo/wp-theme/inspire-health-pt/assets/img/`.
