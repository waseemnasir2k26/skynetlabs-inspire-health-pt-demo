import { useState } from 'react'
import {
  Section,
  Reveal,
  Eyebrow,
  DiamondRule,
  Btn,
  VSL,
  CTABand,
  FAQList,
  Icon,
  Stars,
} from '../ui.jsx'
import { VAULT_OFFER, TEAM, TESTIMONIALS, CLINIC, DISCLAIMERS } from '../data.js'

// The Founder's Vault — high-ticket virtual-offer long-form landing page.
// Structure: hero + authority → VSL → qualify → method → value stack →
// pricing tiers → risk reversal → proof → FAQ → apply.
// TODO(client): confirm tiers/prices + wire real application + payment

export default function VaultOffer({ go, sub }) {
  const O = VAULT_OFFER
  const founder = TEAM.members.find((m) => m.founder) || TEAM.members[0]
  const proof = TESTIMONIALS.items.slice(0, 2)

  // apply form (demo only — no real submission/payment wired yet)
  const [form, setForm] = useState({ name: '', email: '', sport: '', injury: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const onApply = (e) => {
    e.preventDefault()
    go('thank-you/vault')
  }

  const scrollToVsl = () => {
    document.getElementById('vault-vsl')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      {/* ─────────────────────────────── 1 · HERO + AUTHORITY ─────────────────────────────── */}
      <header
        className="relative overflow-hidden border-b border-line"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(15,48,36,0.55), transparent 64%), linear-gradient(180deg,#11150F,var(--c-bg))',
        }}
      >
        <Section className="pt-28 pb-20 sm:pt-36 sm:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{O.hero.kicker}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display text-5xl leading-[1.02] sm:text-7xl">{O.hero.h1}</h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="lede mt-7 max-w-xl">{O.hero.lede}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Btn href={CLINIC.calendly} size="lg">
                    {O.hero.ctaPrimary}
                  </Btn>
                  <button onClick={scrollToVsl} className="btn-underline">
                    {O.hero.ctaSecondary}
                  </button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="card-brass relative overflow-hidden">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="h-[26rem] w-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-5"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent, rgba(11,13,9,0.92))',
                    }}
                  >
                    <p className="display text-xl text-ink">{founder.name}</p>
                    <p className="serif text-sm italic text-accent">{founder.cred}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* authority bar */}
          <Reveal delay={300}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-line pt-8">
              {O.authorityBar.map((cred, i) => (
                <span key={i} className="flex items-center gap-x-6">
                  <span className="eyebrow text-accent">{cred}</span>
                  {i < O.authorityBar.length - 1 && (
                    <span className="text-accent/50" aria-hidden>
                      ◆
                    </span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </Section>
      </header>

      {/* ─────────────────────────────── 2 · VSL CENTERPIECE ─────────────────────────────── */}
      <Section id="vault-vsl" className="py-24 text-center">
        <Reveal>
          <Eyebrow className="mx-auto w-fit">Watch</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mx-auto max-w-[20ch] text-4xl sm:text-5xl">
            See how The Founder’s Vault works.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <VSL note={CLINIC.vslNote} className="mx-auto mt-10 max-w-3xl" />
        </Reveal>
        <Reveal delay={200}>
          <p className="serif mx-auto mt-7 max-w-2xl text-lg italic text-muted">
            {founder.name} walks you through the same four-phase method that rebuilds Miami’s
            athletes — and exactly how it’s delivered to you, from anywhere.
          </p>
        </Reveal>
        <DiamondRule />
      </Section>

      {/* ─────────────────────────────── 3 · WHO IT'S FOR ─────────────────────────────── */}
      <Section className="py-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="mx-auto w-fit">{O.forWho.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl sm:text-5xl">{O.forWho.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede mt-5">{O.forWho.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card-brass h-full p-8 sm:p-9">
              <h3 className="display text-2xl text-ink">This is for you if</h3>
              <ul className="mt-6 space-y-4">
                {O.forWho.fit.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="serif text-lg leading-relaxed text-ink">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card h-full p-8 sm:p-9">
              <h3 className="display text-2xl text-muted">This isn’t for you if</h3>
              <ul className="mt-6 space-y-4">
                {O.forWho.notFit.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1 h-px w-4 shrink-0"
                      style={{ background: 'var(--c-muted2)' }}
                      aria-hidden
                    />
                    <span className="serif text-lg leading-relaxed text-muted">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <DiamondRule />
      </Section>

      {/* ─────────────────────────────── 4 · WHAT'S INSIDE ─────────────────────────────── */}
      <Section className="py-12" numeral="◆">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="mx-auto w-fit">{O.inside.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl sm:text-5xl">{O.inside.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="serif mt-5 text-lg italic text-accent">
              The method, rebuilt for remote.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {O.inside.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="card-brass-top h-full p-8">
                <span className="display text-3xl text-accent">{s.n}</span>
                <h3 className="display mt-4 text-2xl text-ink">{s.title}</h3>
                <p className="serif mt-3 text-lg leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <DiamondRule />
      </Section>

      {/* ─────────────────────────────── 5 · VALUE STACK ─────────────────────────────── */}
      <Section className="py-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="mx-auto w-fit">{O.valueStack.eyebrow}</Eyebrow>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="card-brass mx-auto mt-10 max-w-2xl p-8 sm:p-10">
            <ul>
              {O.valueStack.items.map((it, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                >
                  <span className="serif text-lg text-ink">{it.label}</span>
                  <span className="display whitespace-nowrap text-xl text-accent">
                    {it.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="hairline mt-2" />
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
              <span className="eyebrow text-muted">{O.valueStack.totalLabel}</span>
              <span className="display text-5xl text-ink">{O.valueStack.total}</span>
            </div>
          </div>
        </Reveal>
        <DiamondRule />
      </Section>

      {/* ─────────────────────────────── 6 · PRICING TIERS ─────────────────────────────── */}
      <Section className="py-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="mx-auto w-fit">Choose your level</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl sm:text-5xl">One method. Three ways in.</h2>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {O.tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <div
                className={`relative flex h-full flex-col p-8 sm:p-9 ${
                  t.featured ? 'card-green lg:-my-3 lg:scale-[1.03]' : 'card-brass-top'
                }`}
              >
                {t.featured && (
                  <span
                    className="eyebrow absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1"
                    style={{ background: 'var(--c-accent)', color: 'var(--c-onaccent)' }}
                  >
                    Most chosen
                  </span>
                )}
                <h3
                  className="display text-2xl"
                  style={{ color: t.featured ? '#fff' : 'var(--c-ink)' }}
                >
                  {t.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className="display text-4xl"
                    style={{ color: t.featured ? '#fff' : 'var(--c-accent)' }}
                  >
                    {t.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: t.featured ? '#dce8e2' : 'var(--c-muted)' }}
                  >
                    {t.unit}
                  </span>
                </div>
                <p
                  className="serif mt-4 text-lg leading-relaxed"
                  style={{ color: t.featured ? '#dce8e2' : 'var(--c-muted)' }}
                >
                  {t.desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {t.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Icon
                        name="check"
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: t.featured ? 'var(--c-accent-soft)' : 'var(--c-accent)' }}
                      />
                      <span style={{ color: t.featured ? '#eef4f0' : 'var(--c-ink)' }}>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Btn
                    href={CLINIC.calendly}
                    go={go}
                    variant={t.featured ? 'primary' : 'ghost'}
                    className="w-full text-center"
                  >
                    {t.cta}
                  </Btn>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-muted">{DISCLAIMERS.network}</p>
        </Reveal>
        <DiamondRule />
      </Section>

      {/* ─────────────────────────────── 7 · RISK REVERSAL ─────────────────────────────── */}
      <Section className="py-12">
        <Reveal>
          <div
            className="relative mx-auto max-w-3xl overflow-hidden border border-line p-10 text-center sm:p-14"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.28), transparent 70%), var(--c-green)',
            }}
          >
            <Icon name="shield" className="mx-auto h-10 w-10" style={{ color: 'var(--c-accent)' }} />
            <h2 className="display mt-5 text-3xl sm:text-4xl" style={{ color: '#fff' }}>
              {O.riskReversal.title}
            </h2>
            <p className="serif mx-auto mt-5 max-w-xl text-lg leading-relaxed" style={{ color: '#dce8e2' }}>
              {O.riskReversal.body}
            </p>
          </div>
        </Reveal>
        <DiamondRule />
      </Section>

      {/* ─────────────────────────────── 8 · PROOF ─────────────────────────────── */}
      <Section className="py-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="mx-auto w-fit">{TESTIMONIALS.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <div className="mt-2 flex items-center justify-center gap-3">
              <Stars />
              <span className="text-sm text-muted">
                {TESTIMONIALS.rating} · {TESTIMONIALS.count} reviews
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {proof.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="card-brass h-full p-8 sm:p-9">
                <Icon name="quote" className="h-7 w-7 text-accent" />
                <blockquote className="serif mt-5 text-xl leading-relaxed text-ink">
                  {p.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm uppercase tracking-[0.18em] text-muted">
                  {p.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-muted2">{DISCLAIMERS.results}</p>
        </Reveal>
        <DiamondRule />
      </Section>

      {/* ─────────────────────────────── 9 · FAQ ─────────────────────────────── */}
      <Section className="py-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="mx-auto w-fit">Questions</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl sm:text-5xl">Before you apply.</h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <FAQList items={O.faq} className="mt-12" />
        </Reveal>
        <DiamondRule />
      </Section>

      {/* ─────────────────────────────── 10 · APPLY ─────────────────────────────── */}
      <Section id="apply" className="py-12">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>The final step</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-4xl sm:text-5xl">Apply for The Founder’s Vault</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lede mt-5 max-w-md">
                Every application is reviewed by {founder.name} personally. Tell us a little about
                you, and we’ll be in touch about next steps.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Btn href={CLINIC.calendly} size="lg">
                  {O.hero.ctaPrimary}
                </Btn>
                <button onClick={scrollToVsl} className="btn-underline">
                  {O.hero.ctaSecondary}
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {/* TODO(client): confirm tiers/prices + wire real application + payment */}
              <form onSubmit={onApply} className="card-brass p-8 sm:p-9">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow text-muted">Name</span>
                    <input
                      required
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-muted">Email</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="you@email.com"
                      className="mt-2 w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-muted">Sport / training</span>
                    <input
                      required
                      value={form.sport}
                      onChange={set('sport')}
                      placeholder="e.g. Hyrox, running, lifting"
                      className="mt-2 w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-muted">Main injury</span>
                    <input
                      required
                      value={form.injury}
                      onChange={set('injury')}
                      placeholder="What’s holding you back?"
                      className="mt-2 w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent"
                    />
                  </label>
                </div>
                <button type="submit" className="btn-primary mt-6 w-full px-6 py-3.5 font-semibold">
                  {O.hero.ctaPrimary}
                </button>
                <p className="mt-3 text-center text-xs text-muted">
                  Demo application · reviewed before any program begins
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* repeated CTA — evolving copy */}
      <CTABand
        eyebrow="Train with the founder"
        title="Your recovery deserves the same standard as your training."
        body="Apply now and start the four-phase method, built around you — from anywhere."
        label={O.hero.ctaPrimary}
        to="evaluation"
        go={go}
        secondary={
          <Btn href={CLINIC.freeCall} variant="ghost" size="lg">
            {O.hero.ctaSecondary}
          </Btn>
        }
      />
    </main>
  )
}
