import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { naicsCodes } from '@data/naicsCodes'
import { NAICSCode } from '../types'
import { BOOKING_URL, EMAIL } from '@components/site'

const serviceLabels: Record<string, string> = {
  cybersecurity: 'Cybersecurity',
  'cloud-security': 'Cloud security',
  'blockchain-security': 'Blockchain security',
  'temporary-staffing': 'Staffing',
}

const CodeCard: React.FC<{ code: NAICSCode; primary?: boolean }> = ({ code, primary }) => (
  <article className={`card${primary ? ' primary' : ''}`}>
    <div className="code">{code.code}</div>
    <h3>{code.title}</h3>
    <p>{code.description}</p>
    <div className="mini-tags">
      {code.relatedServices.map((s) => <span key={s}>{serviceLabels[s] ?? s}</span>)}
    </div>
  </article>
)

export const NAICSCodes: React.FC = () => {
  const [q, setQ] = useState('')
  const term = q.trim().toLowerCase()
  const match = (c: NAICSCode) =>
    !term || c.code.includes(term) || c.title.toLowerCase().includes(term) || c.description.toLowerCase().includes(term)

  const primary = naicsCodes.filter((c) => c.category === 'primary' && match(c))
  const secondary = naicsCodes.filter((c) => c.category === 'secondary' && match(c))

  return (
    <>
      <Helmet>
        <title>NAICS Codes | KayDev Technology</title>
        <meta name="description" content="NAICS codes for KayDev Technology, LLC: computer systems design, cybersecurity, data hosting, temporary help and employment placement services." />
      </Helmet>

      <div className="page-hero">
        <div className="wrap">
          <p className="kicker">For contracting officers and supplier-diversity teams</p>
          <h1>NAICS codes</h1>
          <p className="lede">The classification codes KayDev Technology, LLC works under for technology, cybersecurity and staffing contracts.</p>
        </div>
      </div>

      <div className="page-section" style={{ paddingBottom: 32 }}>
        <div className="wrap">
          <input
            className="search"
            type="search"
            placeholder="Search by code or description"
            aria-label="Search NAICS codes"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      <div className="page-section">
        <div className="wrap">
          <div className="sub-head"><h2>Primary service codes</h2><span>{primary.length} codes</span></div>
          {primary.length ? (
            <div className="grid grid-2">{primary.map((c) => <CodeCard key={c.code} code={c} primary />)}</div>
          ) : <p className="empty">No primary codes match your search.</p>}
        </div>
      </div>

      <div className="page-section">
        <div className="wrap">
          <div className="sub-head"><h2>Related service codes</h2><span>{secondary.length} codes</span></div>
          {secondary.length ? (
            <div className="grid grid-2">{secondary.map((c) => <CodeCard key={c.code} code={c} />)}</div>
          ) : <p className="empty">No related codes match your search.</p>}
        </div>
      </div>

      <section className="cta soft">
        <div className="wrap">
          <h2>Contracting with KayDev?</h2>
          <p>Email us with your solicitation or requirement, or book a call to talk through scope and fit.</p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${EMAIL}?subject=Contracting%20inquiry`}>Email {EMAIL}</a>
            <a className="btn btn-ghost" href={BOOKING_URL} target="_blank" rel="noopener">Book a call</a>
          </div>
        </div>
      </section>
    </>
  )
}
