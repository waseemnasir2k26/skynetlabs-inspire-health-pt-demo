import { useEffect, useRef, useState } from 'react'
import { CLINIC } from './data.js'

// scroll-reveal wrapper
export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

export function Section({ id, children, className = '', numeral }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {numeral && (
        <span className="numeral pointer-events-none absolute right-2 top-2 text-[120px] sm:text-[200px]">{numeral}</span>
      )}
      {children}
    </section>
  )
}

export function Eyebrow({ children, className = '' }) {
  return <p className={`eyebrow mb-4 ${className}`}>{children}</p>
}

// brand diamond-rule ornament  — ◆ —
export function DiamondRule({ className = '' }) {
  return (
    <div className={`diamond-rule my-12 ${className}`}>
      <div className="line" />
      <div className="diamond" />
      <div className="line mid" />
      <div className="diamond" />
      <div className="line" />
    </div>
  )
}

// brass logo lockup. variant: 'brass' | 'white' | 'mark' (diamond only)
export function Logo({ variant = 'brass', className = 'h-9', withWordmark = true }) {
  const src = variant === 'white' ? '/img/logo-white.png' : '/img/logo-brass.png'
  if (!withWordmark) {
    // crop to the diamond mark by showing a square via object-position top
    return <img src={src} alt="Inspire Health PT" className={className} style={{ objectFit: 'contain' }} />
  }
  return <img src={src} alt="Inspire Health PT" className={className} />
}

// primary / ghost / underline buttons. `to` triggers nav via go(); `href` is external.
export function Btn({ children, to, href, go, variant = 'primary', className = '', size = 'md' }) {
  const sz = size === 'lg' ? 'px-9 py-4 text-lg' : size === 'sm' ? 'px-4 py-2 text-sm' : 'px-7 py-3.5'
  const cls =
    variant === 'ghost' ? 'btn-ghost' : variant === 'underline' ? 'btn-underline' : 'btn-primary'
  const base = variant === 'underline' ? `inline-block ${className}` : `inline-block ${sz} ${cls} ${className}`
  if (href) return <a href={href} target="_blank" rel="noopener" className={base}>{children}</a>
  return <button onClick={() => go?.(to || '')} className={base}>{children}</button>
}

// VSL / video placeholder. Renders the real embed when CLINIC.vsl is set.
export function VSL({ note, className = '' }) {
  const [tap, setTap] = useState(false)
  if (CLINIC.vsl) {
    return (
      <div className={`vsl-frame ${className}`} style={{ cursor: 'default' }}>
        <iframe src={CLINIC.vsl} title="Watch" allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen className="absolute inset-0 h-full w-full" />
      </div>
    )
  }
  return (
    <div className={`vsl-frame ${className}`} onClick={() => { setTap(true); setTimeout(() => setTap(false), 200) }}>
      <div className="vsl-play" style={{ transform: tap ? 'scale(0.92)' : '' }}>
        <Icon name="play" className="h-6 w-6" style={{ color: 'var(--c-onaccent)' }} />
      </div>
      {note && <span className="serif absolute bottom-3 text-xs italic text-muted2">{note}</span>}
    </div>
  )
}

// generic page hero (centered, kicker + h1 + lede + optional CTAs)
export function PageHero({ kicker, h1, lede, children, className = '' }) {
  return (
    <header className={`relative overflow-hidden border-b border-line ${className}`}
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(15,48,36,0.45), transparent 62%), linear-gradient(180deg,#11150F,var(--c-bg))' }}>
      <Section className="py-28 text-center sm:py-36">
        {kicker && <Reveal><p className="eyebrow mb-5">{kicker}</p></Reveal>}
        <Reveal delay={80}><h1 className="display mx-auto max-w-[16ch] text-5xl sm:text-7xl">{h1}</h1></Reveal>
        {lede && <Reveal delay={160}><p className="lede mx-auto mt-7 max-w-2xl">{lede}</p></Reveal>}
        {children && <Reveal delay={240}><div className="mt-9 flex flex-wrap items-center justify-center gap-4">{children}</div></Reveal>}
      </Section>
    </header>
  )
}

