import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Models from './components/Models'
import CartData from './components/CarData'
import Hero from './components/Hero'
import SetRenting from './components/SetRenting'
import About from './components/About'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Página principal con Hero y scroll a secciones */}
        <Route
          path="/"
          element={
            <>

              <Element name="hero-section">
                <Hero />

              </Element>
              
              <Element name="models-section">
                <Models />
              </Element>

              <Element name="about-section">
                <About/>
              </Element>
            </>
          }
        />
        
        <Route path="/models" element={<Models />} />
        <Route path="/:model/:id" element={<CartData />} />
        <Route path='/rent:model/:id' element={<SetRenting />} />
      </Routes>
    </Router>
  )
}

export default App
