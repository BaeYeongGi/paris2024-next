'use client';
import Link from 'next/link';
import React from 'react';
import styles from '@/components/header.module.css';
import Image from 'next/image';
import iconGoldMedal from '@/public/images/icon_gold_medal.png';
import iconSilverMedal from '@/public/images/icon_silver_medal.png';
import iconBronzeMedal from '@/public/images/icon_bronze_medal.png';
import iconNateLogo from '@/public/images/icon_nate_logo.png';
import iconHeaderSearch from '@/public/images/icon_header_search.png';
import iconHeaderTitle from '@/public/images/icon_header_title.png';
import iconHeaderShare from '@/public/images/icon_header_share.png';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.header_top_area}>
        <ul className={styles.header_nav}>
          <li>
            <Link href="/" aria-label="네이트">
              <Image className={styles.logo} src={iconNateLogo} alt='네이트' width="22" height="22"/>
            </Link>
          </li>
          <li><Link href="#" className={styles.sports}>스포츠</Link></li>
          <li><Link href="#">뉴스</Link></li>
          <li><Link href="#">연예</Link></li>
        </ul>
        <a href="#" className={styles.search}>
          <Image src={iconHeaderSearch} alt="검색 페이지로 이동" width="22" height="22"/>
        </a>
      </div>
      <div className={styles.header_bottom_area}>
        <ul className={styles.title_wrap}>
          <li>
            <Link href="#" className={styles.title}>
              { path === "/" ?
              <h1><Image src={iconHeaderTitle} alt='봉쥬르 paris' width="102" height="52" /></h1>
              :
              <Image src={iconHeaderTitle} alt='봉쥬르 paris' width="102" height="52"/> }  
            </Link>
          </li>
          <li>
            <button className={`${styles.share} ${styles.gnb_share}`}>
              <Image src={iconHeaderShare} alt='공유하기' width="30" height="24"/>
            </button>
          </li>

        </ul>
        <Link href="#" className={styles.medal_wrap}>
            <p className={styles.rank}><span>종합</span> 12위</p>
            <ul className={`${styles.medal_count}`}>
              <li className={styles.gold}>
                <Image src={iconGoldMedal} alt='금메달 획득 수' width="35" height="35"/>
                <span>4</span>
              </li>
              <li className={styles.silver}>
                <Image src={iconSilverMedal} alt='은메달 획득 수' width="35" height="35"/>
                <span>6</span>
              </li>
              <li className={styles.bronze}>
                <Image src={iconBronzeMedal} alt='동메달 획득 수' width="35" height="35"/>
                <span>10</span>
              </li>
            </ul>
          </Link>
      </div>
    </header>
  );
};

export default Header;