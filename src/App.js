import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Grad4 from './Grad4/Grad4';
import Lektion2X1 from './Grad4/Lektion2X1';
import Lektion3X1 from './Grad4/Lektion3X1';
import Lektion2Exercises from './Grad4/Lektion2Exercises';
import Lektion3Exercises from './Grad4/Lektion3Exercises';
import Lektion3Words from './Grad4/Lektion3Words';
import GermanPractice from './Grad4/GermanPractice';
import Lektion4X1 from './Grad4/Lektion4X1';
import Lektion5X1 from './Grad4/Lektion5X1';
import Lektion4Exercises from './Grad4/Lektion4Exercises';
import Lektion6X1 from './Grad4/Lektion6X1';
import Lektion6Exercises from './Grad4/Lektion6Exercises';
import Lektion7X1 from './Grad4/Lektion7X1';
import Lektion7Exercises from './Grad4/Lektion7Exercises';
import Colors from './Colors/Colors';
import Wochentage from './Wochentage/Wochentage';
import Monate from './Monate/Monate';
import './style.css';
import './style2.css';

// زر الرجوع ليتم وضعه في الجهة المقابلة
function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <button onClick={() => navigate(-1)} className="nav-link-item" title="الرجوع للوراء" style={{
      cursor: 'pointer', padding: '8px 16px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', border: '1px solid var(--card-border, rgba(128,128,128,0.4))', background: 'var(--card-bg, transparent)', color: 'var(--text-color, inherit)', fontSize: '14px', fontWeight: 'bold', width: 'auto', margin: 0
    }}>
      <span>رجوع</span>
      <span>⬅️</span>
    </button>
  );
}

// زر الرئيسية ليتم وضعه على الشمال مع باقي الأزرار بنفس الترتيب
function HomeButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <button onClick={() => navigate('/')} className="nav-link-item" title="القائمة الرئيسية" style={{
      cursor: 'pointer', padding: '8px 16px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', border: '1px solid var(--card-border, rgba(128,128,128,0.4))', background: 'var(--card-bg, transparent)', color: 'var(--text-color, inherit)', fontSize: '14px', fontWeight: 'bold', width: 'auto', margin: 0
    }}>
      <span>الرئيسية</span>
      <span>🏠</span>
    </button>
  );
}

