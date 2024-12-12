'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';

import closeIcon from '@/assets/icons/close.svg';

import styles from './styles.module.css';

const Toast = ({ show, children, onClose }) => {
  return (
    <div className={`${styles.toast} ${show ? styles.toastShow : ''}`}>
      <span>{children}</span>
      <button type="button" onClick={onClose}>
        <Image src={closeIcon} width={24} height={24} alt="close toast" />
      </button>
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
};

export default Toast;
