import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ServiceTemplate } from '@components/services/ServiceTemplate'
import { services } from '@data/services'

export const BlockchainSecurity: React.FC = () => {
  const service = services.find(s => s.id === 'blockchain-security')!

  return (
    <>
      <Helmet>
        <title>{service.title} | KayDev Technology</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <ServiceTemplate service={service} />
    </>
  )
}
