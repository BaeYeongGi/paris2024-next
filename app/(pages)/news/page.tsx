import SlideWrap from "@/components/slide-wrap"
import PageTabsWrap from "@/components/page-tab-wrap";
import NewsList from "@/components/news-list";
import { API_URL } from "@/api";

export const metadata = {
  title: "주요뉴스"
}

export default async function News(){

  return (
    <>
    <PageTabsWrap>
      <SlideWrap
        type="datePage"
      />
    </PageTabsWrap>
    <NewsList
      type="news"
    />
    </>

  );
};
