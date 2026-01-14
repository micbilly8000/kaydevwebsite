import React from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from '@hooks/useIntersection'
import clsx from 'clsx'

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-up',
  ...props
}) => {
  const [ref, isIntersecting] = useIntersection({ threshold: 0.1 })

  const animations = {
    'fade-up': { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    'fade-in': { initial: { opacity: 0 }, animate: { opacity: 1 } },
    'slide-left': { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    'slide-right': { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  }

  const { initial, animate } = animations[animation]

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isIntersecting ? animate : initial}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(className)}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}
