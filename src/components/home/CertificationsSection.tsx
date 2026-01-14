import React from 'react'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'
import { Card } from '../shared/Card'
import { LuAward, LuCheck } from 'react-icons/lu'

interface CertificationsSectionProps {
  prominent?: boolean
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  prominent = false,
}) => {
  if (prominent) {
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

  return (
    <section className="py-16 bg-dark-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Native American Business */}
          <AnimatedSection>
            <Card className="h-full border-l-4 border-l-primary-500 flex flex-col items-center text-center p-8">
              <div className="mb-4 inline-flex">
                <div className="bg-primary-500 p-4 rounded-lg">
                  <LuAward size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                Native American Business
              </h3>
              <p className="text-neutral-400 text-sm">
                Proud member of Native American business community committed to economic development and opportunity
              </p>
            </Card>
          </AnimatedSection>

          {/* Service Disabled Owned Business */}
          <AnimatedSection>
            <Card className="h-full border-l-4 border-l-cyber-500 flex flex-col items-center text-center p-8">
              <div className="mb-4 inline-flex">
                <div className="bg-cyber-500 p-4 rounded-lg">
                  <LuCheck size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                Service Disabled Veteran Owned Business
              </h3>
              <p className="text-neutral-400 text-sm">
                Certified SDVOSB (Service Disabled Veteran Owned Small Business) committed to serving government and commercial clients
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
