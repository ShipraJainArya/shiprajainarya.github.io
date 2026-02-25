export default function Footer() {
  return (
    <footer className="bg-[#1c1410] text-[#e0d4c2] border-t border-[#3b2a20] mt-0">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-3 text-center">
        <p className="text-sm md:text-base tracking-wide">
          © {new Date().getFullYear()} Shipra Realtors. All rights reserved.
        </p>
        <p className="text-xs md:text-sm text-[#a8927a]">
          Trusted real estate guidance in Keshav Nagar, Mundhwa & nearby prime locations.
        </p>
      </div>
    </footer>
  );
}