"use client";

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
    <ul className="flex items-center w-full border-b border-[#e6e7e9] border-solid box-border">
      {items.map((item) => {
        const isActive = path === item.link;
        return (
          <li className="text-center" key={item.id} style={{
            width: `${100 / items.length}%`
          }}>
            <Link href={item.link} className={`flex justify-center items-center h-10.5 text-[16px] tracking-[-1px]  relative ${isActive ? "font-bold text-[#278d8f]" : "font-light text-[#000]"}`}>
            {
              path === item.link ? <h1 className={`flex items-center relative h-full ${isActive ? "after:content-[''] after:w-full after:h-0.5 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-[#278d8f]" : ""}`}>{item.name}</h1> : <>{item.name}</>
            }
            </Link>
          </li>
        )
      })}
    </ul>    
  );
};

export default Menu;