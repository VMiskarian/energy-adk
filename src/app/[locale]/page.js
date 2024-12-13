import BaseLink from "@/components/base-link";
import ContactUsForm from "@/components/contact-us-form";
import { servicesOptions, advantagesOptions } from "@/constants";
import { availableLanguages } from "@/constants";
import getTranslation from "@/utils/i18n";

import styles from "./page.module.css";
import { Suspense } from "react";

export default async function Home({ params }) {
  const locale = (await params).locale;
  const t = getTranslation(locale);
  const homePage = t["homePage"];
  const homeSection = homePage["homeSection"];
  const aboutCompanySection = homePage["aboutCompanySection"];
  const servicesSection = homePage["servicesSection"];
  const servicesSectionOptions = servicesSection["options"];
  const advantagesSection = homePage["advantagesSection"];
  const advantagesSectionOptions = advantagesSection["options"];

  return (
    <div className={styles.pageContentWrapper}>
      <section className={styles.homeSection}>
        <div>
          <h1 className={styles.homeSectionTitle}>{homeSection["title"]}</h1>
          <div className={styles.homeSectionBottomArea}>
            <Suspense fallback={null}>
              <ContactUsForm>{homeSection["linkText"]}</ContactUsForm>
            </Suspense>
            <p>{homeSection["text"]}</p>
          </div>
        </div>
      </section>

      <section id="aboutCompany" className={styles.aboutCompanySection}>
        <div>
          <div className={styles.aboutCompanySectionLeftColumn}>
            <h2 className={styles.aboutCompanySectionTitle}>
              {aboutCompanySection["title"]}
            </h2>
            <div>
              <p className={styles.aboutCompanySectionText}>
                {aboutCompanySection["text1"]}
              </p>
              <p className={styles.aboutCompanySectionText}>
                {aboutCompanySection["text2"]}
              </p>
            </div>
          </div>

          <div className={styles.aboutCompanySectionRightColumn}>
            <p>{aboutCompanySection["text3"]}</p>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div>
          <div className={styles.servicesSectionTopArea}>
            <div>
              <h2 className={styles.servicesSectionTitle}>
                {servicesSection["title"]}
              </h2>
              <div className={styles.servicesSectionLinkWrapper}>
                <BaseLink href="" className={styles.servicesSectionWhiteLink}>
                  {servicesSection["buttonText"]}
                </BaseLink>
                <BaseLink
                  href={`/${locale}/shipping-calculation`}
                  className={styles.servicesSectionPrimaryLink}
                >
                  {servicesSection["linkText"]}
                </BaseLink>
              </div>
            </div>
            <div className={styles.servicesSectionImageContainer}></div>
          </div>
          <div className={styles.servicesSectionOptionsList}>
            {servicesOptions.map((option, index) => (
              <div key={option.id} className={styles.servicesSectionOption}>
                <div className={styles.servicesSectionOptionImageContainer} />
                <div>
                  <div className={styles.servicesSectionOptionTitleWrapper}>
                    <div
                      className={
                        styles.servicesSectionOptionMobileImageContainer
                      }
                    />
                    <h3>{servicesSectionOptions[index]["title"]}</h3>
                  </div>
                  <p>{servicesSectionOptions[index]["text"]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.advantagesSection}>
        <div>
          <h2 className={styles.advantagesSectionTitle}>
            {advantagesSection["title"]}
          </h2>
          <div className={styles.advantagesSectionOptions}>
            {advantagesOptions.map((options, index) => (
              <div key={options.id} className={styles.advantagesSectionOption}>
                {options.withImage && <div with-image="true" />}
                {options.title && (
                  <div>
                    <h3>{advantagesSectionOptions[index]["title"]}</h3>
                    <p className={styles.advantagesSectionOptionText}>
                      {advantagesSectionOptions[index]["text"]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