function App() {
  const [themeLevel, setThemeLevel] = useState(() => {
    const saved = localStorage.getItem('themeLevel');
    const parsed = saved !== null ? parseInt(saved, 10) : 0;
    return (parsed === 0 || parsed === 1) ? parsed : 0;
  });

  const [isChildMode, setIsChildMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    localStorage.setItem('themeLevel', themeLevel);
    document.documentElement.setAttribute('data-theme', themeLevel === 1 ? 'light' : 'dark');
  }, [themeLevel]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let fruitInterval;
    const fruits = ["🍎", "🍏", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍", "🥭", "🥝"];

    if (isChildMode) {
      fruitInterval = setInterval(() => {
        const f = document.createElement("div");
        f.className = "fruit-drop";
        f.innerText = fruits[Math.floor(Math.random() * fruits.length)];
        f.style.left = Math.random() * 100 + "vw";
        const dur = Math.random() * 2 + 3;
        f.style.setProperty("--duration", dur + "s");
        document.body.appendChild(f);
        setTimeout(() => f.remove(), dur * 1000);
      }, 500);
    }

    return () => {
      if (fruitInterval) clearInterval(fruitInterval);
    };
  }, [isChildMode]);

  const cycleTheme = () => {
    setThemeLevel((prev) => (prev === 0 ? 1 : 0));
  };

  const toggleChildMode = () => setIsChildMode(!isChildMode);

  const themeIcons = ['🌙', '☀️'];
  const themeTitles = ['الوضع الكحلي', 'الوضع الساطع'];

  return (
    <div className={`app-container ${isChildMode ? 'child-mode-active' : ''}`} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      width: '100%',
      boxSizing: 'border-box',
      padding: '15px 12px 20px 12px'
    }}>
      <div className="top-right-tools" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        zIndex: 10
      }}>
        {/* أزرار الرئيسية، الثيم، ووضع الأطفال أصبحت مجتمعة على جهة الشمال بنفس الترتيب */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <HomeButton />

          <button id="themeToggle" onClick={cycleTheme} className="tool-icon-btn" title={themeTitles[themeLevel]} style={{
            cursor: 'pointer', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.4)', background: 'transparent', fontSize: '16px'
          }}>
            {themeIcons[themeLevel]}
          </button>

          <button id="childModeToggle" onClick={toggleChildMode} className="tool-icon-btn" title="وضع الأطفال" style={{
            cursor: 'pointer', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.4)', background: 'transparent', fontSize: '16px'
          }}>
            <span id="modeEmoji">{isChildMode ? '🧔🏻' : '👶🏻'}</span>
          </button>
        </div>

        {/* زر الرجوع أصبح في الجهة الأخرى (اليمين) */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <BackButton />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-center-wrapper" style={{
              width: '100%',
              maxWidth: '600px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <nav className="nav-links-container" style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {[
                  { to: "/numbers", label: "الأرقام" },
                  { to: "/colors", label: "الألوان" },
                  { to: "/lektion3", label: "الأسئلة التعريفية (Vorstellung)" },
                  { to: "/life-sentences", label: "الجمل الحياتية" },
                  { to: "/days", label: "أيام الأسبوع" },
                  { to: "/Monate", label: "أسماء الشهور وفصول السنه" },
                  { to: "/grad4", label: "الصف الرابع الابتدائي" },
                  { to: "/grad5", label: "الصف الخامس الابتدائي" },
                  { to: "/grad6", label: "الصف السادس الابتدائي" },
                  { to: "/preparatory", label: "إعدادي" },
                  { to: "/secondary", label: "ثانوي" },
                  { to: "/a1", label: "المستوى A1" },
                  { to: "/a2", label: "المستوى A2" },
                  { to: "/b1", label: "المستوى B1" },
                  { to: "/b2", label: "المستوى B2" },
                  { to: "/c1", label: "المستوى C1" },
                  { to: "/c2", label: "المستوى C2" }
                ].map((item, index) => (
                  <Link key={index} to={item.to} className="nav-link-item">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="contact-section-bottom" style={{
              marginTop: '20px',
              width: '100%',
              maxWidth: '600px',
              display: 'flex',
              justifyContent: 'flex-start',
              zIndex: 5,
              boxSizing: 'border-box'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '4px',
                background: 'rgba(0, 0, 0, 0.4)',
                padding: '8px 14px',
                borderRadius: '20px 6px 20px 6px',
                backdropFilter: 'blur(5px)'
              }}>
                <div className="contact-title" style={{ color: '#fff', fontSize: '11px', textAlign: 'right', width: '100%', fontWeight: 'bold' }}>للتواصل معي</div>
                <div className="social-row" style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end', width: '100%' }}>
                  <a href="https://wa.me/201003412932" className="social-link whatsapp-bg" target="_blank" rel="noreferrer" style={{width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '14px', height: '14px' }} />
                  </a>
                  <a href="https://www.facebook.com/qursan.loeay/" className="social-link facebook-bg" target="_blank" rel="noreferrer" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" alt="Facebook" style={{ width: '14px', height: '14px' }} />
                  </a>
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/colors" element={<Colors />} />
        <Route path="/days" element={<Wochentage />} />
        <Route path="/Monate" element={<Monate />} />
        <Route path="/grad4" element={<Grad4 />} />
        <Route path="/grad4/Lektion2X1" element={<Lektion2X1 />} />
        <Route path="/grad4/Lektion3X1" element={<Lektion3X1 />} />
        <Route path="/grad4/lektion3" element={<Lektion3X1 />} />
        <Route path="/grad4/Lektion2Exercises" element={<Lektion2Exercises />} />
        <Route path="/grad4/Lektion3Exercises" element={<Lektion3Exercises />} />
        <Route path="/grad4/Lektion3Words" element={<Lektion3Words />} />
        <Route path="/grad4/lektion4" element={<Lektion4X1 />} />
        <Route path="/grad4/lektion5" element={<Lektion5X1 />} />
        <Route path="/grad4/Lektion6" element={<Lektion6X1 />} />
        <Route path="/grad4/Lektion6Exercises" element={<Lektion6Exercises />} />
        <Route path="/grad4/Lektion7" element={<Lektion7X1 />} />
        <Route path="/grad4/Lektion7Exercises" element={<Lektion7Exercises />} />
        <Route path="/grad4/GermanPractice" element={<GermanPractice />} />
        <Route path="/grad4/Lektion4Exercises" element={<Lektion4Exercises />} />
      </Routes>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            padding: '10px 16px',
            borderRadius: '20px',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-color)',
            border: '1px solid var(--card-border)',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          طلعنى ⬆️
        </button>
      )}
    </div>
  );
}

export default App;