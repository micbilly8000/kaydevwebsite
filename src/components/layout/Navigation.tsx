import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuChevronDown } from 'react-icons/lu'
import { navigationItems } from '@data/navigation'
import clsx from 'clsx'

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className={clsx('flex items-center gap-8', className)}>
      {navigationItems.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => item.children && setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            to={item.path}
            className="flex items-center gap-1 text-white hover:text-primary-500 transition-colors font-medium"
          >
            {item.label}
            {item.children && (
              <LuChevronDown
                size={16}
                className={clsx(
                  'transition-transform',
                  openDropdown === item.label && 'rotate-180'
                )}
              />
            )}
          </Link>

          {item.children && openDropdown === item.label && (
            <div className="absolute top-full left-0 mt-0 w-48 bg-dark-300 border border-dark-200 rounded-lg shadow-xl py-2 z-50">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.path}
                  className="block px-4 py-2 text-neutral-300 hover:text-primary-500 hover:bg-dark-200 transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
