import data from '../../data.json'
import { useNavigate, useParams } from 'react-router-dom'

export default function CarData() {
    const { id } = useParams()
    const car = data.find(car => car.id === parseInt(id))
    const navigate = useNavigate()

  return (
    <section className="w-full h-full bg-gray-800 p-4 gap-5">
        <p onClick={() => navigate(-1)} className='cursor-pointer mb-5'>Back</p>
      <h2 className='text-white text-2xl font-bold mb-5'>Car Data</h2>
      <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
        <img src={car.img} alt={car.model} className="w-[50%] h-[50%] rounded-lg" />
        <h2 className='font-bold text-4xl'>{car.make} {car.model} </h2>
        <h3 className='text-2xl font-bold'>{car.price}</h3>

        <div className='w-full h-full bg-gray-700 p-4 flex flex-col gap-10 justify-center items-center'>
            <h4 className='text-3xl font-bold'>Characteristics</h4>

                <div className='flex flex-row justify-center items-center gap-20'>

                    <div className='flex flex-col items-center'>
                        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium text-gray-300">Year</p>
                        <p className="text-lg font-bold text-white">{car.year}</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium text-gray-300">Country</p>
                        <p className="text-lg font-bold text-white">{car.country}</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                        <p className="text-sm font-medium text-gray-300">KM Driven</p>
                        <p className="text-lg font-bold text-white">{car.kmDriven.toLocaleString()}</p>          
                    </div>

                    <div className='flex flex-col items-center'>
                        <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium text-gray-300">Consumption</p>
                        <p className="text-lg font-bold text-white">{car.consumption} L/100km</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium text-gray-300">Color</p>
                        <p className="text-lg font-bold text-white">{car.color}</p>
                    </div>

                    
                </div>
            
            <button className='bg-blue-500 text-white font-bold rounded-lg px-10 py-2 w-auto h-auto hover:bg-blue-600 duration-300 transition-all'>Rent</button>
            
        </div>
        
      </div>

    </section>
  )
}