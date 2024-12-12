'use client';

import { memo, useId } from 'react';
import Image from 'next/image';

import { servicesRadioButtonOptions } from '@/constants';
import Checkbox from '@/assets/icons/checkbox.svg';

import styles from './styles.module.css';

const ServiceSelector = () => {
  const id = useId();

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
            />
            <Image
              className={styles.serviceSelectorImage}
              src={option.image}
              width={118}
              height={132}
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

export default memo(ServiceSelector);
