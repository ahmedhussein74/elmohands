"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const services = [
  "نقل أثاث منزلي",
  "فك وتركيب",
  "تغليف احترافي",
  "نقل مكاتب وشركات",
  "شحن وتفريغ",
  "تخزين أثاث مؤقت",
  "تنظيم الأثاث داخل المسكن الجديد",
  "نقل داخل الكمبوندات",
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      dir="rtl"
      id="services"
      className="bg-[#F7F7FA] px-[5%] lg:px-[10%] py-16 text-center"
    >
      <Image
        src="/services.png"
        alt="our services"
        width={400}
        height={400}
        className="mx-auto w-2/3 lg:w-1/4"
      />

      <p
        className="text-lg lg:text-3xl text-[#ff7917] my-6 leading-loose"
        data-aos="fade-up"
      >
        إحنا مش مجرد نقل وخلاص، إحنا بنقدم باقة خدمات متكاملة
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 min-h-16 flex items-center justify-center text-base lg:text-lg text-gray-800 border-b-2 border-b-[#ff7917]"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
