import { Service } from '../types'

export const services: Service[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    tagline: 'Enterprise-Grade Protection for Modern Threats',
    description: 'Comprehensive cybersecurity solutions designed to protect critical infrastructure.',
    fullDescription: 'Our cybersecurity services provide enterprise-grade protection against advanced persistent threats, ransomware, and cyber attacks. We deliver 24/7 threat detection and rapid incident response.',
    icon: 'Shield',
    heroImage: '/assets/images/cybersecurity-hero.jpg',
    features: [
      {
        title: 'Threat Detection & Response',
        description: '24/7 SIEM monitoring and rapid incident response to threats',
        icon: 'AlertTriangle',
      },
      {
        title: 'Compliance & Certifications',
        description: 'NIST, FedRAMP, ISO 27001, and SOC 2 compliance expertise',
        icon: 'CheckCircle',
      },
      {
        title: 'Penetration Testing',
        description: 'Comprehensive security assessments and vulnerability testing',
        icon: 'Zap',
      },
      {
        title: 'Security Operations Center',
        description: 'Managed security services and 24/7 monitoring',
        icon: 'Eye',
      },
      {
        title: 'Incident Response',
        description: 'Rapid response and recovery from security incidents',
        icon: 'AlertTriangle',
      },
      {
        title: 'Security Consulting',
        description: 'Strategic security architecture and governance guidance',
        icon: 'Briefcase',
      },
    ],
    benefits: [
      'Reduce security incidents by 95%',
      'Achieve federal compliance (NIST 800-53)',
      'Average response time under 15 minutes',
      'Protect critical infrastructure 24/7',
      'Industry-leading threat detection',
    ],
    naicsCodes: ['541512', '541519', '541690'],
    cta: {
      title: 'Secure Your Infrastructure',
      description: 'Contact us for a comprehensive security assessment',
    },
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    slug: 'cloud-security',
    tagline: 'Multi-Cloud Protection & Zero-Trust Architecture',
    description: 'Secure your AWS, Azure, and GCP environments with advanced cloud security solutions.',
    fullDescription: 'We provide comprehensive cloud security solutions covering AWS, Azure, and GCP environments. Our expertise includes CSPM, CWPP, and zero-trust architecture implementation.',
    icon: 'Cloud',
    heroImage: '/assets/images/cloud-security-hero.jpg',
    features: [
      {
        title: 'Cloud Security Posture Management',
        description: 'Continuous monitoring and compliance for AWS, Azure, GCP',
        icon: 'Shield',
      },
      {
        title: 'Container Security',
        description: 'Kubernetes and Docker container security and orchestration',
        icon: 'Package',
      },
      {
        title: 'Zero-Trust Architecture',
        description: 'Implement zero-trust security models for cloud environments',
        icon: 'Lock',
      },
      {
        title: 'Cloud Access Security Broker',
        description: 'Monitor and control cloud application access',
        icon: 'Eye',
      },
      {
        title: 'Data Protection',
        description: 'Encryption, data loss prevention, and access controls',
        icon: 'Database',
      },
      {
        title: 'Compliance Management',
        description: 'Cloud compliance for HIPAA, PCI-DSS, SOC 2',
        icon: 'CheckCircle',
      },
    ],
    benefits: [
      'Multi-cloud expertise across AWS, Azure, GCP',
      'Real-time threat detection in cloud environments',
      'Automated compliance monitoring and reporting',
      'Reduce cloud misconfigurations by 90%',
      'Optimize cloud security costs',
    ],
    naicsCodes: ['541512', '541513', '518210'],
    cta: {
      title: 'Optimize Your Cloud Security',
      description: 'Get a cloud security assessment for your infrastructure',
    },
  },
  {
    id: 'blockchain-security',
    title: 'Blockchain Security',
    slug: 'blockchain-security',
    tagline: 'Smart Contract Audits & DeFi Security Solutions',
    description: 'Comprehensive blockchain and DeFi security services for Web3 projects.',
    fullDescription: 'We provide comprehensive blockchain security services including smart contract audits, DeFi protocol security, and crypto asset protection.',
    icon: 'Link',
    heroImage: '/assets/images/blockchain-security-hero.jpg',
    features: [
      {
        title: 'Smart Contract Audits',
        description: 'Comprehensive code review and vulnerability assessment',
        icon: 'CheckCircle',
      },
      {
        title: 'DeFi Protocol Security',
        description: 'Security assessment for decentralized finance protocols',
        icon: 'TrendingUp',
      },
      {
        title: 'Crypto Custody Solutions',
        description: 'Secure management of digital assets and wallets',
        icon: 'Lock',
      },
      {
        title: 'Consensus Security',
        description: 'Blockchain consensus mechanism analysis and optimization',
        icon: 'Network',
      },
      {
        title: 'Vulnerability Assessment',
        description: 'Identify and remediate blockchain vulnerabilities',
        icon: 'AlertTriangle',
      },
      {
        title: 'Pre-Launch Testing',
        description: 'Comprehensive security testing before mainnet deployment',
        icon: 'Zap',
      },
    ],
    benefits: [
      'Pre-launch security audits before token launch',
      'Ongoing security monitoring for deployed contracts',
      'Industry-leading smart contract expertise',
      'Protect against DeFi exploits and rug pulls',
      'Compliance with Web3 regulations',
    ],
    naicsCodes: ['541512', '541519', '541715'],
    cta: {
      title: 'Secure Your Blockchain Project',
      description: 'Schedule a smart contract security audit',
    },
  },
  {
    id: 'ai-automation-security',
    title: 'AI Automation Security',
    slug: 'ai-automation-security',
    tagline: 'ML Model Security & AI Governance Solutions',
    description: 'Secure your AI/ML pipelines and implement robust AI governance.',
    fullDescription: 'We provide comprehensive AI security services covering ML model protection, adversarial attack prevention, and AI ethics compliance.',
    icon: 'Brain',
    heroImage: '/assets/images/ai-security-hero.jpg',
    features: [
      {
        title: 'ML Model Validation',
        description: 'Secure model development and validation processes',
        icon: 'CheckCircle',
      },
      {
        title: 'Adversarial Attack Protection',
        description: 'Defend against adversarial examples and model evasion',
        icon: 'Shield',
      },
      {
        title: 'Data Privacy & Protection',
        description: 'Privacy-preserving ML and differential privacy implementation',
        icon: 'Lock',
      },
      {
        title: 'AI Governance Framework',
        description: 'Responsible AI guidelines and compliance framework',
        icon: 'Briefcase',
      },
      {
        title: 'Model Monitoring',
        description: 'Continuous monitoring for model drift and anomalies',
        icon: 'Eye',
      },
      {
        title: 'Bias & Fairness Testing',
        description: 'Detect and mitigate bias in AI/ML models',
        icon: 'BarChart3',
      },
    ],
    benefits: [
      'Secure AI/ML pipeline development',
      'Detect and prevent adversarial attacks',
      'Implement responsible AI practices',
      'Comply with emerging AI regulations',
      'Reduce AI model vulnerabilities',
    ],
    naicsCodes: ['541512', '541715'],
    cta: {
      title: 'Secure Your AI Infrastructure',
      description: 'Get an AI security and governance assessment',
    },
  },
  {
    id: 'temporary-staffing',
    title: 'Temporary Staffing',
    slug: 'temporary-staffing',
    tagline: 'Cleared Security Professionals for Short-Term Needs',
    description: 'Access to DoD-cleared cybersecurity experts and staffing solutions.',
    fullDescription: 'We provide temporary staffing with security-cleared personnel for cybersecurity, cloud security, and network engineering roles. Our team includes cleared professionals for government and commercial projects.',
    icon: 'Users',
    heroImage: '/assets/images/staffing-hero.jpg',
    features: [
      {
        title: 'DoD Security Clearances',
        description: 'Security-cleared personnel (TS/SCI, Top Secret, Secret)',
        icon: 'Shield',
      },
      {
        title: 'Cybersecurity Experts',
        description: 'Experienced CISO, SecurityArchitects, and SOC analysts',
        icon: 'Zap',
      },
      {
        title: 'Cloud Engineers',
        description: 'AWS, Azure, GCP certified cloud security specialists',
        icon: 'Cloud',
      },
      {
        title: 'Network Engineers',
        description: 'Palo Alto, Cisco, and network security specialists',
        icon: 'Network',
      },
      {
        title: 'Rapid Deployment',
        description: 'Quick onboarding for urgent staffing needs',
        icon: 'Zap',
      },
      {
        title: 'Flexible Contracts',
        description: 'Short-term, long-term, and contract-to-hire options',
        icon: 'Briefcase',
      },
    ],
    benefits: [
      'Access to DoD security-cleared professionals',
      'Rapid deployment for urgent needs',
      'Vetted experts with proven experience',
      'Flexible contract terms and duration',
      'No recruiting overhead or hiring costs',
    ],
    naicsCodes: ['561320', '561311'],
    cta: {
      title: 'Staff Your Security Team',
      description: 'Request cleared personnel for your project',
    },
  },
]
