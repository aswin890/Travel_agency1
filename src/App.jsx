import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Destination from './components/Destination'
import Offer from './components/Offer'
import Tours from './components/Tours'
import DownloadApp from './components/DownloadApp'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Offer />
      <Tours />
      <DownloadApp />
      <ScrollToTop />
      <Footer />
    </div>
  )
}
