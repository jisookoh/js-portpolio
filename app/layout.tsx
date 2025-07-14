import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import EmotionRegistry from "@app/components/EmotionRegistry";
import { ModalOutlet } from "@app/components/modals";

const MontserratSans = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JS Portpolio",
  description: "퍼블리셔, 프론트엔드 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MontserratSans.className}`}>
        <EmotionRegistry>
          <ModalOutlet />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}
