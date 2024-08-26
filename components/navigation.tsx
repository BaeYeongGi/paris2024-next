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

  const menus = [
    { menu: "/", href: "/", name: "홈" },
    { menu: "/news", href: "/news", name: "뉴스" },
    { menu: "/photo", href: "/photo", name: "포토" },
    { menu: "/schedule", href: "/schedule/date", name: "일정/결과"},
    { menu: "/medal", href: "/medal/rank", name: "메달" },
  ];

  function setNavigationClassName(){
    if(isActive){
      return path.includes('poll') ? `${styles.nav} ${styles.fixed} ${styles.poll}` : `${styles.nav} ${styles.fixed}`
    } else {
      return `${styles.nav}`
    }
  }

  return (
    <nav className={setNavigationClassName()} ref={navigationRef}>
      <ul className={styles.nav_menu}>
        {
          menus.map((item) => {
            return (
              <li key={item.name}>
                <Link href={item.href} className={
                  path === item.menu || (path.includes(item.menu) && item.menu !== '/') ? styles.active : ''}>{item.name
                  }</Link>
              </li>
            )
          })
        }
      </ul>
      <Link href="/poll" aria-label="poll" className={
        path.includes('poll') ? `${styles.poll} ${styles.active}` : styles.poll 
      }>
        <IconPoll />
      </Link>
    </nav>
  );
};

export default Navigation;