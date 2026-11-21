import React from 'react'
import { Helmet } from 'react-helmet-async'
import { federalClients, stateLocalClients, commercialClients } from '@data/clients'
import { BOOKING_URL } from '@components/site'

const groups = [
  { title: 'Federal agencies', clients: federalClients },
  { title: 'State and local government', clients: stateLocalClients },
  { title: 'Commercial and Fortune 500', clients: commercialClients },
]

export const ClientRoster: React.FC = () => (
  <>
    <Helmet>
      <title>Clients | KayDev Technology</title>
      <meta name="description" content="KayDev Technology has supported federal agencies, state and local governments, and Fortune 500 companies including NASA, the Department of Defense and Lockheed Martin." />
    </Helmet>

    <div className="page-hero">
      <div className="wrap">
        <p className="kicker">Client roster</p>
        <h1>Trusted by public-sector and Fortune 500 teams.</h1>
        <p className="lede">KayDev Technology has supported government agencies, state and local governments, and Fortune 500 companies across critical infrastructure protection, federal compliance and enterprise security operations.</p>
      </div>
    </div>

    <div className="page-section">
      <div className="wrap">
        <div className="stats">
          <div className="stat"><b>{federalClients.length}</b><span>Federal agencies</span></div>
          <div className="stat"><b>{stateLocalClients.length}</b><span>State and local government</span></div>
          <div className="stat"><b>{commercialClients.length}</b><span>Commercial clients</span></div>
        </div>
      </div>
    </div>

    <div className="page-section">
      <div className="wrap">
        {groups.map((g) => (
          <div className="client-group" key={g.title}>
            <div className="sub-head"><h2>{g.title}</h2><span>{g.clients.length}</span></div>
            <ul className="client-grid">
              {g.clients.map((c) => <li key={c.name}>{c.name}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <section className="cta soft">
      <div className="wrap">
        <h2>Bring the same standards to your team.</h2>
        <p>Book a 30-minute call. We'll tell you who we have available and the next steps.</p>
        <div className="actions">
          <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Book an intro call</a>
        </div>
      </div>
    </section>
  </>
)
