import styles from '@/styles/image-wrap.module.css';
import Image from 'next/image';
import IconVideo from '@/public/images/icon_video.png';
import IconPhoto from '@/public/images/icon_photo.png';

interface imageDataType {
  type: string,
  img: string,
  title: string,
  contents?: string,
  width: number,
  height: number,
  media?: boolean
} 


const ImageWrap = ({ type, img, title, contents, width, height, media }: imageDataType) => {
  return (
    <>
    {
      type === "text_in_image" && (
        <div className={`${styles.img_wrap} ${styles.video} ${styles.main}`}
          style={{
            width: '100%',
            height
          }}
        >
          <Image className={styles.top_img} src={img} alt={title} width={width} height={height} />
          <div className={styles.text}>
            <span className={styles.sub_title}>{title}</span>
            <p className={styles.contents}>{contents}</p>
          </div>
        </div>
      )
    }
    {
      type === "photo" && (
        <div className={styles.img_wrap} style={{
          width,
          height,
        }}>
          <Image src={img} alt={title} width={width} height={height} />
          <div className={styles.photo_text}>
            <Image src={IconPhoto} alt="사진" width="30" height="30" />
            <p>{title}</p>
          </div>
        </div>
      )
    }
    {
      type === "single" && (
        <div className={`${styles.img_wrap} ${styles.single}`} style={{
          width,
          height,
          flex: 'none'
        }}>
          <Image className={styles.img} src={img} alt={title} width={width} height={height} />
          {
            media && (
              <Image src={IconVideo} alt="영상" width="26" height="26" className={styles.icon}/>
            )
          }
        </div>
      )  
    }
    </>
  );
};

export default ImageWrap;