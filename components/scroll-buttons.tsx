'use client';
import IconScrollHome from '@/public/images/icon_scroll_home';
import IconScrollTop from '@/public/images/icon_scroll_top';

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

  const styles = {
    wrap: 'fixed right-[15px] bottom-[-100px] rounded-[40px] border-b border-solid border-[#ededed] overflow-hidden z-10 shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] transition-[bottom] duration-300',
    wrapFixed: 'bottom-[15px]',
    link: 'flex justify-center items-center w-[44px] h-[40px] bg-[#ffffff]',
  }

  return (
    <div className={`${styles.wrap} ${height ? styles.wrapFixed : ''}`}>
      <Link href="/" className={`${styles.link} border-b border-solid border-[#ededed]`}>
        <IconScrollHome />
      </Link>
      <Link href="#" className={`${styles.link} p-0`}>
        <IconScrollTop />
      </Link>
    </div>
  );
};

export default ScrollButtons;