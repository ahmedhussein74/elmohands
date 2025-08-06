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
  const content = [...places, ...places]; // duplicate for smooth scroll

  return (
    <div dir="rtl" className="overflow-hidden bg-gray-100 py-2 absolute bottom-[10%]">
      <div
        className="flex gap-8 w-max animate-[scroll_40s_linear_infinite]"
        style={{ animation: "scroll 40s linear infinite" }}
      >
        {content.map((place, index) => (
          <span key={index} className="text-gray-800 text-lg whitespace-nowrap">
            {place}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
