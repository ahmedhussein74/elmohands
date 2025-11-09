"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const navItems = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: "من نحن", href: "#about" },
  { name: "الخدمات", href: "#services" },
  { name: "اتصل بنا", href: "#contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-[90%] lg:w-4/5 mx-auto my-4" dir="rtl">
      <div className="bg-[#ff7917] backdrop-blur-md rounded-xl shadow-lg px-4 py-3 flex items-center justify-between">
        <h1 className="text-white text-lg lg:text-2xl font-semibold">
          كايرو
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-white text-base lg:text-xl">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              data-aos="zoom-in"
              className="relative group transition"
            >
              <span className="border-b-2 border-transparent group-hover:border-white transition duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="mt-2 bg-[#ff7917]/90 backdrop-blur-md rounded-xl px-4 py-4 flex flex-col gap-4 md:hidden text-white text-base font-medium animate-fade-in">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/30 pb-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
