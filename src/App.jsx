import { useEffect, useState, useCallback } from 'react'
import { THEMES, ORDER } from './themes.js'
import { CLINIC } from './data.js'
import { Icon } from './ui.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Evaluation from './pages/Evaluation.jsx'
import Ebook from './pages/Ebook.jsx'
import ThankYou from './pages/ThankYou.jsx'

const PAGES = {
  '': Home,
  about: About,
  services: Services,
  evaluation: Evaluation,
  ebook: Ebook,
  'thank-you': ThankYou,
}

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const [vRaw, ...rest] = raw.split('/')
  const variant = ORDER.includes(vRaw) ? vRaw : 'v1'
  const page = ORDER.includes(vRaw) ? rest.join('/') : raw
  return { variant, page: PAGES[page] ? page : (page === '' ? '' : '') }
}

export default function App() {
  const [{ variant, page }, setRoute] = useState(() => {
    if (!window.location.hash) return { variant: 'v1', page: '' }
    return parseHash()
  })

  // apply theme vars to :root
  useEffect(() => {
    const t = THEMES[variant]
    const root = document.documentElement
    Object.entries(t.vars).forEach(([k, v]) => root.style.setProperty(k, v))
    document.documentElement.dataset.mode = t.mode
  }, [variant])

  useEffect(() => {
    const onHash = () => { setRoute(parseHash()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = useCallback((p) => { window.location.hash = `#/${variant}/${p}` }, [variant])
  const setVariant = useCallback((v) => { window.location.hash = `#/${v}/${page}` }, [page])

  const Page = PAGES[page] || Home

  return (
    <div className="grain min-h-screen">
      <Header page={page} go={go} />
      <Switcher variant={variant} setVariant={setVariant} />
      <Page go={go} />
      <Footer go={go} />
      <DemoBadge />
    </div>
  )
}

function Header({ page, go }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const nav = [
    ['', 'Home'], ['services', 'Services'], ['about', 'About'], ['ebook', 'Playbook'],
  ]
  return (
    <header className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${scrolled ? 'backdrop-blur-md' : ''}`}
      style={{ background: scrolled ? 'color-mix(in srgb, var(--c-bg) 86%, transparent)' : 'transparent', borderBottom: scrolled ? '1px solid var(--c-line)' : '1px solid transparent' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button onClick={() => go('')} className="display text-xl tracking-tight" style={{ fontWeight: 'var(--display-weight)' }}>
          Inspire<span className="text-accent">·</span>Health
        </button>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map(([p, label]) => (
            <button key={p} onClick={() => go(p)} className={`ulink text-sm ${page === p ? 'text-accent' : 'text-ink'}`}>{label}</button>
          ))}
          <a href={CLINIC.phoneHref} className="text-sm text-muted">{CLINIC.phone}</a>
          <button onClick={() => go('evaluation')} className="btn-primary px-5 py-2.5 text-sm font-semibold">Reserve</button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          <div className="space-y-1.5"><span className="block h-0.5 w-6 bg-ink" /><span className="block h-0.5 w-6 bg-ink" /><span className="block h-0.5 w-6 bg-ink" /></div>
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-bg px-5 py-4 md:hidden">
          {nav.map(([p, label]) => (
            <button key={p} onClick={() => { go(p); setOpen(false) }} className="block w-full py-2.5 text-left text-sm">{label}</button>
          ))}
          <button onClick={() => { go('evaluation'); setOpen(false) }} className="btn-primary mt-2 w-full px-5 py-3 text-sm font-semibold">Reserve Your Evaluation</button>
        </div>
      )}
    </header>
  )
}

function Switcher({ variant, setVariant }) {
  return (
    <div className="fixed right-4 top-20 z-[75] sm:top-24">
      <div className="card flex flex-col gap-1 p-1.5 shadow-lg" style={{ boxShadow: 'var(--shadow)' }}>
        <span className="px-2 pt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">Demo styles</span>
        {ORDER.map((v) => {
          const t = THEMES[v]
          const active = v === variant
          return (
            <button key={v} onClick={() => setVariant(v)}
              className={`flex items-center gap-2 rounded px-2.5 py-1.5 text-left text-xs transition ${active ? 'btn-primary font-semibold' : 'text-ink hover:bg-bg'}`}
              style={active ? {} : { background: 'transparent' }}>
              <span className="font-semibold">{t.label}</span>
              <span className={`hidden text-[10px] sm:inline ${active ? '' : 'text-muted'}`}>{t.sub}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Footer({ go }) {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="display mb-3 text-2xl">Inspire<span className="text-accent">·</span>Health PT</div>
            <p className="max-w-sm text-sm text-muted">Premium, one-on-one physical therapy and performance care in Miami. A full hour with a doctor — every visit.</p>
            <button onClick={() => go('evaluation')} className="btn-primary mt-6 px-6 py-3 text-sm font-semibold">Reserve Your Evaluation</button>
          </div>
          <div>
            <p className="eyebrow mb-4">Explore</p>
            {[['', 'Home'], ['services', 'Services'], ['about', 'About'], ['ebook', 'The Playbook'], ['evaluation', 'Book Evaluation']].map(([p, l]) => (
              <button key={p} onClick={() => go(p)} className="ulink mb-2 block text-sm text-muted">{l}</button>
            ))}
          </div>
          <div>
            <p className="eyebrow mb-4">Visit</p>
            <p className="mb-2 text-sm text-muted">{CLINIC.address}</p>
            <a href={CLINIC.phoneHref} className="ulink mb-2 block text-sm">{CLINIC.phone}</a>
            <a href={`mailto:${CLINIC.email}`} className="ulink block text-sm">{CLINIC.email}</a>
          </div>
        </div>
        <div className="hairline my-10" />
        <div className="flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Inspire Health PT. Out-of-network, cash-pay provider. Superbill available; coverage not guaranteed.</p>
          <a href="https://skynetjoe.com" target="_blank" rel="noopener" className="ulink">Demo by SkynetLabs ↗</a>
        </div>
      </div>
    </footer>
  )
}

function DemoBadge() {
  return (
    <a href="https://skynetjoe.com" target="_blank" rel="noopener"
      className="fixed bottom-4 right-4 z-[75] hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-lg lg:flex"
      style={{ background: 'var(--c-ink)', color: 'var(--c-bg)', boxShadow: 'var(--shadow)' }}>
      <span className="h-2 w-2 rounded-full" style={{ background: 'var(--c-accent)' }} /> Built by SkynetLabs ↗
    </a>
  )
}
