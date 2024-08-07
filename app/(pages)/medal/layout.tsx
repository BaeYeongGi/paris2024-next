import Menu from '@/components/menu';

const MedalLayout = () => {
  const items = [
    {
      id: 1,
      name: "메달순위",
      link: "/medal/rank"  
    },
    {
      id: 2,
      name: "메달리스트",
      link: "/medal/medalist"
    },
  ]  
  return (
    <Menu
      items={items}
    />
  );
};

export default MedalLayout;