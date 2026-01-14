import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hoverEffect?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'rounded-xl bg-dark-300 border border-dark-200 p-6 shadow-lg',
        hoverEffect && 'hover:shadow-xl hover:border-primary-500 transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
