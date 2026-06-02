import { useState } from 'react'
import { Reveal, Section, Eyebrow, DiamondRule, Btn, Icon } from '../ui.jsx'
import { EBOOK, CLINIC, TEAM, DISCLAIMERS } from '../data.js'

const founder = TEAM.members[0]

// CSS-only 3D book-cover mockup — no external image.
function BookMock() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]" style={{ perspective: '1400px' }}>
      <div
        className="relative aspect-[3/4] w-full overflow-hidden"
        style={{
          transform: 'rotateY(-16deg) rotateX(3deg)',
          transformStyle: 'preserve-3d',
          background: 'linear-gradient(150deg, var(--c-surface2) 0%, var(--c-surface) 60%, var(--c-bg) 100%)',
          border: '1px solid var(--c-accent)',
          borderRadius: '4px 10px 10px 4px',
          boxShadow: '22px 26px 60px rgba(0,0,0,0.55)',
        }}
      >
        {/* spine shadow */}
        <span className="pointer-events-none absolute inset-y-0 left-0 w-7"
          style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.55), transparent)' }} />
        {/* glare */}
        <span className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.07), transparent 42%)' }} />
        <div className="relative flex h-full flex-col p-7 text-left">
          <p className="eyebrow" style={{ color: 'var(--c-accent)' }}>{CLINIC.name}</p>
          <span className="diamond mx-0 my-5 block h-2 w-2 rotate-45" style={{ background: 'var(--c-accent)' }} />
          <h3 className="display mt-1 text-3xl leading-[1.04]" style={{ color: 'var(--c-ink)' }}>{EBOOK.cover}</h3>
          <div className="mt-auto">
            <div className="hairline mb-3" />
            <p className="text-xs" style={{ color: 'var(--c-muted)' }}>{EBOOK.author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Stripe-style checkout — visual mock of the card + wallet flow.
function Checkout({ go }) {
  const [busy, setBusy] = useState(false)
  // TODO(client): wire real Stripe Checkout
  function submit(e) {
    e.preventDefault()
    setBusy(true)
    setTimeout(() => go('thank-you/ebook'), 700)
  }
  return (
    <div className="card-brass mx-auto max-w-md p-7 sm:p-8">
      <div className="text-center">
        <Eyebrow className="mb-2">Checkout</Eyebrow>
        <h3 className="display text-3xl">Get instant access</h3>
      </div>

      <div className="mt-6 flex items-baseline justify-between border-y border-line py-4">
        <span className="text-sm text-muted">{EBOOK.cover}</span>
        <span className="display text-3xl" style={{ color: 'var(--c-accent)' }}>{EBOOK.price}</span>
      </div>

      {/* faux wallet buttons */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button type="button" onClick={submit}
          className="rounded-theme border border-line bg-bg py-3 text-sm font-semibold text-ink transition hover:border-accent"></button>
        <button type="button" onClick={submit}
          className="rounded-theme border border-line bg-bg py-3 text-sm font-semibold text-ink transition hover:border-accent">G&nbsp;Pay</button>
      </div>

      <div className="my-5 flex items-center gap-3">
        <span className="hairline flex-1" />
        <span className="text-xs uppercase tracking-[0.2em] text-muted2">or pay with card</span>
        <span className="hairline flex-1" />
      </div>

      <form onSubmit={submit} className="space-y-3">
        <input required type="email" placeholder="Email for delivery"
          className="w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent" />
        <div className="flex items-center rounded-theme border border-line bg-bg px-4 transition focus-within:border-accent">
          <input required inputMode="numeric" placeholder="Card number"
            className="w-full bg-transparent py-3 text-ink outline-none" />
          <span className="text-xs font-bold text-muted">VISA</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input required placeholder="MM / YY"
            className="rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent" />
          <input required placeholder="CVC"
            className="rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent" />
        </div>

        <button type="submit" disabled={busy}
          className="btn-primary mt-2 w-full px-6 py-4 font-semibold disabled:opacity-60">
          {busy ? 'Processing…' : `Pay ${EBOOK.price}`}
        </button>
      </form>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
        <Icon name="lock" className="h-4 w-4" /> {EBOOK.checkout.note}
      </p>
    </div>
  )
}

export default function Ebook({ go }) {
  return (
    <main>
      {/* 1. HERO — custom, clears header */}
      <header className="relative overflow-hidden border-b border-line"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(15,48,36,0.4), transparent 62%), linear-gradient(180deg,#11150F,var(--c-bg))' }}>
        <Section className="grid items-center gap-14 pb-20 pt-28 lg:grid-cols-2 sm:pt-32">
          <div>
            <Reveal><Eyebrow>{EBOOK.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={70}>
              <h1 className="display text-5xl leading-[1.02] sm:text-7xl">{EBOOK.title}</h1>
            </Reveal>
            <Reveal delay={140}><p className="lede mt-6 max-w-xl">{EBOOK.subtitle}</p></Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex items-end gap-4">
                <span className="display text-6xl leading-none" style={{ color: 'var(--c-accent)' }}>{EBOOK.price}</span>
                <span className="mb-1 text-sm text-muted">instant download</span>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#get" className="btn-primary inline-block px-9 py-4 text-lg">Get the Playbook — {EBOOK.price}</a>
                <span className="eyebrow" style={{ color: 'var(--c-accent)' }}>{EBOOK.author}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}><BookMock /></Reveal>
        </Section>
      </header>

      {/* 2. PREVIEW-THEN-GATE — what you'll learn */}
      <Section className="py-20">
        <Reveal><Eyebrow>What you’ll learn</Eyebrow></Reveal>
        <Reveal delay={60}>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {EBOOK.bullets.map((b, i) => (
              <li key={i} className="card flex items-start gap-3 p-5">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-ink">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 3. TABLE OF CONTENTS — value stack */}
      <Section className="py-8">
        <DiamondRule />
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center"><Eyebrow>The contents</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="display text-center text-4xl sm:text-5xl">Inside the Playbook</h2></Reveal>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {EBOOK.toc.map((t, i) => (
              <Reveal key={i} delay={i * 40}>
                <li className="flex items-baseline gap-5 py-5">
                  <span className="display text-2xl tabular-nums" style={{ color: 'var(--c-accent)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="serif text-xl text-ink">{t}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* 4. AUTHOR authority */}
      <Section className="py-20">
        <Reveal>
          <div className="card mx-auto flex max-w-3xl flex-col items-center gap-7 p-7 text-center sm:flex-row sm:p-9 sm:text-left">
            <img src="/img/juan.jpg" alt={founder.name}
              className="h-28 w-28 shrink-0 rounded-full object-cover"
              style={{ border: '1px solid var(--c-accent)' }} />
            <div>
              <h3 className="display text-2xl">{founder.name}</h3>
              <p className="eyebrow mt-1" style={{ color: 'var(--c-accent)' }}>{founder.cred}</p>
              <p className="serif mt-3 text-lg italic text-muted">
                The movement habits our Miami athletes use to stay out of the clinic — and in the game.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 5. VALUE framing */}
      <Section className="py-12">
        <Reveal>
          <p className="serif mx-auto max-w-3xl text-center text-3xl italic leading-snug sm:text-4xl"
            style={{ color: 'var(--c-accent)' }}>
            {EBOOK.valueLine}
          </p>
        </Reveal>
      </Section>

      {/* 6. CHECKOUT */}
      <Section id="get" className="py-16 scroll-mt-28">
        <Reveal><Checkout go={go} /></Reveal>

        {/* 7. GUARANTEE + disclaimer */}
        <Reveal delay={60}>
          <p className="mx-auto mt-7 max-w-md text-center text-sm text-muted">{EBOOK.guarantee}</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted2">{EBOOK.disclaimer}</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-2 max-w-2xl text-center text-xs text-muted2">{DISCLAIMERS.medical}</p>
        </Reveal>

        {/* 8. Soft cross-sell */}
        <Reveal delay={160}>
          <div className="mt-10 text-center">
            <Btn to="vault-offer" go={go} variant="underline">Want the full program? Meet The Founder’s Vault.</Btn>
          </div>
        </Reveal>
      </Section>
    </main>
  )
}
