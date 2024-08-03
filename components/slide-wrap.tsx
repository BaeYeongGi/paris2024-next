import { API_URL } from '@/api';
import Slide from '@/components/swiper-slide';

interface slideWrapType {
  type: string
}

async function getData(API_URL: string){
  const response = await fetch(API_URL);
  return response.json();
}

export default async function SlideWrap({ type }:slideWrapType){
  const [malData, newsSlideData] = await Promise.all([
    getData(`${API_URL}/malmalmal.json`),
    getData(`${API_URL}/news.json?2`)
  ]);

  const slideProps = {
    type,
    malData: type === "malmalmal" ? malData.data : undefined,
    newsSlideData: type === "news" ? newsSlideData.data.slide_news : undefined
  }

  return <Slide {...slideProps}/>
};

