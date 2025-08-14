import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section className="relative h-screen w-screen">

      <div className="flex flex-col items-center justify-center w-full h-full p-5">
        <h1 className="xl:text-[150px] md:text-[100px] text-[70px] text-center uppercase text-white font-bold cursor-pointer">Rental Cars</h1>
        <h2 className="text-2xl uppercase font-bold text-blue-500 cursor-pointer">Made for everyone</h2>
        
      </div>

      
          <Link
                      to="models-section"
                      smooth={true}
                      duration={500}
                      offset={-64}
                      className="cursor-pointer"
                    >
                    <button className='absolute bottom-40 left-1/2 transform -translate-x-1/2 bg-blue-500 text-black px-10 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 border-2 border-black'>
                      See all Models
                    </button>
          </Link>
      

      

      <h3 className="absolute top-50 right-5 max-w-[30ch] text-pretty">The best cars for you with the best prices for every budget.</h3>

        
    
    </section>
    
  );
}
