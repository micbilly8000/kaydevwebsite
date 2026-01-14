import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { Home } from '@pages/Home'
import { Cybersecurity } from '@pages/Services/Cybersecurity'
import { CloudSecurity } from '@pages/Services/CloudSecurity'
import { BlockchainSecurity } from '@pages/Services/BlockchainSecurity'
import { AIAutomationSecurity } from '@pages/Services/AIAutomationSecurity'
import { TemporaryStaffing } from '@pages/Services/TemporaryStaffing'
import { NAICSCodes } from '@pages/NAICSCodes'
import { ClientRoster } from '@pages/ClientRoster'
import { About } from '@pages/About'
import { Contact } from '@pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>KayDev Technology - Enterprise Cybersecurity Solutions</title>
        <meta name="description" content="Trusted by NASA, DoD, and Fortune 500 companies. Enterprise cybersecurity, cloud security, blockchain security, AI automation security, and staffing services." />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-dark-400">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/cloud-security" element={<CloudSecurity />} />
            <Route path="/services/blockchain-security" element={<BlockchainSecurity />} />
            <Route path="/services/ai-automation-security" element={<AIAutomationSecurity />} />
            <Route path="/services/temporary-staffing" element={<TemporaryStaffing />} />
            <Route path="/naics-codes" element={<NAICSCodes />} />
            <Route path="/clients" element={<ClientRoster />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
