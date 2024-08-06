import styles from '@/styles/title.module.css';
import Link from 'next/link';
import IconPoll from '@/public/images/icon_poll';

interface titleType {
  text: string,
  type: string,
  more: boolean
}

const Title = ({ text, type, more }: titleType ) => {
  return (
    <>
      {
        type === "box" && (
          <div className={`${styles.top} ${styles.box}`}>
            <h2 className={styles.title}>{text}</h2>
            {more && (
              <Link href="#" className={styles.more}>더보기</Link>
            )}
          </div>
          )
      }
      {
        type === "normal" && (
          <div className={`${styles.top} ${styles.remove_border}`}>
            {
              text === "poll" ? <IconPoll/> : <h2 className={styles.title}>{text}</h2>
            }
            {more && (
              <Link href="#" className={styles.more}>더보기</Link>
            )}
          </div>
        )
      }
    </>

  );
};

export default Title;