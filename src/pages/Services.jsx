import { SERVICES, METHOD, PRICING, COMPARE, DISCLAIMERS, CLINIC } from '../data.js'
import { Reveal, Section, Eyebrow, DiamondRule, Btn, PageHero, CTABand, Icon } from '../ui.jsx'

export default function Services({ go, sub }) {
  return (
    <main>
      {/* 1 — HERO */}
      <PageHero kicker={SERVICES.eyebrow} h1={SERVICES.title} lede={SERVICES.intro}>
        <Btn to="evaluation" go={go} size="lg">Book Your Evaluation</Btn>
      </PageHero>

      {/* 2 — SERVICES GRID */}
      <Section className="py-20 sm:py-24" numeral="I">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="card-brass group h-full p-8 transition-transform duration-300 hover:-translate-y-1.5">
                <Icon name={item.icon} className="h-7 w-7 text-accent" />
                <h3 className="display mt-5 text-2xl">{item.title}</h3>
                <p className="serif mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <DiamondRule />

      {/* 3 — THE METHOD (the heart) */}
      <Section className="py-20 sm:py-24" numeral="II">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow className="justify-center">{METHOD.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display text-4xl sm:text-6xl">{METHOD.title}</h2></Reveal>
          <Reveal delay={160}><p className="lede mx-auto mt-6 max-w-2xl">{METHOD.intro}</p></Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {METHOD.phases.map((phase, i) => (
            <Reveal key={phase.n} delay={i * 90}>
              <div
                className={`${phase.peak ? 'card-green' : 'card-brass-top'} relative flex h-full flex-col p-8`}
              >
                <span className="display text-5xl text-accent">{phase.n}</span>
                <h3 className="display mt-4 text-xl">{phase.title}</h3>
                <p className="tagline mt-1 italic text-muted2">{phase.tag}</p>
                <p className="serif mt-4 leading-relaxed text-muted">{phase.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <DiamondRule />

      {/* 4 — COMPARE */}
      <Section className="py-20 sm:py-24" numeral="III">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><h2 className="display text-3xl sm:text-5xl">{COMPARE.heading}</h2></Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Insurance mill */}
            <Reveal>
              <div className="card h-full p-8">
                <p className="eyebrow mb-6 text-muted2">The insurance mill</p>
                <ul className="space-y-5">
                  {COMPARE.rows.map((row) => (
                    <li key={row.label} className="hairline pb-5 last:border-0">
                      <p className="text-sm uppercase tracking-wide text-muted2">{row.label}</p>
                      <p className="serif mt-1 text-lg text-muted">{row.mill}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Us — wins visually */}
            <Reveal delay={120}>
              <div className="card-green h-full p-8">
                <p className="eyebrow mb-6" style={{ color: 'var(--c-accent-soft)' }}>{CLINIC.name}</p>
                <ul className="space-y-5">
                  {COMPARE.rows.map((row) => (
                    <li key={row.label} className="hairline pb-5 last:border-0">
                      <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--c-accent-soft)' }}>{row.label}</p>
                      <p className="serif mt-1 flex items-start gap-2 text-lg text-ink">
                        <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{row.us}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <DiamondRule />

      {/* 5 — PRICING */}
      <Section className="py-20 sm:py-24" numeral="IV">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><Eyebrow className="justify-center">{PRICING.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display text-4xl sm:text-6xl">{PRICING.title}</h2></Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 90} className={tier.featured ? 'lg:-my-3' : ''}>
              <div
                className={`${tier.featured ? 'card-green lg:scale-[1.03]' : 'card-brass-top'} flex h-full flex-col p-8`}
              >
                {tier.featured && (
                  <p className="eyebrow mb-3" style={{ color: 'var(--c-accent-soft)' }}>Most chosen</p>
                )}
                <h3 className="display text-2xl">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="display text-4xl text-accent sm:text-5xl">{tier.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted2">{tier.unit}</p>
                <p className="serif mt-5 leading-relaxed text-muted">{tier.desc}</p>
                <ul className="mt-6 space-y-3">
                  {tier.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-muted">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Btn to={tier.to} go={go} variant={tier.featured ? 'primary' : 'ghost'} className="w-full text-center">
                    {tier.cta}
                  </Btn>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted2">{PRICING.note}</p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-muted2">{DISCLAIMERS.network}</p>
        </Reveal>
      </Section>

      {/* 6 — CTA BAND */}
      <CTABand
        title="Not sure where to start?"
        body="A 60-minute evaluation gives you a real diagnosis and a plan."
        go={go}
        secondary={<Btn href={CLINIC.freeCall} variant="underline">Free 15-minute call</Btn>}
      />
    </main>
  )
}
