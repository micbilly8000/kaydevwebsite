import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const BOOKING_URL = 'https://calendar.app.google/hGwkEzJ6K166tZjY6'
export const EMAIL = 'info@kaydevtech.com'
export const PHONE = '(682) 628-9545'
export const PHONE_HREF = 'tel:+16826289545'

const Brand: React.FC<{ subtitle?: boolean }> = ({ subtitle = true }) => (
  <Link className="brand" to="/" aria-label="KayDev Technology home">
    <img src="/brand/kaydev-mark.png" alt="" width={30} height={30} />
    <span>
      KayDev Technology
      {subtitle && <small>Fort Worth, Texas</small>}
    </span>
  </Link>
)

const sectionLinks = [
  { hash: 'staffing', label: 'Staffing' },
  { hash: 'how', label: 'How it works' },
  { hash: 'ai-services', label: 'AI security' },
  { hash: 'industries', label: 'Industries' },
]

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Brand />
        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`} id="nav-links" onClick={(e) => {
          if ((e.target as HTMLElement).tagName === 'A') setOpen(false)
        }}>
          {sectionLinks.map((l) => (
            <li key={l.hash}><Link to={`/#${l.hash}`}>{l.label}</Link></li>
          ))}
          <li><NavLink to="/naics-codes">NAICS codes</NavLink></li>
          <li><NavLink to="/clients">Clients</NavLink></li>
          <li><Link to="/#about">About</Link></li>
          <li><a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Book a call</a></li>
        </ul>
      </div>
    </header>
  )
}

export const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="wrap">
      <div className="foot">
        <div>
          <div style={{ marginBottom: 12 }}><Brand subtitle={false} /></div>
          <p>KayDev Technology, LLC<br />1751 River Run, Suite 200<br />Fort Worth, TX 76107</p>
        </div>
        <div>
          <h4>Site</h4>
          <ul>
            <li><Link to="/#staffing">Staffing</Link></li>
            <li><Link to="/#ai-services">AI security</Link></li>
            <li><Link to="/naics-codes">NAICS codes</Link></li>
            <li><Link to="/clients">Clients</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={BOOKING_URL} target="_blank" rel="noopener">Book a call</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href={PHONE_HREF}>{PHONE}</a></li>
            <li><a href="https://www.kaydevai.com" rel="noopener">kaydevai.com</a></li>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <span>© {new Date().getFullYear()} KayDev Technology, LLC. All rights reserved.</span>
        <span>NAOB · MBE · SBE · Federal SDVOSB · NYS SDVOB · Texas VetHUB</span>
      </div>
    </div>
  </footer>
)

/** Scrolls to #hash targets after client-side navigation, and to top on page change. */
export const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0)
      return () => window.clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
