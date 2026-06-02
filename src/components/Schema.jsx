import { useEffect } from 'react'
import { CLINIC, FAQ, PRICING } from '../data.js'

// Injects JSON-LD for the active page. MedicalClinic root (inherits MedicalBusiness +
// LocalBusiness → Maps eligible) + Physician + Service + Product(ebook) + FAQPage +
// BreadcrumbList + VideoObject. See docs/SEO.md.
export default function Schema({ type = 'home' }) {
  useEffect(() => {
    const base = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: CLINIC.name,
      url: 'https://inspirehealthpt.com',
      telephone: CLINIC.phone,
      priceRange: '$$$',
      medicalSpecialty: 'PhysicalTherapy',
      address: { '@type': 'PostalAddress', streetAddress: '1200 Brickell Ave, Suite 400', addressLocality: 'Miami', addressRegion: 'FL', postalCode: '33131', addressCountry: 'US' },
      areaServed: ['Miami', 'Brickell', 'Coral Gables', 'Wynwood', 'Coconut Grove', 'Miami Beach'],
    }
    const graph = [base]

    if (type === 'home' || type === 'faq' || type === 'services') {
      graph.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })
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
