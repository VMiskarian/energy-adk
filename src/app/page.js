import { BaseLink } from '@/components/base-link';
import { servicesOptions, advantagesOptions } from '@/constants';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContentWrapper}>
      <section className={styles.homeSection}>
        <div>
          <h1 className={styles.homeSectionTitle}>
            Энергия, на которую можно положиться
          </h1>
          <div className={styles.homeSectionBottomArea}>
            <BaseLink href="/">Связаться с нами</BaseLink>
            <p>
              Надежный поставщик битума, масел, дизельного топлива и бензины для
              вашего бизнеса — качество, стабильность и профессиональный подход
            </p>
          </div>
        </div>
      </section>

      <section id="aboutCompany" className={styles.aboutCompanySection}>
        <div>
          <div className={styles.aboutCompanySectionLeftColumn}>
            <h2 className={styles.aboutCompanySectionTitle}>О компании</h2>
            <div>
              <p className={styles.aboutCompanySectionText}>
                ГК Энергия начала свой путь в Российской Федерации, где
                зарекомендовала себя как надежный поставщик нефтепродуктов. Из
                накопленного опыта и доверия клиентов родилась компания
                Energy-ADK, которая сегодня успешно осуществляет свою
                деятельность на территории Узбекистана и стран ближайшего
                зарубежья.
              </p>
              <p className={styles.aboutCompanySectionText}>
                спдо Energy-ADK является прямым партнером компании Газпром, что
                позволяет нам поддерживать лучшие цены при высочайшем качестве
                продукции. Мы располагаем собственным автопарком, включающим
                автомобили-битумовозы для перевозки наливных грузов, что
                гарантирует надежную и своевременную доставку с соблюдением всех
                норм транспортировки.
              </p>
            </div>
          </div>

          <div className={styles.aboutCompanySectionRightColumn}>
            <p>
              Наша миссия — быть стабильным и ответственным партнером для
              бизнеса наших клиентов, предоставляя высококачественные решения
              для топливной отрасли.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div>
          <div className={styles.servicesSectionTopArea}>
            <div>
              <h2 className={styles.servicesSectionTitle}>Услуги и товары</h2>
              <div className={styles.servicesSectionLinkWrapper}>
                <BaseLink href="" className={styles.servicesSectionWhiteLink}>
                  Заказать перевозку
                </BaseLink>
                <BaseLink
                  href="/shipping-calculation"
                  className={styles.servicesSectionPrimaryLink}
                >
                  Расчет доставки
                </BaseLink>
              </div>
            </div>
            <div className={styles.servicesSectionImageContainer}></div>
          </div>
          <div className={styles.servicesSectionOptionsList}>
            {servicesOptions.map((option) => (
              <div key={option.id} className={styles.servicesSectionOption}>
                <div className={styles.servicesSectionOptionImageContainer} />
                <div>
                  <div className={styles.servicesSectionOptionTitleWrapper}>
                    <div
                      className={
                        styles.servicesSectionOptionMobileImageContainer
                      }
                    />
                    <h3>{option.title}</h3>
                  </div>
                  <p>{option.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.advantagesSection}>
        <div>
          <h2 className={styles.advantagesSectionTitle}>
            Наши преимущества и сильные стороны
          </h2>
          <div className={styles.advantagesSectionOptions}>
            {advantagesOptions.map((options) => (
              <div key={options.id} className={styles.advantagesSectionOption}>
                {options.withImage && <div with-image="true" />}
                {options.title && (
                  <div>
                    <h3>{options.title}</h3>
                    <p className={styles.advantagesSectionOptionText}>
                      {options.text}
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
