'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ButtonLanguages from './ButtonLanguages';
import BurgerMenu from './BurgerMenu';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./Header.module.scss";

const languagesList = [
    { text: 'English', code: 'en' },
    { text: 'Русский', code: 'ru'},
    { text: 'Deutsche', code: 'de'},
    { text: 'Українська', code: 'uk' },
    { text: 'Français', code: 'fr' },
    { text: 'Español', code: 'es' },
    { text: 'Italiano', code: 'it'},
  ];

export default function Header () {
    const [isOpen, setIsOpen] = useState(false); 
    const t = useTranslations('header');

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
      };

      const openBurgerMenu = () => {
        setIsOpen(!isOpen);  
      };

    return <div className={styles.header}>
        <div className={styles.nav}>
        <Link href='#infoBanner1' className={styles.nav_item}>{t('nav-item-1')}</Link>
        <Link href="#infoBanner2" className={styles.nav_item}>{t('nav-item-2')}</Link>
        <div onClick={handleLogoClick} className={styles.nav_item}>
        <Image  src='/images/Header/logo.png' alt='logo' width={136} height={81} />
        </div>
        <Link href="#learnMore" className={styles.nav_item}>{t('nav-item-3')}</Link>
        <div className={styles.nav_item}>
        <ButtonLanguages menu={languagesList}/>
        </div>
        <Link href="#contactUs"><button className={styles.nav_item__button}>{t('button')}</button></Link>
        
    </div>

    <div className={styles.navMobile} >
    <div className={styles.navMobile_item__round}>
    <Image  className={styles.navMobile_item__imgPh} src='/images/Header/phone.png' alt='logo' width={24} height={24}/>
    </div>
    <div onClick={handleLogoClick} className={styles.navMobile_item}>
        <Image  src='/images/Header/logo.png' alt='logo' width={136} height={81} />
        </div>
    <div onClick={openBurgerMenu} className={styles.navMobile_item__round}>
    <Image  className={styles.navMobile_item__imgMn} src='/images/Header/menu.png' alt='logo' width={28} height={18}/>
    <BurgerMenu isOpen={isOpen} openBurgerMenu={openBurgerMenu}/> 
    </div>
    </div>
  
    </div>
    
}