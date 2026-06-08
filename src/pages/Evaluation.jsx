import { useState } from "react";
import Schema from "../components/Schema.jsx";
import {
  Section,
  Reveal,
  Eyebrow,
  DiamondRule,
  Btn,
  VSL,
  CTABand,
  FAQList,
  Icon,
  Stars,
} from "../ui.jsx";
import {
  HERO,
  METHOD,
  PRICING,
  FAQ,
  TESTIMONIALS,
  DISCLAIMERS,
  CLINIC,
} from "../data.js";

// What happens in your 60 minutes — derived from METHOD phase 01/02 + standard
// eval steps. Friction reducer: demystify the visit before they book.
const VISIT_STEPS = [
  {
    n: "01",
    title: "Full movement & injury screen",
    body: "We map how you move, where you compensate, and find the driver of your pain — before we load a single rep.",
  },
  {
    n: "02",
    title: "Hands-on treatment, day one",
    body: "You don’t just get talked at. Skilled manual work to calm the tissue and get the joint moving the way it should.",
  },
  {
    n: "03",
    title: "A clear, custom plan",
    body: "You leave understanding exactly what’s going on and the path past it — built around your goals, not a billing code.",
  },
  {
    n: "04",
    title: "Your next steps",
    body: "No referral needed, no runaround. We confirm what comes next and hand you a superbill for possible reimbursement.",
  },
];

const WHO = [
  "The overhead athlete with a shoulder that won’t hold up",
  "The Hyrox competitor whose low back is catching up to the volume",
  "The runner stuck on knee pain that rest hasn’t fixed",
  "The weekend warrior tired of skipping weekends to avoid a flare-up",
];

// Secondary lead-capture fallback — Calendly stays the primary action.
function LeadForm({ go }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setBusy(true);
        setTimeout(() => go("thank-you/eval"), 700);
      }}
      className="card p-6 sm:p-7"
    >
      <h3 className="display text-2xl">
        Prefer we reach out? Leave your details.
      </h3>
      <p className="serif mt-2 text-sm text-muted">
        We’ll confirm a time and send everything you need before your visit.
      </p>
      <div className="mt-5 space-y-3">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent"
        />
        <textarea
          rows={3}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="What’s going on?"
          className="w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>
      <button
        type="submit"
        disabled={busy}
        className="btn-ghost mt-5 w-full px-6 py-3.5 font-semibold disabled:opacity-60"
      >
        {busy ? "Sending…" : "Request a callback"}
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Demo form · no message is sent
      </p>
    </form>
  );
}

