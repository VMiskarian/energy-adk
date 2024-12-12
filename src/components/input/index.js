'use client';
import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Input = ({ type = 'text', label, value, onChange, disabled = false }) => (
  <label className={styles.inputLabel}>
    {typeof label === 'string' && <p className={styles.inputText}>{label}</p>}

    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
      disabled={disabled}
    />
  </label>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default memo(Input);
