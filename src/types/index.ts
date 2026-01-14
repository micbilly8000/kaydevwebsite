export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Service {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  fullDescription: string
  icon: string
  heroImage: string
  features: Feature[]
  benefits: string[]
  naicsCodes: string[]
  cta: {
    title: string
    description: string
  }
}

export interface NAICSCode {
  code: string
  title: string
  description: string
  category: 'primary' | 'secondary'
  relatedServices: string[]
}

export interface Client {
  name: string
  logo?: string
  category: 'federal' | 'state-local' | 'commercial'
  featured: boolean
}

export interface Stat {
  value: string
  label: string
  description?: string
}

export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}
