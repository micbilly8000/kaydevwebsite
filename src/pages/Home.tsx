import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Hero } from '@components/home/Hero'
import { CertificationsSection } from '@components/home/CertificationsSection'
import { FeaturedServices } from '@components/home/FeaturedServices'
import { TrustStrip } from '@components/home/TrustStrip'
import { ServicesOverview } from '@components/home/ServicesOverview'
import { FeaturedClients } from '@components/home/FeaturedClients'
import { CTASection } from '@components/home/CTASection'

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>KayDev Technology — AI Security & Cleared Cybersecurity Staffing</title>
        <meta
          name="description"
          content="Vendor-neutral AI security and DoD-cleared cybersecurity staffing for government agencies and Fortune 500 enterprises. NIST AI RMF-aligned. Native-Owned, SDVOSB, MBE, SBE, DBE certified."
        />
      </Helmet>
      <Hero />
      <CertificationsSection prominent={true} />
      <FeaturedServices />
      <TrustStrip />
      <ServicesOverview />
      <FeaturedClients />
      <CTASection />
    </>
  )
}
