import { Section, Reveal, Eyebrow, DiamondRule, Logo, Btn, Icon } from '../ui.jsx'
import { THANKYOU, CLINIC, BRANDLINES } from '../data.js'

// Maps the route sub-segment (thank-you/<sub>) to its content + a sensible CTA label.
const VARIANTS = {
  eval: THANKYOU.evaluation,
  ebook: THANKYOU.ebook,
  vault: THANKYOU.vault,
}

const NEXT_LABEL = {
  ebook: 'Read the Playbook',
  evaluation: 'Book your evaluation',
}

export default function ThankYou({ go, sub }) {
  const data = VARIANTS[sub] || THANKYOU.evaluation
  const nextLabel = NEXT_LABEL[data.nextTo] || 'Continue'

  return (
    <main className="flex min-h-screen items-center pt-28 pb-20">
      <Section className="text-center">
        <Reveal>
          <Logo variant="brass" className="mx-auto h-10" />
        </Reveal>

        <Reveal delay={80}>
          <div className="card-green mx-auto mt-10 max-w-2xl px-6 py-16 sm:px-12">
            <div
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full"
              style={{ background: 'color-mix(in srgb, var(--c-accent) 14%, transparent)' }}
            >
              <Icon name="check" className="h-12 w-12 text-accent" />
            </div>

            <Eyebrow className="mb-5">{CLINIC.sub}</Eyebrow>
            <h1 className="display mx-auto max-w-[18ch] text-4xl sm:text-6xl">{data.title}</h1>
            <p className="lede mx-auto mt-6 max-w-xl">{data.body}</p>

            <DiamondRule />

            <p className="serif mx-auto max-w-md text-lg italic text-muted">{data.next}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Btn to={data.nextTo} go={go}>{nextLabel}</Btn>
              <Btn to="" go={go} variant="ghost">Back to home</Btn>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="serif mx-auto mt-12 max-w-lg text-sm italic text-muted2">{BRANDLINES.closing}</p>
        </Reveal>
      </Section>
    </main>
  )
}
