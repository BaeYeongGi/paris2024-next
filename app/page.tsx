import Section from '@/components/section';
import TopVisual from '@/components/top-visual';
import GameSchedule from '@/components/game-schedule';
import Table from '@/components/table';
import Medalist from '@/components/medalist';
import NewsList from '@/components/news-list';
import PollList from '@/components/poll-list';
import Navigation from '@/components/navigation';
import SlideWrap from '@/components/slide-wrap';
import Title from '@/components/title';

const Home = () => {

  const component = {
    wrap: 'p-5 box-border bg-[#ffffff]',
    skyWrap: 'p-5 box-border bg-[#f3f6fa]',
  }

  return (
    <>
      <TopVisual/>
      <Navigation/>
      <Section
        name='sky'
        type="border_container"
      >
        <GameSchedule />
      </Section>
      <Section
        name='normal'
        type="nomral"
      >
        <Title
            text="파리 말말말"
            type="normal"
            more={true}
          />
          <SlideWrap
            type="malmalmal"
          />
      </Section>
      <Section
        name='normal'
        type="normal"  
      >
        <Title
          text="메달 순위"
          type="normal"
          more={true}
        />
        <Table/>
      </Section>
      <Section name='normal' type="normal">
        <SlideWrap
          type="newsSlide"
        />
      </Section>
      <Section name='noraml' type="normal">
        <Title
          text="파리 포토"
          type="normal"
          more={true}
        />
        <SlideWrap
          type="photo"
        />
      </Section>
      <Section name='noraml' type="border_container">
        <Medalist />
      </Section>
      <Section name='noraml' type="normal">
        <Title
          text="비하인드 파리"
          type="normal"
          more={true}
        />
        <NewsList type="behind"/>
      </Section>
      <Section name='noraml' type="normal">
        <Title
          text="파리 랭킹뉴스"
          type="normal"
          more={true}
        />
        <SlideWrap
          type="ranking"
        />
      </Section>
      <Section name='noraml' type="normal">
        <Title
          text="poll"
          type="normal"
          more={true}
          />
        <PollList />
      </Section>
    </>
  );
};

export default Home;