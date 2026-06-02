import Schema from '../components/Schema.jsx'
import { Section, Reveal, Eyebrow, Icon, Stars } from '../ui.jsx'
import { VSL, BookingMock } from '../components/Funnel.jsx'
import { CLINIC, DISCLAIMERS } from '../data.js'

const WHY = [
  'A full 60-minute evaluation with a Doctor of PT',
  'Hands-on treatment on day one — not just talk',
  'A clear diagnosis and a plan you’ll understand',
  'No referral needed · superbill for reimbursement',
]

export default function Evaluation({ go }) {
  return (
    <main className="pt-24">
      <Schema type="evaluation" />
      <Section className="py-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* left: pitch */}
          <div className="lg:col-span-6">
            <Reveal><Eyebrow>Book your evaluation</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h1 className="display text-5xl leading-[1.03] sm:text-6xl">
                One hour that changes how you <span className="italic text-accent">move.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}><p className="mt-6 max-w-lg text-lg text-muted">Reserve a private, 60-minute evaluation with a Doctor of Physical Therapy in Brickell. Find the root cause, start treatment the same day, and leave with a plan.</p></Reveal>
            <Reveal delay={160}>
              <ul className="mt-7 space-y-3">
                {WHY.map((w, i) => (
                  <li key={i} className="flex items-start gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 text-accent" /> <span className="text-ink">{w}</span></li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8"><VSL /></div>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted"><Stars /> Rated 5.0 by Miami patients · <a href={CLINIC.phoneHref} className="ulink text-ink">or call {CLINIC.phone}</a></div>
            </Reveal>
          </div>

          {/* right: sticky booking */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <BookingMock onDone={() => go('thank-you')} />
              </Reveal>
              <p className="mt-4 text-xs text-muted">{DISCLAIMERS.network}</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
