import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import { useEffect } from 'react'

function App() {
  const location = useLocation();

  useEffect(() => {
         window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
              <Route  path='/' element={<Home />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/insights' element={<Insights />} />
              <Route path='/contact-us' element={<Contact />} />
    </Routes>
  )
}

export default App
