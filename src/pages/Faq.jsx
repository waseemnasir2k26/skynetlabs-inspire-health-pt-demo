import { FAQ, CLINIC, DISCLAIMERS } from '../data.js'
import { Reveal, Section, Btn, PageHero, CTABand, FAQList } from '../ui.jsx'

export default function Faq({ go, sub }) {
  return (
    <main>
      {/* 1 — HERO */}
      <PageHero
        kicker={FAQ.eyebrow}
        h1={FAQ.title}
        lede="Cash-pay, out-of-network, and proud of the difference. Here’s everything people ask before they book."
      />

      {/* 2 — ACCORDION */}
      <Section className="py-20 sm:py-24" numeral="I">
        <FAQList items={FAQ.items} />
      </Section>

      {/* 3 — STILL HAVE QUESTIONS */}
      <Section className="pb-20 text-center sm:pb-24">
        <Reveal>
          <p className="serif mx-auto max-w-xl text-xl italic text-muted">
            Still have questions? Talk to us before you decide — no pressure either way.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Btn href={CLINIC.calendly}>Book Your Evaluation</Btn>
            <Btn href={CLINIC.freeCall} variant="underline">Free 15-minute call</Btn>
          </div>
        </Reveal>

        {/* 4 — DISCLAIMER BEAT */}
        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-2xl text-xs text-muted2">{DISCLAIMERS.network}</p>
        </Reveal>
      </Section>

      {/* 5 — CTA BAND */}
      <CTABand
        title="Still the right fit? There’s one way to know."
        body="Start with a 60-minute evaluation."
        go={go}
      />
    </main>
  )
}
