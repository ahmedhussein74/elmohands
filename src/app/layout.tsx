import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Script from 'next/script'; 

export const metadata: Metadata = {
  title: "المهندس لنقل الأثاث والتغليف",
  description:
    "شركة متخصصة في خدمات النقل والتغليف والفك والتركيب من قلب القاهرة. فريق مدرب ونقل آمن بدون خدوش.",
  keywords: [
    "المهندس لنقل الأثاث والتغليف",
    "شركة نقل أثاث في القاهرة",
    "فك وتركيب الأثاث",
    "نقل أثاث بدون خدوش",
    "نقل عفش محترف",
    "نقل أثاث آمن",
    "نقل عفش على مدار الساعة",
  ],
};

const GTM_ID = 'GTM-KBKJ96VD';

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
        <noscript>
            <iframe 
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0" 
                width="0" 
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
        
        {children}

        <div className="flex flex-col gap-3 fixed bottom-5 right-5">
          <a href="https://wa.me/+201107675277" className="z-50">
            <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} />
          </a>
          <a href="tel:+201107675277" className="z-50">
            <Image src="/phone-call.png" alt="Phone Call" width={50} height={50} />
          </a>
        </div>

        <Footer />

        <Script
          id="google-tag-manager-head"
          strategy="beforeInteractive" // هام: لضمان التحميل المبكر قبل تفاعل المستخدم
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

      </body>
    </html>
  );
}