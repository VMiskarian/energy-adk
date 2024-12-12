'use client';

import { memo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Button from '@/components/button';
import Input from '@/components/input';
import RadioButtons from '@/components/radio-buttons';
import ServiceSelector from '@/components/service-selector';
import Cross from '@/assets/icons/cross.svg';

import styles from './styles.module.css';

const Modal = dynamic(() => import('@/components/modal'), {
  ssr: false,
});

const ContactUsForm = ({ children, className }) => {
  const [country, setCountry] = useState('ru');
  const [phone, setPhone] = useState('');
  const modalRef = useRef(null);

  const showModal = () => {
    modalRef.current?.showModal();
  };
  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <Button type="button" onClick={showModal} className={className}>
        {children}
      </Button>

      <Modal ref={modalRef}>
        <div>
          <form className={styles.contactUsForm}>
            <h3>Отправить заявку</h3>
            <div className={styles.contactUsInputsWrapper}>
              <Input label="Ваше имя" />
              <Input label="Email" type="email" />
              <Input label="Телефон для связи" type="number" />
              <PhoneInput country={country} value={phone} />
            </div>
            <ServiceSelector />
            <RadioButtons title="Транспортировка" />
          </form>

          <button
            type="button"
            className={styles.contactUsIconButton}
            onClick={closeModal}
          >
            <Image src={Cross} alt="Close" width={40} height={40} />
          </button>
        </div>
      </Modal>
    </>
  );
};

ContactUsForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  className: PropTypes.string,
};

export default memo(ContactUsForm);
