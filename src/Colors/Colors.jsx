import React, { useState } from 'react';

export default function Colors() {
  const [activeTab, setActiveTab] = useState('words'); // 'words' أو 'quiz'
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});

  // حالة التحكم بإظهار التدرجات في قسم الكلمات (أول لون مفتوح افتراضياً)
  const [expandedColors, setExpandedColors] = useState({ 0: true });

  const colorsData = [
    { ar: 'أحمر', de: 'Rot', quizDe: 'rot', className: 'card-red', light: '#fca5a5', lightText: '#1e293b', dark: '#b91c1c', darkText: '#ffffff', lightDe: 'hellrot', darkDe: 'dunkelrot', lightAr: 'أحمر فاتح', darkAr: 'أحمر غامق' },
    { ar: 'أزرق', de: 'Blau', quizDe: 'blau', className: 'card-blue', light: '#38bdf8', lightText: '#0f172a', dark: '#1e3a8a', darkText: '#ffffff', lightDe: 'hellblau', darkDe: 'dunkelblau' },
    { ar: 'أخضر', de: 'Grün', quizDe: 'grün', className: 'card-green', light: '#86efac', lightText: '#0f172a', dark: '#166534', darkText: '#ffffff', lightDe: 'hellgrün', darkDe: 'dunkelgrün' },
    { ar: 'أصفر', de: 'Gelb', quizDe: 'gelb', className: 'card-yellow', light: '#fef08a', lightText: '#1e293b', dark: '#ca8a04', darkText: '#ffffff', lightDe: 'hellgelb', darkDe: 'dunkelgelb' },
    { ar: 'برتقالي', de: 'Orange', quizDe: 'orange', className: 'card-orange', light: '#fed7aa', lightText: '#1e293b', dark: '#c2410c', darkText: '#ffffff', lightDe: 'hellorange', darkDe: 'dunkelorange' },
    { ar: 'بنفسجي', de: 'Lila', quizDe: 'lila', className: 'card-purple', light: '#e9d5ff', lightText: '#1e293b', dark: '#6b21a8', darkText: '#ffffff', lightDe: 'helllila', darkDe: 'dunkellila' },
    { ar: 'وردي', de: 'Rosa', quizDe: 'rosa', className: 'card-pink', light: '#fbcfe8', lightText: '#1e293b', dark: '#be185d', darkText: '#ffffff', lightDe: 'hellrosa', darkDe: 'dunkelrosa' },
    { ar: 'بني', de: 'Braun', quizDe: 'braun', className: 'card-brown', light: '#d97706', lightText: '#ffffff', dark: '#451a03', darkText: '#ffffff', lightDe: 'hellbraun', darkDe: 'dunkelbraun' },
    { ar: 'أسود', de: 'Schwarz', quizDe: 'schwarz', className: 'card-black' },
    { ar: 'أبيض', de: 'Weiß', quizDe: 'weiß', className: 'card-white' },
    { ar: 'رمادي', de: 'Grau', quizDe: 'grau', className: 'card-grey', light: '#cbd5e1', lightText: '#0f172a', dark: '#334155', darkText: '#ffffff', lightDe: 'hellgrau', darkDe: 'dunkelgrau' },
    { ar: 'تركواز', de: 'Türkis', quizDe: 'türkis', className: 'card-turquoise', light: '#99f6e4', lightText: '#0f172a', dark: '#0f766e', darkText: '#ffffff', lightDe: 'helltürkis', darkDe: 'dunkeltürkis' },
    { ar: 'بينك', de: 'Pink', quizDe: 'pink', className: 'card-pink-hot', light: '#f472b6', lightText: '#0f172a', dark: '#db2777', darkText: '#ffffff', lightDe: 'hellpink', darkDe: 'dunkelpink' },
    { ar: 'أرجواني فاتح', de: 'Flieder', quizDe: 'flieder', className: 'card-flieder', light: '#f3e8ff', lightText: '#1e293b', dark: '#9333ea', darkText: '#ffffff', lightDe: 'hellflieder', darkDe: 'dunkelflieder' },
    { ar: 'ذهبي', de: 'Gold', quizDe: 'gold', className: 'card-gold' },
    { ar: 'نحاسي', de: 'Kupfer', quizDe: 'kupfer', className: 'card-copper' },
    { ar: 'فضي', de: 'Silber', quizDe: 'silber', className: 'card-silver' }
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

  // زر لنطق الكلمات التمهيدية (لون، ألوان، فاتح، غامق) ثم كل الألوان بالتتابع
  const speakAllColors = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const introWords = ['Die Farbe', 'die Farben', 'hell', 'dunkel'];
      let delay = 0;

      // 1. نطق الكلمات التمهيدية أولاً
      introWords.forEach((word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85;
        setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, delay);
        delay += 850;
      });

      // 2. نطق جميع الألوان بعد ذلك
      colorsData.forEach((item) => {
        const utterance = new SpeechSynthesisUtterance(item.de);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85;
        setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, delay);
        delay += 800;
      });
    }
  };

  // زر لنطق كل لون مع الفاتح والغامق اللذين يليه لو كانا موجودين
  const speakAllColorsWithShades = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      let delay = 0;
      colorsData.forEach((item) => {
        const utteranceMain = new SpeechSynthesisUtterance(item.de);
        utteranceMain.lang = 'de-DE';
        utteranceMain.rate = 0.85;
        setTimeout(() => { window.speechSynthesis.speak(utteranceMain); }, delay);
        delay += 750;

        if (item.lightDe) {
          const utteranceLight = new SpeechSynthesisUtterance(item.lightDe);
          utteranceLight.lang = 'de-DE';
          utteranceLight.rate = 0.85;
          setTimeout(() => { window.speechSynthesis.speak(utteranceLight); }, delay);
          delay += 750;
        }

        if (item.darkDe) {
          const utteranceDark = new SpeechSynthesisUtterance(item.darkDe);
          utteranceDark.lang = 'de-DE';
          utteranceDark.rate = 0.85;
          setTimeout(() => { window.speechSynthesis.speak(utteranceDark); }, delay);
          delay += 750;
        }
      });
    }
  };

  const openColor = (index) => {
    setExpandedColors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleInputChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const checkAnswers = () => {
    const newResults = {};
    colorsData.forEach((item, index) => {
      const userVal = (answers[index] || '').trim().toLowerCase();
      newResults[index] = userVal === item.quizDe.toLowerCase();
      if (item.light) {
        const userValLight = (answers[`${index}_light`] || '').trim().toLowerCase();
        newResults[`${index}_light`] = userValLight === item.lightDe.toLowerCase();
        const userValDark = (answers[`${index}_dark`] || '').trim().toLowerCase();
        newResults[`${index}_dark`] = userValDark === item.darkDe.toLowerCase();
      }
    });
    setResults(newResults);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '95%',
      maxWidth: '500px',
      margin: '0 auto',
      fontFamily: "'Courgette', cursive, sans-serif"
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
            transition: 'all 0.3s ease',
            fontFamily: "'Courgette', cursive, sans-serif"
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
            transition: 'all 0.3s ease',
            fontFamily: "'Courgette', cursive, sans-serif"
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
              fontSize: '2.2rem',
              fontWeight: 'bold',
              marginBottom: '4px',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            Die Farben - الألوان
          </h1>

          <h3
            style={{
              textAlign: 'center',
              color: '#64748b',
              fontSize: '1.05rem',
              fontWeight: 'normal',
              marginBottom: '16px',
              userSelect: 'none'
            }}
          >
            لون ومعناه بالألمانية (Farbe und ihre Bedeutung)
          </h3>

          {/* أزرار التحكم بالنطق الجماعي */}
          <div style={{ display: 'flex', gap: '8px', width: '100%', marginBottom: '14px' }}>
            <button
              onClick={speakAllColors}
              style={{
                flex: 1,
                padding: '10px 12px',
                borderRadius: '30px 6px 30px 6px',
                border: 'none',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: "'Courgette', cursive, sans-serif"
              }}
            >
              🔊 نطق الألوان
            </button>
            <button
              onClick={speakAllColorsWithShades}
              style={{
                flex: 1,
                padding: '10px 12px',
                borderRadius: '30px 6px 30px 6px',
                border: 'none',
                backgroundColor: '#2ecc71',
                color: '#ffffff',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: "'Courgette', cursive, sans-serif"
              }}
            >
              🔊 الألوان ودرجاتها
            </button>
          </div>

          {/* مفرد لون (Die Farbe) */}
          <div
            onClick={() => speakText('Die Farbe')}
            style={{
              position: 'relative',
              width: '100%',
              backgroundColor: 'transparent',
              color: 'var(--text-color, #0f172a)',
              borderRadius: '30px 6px 30px 6px',
              padding: '12px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '10px',
              cursor: 'pointer',
              userSelect: 'none',
              border: '1px solid rgba(148, 163, 184, 0.3)'
            }}
          >
            <span style={{ position: 'absolute', right: '18px', fontSize: '1.2rem', color: '#94a3b8' }}>🔊</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>لون</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Courgette', cursive, sans-serif" }}>Die Farbe</span>
          </div>

          {/* جمع الألوان (die Farben) */}
          <div
            onClick={() => speakText('die Farben')}
            style={{
              position: 'relative',
              width: '100%',
              backgroundColor: 'transparent',
              color: 'var(--text-color, #0f172a)',
              borderRadius: '30px 6px 30px 6px',
              padding: '12px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '12px',
              cursor: 'pointer',
              userSelect: 'none',
              border: '1px solid rgba(148, 163, 184, 0.3)'
            }}
          >
            <span style={{ position: 'absolute', right: '18px', fontSize: '1.2rem', color: '#94a3b8' }}>🔊</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>ألوان (الجمع)</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Courgette', cursive, sans-serif" }}>die Farben</span>
          </div>

          {/* التوضيح العلوي */}
          <div style={{
            display: 'flex',
            gap: '8px',
            width: '100%',
            marginBottom: '20px'
          }}>
            <div
              onClick={() => speakText('hell')}
              style={{
                flex: 1,
                backgroundColor: '#bae6fd',
                color: '#0369a1',
                borderRadius: '30px 6px 30px 6px',
                padding: '10px 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                userSelect: 'none',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)'
              }}
            >
              <span style={{ fontSize: '1rem', fontWeight: 600 }}>فاتح</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Courgette', cursive, sans-serif" }}>hell</span>
            </div>

            <div
              onClick={() => speakText('dunkel')}
              style={{
                flex: 1,
                backgroundColor: '#1e293b',
                color: '#ffffff',
                borderRadius: '30px 6px 30px 6px',
                padding: '10px 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                userSelect: 'none',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <span style={{ fontSize: '1rem', fontWeight: 600 }}>غامق</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Courgette', cursive, sans-serif" }}>dunkel</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            {colorsData.map((item, index) => {
              const isExpanded = expandedColors[index];

              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                  {/* كارت اللون الأساسي */}
                  <div
                    className={`color-card ${item.className}`}
                    onClick={() => {
                      if ('speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        const utteranceSingular = new SpeechSynthesisUtterance(item.de);
                        utteranceSingular.lang = 'de-DE';
                        utteranceSingular.rate = 0.85;
                        window.speechSynthesis.speak(utteranceSingular);
                      }
                      if (item.light) openColor(index);
                    }}
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
                    <span style={{
                      position: 'absolute',
                      right: '18px',
                      fontSize: '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94a3b8',
                      pointerEvents: 'none'
                    }}>
                      🔊
                    </span>

                    <span style={{ fontSize: '1.2rem', fontWeight: 600, opacity: 0.95 }}>
                      {item.ar}
                    </span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Courgette', cursive, sans-serif" }}>
                      {item.de}
                    </span>
                  </div>

                  {/* الدرجات الفاتح والغامق */}
                  {item.light && isExpanded && (
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      width: '100%',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      {/* الفاتح (يمين) */}
                      <div
                        onClick={() => speakText(item.lightDe)}
                        style={{
                          flex: 1,
                          backgroundColor: item.light,
                          color: item.lightText,
                          borderRadius: '30px 6px 30px 6px',
                          padding: '10px 15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          userSelect: 'none',
                          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {item.lightAr && <span style={{ fontSize: '1rem', fontWeight: 600 }}>{item.lightAr}</span>}
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Courgette', cursive, sans-serif" }}>{item.lightDe}</span>
                      </div>

                      {/* الغامق (شمال) */}
                      <div
                        onClick={() => speakText(item.darkDe)}
                        style={{
                          flex: 1,
                          backgroundColor: item.dark,
                          color: item.darkText,
                          borderRadius: '30px 6px 30px 6px',
                          padding: '10px 15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          userSelect: 'none',
                          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {item.darkAr && <span style={{ fontSize: '1rem', fontWeight: 600 }}>{item.darkAr}</span>}
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', direction: 'ltr', fontFamily: "'Courgette', cursive, sans-serif" }}>{item.darkDe}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* محتوى قسم الأسئلة */}
      {activeTab === 'quiz' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1 style={{
            textAlign: 'center',
            color: 'var(--text-color, #0f172a)',
            fontSize: '2.2rem',
            fontWeight: 'bold',
            marginBottom: '4px',
            userSelect: 'none'
          }}>
            اختبر نفسك: الألوان
          </h1>

          <h3
            style={{
              textAlign: 'center',
              color: '#64748b',
              fontSize: '1.05rem',
              fontWeight: 'normal',
              marginBottom: '20px',
              userSelect: 'none'
            }}
          >
            لون ومعناه بالألمانية (Farbe und ihre Bedeutung)
          </h3>

          <button onClick={checkAnswers} style={{
            marginBottom: '20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            padding: '10px 35px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)',
            fontFamily: "'Courgette', cursive, sans-serif"
          }}>
            تحقق من الإجابات
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            {colorsData.map((item, index) => {
              const isChecked = results[index] !== undefined;
              const isCorrect = results[index];

              const isCheckedLight = results[`${index}_light`] !== undefined;
              const isCorrectLight = results[`${index}_light`];

              const isCheckedDark = results[`${index}_dark`] !== undefined;
              const isCorrectDark = results[`${index}_dark`];

              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
                  {/* كارت اللون الأساسي */}
                  <div
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
                            fontSize: '1.1rem',
                            padding: '4px',
                            border: 'none',
                            width: '100%',
                            textAlign: 'center',
                            direction: 'ltr',
                            outline: 'none',
                            backgroundColor: 'transparent',
                            color: item.className === 'card-yellow' || item.className === 'card-white' ? '#0f172a' : '#ffffff',
                            fontWeight: 'bold',
                            fontFamily: "'Courgette', cursive, sans-serif"
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* كارت كامل مستمر للون الفاتح */}
                  {item.light && (
                    <div
                      style={{
                        position: 'relative',
                        backgroundColor: item.light,
                        color: item.lightText,
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
                        {item.lightAr || ''}
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
                          opacity: isCheckedLight ? 1 : 0,
                          transform: isCheckedLight ? 'scale(1)' : 'scale(0.5)',
                          transition: 'all 0.3s ease',
                          flexShrink: 0,
                          backgroundColor: isCorrectLight ? '#22c55e' : '#ef4444',
                          color: '#ffffff'
                        }}>
                          {isCheckedLight ? (isCorrectLight ? '✓' : '✕') : ''}
                        </div>

                        <div className={`input-container ${isCheckedLight ? (isCorrectLight ? 'correct' : 'incorrect') : ''}`} style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.35)',
                          border: `2px solid ${
                            isCheckedLight
                              ? (isCorrectLight ? '#22c55e' : '#ef4444')
                              : 'rgba(0, 0, 0, 0.15)'
                          }`,
                          borderRadius: '20px',
                          padding: '4px 10px',
                          transition: 'all 0.3s ease'
                        }}>
                          <input
                            type="text"
                            value={answers[`${index}_light`] || ''}
                            onChange={(e) => handleInputChange(`${index}_light`, e.target.value)}
                            placeholder="hell..."
                            style={{
                              fontSize: '1.1rem',
                              padding: '4px',
                              border: 'none',
                              width: '100%',
                              textAlign: 'center',
                              direction: 'ltr',
                              outline: 'none',
                              backgroundColor: 'transparent',
                              color: item.lightText,
                              fontWeight: 'bold',
                              fontFamily: "'Courgette', cursive, sans-serif"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* كارت كامل مستمر للون الغامق */}
                  {item.dark && (
                    <div
                      style={{
                        position: 'relative',
                        backgroundColor: item.dark,
                        color: item.darkText,
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
                        {item.darkAr || ''}
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
                          opacity: isCheckedDark ? 1 : 0,
                          transform: isCheckedDark ? 'scale(1)' : 'scale(0.5)',
                          transition: 'all 0.3s ease',
                          flexShrink: 0,
                          backgroundColor: isCorrectDark ? '#22c55e' : '#ef4444',
                          color: '#ffffff'
                        }}>
                          {isCheckedDark ? (isCorrectDark ? '✓' : '✕') : ''}
                        </div>

                        <div className={`input-container ${isCheckedDark ? (isCorrectDark ? 'correct' : 'incorrect') : ''}`} style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                          backgroundColor: 'rgba(0, 0, 0, 0.2)',
                          border: `2px solid ${
                            isCheckedDark
                              ? (isCorrectDark ? '#22c55e' : '#ef4444')
                              : 'rgba(255, 255, 255, 0.3)'
                          }`,
                          borderRadius: '20px',
                          padding: '4px 10px',
                          transition: 'all 0.3s ease'
                        }}>
                          <input
                            type="text"
                            value={answers[`${index}_dark`] || ''}
                            onChange={(e) => handleInputChange(`${index}_dark`, e.target.value)}
                            placeholder="dunkel..."
                            style={{
                              fontSize: '1.1rem',
                              padding: '4px',
                              border: 'none',
                              width: '100%',
                              textAlign: 'center',
                              direction: 'ltr',
                              outline: 'none',
                              backgroundColor: 'transparent',
                              color: item.darkText,
                              fontWeight: 'bold',
                              fontFamily: "'Courgette', cursive, sans-serif"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        /* استيراد خط Courgette من Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');

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
        .card-turquoise { background-color: #14b8a6; color: #ffffff; }
        .card-gold { background-color: #ca8a04; color: #ffffff; }
        .card-silver { background-color: #94a3b8; color: #ffffff; }
        .card-copper { background-color: #c2410c; color: #ffffff; }
        .card-pink-hot { background-color: #ec4899; color: #ffffff; }
        .card-flieder { background-color: #c084fc; color: #ffffff; }

        /* إطار أبيض للون الأسود في الوضع المظلم */
        @media (prefers-color-scheme: dark) {
          .card-black {
            border: 2px solid rgba(255, 255, 255, 0.7) !important;
          }
        }

        .input-container.correct {
          border-color: #22c55e !important;
          background-color: rgba(34, 197, 94, 0.3) !important;
        }
        .input-container.incorrect {
          border-color: #ef4444 !important;
          background-color: rgba(239, 68, 68, 0.3) !important;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          h1 { font-size: 1.8rem !important; }
          .color-card { padding: 10px 14px !important; min-height: 52px !important; }
        }
      `}</style>
    </div>
  );
}