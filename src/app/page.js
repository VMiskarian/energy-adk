import { BaseLink } from '@/components/base-link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContentWrapper}>
      <section className={styles.homeSection}>
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
      </section>
    </div>
  );
}
