import './globals.css';

export const metadata = {
  title: '신예성 포트폴리오',
  description: '성장을 즐기는 개발자 신예성의 포트폴리오입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
