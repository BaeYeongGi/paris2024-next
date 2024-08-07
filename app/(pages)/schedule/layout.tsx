import Menu from '@/components/menu';

const ScheduleLayout = () => {
  const items = [
    {
      id: 1,
      name: "날짜별",
      link: "/schedule/date"  
    },
    {
      id: 2,
      name: "종목별",
      link: "/schedule/event"
    },
  ]  
  return (
    <Menu
      items={items}
    />
  );
};

export default ScheduleLayout;