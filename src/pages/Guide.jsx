import { useState } from "react";
import { Reveal, Icon, Logo } from "../ui.jsx";
import { EBOOK, CLINIC, TEAM, TESTIMONIALS, DISCLAIMERS } from "../data.js";

// ─────────────────────────────────────────────────────────────────────────────
// THE GUIDE — distraction-free lead-magnet funnel landing page.
//
// This page renders WITHOUT the global header/footer (see BARE in App.jsx) so it
// holds a 1:1 attention ratio: one offer, one CTA, zero competing links. Send all
// paid/social traffic here →  /#/guide  — NOT to the in-site /#/ebook page (which
// keeps full nav + cross-sells for organic browsers).
// ─────────────────────────────────────────────────────────────────────────────

const founder = TEAM.members[0];

// CSS-only 3D book mock (mirrors the in-site ebook page).
function BookMock() {
  return (
    <div
      className="relative mx-auto w-full max-w-[280px]"
      style={{ perspective: "1400px" }}
    >
      <div
        className="relative aspect-[3/4] w-full overflow-hidden"
        style={{
          transform: "rotateY(-16deg) rotateX(3deg)",
          transformStyle: "preserve-3d",
          background:
            "linear-gradient(150deg, var(--c-surface2) 0%, var(--c-surface) 60%, var(--c-bg) 100%)",
          border: "1px solid var(--c-accent)",
          borderRadius: "4px 10px 10px 4px",
          boxShadow: "22px 26px 60px rgba(0,0,0,0.55)",
        }}
      >
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-7"
          style={{
            background: "linear-gradient(90deg, rgba(0,0,0,0.55), transparent)",
          }}
        />
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.07), transparent 42%)",
          }}
        />
        <div className="relative flex h-full flex-col p-7 text-left">
          <p className="eyebrow" style={{ color: "var(--c-accent)" }}>
            {CLINIC.name}
          </p>
          <span
            className="diamond mx-0 my-5 block h-2 w-2 rotate-45"
            style={{ background: "var(--c-accent)" }}
          />
          <h3
            className="display mt-1 text-3xl leading-[1.04]"
            style={{ color: "var(--c-ink)" }}
          >
            {EBOOK.cover}
          </h3>
          <div className="mt-auto">
            <div className="hairline mb-3" />
            <p className="text-xs" style={{ color: "var(--c-muted)" }}>
              {EBOOK.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Guide({ go }) {
  const [busy, setBusy] = useState(false);

  // Demo delivery: hand over the real PDF, then route to the thank-you page.
  // TODO(client): wire real Stripe Checkout → fulfillment + auto-trigger the
  // 12-Day Shoulder Challenge email sequence (PTeverywhere automation).
  function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const a = document.createElement("a");
      a.href = EBOOK.pdf;
      a.download = "Shoulder-Health-and-Freedom.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (_) {
      /* best-effort in demo */
    }
    setTimeout(() => go("thank-you/ebook"), 700);
  }

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 50% -5%, rgba(15,48,36,0.55), transparent 60%), linear-gradient(180deg,#10140E,var(--c-bg))",
      }}
    >
      {/* logo only — NO navigation (this is the whole point of a funnel page) */}
      <div className="mx-auto flex max-w-5xl items-center justify-center px-5 pt-8">
        <Logo variant="brass" className="h-9 w-auto" />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-12 lg:grid-cols-2 lg:py-20">
        {/* LEFT — the offer */}
        <div>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--c-accent)" }}>
              {EBOOK.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="display mt-4 text-4xl leading-[1.04] sm:text-6xl">
              {EBOOK.title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede mt-5 max-w-xl">{EBOOK.subtitle}</p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-8 grid gap-3">
              {EBOOK.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    name="check"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  />
                  <span className="text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <img
                src="/img/juan.jpg"
                alt={founder.name}
                className="h-14 w-14 shrink-0 rounded-full object-cover"
                style={{ border: "1px solid var(--c-accent)" }}
              />
              <p className="serif text-sm italic text-muted">
                {EBOOK.author} · {TESTIMONIALS.rating}★ from{" "}
                {TESTIMONIALS.count} Google reviews
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — the single CTA: checkout */}
        <div>
          <Reveal delay={120}>
            <div className="mb-8 hidden lg:block">
              <BookMock />
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card-brass mx-auto max-w-md p-7 sm:p-8">
              <div className="flex items-baseline justify-between border-b border-line pb-4">
                <span className="display text-2xl">Get instant access</span>
                <span
                  className="display text-3xl"
                  style={{ color: "var(--c-accent)" }}
                >
                  {EBOOK.price}
                </span>
              </div>

              {/* bonus, stated once — reinforces value without adding a link */}
              <p className="serif mt-4 text-sm italic text-muted">
                <span
                  className="not-italic"
                  style={{ color: "var(--c-accent)" }}
                >
                  Included free:{" "}
                </span>
                {EBOOK.bonus.title} — {EBOOK.bonus.lede}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={submit}
                  className="rounded-theme border border-line bg-bg py-3 text-sm font-semibold text-ink transition hover:border-accent"
                >
                  {" "}
                  Pay
                </button>
                <button
                  type="button"
                  onClick={submit}
                  className="rounded-theme border border-line bg-bg py-3 text-sm font-semibold text-ink transition hover:border-accent"
                >
                  G&nbsp;Pay
                </button>
              </div>

              <div className="my-5 flex items-center gap-3">
                <span className="hairline flex-1" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted2">
                  or pay with card
                </span>
                <span className="hairline flex-1" />
              </div>

              <form onSubmit={submit} className="space-y-3">
                <input
                  required
                  type="email"
                  placeholder="Email for delivery"
                  className="w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent"
                />
                <div className="flex items-center rounded-theme border border-line bg-bg px-4 transition focus-within:border-accent">
                  <input
                    required
                    inputMode="numeric"
                    placeholder="Card number"
                    className="w-full bg-transparent py-3 text-ink outline-none"
                  />
                  <span className="text-xs font-bold text-muted">VISA</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    placeholder="MM / YY"
                    className="rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent"
                  />
                  <input
                    required
                    placeholder="CVC"
                    className="rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={busy}
                  className="btn-primary mt-2 w-full px-6 py-4 font-semibold disabled:opacity-60"
                >
                  {busy ? "Processing…" : `Get the Guide — ${EBOOK.price}`}
                </button>
              </form>

              <p className="mt-4 rounded-theme border border-line bg-bg/50 px-3 py-2 text-center text-xs font-semibold text-muted">
                Demo checkout — no payment is processed and no card is stored.
              </p>
              <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-muted">
                <Icon name="lock" className="h-4 w-4" /> {EBOOK.checkout.note}
              </p>
              <p className="mt-3 text-center text-xs text-muted2">
                {EBOOK.guarantee}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* minimal legal — required, but kept quiet so it isn't a competing link */}
      <div className="mx-auto max-w-3xl px-5 pb-12 text-center">
        <p className="text-xs leading-relaxed text-muted2">
          {EBOOK.disclaimer}
        </p>
        <p className="mt-2 text-xs text-muted2">
          © {CLINIC.name} · The Vault · Miami, FL
        </p>
      </div>
    </main>
  );
}
