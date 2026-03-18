import { SITE_CONFIG } from '@/lib/constants'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo-icon.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_CONFIG.telephone,
    contactType: 'customer service',
    availableLanguage: ['en'],
  },
  sameAs: [
    SITE_CONFIG.socials.whatsapp,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.zip,
    addressCountry: SITE_CONFIG.address.country,
  },
  medicalSpecialty: 'Optometry',
}

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')
      }}
    />
  )
}
