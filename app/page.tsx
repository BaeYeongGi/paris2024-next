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
  return (
    <>
      <TopVisual/>
      <Navigation/>
      <Section
        name={["component_wrap", "bg_sky"]}
        type="border_container"
      >
        <GameSchedule />
      </Section>
      <Section
        name={["component_wrap"]}
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
        name={["component_wrap"]}
        type="normal"  
      >
        <Title
          text="메달 순위"
          type="normal"
          more={true}
        />
        <Table/>
      </Section>
      <Section name={["component_wrap"]} type="normal">
        <SlideWrap
          type="newsSlide"
        />
      </Section>
      <Section name={["component_wrap"]} type="normal">
        <Title
          text="파리 포토"
          type="normal"
          more={true}
        />
        <SlideWrap
          type="photo"
        />
      </Section>
      <Section name={["component_wrap"]} type="border_container">
        <Medalist />
      </Section>
      <Section name={["component_wrap"]} type="normal">
        <Title
          text="비하인드 파리"
          type="normal"
          more={true}
        />
        <NewsList type="behind"/>
      </Section>
      <Section name={["component_wrap"]} type="normal">
        <Title
          text="파리 랭킹뉴스"
          type="normal"
          more={true}
        />
        <SlideWrap
          type="ranking"
        />
      </Section>
      <Section name={["component_wrap"]} type="normal">
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