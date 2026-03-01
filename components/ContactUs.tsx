"use client";

import { Dosis } from "next/font/google";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function ContactUs() {
  return (
    <section
      id="contact"
      className={`${dosis.className} scroll-mt-24 pt-32 pb-24 bg-[#1c1410] text-[#f5eee3]`}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide mb-4">
          Let&apos;s Connect
        </h2>

        <p className="mb-10 text-xl md:text-2xl text-[#e0d4c2]/90">
          Have questions or want to get started? Reach out directly and we&apos;ll
          help you with your real estate needs.
        </p>

        <div className="mx-auto max-w-3xl bg-[#2b1c13]/95 border border-[#ededd9]/25 rounded-3xl shadow-2xl px-6 py-8 md:px-10 md:py-10">
          <div className="space-y-6 text-xl md:text-2xl relative">
            <div className="relative inline-block w-full">
              <a
                href="https://wa.me/919711909677"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full px-6 py-4 rounded-2xl bg-[#f5c75b] text-[#2b1c13] font-semibold shadow-md hover:bg-[#ffd76d] transition-colors overflow-hidden group"
              >
                {/* Subtle shine effect on hover */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-[#2b1c13]"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  +91 97119 09677
                </span>
              </a>

              {/* Clicking Cursor Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                animate={{
                  opacity: [0.5, 1, 1, 0.5],
                  scale: [1, 0.9, 1, 1],
                  x: [0, -10, -10, 0],
                  y: [0, -10, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.8, 1]
                }}
                className="absolute right-4 md:right-10 top-1/2 w-8 h-8 text-[#1c1410] pointer-events-none drop-shadow-md z-20"
              >
                <MousePointer2 strokeWidth={2.5} className="w-full h-full fill-[#1c1410]/30" />
                {/* Click Ripple Effect */}
                <motion.div
                  animate={{
                    scale: [0.5, 2],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeOut",
                    times: [0, 0.2, 0.8]
                  }}
                  className="absolute -top-1 -left-1 w-4 h-4 rounded-full border-2 border-[#f5c75b]"
                />
              </motion.div>
            </div>

            <div className="pt-2 space-y-4">
              <a
                href="mailto:shiprajainarya@gmail.com"
                className="block text-[#f5eee3] hover:text-[#f5c75b] transition-colors"
              >
                shiprajainarya@gmail.com
              </a>
              <a
                href="https://instagram.com/shiprajainarya"
                target="_blank"
                className="block text-[#f5eee3] hover:text-[#f5c75b] transition-colors"
              >
                @shiprajainarya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}