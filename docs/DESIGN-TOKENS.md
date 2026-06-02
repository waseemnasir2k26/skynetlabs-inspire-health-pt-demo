# Design Tokens — Inspire Health PT

Three live, switchable themes driven entirely by CSS variables. The top-right theme switcher swaps a single `data-theme` attribute on `:root` — no rebuild, no page reload.

---

## 1. Variant token sets

### V1 — "Editorial" (warm luxe) · RECOMMENDED LEAD

| Token | Value |
|---|---|
| Display font | **Fraunces** |
| Body font | **Inter** |
| `--bg` | `#F5F0E8` |
| `--surface` | `#FBF8F2` |
| `--ink` | `#241F1B` |
| `--accent` (bronze) | `#B0894F` |
| `--accent2` (sage) | `#5E6E57` |

**Mood:** premium hospitality, warm paper, serif authority. Reads as a boutique clinic / private members' space — not a hospital.

### V2 — "Cinematic" (dark performance)

| Token | Value |
|---|---|
| Display font | **Archivo** |
| Body font | **Inter** |
| `--bg` | `#0B0C0E` |
| `--surface` | `#16181C` |
| `--ink` | `#EDEDEA` |
| `--accent` (coral) | `#FF6A3D` |
| `--accent2` (cyan) | `#3FD0C9` |

**Mood:** elite athletic, sports-performance, high-contrast. Athlete + return-to-sport audiences.

### V3 — "Minimal" (clinical clean)

| Token | Value |
|---|---|
| Display font | **Manrope** |
| Body font | **Inter** |
| `--bg` | `#FFFFFF` |
| `--surface` | `#F4F6F6` |
| `--ink` | `#16263A` |
| `--accent` (mint) | `#2F7D6B` |

**Mood:** clean, trustworthy, fast. Closest to category convention — included as the "safe" reference point.

---

## 2. Premium signatures per variant

Shared motion/texture system, tuned per theme.

| Signature | V1 Editorial | V2 Cinematic | V3 Minimal |
|---|---|---|---|
| Ken Burns hero | ✓ | ✓ | ✓ (subtle) |
| Film grain (theme-tuned) | ✓ warm/soft | ✓ heavy/dark | ✓ near-off |
| Scroll reveals | ✓ | ✓ | ✓ |
| Marquee trust band | ✓ | ✓ | ✓ |
| Magnetic CTAs | ✓ | ✓ | ✓ (reduced) |
| Giant section numerals | ✓ serif | ✓ heavy sans | ✓ light sans |

Grain intensity, motion amplitude, and numeral weight are theme variables so each variant feels native rather than reskinned.

---

## 3. Recommended lead variant + rationale

**Lead with V1 "Editorial."**

- Every competitor defaults to **clinical teal/navy + geometric sans** (see `RESEARCH.md`). Warm serif + bronze/sage is the cleanest visual departure in the set.
- Warm-luxe signals **premium / concierge** before any copy is read — supports the qualify-then-quote pricing posture.
- V2 and V3 ship live so the client can feel the full range and pick; the switcher makes this a 1-click decision in the pitch.

---

## 4. How the switcher works

Single source of truth in `themes.js`; the switcher only flips one attribute.

```js
// themes.js — token map, one object per variant
export const THEMES = {
  editorial: {
    '--bg': '#F5F0E8', '--surface': '#FBF8F2', '--ink': '#241F1B',
    '--accent': '#B0894F', '--accent2': '#5E6E57',
    '--font-display': '"Fraunces", serif', '--font-body': '"Inter", sans-serif',
  },
  cinematic: {
    '--bg': '#0B0C0E', '--surface': '#16181C', '--ink': '#EDEDEA',
    '--accent': '#FF6A3D', '--accent2': '#3FD0C9',
    '--font-display': '"Archivo", sans-serif', '--font-body': '"Inter", sans-serif',
  },
  minimal: {
    '--bg': '#FFFFFF', '--surface': '#F4F6F6', '--ink': '#16263A',
    '--accent': '#2F7D6B', '--accent2': '#2F7D6B',
    '--font-display': '"Manrope", sans-serif', '--font-body': '"Inter", sans-serif',
  },
};

export function applyTheme(name) {
  const root = document.documentElement;            // :root
  Object.entries(THEMES[name]).forEach(([k, v]) => root.style.setProperty(k, v));
  root.setAttribute('data-theme', name);            // for grain/motion tuning
  localStorage.setItem('ihpt-theme', name);         // persist choice
}
```

**Flow:**
1. All components consume tokens via `var(--bg)`, `var(--accent)`, `var(--font-display)`, etc. — never hard-coded hex.
2. The top-right switcher calls `applyTheme('editorial' | 'cinematic' | 'minimal')`.
3. `applyTheme` writes the variant's vars onto `:root` and sets `data-theme` (theme-tuned grain/motion hook in CSS, e.g. `:root[data-theme="cinematic"] .grain { opacity: .12 }`).
4. Choice persists in `localStorage`; the app rehydrates the saved theme on load (default = `editorial`).

**Port note (Phase 2 / WordPress):** the same `THEMES` map and `:root` variable approach carries directly into the WP theme — enqueue `themes.js`, expose the switcher, and the token system is portable as-is.
