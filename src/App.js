import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

//
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
//
import Term2Lektion1 from './Grad4/Term2/Term2Lektion1';
import Term2Lektion1Exercises from './Grad4/Term2/Term2Lektion1Exercises';
import Term2Lektion1Exercises2 from './Grad4/Term2/Term2Lektion1Exercises2';
import Term2Lektion1Exercises3 from './Grad4/Term2/Term2Lektion1Exercises3';
import Term2Lektion1Exercises4 from './Grad4/Term2/Term2Lektion1Exercises4';
import Term2Lektion4 from './Grad4/Term2/Term2Lektion4';
//
import Colors from './Colors/Colors';
import Alphabet from './Alphabet/Alphabet';
import GermanNumbersApp from './Numbers/Numbers';
import Wochentage from './Wochentage/Wochentage';
import Monate from './Monate/Monate';
import ReverseWords from './ReverseWords/ReverseWords';
import Animals from './Animals/Animals';
import FruitAndVegetables from './FruitAndVegetables/FruitAndVegetables';
import Country from './Country/Country';
import Uhr from './Uhr/Uhr';
import Music from './Music/Music';
//
import AllTopic from './AllTopic/AllTopic';
import ImportWords from './AllTopic/ImportWords';
import Family from './AllTopic/Family';
import Dameer from './AllTopic/Dameer';
import T7eyat from './AllTopic/T7eyat';
import NumbersAndMath from './AllTopic/NumbersAndMath';
import CityAndTransport from './AllTopic/CityAndTransport';
import GermanVerbsApp from './AllTopic/GermanVerbsApp';
import Jops from './AllTopic/Jops';
import Abrag from './AllTopic/Abrag';
import Logat from './AllTopic/Logat';
import TimeAndDatePage from './AllTopic/TimeAndDatePage';
import TravelPage from './AllTopic/TravelPage';
import SchoolAndEducationPage from './AllTopic/SchoolAndEducationPage';
//
import './style.css';
import './style2.css';

// Start A1
import A1 from './A1/A1';
import A1GermanQuestions from './A1/A1GermanQuestions';
// End A1

// Start A2
import A2 from './A2/A2';
import A2Sentences from './A2/A2Sentences';
// End A2

// Start Aus
import GermanJobsTable from './Aus/GermanJobsTable';
// End Aus

// Start Tamreed
import Tamreed from './Tamreed/Tamreed';
import Tamreed2 from './Tamreed/Tamreed2';
// End Tamreed

function EmptyPage() {
  const navigate = useNavigate();
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '40px 20px', gap: '15px', color: 'var(--text-color, inherit)',
      fontFamily: "'Cairo', 'Courgette', sans-serif", WebkitTextSizeAdjust: '100%'
    }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>الصفحة فاضية، اذهب إلى صفحة أخرى</h2>
      <button
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer', padding: '8px 16px', border: '1px solid var(--card-border, rgba(128,128,128,0.4))',
          background: 'var(--card-bg, transparent)', color: 'var(--text-color, inherit)', fontSize: '14px',
          fontWeight: 'bold', borderRadius: '8px', fontFamily: "'Cairo', 'Courgette', sans-serif"
        }}
      >
        العودة للرئيسية 🏠
      </button>
    </div>
  );
}

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <button onClick={() => navigate(-1)} className="nav-link-item" title="الرجوع للوراء" style={{
      cursor: 'pointer', padding: '8px 16px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', border: '1px solid var(--card-border, rgba(128,128,128,0.4))', background: 'var(--card-bg, transparent)', color: 'var(--text-color, inherit)', fontSize: '14px', fontWeight: 'bold', width: 'auto', margin: 0,
      fontFamily: "'Cairo', 'Courgette', sans-serif"
    }}>
      <span>رجوع</span>
      <span>⬅️</span>
    </button>
  );
}

function HomeButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <button onClick={() => navigate('/')} className="nav-link-item" title="القائمة الرئيسية" style={{
      cursor: 'pointer', padding: '8px 16px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', border: '1px solid var(--card-border, rgba(128,128,128,0.4))', background: 'var(--card-bg, transparent)', color: 'var(--text-color, inherit)', fontSize: '14px', fontWeight: 'bold', width: 'auto', margin: 0,
      fontFamily: "'Cairo', 'Courgette', sans-serif"
    }}>
      <span>الرئيسية</span>
      <span>🏠</span>
    </button>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [themeLevel, setThemeLevel] = useState(() => {
    const saved = localStorage.getItem('themeLevel');
    const parsed = saved !== null ? parseInt(saved, 10) : 0;
    return (parsed === 0 || parsed === 1) ? parsed : 0;
  });

  const [isChildMode, setIsChildMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const pressTimerRef = useRef(null);
  const isLongPressRef = useRef(false);

  useEffect(() => {
    localStorage.setItem('themeLevel', themeLevel);
    document.documentElement.setAttribute('data-theme', themeLevel === 1 ? 'light' : 'dark');
  }, [themeLevel]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY >= 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePressStart = () => {
    isLongPressRef.current = false;
    pressTimerRef.current = setTimeout(() => {
      isLongPressRef.current = true;
      scrollToTop();
    }, 1000);
  };

  const handlePressEnd = () => {
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
  };

  const handleScrollButtonClick = () => {
    if (!isLongPressRef.current) {
      scrollToTop();
    }
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

  const cycleTheme = () => setThemeLevel((prev) => (prev === 0 ? 1 : 0));
  const toggleChildMode = () => setIsChildMode(!isChildMode);

  const themeIcons = ['🌙', '☀️'];
  const themeTitles = ['الوضع الكحلي', 'الوضع الساطع'];

  return (
    <div className={`app-container ${isChildMode ? 'child-mode-active' : ''}`} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
      minHeight: '100vh', width: '100%', boxSizing: 'border-box', padding: '12px 10px 16px 10px',
      fontFamily: "'Cairo', 'Courgette', sans-serif", WebkitTextSizeAdjust: '100%', textSizeAdjust: '100%'
    }}>

      {showSplash && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(3, 7, 18, 0.95)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999999,
          animation: 'fadeIn 0.5s ease'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', color: '#ffffff',
            padding: '25px 30px', borderRadius: '24px', textAlign: 'center',
            boxShadow: '0 20px 50px rgba(56, 189, 248, 0.4)', border: '2px solid rgba(56, 189, 248, 0.6)',
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            gap: '15px', width: '90%', maxWidth: '400px', boxSizing: 'border-box'
          }}>
            <img src="https://meshloeay.github.io/Your-Age/My-img/5.png" alt="Decoration" style={{ width: '40px', height: '40px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.7))', flexShrink: 0 }} />
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#38bdf8', letterSpacing: '0.5px', whiteSpace: 'nowrap', fontFamily: "'Cairo', sans-serif" }}>
              صلى على محمد
              <br/>
            ❤️ متنساش ❤️ تدعيلى ❤️
            </span>
            <img src="https://meshloeay.github.io/Your-Age/My-img/5.png" alt="Decoration" style={{ width: '40px', height: '40px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.7))', flexShrink: 0 }} />
          </div>
        </div>
      )}

      <div className="top-right-tools" style={{
        position: 'relative', width: '100%', maxWidth: '540px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', zIndex: 10
      }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <HomeButton />
          <button id="themeToggle" onClick={cycleTheme} className="tool-icon-btn" title={themeTitles[themeLevel]} style={{
            cursor: 'pointer', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.4)', background: 'transparent', fontSize: '16px',
            fontFamily: "'Cairo', 'Courgette', sans-serif"
          }}>
            {themeIcons[themeLevel]}
          </button>
          <button id="childModeToggle" onClick={toggleChildMode} className="tool-icon-btn" title="وضع الأطفال" style={{
            cursor: 'pointer', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.4)', background: 'transparent', fontSize: '16px',
            fontFamily: "'Cairo', 'Courgette', sans-serif"
          }}>
            <span id="modeEmoji">{isChildMode ? '🧔🏻' : '👶🏻'}</span>
          </button>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <BackButton />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <header style={{
              textAlign: 'center',
              marginBottom: '20px',
              width: '100%',
              maxWidth: '540px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ fontSize: '28px', filter: 'drop-shadow(0 2px 8px rgba(251, 191, 36, 0.6))' }}>👑</span>
                <h1 style={{
                  margin: 0,
                  fontSize: '32px',
                  fontWeight: '900',
                  letterSpacing: '1px',
                  background: 'linear-gradient(135deg, #f838c8 0%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Cairo', sans-serif"
                }}>
                  الرايق
                </h1>
                <span style={{ fontSize: '28px', filter: 'drop-shadow(0 2px 8px rgba(251, 191, 36, 0.6))' }}>👑</span>
              </div>
              <h2 style={{
                margin: '6px 0 0 0',
                fontSize: '22px',
                fontWeight: '600',
                color: 'var(--text-color, inherit)',
                opacity: 0.85,
                fontFamily: "'Cairo', sans-serif"
              }}>
                الموقع الرايق للناس الرايقه
              </h2>
            </header>

            <div className="main-center-wrapper" style={{
              width: '90%', maxWidth: '540px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
            }}>
              <nav className="nav-links-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { to: "/alphabet", label: "الحروف" },
                  { to: "/colors", label: "الألوان" },
                  { to: "/numbers", label: "الأرقام" },
                  { to: "/days", label: "أيام الأسبوع" },
                  { to: "/Monate", label: "أسماء الشهور وفصول السنه" },
                  { to: "/ReverseWords", label: "الكلمه و عكسها A1 - C2" },
                  { to: "/Animals", label: "الحيوانات و الحشرات" },
                  { to: "/FruitAndVegetables", label: "الفاكهه و الخضراوات" },
                  { to: "/Country", label: 'أسماء الدول' },
                  { to: "/Uhr", label: 'الساعه' },
                  { to: "/Music", label: 'التعلم بالاغانى' },
                  { to: "/AllTopic", label: 'باقى المواضيع' },
                  { to: "/lektion3", label: "الأسئلة التعريفية (Vorstellung)" },
                  { to: "/life-sentences", label: "الجمل الحياتية" },
                  { to: "/grad4", label: "الصف الرابع الابتدائي" },
                  { to: "/grad5", label: "الصف الخامس الابتدائي" },
                  { to: "/grad6", label: "الصف السادس الابتدائي" },
                  { to: "/preparatory", label: "إعدادي" },
                  { to: "/secondary", label: "ثانوي" },
                  { to: "/A1", label: "المستوى A1" },
                  { to: "/a2", label: "المستوى A2" },
                  { to: "/b1", label: "المستوى B1" },
                  { to: "/b2", label: "المستوى B2" },
                  { to: "/c1", label: "المستوى C1" },
                  { to: "/c2", label: "المستوى C2" }
                ].map((item, index) => (
                  <Link key={index} to={item.to} className="nav-link-item" style={{ fontFamily: "'Cairo', 'Courgette', sans-serif" }}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="contact-section-bottom" style={{
              marginTop: '20px', maxWidth: '540px', display: 'flex', zIndex: 5, boxSizing: 'border-box', scale: 1.3,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px', width: "175px",
                background: 'rgba(0, 0, 0, 0.4)', padding: '10px 16px', borderRadius: '20px 6px 20px 6px', backdropFilter: 'blur(5px)'
              }}>
                <div className="contact-title" style={{ color: '#fff', fontSize: '11px', textAlign: 'right', width: '100%', fontWeight: 'bold', fontFamily: "'Cairo', 'Courgette', sans-serif" }}>للتواصل معي</div>
                <div className="social-row" style={{ display: 'flex', gap: '6px', justifyContent: 'center', width: '100%', scale: 1.3 }}>
                  <a href="https://wa.me/201003412932" className="social-link whatsapp-bg" target="_blank" rel="noreferrer" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '14px', height: '14px' }} />
                  </a>
                  <a href="https://www.facebook.com/qursan.loeay/" className="social-link facebook-bg" target="_blank" rel="noreferrer" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" alt="Facebook" style={{ width: '14px', height: '14px' }} />
                  </a>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '30px', width: '90%', maxWidth: '540px', display: 'flex',
              flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: 'var(--text-color, inherit)' }}>
                ألمانيا - Deutschland
              </h2>

              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', opacity: 0.85, color: 'var(--text-color, inherit)' }}>
                كل ما يخص ألمانيا - Alles über Deutschland
              </h3>

              <Link to="/Aus/GermanJobsTable" className="nav-link-item" style={{ width: '100%', textAlign: 'center', fontFamily: "'Cairo', 'Courgette', sans-serif" }}>
                مجالات الأوسبيلدونغ - Ausbildung-Bereiche
              </Link>

              <h2 style={{ marginTop: '10px', marginBottom: 0, fontSize: '20px', fontWeight: 'bold', color: 'var(--text-color, inherit)' }}>
                تمريض - Krankenpflege
              </h2>

              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', opacity: 0.85, color: 'var(--text-color, inherit)' }}>
                كل ما يخص التمريض - Alles über Krankenpflege
              </h3>
              <h3 style={{ margin: 0, fontSize: '16px', textAlign: "center", fontWeight: '600', opacity: 0.85, color: 'var(--text-color, inherit)' }}>
                بقا انا بطلب منكو اسئله تمريض تقلولى المريض مريض
                <br />
                Der Patient ist krank
                <br />
                اومال هيكون بيستعبط
                <br />
                دنا هتنمر عليكو للصبح
                <br />
                نعم للتنمر 😂 😂
              </h3>

              {/* أزرار التمريض */}
              <Link to="/tamreed" className="nav-link-item" style={{ width: '100%', textAlign: 'center', fontFamily: "'Cairo', 'Courgette', sans-serif" }}>
                أعضاء الجسم الخارجية - Äußere Körperteile
              </Link>

              <Link to="/tamreed2" className="nav-link-item" style={{ width: '100%', textAlign: 'center', fontFamily: "'Cairo', 'Courgette', sans-serif" }}>
                الأعضاء الداخلية - Die inneren Organe
              </Link>
            </div>
          </>
        } />

        <Route path="/alphabet" element={<Alphabet />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/numbers" element={<GermanNumbersApp />} />
        <Route path="/days" element={<Wochentage />} />
        <Route path="/Monate" element={<Monate />} />
        <Route path="/ReverseWords" element={<ReverseWords />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/FruitAndVegetables" element={<FruitAndVegetables />} />
        <Route path="/Country" element={<Country />} />
        <Route path="/Uhr" element={<Uhr />} />
        <Route path="/Music" element={<Music />} />

        <Route path="/AllTopic" element={<AllTopic />} />
        <Route path="/AllTopic/ImportWords" element={<ImportWords />} />
        <Route path="/AllTopic/Family" element={<Family />} />
        <Route path="/AllTopic/Dameer" element={<Dameer />} />
        <Route path="/AllTopic/T7eyat" element={<T7eyat />} />
        <Route path="/AllTopic/NumbersAndMath" element={<NumbersAndMath />} />
        <Route path="/AllTopic/CityAndTransport" element={<CityAndTransport />} />
        <Route path="/AllTopic/GermanVerbsApp" element={<GermanVerbsApp />} />
        <Route path="/AllTopic/Jops" element={<Jops />} />
        <Route path="/AllTopic/Abrag" element={<Abrag />} />
        <Route path="/AllTopic/Logat" element={<Logat />} />
        <Route path="/AllTopic/TimeAndDatePage" element={<TimeAndDatePage />} />
        <Route path="/AllTopic/TravelPage" element={<TravelPage />} />
        <Route path="/AllTopic/SchoolAndEducationPage" element={<SchoolAndEducationPage />} />

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

        <Route path="/grad4/term2/lektion1" element={<Term2Lektion1 />} />
        <Route path="/grad4/term2/Term2Lektion1Exercises" element={<Term2Lektion1Exercises />} />
        <Route path="/grad4/term2/Term2Lektion1Exercises2" element={<Term2Lektion1Exercises2 />} />
        <Route path="/grad4/term2/Term2Lektion1Exercises3" element={<Term2Lektion1Exercises3 />} />
        <Route path="/grad4/term2/Term2Lektion1Exercises4" element={<Term2Lektion1Exercises4 />} />
        <Route path="/grad4/term2/Term2Lektion4" element={<Term2Lektion4 />} />

        <Route path="/A1" element={<A1 />} />
        <Route path="/A1/A1GermanQuestions" element={<A1GermanQuestions />} />

        <Route path="/A2" element={<A2 />} />
        <Route path="/A2/A2Sentences" element={<A2Sentences />} />

        <Route path="/Aus/GermanJobsTable" element={<GermanJobsTable />} />

        <Route path="/tamreed" element={<Tamreed />} />
        <Route path="/tamreed2" element={<Tamreed2 />} />

        <Route path="*" element={<EmptyPage />} />
      </Routes>

      {showScrollTop && (
        <button
          onClick={handleScrollButtonClick}
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onMouseLeave={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
          style={{
            position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000,
            padding: '10px 16px', borderRadius: '20px', backgroundColor: 'var(--card-bg)',
            color: 'var(--text-color)', border: '1px solid var(--card-border)',
            fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease', fontFamily: "'Cairo', 'Courgette', sans-serif",
            userSelect: 'none', WebkitUserSelect: 'none'
          }}
        >
          طلعنى ⬆️
        </button>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
      `}</style>
    </div>
  );
}

export default App;