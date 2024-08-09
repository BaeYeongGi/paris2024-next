import React from 'react';
import styles from '@/styles/section.module.css';

interface sectionPropsType {
  name: string[],
  children: React.ReactNode,
  type: string
}

const Section = ({ children, name, type }: sectionPropsType) => {

  const className = name.map(item => styles[item]).join(' ');

  return (
    <>
      {
        type === "normal" && (
          <>
          <section className={className}>
            {children}
          </section>
          <hr className={styles.component_division}/>
          </>
        )
      }
      {
        type === "border_container" && (
          <>
          <section className={className}>
            <div className={styles.border_container}>
              {children}
            </div>
          </section>
          <hr className={styles.component_division}></hr>
          </>
        )
      }
    </>

  );
};

export default Section;