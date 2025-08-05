import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المهندس | شركة نقل أثاث",
  description:
    "شركة متخصصة في خدمات النقل والتغليف والفك والتركيب من قلب القاهرة. فريق مدرب ونقل آمن بدون خدوش.",
  keywords: [
    "المهندس نقل أثاث",
    "شركة نقل أثاث في القاهرة",
    "فك وتركيب الأثاث",
    "نقل أثاث بدون خدوش",
    "نقل عفش محترف",
    "نقل أثاث آمن",
    "نقل عفش على مدار الساعة",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v6.4.2/css/all.css"
        />
        <link
          rel="shortcut icon"
          href="delivery-truck.png"
          type="image/x-icon"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
