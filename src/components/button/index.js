'use client';

import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = ({ type = 'button', children, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className ?? ''}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default memo(Button);
