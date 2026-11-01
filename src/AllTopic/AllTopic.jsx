import React from 'react';
import { Link } from 'react-router-dom';

export default function AllTopic() {
  const topics = [
    {
      to: "/AllTopic/T7eyat",
      label: "👋 التحيات والعبارات الأساسية",
      isSpecial: true
    },
    {
      to: "/AllTopic/NumbersAndMath",
      label: "🔢 الأرقام والرياضيات",
      isSpecial: true
    },
    {
      to: "/AllTopic/Dameer",
      label: "❓ الضمائر وأدوات الاستفهام",
      isSpecial: true
    },
    {
      to: "/AllTopic/GermanVerbsApp",
      label: "اهم الافعال و تصريفاتها",
      isSpecial: true
    },
    {
      to: "/AllTopic/Family",
      label: "👨‍👩‍👧‍👦 العائلة",
      isSpecial: true
    },
    {
      to: "/AllTopic/EssenUndWasser",
      label: "الطعام و الشراب",
      isSpecial: true
    },
    {
      to: "/AllTopic/Shapes",
      label: "الاشكال",
      isSpecial: true
    },
    {
      to: "/AllTopic/Haus",
      label: "المنزل و الاثاث",
      isSpecial: true
    },
    {
      to: "/AllTopic/TimeAndDatePage",
      label: "الوقت و التاريخ",
      isSpecial: true
    },
    {
      to: "/AllTopic/CityAndTransport",
      label: "🏙️ المدينة والمواصلات 🚌",
      isSpecial: true
    },
    {
      to: "/AllTopic/BodyAndHelthy",
      label: "الجسم و الصحه",
      isSpecial: true
    },
    {
      to: "/AllTopic/Clothes",
      label: "الملابس",
      isSpecial: true
    },
    {
      to: "/AllTopic/Weather",
      label: "الطبيعه و الطقس",
      isSpecial: true
    },
    {
      to: "/AllTopic/Jops",
      label: "أهم المهن / الوظائف",
      isSpecial: true
    },
    {
      to: "/AllTopic/Abrag",
      label: "الابراج",
      isSpecial: true
    },
    {
      to: "/AllTopic/Logat",
      label: "اللغات",
      isSpecial: true
    },
    {
      to: "/AllTopic/SchoolAndEducationPage",
      label: "المدرسه و التعليم",
      isSpecial: true
    },
    {
      to: "/AllTopic/Internet",
      label: "التكنولوجيا و الانترنت",
      isSpecial: true
    },
    {
      to: "/AllTopic/TravelPage",
      label: "السفر",
      isSpecial: true
    },
    {
      to: "/AllTopic/ImportWords",
      label: "🔗 أهم كلمات وعبارات الربط",
      isSpecial: true
    },
  ];

  return (
    <div className="quiz-container" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '10px 15px 25px 15px', boxSizing: 'border-box' }}>

      <div className="quiz-title-section" style={{ marginBottom: '25px', marginTop: '20px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '22px' }}>أهم الموضوعات في اللغة الألمانية 🇩🇪</h1>
        <p style={{ fontSize: '13px', margin: 0, opacity: 0.8 }}>اختر الموضوع الذي تريد مراجعته.</p>
      </div>

      <div className="main-center-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {topics.map((item, idx) => {
            const currentNum = `${idx + 1}`;

            return (
              <Link
                key={idx}
                to={item.to}
                className="nav-link-item"
                style={{
                  position: 'relative',
                  overflow: 'visible',
                  display: 'block',
                  padding: '14px 18px',
                  backgroundColor: item.isSpecial ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.07)',
                  color: 'inherit',
                  textDecoration: 'none',
                  borderRadius: '30px 6px',
                  border: item.isSpecial ? '1px solid rgba(56, 189, 248, 0.5)' : '1px solid rgba(128, 128, 128, 0.2)',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Cairo', 'Courgette', sans-serif"
                }}
              >
                {/* تم تكبير الخط لـ 17px، وضبط أبعاد الدائرة لتتلاءم تماماً */}
                <span
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '8px',
                    width: '26px',          // تم تصغير العرض لتناسب الرقم
                    height: '26px',         // تم تصغير الارتفاع لتناسب الرقم
                    backgroundColor: '#ef4444',
                    color: '#ffffff',
                    fontSize: '17px',       // تم تكبير الخط 4 بكسل (13px + 4px)
                    fontWeight: 'bold',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                    zIndex: 10
                  }}
                >
                  {currentNum}
                </span>

                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

    </div>
  );
}