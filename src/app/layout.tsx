import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['cyrillic'],
  weight: ['400', '500', '600'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Saveur',
  description: 'Страниц бронирования столика ресторана Saveur',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} h-full antialiased flex items-center justify-center`}
    >
      <body>{children}</body>
    </html>
  );
}
