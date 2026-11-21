import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer, ScrollManager } from '@components/site'
import { Home } from '@pages/Home'
import { NAICSCodes } from '@pages/NAICSCodes'
import { ClientRoster } from '@pages/ClientRoster'
import { Privacy } from '@pages/Privacy'

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/naics-codes" element={<NAICSCodes />} />
          <Route path="/clients" element={<ClientRoster />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Old pages from the previous site point to the matching home section */}
          <Route path="/services/temporary-staffing" element={<Navigate to="/#staffing" replace />} />
          <Route path="/services/ai-security-catalog" element={<Navigate to="/#ai-services" replace />} />
          <Route path="/services/*" element={<Navigate to="/#staffing" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
