import Title from '@/components/title';
import { API_URL } from '@/api';
import styles from '@/styles/game-schedule.module.css';
import Link from 'next/link';
import Image from 'next/image';
import IconGamePlaying from '@/public/images/icon_game_playing.png';
import IconGameOver from '@/public/images/icon_game_over.png';

async function getScheduleData(){
  const response = await fetch(`${API_URL}/schedule.json?1`)
  return response.json();
}

interface scheduleDataPropsType {
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
  const date = new Date();
  const week = date.getDay();
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeekName = daysOfWeek[week];

  return (
    <>
      <Title
        text={`${date.getMonth() + 1}.${date.getDate()}.${dayOfWeekName} 경기 일정`}
        type="box"  
        more={true}
      /> 
      <ul className={styles.schedule_list}>
        {
          data.dateList.map((item: scheduleDataPropsType) => {
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

