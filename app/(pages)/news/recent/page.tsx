import { API_URL } from '@/api';
import Section from '@/components/section';
import ClientRecent from '@/components/client/recent';
import ButtonMore from '@/components/button-more';

export const metadata = {
  title: "비하인드뉴스"
}

async function getNewsData(){
  const response = await fetch(`${API_URL}/news.json?h`);
  return response.json();
}

export default async function Recent(){

  const { data } = await getNewsData()
  const setRecentPageData = data.recent_news;


  return (
    <>
    <Section name={["component_wrap"]} type="normal">
      <ClientRecent data={setRecentPageData}/>
    </Section> 
    <ButtonMore
      text="최신뉴스 더보기"
      direction="bottom"
      length={setRecentPageData.length}
    />
  </>
  );
};

