

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-gray-800 p-4">
      <nav className="flex w-full h-full justify-start items-center gap-5">
        <h1 className="text-white text-2xl font-bold ml-4 mr-auto">Rental Cars</h1>
        <h2 className="ml-auto">Models</h2>
        <h2>About Us</h2>
        <button>Sign Up</button>
        <button>Log In</button>
      </nav>

    </header>
  )
}