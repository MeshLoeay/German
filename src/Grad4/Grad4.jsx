import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Grad4() {
  const term1Lessons = [
    {
      label: "الدرس الأول: Lektion 1 (الحروف)\n(لا يعمل لأنه شرح من الدرس فقط)",
      isLink: false
    },
    { to: "/grad4/Lektion2X1", label: "الدرس الثاني - Lektion 2 (شرح)", isLink: true },
    { to: "/grad4/Lektion2Exercises", label: "تدريبات الدرس الثاني - Lektion 2 (تدريبات)", isLink: true, isExercise: true },
    { to: "/grad4/Lektion3X1", label: "الدرس الثالث - Lektion 3 (شرح)", isLink: true },
    { to: "/grad4/Lektion3Exercises", label: "تدريبات الدرس الثالث - Lektion 3 (تدريبات)", isLink: true, isExercise: true },
    { to: "/grad4/Lektion3Words", label: "كلمات الدرس الثالث - Lektion 3 (كلمات)", isLink: true, isExercise: true },
    { to: "/grad4/GermanPractice", label: "تدريبات عامة - German Practice", isLink: true, isExercise: true },
    { to: "/grad4/lektion4", label: "الدرس الرابع - Lektion 4", isLink: true },
    { to: "/grad4/lektion4exercises", label: "تدريبات الدرس الرابع - Lektion 4 (تدريبات)", isLink: true, isExercise: true },
    { to: "/grad4/lektion5", label: "الدرس الخامس - Lektion 5", isLink: true },
    { to: "/grad4/lektion6", label: "الدرس السادس - Lektion 6", isLink: true },
    { to: "/grad4/Lektion6Exercises", label: "تدريبات الدرس السادس - Lektion 6 (تدريبات)", isLink: true, isExercise: true },
    { to: "/grad4/lektion7", label: "الدرس السابع - Lektion 7", isLink: true },
    { to: "/grad4/Lektion7X1", label: "شرح الدرس السابع - Lektion 7 (شرح)", isLink: true },
    { to: "/grad4/Lektion7Exercises", label: "تدريبات الدرس السابع - Lektion 7 (تدريبات)", isLink: true, isExercise: true }
  ];

  const term2Lessons = [
    { to: "/grad4/term2/lektion1", label: "الدرس الأول - Lektion 1", isLink: true },
    { to: "/grad4/term2/lektion2", label: "الدرس الثاني - Lektion 2", isLink: true },
    { to: "/grad4/term2/lektion3", label: "الدرس الثالث - Lektion 3", isLink: true },
    { to: "/grad4/term2/lektion4", label: "الدرس الرابع - Lektion 4", isLink: true },
    { to: "/grad4/term2/lektion5", label: "الدرس الخامس - Lektion 5", isLink: true },
    { to: "/grad4/term2/lektion6", label: "الدرس السادس - Lektion 6", isLink: true },
    { to: "/grad4/term2/lektion7", label: "الدرس السابع - Lektion 7", isLink: true },
    { to: "/grad4/spiele-und-hobbys", label: "الألعاب والهوايات - Spiele und Hobbys", isLink: true, isExercise: true }
  ];

  return (
    <div className="quiz-container" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '10px 15px', boxSizing: 'border-box' }}>
      <div className="quiz-title-section" style={{ marginBottom: '15px', marginTop: '30px' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '22px' }}>الصف الرابع الابتدائي</h1>
        <p style={{ fontSize: '13px', margin: 0, opacity: 0.8 }}>ارجع للدرس لمراجعة المعلومات واستذكار القواعد بشكل أفضل.</p>
      </div>

      <div className="main-center-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* الترم الأول */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ textAlign: 'right', margin: '0', fontSize: '18px', color: '#38bdf8', borderBottom: '2px solid rgba(56, 189, 248, 0.3)', paddingBottom: '6px' }}>الترم الأول</h3>

          {/* عرض الدرس الأول كمجموعة مستقلة */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>الدرس الأول</div>
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
              <span>الدرس الأول: Lektion 1 (الحروف)</span>
              <span style={{ fontSize: '12px', fontWeight: 'normal', opacity: 0.9 }}>(لا يعمل لأنه شرح من الدرس فقط)</span>
            </div>
          </div>

          {/* الدرس الثاني */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>الدرس الثاني - Lektion 2</div>
            <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/grad4/Lektion2X1" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>الدرس الثاني - Lektion 2 (شرح)</Link>
              <Link to="/grad4/Lektion2Exercises" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>تدريبات الدرس الثاني - Lektion 2 (تدريبات)</Link>
            </nav>
          </div>

          {/* الدرس الثالث */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>الدرس الثالث - Lektion 3</div>
            <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/grad4/Lektion3X1" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>الدرس الثالث - Lektion 3 (شرح)</Link>
              <Link to="/grad4/Lektion3Exercises" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>تدريبات الدرس الثالث - Lektion 3 (تدريبات)</Link>
              <Link to="/grad4/Lektion3Words" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>كلمات الدرس الثالث - Lektion 3 (كلمات)</Link>
            </nav>
          </div>

          {/* التدريبات العامة */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/grad4/GermanPractice" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>تدريبات عامة - German Practice</Link>
            </nav>
          </div>

          {/* الدرس الرابع */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>الدرس الرابع - Lektion 4</div>
            <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/grad4/lektion4" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>الدرس الرابع - Lektion 4</Link>
              <Link to="/grad4/lektion4exercises" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>تدريبات الدرس الرابع - Lektion 4 (تدريبات)</Link>
            </nav>
          </div>

          {/* الدرس الخامس */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>الدرس الخامس - Lektion 5</div>
            <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/grad4/lektion5" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>الدرس الخامس - Lektion 5</Link>
            </nav>
          </div>

          {/* الدرس السادس */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>الدرس السادس - Lektion 6</div>
            <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/grad4/lektion6" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>الدرس السادس - Lektion 6</Link>
              <Link to="/grad4/Lektion6Exercises" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>تدريبات الدرس السادس - Lektion 6 (تدريبات)</Link>
            </nav>
          </div>

          {/* الدرس السابع */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>الدرس السابع - Lektion 7</div>
            <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link to="/grad4/lektion7" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>الدرس السابع - Lektion 7</Link>
              <Link to="/grad4/Lektion7X1" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>شرح الدرس السابع - Lektion 7 (شرح)</Link>
              <Link to="/grad4/Lektion7Exercises" className="nav-link-item" style={{
                display: 'block', padding: '10px 18px', backgroundColor: 'rgba(255, 255, 255, 0.07)', color: 'inherit', textDecoration: 'none', borderRadius: '30px 6px', border: '1px solid rgba(128, 128, 128, 0.2)', fontWeight: 'bold', textAlign: 'right', transition: 'all 0.3s ease'
              }}>تدريبات الدرس السابع - Lektion 7 (تدريبات)</Link>
            </nav>
          </div>

        </div>

        {/* الترم الثاني */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
          <h3 style={{ textAlign: 'right', margin: '0', fontSize: '18px', color: '#38bdf8', borderBottom: '2px solid rgba(56, 189, 248, 0.3)', paddingBottom: '6px' }}>الترم الثاني (من الدرس 1 إلى 7)</h3>

          <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {term2Lessons.map((item, index) => {
              let lessonTitle = item.label.split(' - ')[0] || `الدرس`;
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', color: '#94a3b8', paddingRight: '4px' }}>{lessonTitle}</div>
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