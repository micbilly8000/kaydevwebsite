import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'
import { LuArrowRight, LuBrain, LuUsers } from 'react-icons/lu'

const paths = [
  {
    icon: LuBrain,
    eyebrow: 'AI Security & Governance',
    heading: 'Stop Leaking. Start Deploying.',
    body: 'Book a free 30-minute discovery call. We will scope the right assessment, quote a fixed fee, and have you secured in under 30 days.',
    ctaLabel: 'Book Discovery Call',
    href: 'mailto:ai@kaydevtech.com?subject=AI%20Assessment%20Discovery%20Call',
    external: true,
  },
  {
    icon: LuUsers,
    eyebrow: 'Cybersecurity Staffing',
    heading: 'Fill Your Roles in Days.',
    body: 'Need a CISO, SOC analyst, or cloud security engineer? Tell us the role and timeline — we will mobilize from our vetted bench.',
    ctaLabel: 'Request Talent',
    href: '/services/temporary-staffing',
    external: false,
  },
]

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-500 via-dark-400 to-dark-500">
      <Container>
        <AnimatedSection className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="heading-2 text-white mb-4">Choose Your Mission</h2>
          <p className="body-text text-lg">
            Whether you are securing an AI program or filling a role on your
            security team, KayDev meets you where your mission starts.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {paths.map((p) => {
            const Icon = p.icon
            const content = (
              <div className="bg-dark-300 border border-primary-500/30 rounded-xl p-8 h-full hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/20 transition-all group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className="text-primary-500 font-bold text-xs uppercase tracking-widest">
                    {p.eyebrow}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {p.heading}
                </h3>
                <p className="text-neutral-300 mb-6 leading-relaxed">{p.body}</p>
                <div className="inline-flex items-center bg-primary-500 group-hover:bg-primary-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors">
                  {p.ctaLabel}
                  <LuArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            )
            return (
              <AnimatedSection key={p.href}>
                {p.external ? (
                  <a href={p.href}>{content}</a>
                ) : (
                  <Link to={p.href}>{content}</Link>
                )}
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection className="text-center mt-10">
          <p className="text-sm text-neutral-400">
            Not sure where to start?{' '}
            <Link
              to="/contact"
              className="text-primary-500 hover:text-primary-400 font-semibold underline underline-offset-4"
            >
              Talk to our team
            </Link>
          </p>
        </AnimatedSection>
      </Container>
    </section>
  )
}
