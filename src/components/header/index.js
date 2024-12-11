'use client';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/icons/logo.svg';
import Menu from '@/assets/icons/menu.svg';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={130} height={45} />
        </Link>
        <nav className={styles.headerNavbar}>
          <a href="">О КОМПАНИИ</a>
          <a href="">УСЛУГИ И ТОВАРЫ</a>
          <a href="">КОНТАКТЫ</a>
        </nav>
        <div className={styles.headerButtonsWrapper}>
          <button onClick={() => console.log('ru')}>РУС</button>
          <button onClick={() => console.log('uz')}>УЗБ</button>
          <button type="button" className={styles.headerMenuButton}>
            <Image src={Menu} alt="Menu" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
