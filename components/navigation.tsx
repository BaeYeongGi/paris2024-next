"use client";

import styles from '@/components/navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const path = usePathname();
  return (
    <>
      <ul className={`${styles.menu} ${styles.item4}`}>
        <li>
          {
            path === "/news" ? <Link href="/news" className={styles.active}><h1>주요뉴스</h1></Link> : <Link href="/news">주요뉴스</Link>
          }
        </li>        
        <li>
          {
            path === "/rank" ? <Link href="/rank" className={styles.active}><h1>랭킹뉴스</h1></Link> : <Link href="/rank">랭킹뉴스</Link>
          }
        </li>
        <li>
          {
            path === "/behind" ? <Link href="/behind" className={styles.active}><h1>비하인드</h1></Link> : <Link href="/behind">비하인드</Link>
          }
        </li>
        <li>
        {
            path === "/recent" ? <Link href="/recent" className={styles.active}><h1>최신뉴스</h1></Link> : <Link href="/recent">최신뉴스</Link>
          }
        </li>
      </ul>
    </>
  );
};

export default Navigation;