import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../shared/Container'
import { LuLinkedin, LuTwitter, LuMail } from 'react-icons/lu'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-300 border-t border-dark-200 mt-20">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.svg"
                alt="KayDev Technology"
                className="h-10 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              <h3 className="text-xl font-display font-bold">
                <span className="text-white">Kay</span>
                <span className="text-primary-500">Dev</span>
              </h3>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Enterprise cybersecurity solutions for government and Fortune 500 companies.
            </p>
            <div className="space-y-2 text-sm text-neutral-400">
              <p><strong className="text-white">Phone:</strong> (682) 628-9545</p>
              <p><strong className="text-white">Location:</strong> Fort Worth, TX</p>
              <p className="pt-2 text-xs"><em>Native American and Service-Disabled Veteran Owned Business</em></p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link
                  to="/services/cybersecurity"
                  className="hover:text-primary-500 transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-security"
                  className="hover:text-primary-500 transition-colors"
                >
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/blockchain-security"
                  className="hover:text-primary-500 transition-colors"
                >
                  Blockchain Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-automation-security"
                  className="hover:text-primary-500 transition-colors"
                >
                  AI Automation Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/temporary-staffing"
                  className="hover:text-primary-500 transition-colors"
                >
                  Temporary Staffing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="hover:text-primary-500 transition-colors"
                >
                  Client Roster
                </Link>
              </li>
              <li>
                <Link
                  to="/naics-codes"
                  className="hover:text-primary-500 transition-colors"
                >
                  NAICS Codes
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LuLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <LuTwitter size={20} />
              </a>
              <a
                href="mailto:info@kaydevtech.com"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
                aria-label="Email"
              >
                <LuMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-200 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500">
            <p>
              &copy; {currentYear} KayDev Technology. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
