import { API_URL } from '@/api';
import styles from '@/styles/news-list.style.module.css';
import Link from 'next/link';
import ImageWrap from '@/components/image-wrap';
import Section from '@/components/section';
import Title from '@/components/title';
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
  photo: boolean,
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
  const response = await fetch(`${API_URL}/news.json?f`);
  return response.json();
}

export default async function NewsList({ type }: newsListPropsType){
  
  const { data } = await getNewsData()
  const setBehindPageData = data.behind;
  const setBehindData:Array<newsContentsDataType> = []


  setBehindPageData.list.flat().forEach((item:newsGroupDataType)  => {
    setBehindData.push(item.contents[0])
  })

  return (
    <>
    {
      type === "behind" && (
        <ul className={`${styles.news_wrap}`}>
          {
            setBehindData.map((item: newsContentsDataType, idx) => {
              return (
                <li key={idx}>
                  <Link href="#">
                    <ImageWrap
                      type="single"  
                      img={item.thumbnail}
                      title={item.title}
                      width={110}
                      height={66}
                      fill={false}

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
    </>
  );
};

