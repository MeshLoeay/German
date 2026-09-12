import React, { useState } from 'react';

export default function Monate() {
  const [activeTab, setActiveTab] = useState('words'); // 'words' أو 'quiz'
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});

  const timeUnitsData = [
    { ar: 'شهر', de: 'der Monat', quizDe: 'der monat', className: 'card-time' },
    { ar: 'شهور', de: 'die Monate', quizDe: 'die monate', className: 'card-time' },
    { ar: 'فصل (من فصول السنة)', de: 'die Jahreszeit', quizDe: 'die jahreszeit', className: 'card-time' }
  ];

  // فصول السنة الأربعة مع ألوانها المميزة
  const seasonsData = [
    { ar: 'الربيع', de: 'der Frühling', quizDe: 'der frühling', className: 'card-spring' },
    { ar: 'الصيف', de: 'der Sommer', quizDe: 'der sommer', className: 'card-summer' },
    { ar: 'الخريف', de: 'der Herbst', quizDe: 'der herbst', className: 'card-autumn' },
    { ar: 'الشتاء', de: 'der Winter', quizDe: 'der winter', className: 'card-winter' }
  ];

  // شهور السنة مرتبطة من يناير إلى ديسمبر، مع الاحتفاظ بلون الفصل التابع له كل شهر
  const monthsData = [
    // الشتاء (يناير، فبراير) -> تدرجات الأزرق البارد
    { ar: 'يناير', de: 'Januar', quizDe: 'januar', className: 'card-winter-month' },
    { ar: 'فبراير', de: 'Februar', quizDe: 'februar', className: 'card-winter-month' },

    // الربيع (مارس، أبريل، مايو) -> تدرجات الأخضر والربيع
    { ar: 'مارس', de: 'März', quizDe: 'märz', className: 'card-spring-month' },
    { ar: 'أبريل', de: 'April', quizDe: 'april', className: 'card-spring-month' },
    { ar: 'مايو', de: 'Mai', quizDe: 'mai', className: 'card-spring-month' },

    // الصيف (يونيو، يوليو، أغسطس) -> تدرجات الأصفر والشمس
    { ar: 'يونيو', de: 'Juni', quizDe: 'juni', className: 'card-summer-month' },
    { ar: 'يوليو', de: 'Juli', quizDe: 'juli', className: 'card-summer-month' },
    { ar: 'أغسطس', de: 'August', quizDe: 'august', className: 'card-summer-month' },

    // الخريف (سبتمبر، أكتوبر، نوفمبر) -> تدرجات الخريف الدافئة
    { ar: 'سبتمبر', de: 'September', quizDe: 'september', className: 'card-autumn-month' },
    { ar: 'أكتوبر', de: 'Oktober', quizDe: 'oktober', className: 'card-autumn-month' },
    { ar: 'نوفمبر', de: 'November', quizDe: 'november', className: 'card-autumn-month' },

    // الشتاء (ديسمبر) -> تدرجات الأزرق البارد
    { ar: 'ديسمبر', de: 'Dezember', quizDe: 'dezember', className: 'card-winter-month' }
  ];

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleInputChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const checkAnswers = () => {
    const newResults = {};
    const allItems = [...timeUnitsData, ...seasonsData, ...monthsData];
    allItems.forEach((item, index) => {
      const userVal = (answers[index] || '').trim().toLowerCase();
      newResults[index] = userVal === item.quizDe.toLowerCase();
    });
    setResults(newResults);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      {/* زر التبديل بين الكلمات والأسئلة */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '25px',
        width: '100%',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setActiveTab('words')}
          style={{
            flex: 1,
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            backgroundColor: activeTab === 'words' ? '#3b82f6' : 'rgba(128, 128, 128, 0.2)',
            color: activeTab === 'words' ? '#ffffff' : 'var(--text-color, #0f172a)',
            transition: 'all 0.3s ease'
          }}
        >
          كلمات الشهور والفصول
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          style={{
            flex: 1,
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            backgroundColor: activeTab === 'quiz' ? '#3b82f6' : 'rgba(128, 128, 128, 0.2)',
            color: activeTab === 'quiz' ? '#ffffff' : 'var(--text-color, #0f172a)',
            transition: 'all 0.3s ease'
          }}
        >
          اختبار الشهور والفصول
        </button>
      </div>

      {/* محتوى قسم الكلمات */}
      {activeTab === 'words' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1
            onClick={() => speakText('Die Monate und Jahreszeiten')}
            style={{
              textAlign: 'center',
              color: 'var(--text-color, #0f172a)',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '10px',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            Die Monate & Jahreszeiten
          </h1>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '8px', fontWeight: 500 }}>
            ملاحظة: أسماء الشهور والفصول في الألمانية تأتي دائماً بحرف كبير.
          </p>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', fontStyle: 'italic', marginBottom: '20px' }}>
            🎙️ اضغط على أي عنصر للاستماع إلى نطقه الصحيح بالألمانية.
          </p>

          {/* وحدات الزمن العامة */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginBottom: '15px' }}>
            {timeUnitsData.map((item, index) => (
              <div
                key={index}
                onClick={() => speakText(item.de)}
                className={`vocab-card ${item.className}`}
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--card-bg, #ffffff)',
                  border: '2px solid #2563eb',
                  borderRadius: '30px 6px 30px 6px',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  cursor: 'pointer',
                  minHeight: '60px',
                  userSelect: 'none',
                  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.ar}</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb', direction: 'ltr', fontFamily: "'Fredoka', 'Comic Sans MS', cursive, sans-serif" }}>
                  {item.de}
                </span>
              </div>
            ))}
          </div>

          {/* فصول السنة */}
          <div style={{ width: '100%', margin: '10px 0 5px 0', textAlign: 'right' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-color, #0f172a)', fontWeight: 'bold' }}>فصول السنة (Die Jahreszeiten):</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginBottom: '20px' }}>
            {seasonsData.map((item, index) => (
              <div
                key={index}
                className={`vocab-card ${item.className}`}
                onClick={() => speakText(item.de)}
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--card-bg, #ffffff)',
                  borderRadius: '30px 6px 30px 6px',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  cursor: 'pointer',
                  minHeight: '60px',
                  userSelect: 'none',
                  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.ar}</span>
                <span className="de-season-text" style={{ fontSize: '1.25rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Fredoka', 'Comic Sans MS', cursive, sans-serif" }}>
                  {item.de}
                </span>
              </div>
            ))}
          </div>

          {/* شهور السنة مرتبطة من يناير إلى ديسمبر */}
          <div style={{ width: '100%', margin: '10px 0 5px 0', textAlign: 'right' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-color, #0f172a)', fontWeight: 'bold' }}>شهور السنة (Die Monate):</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
            {monthsData.map((item, index) => (
              <div
                key={index}
                className={`vocab-card ${item.className}`}
                onClick={() => speakText(item.de)}
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--card-bg, #ffffff)',
                  borderRadius: '30px 6px 30px 6px',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  cursor: 'pointer',
                  minHeight: '60px',
                  userSelect: 'none',
                  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.ar}</span>
                <span className="de-month-text" style={{ fontSize: '1.25rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Fredoka', 'Comic Sans MS', cursive, sans-serif" }}>
                  {item.de}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* محتوى قسم الأسئلة */}
      {activeTab === 'quiz' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1 style={{
            textAlign: 'center',
            color: 'var(--text-color, #0f172a)',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '8px',
            userSelect: 'none'
          }}>
            اختبر نفسك: الشهور والفصول
          </h1>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '25px', fontWeight: 500 }}>
            ملاحظة: أسماء الشهور والفصول في الألمانية تكتب دائماً بحرف كبير.
          </p>

          <button onClick={checkAnswers} style={{
            marginBottom: '25px',
            backgroundColor: '#3b82f6',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            padding: '10px 35px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)'
          }}>
            تحقق من الإجابات
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            {[...timeUnitsData, ...seasonsData, ...monthsData].map((item, index) => {
              const isChecked = results[index] !== undefined;
              const isCorrect = results[index];

              return (
                <div
                  key={index}
                  className={`test-card ${item.className}`}
                  style={{
                    position: 'relative',
                    borderRadius: '30px 6px 30px 6px',
                    padding: '12px 20px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)',
                    minHeight: '60px',
                    width: '100%',
                    backgroundColor: 'var(--card-bg, #ffffff)'
                  }}
                >
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    {item.ar}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '55%', flexDirection: 'row' }}>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      width: '26px',
                      height: '26px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      opacity: isChecked ? 1 : 0,
                      transform: isChecked ? 'scale(1)' : 'scale(0.5)',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                      backgroundColor: isCorrect ? '#22c55e' : '#ef4444',
                      color: '#ffffff'
                    }}>
                      {isChecked ? (isCorrect ? '✓' : '✕') : ''}
                    </div>

                    <div className={`input-container ${isChecked ? (isCorrect ? 'correct' : 'incorrect') : ''}`} style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.03)',
                      border: `2px solid ${
                        isChecked
                          ? (isCorrect ? '#22c55e' : '#ef4444')
                          : 'rgba(0, 0, 0, 0.15)'
                      }`,
                      borderRadius: '20px',
                      padding: '4px 10px',
                      transition: 'all 0.3s ease'
                    }}>
                      <input
                        type="text"
                        value={answers[index] || ''}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        placeholder={item.className === 'card-time' ? "بالأداة..." : "اكتب بالألمانية..."}
                        style={{
                          fontSize: '0.95rem',
                          padding: '4px',
                          border: 'none',
                          width: '100%',
                          textAlign: 'center',
                          direction: 'ltr',
                          outline: 'none',
                          backgroundColor: 'transparent',
                          color: 'var(--text-color, #0f172a)',
                          fontWeight: 'bold',
                          fontFamily: "'Fredoka', 'Comic Sans MS', cursive, sans-serif"
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        /* ألوان الفصول */
        .card-spring { border: 2px solid #10b981; }
        .card-spring .de-season-text { color: #10b981; }

        .card-summer { border: 2px solid #eab308; }
        .card-summer .de-season-text { color: #eab308; }

        .card-autumn { border: 2px solid #f97316; }
        .card-autumn .de-season-text { color: #f97316; }

        .card-winter { border: 2px solid #3b82f6; }
        .card-winter .de-season-text { color: #3b82f6; }

        /* ألوان الشهور مشتقة من لون الفصل التابع له (الشتاء أزرق، الربيع أخضر، الصيف أصفر، الخريف برتقالي) */
        .card-spring-month { border: 2px solid #34d399; }
        .card-spring-month .de-month-text { color: #059669; }

        .card-summer-month { border: 2px solid #facc15; }
        .card-summer-month .de-month-text { color: #ca8a04; }

        .card-autumn-month { border: 2px solid #fb923c; }
        .card-autumn-month .de-month-text { color: #c2410c; }

        .card-winter-month { border: 2px solid #60a5fa; }
        .card-winter-month .de-month-text { color: #1d4ed8; }

        .input-container.correct {
          border-color: #22c55e !important;
          background-color: rgba(34, 197, 94, 0.15) !important;
        }
        .input-container.incorrect {
          border-color: #ef4444 !important;
          background-color: rgba(239, 68, 68, 0.15) !important;
        }

        @media (max-width: 600px) {
          h1 { font-size: 1.6rem !important; }
        }
      `}</style>
    </div>
  );
}