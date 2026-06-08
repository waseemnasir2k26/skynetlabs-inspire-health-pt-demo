// ============================================================================
// Inspire Health PT — single source of truth for all page content.
//
// REAL client facts come from: the client's "The Vault" HTML prototype,
// InspireHealthPT_Brand_Reference.pdf, and the Fiverr brief.
// Compliance-safe copy per docs/COMPLIANCE.md + research (FL Ch.486 + FTC 2023):
//   no "cure / guaranteed / eliminate" — capability/process language only;
//   testimonials carry a visible "individual results vary" disclaimer.
//
// Anything marked  // TODO(client)  is a placeholder awaiting a real asset/value
// and is listed in the handoff checklist. We never fabricate metrics or prices.
// ============================================================================

export const CLINIC = {
  name: "Inspire Health PT",
  sub: "The Vault",
  city: "Miami, FL",
  address: "3257 NW 7th Ave Circle, Miami, FL 33127",
  // Booking is the primary CTA. Real links from the client prototype:
  calendly: "https://calendly.com/inspirehealthpt/60min",
  freeCall: "https://shoulder.inspirehealthpt.co/6a0f23d5d134ea342e889e00/",
  // Public contact — confirmed by client 2026-06-08.
  phone: "(305) 479-7757",
  phoneHref: "tel:+13054797757",
  email: "inspirehealthpt@gmail.com",
  rating: "5.0",
  reviewCount: "72",
  // VSL by Miami Starroom — still in final edit; placeholder frame until the cut lands.
  vsl: null,
  vslNote: "VSL by Miami Starroom — final edit in progress",
};

export const BRANDLINES = {
  philosophy: "I’m not going to ask you to do what I know you won’t do.",
  closing:
    "Your body is the only piece of the operation you cannot replace. Insure it accordingly.",
  oneLine: "One room. One doctor. One hour.",
};

// primary nav — used by Header + Footer (kept identical in both so top === bottom).
// Includes the two offers (Shoulder Guide + Founder's Vault) so nothing is buried.
export const NAV = [
  { p: "", label: "Home" },
  { p: "about", label: "About" },
  { p: "services", label: "Services" },
  { p: "facilities", label: "The Space" },
  { p: "gallery", label: "The Gallery" },
  { p: "ebook", label: "The Shoulder Guide" },
  { p: "vault-offer", label: "The Founder’s Vault" },
  { p: "faq", label: "FAQ" },
];

// ----------------------------------------------------------------- HOME / HERO
export const HERO = {
  kicker: "Miami · Private 1-on-1 Rehab & Performance",
  h1: "You did everything the last clinic said. You’re still not back.",
  lede: "One-on-one rehab for the overhead athlete with a nagging shoulder, the Hyrox competitor with a tight low back, and the runner ready to call it quits over knee pain. We don’t manage pain — we find why it’s there and build you past it.",
  ctaPrimary: "Book Your Evaluation",
  ctaSecondary: "Start with a free 15-minute call",
};

// the four-phase method (from the client prototype)
export const METHOD = {
  eyebrow: "The Method",
  title: "Four Phases. One Vault.",
  intro:
    "Every athlete we work with moves through the same progression — from cracking the code on what’s holding you back, to unlocking performance you didn’t think was on the table.",
  phases: [
    {
      n: "01",
      title: "Assess & Calm",
      tag: "Cracking the combination",
      body: "We find the driver of your pain, calm the tissue, and build a complete picture of what’s at risk — before we load a single rep.",
    },
    {
      n: "02",
      title: "Secure the Joint",
      tag: "Reinforcing the walls",
      body: "Isometric loading and motor-control work that builds the foundation. The joint earns the right to move under load before we push it.",
    },
    {
      n: "03",
      title: "Forge Strength",
      tag: "Hardening the steel",
      body: "Progressive overload builds tissue resilience under real demand. This is where rehab starts to look like training — because at this stage, it is.",
    },
    {
      n: "04",
      title: "Unlock Performance",
      tag: "The vault opens",
      body: "Plyometrics, sport-specific demand, fatigue tolerance. We don’t return you to baseline — we build you past it.",
      peak: true,
    },
  ],
};

