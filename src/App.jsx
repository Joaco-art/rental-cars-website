import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Models from './components/Models'
import CartData from './components/CarData'
import Hero from './components/Hero'
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
        
        {/* Ruta individual de modelos */}
        <Route path="/models" element={<Models />} />

        {/* Detalles de un coche */}
        <Route path="/:model/:id" element={<CartData />} />
      </Routes>
    </Router>
  )
}

export default App
