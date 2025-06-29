import './globals.css';
import { ReactNode } from 'react';
import { Inter,Dosis } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dosis = Dosis({ subsets: ['latin'] });

export const metadata = {
  title: 'Shipra Realtors',
  description: 'Find Your Dream Home in Mundhwa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#ededd9] text-gray-800`}>
        {children}
      </body>
    </html>
  );
}