import styles from '@/styles/image-wrap.module.css';
import Image from 'next/image';

interface imageDataType {
  type: string,
  img: string,
  title: string,
  contents: string
} 


const ImageWrap = ({ type, img, title, contents }: imageDataType) => {
  return (
    <>
    {
      type === "text_in_image" && (
        <div className={`${styles.img_wrap} ${styles.video} ${styles.main}`}>
          <Image src={img} alt={title} width={335} height={201} />
          <div className={styles.text}>
            <span className={styles.sub_title}>{title}</span>
            <p className={styles.contents}>{contents}</p>
          </div>
        </div>

      )
    }
    </>
  );
};

export default ImageWrap;