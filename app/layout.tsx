// import Navigation from "../components/navigation";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import "@/styles/global.css";

export const metadata = {
  title: {
    template: "%s | 2024 파리올림픽 : 네이트뉴스",
    default: "2024 파리올림픽 : 네이트뉴스"
  },
  description: '파리 올림픽에 대한 모든 정보를 한눈에 쉽게 네이트에서 확인하세요!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
      <Header/>
      <Navigation/>
        {children}
      </body>
    </html>
  )
}
