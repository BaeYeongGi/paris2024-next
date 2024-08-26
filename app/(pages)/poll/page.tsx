import styles from '@/styles/poll.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/section';
import { API_URL } from '@/api';
import IconGameContinue from '@/public/images/icon_game_continue.png';
import IconGameOver from '@/public/images/icon_game_over.png';
import PollList from '@/components/poll-list';

interface pollSurveyType {
  id: number,
  contents: string
}

export const metadata = {
  title: "Poll"
}

async function getPollData(){
  const response = await fetch(`${API_URL}/poll.json?3`);
  return response.json();
}

export default async function PollPage(){

  const { data } = await getPollData()
  const setPollSurveyData = data.survey;

  return (
  <Section name={["component_wrap"]} type="normal">  
    <div className={styles.poll_wrap}>
      <div className={styles.poll_contents}>
        <Image className={styles.img} src={setPollSurveyData.icon} alt="" width="83" height="83" />
        <div className={styles.text_wrap}>
          {
            setPollSurveyData.state === "going" ? <Image className={styles.state} src={IconGameContinue} alt="진행중" width="36" height="18" /> : <Image className={styles.state} src={IconGameOver} alt="종료" width="32" height="18" />
          }
          <dl>
            <dt className={styles.title}>{setPollSurveyData.title}</dt>
            <dd className={styles.info}>
              <span>{setPollSurveyData.date}</span>  
              <span>{`${setPollSurveyData.total.toLocaleString()}명`}</span>  
            </dd>
          </dl>
        </div>
      </div>
      <ul className={styles.poll_survey_list}>
        {
          setPollSurveyData.current.map((item: pollSurveyType) => {
            return (
              <li key={item.id}>
                <input className={styles.input} type="radio" name="poll" id={`poll${item.id}`} />
                <label className={styles.label} htmlFor={`poll${item.id}`}>
                  <span className={styles.check}></span>
                  <p>{item.contents}</p>
                  <div className={styles.gauge}><span></span></div>
                </label>
              </li>
            )
          })
        }
      </ul>
      <div className={styles.poll_buttons}>
        <button className={styles.submit}>투표하기</button>
        <Link href="/poll/result" className={styles.result}>결과보기</Link>
      </div>
    </div>
    <PollList />
  </Section>
  );
};
