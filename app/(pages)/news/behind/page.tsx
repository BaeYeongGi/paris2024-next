import { API_URL } from '@/api';
import Section from '@/components/section';
import styles from '@/styles/news-list.style.module.css';
import Title from '@/components/title';
import Link from 'next/link';
import ImageWrap from '@/components/image-wrap';
import { newsGroupDataType, newsContentsDataType } from '@/types/news';
import TextWrap from '@/components/text-wrap';

export const metadata = {
  title: "비하인드 뉴스"
}

async function getNewsData(){
  const response = await fetch(`${API_URL}/news.json?f`);
  return response.json();
}

export default async function Behind(){

  const { data } = await getNewsData()
  const setBehindPageData = data.behind;

  return (
    <>
      {
        setBehindPageData.list.flat().map((news: newsGroupDataType, idx:number) => {
          return (              
            <Section name={["component_wrap"]} type="normal" key={idx}>
              <>
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
                            contents=""
                            media={item.media}
                            date=""
                          />
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>                  
              </>
            </Section>
          )
        })
      }
      <Section name={["component_wrap"]} type="normal">
        <Title
          text={setBehindPageData.photo.title}
          type="normal"
          more={false}
        />
        <ul className={`${styles.news_wrap} ${styles.photo}`}>
        {
          setBehindPageData.photo.contents.map((item: newsContentsDataType) => {
            return (
              <li key={item.id}>
                <Link href="#">
                  <ImageWrap
                    type="single"  
                    img={item.thumbnail}
                    title=""
                    width={0}
                    height={97}
                    media={item.photo}
                    fill={true}
                  />
                  <h2 className={styles.title}>{item.title}</h2>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </Section>    
    </>
  );
};

