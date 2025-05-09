"use client";
import { useEffect, useState, useRef } from 'react';
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

  const navStyle = 'w-full h-12 border-b border-[#efeff0] flex justify-between items-center px-5 box-border font-[S-Core-Dream-5] transition-colors duration-150';
  const fixed = {
    poll: `${navStyle} bg-[#304A97] fixed z-20 top-0 left-0 border-b-transparent`,
    nav: `${navStyle} bg-[#278D8F] fixed z-20 top-0 left-0 border-b-transparent`,
  }

  function setNavigationClassName(){
    if(isActive){
      return {
        fixedNavigation: path.includes('poll') ?
        fixed.poll : fixed.nav,
        fixedActiveMenu: 'text-[#ffffff] after:bg-[#ffffff]',
        fixedOthersMenu: path.includes('poll') ? 'text-[#989DC9]' : 'text-[#90B8B9]',
        fixedPollBar: 'after:bg-[#ffffff] [&>path]:fill-[#ffffff]',
        fixedPollMenu: path.includes('poll') ? '[&>path]:fill-[#FFFFFF]' : '[&>path]:fill-[#90B8B9]'
      }
    } else {
      return {
        fixedNavigation: navStyle,
        fixedActiveMenu: 'text-[#FF0F65] after:bg-[#ff0f65]',
        fixedOthersMenu: 'text-[#000000]',
        fixedPollBar: 'after:bg-[#FF0F65] [&>path]:fill-[#FF0F65]',
        fixedPollMenu: ''
      }
    }
  }

  return (
    <nav className={setNavigationClassName().fixedNavigation} ref={navigationRef}>
      <ul className='flex space-x-4'>
        {
          menus.map((item) => {
            return (
              <li key={item.name}>
                <Link href={item.href} className={`relative block leading-[48px] tracking-[-1.5px] text-[16px]
                  ${path === item.menu || (path.includes(item.menu) && item.menu !== '/')
                  ? `${setNavigationClassName().fixedActiveMenu} after:content-[""] after:w-full after:h-0.5 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 `
                  : setNavigationClassName().fixedOthersMenu}
                  `}>{item.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Link href="/poll" aria-label="poll" className={`flex items-center h-12 relative 
      ${path.includes('poll') ? `after:content-[""] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 ${setNavigationClassName().fixedPollBar}` : ''}
      `}
      >
        <IconPoll
          isPoll={path.includes('poll')}
          isPollMenu={setNavigationClassName().fixedPollMenu}
        />
      </Link>
    </nav>    
  );
};

export default Navigation;