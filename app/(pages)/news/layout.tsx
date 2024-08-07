import Menu from '@/components/menu';

const NewsLayout = () => {
  const items = [
    {
      id: 1,
      name: "주요뉴스",
      link: "/news"  
    },
    {
      id: 2,
      name: "랭킹뉴스",
      link: "/news/ranking"
    },
    {
      id: 3,
      name: "비하인드",
      link: "/news/behind"  
    },
    {
      id: 4,
      name: "최신뉴스",
      link: "/news/recent"
    },
  ]
  return (
    <Menu
      items={items}
    />
  );
};

export default NewsLayout;