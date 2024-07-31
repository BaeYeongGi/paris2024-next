import styles from '@/components/footer.module.css';

const Footer = () => {
  return (
  <footer role="contentinfo">
    <div className={styles.footer}>
        <div className={styles.svcBtn}>
          <a href="#">네이트홈</a>
          <a href="#"><span id="loginbtnmsg">로그아웃</span></a>
          <a href="#">PC버전</a>
          <a href="#">전체서비스</a>
        </div> 
        <ul className={styles.sitemap}>
          <li><a href="#">기사배열기본방침(책임:김경옥)</a></li>
          <li><span>청소년보호책임:조유형</span></li>
          <li><a href="#">뉴스 전체서비스</a></li>
        </ul>
        <div className={styles.copyright}>
          <span>&copy; SK Communications</span>
          <a className={styles.cscenter} href="#">고객센터</a></div>
    </div>
  </footer>
  );
};

export default Footer;