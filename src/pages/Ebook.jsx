import { useState } from 'react'
import Schema from '../components/Schema.jsx'
import { Section, Reveal, Eyebrow, Icon, Stars } from '../ui.jsx'
import { EBOOK, DISCLAIMERS, CLINIC } from '../data.js'

function EbookCover() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-xs rounded-theme p-7 text-left" style={{ background: 'var(--c-ink)', color: 'var(--c-bg)', boxShadow: 'var(--shadow)' }}>
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: 'var(--c-accent)' }}>Inspire Health PT</div>
      <div className="mt-6 display text-3xl leading-tight">{EBOOK.title}</div>
      <div className="absolute bottom-7 left-7 right-7">
        <div className="hairline mb-3" style={{ background: 'color-mix(in srgb, var(--c-bg) 30%, transparent)' }} />
        <div className="text-xs opacity-70">A Miami movement & recovery guide</div>
      </div>
    </div>
  )
}

// Stripe-style checkout mock — demonstrates the WooCommerce + Stripe paywall flow.
// Real Stripe Checkout / WooCommerce product swaps in at handoff.
function StripeCheckout({ onPaid }) {
  const [email, setEmail] = useState('')
  const [card, setCard] = useState('')
  const [busy, setBusy] = useState(false)
  return (
    <form onSubmit={(e) => { e.preventDefault(); setBusy(true); setTimeout(() => onPaid?.(), 900) }} className="card p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <h3 className="display text-xl">Get the Playbook</h3>
        <span className="flex items-center gap-1.5 text-xs text-muted"><Icon name="lock" className="h-4 w-4" /> Secure · Stripe</span>
      </div>
      <div className="mt-4 flex items-baseline justify-between border-y border-line py-3">
        <span className="text-sm text-muted">{EBOOK.title}</span>
        <span className="display text-2xl text-accent">{EBOOK.price}</span>
      </div>
      <div className="mt-4 space-y-3">
        <input required type="email" placeholder="Email for delivery" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent" />
        <div className="flex items-center rounded-theme border border-line bg-bg px-4 focus-within:border-accent">
          <input required inputMode="numeric" placeholder="Card number" value={card}
            onChange={(e) => setCard(e.target.value.replace(/[^\d ]/g, '').slice(0, 19))}
            className="w-full bg-transparent py-3 text-ink outline-none" />
          <div className="flex gap-1 text-muted"><span className="text-xs font-bold">VISA</span></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input required placeholder="MM / YY" className="rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent" />
          <input required placeholder="CVC" className="rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent" />
        </div>
      </div>
      <button type="submit" disabled={busy} className="btn-primary mt-5 w-full px-6 py-3.5 font-semibold disabled:opacity-60">
        {busy ? 'Processing…' : `Pay ${EBOOK.price} · Instant download`}
      </button>
      <p className="mt-3 text-center text-xs text-muted">Demo checkout · no card is charged</p>
    </form>
  )
}

export default function Ebook({ go }) {
  return (
    <main className="pt-24">
      <Schema type="ebook" />
      <Section className="py-12">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>Digital playbook · ${'19'} </Eyebrow></Reveal>
            <Reveal delay={60}><h1 className="display text-5xl leading-[1.03] sm:text-6xl">{EBOOK.title}</h1></Reveal>
            <Reveal delay={120}><p className="mt-5 max-w-xl text-lg text-muted">{EBOOK.subtitle}</p></Reveal>
            <Reveal delay={160}>
              <ul className="mt-7 space-y-3">
                {EBOOK.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 text-accent" /> <span className="text-ink">{b}</span></li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex items-center gap-4">
                <Stars />
                <span className="text-sm text-muted">“The mobility routine alone was worth ten times the price.” — Devin K., Wynwood</span>
              </div>
            </Reveal>
            <Reveal delay={260}><div className="mt-10 max-w-xs lg:hidden"><EbookCover /></div></Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal className="mb-6 hidden lg:block"><EbookCover /></Reveal>
              <Reveal delay={80}><StripeCheckout onPaid={() => go('thank-you')} /></Reveal>
            </div>
          </div>
        </div>
        <p className="mt-10 max-w-2xl text-xs text-muted">{EBOOK.disclaimer}</p>
        <p className="mt-2 max-w-2xl text-xs text-muted">{DISCLAIMERS.medical}</p>
      </Section>
    </main>
  )
}
