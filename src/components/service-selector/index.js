'use client';

import { memo, useId } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { servicesRadioButtonOptions } from '@/constants';
import Checkbox from '@/assets/icons/checkbox.svg';

import styles from './styles.module.css';

const ServiceSelector = ({ value, onChange }) => {
  const id = useId();

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={styles.serviceSelectorWrapper}>
      <p className={styles.serviceSelectorTitle}>услуги</p>
      <div role="radiogroup" className={styles.serviceSelector}>
        {servicesRadioButtonOptions.map((option) => (
          <label key={option.label} className={styles.serviceSelectorOption}>
            <input
              className={styles.serviceSelectorInput}
              type="radio"
              value={option.value}
              name={`service-selector-${id}`}
              checked={value === option.value}
              onChange={handleChange}
            />
            <Image
              className={styles.serviceSelectorImage}
              src={option.image}
              width={200}
              height={220}
              aria-hidden
              alt=""
            />
            <p className={styles.serviceSelectorText}>{option.label}</p>

            <Image
              className={styles.serviceSelectorOptionIcon}
              src={Checkbox}
              width={20}
              height={20}
              aria-hidden
              alt=""
            />
          </label>
        ))}
      </div>
    </div>
  );
};

ServiceSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(ServiceSelector);
