import { API_URL } from '@/api';
import React from 'react';
import styles from '@/styles/news-list.style.module.css';
import Link from 'next/link';
import ImageWrap from '@/components/image-wrap';
import Section from '@/components/section';
import Title from '@/components/title';
import IconRankGold from '@/public/images/icon_rank_gold.png';
import IconRankSilver from '@/public/images/icon_rank_silver.png';
import Image from 'next/image';

interface newsGroupDataType {
  title: string,
  contents: [newsContentsDataType]
}

interface newsContentsDataType {
  id: number,
  thumbnail: string,
  player: boolean,
  title: string,
  media: string,
  contents: string
}

interface newsListPropsType {
  type: string
}

interface newsRankContentsDataType {
  id: number,
  rank: number,
  title: string
}

async function getNewsData(){
  const response = await fetch(`${API_URL}/news.json?c`);
  return response.json();
}

export default async function NewsList({ type }: newsListPropsType){
  
  const { data } = await getNewsData()
  const flatBehindData = data.behind.list.flat();
  const setMainBehindData:Array<newsContentsDataType> = []
  const setNewsPageData = data.news_page.page;
  const setRankingPageData = data.ranking.contents;

  flatBehindData.forEach((item:newsGroupDataType)  => {
    setMainBehindData.push(item.contents[0])
  })

  return (
    <>
    {
      type === "behind" && (
        <ul className={`${styles.news_wrap}`}>
          {
            setMainBehindData.map((item: newsContentsDataType, idx) => {
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
      )
    }
    {
      type === "newsPage" && (
        <>
          {
            setNewsPageData.map((news: newsGroupDataType, idx:number) => {
              return (
                <Section
                  key={idx}
                  name={["component_wrap"]}
                  type="normal"              
                >
                  {
                    news.title !== "" && (
                      <Title
                        text={news.title}
                        type="normal"
                        more={false}
                      />
                    )
                  }
                  <ul className={styles.news_wrap}>
                    {
                      news.contents.map((item: newsContentsDataType) => {
                        return (
                          <li className={item.media !== '' ? styles.single : styles.multi} key={item.id}>
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
                                  />
                                )
                              }
                              <div className={styles.text_wrap}>
                                <dt className={styles.title}>
                                  {item.title}
                                </dt>
                                {
                                  item.contents !== '' && item.media === '' ?
                                  <dd className={styles.text}>
                                    {item.contents}
                                  </dd>
                                  : 
                                  <dd className={styles.info}>
                                    <span className={styles.media}>{item.media}</span>
                                  </dd>
                                }
                              </div>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </Section>
              )
            })
          }
        </>
      )
    }
    {
      type === "rankPage" && (
        <ul className={`${styles.news_wrap} ${styles.rank}`}>
          {
            setRankingPageData?.map((item: newsRankContentsDataType) => {
              return (
              <li key={item.id}>
                <Link href="#">
                  <div className={styles.num_wrap}>
                    {
                      <Image src={item.rank <= 5 ? IconRankGold : IconRankSilver} alt="랭킹뉴스 배경" width="24" height="24"/>
                    }
                    <span className={styles.num}>{item.rank}</span>
                  </div>
                  <h2>{item.title}</h2>
                </Link>
              </li>
              )
            })
          }
        </ul>
      )
    }
    </>
  );
};

