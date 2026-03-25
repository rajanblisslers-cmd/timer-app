import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Mono, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto_mono = Roboto_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-mono' });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Timer App MVP',
  description: 'A simple, reliable timer application.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
