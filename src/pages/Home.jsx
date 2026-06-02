import Schema from '../components/Schema.jsx'
import { Hero, TrustStrip, StatsBar, ServicesGrid, AboutBlock, ProcessTimeline, CompareBlock, Pricing, Testimonials, Gallery, FAQBlock, CTABanner } from '../components/Sections.jsx'

export default function Home({ go }) {
  return (
    <main>
      <Schema type="home" />
      <Hero go={go} />
      <TrustStrip />
      <StatsBar />
      <ServicesGrid go={go} />
      <AboutBlock go={go} />
      <ProcessTimeline />
      <CompareBlock />
      <Pricing go={go} />
      <Testimonials />
      <Gallery />
      <FAQBlock />
      <CTABanner go={go} />
    </main>
  )
}
