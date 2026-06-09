import {
  Section,
  Reveal,
  DiamondRule,
  PageHero,
  CTABand,
  Btn,
} from "../ui.jsx";
import { FACILITIES } from "../data.js";

// Elegant placeholder frame — never an external/stock URL. A dark panel with a
// brass hairline and a Cormorant-italic caption noting where the real client
// image will drop in.
function PlaceholderFrame({ caption, ratio = "aspect-[4/5]", className = "" }) {
  return (
    <div
      className={`flex items-center justify-center bg-surface2 border border-line ${ratio} ${className}`}
    >
      <p className="serif px-6 text-center text-sm italic text-muted2">
        {caption}
      </p>
    </div>
  );
}

export default function Facilities({ go }) {
  const { hero, thesis, amenities, walkthrough, cta } = FACILITIES;

  return (
    <main>
      {/* 1 — Cinematic hero (clears fixed header internally via PageHero padding) */}
      <PageHero kicker={hero.kicker} h1={hero.h1} lede={hero.lede} />

      {/* 2 — Thesis: a single large serif statement in a sea of whitespace */}
      <Section className="py-24 text-center sm:py-28">
        <Reveal>
          <p className="serif mx-auto max-w-3xl text-2xl leading-relaxed text-ink sm:text-3xl">
            {thesis}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <DiamondRule />
        </Reveal>
      </Section>

      {/* 3 — Amenities: alternating full-width editorial rows */}
      <Section className="pb-8">
        <div className="space-y-28 sm:space-y-36">
          {amenities.map((a, i) => {
            const flip = i % 2 === 1;
            const media = a.photo ? (
              <div className="overflow-hidden border border-line bg-surface2">
                <img
                  src={a.photo}
                  alt={a.name}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <PlaceholderFrame
                caption={`Photography of ${a.name} — client image drops here`}
              />
            );

            return (
              <Reveal key={a.name}>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                  {/* media */}
                  <div className={flip ? "lg:order-2" : "lg:order-1"}>
                    {media}
                  </div>
                  {/* text */}
                  <div className={flip ? "lg:order-1" : "lg:order-2"}>
                    <h2 className="display text-4xl sm:text-5xl">{a.name}</h2>
                    <p className="lede mt-6 max-w-xl">{a.body}</p>
                    {a.link === "gallery" && (
                      <div className="mt-7">
                        <Btn to="gallery" go={go} variant="underline">
                          See the gallery
                        </Btn>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 4 — Walkthrough: hunter-green band, numbered horizontal sequence */}
      <Section className="py-24 sm:py-28">
        <div
          className="relative overflow-hidden border border-line px-6 py-20 sm:px-12"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.25), transparent 70%), var(--c-green)",
          }}
        >
          <div className="text-center">
            <Reveal>
              <p
                className="eyebrow mb-4"
                style={{ color: "var(--c-accent-soft)" }}
              >
                {walkthrough.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="display mx-auto max-w-[18ch] text-4xl sm:text-5xl"
                style={{ color: "#fff" }}
              >
                {walkthrough.title}
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {walkthrough.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div>
                  <div className="display text-6xl text-accent">{s.n}</div>
                  <h3
                    className="display mt-5 text-2xl"
                    style={{ color: "#fff" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="serif mt-3 text-lg leading-relaxed"
                    style={{ color: "#dce8e2" }}
                  >
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 5 — Texture beat: a subtle row of three detail frames, no faces */}
      <Section className="pb-24 sm:pb-28">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { src: "/img/space/storefront.jpg", cap: "The entrance" },
            { src: "/img/space/wide.jpg", cap: "The floor" },
            { src: "/img/space/door-logo.jpg", cap: "The mark" },
          ].map(({ src, cap }, i) => (
            <Reveal key={cap} delay={i * 70}>
              <figure className="overflow-hidden border border-line bg-surface2">
                <img
                  src={src}
                  alt={cap}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — Final CTA */}
      <CTABand title={cta.title} body={cta.body} label={cta.label} go={go} />
    </main>
  );
}
