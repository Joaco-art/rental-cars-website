import data from '../../data.json'
import { useNavigate } from 'react-router-dom'

export default function Models() {
  const navigate = useNavigate()
  return (
    <section className="w-full h-full p-4 gap-5">

      <div className='flex flex-row p-5 w-full h-auto mb-5'>
              <h2 className='text-white text-2xl font-bold mb-5 mr-auto'>Models</h2>
              <input type="search" className="bg-gray-700 text-white text-xl font-bold rounded-lg px-4 py-2 w-[300px] h-auto hover:bg-blue-600 duration-300 transition-all" placeholder="Search for a car..."/>
      </div>
      
      <div className='w-full h-full grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-10'>
        {data.map((car) => (
          <div key={car.id} className="flex flex-col gap-5 w-full h-full bg-gray-700 p-4"  onClick={() => navigate(`/${car.model}/${car.id}`)}>

            <img src={car.img} alt={car.model} className="w-[100%] h-auto rounded-lg" />
            <div className='flex flex-row'>
            <h3 className='text-3xl mr-auto'>{car.make} {car.model} </h3>
            <h2 className='font-bold text-4xl mr-2'>{car.price}</h2>
            </div>
            
            <h4>{car.year}</h4>
            <h5>{car.country}</h5>
            <h6>VIN: {car.vin}</h6>
            
          </div>
        ))}
      </div>

    </section>
  )
}