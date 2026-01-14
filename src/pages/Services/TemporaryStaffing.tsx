import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ServiceTemplate } from '@components/services/ServiceTemplate'
import { services } from '@data/services'

export const TemporaryStaffing: React.FC = () => {
  const service = services.find(s => s.id === 'temporary-staffing')!

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
