import { API_URL } from '@/api';
import React from 'react';
import styles from '@/styles/news-list.style.module.css';
import Link from 'next/link';
import ImageWrap from '@/components/image-wrap';

interface behindGroupDataType {
  title: string,
  contents: [behindDataType]
}

interface behindDataType {
  id: number,
  thumbnail: string,
  player: boolean,
  title: string,
  media: string
}

async function getBehindData(){
  const response = await fetch(`${API_URL}/news.json?a`);
  return response.json();
}

export default async function NewsList(){
  
  const { data } = await getBehindData()
  const flatBehindData = data.behind.list.flat();
  const setMainBehindData:Array<behindDataType> = []

  flatBehindData.forEach((item:behindGroupDataType)  => {
    setMainBehindData.push(item.contents[0])
  })

  return (
    <ul className={`${styles.news_wrap}`}>
        {
          setMainBehindData.map((item: behindDataType, idx) => {
            return (
              <li key={idx}>
                <Link href="#">
                  <ImageWrap
                    type="single"  
                    img={item.thumbnail}
                    title={item.title}
                    width={110}
                    height={66}
                  />
                  <p className={styles.text}>
                    {item.title}
                  </p>
                </Link>
              </li>
            )
          })
        }
    </ul>
  );
};

