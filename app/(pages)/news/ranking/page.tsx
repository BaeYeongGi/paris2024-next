import NewsList from "@/components/news-list";
import PageTabsWrap from "@/components/page-tab-wrap";
import Section from '@/components/section';

export const metadata = {
  title: "랭킹뉴스"
}

const Ranking = () => {
  return (
    <>
    <PageTabsWrap type="rankPage" />
    <Section name={["component_wrap"]} type="normal">
      <NewsList type="rankPage"/>
    </Section>
    </>
  );
};

export default Ranking;