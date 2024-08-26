'use client';
import Link from 'next/link';
import styles from '@/styles/header.module.css';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import iconNateLogo from '@/public/images/icon_nate_logo.png';
import iconHeaderSearch from '@/public/images/icon_header_search.png';
import iconHeaderTitle from '@/public/images/icon_header_title.png';
import iconHeaderShare from '@/public/images/icon_header_share.png';
import ImgBackgroundHeader1 from '@/public/images/img_background_header_type1.png';
import ImgBackgroundHeader2 from '@/public/images/img_background_header_type2.png';
import ImgBackgroundHeader3 from '@/public/images/img_background_header_type3.png';
import ImgBackgroundHeader4 from '@/public/images/img_background_header_type4.png';
import ImgBackgroundHeader5 from '@/public/images/img_background_header_type5.png';
import { isAndroidWebView } from '@/utils/navigator';

interface medalType {
  name: string,
  class: string,
  count: number,
  img: string
}
interface headerProps {
  total: number
  medal: [medalType]
}

const Header = ({total, medal}: headerProps) => {
  const path = usePathname();

  const headerBackgrounds = {
    '': ImgBackgroundHeader1,
    news: ImgBackgroundHeader1,
    photo: ImgBackgroundHeader2,
    schedule: ImgBackgroundHeader3,
    medal: ImgBackgroundHeader4,
    poll: ImgBackgroundHeader5
  }

  function getHeaderBackground(pathName: string){
    return (headerBackgrounds as {[key:string]: StaticImageData}) [pathName];
  }

  const shareHandler = async () => {
    try {
      if(isAndroidWebView()){
        await navigator.clipboard.writeText(path);
        alert('URL이 클립보드에 복사되었습니다 (Android WebView 에서만 제공)')
      } else if(navigator.share){
        await navigator.share({
          title: document.title,
          url: path
        });
      } else {
        alert('현재 공유기능을 사용할 수 없습니다.')
      }
    } catch (err) {
      console.log('share navigator error',err)
    }
  }

  return (
    <header className={path.includes('poll') ? `${styles.header} ${styles.poll}` : styles.header}>
      <Image className={styles.header_bg} src={getHeaderBackground(path.split('/')[1])} alt="" width="161" height="112" />
      <div className={styles.header_top_area}>
        <ul className={styles.header_nav}>
          <li>
            <Link href="https://m.nate.com" aria-label="네이트">
              <Image className={styles.logo} src={iconNateLogo} alt='네이트' width="22" height="22"/>
            </Link>
          </li>
          <li><Link href="https://m.news.nate.com/spo" className={styles.sports}>스포츠</Link></li>
          <li><Link href="https://m.news.nate.com/">뉴스</Link></li>
          <li><Link href="https://m.news.nate.com/ent">연예</Link></li>
        </ul>
        <a href="https://m.news.nate.com/search" className={styles.search}>
          <Image src={iconHeaderSearch} alt="검색 페이지로 이동" width="22" height="22"/>
        </a>
      </div>
      <div className={styles.header_bottom_area}>
        <ul className={styles.title_wrap}>
          <li>
            <Link href="/" className={styles.title}>
              { path === "/" ?
              <h1><Image src={iconHeaderTitle} alt='봉쥬르 paris' width="102" height="52" /></h1>
              :
              <Image src={iconHeaderTitle} alt='봉쥬르 paris' width="102" height="52"/> }  
            </Link>
          </li>
          <li>
            <button className={`${styles.share} ${styles.gnb_share}`} onClick={shareHandler}>
              <Image src={iconHeaderShare} alt='공유하기' width="30" height="24"/>
            </button>
          </li>
        </ul>
        <Link href="/medalist" className={styles.medal_wrap}>
            <p className={styles.rank}><span>종합</span> {total}위</p>
            <ul className={`${styles.medal_count}`}>
            {
              medal.map((item: medalType) => {
                return (
                  <li key={item.name} className={styles[item.class]}>
                    <Image src={item.img} alt={`${item.name} 획득 수`} width="35" height="35" />
                    <span>{item.count}</span>
                  </li>
                )
              })
            }
            </ul>
          </Link>
      </div>
    </header>
  );
};

export default Header;