import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

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
}: {
  children: React.ReactNode;
}) {
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

        <div className="flex flex-col gap-3 fixed bottom-5 right-5">
          <a href="https://wa.me/+201118288327" className="z-50">
            <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} />
          </a>
          <a href="tel:+201031076847" className="z-50">
            <Image src="/phone-call.png" alt="Phone Call" width={50} height={50} />
          </a>
        </div>

        <Footer />

      </body>
    </html>
  );
}
