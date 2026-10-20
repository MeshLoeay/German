import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Grad4() {
  // بيانات دروس الترم الأول منظمة بالترتيب
  const term1Lessons = [
    {
      title: "الدرس الأول",
      label: "الدرس الأول: Lektion 1 (الحروف)",
      subLabel: "(لا يعمل لأنه شرح من الدرس فقط)",
      isLink: false,
    },
    {
      title: "الدرس الثاني - Lektion 2",
      links: [
        { to: "/grad4/Lektion2X1", label: "الدرس الثاني - Lektion 2 (شرح)" },
        { to: "/grad4/Lektion2Exercises", label: "تدريبات الدرس الثاني - Lektion 2 (تدريبات)" }
      ]
    },
    {
      title: "الدرس الثالث - Lektion 3",
      links: [
        { to: "/grad4/Lektion3X1", label: "الدرس الثالث - Lektion 3 (شرح)" },
        { to: "/grad4/Lektion3Exercises", label: "تدريبات الدرس الثالث - Lektion 3 (تدريبات)" },
        { to: "/grad4/Lektion3Words", label: "كلمات الدرس الثالث - Lektion 3 (كلمات)" }
      ]
    },
    {
      title: "تدريبات عامة",
      links: [
        { to: "/grad4/GermanPractice", label: "تدريبات عامة - German Practice" }
      ]
    },
    {
      title: "الدرس الرابع - Lektion 4",
      links: [
        { to: "/grad4/lektion4", label: "الدرس الرابع - Lektion 4" },
        { to: "/grad4/lektion4exercises", label: "تدريبات الدرس الرابع - Lektion 4 (تدريبات)" }
      ]
    },
    {
      title: "الدرس الخامس - Lektion 5",
      links: [
        { to: "/grad4/lektion5", label: "الدرس الخامس - Lektion 5" }
      ]
    },
    {
      title: "الدرس السادس - Lektion 6",
      links: [
        { to: "/grad4/lektion6", label: "الدرس السادس - Lektion 6" },
        { to: "/grad4/Lektion6Exercises", label: "تدريبات الدرس السادس - Lektion 6 (تدريبات)" }
      ]
    },
    {
      title: "الدرس السابع - Lektion 7",
      links: [
        { to: "/grad4/lektion7", label: "الدرس السابع - Lektion 7" },
        { to: "/grad4/Lektion7Exercises", label: "تدريبات الدرس السابع - Lektion 7 (تدريبات)" }
      ]
    }
  ];

  // بيانات دروس الترم الثاني
  const term2Lessons = [
    { to: "/grad4/term2/lektion1", label: "الدرس الأول والثاني معاً: المدرسة والشنطة" },
    { to: "/grad4/term2/Term2Lektion1Exercises", label: "تسميع كلمات الدرس الأول والثاني" },
    { to: "/grad4/term2/Term2Lektion1Exercises2", label: "تدريبات على الدرس الأول والثاني" },
    { to: "/grad4/term2/Term2Lektion1Exercises3", label: "جمل مهمة من الدرس الأول والثاني" },
    { to: "/grad4/term2/Term2Lektion1Exercises4", label: "تدريبات على جمل الدرس الأول والثاني" },
    { to: "/grad4/term2/lektion3", label: "الدرس الثالث - Lektion 3" },
    { to: "/grad4/term2/Term2Lektion4", label: "الدرس الرابع: أعضاء الجسم" },
    { to: "/grad4/term2/lektion5", label: "الدرس الخامس - Lektion 5" },
    { to: "/grad4/term2/lektion6", label: "الدرس السادس - Lektion 6" },
    { to: "/grad4/term2/lektion7", label: "الدرس السابع - Lektion 7" },
    { to: "/grad4/term2/spiele-und-hobbys", label: "الألعاب والهوايات - Spiele und Hobbys" }
  ];

  return (
    <div className="quiz-container" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '10px 15px', boxSizing: 'border-box' }}>

      {/* رأس الصفحة */}
      <div className="quiz-title-section" style={{ marginBottom: '20px', marginTop: '30px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '22px' }}>الصف الرابع الابتدائي</h1>
        <p style={{ fontSize: '13px', margin: 0, opacity: 0.8 }}>ارجع للدرس لمراجعة المعلومات واستذكار القواعد بشكل أفضل.</p>
      </div>

      <div className="main-center-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '25px' }}>

        {/* ---------------- الترم الأول ---------------- */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h3 style={{ textAlign: 'right', margin: '0', fontSize: '18px', color: '#38bdf8', borderBottom: '2px solid rgba(56, 189, 248, 0.3)', paddingBottom: '6px' }}>
            الترم الأول
          </h3>

          {term1Lessons.map((section, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>

              {/* عنوان الدرس الفرعي */}
              <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>
                {section.title}
              </div>

              {/* إذا كان عنصراً غير مفعل (مثل الدرس الأول) */}
              {section.isLink === false ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px 18px',
                  backgroundColor: '#991b1b',
                  color: '#ffffff',
                  borderRadius: '30px 6px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  gap: '2px'
                }}>
                  <span>{section.label}</span>
                  <span style={{ fontSize: '12px', fontWeight: 'normal', opacity: 0.9 }}>{section.subLabel}</span>
                </div>
              ) : (
                /* الروابط الخاصة بالدرس */
                <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {section.links.map((linkItem, linkIdx) => (
                    <Link key={linkIdx} to={linkItem.to} className="nav-link-item" style={{
                      display: 'block',
                      padding: '10px 18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.07)',
                      color: 'inherit',
                      textDecoration: 'none',
                      borderRadius: '30px 6px',
                      border: '1px solid rgba(128, 128, 128, 0.2)',
                      fontWeight: 'bold',
                      textAlign: 'right',
                      transition: 'all 0.3s ease'
                    }}>
                      {linkItem.label}
                    </Link>
                  ))}
                </nav>
              )}

            </div>
          ))}
        </div>

        {/* ---------------- الترم الثاني ---------------- */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
          <h3 style={{ textAlign: 'right', margin: '0', fontSize: '18px', color: '#38bdf8', borderBottom: '2px solid rgba(56, 189, 248, 0.3)', paddingBottom: '6px' }}>
            الترم الثاني (من الدرس 1 إلى 7)
          </h3>

          <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {term2Lessons.map((item, index) => {
              let lessonTitle = item.label.split(' - ')[0].split(':')[0] || `الدرس`;
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>
                    {lessonTitle}
                  </div>
                  <Link to={item.to} className="nav-link-item" style={{
                    display: 'block',
                    padding: '10px 18px',
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    color: 'inherit',
                    textDecoration: 'none',
                    borderRadius: '30px 6px',
                    border: '1px solid rgba(128, 128, 128, 0.2)',
                    fontWeight: 'bold',
                    textAlign: 'right',
                    transition: 'all 0.3s ease'
                  }}>
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

      </div>
    </div>
  );
}