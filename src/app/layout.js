import { Suspense } from 'react';

import russoOne from '@/assets/fonts/russo-one';
import tildaSansVF from '@/assets/fonts/tilda-sans-vf';
import '@/assets/styles/globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Energy ADK',
  description: 'Энергия, на которую можно положиться',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${russoOne.variable} ${tildaSansVF.variable}`}>
        <div>
          <Suspense fallback={null}>
            <Header />
          </Suspense>

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
