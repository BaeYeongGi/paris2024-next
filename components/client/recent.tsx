'use client';

import Link from "next/link";
import styles from '@/styles/news-list.style.module.css';
import ImageWrap from '@/components/image-wrap';
import TextWrap from '@/components/text-wrap';
import { newsContentsDataType } from '@/types/news';
import useStore from '@/store/store';

interface clientRecentProps {
  data: newsContentsDataType[];
}

export default function ClientRecent({ data }: clientRecentProps){
  const { newsVisibleCount } = useStore();
  return (
    <>
    <ul className={`${styles.news_wrap} ${styles.list}`}>
    {
      data.slice(0, newsVisibleCount).map((item) => {
        return (
          <li key={item.id}>
            <Link href="#">
            {
              item.thumbnail !== '' && (
                  <ImageWrap
                    type="single"  
                    img={item.thumbnail}
                    title=""
                    width={110}
                    height={66}
                    media={item.player}
                    fill={false}
                  />
                )
              }
              <TextWrap
                title={item.title}
                contents=""
                media={item.media}
                date={item.date}
              />
            </Link>
          </li>
        )
      })
    }
  </ul>

  </>
  );
};