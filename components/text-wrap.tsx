import styles from '@/styles/text-wrap.module.css';

interface textWrapPropsDataType {
  title: string,
  contents: string,
  media: string
}

export default function TextWrap({ title, contents, media }: textWrapPropsDataType){
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
        media !== '' && (
          <dd className={styles.info}>
          <span className={styles.media}>{media}</span>
        </dd>
        )
      }      
    </div>
  );
};

