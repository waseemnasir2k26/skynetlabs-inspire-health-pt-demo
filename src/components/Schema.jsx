import { useEffect } from 'react'
import { CLINIC, FAQ, TEAM } from '../data.js'

// Injects JSON-LD for the active page. MedicalClinic root (inherits MedicalBusiness +
// LocalBusiness → Maps eligible) + Physician + FAQPage + Product(ebook). See docs/SEO.md.
// TODO(client): confirm public domain, phone, and geo before launch.
export default function Schema({ type = 'home' }) {
  useEffect(() => {
    const base = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: `${CLINIC.name} · ${CLINIC.sub}`,
      url: 'https://inspirehealthpt.com',
      priceRange: '$$$',
      medicalSpecialty: 'PhysicalTherapy',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3257 NW 7th Ave Circle',
        addressLocality: 'Miami',
        addressRegion: 'FL',
        postalCode: '33127',
        addressCountry: 'US',
      },
      areaServed: ['Miami', 'Wynwood', 'Edgewater', 'Midtown', 'Brickell'],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: CLINIC.rating, reviewCount: CLINIC.reviewCount },
    }
    if (CLINIC.phone) base.telephone = CLINIC.phone

    const graph = [base]

    // founder
    const founder = TEAM.members.find((m) => m.founder)
    if (founder) {
      graph.push({ '@context': 'https://schema.org', '@type': 'Physician', name: founder.name, medicalSpecialty: 'PhysicalTherapy', worksFor: { '@type': 'MedicalClinic', name: CLINIC.name } })
    }

    if (type === 'home' || type === 'faq' || type === 'services') {
      graph.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })
    }
    if (type === 'ebook') {
      graph.push({ '@context': 'https://schema.org', '@type': 'Product', name: 'The Pain-Free Performance Playbook', description: 'A digital movement & recovery guide from Inspire Health PT.', brand: { '@type': 'Brand', name: CLINIC.name }, offers: { '@type': 'Offer', price: '19.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' } })
    }

    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = 'page-schema'
    el.textContent = JSON.stringify(graph.length === 1 ? graph[0] : graph)
    document.getElementById('page-schema')?.remove()
    document.head.appendChild(el)
    return () => document.getElementById('page-schema')?.remove()
  }, [type])
  return null
}
