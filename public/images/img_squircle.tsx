import React from 'react';
import styles from '@/styles/swiper-slide.module.css';

interface propsType {
  profile: string
}

const ImgSquircle = ({ profile }: propsType ) => {
  return (
    <div className={styles.svg_profile_wrap}>
      <svg viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
        <defs>
          <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
          <clipPath id="clipSquircle">
            <use xlinkHref="#shapeSquircle"></use>
          </clipPath>
        </defs>
        <image width="88" height="88" clipPath="url(#clipSquircle)" xlinkHref={profile}></image>
      </svg>
    </div>

  );
};

export default ImgSquircle;