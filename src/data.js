// Demo content for Inspire Health PT. Placeholder copy/photos — client swaps real
// assets (brand guide, clinic photos, VSL links, testimonials, Calendly, ebook) on handoff.
// Compliance baked in: no cure/guaranteed-outcome claims, results-vary + medical
// disclaimers, out-of-network/superbill framing. See docs/COMPLIANCE.md.

export const CLINIC = {
  name: 'Inspire Health PT',
  tagline: 'Physical Therapy & Performance',
  city: 'Miami, FL',
  phone: '+1 (305) 555-0142',
  phoneHref: 'tel:+13055550142',
  email: 'hello@inspirehealthpt.com',
  address: '1200 Brickell Ave, Suite 400, Miami, FL 33131',
  // demo placeholders — replace with client's real links on handoff
  calendly: 'https://calendly.com/inspire-health-pt/evaluation',
  vsl: 'https://www.youtube.com/embed/ scaffolded',
}

export const HERO = {
  eyebrow: 'Cash-Pay · Out-of-Network · Miami',
  h1: ['Recover faster.', 'Move better.', 'Perform longer.'],
  highlight: 'better',
  sub: 'A full 60 minutes, one-on-one, with a Doctor of Physical Therapy — never an aide, never double-booked. Concierge recovery and performance care in the heart of Miami.',
  ctaPrimary: 'Reserve Your Evaluation',
  ctaSecondary: 'Call the Clinic',
}

// press / trust strip (illustrative for demo)
export const TRUST = [
  'Doctor of Physical Therapy led',
  '60-min private sessions',
  'APTA member clinic',
  'Dry needling certified',
  'Direct access — no referral',
]

export const STATS = [
  { n: '60', label: 'minutes, 1-on-1 every visit' },
  { n: '1:1', label: 'doctor-to-patient, never shared' },
  { n: '0', label: 'insurance gatekeeping' },
  { n: '5.0', label: 'average Google rating' },
]

export const SERVICES = [
  { icon: 'pulse', title: 'Movement & Performance Assessment', body: 'A full-body screen that maps how you move, where you compensate, and what is limiting your performance.' },
  { icon: 'hands', title: 'Manual & Hands-On Therapy', body: 'Skilled hands-on treatment to restore mobility, calm pain, and get tissue moving the way it should.' },
  { icon: 'needle', title: 'Dry Needling', body: 'Targeted relief for stubborn muscular tension and trigger points, performed by a certified clinician.' },
  { icon: 'run', title: 'Sports Injury Rehab', body: 'Return-to-sport programming for athletes — from runner’s knee and rotator cuffs to post-op ACL.' },
  { icon: 'spine', title: 'Mobility & Longevity', body: 'Build durable, pain-free movement so you can keep training, traveling, and living without limits.' },
  { icon: 'bolt', title: 'Blood Flow Restriction Training', body: 'Evidence-based BFR to build strength and rebuild after injury with less load on healing tissue.' },
]

export const PROCESS = [
  { step: '01', title: 'Reserve your evaluation', body: 'Pick a time online in under 60 seconds. No referral, no insurance runaround.' },
  { step: '02', title: 'Get a real diagnosis', body: 'A full 60 minutes with your Doctor of PT to find the root cause — not just the symptom.' },
  { step: '03', title: 'Follow your plan', body: 'A custom recovery and performance plan, adjusted every visit by the same expert.' },
  { step: '04', title: 'Move better for good', body: 'Graduate stronger than your injury, with the tools to stay that way.' },
]

// Illustrative testimonials for the demo. Real, HIPAA-authorized testimonials
// replace these at handoff. Disclaimer shown alongside (results vary).
export const TESTIMONIALS = [
  { name: 'Marcus R.', tag: 'Marathon runner · Brickell', quote: 'I’d bounced between insurance clinics for a year. One real evaluation here found what everyone missed. Back to running pain-free.' },
  { name: 'Elena V.', tag: 'Post-op ACL · Coral Gables', quote: 'Same doctor every visit, a full hour each time. It never felt rushed. That made all the difference in my recovery.' },
  { name: 'Devin K.', tag: 'CrossFit athlete · Wynwood', quote: 'They treated the cause, not just the sore shoulder. The performance assessment alone was worth it.' },
  { name: 'Sofia M.', tag: 'Executive · Miami Beach', quote: 'Concierge level care. Booking took a minute, parking was easy, and I actually understood my plan.' },
  { name: 'Andre L.', tag: 'Tennis · Coconut Grove', quote: 'Out-of-network felt like a leap. After two sessions I understood exactly why people pay for this.' },
  { name: 'Priya S.', tag: 'Triathlete · Downtown', quote: 'The most thorough movement screen I’ve ever had. I left with a plan I could actually follow.' },
]

