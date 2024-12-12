'use client';
import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Input = ({
  type = 'text',
  name,
  label,
  value,
  placeholder,
  onChange,
  disabled = false,
}) => (
  <label className={styles.inputLabel}>
    {typeof label === 'string' && <p className={styles.inputText}>{label}</p>}

    <input
      name={name}
      className={styles.input}
      type={type}
      value={value}
      placeholder={placeholder}
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
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

export default memo(Input);
