import Section from '@/components/section';
import NewsList from "@/components/news-list";

export const metadata = {
  title: "비하인드 뉴스"
}

const Behind = () => {
  return (
    <NewsList type="behindPage"/>
  );
};

export default Behind;