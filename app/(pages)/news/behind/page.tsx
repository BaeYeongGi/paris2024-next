import Section from '@/components/section';
import NewsList from "@/components/news-list";

export const metadata = {
  title: "비하인드 뉴스"
}

const Behind = () => {
  return (
    <Section name={["component_wrap"]} type="normal">
      <NewsList type="behindPage"/>
    </Section>
  );
};

export default Behind;