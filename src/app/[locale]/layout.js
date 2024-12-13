import { Suspense } from "react";
import { redirect } from "next/navigation";

import "@/assets/styles/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { availableLanguages } from "@/constants";

export const metadata = {
  title: "Energy ADK",
  description: "Энергия, на которую можно положиться",
};

export default async function RootLayout({ children, params }) {
  const locale = (await params).locale;

  if (!availableLanguages[locale]) {
    redirect(`/ru`);
  }

  return (
    <div>
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <main>{children}</main>

      <Footer locale={locale} />
    </div>
  );
}
