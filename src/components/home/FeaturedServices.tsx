import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'
import { Card } from '../shared/Card'
import {
  LuArrowRight,
  LuBrain,
  LuUsers,
  LuShieldCheck,
} from 'react-icons/lu'

interface FlagshipService {
  eyebrow: string
  icon: React.ElementType
  accent: 'primary' | 'cyber'
  title: string
  description: string
  bullets: string[]
  ctaText: string
  path: string
}

const flagshipServices: FlagshipService[] = [
  {
    eyebrow: 'AI Security & Governance',
    icon: LuBrain,
    accent: 'primary',
    title: 'Secure Your AI Deployment',
    description:
      'Vendor-neutral, NIST AI RMF-aligned assessments and productized remediation — from Shadow AI Discovery to enterprise-managed AI security. Built for firms that cannot afford a leak.',
    bullets: [
      'NIST AI RMF-aligned governance framework',
      'Shadow AI discovery across SaaS & browsers',
      'CMMC Level 2-ready for federal contractors',
      '12 productized offerings, fixed-fee scoping',
    ],
    ctaText: 'Explore AI Catalog',
    path: '/services/ai-security-catalog',
  },
  {
    eyebrow: 'Cleared Cybersecurity Staffing',
    icon: LuUsers,
    accent: 'cyber',
    title: 'Staff Your Security Mission',
    description:
      'DoD-cleared cybersecurity, cloud, and network engineers ready to deploy on federal contracts and commercial programs. Rapid onboarding for urgent mission needs.',
    bullets: [
      'TS/SCI, Top Secret, and Secret-cleared talent',
      'CISOs, SOC analysts, and security architects',
      'AWS / Azure / GCP cloud security specialists',
      'Short-term, long-term, and contract-to-hire',
    ],
    ctaText: 'Request Cleared Talent',
    path: '/services/temporary-staffing',
  },
]

const accentClasses = {
  primary: {
    iconBg: 'from-primary-500 to-primary-600',
    border: 'hover:border-primary-500',
    pill: 'bg-primary-500/20 text-primary-500',
    check: 'text-primary-500',
    cta: 'text-primary-500',
  },
  cyber: {
    iconBg: 'from-cyber-500 to-cyber-600',
    border: 'hover:border-cyber-500',
    pill: 'bg-cyber-500/20 text-cyber-500',
    check: 'text-cyber-500',
    cta: 'text-cyber-500',
  },
}

export const FeaturedServices: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-300 via-dark-400 to-dark-300">
      <Container>
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <LuShieldCheck className="text-primary-500" size={24} />
            <span className="text-primary-500 font-semibold uppercase tracking-widest text-xs">
              Two Flagship Offerings
            </span>
          </div>
          <h2 className="heading-2 mb-4">Built for Government &amp; Commercial</h2>
          <p className="body-text text-lg">
            Whether you are standing up an AI governance program or filling a cleared
            role on a federal contract, KayDev delivers the expertise agencies and
            enterprises demand.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagshipServices.map((service) => {
            const Icon = service.icon
            const accent = accentClasses[service.accent]
            return (
              <AnimatedSection key={service.path} animation="slide-right">
                <Link to={service.path}>
                  <Card className={`h-full ${accent.border} hover:shadow-2xl group cursor-pointer`}>
                    <div className="mb-6 inline-flex">
                      <div className={`bg-gradient-to-br ${accent.iconBg} p-4 rounded-lg group-hover:scale-110 transition-transform`}>
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${accent.pill} text-xs font-semibold uppercase tracking-wider`}>
                        {service.eyebrow}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.bullets.map((bullet, i) => (
                        <div key={i} className="flex gap-2 items-start">
                          <span className={`${accent.check} mt-1 flex-shrink-0`}>✓</span>
                          <span className="text-sm text-neutral-300">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`flex items-center ${accent.cta} font-semibold group/cta`}>
                      {service.ctaText}
                      <LuArrowRight
                        size={16}
                        className="ml-2 group-hover/cta:translate-x-1 transition-transform"
                      />
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
