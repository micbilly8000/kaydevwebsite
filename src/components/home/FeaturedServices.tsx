import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '@data/services'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'
import { Card } from '../shared/Card'
import { Button } from '../shared/Button'
import { Icon } from '../shared/Icon'
import { LuArrowRight, LuTrendingUp } from 'react-icons/lu'

export const FeaturedServices: React.FC = () => {
  const aiService = services.find(s => s.id === 'ai-automation-security')!
  const blockchainService = services.find(s => s.id === 'blockchain-security')!

  return (
    <section className="py-20 bg-gradient-to-br from-dark-300 via-dark-400 to-dark-300">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <LuTrendingUp className="text-primary-500" size={24} />
            <span className="text-primary-500 font-semibold">Emerging Technologies</span>
          </div>
          <h2 className="heading-2 mb-4">Secure the Future</h2>
          <p className="body-text max-w-3xl mx-auto text-lg">
            Stay ahead of tomorrow's threats with cutting-edge security for AI/ML systems and blockchain technologies
          </p>
        </AnimatedSection>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Automation Security */}
          <AnimatedSection animation="slide-right">
            <Link to={`/services/${aiService.slug}`}>
              <Card className="h-full hover:border-primary-500 hover:shadow-2xl group cursor-pointer">
                {/* Icon */}
                <div className="mb-6 inline-flex">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon
                      name={aiService.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Badge */}
                <div className="mb-4 inline-block">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-500/20 text-primary-500 text-xs font-semibold">
                    🚀 Future-Focused
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-semibold text-white mb-3">
                  {aiService.title}
                </h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {aiService.fullDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {aiService.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-primary-500 mt-1">✓</span>
                      <span className="text-sm text-neutral-300">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary-500 font-semibold group/cta">
                  Explore AI Security
                  <LuArrowRight
                    size={16}
                    className="ml-2 group-hover/cta:translate-x-1 transition-transform"
                  />
                </div>
              </Card>
            </Link>
          </AnimatedSection>

          {/* Blockchain Security */}
          <AnimatedSection animation="slide-right">
            <Link to={`/services/${blockchainService.slug}`}>
              <Card className="h-full hover:border-cyber-500 hover:shadow-2xl group cursor-pointer">
                {/* Icon */}
                <div className="mb-6 inline-flex">
                  <div className="bg-gradient-to-br from-cyber-500 to-cyber-600 p-4 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon
                      name={blockchainService.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Badge */}
                <div className="mb-4 inline-block">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyber-500/20 text-cyber-500 text-xs font-semibold">
                    ⛓️ Web3 Security
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-semibold text-white mb-3">
                  {blockchainService.title}
                </h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {blockchainService.fullDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {blockchainService.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-cyber-500 mt-1">✓</span>
                      <span className="text-sm text-neutral-300">{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-cyber-500 font-semibold group/cta">
                  Explore Blockchain Security
                  <LuArrowRight
                    size={16}
                    className="ml-2 group-hover/cta:translate-x-1 transition-transform"
                  />
                </div>
              </Card>
            </Link>
          </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-12">
          <p className="body-text mb-6">
            Ready to secure your AI infrastructure or Web3 projects?
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  )
}
