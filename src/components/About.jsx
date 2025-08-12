

export default function About() {
  return (
    <section className="w-full h-screen bg-gray-800 p-4 gap-5">      
      <h2 className='text-white text-2xl font-bold mb-5'>About Us</h2>
      <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
        <p className='text-white text-2xl font-bold mb-5'>We are a premium car rental service offering the best models at competitive prices.</p>
        <button className='bg-blue-500 text-white font-bold rounded-lg px-10 py-2 w-auto h-auto hover:bg-blue-600 duration-300 transition-all'>Rent</button>
      </div>
    </section>
  )
}