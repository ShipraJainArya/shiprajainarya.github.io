import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function ContactUs() {
  return (
    <section
      id="contact"
      className={`${dosis.className} py-20 bg-[#1c1410] text-[#f5eee3]`}
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
          <div className="space-y-5 text-xl md:text-2xl">
            <a
              href="tel:+919711909677"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-[#f5c75b] text-[#2b1c13] font-semibold shadow-md hover:bg-[#ffd76d] transition-colors"
            >
              +91 97119 09677
            </a>
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
    </section>
  );
}