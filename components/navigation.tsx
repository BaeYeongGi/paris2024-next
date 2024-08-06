"use client";
import { useEffect, useState, useRef } from 'react';
import styles from '@/styles/navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconPoll from '@/public/images/icon_poll';
// import useStore from '@/store/store';

const Navigation = () => {
  const navigationRef = useRef<HTMLElement>(null);
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  // const { setNavigationOffsetTop } = useStore();

  useEffect(() => {
    if(navigationRef.current){
      setHeight(navigationRef.current.offsetTop);
    }
    const fixedHeader = () => {
      if(window.scrollY >= height){
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
    window.addEventListener('scroll', fixedHeader);
    return () => {
      window.removeEventListener('scroll', fixedHeader);
    }
  },[height])

  return (
    <nav className={isActive ? `${styles.nav} ${styles.fixed}` : styles.nav} ref={navigationRef}>
      <ul className={styles.nav_menu}>
        <li>
          <Link href="/" className={path === "/" ? styles.active : ''}>홈</Link>
        </li> 
        <li>
          <Link href="/news" className={path === "/news" || path === "/view" ? styles.active : ''}>뉴스</Link>
        </li> 
        <li>
          <Link href="/photo" className={path === "/photo" ? styles.active : ''}>포토</Link>
        </li> 
        <li>
          <Link href="/dateschedule" className={path === "/dateschedule" || path === "/eventschedule" ? styles.active : ''}>일정/결과</Link>
        </li> 
        <li>
          <Link href="/medal" className={path === "/medal" || path === "/medalist" ? styles.active : ''}>메달</Link>
        </li> 
      </ul>
      <Link href="/poll" aria-label="poll" className={
        path === "/poll" || path === "/pollresult" ? `${styles.poll} ${styles.active}` : styles.poll 
      }>
        <IconPoll />
      </Link>
    </nav>
  );
};

export default Navigation;