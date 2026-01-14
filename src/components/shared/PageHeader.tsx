import React from 'react'
import { Container } from './Container'

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumb?: { label: string; path?: string }[]
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  breadcrumb,
}) => {
  return (
    <section className="bg-gradient-to-b from-dark-300 to-dark-400 py-12 sm:py-16 lg:py-20">
      <Container>
        {breadcrumb && (
          <div className="mb-6 flex items-center space-x-2 text-sm text-neutral-400">
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {index > 0 && <span>/</span>}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
        <h1 className="heading-1 mb-4">{title}</h1>
        {description && (
          <p className="body-text max-w-3xl">{description}</p>
        )}
      </Container>
    </section>
  )
}
