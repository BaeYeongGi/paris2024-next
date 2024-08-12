import { API_URL } from '@/api';
import PageTabsWrap from "@/components/page-tab-wrap";
import Section from '@/components/section';
import Title from '@/components/title';
import styles from '@/styles/news-list.style.module.css';
import ImageWrap from '@/components/image-wrap';
import Link from 'next/link';
import { newsGroupDataType, newsContentsDataType } from '@/types/news';
import TextWrap from '@/components/text-wrap';

export const metadata = {
  title: "주요뉴스"
}

async function getNewsData(){
  const response = await fetch(`${API_URL}/news.json?f`);
  return response.json();
}

export default async function News(){

  const { data } = await getNewsData()
  const setNewsPageData = data.news_page.page;

  return (
    <>
      <PageTabsWrap type="datePage"/>   
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
                                fill={false}

                              />
                            )
                          }
                          <TextWrap
                            title={item.title}
                            contents={item.contents}
                            media={item.media}
                          />
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


  );
};
