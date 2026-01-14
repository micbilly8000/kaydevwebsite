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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400 z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-500 rounded-full blur-3xl opacity-20" />
        </div>
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="heading-1 mb-6 leading-tight"
          >
            Enterprise Security <span className="text-primary-500">Redefined</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="body-text mb-8 max-w-2xl text-xl"
          >
            Protecting critical infrastructure with cutting-edge cybersecurity, AI/ML security, and blockchain solutions. Trusted by government agencies and Fortune 500 companies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex justify-center mt-16"
          >
            <LuChevronDown size={32} className="text-primary-500 opacity-70" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
