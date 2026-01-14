import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Hero } from '@components/home/Hero'
import { ServicesOverview } from '@components/home/ServicesOverview'
import { FeaturedServices } from '@components/home/FeaturedServices'
import { FeaturedClients } from '@components/home/FeaturedClients'
import { CertificationsSection } from '@components/home/CertificationsSection'
import { CTASection } from '@components/home/CTASection'

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>KayDev Technology - Enterprise Cybersecurity Solutions</title>
        <meta name="description" content="Trusted by NASA, DoD, and Fortune 500 companies. Enterprise cybersecurity, cloud security, blockchain security, AI automation security, and staffing services." />
      </Helmet>
      <Hero />
      <CertificationsSection prominent={true} />
      <ServicesOverview />
      <FeaturedServices />
      <FeaturedClients />
      <CertificationsSection />
      <CTASection />
    </>
  )
}
