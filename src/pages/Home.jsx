import {
  HERO,
  METHOD,
  ARCHETYPES,
  STORY,
  COMPARE,
  TESTIMONIALS,
  BRANDLINES,
  CLINIC,
  DISCLAIMERS,
} from '../data.js'
import {
  Reveal,
  Section,
  Eyebrow,
  DiamondRule,
  Btn,
  VSL,
  CTABand,
  Icon,
  Stars,
} from '../ui.jsx'

export default function Home({ go, sub }) {
  return (
    <>
      {/* ───────────────────────────── 1 · HERO ───────────────────────────── */}
      <header
        className="relative overflow-hidden border-b border-line"
        style={{
          background:
            'radial-gradient(ellipse at 50% -10%, rgba(15,48,36,0.65), transparent 60%), radial-gradient(ellipse at 85% 110%, rgba(15,48,36,0.35), transparent 55%), linear-gradient(180deg,#10140E,var(--c-bg))',
        }}
      >
        {/* faint vault-numeral watermark */}
        <span className="numeral pointer-events-none absolute -right-4 top-24 select-none text-[200px] leading-none opacity-[0.06] sm:text-[340px]">
          1
        </span>
        <Section className="flex min-h-[88vh] flex-col justify-center py-28 sm:py-36">
          <Reveal>
            <Eyebrow>{HERO.kicker}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display max-w-[16ch] text-6xl leading-[0.94] text-ink sm:text-7xl lg:text-8xl">
              {HERO.h1}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-8 max-w-2xl">{HERO.lede}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Btn to="evaluation" go={go} size="lg">
                {HERO.ctaPrimary}
              </Btn>
              <Btn href={CLINIC.freeCall} variant="underline">
                {HERO.ctaSecondary}
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-7 text-sm text-muted">
              <Stars />
              <span className="tracking-wide">
                <span className="text-accent">{TESTIMONIALS.rating}</span>
                {' · '}
                {TESTIMONIALS.count} Google reviews
              </span>
              <span className="hidden text-line sm:inline">/</span>
              <span className="serif hidden italic text-muted2 sm:inline">
                {BRANDLINES.oneLine}
              </span>
            </div>
          </Reveal>
        </Section>
      </header>

      {/* ───────────────────────────── 2 · VSL ────────────────────────────── */}
      <Section className="py-24 text-center sm:py-28">
        <Reveal>
          <Eyebrow className="mx-auto">Watch this first</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mx-auto max-w-[20ch] text-4xl text-ink sm:text-5xl">
            What working with us actually looks like
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="mx-auto mt-12 max-w-2xl">
            <VSL note={CLINIC.vslNote} />
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10">
            <Btn to="evaluation" go={go} size="lg">
              {HERO.ctaPrimary}
            </Btn>
          </div>
        </Reveal>
      </Section>

      <DiamondRule />

      {/* ──────────────────────────── 3 · METHOD ──────────────────────────── */}
      <Section className="py-20 sm:py-24" numeral="II">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{METHOD.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-5xl text-ink sm:text-6xl">{METHOD.title}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-6">{METHOD.intro}</p>
          </Reveal>
        </div>

        <DiamondRule />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {METHOD.phases.map((ph, i) => (
            <Reveal key={ph.n} delay={i * 90}>
              <div
                className={`group flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                  ph.peak ? 'card-green' : 'card-brass-top'
                }`}
              >
                <span
                  className="numeral text-sm font-semibold tracking-[0.3em]"
                  style={{ color: ph.peak ? 'var(--c-accent-soft)' : 'var(--c-accent)' }}
                >
                  {ph.n}
                </span>
                <h3
                  className="display mt-4 text-3xl"
                  style={{ color: ph.peak ? '#fff' : 'var(--c-ink)' }}
                >
                  {ph.title}
                </h3>
                <p
                  className="tagline mt-2 text-lg italic"
                  style={{ color: ph.peak ? '#cfe0d7' : 'var(--c-accent)' }}
                >
                  {ph.tag}
                </p>
                <div
                  className="my-5 h-px w-12"
                  style={{ background: ph.peak ? 'rgba(214,178,108,0.5)' : 'var(--c-accent)' }}
                />
                <p
                  className="serif text-base leading-relaxed"
                  style={{ color: ph.peak ? '#dce8e2' : 'var(--c-muted)' }}
                >
                  {ph.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <DiamondRule />

      {/* ─────────────────────────── 4 · ARCHETYPES ───────────────────────── */}
      <Section className="py-20 text-center sm:py-24">
        <Reveal>
          <Eyebrow className="mx-auto">{ARCHETYPES.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mx-auto max-w-[18ch] text-5xl text-ink sm:text-6xl">
            {ARCHETYPES.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ARCHETYPES.items.map((it, i) => (
            <Reveal key={it.tag} delay={i * 80}>
              <div className="flex h-full flex-col bg-surface p-8 text-left transition-colors duration-300 hover:bg-surface2">
                <span className="eyebrow">{it.tag}</span>
                <h3 className="display mt-4 text-2xl text-ink">{it.title}</h3>
                <p className="serif mt-3 text-base leading-relaxed text-muted">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <DiamondRule />

      {/* ──────────────────────────── 5 · COMPARE ─────────────────────────── */}
      <Section className="py-20 sm:py-24">
        <Reveal>
          <h2 className="display mx-auto max-w-[16ch] text-center text-5xl text-ink sm:text-6xl">
            {COMPARE.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden border border-line">
          {/* header row */}
          <div className="grid grid-cols-2 border-b border-line bg-surface text-sm sm:grid-cols-[1.2fr_1fr_1fr]">
            <div className="hidden p-5 sm:block" />
            <div className="p-5 text-center">
              <span className="eyebrow text-muted2">The insurance mill</span>
            </div>
            <div
              className="p-5 text-center"
              style={{ background: 'rgba(15,48,36,0.4)' }}
            >
              <span className="eyebrow" style={{ color: 'var(--c-accent)' }}>
                The Vault
              </span>
            </div>
          </div>

          {COMPARE.rows.map((row, i) => (
            <Reveal key={row.label} delay={i * 60}>
              <div
                className={`grid grid-cols-2 items-stretch sm:grid-cols-[1.2fr_1fr_1fr] ${
                  i % 2 ? 'bg-bg' : 'bg-surface'
                }`}
              >
                <div className="col-span-2 px-5 pt-5 sm:col-span-1 sm:flex sm:items-center sm:py-5">
                  <span className="display text-lg text-ink">{row.label}</span>
                </div>
                <div className="flex items-center px-5 py-5">
                  <span className="serif text-base italic text-muted2 line-through decoration-line decoration-1">
                    {row.mill}
                  </span>
                </div>
                <div
                  className="flex items-center px-5 py-5"
                  style={{ background: 'rgba(15,48,36,0.28)' }}
                >
                  <Icon
                    name="check"
                    className="mr-3 h-4 w-4 shrink-0"
                    style={{ color: 'var(--c-accent)' }}
                  />
                  <span className="text-base font-medium text-ink">{row.us}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <DiamondRule />

      {/* ───────────────────────── 6 · TESTIMONIALS ───────────────────────── */}
      <Section className="py-20 sm:py-24">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="mx-auto">{TESTIMONIALS.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex items-center justify-center gap-3 text-sm text-muted">
              <Stars className="h-5 w-5" />
              <span>
                <span className="text-accent">{TESTIMONIALS.rating}</span>
                {' · '}
                {TESTIMONIALS.count} Google reviews
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <blockquote className="card-brass flex h-full flex-col p-8">
                <Icon
                  name="quote"
                  className="h-6 w-6"
                  style={{ color: 'var(--c-accent)' }}
                />
                <p className="serif mt-4 flex-1 text-lg italic leading-relaxed text-ink">
                  “{t.quote}”
                </p>
                <footer className="eyebrow mt-6 text-muted2">{t.who}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted2">
            {DISCLAIMERS.results}
          </p>
        </Reveal>
      </Section>

      {/* ─────────────────────── 7 · STORY (green band) ────────────────────── */}
      <section
        className="relative overflow-hidden border-y border-line"
        style={{
          background:
            'radial-gradient(ellipse at 20% 0%, rgba(0,0,0,0.35), transparent 60%), var(--c-green)',
        }}
      >
        <span className="numeral pointer-events-none absolute -left-2 bottom-0 select-none text-[180px] leading-none opacity-10 sm:text-[280px]">
          VII
        </span>
        <Section className="py-24 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-5" style={{ color: 'var(--c-accent-soft)' }}>
                {STORY.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="display max-w-[16ch] text-5xl sm:text-6xl"
                style={{ color: '#fff' }}
              >
                {STORY.title}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {STORY.paras.map((p, i) => (
                <Reveal key={i} delay={140 + i * 60}>
                  <p
                    className="serif text-lg leading-relaxed"
                    style={{ color: '#dce8e2' }}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={360}>
              <p
                className="tagline mt-10 text-2xl italic leading-snug sm:text-3xl"
                style={{ color: 'var(--c-accent-soft)' }}
              >
                {STORY.last}
              </p>
            </Reveal>
          </div>
        </Section>
      </section>

      {/* ───────────────────── 8 · MANIFESTO BEAT ─────────────────────────── */}
      <Section className="py-24 text-center sm:py-28">
        <Reveal>
          <p
            className="serif mx-auto max-w-[24ch] text-3xl italic leading-snug sm:text-4xl"
            style={{ color: 'var(--c-accent)' }}
          >
            {BRANDLINES.closing}
          </p>
        </Reveal>
      </Section>

      {/* ───────────────────────────── 9 · CTA ────────────────────────────── */}
      <CTABand
        title="Ready to stop managing it and start fixing it?"
        body="A 60-minute evaluation is where it starts."
        go={go}
        secondary={
          <Btn href={CLINIC.freeCall} variant="underline">
            Book a free 15-minute call
          </Btn>
        }
      />
    </>
  )
}
