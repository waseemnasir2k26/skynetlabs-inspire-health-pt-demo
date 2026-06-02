import Schema from '../components/Schema.jsx'
import { Section, Reveal, Eyebrow, Icon } from '../ui.jsx'
import Photo from '../components/Photo.jsx'
import { Testimonials, Gallery, CTABanner } from '../components/Sections.jsx'
import { PROVIDER, DISCLAIMERS } from '../data.js'

const VALUES = [
  { t: 'One doctor, one hour, one focus — you', b: 'No aides, no double-booking, no rotating staff. The same Doctor of PT every visit.' },
  { t: 'Root cause over quick fix', b: 'We diagnose why it hurts and treat that — so it doesn’t come back.' },
  { t: 'Care without the insurance leash', b: 'Your plan is built around your goals and your life, not a claims department.' },
]

export default function About({ go }) {
  return (
    <main className="pt-24">
      <Schema type="about" />
      <Section className="py-14">
        <Reveal><Eyebrow>Our story</Eyebrow></Reveal>
        <Reveal delay={60}><h1 className="display max-w-3xl text-5xl sm:text-6xl">Built for people who refuse to settle for rushed care.</h1></Reveal>
      </Section>

      <Section className="py-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <Photo id="photo-1612349317150-e413f6a5b16d" alt={PROVIDER.name} className="aspect-[4/5] w-full rounded-theme" w={900} />
          </Reveal>
          <div>
            <Reveal><h2 className="display text-3xl sm:text-4xl">{PROVIDER.name}</h2></Reveal>
            <Reveal delay={60}><p className="mt-2 text-accent">{PROVIDER.cred}</p></Reveal>
            <Reveal delay={120}><p className="mt-6 text-lg text-muted">{PROVIDER.bio}</p></Reveal>
            <Reveal delay={180}>
              <div className="mt-7 grid grid-cols-2 gap-4">
                {[['APTA', 'Member clinic'], ['DPT', 'Doctorate-led care'], ['Direct', 'No referral needed'], ['Cash-pay', 'Out-of-network freedom']].map(([k, v], i) => (
                  <div key={i} className="card p-4"><div className="display text-lg text-accent">{k}</div><div className="text-sm text-muted">{v}</div></div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="card h-full p-7">
                <Icon name="check" className="h-7 w-7 text-accent" />
                <h3 className="display mt-4 text-xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted">{v.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Gallery />
      <Testimonials />
      <Section className="pb-6"><p className="text-xs text-muted">{DISCLAIMERS.medical}</p></Section>
      <CTABanner go={go} />
    </main>
  )
}
