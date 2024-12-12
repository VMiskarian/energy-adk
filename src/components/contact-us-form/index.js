'use client';

import {
  memo,
  useRef,
  useState,
  useCallback,
  useEffect,
  Suspense,
} from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from '@/components/button';
import Input from '@/components/input';
import RadioButtons from '@/components/radio-buttons';
import ServiceSelector from '@/components/service-selector';
import Cross from '@/assets/icons/cross.svg';

import styles from './styles.module.css';

const TelInput = dynamic(() => import('@/components/tel-input'), {
  ssr: false,
});
const Toast = dynamic(() => import('@/components/toast'), {
  ssr: false,
});
const Modal = dynamic(() => import('@/components/modal'), {
  ssr: false,
});

const ContactUsForm = ({ children, className }) => {
  const [name, setName] = useState({ val: '', error: null });
  const [email, setEmail] = useState({ val: '', error: null });
  const [country, setCountry] = useState({ val: '+7', error: null });
  const [phone, setPhone] = useState({ val: '', error: null });
  const [service, setService] = useState({ val: '', error: null });
  const [transportation, setTransportation] = useState({
    val: '',
    error: null,
  });

  const [showToast, setShowToast] = useState(false);

  const modalRef = useRef(null);

  const updateName = useCallback((val) => {
    setName({ val, error: null });
  }, []);
  const updateEmail = useCallback((val) => {
    setEmail({ val, error: null });
  }, []);
  const updatePhone = useCallback((val) => {
    setPhone({ val, error: null });
  }, []);
  const updateCountry = useCallback((val) => {
    setCountry({ val, error: null });
  }, []);
  const updateService = useCallback((val) => {
    setService({ val, error: null });
  }, []);
  const updateTransportation = useCallback((val) => {
    setTransportation({ val, error: null });
  }, []);

  const showModal = () => {
    modalRef.current?.showModal();
  };
  const closeModal = () => {
    modalRef.current?.close();
  };

  const sendForm = () => {
    let hasError = false;
    if (!name.val) {
      setName((prevState) => ({
        ...prevState,
        error: 'Это поле обязательно для заполнения',
      }));
      hasError = true;
    }
    if (!email.val) {
      setEmail((prevState) => ({
        ...prevState,
        error: 'Это поле обязательно для заполнения',
      }));
      hasError = true;
    }
    if (email.val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      hasError = !emailRegex.test(email.val);
      setEmail((prevState) => ({
        ...prevState,
        error: hasError ? 'Почта некорректная' : null,
      }));
    }
    if (!phone.val) {
      setPhone((prevState) => ({
        ...prevState,
        error: 'Это поле обязательно для заполнения',
      }));
      hasError = true;
    }
    if (!service.val) {
      setService((prevState) => ({
        ...prevState,
        error: 'Нужно выбрать какой-нибудь вариант',
      }));
      hasError = true;
    }
    if (!transportation.val) {
      setTransportation((prevState) => ({
        ...prevState,
        error: 'Нужно выбрать какой-нибудь вариант',
      }));
      hasError = true;
    }
    if (hasError) {
      console.log('Error');
      setShowToast(true);
    } else {
      console.log({
        name: name.val,
        email: email.val,
        country: country.val,
        phone: phone.val,
        service: service.val,
        transportation: transportation.val,
      });
    }
  };

  useEffect(() => {
    let timeout;
    if (showToast) {
      timeout = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [showToast]);

  return (
    <>
      <Button type="button" onClick={showModal} className={className}>
        {children}
      </Button>

      <Modal ref={modalRef}>
        <div className={styles.contactUsForm}>
          <h3>Отправить заявку</h3>
          <div className={styles.contactUsInputsWrapper}>
            <Input
              name="name"
              label="Ваше имя"
              value={name.val}
              onChange={updateName}
              placeholder="John Smith"
            />
            <Input
              name="email"
              label="Email"
              type="email"
              value={email.val}
              onChange={updateEmail}
              placeholder="Mail@example.com"
            />
            <TelInput
              label="Телефон для связи"
              type="number"
              value={phone.val}
              placeholder="(999)-999-99-99"
              onChange={updatePhone}
              onChangeCode={updateCountry}
            />
          </div>
          <ServiceSelector value={service.val} onChange={updateService} />
          <RadioButtons
            title="Транспортировка"
            value={transportation.val}
            onChange={updateTransportation}
          />
          <div className={styles.contactUsButtonWrapper}>
            <Button onClick={sendForm}>Отправить</Button>
          </div>
        </div>

        <button
          type="button"
          className={styles.contactUsIconButton}
          onClick={closeModal}
        >
          <Image src={Cross} alt="Close" width={40} height={40} />
        </button>

        <Toast show={showToast} onClose={() => setShowToast(false)}>
          Пожалуйста, заполните все обязательные поля
        </Toast>
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
