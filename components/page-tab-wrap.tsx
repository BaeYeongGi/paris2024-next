import React from 'react';
import styles from '@/styles/page-tab-wrap.module.css';

const PageTabWrap = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className={styles.page_tab_wrap}>
      {children}
    </div>
  );
};

export default PageTabWrap;