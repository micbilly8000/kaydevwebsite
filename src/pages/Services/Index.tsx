import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { PageHeader } from '@components/shared/PageHeader'
import { Container } from '@components/shared/Container'
import { AnimatedSection } from '@components/shared/AnimatedSection'
import { Card } from '@components/shared/Card'
import { services } from '@data/services'
import {
  LuShield,
  LuCloud,
  LuLink,
  LuBrain,
  LuUsers,
} from 'react-icons/lu'

const serviceIcons: { [key: string]: React.ElementType } = {
  Shield: LuShield,
  Cloud: LuCloud,
  Link: LuLink,
  Brain: LuBrain,
  Users: LuUsers,
}

export const ServicesIndex: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | KayDev Technology</title>
        <meta name="description" content="Explore KayDev's comprehensive cybersecurity, cloud security, blockchain security, AI automation security, and staffing services." />
      </Helmet>

      <PageHeader
        title="Our Services"
        description="Comprehensive security solutions for modern threats"
      />

      <section className="py-20 bg-dark-400">
        <Container>
          {/* Summary */}
          <AnimatedSection className="max-w-3xl mx-auto mb-16 text-center">
            <p className="body-text text-xl text-neutral-300 mb-8">
              KayDev Technology delivers enterprise-grade security solutions tailored to protect your critical infrastructure. Whether you need cybersecurity protection, cloud security, blockchain audits, AI governance, or skilled security professionals, our expert team provides comprehensive solutions designed for government agencies and Fortune 500 companies.
            </p>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons]
              return (
                <AnimatedSection key={service.id}>
                  <Link to={`/services/${service.slug}`}>
                    <Card className="h-full hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20 transition-all cursor-pointer group">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="heading-3 group-hover:text-primary-500 transition-colors">
                          {service.title}
                        </h3>
                        {IconComponent && (
                          <IconComponent size={32} className="text-primary-500 flex-shrink-0 ml-4" />
                        )}
                      </div>

                      <p className="text-neutral-400 mb-4 text-sm">
                        {service.tagline}
                      </p>

                      <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex items-center text-primary-500 font-semibold text-sm group-hover:gap-2 transition-all">
                        Learn More →
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>

          {/* CTA Section */}
          <AnimatedSection className="mt-20 text-center">
            <h2 className="heading-2 mb-6">Ready to Secure Your Infrastructure?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto">
              Contact our security experts to discuss which solutions are right for your organization.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
                Get Started
              </button>
            </Link>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
