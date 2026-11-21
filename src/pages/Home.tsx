import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BOOKING_URL, EMAIL, CERTIFICATIONS } from '@components/site'

const svg = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

const certs = [
  { src: '/certifications/naob-logo.png', alt: 'Native American Owned Business certification', label: 'Native American Owned Business' },
  { src: '/certifications/sdvosb-logo.jpeg', alt: 'Federal Service-Disabled Veteran-Owned Small Business certification', label: 'Service-Disabled Veteran-Owned (Federal SDVOSB)' },
  { src: '/certifications/vethub-logo.webp', alt: 'Texas VetHUB certification', label: 'Texas VetHUB' },
  { src: '/certifications/ny-sdvob-logo.jpg', alt: 'New York State Service-Disabled Veteran-Owned Business certification', label: 'New York Service-Disabled Veteran-Owned' },
  { src: '/certifications/sbe-logo.png', alt: 'Small Business Enterprise certification', label: 'Small Business Enterprise' },
  { src: '/certifications/mbe-logo.png', alt: 'Minority Business Enterprise certification', label: 'Minority Business Enterprise' },
]

export const Home: React.FC = () => (
  <>
    <Helmet>
      <title>KayDev Technology | AI, IT, Cybersecurity and Medical Staffing</title>
      <meta name="description" content="KayDev Technology, LLC places AI, IT, cybersecurity and medical talent, vetted by security practitioners, on contract, contract-to-hire and direct-hire terms. Native American and Service-Disabled Veteran-Owned, Fort Worth, Texas." />
    </Helmet>

    <section className="hero">
      <div className="wrap">
        <ul className="cert-pills" aria-label="Certifications">
          {CERTIFICATIONS.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <h1>AI, IT and cyber talent, <em>vetted by practitioners.</em></h1>
        <p className="lede">KayDev Technology places AI, IT, cybersecurity and medical professionals with mid-size companies and public-sector programs. Security practitioners screen every technical candidate before you meet them.</p>
        <div className="actions">
          <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Book an intro call</a>
          <a className="btn btn-ghost" href="#staffing">See what we staff</a>
        </div>
        <p className="note">Contract · Contract-to-hire · Direct hire</p>
      </div>
    </section>

    <div className="strip" aria-label="Certifications">
      <div className="wrap">
        <span className="label">Certified diverse supplier</span>
        <ul className="certs">
          {certs.map((c) => (
            <li key={c.label}><img src={c.src} alt={c.alt} loading="lazy" />{c.label}</li>
          ))}
        </ul>
      </div>
    </div>

    <section id="staffing">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">What we staff</p>
          <h2>Four talent areas, one accountable partner.</h2>
          <p>Tell us the role and the timeline. We tell you who we have available and what it takes to bring them on.</p>
        </div>
        <div className="grid grid-4">
          <article className="card">
            <div className="icon"><svg {...svg}><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg></div>
            <h3>AI and data</h3>
            <p>People who build and run AI and data systems.</p>
            <ul><li>Machine learning engineers</li><li>Data engineers</li><li>Data analysts</li></ul>
          </article>
          <article className="card">
            <div className="icon"><svg {...svg}><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" /></svg></div>
            <h3>IT</h3>
            <p>Delivery teams for applications and infrastructure.</p>
            <ul><li>.NET, Java and Salesforce developers</li><li>Business analysts and QA</li><li>DBAs, systems and cloud engineers</li></ul>
          </article>
          <article className="card">
            <div className="icon"><svg {...svg}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg></div>
            <h3>Cybersecurity</h3>
            <p>Security staff for operations, cloud and compliance.</p>
            <ul><li>SOC analysts</li><li>Security and cloud security engineers</li><li>IAM engineers and compliance analysts</li></ul>
          </article>
          <article className="card">
            <div className="icon"><svg {...svg}><path d="M12 5v14M5 12h14" /><rect x="3" y="3" width="18" height="18" rx="4" /></svg></div>
            <h3>Medical</h3>
            <p>Clinical coverage for hospitals, clinics and practices.</p>
            <ul><li>Registered nurses</li><li>LVNs and medical assistants</li><li>Allied health professionals</li></ul>
          </article>
        </div>
        <div className="chips" aria-label="Engagement options">
          <span>Contract</span><span>Contract-to-hire</span><span>Direct hire</span>
        </div>
      </div>
    </section>

    <section id="how" className="soft">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">How it works</p>
          <h2>From open role to working professional.</h2>
        </div>
        <div className="grid grid-3 steps">
          <div className="step">
            <h3>Share the role</h3>
            <p>A short call covers the skills, the team, the timeline and whether contract, contract-to-hire or direct hire fits best.</p>
          </div>
          <div className="step">
            <h3>We source and vet</h3>
            <p>Automated sourcing finds candidates quickly. Security practitioners then test technical skills, so you only see people who can do the work.</p>
          </div>
          <div className="step">
            <h3>You interview and decide</h3>
            <p>You meet a short list. Once you choose, we handle onboarding and stay involved for the length of the engagement.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="why">
      <div className="wrap why">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="kicker">Why KayDev</p>
          <h2>A staffing partner that is a security company first.</h2>
          <p>KayDev Technology is a cybersecurity company. That background shapes how we screen people and how we work with clients.</p>
        </div>
        <div className="why-list">
          <div><h3>Vetted by practitioners</h3><p>Technical candidates are screened by working security professionals, not only by recruiters.</p></div>
          <div><h3>Proven on public-sector programs</h3><p>We support federal clients and state government IT programs, and bring the same standards to commercial work. <Link to="/clients">See our clients</Link>.</p></div>
          <div><h3>Direct access to leadership</h3><p>You work with decision-makers at a small, responsive firm, with one accountable point of contact.</p></div>
          <div><h3>Supplier diversity</h3><p>Our certifications help clients meet supplier-diversity and small-business spending goals. <Link to="/naics-codes">View our NAICS codes</Link>.</p></div>
        </div>
      </div>
    </section>

    <section id="ai-services" className="band">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">AI security and governance</p>
          <h2>Adopt AI without losing control of your data.</h2>
          <p>Alongside staffing, KayDev Technology offers vendor-neutral assessments that show how AI is being used in your organization and what to fix first.</p>
        </div>
        <div className="grid grid-3">
          <article className="card">
            <div className="icon"><svg {...svg}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" /></svg></div>
            <h3>AI privacy and vendor risk</h3>
            <p>Evaluate AI vendors before you rely on them.</p>
            <ul><li>Data retention and training practices</li><li>Residency and subprocessors</li><li>Confidentiality of client information</li></ul>
          </article>
          <article className="card">
            <div className="icon"><svg {...svg}><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></svg></div>
            <h3>Shadow AI discovery</h3>
            <p>Find the AI tools employees already use.</p>
            <ul><li>Unapproved applications</li><li>Where sensitive data may be exposed</li><li>Findings with a remediation roadmap</li></ul>
          </article>
          <article className="card">
            <div className="icon"><svg {...svg}><path d="M6 4h9l3 3v13H6z" /><path d="M9 11h6M9 15h6" /></svg></div>
            <h3>AI governance readiness</h3>
            <p>Put policy, ownership and oversight in place.</p>
            <ul><li>Aligned to the NIST AI Risk Management Framework</li><li>Usage policies and accountability</li><li>Risk assessment and control gaps</li></ul>
          </article>
        </div>
        <p className="fine">KayDev Technology is an independent consultancy. Assessments identify and reduce risk; they do not guarantee compliance or the elimination of all AI-related risk.</p>
      </div>
    </section>

    <section id="industries">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Who we serve</p>
          <h2>Organizations with real service and hiring needs.</h2>
        </div>
        <div className="tags">
          {['Healthcare', 'Banks and credit unions', 'Insurance', 'Financial services', 'Law firms', 'Accounting', 'SaaS and technology', 'Transportation', 'Manufacturing', 'Warehousing', 'Federal, state and local government'].map((t) => <span key={t}>{t}</span>)}
        </div>
        <p className="regions">Serving clients throughout the United States.</p>
      </div>
    </section>

    <section id="about" className="soft">
      <div className="wrap about">
        <div>
          <p className="kicker">About</p>
          <h2 style={{ fontSize: 'clamp(28px,3.6vw,40px)', marginBottom: 20 }}>A cybersecurity and technology firm based in Fort Worth, Texas.</h2>
          <p>KayDev Technology, LLC provides AI, IT, cybersecurity and medical staffing, along with AI security services, to commercial and public-sector clients.</p>
          <p>KayDev AI is our department for AI, IT, cybersecurity and medical staffing. It operates under KayDev Technology, LLC and carries all of its certifications.</p>
          <p style={{ marginTop: 24 }}><a className="btn btn-ghost" href="https://www.kaydevai.com" rel="noopener">Visit kaydevai.com</a></p>
        </div>
        <div className="panel">
          <h3>Certifications</h3>
          <ul>
            <li>Native American Owned Business (NAOB)</li>
            <li>Federal Service-Disabled Veteran-Owned Small Business (SDVOSB)</li>
            <li>Texas VetHUB</li>
            <li>New York State Service-Disabled Veteran-Owned Business (SDVOB)</li>
            <li>Small Business Enterprise (SBE)</li>
            <li>Minority Business Enterprise (MBE)</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="contact" className="cta">
      <div className="wrap">
        <h2>Have a role that's hard to fill?</h2>
        <p>Book a 30-minute call, or email us the job description. We'll tell you who we have available and the next steps.</p>
        <div className="actions">
          <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Book an intro call</a>
          <a className="btn btn-ghost" href={`mailto:${EMAIL}?subject=Open%20role`}>Email {EMAIL}</a>
          <a className="btn btn-ghost" href={`mailto:${EMAIL}?subject=AI%20security%20assessment`}>Ask about AI security</a>
        </div>
      </div>
    </section>
  </>
)
