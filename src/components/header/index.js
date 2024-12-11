'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Logo from '@/assets/icons/logo.svg';
import Menu from '@/assets/icons/menu.svg';
import Cross from '@/assets/icons/cross.svg';

import styles from './styles.module.css';

const Modal = dynamic(() => import('@/components/modal'), {
  ssr: false,
});

export const Header = () => {
  const modalRef = useRef(null);

  const showModal = () => {
    modalRef.current?.showModal();
  };
  const closeModal = () => {
    modalRef.current?.close();
  };

  const anchorLinks = [
    { id: 1, href: '#aboutCompany', text: 'О КОМПАНИИ', onClick: closeModal },
    { id: 2, href: '#services', text: 'УСЛУГИ И ТОВАРЫ', onClick: closeModal },
    { id: 3, href: '#footer', text: 'КОНТАКТЫ', onClick: closeModal },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={130} height={45} />
          </Link>
          <nav className={styles.headerNavbar}>
            {anchorLinks.map((link) => (
              <a key={link.id} href={link.href} onClick={link.onClick}>
                {link.text}
              </a>
            ))}
          </nav>
          <div className={styles.headerButtonsWrapper}>
            <button onClick={() => console.log('ru')}>РУС</button>
            <button onClick={() => console.log('uz')}>УЗБ</button>
            <button
              type="button"
              className={styles.headerMenuButton}
              onClick={showModal}
            >
              <Image src={Menu} alt="Menu" width={36} height={36} />
            </button>
          </div>
        </div>
      </header>

      <Modal ref={modalRef}>
        <div className={styles.headerMobileNavbar}>
          <button
            type="button"
            onClick={() => {
              modalRef.current?.close();
            }}
            className={styles.headerCloseModalButton}
          >
            <Image src={Cross} alt="Menu" width={36} height={36} />
          </button>
          <nav>
            {anchorLinks.map((link) => (
              <a key={link.id} href={link.href} onClick={link.onClick}>
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </Modal>
    </>
  );
};
