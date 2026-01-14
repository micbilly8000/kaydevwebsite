import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { naicsCodes } from '@data/naicsCodes'
import { PageHeader } from '@components/shared/PageHeader'
import { Container } from '@components/shared/Container'
import { AnimatedSection } from '@components/shared/AnimatedSection'
import { Card } from '@components/shared/Card'
import { Badge } from '@components/shared/Badge'

export const NAICSCodes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const primaryCodes = naicsCodes.filter(c => c.category === 'primary')
  const secondaryCodes = naicsCodes.filter(c => c.category === 'secondary')

  const filteredPrimary = primaryCodes.filter(
    c =>
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredSecondary = secondaryCodes.filter(
    c =>
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Helmet>
        <title>NAICS Codes | KayDev Technology</title>
        <meta name="description" content="NAICS codes for cybersecurity, cloud security, AI automation, and staffing services." />
      </Helmet>

      <PageHeader
        title="NAICS Codes"
        description="Classification codes for KayDev Technology services"
      />

      <section className="py-20 bg-dark-400">
        <Container>
          {/* Search */}
          <AnimatedSection className="mb-12">
            <input
              type="text"
              placeholder="Search by code or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-dark-300 border border-dark-200 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500"
            />
          </AnimatedSection>

          {/* Primary Codes */}
          <AnimatedSection className="mb-16">
            <h2 className="heading-2 mb-8">Primary Service Codes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPrimary.map((code) => (
                <AnimatedSection key={code.code}>
                  <Card className="border-l-4 border-l-primary-500">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-3xl font-display font-bold text-primary-500">
                          {code.code}
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {code.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4">
                      {code.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {code.relatedServices.map((service) => (
                        <Link
                          key={service}
                          to={`/services/${service}`}
                          className="inline-block"
                        >
                          <Badge variant="primary" className="cursor-pointer hover:opacity-80 transition-opacity">
                            {service.replace('-', ' ')}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Secondary Codes */}
          <AnimatedSection>
            <h2 className="heading-2 mb-8">Related Service Codes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSecondary.map((code) => (
                <AnimatedSection key={code.code}>
                  <Card>
                    <div>
                      <div className="text-3xl font-display font-bold text-cyber-500 mb-2">
                        {code.code}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {code.title}
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4">
                      {code.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {code.relatedServices.map((service) => (
                        <Link
                          key={service}
                          to={`/services/${service}`}
                          className="inline-block"
                        >
                          <Badge variant="secondary" className="cursor-pointer hover:opacity-80 transition-opacity">
                            {service.replace('-', ' ')}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
