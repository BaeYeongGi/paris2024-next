import styles from '@/styles/menu.module.css';
import Link from 'next/link';

interface itemsDataType {
  id: number
  name: string,
  link: string,
}

interface menuPropsDataType {
  items: Array<itemsDataType>;
}

const Menu = ({ items }: menuPropsDataType) => {
  return (
    <ul className={`${styles.menu}`}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.link}>
              {item.name}             
            </Link>
          </li>
        )
      })}
    </ul>
  );
};

export default Menu;