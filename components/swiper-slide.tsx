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
import IconVideo from '@/public/images/icon_video.png';
import Title from '@/components/title'

interface malmalmalType {
  id: number,
  name: string,
  game: string,
  contents: string, 
  link: string,
  profile: string
}

interface newsSlideGroupType {
  title: string,
  contents: []
}

interface newsSlideContentsType {
  id: number,
  thumbnail: string,
  player: boolean,
  title: string,
  media: string,
  contents:string
}

interface swiperPropsDataType {
  type: string
  malData?: malmalmalType[],
  newsSlideData: []
}

export default function Slide({ malData, newsSlideData, type }: swiperPropsDataType){
  const flatNewsSlideData = newsSlideData?.flat();

  console.log('newsLSide', flatNewsSlideData)

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
              malData?.map((item) => {
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
      {
        type === "news" && (
          <Swiper
            className={styles.slide_container}
            modules={[Pagination]}
            pagination={{
            clickable: true,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bullet_active,
            horizontalClass: styles.bullet_wrap
          }}>
            {
              flatNewsSlideData.map((news: newsSlideGroupType, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <Title text={news.title} type="normal"/>
                    <ul className={`${styles.news_wrap} ${styles.list}`} key={''}>
                    {
                      news.contents.map((item: newsSlideContentsType) => {
                        return (
                          <li className={styles.img_item}>
                            <Link href="#">
                              {
                                item.thumbnail !== '' && (
                                  <div className={styles.img_wrap}>
                                    <Image src={item.thumbnail} alt='' width="110" height="66" />
                                    {item.player && (
                                      <Image src={IconVideo} alt="영상" width="26" height="26" />
                                    )}
                                  </div>
                                )
                              }
                              <div className={styles.text_wrap}>
                                <dt className={styles.title}>
                                  {item.title}
                                </dt>
                                <dd className={styles.info}>
                                  <span className={styles.media}>{item.media}</span>
                                </dd>
                              </div>
                            </Link>
                          </li>
                        )
                      })
                    }
                    </ul>
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

