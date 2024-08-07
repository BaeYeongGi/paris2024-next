import Header from "@/components/header";
import Footer from "@/components/footer";
import { Viewport } from "next";
import "@/styles/global.css";
import { API_URL } from '@/api';
import ScrollButtons from "@/components/scroll-buttons";

export const metadata = {
  title: {
    template: "%s | 봉쥬르 파리 : 네이트 스포츠 뉴스",
    default: "2024 파리올림픽 : 네이트 스포츠 뉴스"
  },
  keywords: '제33회 파리 올림픽, 파리올림픽, 2024 파리올림픽, 2024 올림픽, 올림픽, 파리 올림픽, 하계올림픽', 
  description: '뉴스, 포토, 경기일정 등 대한민국 대표팀의 파리 소식을 생생하게 확인하세요!',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "[네이트 스포츠] 봉쥬르 파리",
    locale: "ko_KR",
    type: 'website',
    siteName: 'nate',
    images: ['https://baeyeonggi.github.io/paris2024/images/SNS-og-800x400-paris.png'],
    description: '뉴스, 포토, 경기일정 등 대한민국 대표팀의 파리 소식을 생생하게 확인하세요!',
  }
}

export const viewport: Viewport = {
  themeColor: '#278D8F'
} 

async function getHeaderData(){
  const response = await fetch(`${API_URL}/header.json?3`);
  return response.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data } = await getHeaderData();
  return (
    <html lang="ko">
      <body>
      <Header
        total={data.totalRank}
        medal={data.medal}
      />
        {children}
      <ScrollButtons/>
      <Footer/>
      </body>
    </html>
  )
}
