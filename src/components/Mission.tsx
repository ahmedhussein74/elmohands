"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const Mission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center text-center py-16 gap-12"
      dir="rtl"
    >
      <div className="w-[90%] lg:w-4/5 mx-auto space-y-12">
        <article
          className="text-lg lg:text-3xl text-gray-800 leading-relaxed"
          data-aos="fade-up"
        >
          لو بتدور على شركة نقل أثاث محترمة في القاهرة أو أكتوبر أو زايد، يبقى
          <span className="text-[#ff7917] font-semibold">
            {" "}
            المهندس لنقل الأثاث{" "}
          </span>
          هو اختيارك الصح!
        </article>

        <article
          className="text-lg lg:text-3xl text-gray-800 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          خبرة سنين في النقل، الفك، التركيب، والتغليف. بنشتغل بمواعيد، وبأمان
          تام، وبنقدملك أرخص سعر مقابل أعلى جودة. سواء هتنقل شقة، مكتب، أو فيلا
          كاملة – إحنا معاك من الباب للباب.
        </article>
      </div>

      <div className="w-full flex flex-wrap justify-between items-center px-[5%] lg:px-[10%] mt-4">
        <Image
          width={150}
          height={100}
          alt="truck right"
          data-aos="fade-left"
          src="/truck_right.png"
          className="w-1/3 lg:w-1/4"
        />
        <Image
          width={350}
          height={100}
          src="/m1.jpg"
          alt="من نحن"
          className="mx-auto"
          data-aos="zoom-in"
        />
        <Image
          width={150}
          height={100}
          alt="truck left"
          data-aos="fade-right"
          src="/truck_left.png"
          className="w-1/3 lg:w-1/4"
        />
      </div>

      <a
        href="tel:+201107675277"
        className="bg-[#ff7917] text-white text-lg lg:text-xl w-40 lg:w-72 h-12 rounded-2xl flex items-center justify-center hover:opacity-90 transition"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        تواصل معنا
      </a>
    </section>
  );
};

export default Mission;
