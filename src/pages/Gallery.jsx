import { Section, Reveal, Eyebrow, DiamondRule, Btn, PageHero } from '../ui.jsx'
import { GALLERY, CLINIC } from '../data.js'

// elegant empty artwork frame — dark mat, brass hairline, Cormorant-italic caption.
// No external/stock images: there is no real artwork yet.
function Frame({ title, medium, ratio = 'square', className = '' }) {
  const aspect =
    ratio === 'tall' ? 'aspect-[3/4]' : ratio === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative w-full ${aspect} overflow-hidden border border-line transition-transform duration-500 group-hover:scale-[1.012]`}
        style={{ background: 'var(--c-surface2)' }}
      >
        {/* inner mat rule for depth */}
        <div className="pointer-events-none absolute inset-3 border border-line/60" />
        {/* caption fades in on hover, over the mat */}
        <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 px-5 py-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.55))' }}>
          <span className="display block text-base text-ink">{title}</span>
          <span className="serif block text-sm italic text-muted2">{medium}</span>
        </figcaption>
      </div>
      {/* persistent caption below the frame (visible without hover) */}
      <div className="mt-3 px-0.5">
        <span className="display block text-sm tracking-wide text-ink">{title}</span>
        <span className="serif block text-sm italic text-muted2">{medium}</span>
      </div>
    </figure>
  )
}

export default function Gallery({ go }) {
  const { hero, manifesto, current, spotlight, past, applyCta } = GALLERY

  return (
    <main className="pt-24">
      {/* 1 — editorial hero (PageHero clears the fixed header on its own padding) */}
      <PageHero kicker={hero.kicker} h1={hero.h1} lede={hero.lede} />

      {/* 2 — manifesto: one centered large serif paragraph, heavy whitespace */}
      <Section className="py-24 text-center sm:py-28">
        <Reveal>
          <p className="serif mx-auto max-w-3xl text-2xl leading-relaxed text-muted sm:text-3xl">
            {manifesto}
          </p>
        </Reveal>
        <Reveal><DiamondRule /></Reveal>
      </Section>

      {/* 3 — current exhibition: masonry, "alive" */}
      <Section className="py-20 sm:py-24">
        <Reveal><Eyebrow>{current.eyebrow}</Eyebrow></Reveal>
        <div className="grid items-end gap-6 border-b border-line pb-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <h2 className="display text-5xl leading-[0.95] sm:text-7xl">{current.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow mt-5 text-accent">
                {current.artist} · {current.dates}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <p className="serif text-xl italic leading-relaxed text-muted">{current.statement}</p>
            </Reveal>
          </div>
        </div>

        {/* masonry via CSS columns — varied heights = "alive" */}
        <Reveal delay={120}>
          <div className="mt-12 columns-2 gap-4 md:columns-3">
            {current.pieces.map((p, i) => (
              <Frame
                key={i}
                title={p.title}
                medium={p.medium}
                ratio={p.ratio}
                className="mb-8 break-inside-avoid"
              />
            ))}
          </div>
        </Reveal>
      </Section>

      <Reveal><DiamondRule /></Reveal>

      {/* 4 — artist spotlight: portrait frame + bio */}
      <Section className="py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line"
                style={{ background: 'var(--c-surface2)' }}>
                <div className="pointer-events-none absolute inset-3 border border-line/60" />
                <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                  <span className="serif text-base italic text-muted2">
                    Artist portrait — image drops here
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>{spotlight.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="display text-4xl sm:text-5xl">{spotlight.name}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="serif mt-6 text-xl leading-relaxed text-muted">{spotlight.bio}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Reveal><DiamondRule /></Reveal>

      {/* 5 — past exhibitions: uniform grid, archive feel */}
      <Section className="py-20 sm:py-24">
        <Reveal><Eyebrow>{past.eyebrow}</Eyebrow></Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {past.items.map((it, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="card h-full p-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-line"
                  style={{ background: 'var(--c-surface2)' }}>
                  <div className="pointer-events-none absolute inset-3 border border-line/60" />
                </div>
                <h3 className="display mt-5 text-2xl text-ink">{it.title}</h3>
                <p className="mt-1 text-sm text-muted2">{it.artist}</p>
                <p className="serif mt-1 text-sm italic text-muted2">{it.season}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — apply CTA: hunter-green band */}
      <Section className="py-24">
        <Reveal>
          <div className="relative overflow-hidden border border-line px-6 py-20 text-center"
            style={{ background: 'radial-gradient(ellipse at 50% 120%, rgba(0,0,0,0.3), transparent 70%), var(--c-green)' }}>
            <h2 className="display mx-auto max-w-[18ch] text-4xl sm:text-6xl" style={{ color: '#fff' }}>
              {applyCta.title}
            </h2>
            <p className="serif mx-auto mt-5 max-w-xl text-xl italic" style={{ color: '#dce8e2' }}>
              {applyCta.body}
            </p>
            <div className="mt-9 flex items-center justify-center">
              <Btn href={CLINIC.freeCall} size="lg">{applyCta.label}</Btn>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  )
}
