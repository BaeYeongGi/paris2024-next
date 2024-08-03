import styles from '@/styles/main.module.css';
import TopVisual from '@/components/top-visual';
import GameSchedule from '@/components/game-schedule';
import Slide from '@/components/swiper-slide';
import Table from '@/components/table';
import Medalist from '@/components/medalist';
import NewsList from '@/components/news-list';
import PollList from '@/components/poll-list';
import Navigation from '@/components/navigation';
import SlideWrap from '@/components/slide-wrap';
import Title from '@/components/title';
const Home = () => {

  return (
    <>
      <TopVisual/>
      <Navigation/>
      <section className={`${styles.component_wrap} ${styles.bg_sky}`}>
        <div className={`${styles.border_container} ${styles.schedule}`}>
          <GameSchedule />
        </div>
      </section>
      <hr className={styles.component_division}/>
      <section className={styles.component_wrap}>
        <Title
          text="파리 말말말"
          type="normal"
          more={true}
        />
        <SlideWrap
          type="malmalmal"
        />
      </section>
      <hr className={styles.component_division}/>
      <section className={styles.component_wrap}>
        <Title
          text="메달 순위"
          type="normal"
          more={true}
        />
        <Table/>
      </section>
      <hr className={styles.component_division}/>
      <section className={styles.component_wrap}>
        <SlideWrap
          type="news"
        />
      </section>
      <hr className={styles.component_division}/>
      <section className={styles.component_wrap}>
        <Title/>
        <Slide />
      </section>
      <hr className={styles.component_division}/>
      <section className={styles.component_wrap}>
        <Medalist />
      </section>
      <hr className={styles.component_division}/>
      <section className={styles.component_wrap}>
        <Title/>
        <NewsList />
      </section>
      <hr className={styles.component_division}/>
      <section className={styles.component_wrap}>
        <Title/>
        <Slide />
      </section>
      <hr className={styles.component_division}/>
      <section className={styles.component_wrap}>
        <Title/>
        <PollList />
      </section>
    </>
  );
};

export default Home;