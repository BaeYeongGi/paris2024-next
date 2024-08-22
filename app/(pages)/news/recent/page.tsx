import { API_URL } from '@/api';
import Section from '@/components/section';
import styles from '@/styles/news-list.style.module.css';
import Link from 'next/link';
import ImageWrap from '@/components/image-wrap';
import TextWrap from '@/components/text-wrap';
import { newsContentsDataType } from '@/types/news';

export const metadata = {
  title: "비하인드뉴스"
}

async function getNewsData(){
  const response = await fetch(`${API_URL}/news.json?h`);
  return response.json();
}

export default async function Recent(){

  const { data } = await getNewsData()
  const setRecentPageData = data.recent_news;

  return (
    <Section name={["component_wrap"]} type="normal">
      <ul className={`${styles.news_wrap} ${styles.list}`}>
        {
          setRecentPageData.map((item: newsContentsDataType) => {
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
    </Section> 
  );
};

