import styles from '@/styles/footer.module.css';

const Footer = () => {
  return (
  <footer role="contentinfo">
    <div className={styles.footer}>
        <div className={styles.svcBtn}>
          <a href="https://m.nate.com/">네이트홈</a>
          <a href="https://xo.nate.com/mnate/Login.sk?redirect=https%3A%2F%2Fm.nate.com&svccd=m_ndr.nate.com%2Fmnewsedit%2Fsisa%2F"><span>로그인</span></a>
          <a href="https://www.nate.com/?f=mnate">PC버전</a>
          <a href="https://m.nate.com/sitemap.html">전체서비스</a>
        </div> 
        <ul className={styles.sitemap}>
          <li><a href="https://news.nate.com/enews/editguide">기사배열기본방침(책임:○○○)</a></li>
          <li><span>청소년보호책임:○○○</span></li>
          <li><a href="https://m.news.nate.com/newssitemap">뉴스 전체서비스</a></li>
        </ul>
        <div className={styles.copyright}>
          <span>&copy; SK Communications</span>
          <a className={styles.cscenter} href="https://m.helpdesk.nate.com/">고객센터</a></div>
    </div>
  </footer>
  );
};

export default Footer;