import { useEffect, useRef, useState } from 'react'

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

export function Eyebrow({ children }) {
  return <p className="eyebrow mb-4">{children}</p>
}

// minimal inline icon set
export function Icon({ name, className = 'h-6 w-6' }) {
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
  }
  return <svg viewBox="0 0 24 24" className={className} aria-hidden>{paths[name] || paths.pulse}</svg>
}

export function Stars({ n = 5, className = 'h-4 w-4' }) {
  return (
    <span className="inline-flex gap-0.5 text-accent">
      {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" className={className} />)}
    </span>
  )
}
