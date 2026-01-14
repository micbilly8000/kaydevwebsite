import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../shared/Container'
import { services } from '@data/services'

export const MegaDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <div
        className="fixed top-16 left-0 right-0 z-40 hidden lg:block"
        onMouseLeave={() => setIsOpen(false)}
      >
        {isOpen && (
          <div className="bg-dark-300 border-b border-dark-200 shadow-xl">
            <Container className="py-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Services List */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">
                    All Services
                  </h3>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="block text-neutral-300 hover:text-primary-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="font-medium">{service.title}</div>
                        <div className="text-xs text-neutral-500">
                          {service.tagline}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Featured Section */}
                <div className="bg-dark-400 rounded-lg p-6 border border-dark-200">
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    Need Expert Help?
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    Our security experts are ready to assess your infrastructure
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Schedule Assessment
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>

      {/* Trigger */}
      <div
        className="hidden lg:block fixed top-16 left-1/2 transform -translate-x-1/2 w-full pointer-events-none"
        onMouseEnter={() => setIsOpen(true)}
      />
    </>
  )
}