export default function Evaluation({ go, sub }) {
  const tier = PRICING.evaluation;
  return (
    <main>
      <Schema type="evaluation" />

      {/* 1 — HERO ----------------------------------------------------------- */}
      <header
        className="relative overflow-hidden border-b border-line"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(15,48,36,0.5), transparent 62%), linear-gradient(180deg,#11150F,var(--c-bg))",
        }}
      >
        <Section className="pt-28 pb-20 text-center sm:pt-36 sm:pb-24">
          <Reveal>
            <span className="card-brass mx-auto inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted">
              <Icon name="shield" className="h-4 w-4 text-accent" />
              Cash-pay · out-of-network · superbill provided
            </span>
          </Reveal>
          <Reveal delay={60}>
            <p className="eyebrow mt-6 mb-5">Book Your Evaluation</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mx-auto max-w-[18ch] text-5xl sm:text-7xl">
              A real diagnosis. A real plan.{" "}
              <span className="italic text-accent">In one hour.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="lede mx-auto mt-7 max-w-2xl">
              One private hour with a Doctor of Physical Therapy. We find why
              the pain is there, treat it the same day, and send you home with a
              plan you actually understand.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Btn href={CLINIC.calendly} size="lg">
                Book Your Evaluation
              </Btn>
              <Btn href={CLINIC.freeCall} variant="underline">
                Free 15-min call
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-7 flex items-center justify-center gap-3 text-sm text-muted">
              <Stars />{" "}
              <span>
                {TESTIMONIALS.rating} · {TESTIMONIALS.count} reviews
              </span>
            </div>
          </Reveal>
        </Section>
      </header>

      {/* 2 — VSL ------------------------------------------------------------ */}
      <Section className="py-20">
        <Reveal className="text-center">
          <Eyebrow>Watch first</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="display mx-auto max-w-[16ch] text-center text-3xl sm:text-5xl">
            Sixty seconds on what your hour looks like.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mx-auto mt-10 max-w-3xl">
            <VSL note={CLINIC.vslNote} />
          </div>
        </Reveal>
      </Section>

      <DiamondRule />

      {/* 3 — WHAT HAPPENS IN YOUR 60 MINUTES ------------------------------- */}
      <Section className="py-20">
        <Reveal className="text-center">
          <Eyebrow>The visit</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="display mx-auto max-w-[18ch] text-center text-4xl sm:text-6xl">
            What happens in your 60 minutes.
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {VISIT_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="card-brass h-full p-6">
                <span className="display text-3xl text-accent">{s.n}</span>
                <h3 className="display mt-3 text-xl text-ink">{s.title}</h3>
                <p className="serif mt-2 leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 — WHO IT'S FOR --------------------------------------------------- */}
      <Section className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Who it’s for</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display text-3xl sm:text-5xl">
              You’ll know if this is you.
            </h2>
          </Reveal>
        </div>
        <ul className="mx-auto mt-9 grid max-w-3xl gap-3">
          {WHO.map((w, i) => (
            <Reveal key={i} delay={i * 50}>
              <li className="flex items-start gap-3 border-b border-line pb-3">
                <Icon
                  name="check"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                />
                <span className="text-ink">{w}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 5 — INLINE CALENDLY #1 -------------------------------------------- */}
      <Section className="py-20">
        <Reveal className="text-center">
          <Eyebrow>Reserve your time</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="display mx-auto max-w-[16ch] text-center text-4xl sm:text-6xl">
            Pick your time.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="card-brass mx-auto mt-10 max-w-3xl overflow-hidden p-2">
            <iframe
              src={CLINIC.calendly}
              className="w-full"
              style={{ minHeight: "680px", border: "0" }}
              title="Book your evaluation"
            />
          </div>
        </Reveal>
      </Section>

      <DiamondRule />

      {/* 6 — PRICING CLARITY (eval tier) ----------------------------------- */}
      <Section className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>{PRICING.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display text-3xl sm:text-5xl">{PRICING.title}</h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="card-green mx-auto mt-10 max-w-xl p-8 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-5">
              <div>
                <h3 className="display text-2xl text-ink">{tier.name}</h3>
                <p className="text-sm text-muted">{tier.unit}</p>
              </div>
              <span className="display text-4xl text-accent">{tier.price}</span>
            </div>
            <p className="serif mt-5 leading-relaxed text-muted">{tier.desc}</p>
            <ul className="mt-6 space-y-3">
              {tier.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    name="check"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  />
                  <span className="text-ink">{p}</span>
                </li>
              ))}
            </ul>
            <Btn
              href={CLINIC.calendly}
              size="lg"
              className="mt-8 w-full text-center"
            >
              {tier.cta}
            </Btn>
            <p className="mt-4 text-center text-xs text-muted">
              {PRICING.note}
            </p>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-xl text-center text-xs text-muted">
            {DISCLAIMERS.network}
          </p>
        </Reveal>
      </Section>

      {/* 7 — LEAD-CAPTURE FALLBACK ----------------------------------------- */}
      <Section className="py-16">
        <Reveal className="mx-auto max-w-xl">
          <LeadForm go={go} />
        </Reveal>
      </Section>

      <DiamondRule />

      {/* 8 — FAQ ------------------------------------------------------------ */}
      <Section className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>{FAQ.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display text-3xl sm:text-5xl">{FAQ.title}</h2>
          </Reveal>
        </div>
        <div className="mt-10">
          <FAQList items={FAQ.items.slice(0, 5)} />
        </div>
      </Section>

      {/* 9 — FINAL CTA BAND ------------------------------------------------- */}
      <CTABand
        title="Your hour is waiting."
        body="Reserve your evaluation at The Vault."
        label="Book Your Evaluation"
        go={go}
        secondary={
          <Btn href={CLINIC.freeCall} variant="underline">
            Free 15-min call
          </Btn>
        }
      />
    </main>
  );
}
