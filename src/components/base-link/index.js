import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

export const BaseLink = ({ href, children, className }) => (
  <Link href={href} className={`${styles.baseLink} ${className || ''}`}>
    {children}
  </Link>
);

BaseLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};
