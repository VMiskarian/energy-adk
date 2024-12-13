"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname, useParams } from "next/navigation";

import Logo from "@/assets/icons/logo.svg";
import Menu from "@/assets/icons/menu.svg";
import Cross from "@/assets/icons/cross.svg";
import getTranslation from "@/utils/i18n";

import styles from "./styles.module.css";

const Modal = dynamic(() => import("@/components/modal"), {
  ssr: false,
});

export const Header = () => {
  const pathname = usePathname();
  const params = useParams();
  const modalRef = useRef(null);

  const t = getTranslation(params.locale);
  const tHeader = t["header"];

  const getRoute = (locale) => {
    const pathnameArray = pathname.split("/");
    pathnameArray[1] = locale;
    return pathnameArray.join("/");
  };

  const showModal = () => {
    modalRef.current?.showModal();
  };
  const closeModal = () => {
    modalRef.current?.close();
  };

  const anchorLinks = [
    {
      id: 1,
      href: "#aboutCompany",
      text: tHeader["link1"],
      onClick: closeModal,
    },
    { id: 2, href: "#services", text: tHeader["link2"], onClick: closeModal },
    { id: 3, href: "#footer", text: tHeader["link3"], onClick: closeModal },
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
            <Link
              href={getRoute("ru")}
              className={`${styles.i18nLink} ${
                params.locale === "ru" ? styles.i18linkActive : ""
              }`}
            >
              {tHeader["lang1"]}
            </Link>
            <Link
              href={getRoute("uz")}
              className={`${styles.i18nLink} ${
                params.locale === "uz" ? styles.i18linkActive : ""
              }`}
            >
              {tHeader["lang2"]}
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
