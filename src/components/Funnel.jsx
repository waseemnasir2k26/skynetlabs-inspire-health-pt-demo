import { useState } from 'react'
import { Icon } from '../ui.jsx'
import Photo from './Photo.jsx'
import { CLINIC } from '../data.js'

// VSL video block — poster + play; loads real embed if a valid URL is supplied,
// otherwise shows the designed video slot (client drops their VSL embed link).
export function VSL({ poster = 'photo-1554344728-77cf90d9ed26', label = 'Watch: Why Miami chooses Inspire' }) {
  const [play, setPlay] = useState(false)
  const real = CLINIC.vsl && CLINIC.vsl.startsWith('http') && !CLINIC.vsl.includes('scaffolded')
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-theme" style={{ boxShadow: 'var(--shadow)' }}>
      {play && real ? (
        <iframe src={`${CLINIC.vsl}?autoplay=1`} title="VSL" allow="autoplay; fullscreen" className="h-full w-full" />
      ) : (
        <button onClick={() => setPlay(true)} className="group relative block h-full w-full">
          <Photo id={poster} alt="" className="h-full w-full" kenburns w={1200} />
          <span className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.55))' }} />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition group-hover:scale-110" style={{ background: 'var(--c-accent)', color: 'var(--c-onaccent)' }}>
            <Icon name="play" className="h-8 w-8" />
          </span>
          <span className="absolute bottom-5 left-5 text-left text-white">
            <span className="block text-sm font-semibold">{label}</span>
            {!real && <span className="mt-0.5 block text-xs opacity-70">Client VSL embed loads here</span>}
          </span>
        </button>
      )}
    </div>
  )
}

// Interactive booking mock — demonstrates the Calendly flow. Real Calendly inline
// widget swaps in at handoff (drop-in: replace this with the Calendly embed div).
const DAYS = ['Mon 9', 'Tue 10', 'Wed 11', 'Thu 12', 'Fri 13']
const SLOTS = ['8:00 AM', '9:30 AM', '11:00 AM', '1:30 PM', '3:00 PM', '4:30 PM']

export function BookingMock({ onDone }) {
  const [day, setDay] = useState(0)
  const [slot, setSlot] = useState(null)
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  if (step === 2) {
    return (
      <form onSubmit={(e) => { e.preventDefault(); onDone?.(form) }} className="card p-6 sm:p-8">
        <button type="button" onClick={() => setStep(1)} className="mb-4 text-sm text-muted">← Back</button>
        <h3 className="display text-2xl">Confirm your evaluation</h3>
        <p className="mt-1 text-sm text-muted">{DAYS[day]} · {slot} · 60-minute session</p>
        <div className="mt-5 space-y-3">
          {[['name', 'Full name', 'text'], ['email', 'Email', 'email'], ['phone', 'Phone', 'tel']].map(([k, ph, ty]) => (
            <input key={k} required type={ty} placeholder={ph} value={form[k]}
              onChange={(e) => setForm({ ...form, [k]: e.target.value })}
              className="w-full rounded-theme border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-accent" />
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">Please don’t include medical details here. We’ll collect history securely at your visit.</p>
        <button type="submit" className="btn-primary mt-5 w-full px-6 py-3.5 font-semibold">Reserve this time</button>
      </form>
    )
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <h3 className="display text-2xl">Pick a time</h3>
        <span className="text-xs text-muted">Calendly · live scheduler</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {DAYS.map((d, i) => (
          <button key={d} onClick={() => setDay(i)} className={`rounded-theme border px-3.5 py-2 text-sm ${day === i ? 'btn-primary border-transparent font-semibold' : 'border-line text-ink'}`}>{d}</button>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {SLOTS.map((s) => (
          <button key={s} onClick={() => setSlot(s)} className={`rounded-theme border px-3 py-3 text-sm ${slot === s ? 'border-accent text-accent' : 'border-line text-ink hover:border-accent'}`}>{s}</button>
        ))}
      </div>
      <button disabled={!slot} onClick={() => setStep(2)} className="btn-primary mt-6 w-full px-6 py-3.5 font-semibold disabled:opacity-40">
        {slot ? `Continue · ${DAYS[day]} ${slot}` : 'Select a time'}
      </button>
    </div>
  )
}

// Email capture — demo posts to nowhere; on submit calls onDone. Wire to
// Web3Forms / Formspree / GHL at handoff (action endpoint noted in docs).
export function EmailCapture({ cta = 'Get instant access', onDone, note }) {
  const [email, setEmail] = useState('')
  return (
    <form onSubmit={(e) => { e.preventDefault(); onDone?.(email) }} className="flex flex-col gap-3 sm:flex-row">
      <input required type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-theme border border-line bg-bg px-4 py-3.5 text-ink outline-none focus:border-accent" />
      <button type="submit" className="btn-primary whitespace-nowrap px-7 py-3.5 font-semibold">{cta}</button>
      {note && <span className="text-xs text-muted">{note}</span>}
    </form>
  )
}
