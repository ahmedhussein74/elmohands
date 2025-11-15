"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const places = [
  "مدينة نصر",
  "التجمع الأول",
  "التجمع الثالث",
  "التجمع الخامس",
  "مصر الجديدة",
  "المعادي",
  "العباسية",
  "شبرا",
  "رمسيس ووسط البلد",
  "الزيتون",
  "عين شمس",
  "السلام",
  "المرج",
  "المطرية",
  "فيصل",
  "الهرم",
  "الدقي",
  "المهندسين",
  "العجوزة",
  "الجيزة",
  "إمبابة",
  "6 أكتوبر",
  "الشيخ زايد",
  "حدائق الأهرام",
  "حلوان",
  "15 مايو",
  "البدرشين",
  "الرحاب",
  "مدينتي",
];

const Places = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
      dir="rtl"
    >
      <div className="w-[90%] lg:w-4/5 mx-auto text-center space-y-10">
        <h2
          className="text-2xl lg:text-4xl font-bold text-[#ff7917]"
          data-aos="fade-up"
        >
          بنغطي كل مناطق القاهرة الكبرى والجيزة
        </h2>

        <p className="text-lg lg:text-xl leading-relaxed" data-aos="fade-up">
          شركتنا بتخدم كل أنحاء <strong>القاهرة الكبرى والجيزة</strong>، وبنوصل
          لحد باب بيتك أو مكتبك بسرعة وكفاءة في المناطق التالية:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 flex items-center gap-2 border border-gray-200 border-b-2 border-b-[#ff7917]"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <Image
                width={25}
                height={25}
                alt="location"
                src="/location.png"
              />
              <span className="text-right text-sm lg:text-base text-gray-800">
                {place}
              </span>
            </div>
          ))}
        </div>

        <p className="text-lg lg:text-xl pt-8 text-gray-700" data-aos="fade-up">
          يعني في أي مكان داخل <strong>القاهرة أو حواليها</strong>،{" "}
          <span className="text-[#ff7917] font-semibold">
            كايرو لنقل الأثاث
          </span>{" "}
          هيوصل لك بأمان وسرعة واحتراف.
        </p>
      </div>
    </section>
  );
};

export default Places;
