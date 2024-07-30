"use client";

import styles from '@/components/navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const path = usePathname();

  const navItems = [
    {href: '/news', label: '주요뉴스'},
    {href: '/rank', label: '랭킹뉴스'},
    {href: '/behind', label: '비하인드'},
    {href: '/recent', label: '최신뉴스'},
  ]

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_menu}>
        <li>
          <Link href="/" className={path === "/" ? styles.active : ''}>홈</Link>
        </li> 
        {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={path === item.href ? styles.active : ''}>
            {path === item.href ? <h1>{item.label}</h1> : item.label}
          </Link>
        </li>
      ))}
      <Link href="#" aria-label="poll">

      </Link>
      </ul>
    </nav>
  );
};

export default Navigation;