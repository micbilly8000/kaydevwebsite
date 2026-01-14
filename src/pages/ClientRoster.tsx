import React from 'react'
import { Helmet } from 'react-helmet-async'
import { federalClients, stateLocalClients, commercialClients } from '@data/clients'
import { PageHeader } from '@components/shared/PageHeader'
import { Container } from '@components/shared/Container'
import { AnimatedSection } from '@components/shared/AnimatedSection'
import { Card } from '@components/shared/Card'

export const ClientRoster: React.FC = () => {
  const ClientGrid = ({ clients }: { clients: typeof federalClients }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {clients.map((client) => (
        <AnimatedSection key={client.name}>
          <Card className="h-24 flex items-center justify-center text-center">
            <h3 className="font-semibold text-neutral-300 text-sm px-2">
              {client.name}
            </h3>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  )

  return (
    <>
      <Helmet>
        <title>Client Roster | KayDev Technology</title>
        <meta name="description" content="Trusted by government agencies and Fortune 500 companies including NASA, DoD, and more." />
      </Helmet>

      <PageHeader
        title="Client Roster"
        description="Trusted security partner for leading organizations worldwide"
      />

      <section className="py-20 bg-dark-400">
        <Container>
          {/* Intro */}
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <p className="body-text text-lg leading-relaxed">
              KayDev Technology has earned the trust of government agencies, state and local governments, and Fortune 500 companies. Our proven track record spans critical infrastructure protection, federal compliance, and enterprise security operations.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center">
              <div className="text-4xl font-display font-bold text-primary-500 mb-2">
                {federalClients.length}
              </div>
              <p className="text-neutral-400">Federal Agencies</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-display font-bold text-primary-500 mb-2">
                {stateLocalClients.length}
              </div>
              <p className="text-neutral-400">State/Local Gov</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-display font-bold text-primary-500 mb-2">
                {commercialClients.length}
              </div>
              <p className="text-neutral-400">Commercial Clients</p>
            </Card>
          </AnimatedSection>

          {/* Federal Clients */}
          <AnimatedSection className="mb-16">
            <h2 className="heading-2 mb-8 flex items-center gap-3">
              <span className="inline-block w-1 h-8 bg-primary-500 rounded" />
              Federal Agencies
            </h2>
            <ClientGrid clients={federalClients} />
          </AnimatedSection>

          {/* State/Local Clients */}
          <AnimatedSection className="mb-16">
            <h2 className="heading-2 mb-8 flex items-center gap-3">
              <span className="inline-block w-1 h-8 bg-cyber-500 rounded" />
              State & Local Government
            </h2>
            <ClientGrid clients={stateLocalClients} />
          </AnimatedSection>

          {/* Commercial Clients */}
          <AnimatedSection>
            <h2 className="heading-2 mb-8 flex items-center gap-3">
              <span className="inline-block w-1 h-8 bg-success rounded" />
              Commercial & Fortune 500
            </h2>
            <ClientGrid clients={commercialClients} />
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
