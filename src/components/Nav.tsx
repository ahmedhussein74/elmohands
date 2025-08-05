"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <nav className="rounded-xl bg-[#ff7917]/80 w-[90%] lg:w-4/5 mx-auto h-12">
      <div className="h-full flex items-center justify-around text-white text-lg lg:text-xl">
        <Link
          href="/"
          data-aos="zoom-in"
          className="border-b-2 border-transparent hover:border-white"
        >
          الصفحة الرئيسية
        </Link>
        <Link
          href="#about"
          data-aos="zoom-in"
          className="border-b-2 border-transparent hover:border-white"
        >
          من نحن
        </Link>
        <Link
          href="#services"
          data-aos="zoom-in"
          className="border-b-2 border-transparent hover:border-white"
        >
          الخدمات
        </Link>
        <Link
          href="#contact"
          data-aos="zoom-in"
          className="border-b-2 border-transparent hover:border-white"
        >
          اتصل بنا
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