// who this is for
export const ARCHETYPES = {
  eyebrow: "Who this is for",
  title: "You’ll know if this is you.",
  items: [
    {
      tag: "The Overhead Athlete",
      title: "Shoulder won’t hold up",
      body: "Pressing, serving, or throwing keeps breaking down.",
    },
    {
      tag: "The Hyrox Competitor",
      title: "Volume is catching up",
      body: "Training load is high and a tight low back is starting to give.",
    },
    {
      tag: "The Runner",
      title: "Rest isn’t fixing it",
      body: "Nagging knee pain that time off alone hasn’t solved.",
    },
    {
      tag: "The Weekend Warrior",
      title: "Stuck at the same level",
      body: "Skipping weekends to avoid a flare-up — with no clear path past it.",
    },
  ],
};

// the Vault story
export const STORY = {
  eyebrow: "The Story",
  title: "Why we call it The Vault.",
  paras: [
    "Most physical therapy happens in a fluorescent room with six other people — heating pad, stim, and a clock the therapist keeps watching, waiting for the next group. That’s not what we’ve built.",
    "The Vault at Inspire Health PT is one room, one therapist, one hour. A private training boutique where the space is curated to feel like something other than a clinic — from the art on the walls, to the infrared sauna, to the details in the gym.",
    "We design our sessions to be impossible to rush. The people who belong here aren’t looking for the cheapest option — they’re looking for the one that works.",
  ],
  last: "What’s protected here is your time, your recovery, and the standard we hold you to.",
};

// ------------------------------------------------------------------- SERVICES
export const SERVICES = {
  eyebrow: "What we do",
  title: "Care built around you — not a billing code.",
  intro:
    "Every service runs inside the four-phase method, delivered one-on-one by the same clinician each visit.",
  items: [
    {
      icon: "pulse",
      title: "Movement & Performance Assessment",
      body: "A full-body screen that maps how you move, where you compensate, and what’s limiting your performance — the foundation for everything that follows.",
    },
    {
      icon: "hands",
      title: "Manual & Hands-On Therapy",
      body: "Skilled hands-on treatment to restore mobility, calm pain, and get tissue moving the way it should.",
    },
    {
      icon: "needle",
      title: "Dry Needling",
      body: "Targeted work for stubborn muscular tension and trigger points, performed by a certified clinician.",
    },
    {
      icon: "run",
      title: "Sports Injury Rehab",
      body: "Return-to-sport programming for athletes — from runner’s knee and rotator cuffs to post-op rebuilds.",
    },
    {
      icon: "bolt",
      title: "Blood Flow Restriction Training",
      body: "Evidence-based BFR to build strength and rebuild after injury with less load on healing tissue.",
    },
    {
      icon: "spine",
      title: "Strength & Longevity",
      body: "Durable, pain-free movement so you can keep training, traveling, and living without limits.",
    },
  ],
};

// what you're paying for (insurance-mill comparison)
export const COMPARE = {
  eyebrow: "The difference",
  heading: "What you’re really paying for",
  rows: [
    {
      label: "Time with your therapist",
      mill: "15–20 min, shared",
      us: "A full hour, 1-on-1",
    },
    {
      label: "Who treats you",
      mill: "Aide or rotating staff",
      us: "The same clinician, every visit",
    },
    {
      label: "Visits to recover",
      mill: "20+ rushed visits",
      us: "Fewer, focused visits",
    },
    {
      label: "Plan of care",
      mill: "Dictated by insurance",
      us: "Dictated by your goals",
    },
    {
      label: "The room",
      mill: "Six patients, one clock",
      us: "One private space, just yours",
    },
  ],
};

