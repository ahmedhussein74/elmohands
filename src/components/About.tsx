"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      dir="rtl"
      id="about"
      className="w-[90%] lg:w-4/5 mx-auto flex flex-col gap-12 items-center justify-center text-center py-16"
    >
      <Image
        width={150}
        height={100}
        src="/who.png"
        alt="من نحن"
        className="mx-auto w-2/3 lg:w-1/4"
        data-aos="zoom-in"
      />

      <article
        className="w-4/5 lg:w-2/3 text-lg lg:text-3xl leading-relaxed text-gray-800"
        data-aos="fade-up"
      >
        <span className="text-[#ff7917] font-semibold">
          المهندس لنقل الأثاث
        </span>{" "}
        هي شركة متخصصة في خدمات النقل، التغليف، الفك والتركيب. بدأنا من قلب
        القاهرة ووصلنا لكل مكان في العاصمة ومحيطها. بنشتغل على مدار الساعة،
        وفريقنا مدرب على أعلى مستوى. هدفنا هو راحتك ونقل كل حاجة بأمان من غير
        خدش أو تأخير.
      </article>

      <a
        href="tel:+201107675277"
        className="bg-[#ff7917] text-white text-lg lg:text-xl w-40 lg:w-72 h-12 rounded-2xl flex items-center justify-center hover:opacity-90 transition"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        تواصل معنا
      </a>
    </section>
  );
};

export default About;
