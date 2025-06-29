'use client';

import { Quicksand, Lato } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['600'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function HomeServices() {
  const services = [
    {
      name: 'Plumbing',
      desc: 'From leaks to installations, get reliable plumbing help.',
    },
    {
      name: 'Electricity',
      desc: 'Certified electricians for repairs and upgrades.',
    },
    {
      name: 'Painting',
      desc: 'Interiors, exteriors, touch-ups — all handled smoothly.',
    },
    {
      name: 'Hardware',
      desc: 'Fix locks, handles, or setup new fittings hassle-free.',
    },
  ];

  return (
    <section className="py-20 bg-[#3b2a1a] text-[#ededd9] text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-6 ${quicksand.className}`}>
          Home Services at Your Fingertips
        </h2>
        <p className={`text-lg mb-12 ${lato.className}`}>
          We've partnered with verified professionals to bring essential home services directly to your doorstep.
          From emergency plumbing to detailed interior painting — we’ve got reliable experts on call.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl gap-16 mx-auto">
          {services.map(({ name, desc }) => (
            <div
              key={name}
              className="bg-[#5c3a1e] p-6 rounded-xl shadow border border-[#8c6239]"
            >
              <h3 className={`text-lg font-semibold mb-2 ${quicksand.className}`}>
                {name}
              </h3>
              <p className={`text-sm text-[#ededd9] ${lato.className}`}>
                {desc}
              </p>
            </div>
          ))}
        </div>
        <p className={`text-lg mt-16 ${lato.className}`}>
          Other services include Window Maintenance, Water Purifier Maintenance
        </p>
      </div>
    </section>
  );
}