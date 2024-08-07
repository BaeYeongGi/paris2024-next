import Title from '@/components/title';
import { API_URL } from '@/api';
import styles from '@/styles/medalist.module.css';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import IconGoldMedal from '@/public/images/icon_medal_gold.png';
import IconSilverMedal from '@/public/images/icon_medal_silver.png';
import IconBronzeMedal from '@/public/images/icon_medal_bronze.png';
import ImageWrap from '@/components/image-wrap';

interface medalistDataType {
  id: number,
  time: string,
  game: string,
  contents: string,
  medal: string,
  thumbnail: string
}

async function getMedalistData(){
  const response = await fetch(`${API_URL}/medal.json?5`);
  return response.json();
}

export default async function Medalist(){

  const { data } = await getMedalistData()

  const medalIcons = {
    gold: IconGoldMedal,
    silver: IconSilverMedal,
    bronze: IconBronzeMedal
  }

  // function getMedal(medal: string) {
  //   return medalIcons[medal];
  // }

  function getMedal(medal: string): StaticImageData {
    return (medalIcons as {[key: string]: StaticImageData})[medal];
  }

  return (
    <div>
      <Title
        text="메달리스트"
        type="box"
        more={true}
      />
      <ul className={styles.medalist_wrap}>
        {
          data.medalist.slice(0, 3).map((item: medalistDataType) => {
            return (
              <li key={item.id} className={styles[item.medal]}>
                <Image src={getMedal(item.medal)} alt={item.medal} width="18" height="25" className={styles.medal} />
                <Link href="#">
                  <span className={styles.time}>{item.time}</span>
                  <ImageWrap
                    type="single"
                    img={item.thumbnail}
                    title={item.game}
                    width={100}
                    height={60}
                  />
                  <div className={styles.text}>
                    <dt>{item.game}</dt>
                    <dd>{item.contents}</dd>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};
