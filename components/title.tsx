
import Link from 'next/link';
import IconPoll from '@/public/images/icon_poll';

interface titleType {
  text: string,
  type: string,
  more: boolean
}

const Title = ({ text, type, more }: titleType ) => {

  const styles = {
    top: 'flex items-center justify-between mb-4 pb-3 border-b border-solid border-[#ededed]',
    topBox: 'flex items-center justify-between rounded-[8px_8px_0_0] bg-[#ffffff] mb-0 px-[15px] pt-[18px] pb-[10px] border-[0] relative after:content-[""] after:block after:w-[calc(100%_-_30px)] after:height-[1px] after:bg-[#e6e5e5] after:absolute after:bottom-0 after:left-[15px]',
    more: 'text-[15px] font-light text-[#777777] tracking-[-0.5px]',
    title: 'text-[16px] font-medium font-[S-Core-Dream-5] tracking-[-1.2px] text-[#000000]',
    topBorderless: '',
  }


  return (
    <>
      {
        type === "box" && (
          <div className={styles.topBox}>
            <h2 className={styles.title}>{text}</h2>
            {more && (
              <Link href="#" className={styles.more}>더보기</Link>
            )}
          </div>
          )
      }
      {
        type === "normal" && (
          <div className={styles.top}>
            {
              text === "poll" ? <IconPoll/> : <h2 className={styles.title}>{text}</h2>
            }
            {more && (
              <Link href="#" className={styles.more}>더보기</Link>
            )}
          </div>
        )
      }
    </>

  );
};

export default Title;