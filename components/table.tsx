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

  const styles = {
    tableWrap: 'border border-solid border-[#e6e5e5] bg-[#ffffff] rounded-[8px] px-[15px] py-[20px] box-border shadow-[0_4px_4px_rgba(0,0,0,0.05)]',
    table: 'w-full mb-0',
    th: 'border-b border-solid border-[#ededed] text-[13px] font-bold tracking-[-1px] text-[#000000] pb-[10px]',
    td: 'font-sans align-middle text-center whitespace-nowrap border-t border-solid border-[#ededed] text-[15px] font-bold text-[#000000] h-[44px]',
    tdFirst: 'text-[#c0a275] tracking-[-1px]',
    tdActive: '[&>td]:border-b [&>td]:border-solid [&>td]:border-[#ededed] [&>td]:bg-[#f3f6fa]',
    tdImg: '[&>img]:w-[22px] [&>img]:h-[16px] [&>img]:mr-[12px] [&>img]:border [&>img]:border-solid [&>img]:border-[rgba(0,0,0,0.15)] [&>img]:transform:translateY(2px)] [&>img]:inline',
  }

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
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
              <th className={styles.th}>순위</th>
              <th className={styles.th}>국가</th>
              <th className={styles.th}>금</th>
              <th className={styles.th}>은</th>
              <th className={styles.th}>동</th>
              <th className={styles.th}>합계</th>
            </tr>
          </thead>
          <tbody>
          {
            reData.slice(0, isTop5Korea ? 5 : 6).map((item: medalDataType) => {
              return (
                <tr key={item.id} className={` ${item.nation === "대한민국" ? styles.tdActive : ''}`}>
                  <td className={`${styles.td} ${styles.tdFirst}`}>{item.rank}</td>
                  <td className={`text-left ${styles.td} ${styles.tdImg}`}>
                    <Image src={item.flag} alt={item.nation} width="22" height="16"/>{item.nation}
                  </td>
                  <td className={styles.td}>{item.gold}</td>
                  <td className={styles.td}>{item.silver}</td>
                  <td className={styles.td}>{item.bronze}</td>
                  <td className={styles.td}>{item.gold + item.silver + item.bronze}</td>
                </tr>
              )
            })
          }
          </tbody>
      </table>
    </div>
  );
};
