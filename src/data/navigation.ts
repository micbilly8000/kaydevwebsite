import { NavItem } from '../types'

export const navigationItems: NavItem[] = [
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Cybersecurity', path: '/services/cybersecurity' },
      { label: 'Cloud Security', path: '/services/cloud-security' },
      { label: 'Blockchain Security', path: '/services/blockchain-security' },
      { label: 'AI Automation Security', path: '/services/ai-automation-security' },
      { label: 'Temporary Staffing', path: '/services/temporary-staffing' },
    ],
  },
  {
    label: 'NAICS Codes',
    path: '/naics-codes',
  },
  {
    label: 'Client Roster',
    path: '/clients',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]
