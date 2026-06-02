import { Section, Reveal, Icon } from '../ui.jsx'
import { CLINIC } from '../data.js'

export default function ThankYou({ go }) {
  return (
    <main className="flex min-h-[80vh] items-center pt-24">
      <Section className="py-16 text-center">
        <Reveal>
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--c-accent) 14%, transparent)', color: 'var(--c-accent)' }}>
            <Icon name="check" className="h-10 w-10" />
          </div>
        </Reveal>
        <Reveal delay={60}><h1 className="display mx-auto max-w-2xl text-5xl sm:text-6xl">You’re all set.</h1></Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
            Check your inbox — a confirmation and everything you need is on its way. If anything’s urgent, call us at <a href={CLINIC.phoneHref} className="ulink text-ink">{CLINIC.phone}</a>.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <button onClick={() => go('')} className="btn-primary px-7 py-3.5 font-semibold">Back to home</button>
            <button onClick={() => go('services')} className="btn-ghost px-7 py-3.5 font-semibold">Explore services</button>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 text-left">
            {[['Add to calendar', 'A calendar invite is in your email'], ['Find us', CLINIC.address], ['Questions?', CLINIC.email]].map(([t, b], i) => (
              <div key={i} className="card p-5"><div className="display text-sm text-accent">{t}</div><div className="mt-1 text-xs text-muted">{b}</div></div>
            ))}
          </div>
        </Reveal>
      </Section>
    </main>
  )
}
