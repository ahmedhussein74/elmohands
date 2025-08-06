"use client";

const places = [
  "مدينة نصر",
  "التجمع الأول",
  "التجمع الثالث",
  "التجمع الخامس",
  "مصر الجديدة",
  "المعادي",
  "العباسية",
  "شبرا",
  "رمسيس",
  "وسط البلد",
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

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#ff7917] py-2 rtl absolute bottom-[10%]">
      <div
        className="inline-block animate-[scroll_40s_linear_infinite]"
        style={{
          animation: "scroll 40s linear infinite",
        }}
      >
        {places.map((place, index) => (
          <span key={index} className="mx-4 text-white text-lg">
            {place}
          </span>
        ))}
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
