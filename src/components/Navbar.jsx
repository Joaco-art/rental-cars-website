import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {

  const navigate = useNavigate()

  return (
    <header className="w-full h-20 fixed top-0 left-0 z-30 bg-transparent">
      <nav className="flex w-full h-full items-center px-8">
        {/* Logo */}
        
        <Link to='hero-section' onClick={() => navigate(`/`)} smooth={true} duration={500} offset={-64} className="text-white text-2xl font-bold mr-auto cursor-pointer hover:text-yellow-400 transition-colors">Rental Cars</Link>

        {/* Links */}
        <ul className="flex items-center gap-8 text-white font-semibold">
          <li>
            <Link
              to="models-section"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer hover:text-yellow-400 transition-colors"
            >
              Models
            </Link>
          </li>
          <li>
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer hover:text-yellow-400 transition-colors"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Botones */}
        <div className="ml-8 flex gap-4">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Sign Up
          </button>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Log In
          </button>
        </div>
      </nav>
    </header>
  )
}
