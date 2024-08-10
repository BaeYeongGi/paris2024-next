import styles from '@/styles/top-visual.module.css';
import Link from 'next/link';
import ImageWrap from '@/components/image-wrap';
import ImageMainVisualItem1 from '@/public/images/img_background_main1.png';
import ImageMainVisualItem2 from '@/public/images/img_background_main2.png';
import Image from 'next/image';
import { API_URL } from '@/api';

interface mainVisualDataType {
  id: number,
  game: string,
  title: string
}

async function getNewsData(){
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch(`${API_URL}/news.json`);
  return response.json();
}

export default async function TopVisual(){
  const { data } = await getNewsData();
  
  return (
    <section className={styles.main_visual}>
      <Image src={ImageMainVisualItem1} alt="파리 국기1" width="527" height="240" className={styles.visual_bg1} />
      <Image src={ImageMainVisualItem2} alt="파리 국기2" width="120" height="60" className={styles.visual_bg2} />      
      <Link href="/news/view" className={styles.img_container}>
        <ImageWrap
          type="text_in_image"
          img={data.main_visual.top.img}
          title={data.main_visual.top.title}
          contents={data.main_visual.top.contents}
          width={335}
          height={201}
          fill={false}

        />
      </Link>

      <ul className={styles.list}>
        {
          data.main_visual.list.map((item: mainVisualDataType) => {
            return (
              <li key={item.id}>
                <Link href="/news/view"><span>{item.game}</span>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};