// pricing — real, client-confirmed 2026-06-08.
//   • Every journey starts with one Evaluation ($279 — same as a single session).
//   • Then choose ONE in-person program (2 / 3 / 4 month).
//   • OR train remotely via The Founder's Vault — online, by application only,
//     prices NOT shown here (qualified applicants are walked through investment
//     + pay-in-full / payment-plan options). In-person and the Vault are
//     mutually exclusive paths.
export const PRICING = {
  eyebrow: "Investment",
  title: "Straightforward, cash-pay, no insurance runaround.",
  note: "Out-of-network · superbill provided for possible reimbursement (coverage varies by plan).",

  // step one — the front door
  evaluation: {
    name: "The Evaluation",
    price: "$279",
    unit: "one-time · 60 minutes",
    desc: "Where every journey starts — a complete assessment and same-day hands-on treatment with your clinician. Priced the same as a single private session.",
    points: [
      "Full movement & injury screen",
      "Hands-on treatment day one",
      "A clear, custom plan you’ll understand",
      "Direct access — no referral needed",
    ],
    cta: "Book Your Evaluation",
    to: "evaluation",
  },

  // step two, path A — in-person programs (choose one; most pick the 3-month)
  programsEyebrow: "In-person programs",
  programsTitle: "Commit to the work. Choose your runway.",
  programsNote:
    "Multi-session programs at The Vault in Miami, each one full hour and 1-on-1. Most clients choose the 3-month.",
  programs: [
    {
      name: "2-Month Plan",
      price: "$1,800",
      unit: "8 weeks · in person",
      desc: "A focused block to break the cycle, calm the driver of your pain, and build a real foundation.",
      points: [
        "A full hour, 1-on-1, every visit",
        "Same clinician each session",
        "Built on the four-phase method",
        "Superbill provided",
      ],
      cta: "Start the 2-Month Plan",
      to: "evaluation",
      featured: false,
    },
    {
      name: "3-Month Plan",
      price: "$2,550",
      unit: "12 weeks · in person",
      desc: "Our most-chosen runway — long enough to forge durable strength, not just calm symptoms.",
      points: [
        "Everything in the 2-Month Plan",
        "Dry needling & BFR included as indicated",
        "Strength & motor-control progression",
        "A movement re-screen built in",
      ],
      cta: "Start the 3-Month Plan",
      to: "evaluation",
      featured: true,
    },
    {
      name: "4-Month Program",
      price: "$3,280",
      unit: "16 weeks · in person",
      desc: "The full progression — from rehab all the way through to performance and return-to-sport.",
      points: [
        "Everything in the 3-Month Plan",
        "Performance & plyometric phase",
        "Sport-specific return-to-play work",
        "Priority scheduling",
      ],
      cta: "Start the 4-Month Program",
      to: "evaluation",
      featured: false,
    },
  ],

  // step two, path B — the remote alternative (application-gated, no upfront price)
  vault: {
    eyebrow: "Or train remotely",
    name: "The Founder’s Vault",
    line: "Not local, or prefer to train with Dr. Guzman from anywhere? The Founder’s Vault is our 3-month online program — by application only, with pay-in-full and payment-plan options shared once you’re a fit.",
    cta: "Apply for The Founder’s Vault",
    to: "vault-offer",
  },
};

// ------------------------------------------------------------------------ TEAM
// Real staff + real photos provided by the client.
export const TEAM = {
  eyebrow: "The Team",
  title: "The people behind The Vault.",
  members: [
    {
      name: "Dr. Juan Guzman",
      cred: "PT, CSCS · Founder",
      photo: "/img/juan.jpg",
      bio: "Juan built Inspire Health PT on a simple belief: you deserve more than fifteen rushed minutes and a rotating cast of aides. Every patient gets a full hour, one-on-one, with a doctor who remembers your name, your goals, and your last visit. He treats the cause, not just the symptom.",
      founder: true,
    },
    {
      name: "Freddy Mendoza",
      cred: "CSCS · Strength & Conditioning",
      photo: "/img/freddy.jpg",
      bio: "Freddy bridges rehab and performance — the strength work that turns “out of pain” into “better than before.” He owns the back half of the method, where recovery starts to look like training.",
    },
    {
      name: "Annie De Jesus",
      cred: "SLP · Speech-Language Pathologist",
      photo: "/img/annie.jpg",
      bio: "Annie rounds out the whole-person care model at The Vault, supporting clients whose recovery reaches beyond the musculoskeletal — because the standard here is the entire person, not a single joint.",
    },
  ],
};

