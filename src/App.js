import { Route, Routes } from 'react-router'
import { useState } from 'react'
import './App.css'
import { Footer, Navbar, Drawer } from './Components'
import { AboutUs, CmsDev, ContactUs, EcomDev, Landing, MobileDev, WebDevelopment } from './pages'

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className="App">
      <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {openDrawer ? (
        <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      ) : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/web-development' element={<WebDevelopment />} />
        <Route path='/mobile-app-development' element={<MobileDev />} />
        <Route path='/cms-development' element={<CmsDev/>} />
        <Route path='/e-commerce-development' element={<EcomDev/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
