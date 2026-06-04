import { useEffect, useState, useCallback } from 'react'
import { BRAND } from './themes.js'
import { CLINIC, NAV, DISCLAIMERS } from './data.js'
import { Logo, Icon } from './ui.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Facilities from './pages/Facilities.jsx'
import Gallery from './pages/Gallery.jsx'
import Faq from './pages/Faq.jsx'
import Evaluation from './pages/Evaluation.jsx'
import Ebook from './pages/Ebook.jsx'
import VaultOffer from './pages/VaultOffer.jsx'
import ThankYou from './pages/ThankYou.jsx'

const PAGES = {
  '': Home,
  about: About,
  services: Services,
  facilities: Facilities,
  gallery: Gallery,
  faq: Faq,
  evaluation: Evaluation,
  ebook: Ebook,
  'vault-offer': VaultOffer,
  'thank-you': ThankYou,
}

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const [page, sub = ''] = raw.split('/')
  return { page: PAGES[page] ? page : '', sub }
}

export default function App() {
  const [{ page, sub }, setRoute] = useState(parseHash)

  // apply the single brand theme once
  useEffect(() => {
    const root = document.documentElement
    Object.entries(BRAND.vars).forEach(([k, v]) => root.style.setProperty(k, v))
    root.dataset.mode = BRAND.mode
  }, [])

  useEffect(() => {
    const onHash = () => { setRoute(parseHash()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = useCallback((p) => { window.location.hash = p ? `#/${p}` : '#/' }, [])

  const Page = PAGES[page] || Home

  return (
    <div className="grain min-h-screen">
      <Header page={page} go={go} />
      <main><Page go={go} sub={sub} /></main>
      <Footer go={go} />
    </div>
  )
}

function Header({ page, go }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-[70] transition-all duration-500"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--c-bg) 88%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--c-line)' : '1px solid transparent',
      }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <button onClick={() => go('')} className="flex items-center" aria-label="Inspire Health PT — home">
          <Logo variant="brass" className="h-10 w-auto" />
        </button>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(({ p, label }) => (
            <button key={p} onClick={() => go(p)}
              className={`ulink text-sm tracking-wide ${page === p ? 'text-accent' : 'text-ink'}`}>{label}</button>
          ))}
          <button onClick={() => go('evaluation')} className="btn-primary px-5 py-2.5 text-sm">Book Evaluation</button>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          <div className="space-y-1.5"><span className="block h-0.5 w-6 bg-ink" /><span className="block h-0.5 w-6 bg-ink" /><span className="block h-0.5 w-6 bg-ink" /></div>
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-bg px-5 py-4 lg:hidden">
          {NAV.map(({ p, label }) => (
            <button key={p} onClick={() => { go(p); setOpen(false) }} className="block w-full py-2.5 text-left text-ink">{label}</button>
          ))}
          <button onClick={() => { go('evaluation'); setOpen(false) }} className="btn-primary mt-3 w-full px-5 py-3">Book Your Evaluation</button>
        </div>
      )}
    </header>
  )
}

function Footer({ go }) {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="brass" className="mb-5 h-12 w-auto" />
            <p className="serif max-w-sm text-lg" style={{ color: '#cfcabb' }}>
              One room. One doctor. One hour. Private 1-on-1 rehab and performance in Miami — we don’t manage pain, we build you past it.
            </p>
            <button onClick={() => go('evaluation')} className="btn-primary mt-7 px-6 py-3 text-sm">Book Your Evaluation</button>
          </div>
          <div>
            <p className="eyebrow mb-4 text-xs">Explore</p>
            {[...NAV, { p: 'ebook', label: 'The Shoulder Guide' }, { p: 'vault-offer', label: 'The Founder’s Vault' }].map(({ p, label }) => (
              <button key={p} onClick={() => go(p)} className="ulink mb-2.5 block text-sm text-muted">{label}</button>
            ))}
          </div>
          <div>
            <p className="eyebrow mb-4 text-xs">Visit</p>
            <p className="mb-3 flex items-start gap-2 text-sm text-muted">
              <Icon name="map" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{CLINIC.address}
            </p>
            <a href={CLINIC.calendly} target="_blank" rel="noopener" className="ulink mb-2.5 block text-sm text-ink">Book online ↗</a>
            <a href={CLINIC.freeCall} target="_blank" rel="noopener" className="ulink block text-sm text-muted">Free 15-min call ↗</a>
          </div>
        </div>
        <div className="hairline my-10" />
        <div className="space-y-3 text-xs text-muted2">
          <p>{DISCLAIMERS.network}</p>
          <p>{DISCLAIMERS.medical}</p>
          <p className="pt-2">© {year} Inspire Health PT · The Vault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
