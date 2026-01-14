import React from 'react'
import { featuredClients } from '@data/clients'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'

export const FeaturedClients: React.FC = () => {
  return (
    <section className="py-20 bg-dark-400">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="heading-2 mb-4">Trusted by Industry Leaders</h2>
          <p className="body-text max-w-2xl mx-auto">
            Securing critical operations for government agencies and Fortune 500 companies
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {featuredClients.map((client) => (
            <AnimatedSection
              key={client.name}
              className="flex items-center justify-center p-4 rounded-lg bg-dark-300 border border-dark-200 hover:border-primary-500 transition-colors h-24"
            >
              <div className="text-center">
                <h3 className="font-semibold text-neutral-300 text-sm">
                  {client.name}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
