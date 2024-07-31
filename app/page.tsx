import styles from '@/styles/main.module.css';
import TopVisual from '@/components/top-visual';
import GameSchedule from '@/components/game-schedule';
import SwiperSlide from '@/components/swiper-slide';
import Table from '@/components/table';
import Medalist from '@/components/medalist';
import NewsList from '@/components/news-list';
import PollList from '@/components/poll-list';
import Navigation from '@/components/navigation';
import Title from '@/components/title';
const Home = () => {

  return (
    <>
      <TopVisual/>
      <Navigation/>
      <section className={styles.component_wrap}>
        <GameSchedule />
      </section>
      <section className={styles.component_wrap}>
        <Title/>
        <SwiperSlide />
      </section>
      <section className={styles.component_wrap}>
        <Title/>
        <Table />
      </section>
      <section className={styles.component_wrap}>
        <SwiperSlide />
      </section>
      <section className={styles.component_wrap}>
        <Title/>
        <SwiperSlide />
      </section>
      <section className={styles.component_wrap}>
        <Medalist />
      </section>
      <section className={styles.component_wrap}>
        <Title/>
        <NewsList />
      </section>
      <section className={styles.component_wrap}>
        <Title/>
        <SwiperSlide />
      </section>
      <section className={styles.component_wrap}>
        <Title/>
        <PollList />
      </section>
    </>
  );
};

export default Home;