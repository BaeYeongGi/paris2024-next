
import styles from '@/styles/page-tab-wrap.module.css';
import SlideWrap from "@/components/slide-wrap"
import PageTab from "@/components/page-tab";

interface pageTabWrapType {
  type: string
}

const PageTabWrap = ({type}: pageTabWrapType) => {
  return (
    <div className={styles.page_tab_wrap}>
      { type === "datePage" && <SlideWrap type={type}/> }
      { type === "rankPage" && <PageTab type={type}/> }
    </div>
  );
};

export default PageTabWrap;