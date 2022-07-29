import { Route, Routes } from 'react-router'
import { useState } from 'react'
import './App.css'
import { Footer, Navbar, Drawer } from './Components'
import { AboutUs, ContactUs, Landing } from './pages'

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
