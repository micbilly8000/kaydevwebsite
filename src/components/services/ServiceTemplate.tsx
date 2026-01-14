import React from 'react'
import { Link } from 'react-router-dom'
import { Service, Feature } from '../../types'
import { PageHeader } from '../shared/PageHeader'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'
import { Card } from '../shared/Card'
import { Button } from '../shared/Button'
import { Badge } from '../shared/Badge'
import { Icon } from '../shared/Icon'
import { naicsCodes } from '@data/naicsCodes'
import { LuArrowRight } from 'react-icons/lu'

interface ServiceTemplateProps {
  service: Service
}

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  service,
}) => {
  const relatedNAICS = naicsCodes.filter((code) =>
    service.naicsCodes.includes(code.code)
  )

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.tagline}
      />

      {/* Overview Section */}
      <section className="py-20 bg-dark-400">
        <Container>
          <AnimatedSection className="max-w-4xl">
            <h2 className="heading-2 mb-6">Overview</h2>
            <p className="body-text text-lg leading-relaxed mb-8">
              {service.fullDescription}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-300">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-2 mb-4">Key Features</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature: Feature, index: number) => (
              <AnimatedSection key={index}>
                <Card>
                  <div className="mb-4 inline-flex">
                    <div className="bg-primary-500 p-3 rounded-lg">
                      <Icon
                        name={feature.icon}
                        size={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {feature.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-400">
        <Container>
          <AnimatedSection className="max-w-4xl">
            <h2 className="heading-2 mb-8">Why Choose KayDev?</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit: string, index: number) => (
                <AnimatedSection
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-dark-300 border border-dark-200"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500">
                      <LuArrowRight size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{benefit}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Related NAICS Section */}
      <section className="py-20 bg-dark-300">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 className="heading-2 mb-6">Related NAICS Codes</h2>
            <div className="flex flex-wrap gap-3">
              {relatedNAICS.map((code) => (
                <Link key={code.code} to="/naics-codes">
                  <Badge variant="secondary" className="cursor-pointer hover:opacity-80 transition-opacity">
                    {code.code} - {code.title}
                  </Badge>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500">
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="heading-2 text-white mb-4">
              {service.cta.title}
            </h2>
            <p className="text-white text-lg mb-8 opacity-90">
              {service.cta.description}
            </p>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Get in Touch
              </Button>
            </Link>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