// reusable CTA band (gold-on-green or dark). Use at the bottom of pages.
export function CTABand({ eyebrow, title, body, label = 'Book Your Evaluation', to = 'evaluation', go, secondary }) {
  return (
    <Section className="py-24">
      <div className="relative overflow-hidden border border-line px-6 py-20 text-center"
        style={{ background: 'radial-gradient(ellipse at 50% 120%, rgba(0,0,0,0.3), transparent 70%), var(--c-green)' }}>
        {eyebrow && <p className="eyebrow mb-4" style={{ color: 'var(--c-accent-soft)' }}>{eyebrow}</p>}
        <h2 className="display mx-auto max-w-[18ch] text-4xl sm:text-6xl" style={{ color: '#fff' }}>{title}</h2>
        {body && <p className="lede mx-auto mt-5 max-w-xl" style={{ color: '#dce8e2' }}>{body}</p>}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Btn to={to} go={go} size="lg">{label}</Btn>
          {secondary}
        </div>
      </div>
    </Section>
  )
}

// accordion FAQ list
export function FAQList({ items, className = '' }) {
  const [open, setOpen] = useState(0)
  return (
    <div className={`mx-auto max-w-3xl ${className}`}>
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 50}>
          <div className="border-b border-line">
            <button onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left">
              <span className="display text-2xl text-ink">{it.q}</span>
              <span className="text-accent transition-transform" style={{ transform: open === i ? 'rotate(45deg)' : '' }}>
                <Icon name="plus" className="h-5 w-5" />
              </span>
            </button>
            <div className="grid transition-all duration-300" style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}>
              <div className="overflow-hidden">
                <p className="serif pb-7 text-lg leading-relaxed text-muted" style={{ color: '#cfcabb' }}>{it.a}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

// minimal inline icon set
export function Icon({ name, className = 'h-6 w-6', style }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    pulse: <path d="M3 12h4l2-6 4 12 2-6h6" {...common} />,
    hands: <path d="M7 11V6a2 2 0 0 1 4 0v4m0-3a2 2 0 0 1 4 0v5m-8 0a4 4 0 0 0 8 0v3a5 5 0 0 1-10 0v-2l-2-2a1.5 1.5 0 0 1 2-2" {...common} />,
    needle: <path d="M4 20l8-8m-2 4l-2 2m11-14l-3 3 2 2-3 3-2-2-3 3" {...common} />,
    run: <path d="M13 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-3 5l3-2 3 2 2 4m-8-4l-3 2-2 4m5-6l1 5 3 4" {...common} />,
    spine: <path d="M12 3v18M9 6h6M9 10h6M9 14h6M9 18h6" {...common} />,
    bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" {...common} />,
    phone: <path d="M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" {...common} />,
    check: <path d="M4 12l5 5L20 6" {...common} />,
    arrow: <path d="M4 12h16m-6-6l6 6-6 6" {...common} />,
    star: <path d="M12 3l2.6 5.6L21 9.3l-4.5 4.2 1.1 6.2L12 16.8 6.4 19.7l1.1-6.2L3 9.3l6.4-.7L12 3z" fill="currentColor" stroke="none" />,
    play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
    lock: <path d="M6 10V8a6 6 0 0 1 12 0v2m-13 0h14v10H5z" {...common} />,
    quote: <path d="M9 7H5v6h4l-2 4m11-10h-4v6h4l-2 4" {...common} />,
    plus: <path d="M12 5v14M5 12h14" {...common} />,
    sauna: <path d="M4 20V9l8-5 8 5v11M9 20v-5a3 3 0 0 1 6 0v5M7 9h.01M7 12h.01" {...common} />,
    art: <path d="M4 4h16v12H4zM4 16l5-5 3 3 4-4 4 4M16 20H8" {...common} />,
    dumbbell: <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" {...common} />,
    video: <path d="M3 6h12v12H3zM15 10l6-3v10l-6-3" {...common} />,
    mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" {...common} />,
    calendar: <path d="M4 5h16v16H4zM4 9h16M8 3v4M16 3v4" {...common} />,
    map: <path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3zM9 3v15M15 6v15" {...common} />,
    shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" {...common} />,
  }
  return <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden>{paths[name] || paths.pulse}</svg>
}

export function Stars({ n = 5, className = 'h-4 w-4' }) {
  return (
    <span className="inline-flex gap-0.5 text-accent">
      {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" className={className} />)}
    </span>
  )
}
