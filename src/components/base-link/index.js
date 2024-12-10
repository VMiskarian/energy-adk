import Link from 'next/link';

import styles from './styles.module.css';

export const BaseLink = ({ href, children }) => (
  <Link href={href} className={styles.baseLink}>
    {children}
  </Link>
);
