import styles from '@/styles/text-wrap.module.css';

interface textWrapPropsDataType {
  title: string,
  contents: string,
  media: string,
  date: string,
}

export default function TextWrap({ title, contents, media, date }: textWrapPropsDataType){
  return (
    <div className={styles.text_wrap}>
      <dt className={styles.title}>
        {title}
      </dt>
      {
        contents !== '' && (
          <dd className={styles.text}>
            {contents}
          </dd>
        )
      }          
      {
        (media !== '' || date !== '') && (
          <dd className={styles.info}>
            {media !== '' && <span className={styles.media}>{media}</span>}   
            {date !== '' && <span className={styles.time}>{date}</span>}
          </dd>
        )
      }
    </div>
  );
};

