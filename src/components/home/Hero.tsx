import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LuChevronDown } from 'react-icons/lu'
import { Button } from '../shared/Button'
import { Container } from '../shared/Container'

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400 z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-500 rounded-full blur-3xl opacity-20" />
        </div>
      </div>

      <Container className="relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/40"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-primary-500 text-xs font-bold uppercase tracking-widest">
              Native-Owned · SDVOSB · MBE · Vendor-Neutral
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="heading-1 mb-6 leading-tight"
          >
            <span className="text-primary-500">AI Security</span> &amp;{' '}
            <span className="text-cyber-500">Staff-Augmentation</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="body-text mb-8 max-w-3xl text-xl"
          >
            Vendor-neutral AI governance and cybersecurity talent for government
            agencies, Fortune 500, and small to medium enterprises. NIST AI RMF-aligned
            assessments, productized remediation, and security professionals ready
            to deploy.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link to="/services/ai-security-catalog">
              <Button variant="primary" size="lg">
                Explore AI Security
              </Button>
            </Link>
            <Link to="/services/temporary-staffing">
              <Button variant="secondary" size="lg">
                Request Talent
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-400"
          >
            <span className="flex items-center gap-2">
              <span className="text-primary-500">✓</span> NIST AI RMF-aligned
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary-500">✓</span> CMMC Level 2-ready
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary-500">✓</span> Certified diverse supplier
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary-500">✓</span> Trusted by NASA &amp; Fortune 500
            </span>
          </motion.div>

          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            onClick={handleScroll}
            className="flex justify-center mt-16 cursor-pointer hover:opacity-100 transition-opacity"
            aria-label="Scroll to next section"
          >
            <LuChevronDown size={32} className="text-primary-500 opacity-70 hover:opacity-100" />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  )
}
