"use client";

import Image from "next/image";

const phoneNumbers = ["01118288327", "01031076847"];

const ContactUs = () => {
  return (
    <section
      dir="rtl"
      id="contact"
      className="bg-gradient-to-br from-[#fffaf5] to-[#f7f7fa] py-16 px-[5%] lg:px-[10%] text-center"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#ff7917]">
          تواصل معنا الآن
        </h2>

        <p className="text-lg lg:text-2xl text-gray-700">
          فريقنا جاهز يرد عليك في أي وقت — اتصل بينا مباشرة واحجز خدمتك بسهولة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {phoneNumbers.map((number, index) => (
            <a
              key={index}
              href={`tel:${number}`}
              className="flex items-center justify-center gap-3 bg-white shadow-md hover:shadow-lg transition rounded-2xl py-4 px-6 text-lg lg:text-xl text-[#ff7917] font-semibold border border-gray-200"
            >
              <Image src="/phone-call.png" alt="phone" width={50} height={50} />
              {number}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
