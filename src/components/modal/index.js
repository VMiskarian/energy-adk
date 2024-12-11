'use client';

import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Modal = ({ ref, className, children }) => {
  return createPortal(
    <dialog
      open={ref.current?.open}
      ref={ref}
      className={`${styles.modal} ${className ?? ''}`}
      onClick={(event) => {
        const isBackdrop = event.target === event.currentTarget;
        if (isBackdrop && ref.current) {
          ref.current.close();
        }
      }}
    >
      {children}
    </dialog>,
    document.querySelector('body')
  );
};

Modal.propTypes = {
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  className: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;
