import { useState } from 'react'

// Unsplash photo with a designed gradient fallback — never shows a broken-image icon.
// Demo imagery; client's real clinic photos replace these on handoff.
export default function Photo({ id, alt = '', className = '', kenburns = false, w = 1000 }) {
  const [ok, setOk] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const src = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--c-accent) 35%, var(--c-surface)), var(--c-surface))' }}>
      {ok && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setOk(false)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${kenburns ? 'kenburns' : ''}`}
        />
      )}
    </div>
  )
}
