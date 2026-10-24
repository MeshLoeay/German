import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function A1() {
  const a1Sections = [
    {
      title: "الأسئلة والتدريبات الأساسية",
      links: [
        {
          to: "/A1/A1GermanQuestions",
          label: "🔥 أهم 135 سؤال في اللغة الألمانية (A1)",
          isSpecial: true
        },
        {
          to: "/A1/A1Sentences",
          label: "🔥 أهم 600 جمله في اللغة الألمانية (A1)",
          isSpecial: true
        },
        // {
        //   to: "/A1/important-words",
        //   label: "📚 أهم الكلمات والمفردات - A1",
        //   isSpecial: true
        // }
      ]
    },
    // {
    //   title: "الوحدات الدراسية",
    //   links: [
    //     { to: "/A1/lektion1", label: "الدرس الأول - Lektion 1" },
    //     { to: "/A1/lektion2", label: "الدرس الثاني - Lektion 2" },
    //     { to: "/A1/lektion3", label: "الدرس الثالث - Lektion 3" }
    //   ]
    // }
  ];

  return (
    <div className="quiz-container" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '10px 15px', boxSizing: 'border-box' }}>

      <div className="quiz-title-section" style={{ marginBottom: '20px', marginTop: '30px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '22px' }}>مستوى اللغة الألمانية (A1)</h1>
        <p style={{ fontSize: '13px', margin: 0, opacity: 0.8 }}>اختر القسم المطلوب للمراجعة والتدريب.</p>
      </div>

      <div className="main-center-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '18px' }}>

          {a1Sections.map((section, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

              <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#38bdf8', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '4px' }}>
                {section.title}
              </div>

              <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {section.links.map((linkItem, linkIdx) => (
                  <Link
                    key={linkIdx}
                    to={linkItem.to}
                    className="nav-link-item"
                    style={{
                      display: 'block',
                      padding: '12px 18px',
                      backgroundColor: linkItem.isSpecial ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.07)',
                      color: 'inherit',
                      textDecoration: 'none',
                      borderRadius: '30px 6px',
                      border: linkItem.isSpecial ? '1px solid rgba(56, 189, 248, 0.5)' : '1px solid rgba(128, 128, 128, 0.2)',
                      fontWeight: 'bold',
                      textAlign: 'right',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {linkItem.label}
                  </Link>
                ))}
              </nav>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}