import TopVisual from '@/components/top-visual';
import GameSchedule from '@/components/game-schedule';
import React from 'react';
import SwiperSlide from '@/components/swiper-slide';
import Table from '@/components/table';
import Medalist from '@/components/medalist';
import NewsList from '@/components/news-list';
import PollList from '@/components/poll-list';
import Navigation from '@/components/navigation';
const Home = () => {

  return (
    <>
      <TopVisual/>
      <Navigation/>
      <GameSchedule />
      <SwiperSlide />
      <Table />
      <SwiperSlide />
      <SwiperSlide />
      <Medalist />
      <NewsList />
      <SwiperSlide />
      <PollList />
    </>
  );
};

export default Home;