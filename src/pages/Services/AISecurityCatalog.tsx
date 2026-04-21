import React from 'react'
import { Helmet } from 'react-helmet-async'
import { PageHeader } from '@components/shared/PageHeader'
import { Container } from '@components/shared/Container'
import { AnimatedSection } from '@components/shared/AnimatedSection'
import { Card } from '@components/shared/Card'
import { Badge } from '@components/shared/Badge'
import {
  LuTriangleAlert,
  LuCircleCheckBig,
} from 'react-icons/lu'
import {
  aiSecurityServices,
  aiServiceTiers,
  businessCertifications,
  type AISecurityService,
} from '@data/aiSecurityServices'

const MAILTO_BASE = 'mailto:ai@kaydevtech.com'

const buildMailto = (subject: string) =>
  `${MAILTO_BASE}?subject=${encodeURIComponent(subject)}`

const ServiceCard: React.FC<{ service: AISecurityService }> = ({ service }) => {
  const href = service.requestMeeting
    ? buildMailto(`${service.name} — Meeting Request`)
    : buildMailto(`${service.name} — Inquiry`)

  return (
    <Card
      className={`h-full flex flex-col ${
        service.featured ? 'border-primary-500 shadow-primary-500/20' : ''
      }`}
    >
      {service.featured && (
        <div className="-mt-10 mb-4 flex justify-end">
          <Badge variant="primary">★ Most Popular</Badge>
        </div>
      )}

      <div className="text-primary-500 text-xs font-bold uppercase tracking-wider mb-2">
        {service.tag}
      </div>

      <h3 className="heading-3 mb-2">{service.name}</h3>

      <div className="mb-1">
        {service.requestMeeting ? (
          <span className="text-xl font-bold text-primary-500">
            {service.price}
          </span>
        ) : (
          <>
            <span className="text-3xl font-extrabold text-white">
              {service.price}
            </span>
            {service.priceSuffix && (
              <span className="text-lg text-neutral-400 font-medium ml-1">
                {service.priceSuffix}
              </span>
            )}
          </>
        )}
      </div>
      <div className="text-xs text-neutral-500 mb-4">{service.priceNote}</div>

      <div className="flex flex-wrap gap-3 mb-4 text-xs text-neutral-400">
        {service.meta.map((m) => (
          <span key={m} className="inline-flex items-center">
            <span className="text-primary-500 mr-1.5">●</span>
            {m}
          </span>
        ))}
      </div>

      <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-2 mb-5 flex-grow">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start text-sm text-neutral-300">
            <LuCircleCheckBig
              size={16}
              className="text-primary-500 flex-shrink-0 mt-0.5 mr-2"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="bg-dark-400/60 border-l-2 border-primary-500 rounded-r-md p-3 mb-5 text-xs">
        <div className="text-primary-500 font-bold uppercase tracking-wide text-[10px] mb-1">
          Implementation Options
        </div>
        <div className="text-neutral-200 font-semibold mb-1">
          {service.implementation.platforms}
        </div>
        <div className="text-neutral-400 leading-relaxed">
          {service.implementation.description}
        </div>
      </div>

      <a
        href={href}
        className="block text-center bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors duration-200 text-sm"
      >
        {service.ctaLabel}
      </a>
    </Card>
  )
}

