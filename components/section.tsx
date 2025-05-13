import React from 'react';

interface sectionPropsType {
  name: string,
  children: React.ReactNode,
  type: string
}

const Section = ({ children, name, type }: sectionPropsType) => {

  const component = {
    division: 'w-full m-0 block h-[10px] bg-[#ececee] border-0',
  }
  const setComponentWrap = name === 'sky' ? 'p-5 box-border bg-[#f3f6fa]' : 'p-5 box-border bg-[#ffffff]';

  return (
    <>
      {
        type === "normal" && (
          <>
          <section className={setComponentWrap}>
            {children}
          </section>
          <hr className={component.division}/>
          </>
        )
      }
      {
        type === "border_container" && (
          <>
          <section className={setComponentWrap}>
            <div className='relative rounded-[8px] border border-solid border-[#e6e5e5] shadow-[0_0_4px_rgba(0,0,0,0.05)]'>
              {children}
            </div>
          </section>
          <hr className={component.division}></hr>
          </>
        )
      }
    </>

  );
};

export default Section;