import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../shared/Button'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500">
      <Container>
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="heading-2 text-white mb-4">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Let our security experts assess your environment and develop a comprehensive protection strategy.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Schedule Your Assessment
            </Button>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  )
}