// ----------------------------------------------------------------- TESTIMONIALS
// Real Google reviews from the client prototype. Lightly trimmed, attribution
// generalized. Shown WITH the results-vary disclaimer (FTC 2023).
export const TESTIMONIALS = {
  eyebrow: "What clients say",
  rating: "5.0",
  count: "72",
  items: [
    {
      quote:
        "I was skeptical — calcification in my rotator cuff, couldn’t even sleep for the pain. Juan worked through it and rebuilt my range of motion. Sixteen sessions later I move how I used to.",
      who: "Overhead athlete · Google review",
    },
    {
      quote:
        "I came in with a knee injury, barely able to walk. With Juan’s guidance I’m more well off than I’ve ever been. I don’t know where I’d be without his knowledge and ability.",
      who: "The runner · Google review",
    },
    {
      quote:
        "Came in with horrible wrist pain — we did some needle work and it made a real difference. Knowledgeable, patient, and he genuinely cares about your goals.",
      who: "Training through pain · Google review",
    },
    {
      quote:
        "Helped me work past a slipped disc and get back to full activity. He doesn’t just treat the symptom — he strengthens you so it doesn’t come back.",
      who: "Back pain · Google review",
    },
  ],
};

// ------------------------------------------------------------------------- FAQ
export const FAQ = {
  eyebrow: "Questions",
  title: "Good questions deserve straight answers.",
  items: [
    {
      q: "Do you take insurance?",
      a: "We’re an out-of-network, cash-pay clinic. We provide a detailed superbill you can submit to your insurer for possible out-of-network reimbursement. Coverage varies by plan, so we recommend checking your benefits.",
    },
    {
      q: "Do I need a referral to be seen?",
      a: "Florida allows direct access to physical therapy, so in most cases you can book an evaluation without a physician referral. Certain conditions or timeframes may require one, and we’ll guide you if so.",
    },
    {
      q: "Why is cash-pay worth it?",
      a: "You get a full hour of one-on-one time with the same clinician every visit, a plan built around your goals instead of insurance limits, and typically fewer total visits to reach them.",
    },
    {
      q: "What happens at my first visit?",
      a: "A complete movement and injury assessment, hands-on treatment the same day, and a clear, custom plan you’ll understand before you leave.",
    },
    {
      q: "What is “The Vault”?",
      a: "It’s our private space and our standard: one room, one therapist, one hour. A curated training boutique — art on the walls, an infrared sauna, no waiting room — designed to feel like anything but a clinic.",
    },
    {
      q: "Can I work with you remotely?",
      a: "Yes. The Founder’s Vault is our virtual program — train directly with Dr. Guzman from anywhere, with programming built around your goals. See the Founder’s Vault page for details.",
    },
    {
      q: "Where are you located?",
      a: "3257 NW 7th Ave Circle, Miami, FL 33127 — convenient to Wynwood, Edgewater, Midtown, and Brickell.",
    },
    {
      q: "How do I book?",
      a: "Reserve a time online in under a minute, or start with a free 15-minute call if you’re not sure yet. We’ll confirm your evaluation and send everything you need beforehand.",
    },
  ],
};

// ------------------------------------------------------------------ FACILITIES
export const FACILITIES = {
  hero: {
    kicker: "The Space",
    h1: "This is not a clinic.",
    lede: "No waiting room. No shared floor. No clock on the wall. The Vault is a private space built for one person at a time — the way recovery should feel.",
  },
  thesis:
    "Privacy is the product. When the room is yours alone, the hour is actually yours — no aides, no rotation, no audience. Everything here is designed around that single idea.",
  // TODO(client): real photos of each space. Elegant placeholders render until then.
  amenities: [
    {
      name: "The Infrared Sauna",
      body: "Heat that works deeper than it feels. Built into the recovery flow — wind down, draw down inflammation, and let the session settle before you head back out.",
      photo: "/img/facilities/sauna.jpg",
    },
    {
      name: "The Private Gym",
      body: "A full training boutique that’s yours for the hour. Real equipment, real loading, real performance work — not a corner of a crowded floor.",
      photo: "/img/facilities/gym.jpg",
    },
    {
      name: "The Curated Walls",
      body: "A rotating gallery of local artists turns the space into something worth being in. Recovery is an environment, and this one was chosen on purpose.",
      photo: "/img/facilities/lounge.jpg",
      link: "gallery",
    },
    {
      name: "The Treatment Suite",
      body: "Where the hands-on work happens — quiet, private, and unhurried. The table is the start of the session, never the whole of it.",
      photo: "/img/facilities/treatment.jpg",
    },
  ],
  walkthrough: {
    eyebrow: "A day in The Vault",
    title: "What one visit feels like.",
    steps: [
      {
        n: "01",
        title: "You arrive",
        body: "No front desk, no clipboard, no waiting room. You’re expected, and the space is ready for you.",
      },
      {
        n: "02",
        title: "Your hour begins",
        body: "One clinician, one plan, the full sixty minutes. Assessment, hands-on work, and loading — all in one room that’s only yours.",
      },
      {
        n: "03",
        title: "You recover",
        body: "Infrared sauna, a moment with the art, and a clear sense of what’s next. You leave understanding your body better than when you came in.",
      },
    ],
  },
  cta: {
    title: "Want to see it for yourself?",
    body: "Book an evaluation and experience The Vault firsthand.",
    label: "Book Your Evaluation",
  },
};

