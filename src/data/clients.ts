import { Client } from '../types'

export const clients: Client[] = [
  // Federal Clients
  { name: 'NASA', category: 'federal', featured: true },
  { name: 'Department of Defense', category: 'federal', featured: true },
  { name: 'U.S. Navy', category: 'federal', featured: true },
  { name: 'Missile Defense Agency', category: 'federal', featured: true },
  { name: 'Bureau of Indian Affairs', category: 'federal', featured: false },
  { name: 'International Trade Commission', category: 'federal', featured: false },
  { name: 'U.S. Air Force', category: 'federal', featured: false },

  // State and Local Government
  { name: 'State of Texas', category: 'state-local', featured: false },
  { name: 'North Texas Tollway Authority', category: 'state-local', featured: false },
  { name: 'State of New York', category: 'state-local', featured: false },

  // Commercial/Fortune 500
  { name: 'Lockheed Martin', category: 'commercial', featured: true },
  { name: 'Northrop Grumman', category: 'commercial', featured: true },
  { name: 'American Express', category: 'commercial', featured: true },
  { name: 'Jacobs Engineering Group', category: 'commercial', featured: false },
  { name: 'The College Board', category: 'commercial', featured: false },
  { name: 'Mattel, Inc.', category: 'commercial', featured: false },
  { name: 'Symantec Corporation', category: 'commercial', featured: false },
  { name: 'AdaptHealth', category: 'commercial', featured: false },
]

export const federalClients = clients.filter(c => c.category === 'federal')
export const stateLocalClients = clients.filter(c => c.category === 'state-local')
export const commercialClients = clients.filter(c => c.category === 'commercial')
export const featuredClients = clients.filter(c => c.featured)
