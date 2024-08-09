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
  const [malData, newsData, photoData] = await Promise.all([
    getData(`${API_URL}/malmalmal.json`),
    getData(`${API_URL}/news.json?7`),
    getData(`${API_URL}/photo.json?2`),
    
  ]);

  const slideProps = {
    type,
    malData: type === "malmalmal" ? malData.data : undefined,
    newsSlideData: type === "newsSlide" ? newsData.data.slide_news : undefined,
    photoData: type === "photo" ? photoData.data : undefined,
    rankingData: type === "ranking" ? newsData.data.ranking : undefined,
    newsDatePageData: type === "datePage" ? newsData.data.news_page : undefined
  }

  return <Slide {...slideProps}/>
};

