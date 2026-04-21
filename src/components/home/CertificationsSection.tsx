import React from 'react'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'

interface CertificationsSectionProps {
  prominent?: boolean
}

const certLogos = [
  {
    src: '/certifications/naob-logo.png',
    alt: 'NAOB — Native American Owned Business',
    label: 'Native American Owned Business',
  },
  {
    src: '/certifications/sdvosb-logo.jpeg',
    alt: 'SDVOSB — Service-Disabled Veteran-Owned Small Business',
    label: 'Federal SDVOSB',
  },
  {
    src: '/certifications/ny-sdvob-logo.jpg',
    alt: 'New York State Certified Service-Disabled Veteran-Owned Business',
    label: 'New York State SDVOB',
  },
]

export const CertificationsSection: React.FC<CertificationsSectionProps> = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-cyber-500/10 border-y border-primary-500/30">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="heading-3 mb-4">
            KayDev is a <span className="text-primary-500">Native American</span> and <span className="text-cyber-500">Service-Disabled Veteran Owned Business</span>
          </h2>
          <p className="body-text text-lg">
            Proudly serving government and commercial clients with certified minority and veteran ownership
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {certLogos.map((logo) => (
              <div
                key={logo.src}
                className="flex flex-col items-center"
                title={logo.alt}
              >
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center justify-center h-24 w-40">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-2 text-xs text-neutral-400 text-center max-w-[10rem]">
                  {logo.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
