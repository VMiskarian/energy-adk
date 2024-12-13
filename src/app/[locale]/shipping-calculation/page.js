import { Suspense } from 'react';

import BaseLink from '@/components/base-link';
import Calculator from '@/components/calculator';

import styles from './page.module.css';

export default function ShippingCalculation() {
  return (
    <section className={styles.shippingCalculationSection}>
      <div>
        <div className={styles.shippingCalculationSectionContentWrapper}>
          <div>
            <h3>РАСЧИТАТЬ СТОИМОСТЬ ДОСТАВКИ</h3>
            <Suspense fallback={null}>
              <Calculator />
            </Suspense>
          </div>
          <div>
            <p>
              тут вы можете расчитать примерную стоимость доставки груза. Для
              более подробного расчёта, пожалуйста, отправьте заявку, чтобы
              связаться с менеджером и уточнить детали
            </p>
            <div className={styles.shippingCalculationSectionImageContainer} />
          </div>
        </div>
        <BaseLink href="" className={styles.servicesSectionWhiteLink}>
          Оставить заявку
        </BaseLink>
      </div>
    </section>
  );
}
