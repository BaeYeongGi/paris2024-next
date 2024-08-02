import styles from '@/styles/table.module.css';
import { API_URL } from '@/api';
import Image from 'next/image';

interface medalDataType {
  id: number,
  rank: number,
  flag: string,
  nation: string,
  gold: number,
  silver: number,
  bronze: number
}

async function getMedalData(){
  const response = await fetch(`${API_URL}/medal.json?1`);
  return response.json(); 
}

export default async function Table(){
  const { data } = await getMedalData();
  const reData = [...data.global];
  let koreaData;
  let isTop5Korea;
  reData.forEach(function(item: medalDataType){
    if(item.rank > 5 && item.nation === '대한민국'){
      koreaData = item;
      isTop5Korea = false;
    }
  })
  reData.unshift(koreaData);

  return (
    <div className={styles.medal_rank_table_wrap}>
      <table className={styles.medal_rank_table}>
        <colgroup>
          <col width="9%"/>
          <col width="51%"/>
          <col width="10%"/>
          <col width="10%"/>
          <col width="10%"/>
          <col width="10%"/>
        </colgroup>
        <thead>
            <tr>
              <th>순위</th>
              <th>국가</th>
              <th>금</th>
              <th>은</th>
              <th>동</th>
              <th>합계</th>
            </tr>
          </thead>
          <tbody>
          {
            reData.slice(0, isTop5Korea ? 5 : 6).map((item: medalDataType) => {
              return (
                <tr key={item.id} className={item.nation === "대한민국" ? styles.active : ''}>
                  <td>{item.rank}</td>
                  <td><Image src={item.flag} alt={item.nation} width="22" height="16"/>{item.nation}</td>
                  <td>{item.gold}</td>
                  <td>{item.silver}</td>
                  <td>{item.bronze}</td>
                  <td>{item.gold + item.silver + item.bronze}</td>
                </tr>
              )
            })
          }
          </tbody>
      </table>
    </div>
  );
};
