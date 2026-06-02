// Three premium variants — differ on AXIS (type class, background value, motion budget),
// not detail. Each is a full CSS-variable set applied to :root by ThemeProvider.
// V1 Warm-Editorial-Luxe · V2 Dark-Cinematic-Performance · V3 Clean-Clinical-Minimal

export const THEMES = {
  v1: {
    id: 'v1',
    label: 'Editorial',
    sub: 'Warm luxe',
    mode: 'light',
    vars: {
      '--font-display': "'Fraunces', Georgia, serif",
      '--font-body': "'Inter', system-ui, sans-serif",
      '--c-bg': '#F5F0E8',
      '--c-surface': '#FBF8F2',
      '--c-ink': '#241F1B',
      '--c-muted': '#6A6157',
      '--c-accent': '#B0894F', // brushed bronze
      '--c-accent2': '#5E6E57', // sage clay
      '--c-line': '#E2D8C7',
      '--c-onaccent': '#FBF8F2',
      '--radius': '4px',
      '--shadow': '0 18px 50px -24px rgba(60,40,20,.35)',
      '--grain': '0.30',
      '--display-weight': '380',
      '--display-tracking': '-0.02em',
      '--display-style': 'normal',
      '--hero-overlay': 'linear-gradient(90deg, rgba(245,240,232,.92) 0%, rgba(245,240,232,.55) 55%, rgba(245,240,232,0) 100%)',
      '--uppercase': 'none',
    },
  },
  v2: {
    id: 'v2',
    label: 'Cinematic',
    sub: 'Dark performance',
    mode: 'dark',
    vars: {
      '--font-display': "'Archivo', system-ui, sans-serif",
      '--font-body': "'Inter', system-ui, sans-serif",
      '--c-bg': '#0B0C0E',
      '--c-surface': '#16181C',
      '--c-ink': '#EDEDEA',
      '--c-muted': '#9AA0A6',
      '--c-accent': '#FF6A3D', // miami sunset coral
      '--c-accent2': '#3FD0C9', // recovery cyan
      '--c-line': '#262A30',
      '--c-onaccent': '#0B0C0E',
      '--radius': '2px',
      '--shadow': '0 24px 60px -20px rgba(0,0,0,.7)',
      '--grain': '0.06',
      '--display-weight': '800',
      '--display-tracking': '-0.03em',
      '--display-style': 'normal',
      '--hero-overlay': 'linear-gradient(90deg, rgba(11,12,14,.94) 0%, rgba(11,12,14,.6) 50%, rgba(11,12,14,.2) 100%)',
      '--uppercase': 'uppercase',
    },
  },
  v3: {
    id: 'v3',
    label: 'Minimal',
    sub: 'Clinical clean',
    mode: 'light',
    vars: {
      '--font-display': "'Manrope', system-ui, sans-serif",
      '--font-body': "'Inter', system-ui, sans-serif",
      '--c-bg': '#FFFFFF',
      '--c-surface': '#F4F6F6',
      '--c-ink': '#16263A',
      '--c-muted': '#5C6B7A',
      '--c-accent': '#2F7D6B', // medical mint-green
      '--c-accent2': '#16263A',
      '--c-line': '#E4E9EC',
      '--c-onaccent': '#FFFFFF',
      '--radius': '14px',
      '--shadow': '0 16px 44px -24px rgba(22,38,58,.28)',
      '--grain': '0',
      '--display-weight': '700',
      '--display-tracking': '-0.035em',
      '--display-style': 'normal',
      '--hero-overlay': 'linear-gradient(90deg, rgba(255,255,255,.94) 0%, rgba(255,255,255,.7) 50%, rgba(255,255,255,.15) 100%)',
      '--uppercase': 'none',
    },
  },
}

export const ORDER = ['v1', 'v2', 'v3']
