'use client';

import { Quicksand, Lato } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['600', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function HomeServices() {
  const services = [
    {
      name: 'Plumbing',
      desc: 'From leaks to installations and upgrading appliances, get reliable plumbing help.',
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
      name: 'Interior Decor',
      desc: 'Bring artistic upscaling to your abode, complete with furniture and structural modifications',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#2e2119] text-[#ededd9] text-center">
      <div className="max-w-10xl mx-auto px-6">
        <h2 className={`text-5xl font-bold mb-6 ${quicksand.className}`}>
          Home Services at Your Fingertips
        </h2>

        <p className={`text-lg mb-12 py-5 ${lato.className}`}>
          We've partnered with verified professionals to bring essential home services directly to your doorstep.
        </p>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...services, ...services].map(({ name, desc }, index) => (
              <div
                key={`${name}-${index}`}
                className="service-card"
              >
                <h3 className={`text-lg font-bold mb-3 ${quicksand.className}`}>
                  {name}
                </h3>
                <p className={`text-[1rem] leading-relaxed ${lato.className}`}>
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
          background: linear-gradient(to right, #2e2119, transparent);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #2e2119, transparent);
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
          min-height: 180px;
          background: #e1c08d;
          color: #2e2119;
          padding: 1.75rem 1.25rem;
          border-radius: 0.75rem;
          border: 1px solid #8c6239;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
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