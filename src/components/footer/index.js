import styles from './styles.module.css';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3 className={styles.footerTitle}>Контакты</h3>
        <ul className={styles.footerList}>
          <li className={styles.footerListItem}>
            <a
              className={styles.footerListItemLink}
              href="mailto:n.tsvetkov@mail.ru"
            >
              n.tsvetkov@mail.ru
            </a>
          </li>
          <li className={styles.footerListItem}>
            <a className={styles.footerListItemLink} href="tel:+79200142226">
              +7 (920) 014 22 26
            </a>
          </li>
          <li className={styles.footerListItem}>
            107078, Россия, г. Москва, вн.тер.г. Муниципальный округ
            Красносельский, пер. Басманный, д.5, помещ. 1, ком.1
          </li>
        </ul>
        <div className={styles.footerBottomArea}>
          <span>ООО &quot;ЭНЕРГИЯ&quot;</span>
          <span>{year}</span>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
    </footer>
  );
};
