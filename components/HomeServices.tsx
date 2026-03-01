'use client';

import { Dosis, Lato } from 'next/font/google';

const dosis = Dosis({ subsets: ['latin'], weight: ['400', '600'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function HomeServices() {
  const services = [
    {
      name: 'Interior Decor',
      desc: 'Bring artistic upscaling to your abode, complete with furniture and structural modifications',
    },
    {
      name: 'Electricity',
      desc: 'Certified electricians for repairs and upgrades, one stop to all hassles.',
    },
    {
      name: 'Painting',
      desc: 'Interiors, exteriors, touch-ups — all handled smoothly.',
    },
    {
      name: 'Hardware',
      desc: 'Fix locks, handles, or setup new fittings hassle-free.',
    },
    {
      name: 'Plumbing',
      desc: 'From leaks to installations and upgrading appliances, get reliable plumbing help.',
    }
  ];

  return (
    <section id="about" className="pt-32 pb-20 bg-[#1c1410] text-[#f5eee3] text-center">
      <div className="max-w-10xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 ${dosis.className}`}>
          Home Services at Your Fingertips
        </h2>

        <p className={`text-lg md:text-xl mb-12 py-5 text-[#e0d4c2]/90 ${lato.className}`}>
          We've partnered with verified professionals to bring essential home services directly to your doorstep.
        </p>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...services, ...services].map(({ name, desc }, index) => (
              <div
                key={`${name}-${index}`}
                className="service-card"
              >
                <div className="flex items-center justify-center mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#2e2119] text-[#f5c75b] text-sm font-semibold shadow-sm">
                    {index + 1}
                  </span>
                </div>
                <h3 className={`text-lg md:text-xl font-semibold mb-3 ${dosis.className}`}>
                  {name}
                </h3>
                <p className={`text-[0.95rem] md:text-base leading-relaxed text-[#2e2119]/90 ${lato.className}`}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className={`text-lg mt-16 ${lato.className}`}>
          Other services include Window Maintenance, Water Purifier Maintenance
        </p>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 20px;
          height: 100%;
          z-index: 2;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #1c1410, transparent);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #1c1410, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 5rem;
          width: max-content;
          animation: marquee 25s linear infinite;
          padding-bottom: 1rem;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .service-card {
          width: 220px;
          min-height: 190px;
          background: radial-gradient(circle at top left, #f7e1b3, #e1c08d);
          color: #2e2119;
          padding: 1.75rem 1.5rem 1.9rem;
          border-radius: 0.9rem;
          border: 1px solid #c49b63;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
          flex-shrink: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.24);
          border-color: #f5c75b;
          background: radial-gradient(circle at top left, #ffe2a8, #e8c892);
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* 🔥 MOBILE BEHAVIOR */
        @media (max-width: 768px) {
          .marquee-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .marquee-wrapper::before,
          .marquee-wrapper::after {
            display: none;
          }

          .marquee-track {
            animation: none;
            gap: 1.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .service-card {
            cursor: grab;
          }

          .marquee-wrapper::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}