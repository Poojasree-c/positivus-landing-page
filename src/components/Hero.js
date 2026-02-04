function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-8 py-16 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Navigating the digital landscape for success
        </h1>

        <p className="mt-4 text-gray-600">
          Our digital marketing agency helps businesses grow and succeed online through a range of services.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-md">
          Book a consultation
        </button>
      </div>

      <div className="bg-gray-200 rounded-xl h-72 flex items-center justify-center text-gray-500">
        Illustration
      </div>
    </section>
  );
}

export default Hero;
