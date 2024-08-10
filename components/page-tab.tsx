import { API_URL } from '@/api';
import Link from 'next/link';
import styles from '@/styles/page-tab-wrap.module.css';

interface pageTabPropsType {
  type: string
}

interface rankingDateType {
  id: number,
  dayOfTheWeek: string,
  date: string,
  state: string
}

async function getData(API_URL: string){
  const response = await fetch(API_URL);
  return response.json();
}

export default async function PageTab({type}: pageTabPropsType){

  const [newsData] = await Promise.all([
    getData(`${API_URL}/news.json?10`)
  ]);

  const setRankingDate = newsData.data.ranking.date;

  return (
    <>
      {
        type === "rankPage" && (
          <ul className={`${styles.date_wrap} ${styles.rank}`}>
          {
            setRankingDate.map((item: rankingDateType) => {
              return (
                <li key={item.id}>
                  <Link href="#" scroll={item.state === "invalid" ? false : true} className={styles[item.state]}>
                    <span className={styles.week}>{item.dayOfTheWeek}</span>
                    <span className={styles.date}>{item.date}</span>
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
