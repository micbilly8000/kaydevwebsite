import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuChevronDown } from 'react-icons/lu'
import { navigationItems } from '@data/navigation'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface MobileNavProps {
  onClose: () => void
}

export const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="fixed top-16 left-0 right-0 bg-dark-300 border-b border-dark-200 max-h-[80vh] overflow-y-auto z-40 lg:hidden"
    >
      <div className="px-4 py-6 space-y-2">
        {navigationItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() =>
                item.children
                  ? setOpenItem(openItem === item.label ? null : item.label)
                  : onClose()
              }
              className="w-full flex items-center justify-between px-4 py-3 text-white hover:text-primary-500 hover:bg-dark-200 rounded-lg transition-colors font-medium"
            >
              <Link
                to={item.path}
                className="flex-1 text-left"
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault()
                  } else {
                    onClose()
                  }
                }}
              >
                {item.label}
              </Link>
              {item.children && (
                <LuChevronDown
                  size={16}
                  className={clsx(
                    'transition-transform ml-2',
                    openItem === item.label && 'rotate-180'
                  )}
                />
              )}
            </button>

            {item.children && openItem === item.label && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pl-4 space-y-1"
              >
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.path}
                    className="block px-4 py-2 text-neutral-400 hover:text-primary-500 hover:bg-dark-200 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {child.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
