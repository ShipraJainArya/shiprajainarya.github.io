import Image from "next/image";
import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function DoorstepAgreements() {
  return (
    <section id="about" className={`py-20 bg-[#e1c08d] text-[#5c3a1e] ${dosis.className}`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold mb-10 mt-16">
          Doorstep Agreement Services
        </h2>
        <p className="text-2xl max-w-5xl mx-auto mb-20 mt-15">
          Powered by the Government of Maharashtra, our agreements are legally &
          digitally registered, and completely stamp paper–free. We offer
          flexible scheduling and doorstep services across India and globally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl mx-auto mt-12 mb-1 text-white">
          {[
  {
    step: "1",
    title: "WhatsApp Your Details",
    image: "/whatsapp-logo.png",
  },
  {
    step: "2",
    title: "Finalise Your Draft",
    image: "/draft.png",
  },
  {
    step: "3",
    title: "Registration at Doorstep",
    image: "/doorstep.png",
  },
].map(({ step, title, image }) => (
  <div
    key={step}
    className="bg-[#5c3a1e] p-6 rounded-xl shadow-md border border-[#e0ddd9] z-[0] text-center"
  >
    <div className="text-3xl font-bold mb-5 mt-3 text-white">Step {step}</div>
    <p className="text-lg font-medium text-white">{title}</p>
    
    {/* Image below the card text */}
    <img
  src={image}
  alt={title}
  className={`mx-auto mt-6 ${
    title === 'Registration at Doorstep' ? 'w-40' : 'w-24'
  } h-auto`}
/>
  </div>
))}
        </div>
      </div>
    </section>
  );
}