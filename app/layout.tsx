import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "금손 - 프리랜서 전문가 마켓",
  description: "인테리어, 설비, 도배, 전기 등 생활 서비스 전문가를 찾는 금손 메인 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
