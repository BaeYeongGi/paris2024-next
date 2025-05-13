import Link from 'next/link';
import ImageWrap from '@/components/image-wrap';
import ImageMainVisualItem1 from '@/public/images/img_background_main1.png';
import ImageMainVisualItem2 from '@/public/images/img_background_main2.png';
import Image from 'next/image';
import { API_URL } from '@/api';

interface mainVisualDataType {
  id: number,
  game: string,
  title: string
}

async function getNewsData(){
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch(`${API_URL}/news.json`);
  return response.json();
}

export default async function TopVisual(){
  const { data } = await getNewsData();
  
  return (
    <section className='w-full relative box-border overflow-hidden px-5 pt-4.25 pb-11.5 bg-linear-90 bg-gradient-to-r from-[#278d8f] from-10% to-[#efbcc7] to-100%'>
      <Image src={ImageMainVisualItem1} alt="파리 국기1" width="527" height="240" className='absolute top-0 left-0' />
      <Image src={ImageMainVisualItem2} alt="파리 국기2" width="120" height="60" className='absolute bottom-0 right-0' />      
      <Link href="/news/view">
        <ImageWrap
          type="text_in_image"
          img={data.main_visual.top.img}
          title={data.main_visual.top.title}
          contents={data.main_visual.top.contents}
          width={335}
          height={201}
          fill={false}

        />
      </Link>

      <ul className='space-y-[14px]'>
        {
          data.main_visual.list.map((item: mainVisualDataType) => {
            return (
              <li key={item.id}>
                <Link href="/news/view" className='text-[16px] font-bold tracking-[-1px] text-[#ffffff] block w-full whitespace-nowrap overflow-hidden text-ellipsis'><span className='text-[#fbff41] text-[13px] font-extrabold tracking-[-0.5px] mr-1'>{item.game}</span>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};
