import './globals.css';
import { ReactNode } from 'react';
import { Inter,Dosis } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dosis = Dosis({ subsets: ['latin'] });

export const metadata = {
  title: 'Real Estate Experts in Mundwha - Shipra Realtors',
  description: 'Find your dream home in Mundhwa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-[#ededd9] text-gray-800`}>
        {children}
      </body>
    </html>
  );
}