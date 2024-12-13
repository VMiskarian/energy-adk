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
          {/* <Link href={'/' + params.locale ?? 'ru'}> */}
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
            <Link
              href="/ru"
              className={styles.i18nLink}
              // className={`${styles.i18nLink} ${
              //   params.locale === 'ru' ? styles.i18linkActive : ''
              // }`}
            >
              РУС
            </Link>
            <Link
              href="/uz"
              className={styles.i18nLink}
              // className={`${styles.i18nLink} ${
              //   params.locale === 'uz' ? styles.i18linkActive : ''
              // }`}
            >
              УЗБ
            </Link>
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

      <Modal ref={modalRef} className="mobile-navbar">
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
