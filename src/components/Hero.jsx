import Background from '/assets/bg.jpg'

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <img
        src={Background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover bg-no-repeat bg-center"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>

      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white gap-5">
        <h1 className="text-8xl font-bold mb-4">Rental Cars</h1>
        <h2 className="text-2xl text-blue-500 font-semibold">Are you prepared?</h2>
      </div>
    </section>
  );
}
