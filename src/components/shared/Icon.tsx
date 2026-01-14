import React from 'react'
import * as Icons from 'react-icons/lu'

interface IconProps {
  name: string
  size?: number
  className?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
}) => {
  const IconComponent = (Icons as Record<string, React.ComponentType<any>>)[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent size={size} className={className} />
}
