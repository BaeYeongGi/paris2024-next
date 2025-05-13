const Footer = () => {

  const listElStyle = 'relative before:content-[""] before:block before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:left-[-8px] before:w-[1px] before:h-[12px] before:bg-[#e1e1e1]';

  return (
  <footer role="contentinfo">
    <div className='pb-8 pt-7.5 bg-[#f8f8f8] font-normal text-center border-b border-[#efeff0] border-solid'>
        <div className='pt-0.5 pb-5.5 text-[15px] leading-[18px] whitespace-nowrap text-center text-[#000000] space-x-2.25 space-y-0.5 [&>a]:before:top-1.25'>
          <a href="https://m.nate.com/">네이트홈</a>
          <a href="https://xo.nate.com/mnate/Login.sk?redirect=https%3A%2F%2Fm.nate.com&svccd=m_ndr.nate.com%2Fmnewsedit%2Fsisa%2F"><span>로그인</span></a>
          <a href="https://www.nate.com/?f=mnate">PC버전</a>
          <a href="https://m.nate.com/sitemap.html">전체서비스</a>
        </div> 
        <ul className='flex flex-wrap justify-center mb-2 [&>li]:relative space-x-4.25 text-[12px] tracking-[-0.5px] text-[#888888]'>
          <li><a href="https://news.nate.com/enews/editguide">기사배열기본방침(책임:○○○)</a></li>
          <li className={listElStyle}><span>청소년보호책임:○○○</span></li>
          <li className={listElStyle}><a href="https://m.news.nate.com/newssitemap">뉴스 전체서비스</a></li>
        </ul>
        <div className='text-[0px] leading-[0] whitespace-nowrap text-center'>
          <span className='inline-block pt-0.5 pr-2 text-[12px] leading-[16px] tracking-[0] text-[#888888]'>&copy; SK Communications</span>
          <a className='px-2 py-0.5 text-[12px] leading-[14px] text-[#888888]' href="https://m.helpdesk.nate.com/">고객센터</a></div>
    </div>
  </footer>
  );
};

export default Footer;