'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import ImgSquircle from '@/public/images/img_squircle';
import styles from '@/styles/swiper-slide.module.css';
import Image from 'next/image';
import ImgBackgroundMal3_2 from '@/public/images/img_background_mal3_2.png'

interface malmalmalType {
  id: number,
  name: string,
  game: string,
  contents: string, 
  link: string,
  profile: string
}

interface swiperPropsDataType {
  type: string
  malData: [malmalmalType]
}
export default function Slide({ malData, type }: swiperPropsDataType){

  return (
    <>
      {
        type === "malmalmal" && (
          <Swiper
            className={styles.slide_container}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bullet_active,
              horizontalClass: styles.bullet_wrap
            }}
          >
            {
              malData.map((item) => {
                return (
                  <SwiperSlide className={styles.mal_slide} key={item.id}>
                    <Image src={ImgBackgroundMal3_2} alt="프랑스 국기 이미지" width="110" height="40" className={styles.mal_flag} />
                    <Link href="/view">
                      <ImgSquircle profile={item.profile}/>  
                      <dl className={styles.mal_text}>
                        <dt>{item.name}<span></span>{item.game}</dt>
                        <dd>{item.contents}</dd>
                      </dl>
                    </Link>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        )
      }
    </>
  );
};

