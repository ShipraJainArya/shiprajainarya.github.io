export default function Hero() {
  return (
    <section id="home" className="bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Watermark */}
        <img
  src="jain-logo.png"
  alt="watermark"
  className="absolute top-[5%] left-[170px] w-[500px] h-full object-contain opacity-25 blur-[2px] pointer-events-none"
/>
        {/* Left Side */}
        <div className="md:w-1/2 space-y-10">
          <h1 className="text-7xl font-bold text-[#8c6239] relative z-10">
            Find Your Dream Home<br/>
            in <span className="text-[#5c3a1e]">Mundhwa</span>
          </h1>
          <p className="text-[#5c3a1e] text-2xl">
            Trusted listings, expert help, and complete support—from agreements to after-sale services,<br /> This is real estate made easy!
          </p>
          <div className="space-x-4">

          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mb-10 md:mb-0 relative z-10 translate-x-[59px] translate-y-[-10px]">
        <img
          src="/map-yello.png"
          alt="yellow map"
          className="w-[800px] md:w-[700px] mx-auto rounded-xl shadow-lg"
        />
        </div>
      </div>
    </section>
  );
}