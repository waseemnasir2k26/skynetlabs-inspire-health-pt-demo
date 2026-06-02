// Inspire Health PT — single locked brand theme.
// Cinematic dark · real brand palette from InspireHealthPT_Brand_Reference.pdf
// + the client's own "The Vault" HTML prototype. Hunter green + brass/gold on
// near-black; Bebas Neue display, Cormorant Garamond editorial serif, Inter UI.
//
// The 3-variant demo switcher is retired — the client selected this direction.
// One theme is applied to :root by App.jsx on mount.

export const BRAND = {
  id: 'vault',
  label: 'The Vault',
  mode: 'dark',
  vars: {
    '--font-display': "'Bebas Neue', Impact, sans-serif",
    '--font-body': "'Inter', system-ui, sans-serif",
    '--font-serif': "'Cormorant Garamond', Georgia, serif",

    // surfaces — near-black with a green undertone
    '--c-bg': '#0C0F0D',
    '--c-surface': '#141915', // standard card
    '--c-surface2': '#1A1F1A', // raised card
    '--c-green': '#0F3024', // hunter green — premium/featured cards
    '--c-green-deep': '#0A2019',
    '--c-pine': '#2D6B52',
    '--c-sage': '#4A8B6F',
    '--c-mint': '#C9D9CF',

    // ink — warm cream on dark
    '--c-ink': '#F2ECDD',
    '--c-muted': '#9DA39A',
    '--c-muted2': '#6E726B',

    // accent — brass / gold (exact brand)
    '--c-accent': '#B8893A',
    '--c-accent-soft': '#CB9B3C',
    '--c-accent2': '#2D6B52', // pine green secondary
    '--c-onaccent': '#120F08', // near-black text on gold

    '--c-line': 'rgba(184,137,58,0.24)', // brass hairline
    '--c-line-soft': 'rgba(242,236,221,0.08)',

    '--radius': '2px',
    '--shadow': '0 26px 64px -22px rgba(0,0,0,0.78)',
    '--grain': '0.05',

    // Bebas is a single-weight all-caps face — slight positive tracking reads best
    '--display-weight': '400',
    '--display-tracking': '0.012em',
    '--display-style': 'normal',
    '--uppercase': 'none',

    '--hero-overlay': 'linear-gradient(180deg, rgba(12,15,13,0.55) 0%, rgba(12,15,13,0.82) 60%, rgba(12,15,13,0.96) 100%)',
  },
}

// kept for any legacy imports; single-theme now
export const THEMES = { vault: BRAND }
export const ORDER = ['vault']
