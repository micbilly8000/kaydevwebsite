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
                className="h-[90px] w-auto"
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
              <div className="pt-3 flex flex-wrap gap-1.5">
                {['Native-Owned', 'Black-Owned', 'SDVOSB', 'MBE', 'SBE', 'DBE'].map((c) => (
                  <span
                    key={c}
                    className="inline-block bg-primary-500/10 border border-primary-500/60 text-primary-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  >
                    {c}
                  </span>
                ))}
              </div>
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
                  to="/services/ai-security-catalog"
                  className="hover:text-primary-500 transition-colors"
                >
                  AI Security &amp; Governance
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

          {/* Independence & Trademark Notice */}
          <p className="mt-6 text-xs text-neutral-600 leading-relaxed">
            <strong className="text-neutral-400">Independence &amp; Trademark Notice:</strong>{' '}
            KayDev Technology, LLC is an independent consultancy. We are <strong>not</strong> an
            authorized reseller, partner, affiliate, or representative of Palo Alto Networks,
            Microsoft, Zscaler, Fortinet, CrowdStrike, Splunk, Netskope, Anthropic, OpenAI,
            Google, or any other vendor referenced on this site. All product names, logos, and
            trademarks are the property of their respective owners. References to these products
            describe technologies that KayDev consultants have experience implementing,
            configuring, or advising on; they do not imply endorsement, certification,
            authorization, or affiliation. Diverse-supplier certifications (Native-Owned,
            Black-Owned, SDVOSB, MBE, SBE, DBE) are verified through NMSDC, US DOT, SBA VetCert,
            and applicable state/municipal registries.
          </p>
        </div>
      </Container>
    </footer>
  )
}
