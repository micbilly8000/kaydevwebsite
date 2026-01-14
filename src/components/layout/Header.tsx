import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu'
import { Container } from '../shared/Container'
import { Button } from '../shared/Button'
import { Navigation } from './Navigation'
import { MobileNav } from './MobileNav'
import { MegaDropdown } from './MegaDropdown'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-400 border-b border-dark-200 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <Container className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="KayDev Technology"
              className="h-10 w-auto"
              onError={(e) => {
                // If logo fails to load, hide the img and show fallback
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            <div className="text-2xl font-display font-bold hidden sm:block">
              <span className="text-white">Kay</span>
              <span className="text-primary-500">Dev</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation className="hidden lg:flex" />

          {/* Desktop CTA Button */}
          <Button
            variant="primary"
            size="md"
            className="hidden lg:inline-flex"
            onClick={() => (window.location.href = '/contact')}
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <LuX size={24} />
            ) : (
              <LuMenu size={24} />
            )}
          </button>
        </Container>
      </header>

      {/* Mega Dropdown */}
      <MegaDropdown />

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <MobileNav onClose={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  )
}
