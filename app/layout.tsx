import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/global.css";
import { API_URL } from '@/api';
import ScrollButtons from "@/components/scroll-buttons";

export const metadata = {
  title: {
    template: "%s | 2024 파리올림픽 : 네이트뉴스",
    default: "2024 파리올림픽 : 네이트뉴스"
  },
  description: '파리 올림픽에 대한 모든 정보를 한눈에 쉽게 네이트에서 확인하세요!',
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
