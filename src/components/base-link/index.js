import Link from 'next/link';

import styles from './styles.module.css';

export const BaseLink = ({ href, children, className }) => (
  <Link href={href} className={`${styles.baseLink} ${className || ''}`}>
    {children}
  </Link>
);
