"use client";

import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`${dosis.className} py-20 bg-[#e1c08d] text-[#2e2119]`}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="inline-block px-4 py-1 text-xs md:text-sm tracking-[0.35em] uppercase bg-[#2b1c13] text-[#f5eee3] rounded-full shadow-md mb-5">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide mb-10">
          From the Clients
        </h2>
        <div className="mx-auto max-w-3xl bg-[#2b1c13]/95 border border-[#ededd9]/25 rounded-3xl shadow-2xl px-6 py-8 md:px-10 md:py-10 text-[#ededd9]">
          <div
            className="flex justify-center items-center gap-1 text-[#f5c75b] mb-6"
            aria-label="5 star review"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="text-xl md:text-2xl">
                ★
              </span>
            ))}
          </div>

          <p className="italic text-lg md:text-xl leading-relaxed text-[#f5eee3]">
            &quot;I'm writing to express my sincere gratitude to Shipra ji for her
            exceptional assistance in helping me find my new home. She was
            incredibly knowledgeable, patient, and understanding throughout the
            entire process. Her honesty and dedication were truly commendable. I
            highly recommend her services to anyone searching for a new
            property.&quot;
          </p>

          <p className="mt-6 text-sm md:text-base text-[#e0d4c2]/90">
            — A grateful client of Shipra Realtors
          </p>
        </div>
      </div>
    </section>
  );
}

