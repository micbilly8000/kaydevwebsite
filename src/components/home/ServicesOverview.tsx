import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '@data/services'
import { Card } from '../shared/Card'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'
import { Icon } from '../shared/Icon'
import { LuArrowRight } from 'react-icons/lu'

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-dark-400">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="body-text max-w-2xl mx-auto">
            Comprehensive security solutions for every aspect of your digital infrastructure
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation={index % 2 === 0 ? 'fade-up' : 'slide-right'}
            >
              <Link to={`/services/${service.slug}`}>
                <Card className="h-full flex flex-col hover:border-primary-500 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="mb-4 inline-flex">
                    <div className="bg-primary-500 p-3 rounded-lg">
                      <Icon
                        name={service.icon}
                        size={28}
                        className="text-white"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6 flex-grow">
                    {service.tagline}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-primary-500 font-semibold group">
                    Learn More
                    <LuArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
