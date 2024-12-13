"use client";

import { memo, useId } from "react";
import { useParams } from "next/navigation";
import PropTypes from "prop-types";

import { transportationRadioButtonOptions } from "@/constants";
import getTranslation from "@/utils/i18n";

import styles from "./styles.module.css";

const RadioButtons = ({ title, value, onChange }) => {
  const params = useParams();
  const t = getTranslation(params.locale);
  const tRadioButtons = t["requestModal"]["radioButtons"];
  const tOptions = tRadioButtons["options"];
  const id = useId();

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={styles.radioGroupWrapper}>
      <p className={styles.radioGroupTitle}>{title}</p>
      <div className={styles.radioGroup}>
        {transportationRadioButtonOptions.map((option, index) => (
          <label key={option.value} className={styles.radioButton}>
            <input
              type="radio"
              name={`radio-button-${id}`}
              value={option.value}
              className={styles.radioButtonInput}
              checked={value === option.value}
              onChange={handleChange}
            />
            <div className={styles.radioButtonIcon} />
            <p className={styles.radioButtonText}>{tOptions[index]}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

RadioButtons.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(RadioButtons);
