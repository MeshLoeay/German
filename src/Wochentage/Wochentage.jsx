import React, { useState } from 'react';

export default function Wochentage() {
  const [activeTab, setActiveTab] = useState('words'); // 'words' أو 'quiz'
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});

  const timeUnitsData = [
    { ar: 'يوم', de: 'der Tag', quizDe: 'der tag', className: 'card-time' },
    { ar: 'أيام', de: 'die Tage', quizDe: 'die tage', className: 'card-time' },
    { ar: 'أسبوع', de: 'die Woche', quizDe: 'die woche', className: 'card-time' },
    { ar: 'شهر', de: 'der Monat', quizDe: 'der monat', className: 'card-time' }
  ];

  const daysData = [
    { ar: 'الاثنين', de: 'Montag', quizDe: 'montag', className: 'card-monday' },
    { ar: 'الثلاثاء', de: 'Dienstag', quizDe: 'dienstag', className: 'card-tuesday' },
    { ar: 'الأربعاء', de: 'Mittwoch', quizDe: 'mittwoch', className: 'card-wednesday' },
    { ar: 'الخميس', de: 'Donnerstag', quizDe: 'donnerstag', className: 'card-thursday' },
    { ar: 'الجمعة', de: 'Freitag', quizDe: 'freitag', className: 'card-friday' },
    { ar: 'السبت', de: 'Samstag', quizDe: 'samstag', className: 'card-saturday' },
    { ar: 'الأحد', de: 'Sonntag', quizDe: 'sonntag', className: 'card-sunday' }
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
    const allItems = [...timeUnitsData, ...daysData];
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
          كلمات الأسبوع
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
          اختبار الأسبوع
        </button>
      </div>

      {/* محتوى قسم الكلمات */}
      {activeTab === 'words' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1
            onClick={() => speakText('Die Wochentage')}
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
            Die Wochentage - أيام الأسبوع
          </h1>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '8px', fontWeight: 500 }}>
            ملاحظة: في ألمانيا، يبدأ الأسبوع رسمياً يوم الإثنين (Montag).
          </p>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', fontStyle: 'italic', marginBottom: '20px' }}>
            🎙️ اضغط على أي يوم أو وحدة زمنية لكي تستمع إليها.
          </p>

          {/* وحدات الزمن (شبكة مربعات) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginBottom: '15px' }}>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              {timeUnitsData.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  onClick={() => speakText(item.de)}
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--card-bg, #f8fafc)',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '10px 8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2563eb', direction: 'ltr', fontFamily: "'Fredoka', 'Comic Sans MS', cursive, sans-serif", marginBottom: '3px' }}>
                    {item.de}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#475569', fontWeight: 600 }}>{item.ar}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              {timeUnitsData.slice(2, 4).map((item, index) => {
                const actualIndex = index + 2;
                return (
                  <div
                    key={actualIndex}
                    onClick={() => speakText(item.de)}
                    style={{
                      flex: 1,
                      backgroundColor: 'var(--card-bg, #f8fafc)',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '10px 8px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2563eb', direction: 'ltr', fontFamily: "'Fredoka', 'Comic Sans MS', cursive, sans-serif", marginBottom: '3px' }}>
                      {item.de}
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#475569', fontWeight: 600 }}>{item.ar}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* قائمة الأيام */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
            {daysData.map((item, index) => (
              <div
                key={index}
                className={`day-card ${item.className}`}
                onClick={() => speakText(item.de)}
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--card-bg, #ffffff)',
                  border: '2px solid #cbd5e1',
                  borderRadius: '30px 6px 30px 6px',
                  padding: '12px 24px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px',
                  textAlign: 'center',
                  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer',
                  minHeight: '58px',
                  userSelect: 'none',
                  width: '100%'
                }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, opacity: 0.95 }}>
                  {item.ar}
                </span>
                <span className="de-text" style={{ fontSize: '1.4rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Fredoka', 'Comic Sans MS', cursive, sans-serif" }}>
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
            اختبر نفسك: أيام الأسبوع
          </h1>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '25px', fontWeight: 500 }}>
            ملاحظة: في ألمانيا، يبدأ الأسبوع رسمياً يوم الإثنين (Montag)، وتكتب أيام الأسبوع بحرف كبير.
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
            {[...timeUnitsData, ...daysData].map((item, index) => {
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
                    backgroundColor: 'var(--card-bg, #ffffff)',
                    border: '2px solid #cbd5e1'
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
        .card-monday .de-text { color: #3b82f6; }
        .card-tuesday .de-text { color: #ec4899; }
        .card-wednesday .de-text { color: #10b981; }
        .card-thursday .de-text { color: #f97316; }
        .card-friday .de-text { color: #8b5cf6; }
        .card-saturday .de-text { color: #06b6d4; }
        .card-sunday .de-text { color: #eab308; }

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