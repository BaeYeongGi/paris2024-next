import TopVisual from '@/components/main/top-visual';
import GameSchedule from '@/components/game-schedule';
import React from 'react';
import SwiperSlide from '@/components/swiper-slide';
import Table from '@/components/table';
import Medalist from '@/components/medalist';
import NewsList from '@/components/news-list';
import PollList from '@/components/poll-list';


const Home = () => {

  return (
    <section className="">
      <TopVisual/>
      <GameSchedule />
      <SwiperSlide />
      <Table />
      <SwiperSlide />
      <SwiperSlide />
      <Medalist />
      <NewsList />
      <SwiperSlide />
      <PollList />
    </section>
  );
};

export default Home;