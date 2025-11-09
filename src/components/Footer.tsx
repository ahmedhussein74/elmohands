import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ff7917] text-white text-center py-4 lg:text-xl">
      copyright &copy; {new Date().getFullYear()}  كايرو لنقل الأثاث والتغليف
      <br />
      جميع الحقوق محفوظة
    </footer>
  );
};

export default Footer;
