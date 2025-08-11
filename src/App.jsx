import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Models from './components/Models'
import CartData from './components/CarData'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Models />} />
        <Route path="/car/:id" element={<CartData/>} />
      </Routes>
    </Router>
  )
}

export default App
