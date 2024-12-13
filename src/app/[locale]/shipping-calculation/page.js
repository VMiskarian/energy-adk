import { Suspense } from "react";

import Calculator from "@/components/calculator";
import ContactUsForm from "@/components/contact-us-form";
import getTranslation from "@/utils/i18n";

import styles from "./page.module.css";

export default async function ShippingCalculation({ params }) {
  const locale = (await params).locale;
  const t = getTranslation(locale);
  const tShippingCalculation = t["shippingCalculationPage"];

  return (
    <section className={styles.shippingCalculationSection}>
      <div>
        <h3>{tShippingCalculation["title"]}</h3>
        <p>{tShippingCalculation["text"]}</p>
        <Suspense fallback={null}>
          <Calculator />
        </Suspense>
        <div className={styles.shippingCalculationSectionImageContainer} />
        <Suspense fallback={null}>
          <div className={styles.buttonWrapper}>
            <ContactUsForm>{tShippingCalculation["buttonText"]}</ContactUsForm>
          </div>
        </Suspense>
      </div>
    </section>
  );
}