// --------------------------------------------------------------------- GALLERY
// Rotating local-artist gallery inside the clinic. Each artist shows for ~6 months.
//
// ┌─ HOW TO ROTATE THE EXHIBITION  (easy 3-step swap, no code knowledge needed) ─┐
// │ 1. Drop the new photos into  /public/img/gallery/                            │
// │ 2. Edit the `artists` array below — name, medium, bio, `feature`, `images`.  │
// │      • Set  feature: true  on exactly ONE artist (the spotlight).            │
// │      • Each image:  { src: '/img/gallery/FILE.jpg', ratio: 'tall'|'wide'|'square' } │
// │ 3. Update `season`, `current.title`, and `current.statement`.                │
// │ That's the whole rotation. No other files to touch.                          │
// └──────────────────────────────────────────────────────────────────────────────┘
export const GALLERY = {
  hero: {
    kicker: "The Gallery",
    h1: "The walls are part of the work.",
    lede: "A rotating exhibition of local Miami artists lives inside The Vault. The art changes; the intent doesn’t — to make the space you recover in worth being in.",
  },
  manifesto:
    "We believe environment is part of recovery. So instead of motivational posters and fluorescent light, The Vault holds a curated, rotating gallery — work chosen to be looked at, sat with, and protected. It’s the same instinct behind everything we do: things worth keeping deserve a vault.",

  season: "Now showing", // TODO(client): e.g. 'Summer 2026'
  current: {
    eyebrow: "Current Exhibition",
    title: "The Vault Collection", // TODO(client): real exhibition title
    statement:
      "This season the walls belong to Miami mixed-media artist Katy Hirschfeld — layered collage built from hundreds of cut fragments, each piece chosen for the room it lives in.",
  },

  // ── current artists (swap these to rotate the show) ──
  // Katy Hirschfeld is the sole featured artist this season (client direction
  // 2026-06-08). Bio is her own artist statement, verbatim.
  artists: [
    {
      name: "Katy Hirschfeld",
      medium: "Mixed-media collage",
      feature: true, // spotlight artist
      bio: "My collages are often influenced by my personal outlook and true life experiences. I share a fraction of my own little world, by promoting strength, knowledge, and self awareness to overcome social flux and challenges; learning from them through the art of mixed media. I like to express my playful side, never shunning the Basquiat beneath. Culled from the social consciousness and current events of today, each of my pieces features a different cultural comment viewed through the lens of my experiences. The simple overlapping of many small pieces, arranged in just the right way speaks volumes, touching on issues implicitly without being overbearing or sanctimonious. My work tends to stand as a viewer’s test, challenging what one sees versus what they feel in relation to the contemporary pits, progress and powers affecting us all.",
      images: [
        { src: "/img/gallery/katie-1.jpg", ratio: "tall" },
        { src: "/img/gallery/katie-4.jpg", ratio: "wide" },
        { src: "/img/gallery/katie-5.jpg", ratio: "square" },
        { src: "/img/gallery/katie-2.jpg", ratio: "tall" },
        { src: "/img/gallery/katie-3.jpg", ratio: "tall" },
      ],
    },
  ],

  applyCta: {
    title: "Are you a local artist?",
    body: "The Vault rotates new work each season. Tell us about yours.",
    label: "Start a free 15-minute call",
  },
};

