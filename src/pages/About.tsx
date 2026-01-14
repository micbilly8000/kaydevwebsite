import React from 'react'
import { Helmet } from 'react-helmet-async'
import { PageHeader } from '@components/shared/PageHeader'
import { Container } from '@components/shared/Container'
import { AnimatedSection } from '@components/shared/AnimatedSection'
import { Card } from '@components/shared/Card'
import { LuAward, LuShield, LuUsers, LuTarget } from 'react-icons/lu'

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About KayDev Technology | Enterprise Cybersecurity</title>
        <meta name="description" content="Learn about KayDev Technology's mission, values, and expertise in enterprise cybersecurity." />
      </Helmet>

      <PageHeader
        title="About KayDev Technology"
        description="Enterprise security solutions for the world's most critical organizations"
      />

      {/* Company Overview */}
      <section className="py-20 bg-dark-400">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <p className="body-text text-lg leading-relaxed mb-6">
                To protect critical infrastructure and enterprise systems through innovative, comprehensive cybersecurity solutions that exceed the highest industry standards.
              </p>
              <p className="body-text leading-relaxed text-neutral-400">
                KayDev Technology partners with government agencies and Fortune 500 companies to deliver enterprise-grade security that stops threats before they impact operations. With over 25 years of collective experience, our team understands the unique challenges of mission-critical environments.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '50+', description: 'Enterprise Clients' },
                  { label: '95%', description: 'Threat Reduction' },
                  { label: '24/7', description: 'Monitoring' },
                  { label: '<15min', description: 'Response Time' },
                ].map((stat, i) => (
                  <Card key={i} className="text-center">
                    <div className="text-3xl font-display font-bold text-primary-500 mb-2">
                      {stat.label}
                    </div>
                    <p className="text-neutral-400 text-sm">{stat.description}</p>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-dark-300">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Core Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: LuShield,
                title: 'Security First',
                description: 'Every decision prioritizes protecting our clients\' critical assets',
              },
              {
                icon: LuTarget,
                title: 'Excellence',
                description: 'We maintain the highest standards in all we do',
              },
              {
                icon: LuUsers,
                title: 'Partnership',
                description: 'We work closely with clients as trusted security advisors',
              },
              {
                icon: LuAward,
                title: 'Innovation',
                description: 'Constantly evolving to address emerging threats',
              },
            ].map((value, i) => (
              <AnimatedSection key={i}>
                <Card>
                  <div className="mb-4 inline-flex">
                    <div className="bg-primary-500 p-3 rounded-lg">
                      <value.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-dark-400">
        <Container>
          <AnimatedSection className="max-w-4xl">
            <h2 className="heading-2 mb-8">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Government & Federal Compliance',
                  items: [
                    'NIST 800-53 & 800-171 Compliance',
                    'FedRAMP Authorization',
                    'DoD Security Requirements',
                    'FISMA Compliance',
                  ],
                },
                {
                  title: 'Enterprise Security',
                  items: [
                    'Threat Detection & Response',
                    'Security Architecture',
                    'Incident Response',
                    'Penetration Testing',
                  ],
                },
                {
                  title: 'Cloud & Modern Infrastructure',
                  items: [
                    'AWS/Azure/GCP Security',
                    'Container Security',
                    'Zero-Trust Architecture',
                    'Cloud Compliance',
                  ],
                },
                {
                  title: 'Emerging Technologies',
                  items: [
                    'AI/ML Security',
                    'Blockchain Security',
                    'DeFi Protocol Audits',
                    'Web3 Security',
                  ],
                },
              ].map((expertise, i) => (
                <AnimatedSection key={i}>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white mb-4">
                      {expertise.title}
                    </h3>
                    <ul className="space-y-2">
                      {expertise.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-neutral-300">
                          <span className="inline-block w-2 h-2 bg-primary-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
