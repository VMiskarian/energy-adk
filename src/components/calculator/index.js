"use client";

import { useState, memo } from "react";
import { useParams } from "next/navigation";

import Input from "@/components/input";
import getTranslation from "@/utils/i18n";

import styles from "./styles.module.css";

const Calculator = () => {
  const params = useParams();
  const t = getTranslation(params.locale);
  const tCalculator = t["calculator"];

  const [distance, setDistance] = useState("");

  const price = distance * 1000;
  const priceWithTaxes = distance * 1000 * 1.2;

  const onChange = (newValue) => {
    setDistance(newValue);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <p>{tCalculator["name"]}</p>
      <div className={styles.calculator}>
        <div>
          <h3>{tCalculator["subtitle1"]}</h3>
          <Input
            label={tCalculator["inputLabel1"]}
            type="number"
            value={distance}
            onChange={onChange}
            placeholder={tCalculator["placeholder"]}
          />
        </div>
        <div className={styles.calculatorDivider} />
        <div>
          <h3>{tCalculator["subtitle2"]}</h3>
          <div className={styles.calculatorPriceArea}>
            <Input
              label={tCalculator["inputLabel2"]}
              type="number"
              value={price}
              disabled
            />
            <Input
              label={tCalculator["inputLabel3"]}
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

export default memo(Calculator);