// ----------------------------------------------------------------------- EBOOK
// Real $27 guide — "Shoulder Health & Freedom" (client-provided PDF, 12 pages).
// Delivered file lives at /public/shoulder-health-and-freedom.pdf
export const EBOOK = {
  eyebrow: "The Shoulder Guide",
  title: "Shoulder Health & Freedom",
  subtitle:
    "Understand what’s happening inside your shoulder. Move better. Get back to the life you’ve been missing.",
  price: "$27",
  cover: "Shoulder Health & Freedom",
  author: "By Dr. Juan Guzman, PT, CSCS",
  pdf: "/shoulder-health-and-freedom.pdf", // paid deliverable
  tagline:
    "Your body is the only piece of the operation you cannot replace. Insure it accordingly.",
  bullets: [
    "The 8 muscles that actually run your shoulder — and the one quietly driving your pain",
    "Why most shoulder pain is a movement problem, not a tissue problem",
    "The 10 daily habits our Miami athletes use to stay out of the clinic",
    "How to tell soreness (progress) from sharp pain (stop and get evaluated)",
  ],
  // table of contents = the value stack (real, from the guide)
  toc: [
    "Welcome — Why Your Shoulder Matters",
    "Anatomy — Meet the Team Inside Your Shoulder",
    "How Your Shoulder Actually Moves",
    "Movement Is the Medicine — 10 Rehab Tips",
    "Bonus: The 12-Day Shoulder Challenge",
    "Your Next Step",
  ],
  // BONUS — free with purchase. The 12-Day Shoulder Challenge + protocol videos.
  // TODO(client): confirm claim mechanism — IG DM (current) vs PTeverywhere CRM
  // auto-assign on email submit. Message drafted; awaiting client + API details.
  bonus: {
    eyebrow: "Bonus · included free",
    title: "The 12-Day Shoulder Challenge",
    lede: "12 movements. 12 days. Under 10 minutes each.",
    body: "One targeted shoulder movement delivered each day for 12 days — no gym, no equipment. Each builds on the last, so by Day 12 your shoulder moves differently.",
    points: [
      "One guided movement per day, 12 days straight",
      "Just 5–10 focused minutes — no equipment",
      "Each movement builds on the last",
      "Plus access to our shoulder protocol video library",
    ],
    claimLabel: "Included — delivered automatically",
    claim:
      "When you grab the guide, your 12-Day Shoulder Challenge is sent straight to your inbox — one guided movement a day, no manual step needed.",
    claimHref: null,
  },
  // anchored value framing
  valueLine:
    "Less than a tenth of a single private session — and it might save you several.",
  guarantee:
    "Instant download. If it’s not for you, email us within 7 days for a full refund.",
  checkout: {
    // TODO(client): live Stripe Checkout link / product. Mock checkout for demo.
    note: "Secure checkout · card, Apple Pay & Google Pay · instant download",
  },
  disclaimer:
    "This guide is for educational purposes only and is not medical advice, diagnosis, or treatment. Consult a licensed provider before starting any program.",
};

