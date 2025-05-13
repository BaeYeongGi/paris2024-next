'use client';

import useStore from '@/store/store';

interface buttonMorePropsType {
  text: string,
  direction: string,
  length: number
}

export default function ButtonMore({ text, direction, length }: buttonMorePropsType ){
  const { newsVisibleCount, setNewsVisibleCount } = useStore();

  const arrowDirection = direction === 'bottom' ? 'border-r border-b border-solid border-[#000000] [transform:translateY(-2px)_rotate(45deg)]' : 'border-t border-r border-solid border-[#000000] [transform:rotate(45deg)]';

  return (
    <>
    {
      newsVisibleCount < length && (
        <>
          <button
            className='flex justify-center items-center w-full h-[50px] text-[15px] tracking-[-0.5px] font-light text-[#000000]' onClick={setNewsVisibleCount}>{text}<span className={`ml-1.5 w-1.5 h-1.5 block ${arrowDirection}`}></span></button>
          <hr className='w-full m-0 block h-[10px] bg-[#ececee] border-0' />
        </>
      )
    }
    </>
  );
};

