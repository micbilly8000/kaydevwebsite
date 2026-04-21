import React from 'react'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'
import {
  LuLandmark,
  LuBuilding2,
  LuShieldCheck,
  LuClock,
} from 'react-icons/lu'

const credentials = [
  {
    icon: LuLandmark,
    label: 'Federal-Ready',
    detail: 'NIST 800-53 · 800-171 · FedRAMP · CMMC L2',
  },
  {
    icon: LuShieldCheck,
    label: 'AI Governance',
    detail: 'NIST AI RMF · ISO 42001 · EU AI Act',
  },
  {
    icon: LuBuilding2,
    label: 'Fortune 500',
    detail: 'SOC 2 · ISO 27001 · HIPAA · PCI-DSS',
  },
  {
    icon: LuClock,
    label: '24/7 Operations',
    detail: '<15 min response · 95% threat reduction',
  },
]

const stats = [
  { value: '50+', label: 'Enterprise Clients' },
  { value: '25+', label: 'Years Experience' },
  { value: '24/7', label: 'Monitoring' },
  { value: '6', label: 'Diverse Certs' },
]

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-16 bg-dark-400 border-y border-dark-200">
      <Container>
        <AnimatedSection className="text-center mb-12 max-w-3xl mx-auto">
          <div className="text-primary-500 text-xs font-bold uppercase tracking-widest mb-3">
            Why Government &amp; Fortune 500 Trust KayDev
          </div>
          <h2 className="heading-2 mb-4">Credentialed. Cleared. Independent.</h2>
          <p className="body-text text-neutral-300">
            Framework-led methodology, security-cleared practitioners, and
            vendor-neutral guidance — the combination mission-critical programs
            require.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {credentials.map((c) => {
            const Icon = c.icon
            return (
              <AnimatedSection key={c.label}>
                <div className="bg-dark-300 border border-dark-200 rounded-lg p-5 h-full hover:border-primary-500/60 transition-colors">
                  <Icon size={28} className="text-primary-500 mb-3" />
                  <div className="text-white font-bold text-sm mb-1">{c.label}</div>
                  <div className="text-xs text-neutral-400 leading-relaxed">
                    {c.detail}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center py-5 px-4 rounded-lg bg-gradient-to-br from-primary-500/10 via-dark-300 to-dark-400 border border-primary-500/30"
              >
                <div className="text-3xl md:text-4xl font-display font-extrabold text-primary-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
