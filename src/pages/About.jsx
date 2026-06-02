import {
  Reveal,
  Section,
  Eyebrow,
  DiamondRule,
  Btn,
  PageHero,
  CTABand,
  Stars,
} from '../ui.jsx'
import { TEAM, STORY, BRANDLINES, METHOD, CLINIC, TESTIMONIALS } from '../data.js'

export default function About({ go, sub }) {
  const founder = TEAM.members[0]

  return (
    <main>
      {/* 1 — PAGE HERO */}
      <PageHero
        kicker="About"
        h1="The standard behind The Vault."
        lede="One room. One doctor. One hour. Everything here is built around a single belief about how recovery should feel — and who it should be for."
      >
        <p className="tagline mx-auto max-w-2xl text-xl sm:text-2xl">
          “{BRANDLINES.philosophy}”
        </p>
      </PageHero>

      {/* 2 — FOUNDER FEATURE */}
      <Section className="py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden"
              style={{ outline: '1px solid var(--c-accent)', outlineOffset: '10px' }}
            >
              <img
                src={founder.photo}
                alt={founder.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>The Founder</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="display text-4xl sm:text-5xl">{founder.name}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow mt-3" style={{ color: 'var(--c-accent)' }}>
                {founder.cred}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="serif mt-6 text-lg leading-relaxed text-muted">{founder.bio}</p>
            </Reveal>
            <Reveal delay={240}>
              <blockquote
                className="mt-8 pl-5 text-xl italic leading-relaxed text-ink sm:text-2xl"
                style={{ borderLeft: '3px solid var(--c-accent)', fontFamily: 'var(--font-serif)' }}
              >
                “{BRANDLINES.philosophy}”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Section>

      <DiamondRule />

      {/* 3 — STORY BAND (hunter green) */}
      <Section className="py-4">
        <div
          className="relative overflow-hidden border border-line px-6 py-20 sm:px-12 sm:py-24"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.25), transparent 70%), var(--c-green)',
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-4" style={{ color: 'var(--c-accent-soft)' }}>
                {STORY.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="display text-4xl sm:text-6xl" style={{ color: '#fff' }}>
                {STORY.title}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {STORY.paras.map((p, i) => (
                <Reveal key={i} delay={120 + i * 60}>
                  <p className="serif text-lg leading-relaxed" style={{ color: '#dce8e2' }}>
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={360}>
              <p
                className="mt-10 text-2xl italic leading-snug"
                style={{ color: 'var(--c-accent-soft)', fontFamily: 'var(--font-serif)' }}
              >
                {STORY.last}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <DiamondRule />

      {/* 4 — THE TEAM */}
      <Section className="py-20 sm:py-28">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">{TEAM.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display mx-auto max-w-[16ch] text-4xl sm:text-6xl">{TEAM.title}</h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TEAM.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <article className={`h-full p-6 ${m.founder ? 'card-green' : 'card'}`}>
                <div
                  className="relative aspect-[4/5] w-full overflow-hidden"
                  style={{ outline: '1px solid var(--c-accent)', outlineOffset: '6px' }}
                >
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <h3 className="display mt-8 text-2xl">{m.name}</h3>
                <p
                  className="eyebrow mt-2"
                  style={{ color: 'var(--c-accent)' }}
                >
                  {m.cred}
                </p>
                <p className="serif mt-4 text-base leading-relaxed text-muted">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <DiamondRule />

      {/* 5 — THE METHOD RECAP */}
      <Section className="py-20 sm:py-24">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">{METHOD.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display mx-auto max-w-[16ch] text-4xl sm:text-5xl">{METHOD.title}</h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METHOD.phases.map((ph, i) => (
            <Reveal key={ph.n} delay={i * 70}>
              <div className={`h-full p-6 ${ph.peak ? 'card-brass' : 'card'}`}>
                <span className="display text-3xl text-accent">{ph.n}</span>
                <h3 className="display mt-3 text-xl">{ph.title}</h3>
                <p className="serif mt-2 text-sm italic text-muted2">{ph.tag}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Reveal delay={120}>
            <Btn to="services" go={go} variant="ghost">
              See how we work
            </Btn>
          </Reveal>
        </div>
      </Section>

      <DiamondRule />

      {/* 6 — TRUST BEAT */}
      <Section className="py-20 text-center sm:py-24">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <Stars className="h-5 w-5" />
            <span className="text-sm tracking-wide text-muted">
              {TESTIMONIALS.rating} · {TESTIMONIALS.count} Google reviews
            </span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p
            className="mx-auto mt-8 max-w-3xl text-3xl italic leading-snug text-ink sm:text-4xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {BRANDLINES.closing}
          </p>
        </Reveal>
      </Section>

      {/* 7 — CTA BAND */}
      <CTABand
        title="Come see the standard for yourself."
        body="Book a 60-minute evaluation at The Vault."
        go={go}
      />
    </main>
  )
}
