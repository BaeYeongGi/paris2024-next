import Title from '@/components/title';
import { API_URL } from '@/api';
import styles from '@/styles/game-schedule.module.css';
import Link from 'next/link';
import Image from 'next/image';
import IconGamePlaying from '@/public/images/icon_game_playing.png';
import IconGameOver from '@/public/images/icon_game_over.png';

async function getScheduleData(){
  const response = await fetch(`${API_URL}/schedule.json`)
  return response.json();
}

interface scheduleDataProps {
  id: number,
  time: string,
  state: string,
  game: string,
  tournament: string,
  contents: string,
  img: string
}

export default async function GameSchedule(){
  const { data } = await getScheduleData();
  console.log('data', data.dateList)
  return (
    <>
      <Title
        text="타이틀 입니당"
        type="schedule"  
      /> 
      <ul className={styles.schedule_list}>
        {
          data.dateList.map((item: scheduleDataProps) => {
            return (
              <li key={item.id}>
                <Link href="/dateschedule">
                  <dl className={`${styles.time} ${styles[item.state]}`}>
                    <dt><span>{item.time}</span></dt>
                    <dd>
                      {
                        item.state !== '' && (
                          <Image src={item.state === 'over' ? IconGameOver : IconGamePlaying} alt={item.state === 'over' ? '종료' : '진행중'} width={item.state === 'over'? 32 : 36} height="18" />
                        )
                      }
                    </dd>
                  </dl>
                  <div className={styles.game_wrap}>
                    <Image src={item.img} alt={item.game} width="34" height="34" />
                    <dl className={styles.game}>
                      <dt><strong>{item.game}</strong>{item.tournament}</dt>
                      <dd>{item.contents}</dd>
                    </dl>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

