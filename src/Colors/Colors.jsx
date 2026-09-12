import React, { useState } from 'react';

export default function Colors() {
  const [activeTab, setActiveTab] = useState('words'); // 'words' أو 'quiz'
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});

  const colorsData = [
    { ar: 'أحمر', de: 'Rot', quizDe: 'rot', className: 'card-red' },
    { ar: 'أزرق', de: 'Blau', quizDe: 'blau', className: 'card-blue' },
    { ar: 'أخضر', de: 'Grün', quizDe: 'grün', className: 'card-green' },
    { ar: 'أصفر', de: 'Gelb', quizDe: 'gelb', className: 'card-yellow' },
    { ar: 'برتقالي', de: 'Orange', quizDe: 'orange', className: 'card-orange' },
    { ar: 'بنفسجي', de: 'Lila', quizDe: 'lila', className: 'card-purple' },
    { ar: 'وردي', de: 'Rosa', quizDe: 'rosa', className: 'card-pink' },
    { ar: 'بني', de: 'Braun', quizDe: 'braun', className: 'card-brown' },
    { ar: 'أسود', de: 'Schwarz', quizDe: 'schwarz', className: 'card-black' },
    { ar: 'أبيض', de: 'Weiß', quizDe: 'weiß', className: 'card-white' },
    { ar: 'رمادي', de: 'Grau', quizDe: 'grau', className: 'card-grey' }
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

  const handleInputChange = (index, value) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const checkAnswers = () => {
    const newResults = {};
    colorsData.forEach((item, index) => {
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
          كلمات الألوان
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
          اختبار الألوان
        </button>
      </div>

      {/* محتوى قسم الكلمات */}
      {activeTab === 'words' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1
            onClick={() => speakText('Die Farben')}
            style={{
              textAlign: 'center',
              color: 'var(--text-color, #0f172a)',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '25px',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            Die Farben - الألوان
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
            {colorsData.map((item, index) => (
              <div
                key={index}
                className={`color-card ${item.className}`}
                onClick={() => speakText(item.de)}
                style={{
                  position: 'relative',
                  borderRadius: '30px 6px 30px 6px',
                  padding: '12px 24px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px',
                  textAlign: 'center',
                  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                  minHeight: '58px',
                  userSelect: 'none',
                  width: '100%'
                }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, opacity: 0.95 }}>
                  {item.ar}
                </span>
                <span style={{ fontSize: '1.4rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Fredoka', 'Comic Sans MS', cursive, sans-serif" }}>
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
            marginBottom: '20px',
            userSelect: 'none'
          }}>
            اختبر نفسك: الألوان
          </h1>

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
            {colorsData.map((item, index) => {
              const isChecked = results[index] !== undefined;
              const isCorrect = results[index];

              return (
                <div
                  key={index}
                  className={`color-card ${item.className}`}
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
                    width: '100%'
                  }}
                >
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    {item.ar}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '55%' }}>
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
                      backgroundColor: item.className === 'card-yellow' || item.className === 'card-white' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.2)',
                      border: `2px solid ${
                        isChecked
                          ? (isCorrect ? '#22c55e' : '#ef4444')
                          : (item.className === 'card-yellow' || item.className === 'card-white' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.4)')
                      }`,
                      borderRadius: '20px',
                      padding: '4px 10px',
                      transition: 'all 0.3s ease'
                    }}>
                      <input
                        type="text"
                        value={answers[index] || ''}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        placeholder="اكتب بالألمانية..."
                        style={{
                          fontSize: '0.95rem',
                          padding: '4px',
                          border: 'none',
                          width: '100%',
                          textAlign: 'center',
                          direction: 'ltr',
                          outline: 'none',
                          backgroundColor: 'transparent',
                          color: item.className === 'card-yellow' || item.className === 'card-white' ? '#0f172a' : '#ffffff',
                          fontWeight: 'bold'
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
        .card-red { background-color: #ef4444; color: #ffffff; }
        .card-blue { background-color: #3b82f6; color: #ffffff; }
        .card-green { background-color: #22c55e; color: #ffffff; }
        .card-yellow { background-color: #eab308; color: #1e293b; }
        .card-orange { background-color: #f97316; color: #ffffff; }
        .card-purple { background-color: #a855f7; color: #ffffff; }
        .card-pink { background-color: #ec4899; color: #ffffff; }
        .card-brown { background-color: #854d0e; color: #ffffff; }
        .card-black { background-color: #1e293b; color: #ffffff; }
        .card-white { background-color: #ffffff; color: #0f172a; border: 2px solid #000000; }
        .card-grey { background-color: #64748b; color: #ffffff; }

        .input-container.correct {
          border-color: #22c55e !important;
          background-color: rgba(34, 197, 94, 0.3) !important;
        }
        .input-container.incorrect {
          border-color: #ef4444 !important;
          background-color: rgba(239, 68, 68, 0.3) !important;
        }

        @media (max-width: 600px) {
          h1 { font-size: 1.6rem !important; }
          .color-card { padding: 10px 14px !important; min-height: 52px !important; }
        }
      `}</style>
    </div>
  );
}