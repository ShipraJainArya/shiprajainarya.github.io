import { Dosis } from "next/font/google";
import { MessageCircle, FileSignature, Home } from "lucide-react";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function DoorstepAgreements() {
  return (
    <section id="agreements" className={`py-20 bg-[#e1c08d] text-[#2e2119] ${dosis.className}`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[800] mb-10 mt-6 tracking-wide">
          Doorstep Agreement Services
        </h2>
        <p className="text-2xl max-w-5xl mx-auto mb-20 mt-15">
          Powered by the Government of Maharashtra, our agreements are legally &
          digitally registered, and completely stamp paper–free. We offer
          flexible scheduling and doorstep services across India and globally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-12 mb-1 text-white">
          {[
            {
              step: "1",
              title: "WhatsApp Your Details",
              Icon: MessageCircle,
            },
            {
              step: "2",
              title: "Finalise Your Draft",
              Icon: FileSignature,
            },
            {
              step: "3",
              title: "Registration at Doorstep",
              Icon: Home,
            },
          ].map(({ step, title, Icon }) => (
            <div
              key={step}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2e2119] via-[#3b291d] to-[#1a110c] p-7 shadow-xl border border-[#f0e0c2]/20 z-[0] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#f5c75b]/30 group"
            >
              <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top,_rgba(245,199,91,0.35),_transparent_55%)]" />

              <div className="relative z-10 flex justify-center mb-4">
                <span className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-[#f5c75b]/60 bg-[#f5c75b]/10 text-xs md:text-sm tracking-[0.25em] uppercase text-[#f5c75b]">
                  Step {step}
                </span>
              </div>

              <h3 className="relative z-10 text-xl md:text-2xl font-semibold mb-4 text-[#f5eee3] tracking-wide">
                {title}
              </h3>

              <div className="relative z-10 flex justify-center mt-6">
                <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#f5eee3]/5 border border-[#f5c75b]/20 shadow-[0_0_25px_rgba(245,199,91,0.05)] group-hover:bg-[#f5c75b]/10 group-hover:shadow-[0_0_35px_rgba(245,199,91,0.2)] group-hover:scale-110 transition-all duration-500 ease-out">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#f5c75b] drop-shadow-md group-hover:text-[#ffffff] transition-colors duration-500" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}