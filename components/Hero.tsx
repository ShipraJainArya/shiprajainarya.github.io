export default function Hero() {
  return (
    <section id="home" className="bg-transparent py-15 relative overflow-hidden">
      {/* Watermark (fixed & centered) */}
      <img
        src="jain-logo.png"
        alt="watermark"
        className="fixed top-1/2 left-1/2 w-[400px] md:w-[500px] lg:w-[600px] 
                   -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[2px] 
                   pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Side (Text) */}
        <div className="md:w-1/2 space-y-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-[#8c6239] relative z-10">
            Find Your Dream Home<br />
            in <span className="text-[#5c3a1e]">Mundhwa</span>
          </h1>
          <p className="text-[#5c3a1e] text-lg md:text-2xl">
            Trusted listings, expert help, and complete support—from agreements to after-sale services,<br />
            This is real estate made easy!
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 mb-10 md:mb-0 mr-10 relative z-10 flex justify-end">
          <img
            src="/brown-house.png"
            alt="brown house"
            className="w-[90%] max-w-[600px] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}