// --------------------------------------------------- THE FOUNDER'S VAULT (virtual)
export const VAULT_OFFER = {
  hero: {
    kicker: "Virtual Program · Train with the Founder",
    h1: "The Founder’s Vault",
    lede: "Dr. Juan Guzman’s private remote program. The same four-phase method that rebuilds Miami’s athletes — now built around you, from anywhere.",
    ctaPrimary: "Apply for The Founder’s Vault",
    ctaSecondary: "Watch how it works",
  },
  authorityBar: [
    "Doctor of Physical Therapy",
    "CSCS",
    "5.0 · 72 reviews",
    "Founder-led, 1-on-1",
  ],
  forWho: {
    eyebrow: "Who it’s for",
    title: "Built for the athlete who’s already tried everything.",
    intro:
      "This isn’t a generic exercise app. It’s a small, founder-led program — which means it isn’t for everyone.",
    fit: [
      "You’re an overhead athlete, Hyrox competitor, runner, or lifter with a nagging injury that won’t resolve.",
      "You’ve done the rushed-clinic route and want a real plan, not a printout.",
      "You can train consistently and want direct access to the person building your program.",
    ],
    notFit: [
      "You’re looking for the cheapest option.",
      "You want someone to do the work for you.",
      "You have an acute injury that needs in-person, hands-on care first.",
    ],
  },
  inside: {
    eyebrow: "What’s inside",
    title: "The method, rebuilt for remote.",
    steps: [
      {
        n: "01",
        title: "Full Remote Assessment",
        body: "A structured movement and history intake plus video screen — so your plan starts from your body, not a template.",
      },
      {
        n: "02",
        title: "Your Custom Program",
        body: "Built around the four-phase method and delivered through an app you’ll actually use. Updated as you progress.",
      },
      {
        n: "03",
        title: "Direct Founder Access",
        body: "Message Dr. Guzman directly, with regular check-ins to adjust load, technique, and the plan.",
      },
      {
        n: "04",
        title: "Performance Progression",
        body: "We don’t stop at “out of pain.” You progress to plyometrics and sport-specific demand — past baseline.",
      },
    ],
  },
  // What's included — clean inclusions list, no fabricated dollar values.
  included: {
    eyebrow: "What’s included",
    title: "Everything you need to do this right.",
    items: [
      "Full remote assessment & video movement screen",
      "Custom four-phase program, app-delivered & updated as you progress",
      "Direct founder messaging & regular check-ins",
      "The Shoulder Health & Freedom guide",
    ],
  },
  // Investment — application-gated (client direction 2026-06-08). 3-month online
  // program. Prices intentionally NOT shown on the page: qualified applicants are
  // walked through pay-in-full and payment-plan options on the application call.
  investment: {
    eyebrow: "The investment",
    title: "A serious, 3-month commitment.",
    body: "The Founder’s Vault is a founder-led, 3-month program — not a subscription app, and not for everyone. Because every program is built and coached personally, we keep it small and take clients by application. Pricing, with pay-in-full and payment-plan options, is shared the moment we confirm you’re a fit.",
    note: "Applying takes two minutes, and there’s no obligation.",
    cta: "Apply for The Founder’s Vault",
  },
  riskReversal: {
    title: "A fair promise.",
    // satisfaction/service guarantee — NOT a clinical outcome guarantee (compliance)
    body: "Complete your assessment and start your program. If the first two weeks aren’t the right fit, tell us and we’ll make it right — no hard feelings. We stand behind the work, never a promised outcome.",
  },
  faq: [
    {
      q: "How is this different from a workout app?",
      a: "Your program is built by a Doctor of Physical Therapy around your assessment and updated as you progress — with direct access to him, not a chatbot.",
    },
    {
      q: "Do I need equipment?",
      a: "We build around what you have. The more access you have to a gym, the more we can do — but the plan starts from your reality.",
    },
    {
      q: "Is this medical treatment?",
      a: "The Founder’s Vault is performance coaching and education, not a substitute for in-person diagnosis or hands-on care. If you need that first, we’ll tell you.",
    },
    {
      q: "What if I have an acute injury?",
      a: "Acute or undiagnosed injuries should be seen in person first. If you’re local, book an evaluation; if not, we’ll point you in the right direction.",
    },
  ],
};

// ------------------------------------------------------------------ THANK-YOUs
export const THANKYOU = {
  evaluation: {
    title: "Your evaluation is reserved.",
    body: "Check your inbox for confirmation and everything you need before your visit. We’re looking forward to meeting you at The Vault.",
    next: "While you wait, read Shoulder Health & Freedom.",
    nextTo: "ebook",
  },
  ebook: {
    title: "Your guide is on its way.",
    body: "Your copy of Shoulder Health & Freedom is ready below — plus your free 12-Day Shoulder Challenge lands in your inbox shortly.",
    next: "Ready to go deeper? Book your evaluation.",
    nextTo: "evaluation",
  },
  vault: {
    title: "Your application is in.",
    body: "Dr. Guzman’s team reviews every application personally. We’ll be in touch shortly about next steps for The Founder’s Vault.",
    next: "In the meantime, start with the shoulder guide.",
    nextTo: "ebook",
  },
};

// ------------------------------------------------------------------- COMPLIANCE
export const DISCLAIMERS = {
  results:
    "Individual results vary. Testimonials reflect individual experiences and are not a guarantee of outcome.",
  medical:
    "The content on this site is for general informational purposes and is not a substitute for professional medical advice, diagnosis, or treatment.",
  network:
    "Inspire Health PT is an out-of-network, cash-pay provider. A superbill is provided for possible reimbursement; coverage is not guaranteed and varies by plan.",
};
