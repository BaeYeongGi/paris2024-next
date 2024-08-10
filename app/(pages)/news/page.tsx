
import PageTabsWrap from "@/components/page-tab-wrap";
import NewsList from "@/components/news-list";

export const metadata = {
  title: "주요뉴스"
}

export default async function News(){

  return (
    <>
      <PageTabsWrap type="datePage"/>   
      <NewsList
        type="newsPage"
      />
    </>


  );
};
