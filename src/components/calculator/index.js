'use client';
import { useState, memo } from 'react';

import { Input } from '@/components/input';
import styles from './styles.module.css';

export const Calculator = () => {
  const [distance, setDistance] = useState('');

  const price = distance * 1000;
  const priceWithTaxes = distance * 1000 * 1.2;

  const onChange = (newValue) => {
    setDistance(newValue);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <p>Онлайн калькулятор</p>
      <div className={styles.calculator}>
        <div>
          <h3>Введите расстояние</h3>
          <Input
            label="Расcтояние перевозки в км"
            type="number"
            value={distance}
            onChange={onChange}
          />
        </div>
        <div className={styles.calculatorDivider} />
        <div>
          <h3>стоимость перевозки</h3>
          <div className={styles.calculatorPriceArea}>
            <Input label="без ндс" type="number" value={price} disabled />
            <Input
              label="c ндс"
              type="number"
              value={priceWithTaxes}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};
