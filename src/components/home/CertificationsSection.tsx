import React from 'react'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'

interface CertificationsSectionProps {
  prominent?: boolean
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-cyber-500/10 border-y border-primary-500/30">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="heading-3 mb-4">
            KayDev is a <span className="text-primary-500">Native American</span> and <span className="text-cyber-500">Service-Disabled Veteran Owned Business</span>
          </h2>
          <p className="body-text text-lg">
            Proudly serving government and commercial clients with certified minority and veteran ownership
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
