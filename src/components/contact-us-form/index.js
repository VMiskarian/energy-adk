"use client";

import { memo, useRef, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";
import PropTypes from "prop-types";

import Button from "@/components/button";
import Input from "@/components/input";
import RadioButtons from "@/components/radio-buttons";
import ServiceSelector from "@/components/service-selector";
import Cross from "@/assets/icons/cross.svg";
import getTranslation from "@/utils/i18n";

import styles from "./styles.module.css";

const TelInput = dynamic(() => import("@/components/tel-input"), {
  ssr: false,
});
const Toast = dynamic(() => import("@/components/toast"), {
  ssr: false,
});
const Modal = dynamic(() => import("@/components/modal"), {
  ssr: false,
});

const ContactUsForm = ({ children, className }) => {
  const params = useParams();
  const t = getTranslation(params.locale);
  const tRequestModal = t["requestModal"];
  const tInputs = tRequestModal["inputs"];
  const tServicesSelector = tRequestModal["servicesSelector"];
  const tRadioButtons = tRequestModal["radioButtons"];

  const [name, setName] = useState({ val: "", error: null });
  const [email, setEmail] = useState({ val: "", error: null });
  const [country, setCountry] = useState({ val: "+7", error: null });
  const [phone, setPhone] = useState({ val: "", error: null });
  const [service, setService] = useState({ val: "", error: null });
  const [transportation, setTransportation] = useState({
    val: "",
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
        error: tInputs[0]["error"],
      }));
      hasError = true;
    }
    if (!email.val) {
      setEmail((prevState) => ({
        ...prevState,
        error: tInputs[1]["error"][0],
      }));
      hasError = true;
    }
    if (email.val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      hasError = !emailRegex.test(email.val);
      setEmail((prevState) => ({
        ...prevState,
        error: hasError ? tInputs[1]["error"][0] : null,
      }));
    }
    if (!phone.val) {
      setPhone((prevState) => ({
        ...prevState,
        error: tInputs[2]["error"],
      }));
      hasError = true;
    }
    if (!service.val) {
      setService((prevState) => ({
        ...prevState,
        error: tServicesSelector["error"],
      }));
      hasError = true;
    }
    if (!transportation.val) {
      setTransportation((prevState) => ({
        ...prevState,
        error: tRadioButtons["error"],
      }));
      hasError = true;
    }
    if (hasError) {
      console.log("Error");
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
          <h3>{tRequestModal["title"]}</h3>
          <div className={styles.contactUsInputsWrapper}>
            <Input
              name="name"
              label={tInputs[0]["label"]}
              value={name.val}
              onChange={updateName}
              placeholder="John Smith"
            />
            <Input
              name="email"
              label={tInputs[1]["label"]}
              type="email"
              value={email.val}
              onChange={updateEmail}
              placeholder="Mail@example.com"
            />
            <TelInput
              label={tInputs[2]["label"]}
              type="number"
              value={phone.val}
              placeholder="(999)-999-99-99"
              onChange={updatePhone}
              onChangeCode={updateCountry}
            />
          </div>
          <ServiceSelector value={service.val} onChange={updateService} />
          <RadioButtons
            title={tRadioButtons["title"]}
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
          {tRequestModal["toast"]}
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
