'use client';

import { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import countries from './countries.json';
import styles from './styles.module.css';
import Image from 'next/image';

const countriesMap = countries.reduce((acc, country) => {
  acc[country.iso] = country;
  return acc;
}, {});

const TelInput = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  onChangeCode,
  disabled = false,
}) => {
  const listRef = useRef(null);
  const [selectedCountry, setSelectedCounty] = useState(countriesMap['RU']);
  const [showList, setShowList] = useState(false);

  const selectCountry = (country) => {
    const newSelectedCountry = countriesMap[country.iso];
    setSelectedCounty(newSelectedCountry);
    onChangeCode(newSelectedCountry.code);
    onChange('');
    setShowList(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setShowList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <label className={styles.inputLabel}>
      {typeof label === 'string' && <p className={styles.inputText}>{label}</p>}

      <input
        name={name}
        className={styles.input}
        type="tel"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        disabled={disabled}
      />

      <button
        type="button"
        className={styles.countryButton}
        onClick={() => setShowList((prevState) => !prevState)}
      >
        <Image src={selectedCountry.flag} alt="flag" width={24} height={24} />
        <div className={styles.countryButtonArrow} />
        <span>{selectedCountry.code}</span>
      </button>

      <ul
        ref={listRef}
        className={`${styles.countryList} ${
          showList ? styles.countryListShow : ''
        }`}
      >
        {countries.map((country) => (
          <li key={country.iso}>
            <button
              type="button"
              className={`${styles.countryListItemButton} ${
                country.iso === selectedCountry.iso
                  ? styles.countryListItemButtonSelected
                  : ''
              }`}
              onClick={() => selectCountry(country)}
              title={country.name}
            >
              <Image src={country.flag} alt="flag" width={24} height={24} />
              <span>{country.code}</span>
              <span className={styles.countryListCountyName}>
                {country.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </label>
  );
};

TelInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default memo(TelInput);