const TierSection: React.FC<{
  tierId: string
  altBg?: boolean
}> = ({ tierId, altBg = false }) => {
  const tier = aiServiceTiers.find((t) => t.id === tierId)!
  const services = aiSecurityServices.filter((s) => s.tier === tierId)

  return (
    <section className={`py-16 lg:py-20 ${altBg ? 'bg-dark-300' : 'bg-dark-400'}`}>
      <Container>
        <AnimatedSection className="max-w-3xl mx-auto mb-12 text-center">
          <div className="text-primary-500 text-xs font-bold uppercase tracking-widest mb-3">
            {tier.eyebrow}
          </div>
          <h2 className="heading-2 mb-4">{tier.title}</h2>
          <p className="body-text text-neutral-300">{tier.subtitle}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <AnimatedSection key={s.id} className="h-full">
              <ServiceCard service={s} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}

export const AISecurityCatalog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Security &amp; Governance Services | KayDev Technology</title>
        <meta
          name="description"
          content="Vendor-neutral AI security assessments and flexible remediation built on NIST AI RMF. Services for professional services firms and mid-market companies. Certified Native-Owned, SDVOSB, MBE, SBE, DBE."
        />
      </Helmet>

      <PageHeader
        title="AI Security & Governance Services"
        description="Vendor-neutral assessments. Flexible remediation. NIST AI RMF-aligned methodology built for professional services firms and mid-market companies."
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'AI Security & Governance' },
        ]}
      />

      {/* Hero tagline + certifications */}
      <section className="bg-dark-400 pt-10 pb-6">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="primary">NIST AI RMF-aligned</Badge>
              <Badge variant="secondary">Vendor-neutral assessments</Badge>
              <Badge variant="primary">Independent consultancy</Badge>
              <Badge variant="secondary">Multi-platform experience</Badge>
              <Badge variant="primary">CMMC Level 2-ready</Badge>
            </div>

            <div className="flex flex-wrap gap-2 pt-5 border-t border-dark-200">
              {businessCertifications.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-1.5 bg-primary-500/10 border border-primary-500/60 text-primary-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  {c.name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Independence banner */}
      <section className="bg-dark-400 pt-2 pb-10">
        <Container>
          <AnimatedSection>
            <div className="bg-warning/10 border border-warning/50 rounded-lg p-4 text-sm text-neutral-300 text-center">
              <LuTriangleAlert className="inline mr-2 text-warning" size={16} />
              <strong className="text-warning">Independent Consultancy Notice:</strong>{' '}
              KayDev Technology is not an authorized reseller, partner, or affiliate
              of Palo Alto Networks, Microsoft, Zscaler, Fortinet, CrowdStrike, Splunk,
              Anthropic, OpenAI, or any other vendor referenced on this page. Product
              names are used solely to describe technologies our consultants have
              experience with. All trademarks are property of their respective owners.
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Tier sections */}
      <TierSection tierId="tier1" altBg={false} />
      <TierSection tierId="tier2" altBg={true} />
      <TierSection tierId="tier3" altBg={false} />
      <TierSection tierId="tier4" altBg={true} />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-dark-400 to-dark-500">
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="heading-1 mb-4">Stop Leaking. Start Deploying.</h2>
            <p className="body-text text-neutral-200 mb-8">
              Book a free 30-minute discovery call. We'll tell you exactly which
              assessment fits your firm, give you a fixed fee, and have you secured in
              under 30 days. Certified Native-Owned, SDVOSB, MBE, SBE, and DBE.
            </p>
            <a
              href={buildMailto('AI Assessment Discovery Call')}
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg px-10 py-4 text-lg transition-colors duration-200 shadow-xl shadow-primary-500/30"
            >
              Book Discovery Call
            </a>
          </AnimatedSection>
        </Container>
      </section>

      {/* Legal notice */}
      <section className="py-10 bg-dark-500 border-t border-dark-200">
        <Container>
          <p className="text-xs text-neutral-500 leading-relaxed max-w-5xl mx-auto">
            <strong className="text-neutral-300">
              Independence &amp; Trademark Notice:
            </strong>{' '}
            KayDev Technology, LLC is an independent consultancy. We are <strong>not</strong>{' '}
            an authorized reseller, partner, affiliate, or representative of Palo Alto
            Networks, Microsoft, Zscaler, Fortinet, CrowdStrike, Splunk, Netskope,
            Anthropic, OpenAI, Google, or any other vendor referenced on this page.
            All product names, logos, and trademarks — including but not limited to
            Palo Alto Networks, AIRS, CASB-X, Prisma, XSIAM, Cortex, Microsoft
            Defender, Purview, Sentinel, Entra, Zscaler, CrowdStrike Falcon, Splunk,
            Fortinet, Netskope, Claude, ChatGPT, and Gemini — are the property of
            their respective owners. References to these products describe
            technologies that KayDev consultants have experience implementing,
            configuring, or advising on; they do not imply endorsement, certification,
            authorization, or affiliation. Diverse-supplier certifications
            (Native-Owned, SDVOSB, MBE, SBE, DBE) are verified through
            NMSDC, US DOT, SBA VetCert, and applicable state/municipal registries.
          </p>
        </Container>
      </section>
    </>
  )
}
