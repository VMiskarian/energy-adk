'use client';

import { memo, useId } from 'react';
import PropTypes from 'prop-types';

import { transportationRadioButtonOptions } from '@/constants';

import styles from './styles.module.css';

const RadioButtons = ({ title }) => {
  const id = useId();

  return (
    <div className={styles.radioGroupWrapper}>
      <p className={styles.radioGroupTitle}>{title}</p>
      <div className={styles.radioGroup}>
        {transportationRadioButtonOptions.map((option) => (
          <label key={option.value} className={styles.radioButton}>
            <input
              type="radio"
              name={`radio-button-${id}`}
              value={option.value}
              className={styles.radioButtonInput}
            />
            <div className={styles.radioButtonIcon} />
            <p className={styles.radioButtonText}>{option.label}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

RadioButtons.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(RadioButtons);
