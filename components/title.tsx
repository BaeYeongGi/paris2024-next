import styles from '@/styles/title.module.css';
import Link from 'next/link';

interface titleType {
  text: string,
  type: string,
}

const Title = ({ text, type }: titleType ) => {

  const date = new Date();
  const week = date.getDay();
  const daysOfWeek = ['일', '월', '화', '수', '목', '금'];
  const dayOfWeekName = daysOfWeek[week];

  return (
    <>
      {
        type === "schedule" && (
          <div className={`${styles.top} ${styles.box}`}>
            <h2 className={styles.title}>{`${date.getMonth() + 1}.${date.getDate()}.${dayOfWeekName} 경기 일정`}</h2>
            <Link href="#" className={styles.more}>더보기</Link>
          </div>
          )
      }
      {
        type === "normal" && (
          <div className={`${styles.top} ${styles.remove_border}`}>
            <h2 className={styles.title}>{text}</h2>
          </div>
        )
      }
    </>

  );
};

export default Title;