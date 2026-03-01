"use client";

import { Dosis } from "next/font/google";
import { motion } from "framer-motion";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const testimonialsData = [
  {
    id: 1,
    text: "I'm writing to express my sincere gratitude to Shipra ji for her exceptional assistance in helping me find my new home. She was incredibly knowledgeable, patient, and understanding throughout the entire process. Her honesty and dedication were truly commendable.",
    author: "A grateful client of Shipra Realtors",
    rating: 5,
    avatar: "S",
  },
  {
    id: 2,
    text: "She gives you complete guidance of everything you need to know when investing in the real estate world. With her friendly nature and vast knowledge on this field, you have very little to worry about.",
    author: "A confident real estate investor",
    rating: 5,
    avatar: "I",
  },
  {
    id: 3,
    text: "She deals with all the issues of the tenants, does regular inspection, maintains the unit to great standard and also ensures the rent increases match with the current market trends. This makes life of overseas clients like me so easy.",
    author: "An overseas property owner",
    rating: 5,
    avatar: "O",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`${dosis.className} scroll-mt-24 pt-32 pb-24 bg-[#e1c08d] text-[#2e2119] overflow-hidden`}
    >
      <div className="max-w-[100vw] mx-auto text-center flex flex-col items-center">
        <p className="inline-block px-4 py-1 text-xs md:text-sm tracking-[0.35em] uppercase bg-[#2b1c13] text-[#f5eee3] rounded-full shadow-md mb-6">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide mb-14 px-4">
          From the Clients
        </h2>

        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden py-4 group">

          <motion.div
            className="flex gap-6 md:gap-10 w-max px-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            // Pause animation on hover or touch hold
            whileHover={{ animationPlayState: "paused" }}
            whileTap={{ animationPlayState: "paused" }}
          >
            {/* Double the array to create the seamless infinite scroll illusion */}
            {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[300px] md:w-[450px] lg:w-[500px] flex-shrink-0 bg-[#2b1c13]/95 border border-[#ededd9]/25 rounded-[2rem] shadow-xl px-6 py-10 md:px-10 md:py-12 text-[#ededd9] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#f5c75b]/30"
              >
                <div>
                  <div className="flex justify-center items-center gap-1 text-[#f5c75b] mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <span key={index} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="italic text-base md:text-lg lg:text-xl leading-relaxed text-[#f5eee3]">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f5c75b] flex items-center justify-center font-bold text-[#2b1c13] shadow-md">
                    {testimonial.avatar}
                  </div>
                  <p className="text-sm md:text-base text-[#e0d4c2]/90 font-medium">
                    — {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