// transparent + reframed pricing (Bespoke pattern) — sells value vs insurance mill
export const PRICING = [
  {
    name: 'Initial Evaluation',
    price: '$225',
    unit: 'one-time',
    desc: 'A complete 60-minute assessment and same-day treatment with your Doctor of PT.',
    points: ['Full movement & injury screen', 'Hands-on treatment day one', 'Custom recovery plan', 'Direct access — no referral needed'],
    cta: 'Reserve Evaluation',
    featured: false,
  },
  {
    name: 'Performance Package',
    price: '$180',
    unit: 'per session',
    desc: 'Our most chosen plan. Private, focused, results-driven sessions on your schedule.',
    points: ['Full 60 min, 1-on-1, every visit', 'Same doctor each session', 'Dry needling & BFR included', 'Superbill provided for reimbursement'],
    cta: 'Start Your Plan',
    featured: true,
  },
  {
    name: 'Concierge Recovery',
    price: 'Custom',
    unit: 'membership',
    desc: 'Priority scheduling and ongoing performance care for athletes and executives.',
    points: ['Priority booking', 'Quarterly movement re-screen', 'Direct messaging with your DPT', 'Travel-ready home programming'],
    cta: 'Inquire About Membership',
    featured: false,
  },
]

export const COMPARE = {
  heading: 'What you’re really paying for',
  rows: [
    { label: 'Time with your therapist', mill: '15–20 min, shared', us: 'Full 60 min, 1-on-1' },
    { label: 'Who treats you', mill: 'Aide or rotating staff', us: 'The same Doctor of PT' },
    { label: 'Visits to recover', mill: '20+ rushed visits', us: 'Fewer, focused visits' },
    { label: 'Plan of care', mill: 'Dictated by insurance', us: 'Dictated by your goals' },
  ],
}

export const FAQ = [
  { q: 'Do you take insurance?', a: 'We are an out-of-network, cash-pay clinic. We provide a detailed superbill you can submit to your insurer for possible out-of-network reimbursement. Coverage varies by plan, so we recommend checking your benefits.' },
  { q: 'Do I need a referral to be seen?', a: 'Florida allows direct access to physical therapy, so in most cases you can book an evaluation without a physician referral. Certain conditions and timeframes may require one, and we’ll guide you if so.' },
  { q: 'Why is cash-pay worth it?', a: 'You get a full 60 minutes of one-on-one time with the same Doctor of Physical Therapy every visit, a plan built around your goals instead of insurance limits, and typically fewer total visits to reach them.' },
  { q: 'What should I expect at my first visit?', a: 'A complete movement and injury assessment, hands-on treatment the same day, and a clear, custom plan you’ll understand before you leave.' },
  { q: 'How do I book?', a: 'Reserve a time online in under a minute, or call the clinic. We’ll confirm your evaluation and send everything you need beforehand.' },
  { q: 'Where are you located?', a: `${CLINIC.address}. Convenient to Brickell, Coral Gables, Wynwood, Coconut Grove, and Miami Beach.` },
]

export const EBOOK = {
  title: 'The Pain-Free Performance Playbook',
  subtitle: 'The 7 movement habits our Miami athletes use to stay out of the clinic — and in the game.',
  price: '$19',
  bullets: [
    'The 5-minute daily mobility routine for busy professionals',
    'How to tell a niggle from a real injury (and what to do about each)',
    'The recovery mistakes that keep you in pain longer',
    'A printable return-to-training checklist',
  ],
  cover: 'Playbook',
  disclaimer: 'This guide is for educational purposes only and is not medical advice, diagnosis, or treatment. Consult a licensed provider before starting any program.',
}

export const PROVIDER = {
  name: 'Dr. Alex Rivera, PT, DPT',
  cred: 'Doctor of Physical Therapy · Cert. Dry Needling · CSCS',
  bio: 'Inspire Health PT was built on a simple belief: you deserve more than fifteen rushed minutes and a rotating cast of aides. Every patient gets a full hour, one-on-one, with a doctor who remembers your name, your goals, and your last visit. We treat the cause, not just the symptom — so you graduate stronger than your injury and stay that way.',
}

export const DISCLAIMERS = {
  results: 'Individual results vary. Testimonials reflect individual experiences and are not a guarantee of outcome.',
  medical: 'The content on this site is for general informational purposes and is not a substitute for professional medical advice, diagnosis, or treatment.',
  network: 'Inspire Health PT is an out-of-network, cash-pay provider. A superbill is provided for possible reimbursement; coverage is not guaranteed and varies by plan.',
  demo: 'Demo by SkynetLabs · Placeholder content & photography · skynetjoe.com',
}
