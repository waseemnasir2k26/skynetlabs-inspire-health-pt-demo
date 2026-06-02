import Schema from '../components/Schema.jsx'
import { Section, Reveal, Eyebrow } from '../ui.jsx'
import { ServicesGrid, ProcessTimeline, CompareBlock, Pricing, FAQBlock, CTABanner } from '../components/Sections.jsx'

export default function Services({ go }) {
  return (
    <main className="pt-24">
      <Schema type="services" />
      <Section className="py-14">
        <Reveal><Eyebrow>Services</Eyebrow></Reveal>
        <Reveal delay={60}><h1 className="display max-w-3xl text-5xl sm:text-6xl">Specialist care for pain, injury, and performance.</h1></Reveal>
        <Reveal delay={120}><p className="mt-6 max-w-xl text-lg text-muted">Every service is delivered one-on-one by a Doctor of Physical Therapy, in a full 60-minute session built around your goals.</p></Reveal>
      </Section>
      <ServicesGrid go={go} />
      <ProcessTimeline />
      <CompareBlock />
      <Pricing go={go} />
      <FAQBlock />
      <CTABanner go={go} />
    </main>
  )
}
