import { API_URL } from '@/api';
import PageTabsWrap from "@/components/page-tab-wrap";
import Section from '@/components/section';
import styles from '@/styles/news-list.style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import IconRankGold from '@/public/images/icon_rank_gold.png';
import IconRankSilver from '@/public/images/icon_rank_silver.png';
import { newsRankContentsDataType } from '@/types/news';

export const metadata = {
  title: "랭킹뉴스"
}

async function getNewsData(){
  const response = await fetch(`${API_URL}/news.json?f`);
  return response.json();
}

export default async function Ranking(){

  const { data } = await getNewsData()
  const setRankingPageData = data.ranking.contents;

  return (
    <>
    <PageTabsWrap type="rankPage" />
    <Section name={["component_wrap"]} type="normal">
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
    </Section>
    </>
  );
};