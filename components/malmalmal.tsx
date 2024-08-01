import { API_URL } from '@/api';
import Slide from '@/components/swiper-slide';

async function getMalMalMalData(){
  const response = await fetch(`${API_URL}/malmalmal.json?1`);
  return response.json();
}

export default async function Malmalmal(){
  const { data } = await getMalMalMalData();
  return <Slide
          malData={data}
          type="malmalmal"
        />
};

