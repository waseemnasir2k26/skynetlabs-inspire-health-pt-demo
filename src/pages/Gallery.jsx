import { Section, Reveal, Eyebrow, DiamondRule, Btn, PageHero } from '../ui.jsx'
import { GALLERY, CLINIC } from '../data.js'

// Artwork frame. Renders the real image when `src` is set; otherwise an elegant
// empty frame (so the page still looks intentional mid-rotation, before photos drop).
function Frame({ src, artist, medium, ratio = 'square', className = '' }) {
  const aspect =
    ratio === 'tall' ? 'aspect-[3/4]' : ratio === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative w-full ${aspect} overflow-hidden border border-line transition-transform duration-500 group-hover:scale-[1.012]`}
        style={{ background: 'var(--c-surface2)' }}
      >
        {src ? (
          <img
            src={src}
            alt={`${artist} — ${medium}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="pointer-events-none absolute inset-3 border border-line/60" />
        )}
        {/* caption fades in on hover */}
        <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 px-5 py-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.7))' }}>
          <span className="display block text-base text-ink">{artist}</span>
          <span className="serif block text-sm italic text-muted2">{medium}</span>
        </figcaption>
      </div>
    </figure>
  )
}

export default function Gallery({ go }) {
  const { hero, manifesto, season, current, artists, applyCta } = GALLERY

  const feature = artists.find((a) => a.feature) || artists[0]
  const others = artists.filter((a) => a !== feature)

  // flatten every artist's pieces into one masonry, each tagged with its artist + medium
  const pieces = artists.flatMap((a) =>
    a.images.map((img) => ({
      ...img,
      artist: a.name,
      medium: img.medium || a.medium,
    })),
  )

  return (
    <main className="pt-24">
      {/* 1 — editorial hero */}
      <PageHero kicker={hero.kicker} h1={hero.h1} lede={hero.lede} />

      {/* 2 — manifesto */}
      <Section className="py-24 text-center sm:py-28">
        <Reveal>
          <p className="serif mx-auto max-w-3xl text-2xl leading-relaxed text-muted sm:text-3xl">
            {manifesto}
          </p>
        </Reveal>
        <Reveal><DiamondRule /></Reveal>
      </Section>

      {/* 3 — current exhibition: header + masonry of all pieces */}
      <Section className="py-20 sm:py-24">
        <Reveal><Eyebrow>{current.eyebrow}</Eyebrow></Reveal>
        <div className="grid items-end gap-6 border-b border-line pb-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <h2 className="display text-5xl leading-[0.95] sm:text-7xl">{current.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow mt-5 text-accent">
                Featuring {feature.name} · {season}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <p className="serif text-xl italic leading-relaxed text-muted">{current.statement}</p>
            </Reveal>
          </div>
        </div>

        {/* masonry via CSS columns — real images, varied heights = "alive" */}
        <Reveal delay={120}>
          <div className="mt-12 columns-2 gap-4 md:columns-3">
            {pieces.map((p, i) => (
              <Frame
                key={i}
                src={p.src}
                artist={p.artist}
                medium={p.medium}
                ratio={p.ratio}
                className="mb-8 break-inside-avoid"
              />
            ))}
          </div>
        </Reveal>
      </Section>

      <Reveal><DiamondRule /></Reveal>

      {/* 4 — featured artist spotlight: lead image + bio */}
      <Section className="py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line"
                style={{ background: 'var(--c-surface2)' }}>
                {feature.images[0]?.src ? (
                  <img src={feature.images[0].src} alt={feature.name} loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <div className="pointer-events-none absolute inset-3 border border-line/60" />
                )}
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>Artist Spotlight</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="display text-4xl sm:text-5xl">{feature.name}</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow mt-3 text-accent">{feature.medium}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="serif mt-6 text-xl leading-relaxed text-muted">{feature.bio}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Reveal><DiamondRule /></Reveal>

      {/* 5 — also showing: the other current artists */}
      {others.length > 0 && (
        <Section className="py-20 sm:py-24">
          <Reveal><Eyebrow>Also showing</Eyebrow></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((a, i) => (
              <Reveal key={a.name} delay={i * 70}>
                <div className="card h-full p-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-line"
                    style={{ background: 'var(--c-surface2)' }}>
                    {a.images[0]?.src ? (
                      <img src={a.images[0].src} alt={a.name} loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover" />
                    ) : (
                      <div className="pointer-events-none absolute inset-3 border border-line/60" />
                    )}
                  </div>
                  <h3 className="display mt-5 text-2xl text-ink">{a.name}</h3>
                  <p className="eyebrow mt-1 text-accent">{a.medium}</p>
                  <p className="serif mt-2 text-sm italic leading-relaxed text-muted2">{a.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

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
