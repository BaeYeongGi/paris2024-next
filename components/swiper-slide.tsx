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

import Title from '@/components/title'
import ImageWrap from '@/components/image-wrap';
import IconRankBulletGold from '@/public/images/icon_rank_gold.png';
import IconRankBulletSilver from '@/public/images/icon_rank_silver.png';

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

interface photoDataType {
  id: number,
  img: string,
  title: string
}

interface rankingDataType {
  id: number,
  rank: number,
  title: string
}

interface swiperPropsDataType {
  type: string
  malData?: malmalmalType[],
  photoData: photoDataType[],
  newsSlideData: []
  rankingData: []
}

export default function Slide({
  type,
  malData,
  newsSlideData,
  photoData,
  rankingData
}: swiperPropsDataType){

  const setRankingData = [];
  const setNewsSlideData = newsSlideData?.flat();

  for(let i = 0; i < rankingData?.length; i += 5){
    const chunk = rankingData?.slice(i, i + 5);
    setRankingData.push(chunk);
  }


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
                    <Link href="/news/view">
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
        type === "newsSlide" && (
          <Swiper
            className={styles.slide_container}
            modules={[Pagination]}
            autoHeight={true}
            pagination={{
              clickable: true,
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bullet_active,
              horizontalClass: styles.bullet_wrap
            }}>
            {
              setNewsSlideData.map((news: newsSlideGroupType, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <Title
                      text={news.title}
                      type="normal"
                      more={false}
                    />
                    <ul className={`${styles.news_wrap} ${styles.list}`}>
                    {
                      news.contents.map((item: newsSlideContentsType) => {
                        return (
                          <li className={item.media !== '' ? styles.single : styles.multi} key={item.id}>
                            <Link href="#">
                              {
                                item.thumbnail !== '' && (
                                  <ImageWrap
                                    type="single"  
                                    img={item.thumbnail}
                                    title=""
                                    width={110}
                                    height={66}
                                    media={item.player}
                                  />
                                )
                              }
                              <div className={styles.text_wrap}>
                                <dt className={styles.title}>
                                  {item.title}
                                </dt>
                                {
                                  item.contents !== '' && item.media === '' ?
                                  <dd className={styles.text}>
                                    {item.contents}
                                  </dd>
                                  : 
                                  <dd className={styles.info}>
                                    <span className={styles.media}>{item.media}</span>
                                  </dd>
                                }
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
      {
        type === "photo" && (
          <Swiper
          className={`${styles.slide_container} ${styles.photo_slide}`}
          modules={[Pagination]}
          slidesPerView={'auto'}
          spaceBetween={12}
          pagination={{
            clickable: true,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bullet_active,
            horizontalClass: styles.bullet_wrap
          }}>
            {
              photoData.slice(0, 10).map((item) => {
                return (
                  <SwiperSlide key={item.id} style={{width:'auto'}}>
                    <Link href="#">
                      <ImageWrap
                        type="photo"
                        img={item.img}
                        title={item.title}
                        width={265}
                        height={159}
                      />
                      </Link>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        )
      }
      {
        type === "ranking" && (
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
              setRankingData?.map((rank, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <ul className={styles.ranking}>
                      {
                        rank.map((item: rankingDataType) => {
                          return (
                            <li key={item.id}>
                              <Link href="#">
                                <div className={styles.num}>
                                  <span>{item.rank}</span>
                                  <Image
                                    src={IconRankBulletGold}
                                    width={24}
                                    height={24}
                                    alt=""  
                                  />
                                </div>
                                <h2>{item.title}</h2>
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

