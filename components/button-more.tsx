'use client';

import styles from '@/styles/button-more.module.css';
import useStore from '@/store/store';

interface buttonMorePropsType {
  text: string,
  direction: string,
  length: number
}

export default function ButtonMore({ text, direction, length }: buttonMorePropsType ){
  const { newsVisibleCount, setNewsVisibleCount } = useStore();

  return (
    <>
    {
      newsVisibleCount < length && (
        <>
          <button
            className={styles.button}
            onClick={setNewsVisibleCount}  
          >{text}<span className={`${styles.arrow} ${styles[direction]}`}></span></button>
          <hr className={styles.component_division} />
        </>
      )
    }
    </>
  );
};

