import { NAICSCode } from '../types'

export const naicsCodes: NAICSCode[] = [
  {
    code: '541512',
    title: 'Computer Systems Design Services',
    description: 'Custom computer programming, systems design and implementation services. Includes design of computer systems and networks, as well as software development and integration.',
    category: 'primary',
    relatedServices: ['cybersecurity', 'cloud-security', 'ai-automation-security'],
  },
  {
    code: '541513',
    title: 'Computer Facilities Management Services',
    description: 'On-site management and operation of computer facilities and data centers for other organizations. Includes operation of computer hardware and software systems for clients.',
    category: 'primary',
    relatedServices: ['cloud-security', 'cybersecurity'],
  },
  {
    code: '541519',
    title: 'Other Computer Related Services',
    description: 'Computer-related services not covered elsewhere. Includes computer disaster recovery services, software installation services, and cybersecurity services.',
    category: 'primary',
    relatedServices: ['cybersecurity', 'blockchain-security', 'cloud-security'],
  },
  {
    code: '561320',
    title: 'Temporary Help Services',
    description: 'Supplying workers to clients\' businesses for temporary assignments. Includes contract staffing and temporary placement of workers.',
    category: 'primary',
    relatedServices: ['temporary-staffing'],
  },
  {
    code: '518210',
    title: 'Data Processing, Hosting, and Related Services',
    description: 'Data processing services, web hosting, application hosting, and cloud computing services. Includes data center operations and managed hosting.',
    category: 'secondary',
    relatedServices: ['cloud-security', 'cybersecurity'],
  },
  {
    code: '541715',
    title: 'Research and Development in Physical, Engineering, and Life Sciences',
    description: 'Conduct of research and experimental activities in physical and engineering sciences, as well as life sciences research. Includes AI/ML research and blockchain technology development.',
    category: 'secondary',
    relatedServices: ['ai-automation-security', 'blockchain-security'],
  },
  {
    code: '561311',
    title: 'Employment Placement Agencies',
    description: 'Services to match job seekers with employment opportunities. Includes temporary and permanent placement of workers in various industries.',
    category: 'secondary',
    relatedServices: ['temporary-staffing'],
  },
  {
    code: '541690',
    title: 'Other Scientific and Technical Consulting Services',
    description: 'Scientific and technical consulting services not included in other categories. Includes cybersecurity consulting and technical advisory services.',
    category: 'secondary',
    relatedServices: ['cybersecurity', 'cloud-security'],
  },
  {
    code: '541211',
    title: 'Offices of Certified Public Accountants',
    description: 'Services of certified public accountants including audit, tax, and management advisory services.',
    category: 'secondary',
    relatedServices: ['cybersecurity'],
  },
  {
    code: '541380',
    title: 'Testing Laboratories',
    description: 'Physical, engineering, and other analytical testing and inspection services. Includes security testing and assessment services.',
    category: 'secondary',
    relatedServices: ['cybersecurity', 'cloud-security', 'blockchain-security'],
  },
]
