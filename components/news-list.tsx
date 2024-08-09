import { API_URL } from '@/api';
import React from 'react';
import styles from '@/styles/news-list.style.module.css';
import Link from 'next/link';
import ImageWrap from '@/components/image-wrap';
import Section from '@/components/section';
import Title from '@/components/title';

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

async function getNewsData(){
  const response = await fetch(`${API_URL}/news.json?b`);
  return response.json();
}

export default async function NewsList({ type }: newsListPropsType){
  
  const { data } = await getNewsData()
  const flatBehindData = data.behind.list.flat();
  const setMainBehindData:Array<newsContentsDataType> = []
  const setNewsPageData = data.news_page.page;


  flatBehindData.forEach((item:newsGroupDataType)  => {
    setMainBehindData.push(item.contents[0])
  })


  return (
    <>
    {type === "behind" && (
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
    )}
    {
      type === "news" && (
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
    </>
  );
};

