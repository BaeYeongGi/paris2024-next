import SlideWrap from "@/components/slide-wrap"
import PageTabsWrap from "@/components/page-tab-wrap";

export const metadata = {
  title: "주요뉴스"
}

const News = () => {
  return (
    <>
    <PageTabsWrap>
      <SlideWrap
        type="datePage"
      />
    </PageTabsWrap>

    </>

  );
};

export default News;