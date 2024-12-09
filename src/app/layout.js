import { Suspense } from 'react';

import russoOne from '@/assets/fonts/russo-one';
import tildaSansVF from '@/assets/fonts/tilda-sans-vf';
import '@/assets/styles/globals.css';
import { Header } from '@/components/header';

export const metadata = {
  title: 'Energy ADK',
  description: 'Энергия, на которую можно положиться',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${russoOne.variable} ${tildaSansVF.variable}`}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
