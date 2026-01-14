import React, { useState, useEffect } from 'react'
import { useIntersection } from '@hooks/useIntersection'
import { stats } from '@data/stats'
import { Container } from '../shared/Container'
import { AnimatedSection } from '../shared/AnimatedSection'

const CountUp: React.FC<{ end: string; duration: number }> = ({
  end,
  duration,
}) => {
  const [count, setCount] = useState(0)
  const numericEnd = parseInt(end)

  useEffect(() => {
    let start = 0
    const increment = numericEnd / (duration * 60)

    const interval = setInterval(() => {
      start += increment
      if (start >= numericEnd) {
        setCount(numericEnd)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [numericEnd, duration])

  return <span>{count}</span>
}

export const StatsSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersection({ threshold: 0.5 })

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-dark-300 via-dark-400 to-dark-300"
    >
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="heading-2 mb-4">Proven Results</h2>
          <p className="body-text max-w-2xl mx-auto">
            Industry-leading metrics and proven expertise trusted by government and enterprise clients
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              className="text-center p-6 rounded-lg bg-dark-300 border border-dark-200"
            >
              <div className="text-5xl font-display font-bold text-primary-500 mb-2">
                {isIntersecting ? (
                  <>
                    <CountUp end={stat.value} duration={2} />
                    {stat.value.replace(/\d/g, '')}
                  </>
                ) : (
                  '0'
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-neutral-400 text-sm">{stat.description}</p>
              )}
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
