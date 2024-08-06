'use client';
import IconScrollHome from '@/public/images/icon_scroll_home';
import IconScrollTop from '@/public/images/icon_scroll_top';
import styles from '@/styles/scroll-buttons.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ScrollButtons = () => {
  const [height, setHeight] = useState(false);

  useEffect(() => {
    const fixedScrollButtons = () => {
      if(window.scrollY >= 150){
        setHeight(true);
      } else {
        setHeight(false);
      }
    }
    window.addEventListener('scroll', fixedScrollButtons);
    return () => {
      window.removeEventListener('scroll', fixedScrollButtons);
    }
  },[height])

  return (
    <div className={height ? `${styles.scroll_btns_wrap} ${styles.fixed}` : styles.scroll_btns_wrap}>
      <Link href="/" className={styles.home}>
        <IconScrollHome />
      </Link>
      <Link href="#" className={styles.top}>
        <IconScrollTop />
      </Link>
    </div>
  );
};

export default ScrollButtons;