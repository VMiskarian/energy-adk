import getTranslation from "@/utils/i18n";

import styles from "./styles.module.css";

export const Footer = ({ locale }) => {
  const t = getTranslation(locale);
  const tFooter = t["footer"];
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3 className={styles.footerTitle}>{tFooter["title"]}</h3>
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
          <li className={styles.footerListItem}>{tFooter["address"]}</li>
        </ul>
        <div className={styles.footerBottomArea}>
          <span>{tFooter["companyName"]}</span>
          <span>{year}</span>
          <span>{tFooter["privacyPolicy"]}</span>
        </div>
      </div>
    </footer>
  );
};
