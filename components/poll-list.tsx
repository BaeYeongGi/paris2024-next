import { API_URL } from '@/api';
import React from 'react';
import styles from '@/styles/poll-list.module.css';
import Link from 'next/link';
import Image from 'next/image';
import IconStateGoing from '@/public/images/icon_game_continue.png';
import IconStateOver from '@/public/images/icon_game_over.png';
import ImgPoll1 from '@/public/images/img_background_poll_bg1.png';
import ImgPoll2 from '@/public/images/img_background_poll_bg2.png';
import ImgPoll3 from '@/public/images/img_background_poll_bg3.png';
import ImgPoll4 from '@/public/images/img_background_poll_bg4.png';
import ImgPoll5 from '@/public/images/img_background_poll_bg5.png';
import ImgPoll6 from '@/public/images/img_background_poll_bg6.png';
import ImgPoll7 from '@/public/images/img_background_poll_bg7.png';
import ImgPoll8 from '@/public/images/img_background_poll_bg8.png';

interface pollListDataType {
  id: number,
  state: string,
  title: string,
  date: string
}

async function getPollListData(){
  const response = await fetch(`${API_URL}/poll.json`)
  return response.json();
}

export default async function PollList(){

  const pollIconArr = [ImgPoll1, ImgPoll2, ImgPoll3, ImgPoll4, ImgPoll5, ImgPoll6, ImgPoll7, ImgPoll8];

  const { data } = await getPollListData();

  let currentIndex = 0;
  function getNextElement(){
    const el = pollIconArr[currentIndex];
    currentIndex = (currentIndex + 1) % pollIconArr.length;
    return el;
  }

  return (
    <ul className={styles.poll_wrap}>
      {
        data.topic.map((item: pollListDataType) => {
          return (
            <li key={item.id}>
              <Link href="#" className={styles['type'+item.id]}>
                <Image className={styles.state} src={item.state === 'going' ? IconStateGoing : IconStateOver} alt={item.state} width={item.state === 'going' ? 36 : 32} height={18}/>
                <dl className={styles.text}>
                  <dt>{item.title}</dt>
                  <dd>{item.date}</dd>
                </dl>
                <Image className={styles.poll_bg} src={getNextElement()} alt="" width="130" height="150"/>
              </Link>        
            </li>
          )
        })
      }


    </ul>
  );
};

