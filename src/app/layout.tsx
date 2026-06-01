import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
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
      className={`${raleway.variable} h-full antialiased flex items-center justify-center`}
    >
      <body className="">{children}</body>
    </html>
  );
}
