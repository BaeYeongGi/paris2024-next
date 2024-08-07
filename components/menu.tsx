"use client";

import styles from '@/styles/menu.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface itemsDataType {
  id: number
  name: string,
  link: string,
}

interface menuPropsDataType {
  items: Array<itemsDataType>;
}

const Menu = ({ items }: menuPropsDataType) => {
  const path = usePathname();
  return (
    <ul className={`${styles.menu}`}>
      {items.map((item) => {
        return (
          <li key={item.id} style={{
            width: `${100 / items.length}%`
          }}>
            <Link href={item.link} className={path === item.link ? styles.active : ''}>
            {
              path === item.link ? <h1>{item.name}</h1> : <>{item.name}</>
            }
            </Link>
          </li>
        )
      })}
    </ul>
  );
};

export default Menu;