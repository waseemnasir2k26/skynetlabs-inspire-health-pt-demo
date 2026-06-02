import { useState } from 'react'
import { Section, Reveal, Eyebrow, Icon, Stars } from '../ui.jsx'
import Photo from './Photo.jsx'
import { HERO, TRUST, STATS, SERVICES, PROCESS, COMPARE, PRICING, TESTIMONIALS, FAQ, PROVIDER, DISCLAIMERS, CLINIC } from '../data.js'

const PHOTOS = {
  hero: 'photo-1591343395082-e120087004b4',
  about: 'photo-1574680096145-d05b474e2155',
  gallery: [
    'photo-1571019613454-1cb2f99b2d8b',
    'photo-1605296867304-46d5465a13f1',
    'photo-1518611012118-696072aa579a',
    'photo-1540497077202-7c8a3999166f',
    'photo-1599058917212-d750089bc07e',
    'photo-1545205597-3d9d02c29597',
  ],
  cta: 'photo-1559757148-5c350d0d3c56',
}

export function Hero({ go }) {
  return (
    <Section className="relative min-h-[92vh] items-center pt-28 pb-16">
      {/* hero image right, overlay */}
      <div className="absolute inset-0 -z-10">
        <Photo id={PHOTOS.hero} alt="Doctor of physical therapy treating an athlete one-on-one in a Miami clinic" className="h-full w-full" kenburns w={1600} />
        <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
      </div>
      <div className="grid w-full items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal><Eyebrow>{HERO.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h1 className="display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
              {HERO.h1.map((line, i) => (
                <span key={i} className="block">
                  {line.split(HERO.highlight).length > 1 ? (
                    <>{line.split(HERO.highlight)[0]}<span className="relative inline-block text-accent">{HERO.highlight}<span className="absolute -bottom-1 left-0 -z-10 h-3 w-full -skew-x-6" style={{ background: 'color-mix(in srgb, var(--c-accent) 30%, transparent)' }} /></span>{line.split(HERO.highlight)[1]}</>
                  ) : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={120}><p className="mt-7 max-w-xl text-lg text-muted">{HERO.sub}</p></Reveal>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button onClick={() => go('evaluation')} className="btn-primary px-8 py-4 text-base font-semibold">{HERO.ctaPrimary}</button>
              <a href={CLINIC.phoneHref} className="btn-ghost flex items-center gap-2 px-7 py-4 text-base font-semibold">
                <Icon name="phone" className="h-5 w-5" /> {HERO.ctaSecondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex items-center gap-3 text-sm text-muted">
              <Stars /> <span>Rated 5.0 by Miami patients · </span><span className="text-ink">{DISCLAIMERS.network.split(';')[0]}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

export function TrustStrip() {
  return (
    <div className="mt-4 border-y border-line bg-surface py-5">
      <div className="marquee gap-12 text-sm font-medium uppercase tracking-wider text-muted">
        {[...TRUST, ...TRUST].map((t, i) => (
          <span key={i} className="flex items-center gap-12"><span>{t}</span><span className="text-accent">✦</span></span>
        ))}
      </div>
    </div>
  )
}

export function StatsBar() {
  return (
    <Section className="py-16">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-theme border border-line md:grid-cols-4" style={{ background: 'var(--c-line)' }}>
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 60} className="bg-surface p-7 text-center">
            <div className="display text-4xl text-accent sm:text-5xl">{s.n}</div>
            <div className="mt-2 text-sm text-muted">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function ServicesGrid({ go, full = false }) {
  return (
    <Section id="services" className="py-20" numeral="01">
      <div className="mb-12 max-w-2xl">
        <Reveal><Eyebrow>What we treat</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="display text-4xl sm:text-5xl">Care built around your goals — not an insurance company’s.</h2></Reveal>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 50}>
            <div className="card group h-full p-7 transition hover:-translate-y-1" style={{ transition: 'transform .3s' }}>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-theme text-accent" style={{ background: 'color-mix(in srgb, var(--c-accent) 12%, transparent)' }}>
                <Icon name={s.icon} />
              </div>
              <h3 className="display mb-2 text-xl">{s.title}</h3>
              <p className="text-sm text-muted">{s.body}</p>
              <button onClick={() => go('evaluation')} className="ulink mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Book this <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function AboutBlock({ go }) {
  return (
    <Section id="about" className="py-20" numeral="02">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <Photo id={PHOTOS.about} alt="Inspire Health PT clinician" className="aspect-[4/5] w-full rounded-theme" w={900} />
          <div className="card absolute -bottom-6 -right-2 max-w-[230px] p-5 sm:right-6" style={{ boxShadow: 'var(--shadow)' }}>
            <div className="display text-lg">{PROVIDER.name}</div>
            <div className="mt-1 text-xs text-muted">{PROVIDER.cred}</div>
          </div>
        </Reveal>
        <div>
          <Reveal><Eyebrow>Why Inspire</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="display text-4xl sm:text-5xl">
              You deserve more than <span className="italic text-accent">fifteen rushed minutes.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}><p className="mt-6 text-lg text-muted">{PROVIDER.bio}</p></Reveal>
          <Reveal delay={180}>
            <ul className="mt-7 space-y-3">
              {['A Doctor of Physical Therapy treats you — never an aide', 'A full 60 minutes, one-on-one, every visit', 'A plan built around your life and your goals'].map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-ink"><Icon name="check" className="mt-0.5 h-5 w-5 text-accent" /> {p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={240}>
            <button onClick={() => go('about')} className="btn-ghost mt-8 px-7 py-3.5 text-sm font-semibold">Meet the clinic</button>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

export function ProcessTimeline() {
  return (
    <Section className="py-20" numeral="03">
      <div className="mb-12 max-w-2xl">
        <Reveal><Eyebrow>How it works</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="display text-4xl sm:text-5xl">From booked to better, in four steps.</h2></Reveal>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p, i) => (
          <Reveal key={i} delay={i * 70}>
            <div className="relative h-full">
              <div className="display text-5xl text-accent opacity-90">{p.step}</div>
              <div className="hairline my-4" />
              <h3 className="display mb-2 text-xl">{p.title}</h3>
              <p className="text-sm text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function CompareBlock() {
  return (
    <Section className="py-20">
      <div className="card overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-line p-8 md:border-b-0 md:border-r">
            <Eyebrow>The insurance-mill way</Eyebrow>
            <ul className="mt-5 space-y-4">
              {COMPARE.rows.map((r, i) => (
                <li key={i}><div className="text-xs uppercase tracking-wider text-muted">{r.label}</div><div className="mt-1 text-lg text-muted line-through decoration-1">{r.mill}</div></li>
              ))}
            </ul>
          </div>
          <div className="p-8" style={{ background: 'color-mix(in srgb, var(--c-accent) 7%, var(--c-surface))' }}>
            <Eyebrow>The Inspire way</Eyebrow>
            <ul className="mt-5 space-y-4">
              {COMPARE.rows.map((r, i) => (
                <li key={i}><div className="text-xs uppercase tracking-wider text-muted">{r.label}</div><div className="mt-1 flex items-center gap-2 text-lg font-semibold"><Icon name="check" className="h-5 w-5 text-accent" />{r.us}</div></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Pricing({ go }) {
  return (
    <Section id="pricing" className="py-20">
      <div className="mb-12 max-w-2xl">
        <Reveal><Eyebrow>Simple, honest pricing</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="display text-4xl sm:text-5xl">{COMPARE.heading}</h2></Reveal>
        <Reveal delay={120}><p className="mt-4 text-muted">{DISCLAIMERS.network}</p></Reveal>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {PRICING.map((t, i) => (
          <Reveal key={i} delay={i * 70}>
            <div className={`card relative flex h-full flex-col p-8 ${t.featured ? 'ring-2' : ''}`} style={t.featured ? { boxShadow: 'var(--shadow)', '--tw-ring-color': 'var(--c-accent)' } : {}}>
              {t.featured && <span className="btn-primary absolute -top-3 left-8 px-3 py-1 text-xs font-semibold">Most chosen</span>}
              <h3 className="display text-2xl">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="display text-4xl text-accent">{t.price}</span>
                <span className="text-sm text-muted">/ {t.unit}</span>
              </div>
              <p className="mt-3 text-sm text-muted">{t.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {t.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm"><Icon name="check" className="mt-0.5 h-4 w-4 text-accent" /> {p}</li>
                ))}
              </ul>
              <button onClick={() => go('evaluation')} className={`mt-8 w-full px-6 py-3.5 text-sm font-semibold ${t.featured ? 'btn-primary' : 'btn-ghost'}`}>{t.cta}</button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Testimonials() {
  return (
    <Section className="py-20">
      <div className="mb-12 max-w-2xl">
        <Reveal><Eyebrow>Patient stories</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="display text-4xl sm:text-5xl">Miami moves better here.</h2></Reveal>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={(i % 3) * 60}>
            <figure className="card flex h-full flex-col p-7">
              <Icon name="quote" className="h-7 w-7 text-accent" />
              <blockquote className="mt-4 flex-1 text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-5"><div className="font-semibold">{t.name}</div><div className="text-sm text-muted">{t.tag}</div></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">{DISCLAIMERS.results}</p>
    </Section>
  )
}

export function Gallery() {
  return (
    <Section className="py-20">
      <div className="mb-10 max-w-2xl">
        <Reveal><Eyebrow>Inside the clinic</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="display text-4xl sm:text-5xl">A space designed for recovery.</h2></Reveal>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {PHOTOS.gallery.map((id, i) => (
          <Reveal key={i} delay={(i % 3) * 50}>
            <Photo id={id} alt="Inspire Health PT clinic and performance space" className={`w-full rounded-theme ${i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`} w={700} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function FAQBlock() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="faq" className="py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="display text-4xl sm:text-5xl">Good to know.</h2>
          <p className="mt-4 text-muted">Still curious? Call us at <a href={CLINIC.phoneHref} className="ulink text-ink">{CLINIC.phone}</a>.</p>
        </div>
        <div className="lg:col-span-8">
          {FAQ.map((f, i) => (
            <div key={i} className="border-b border-line">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                <span className="display text-lg sm:text-xl">{f.q}</span>
                <span className="text-2xl text-accent transition-transform" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              <div className="grid transition-all duration-300" style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}>
                <div className="overflow-hidden"><p className="pb-5 text-muted">{f.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function CTABanner({ go }) {
  return (
    <Section className="py-10">
      <div className="relative overflow-hidden rounded-theme p-10 sm:p-16" style={{ background: 'var(--c-ink)' }}>
        <div className="absolute inset-0 opacity-30"><Photo id={PHOTOS.cta} alt="" className="h-full w-full" kenburns w={1400} /></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, var(--c-ink) 25%, transparent)' }} />
        <div className="relative max-w-xl" style={{ color: 'var(--c-bg)' }}>
          <h2 className="display text-4xl sm:text-5xl">Your best movement starts with one evaluation.</h2>
          <p className="mt-4 text-lg" style={{ color: 'color-mix(in srgb, var(--c-bg) 75%, var(--c-muted))' }}>Reserve a 60-minute session with a Doctor of Physical Therapy. No referral required.</p>
          <button onClick={() => go('evaluation')} className="btn-primary mt-7 px-8 py-4 text-base font-semibold">Reserve Your Evaluation</button>
        </div>
      </div>
    </Section>
  )
}
