import React from 'react';

function GermanPractice() {
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const verifyInput = (inputElement) => {
    const userVal = inputElement.value.trim();
    const correctVal = inputElement.getAttribute('data-answer');

    if (userVal.toLowerCase() === correctVal.toLowerCase()) {
      inputElement.style.borderColor = '#2ecc71';
      inputElement.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
      speakText(correctVal);
    } else {
      inputElement.style.borderColor = '#e74c3c';
      inputElement.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
    }
  };

  const checkAnswer = (e) => {
    const button = e.currentTarget;
    const inputElement = button.previousElementSibling;
    verifyInput(inputElement);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      verifyInput(e.currentTarget);
    }
  };

  const checkMcq = (e) => {
    const button = e.currentTarget;
    const parentGrid = button.parentElement;
    const buttons = parentGrid.querySelectorAll('.option-btn');

    buttons.forEach((btn) => {
      btn.style.borderColor = 'var(--card-border)';
      btn.style.backgroundColor = 'transparent';
    });

    const isCorrect = button.getAttribute('data-correct') === 'true';
    if (isCorrect) {
      button.style.borderColor = '#2ecc71';
      button.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
      speakText(button.textContent);
    } else {
      button.style.borderColor = '#e74c3c';
      button.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">تدريب اللغة الألمانية - loeay</h1>

      <div style={{ textAlign: 'center', color: 'var(--sub-text)', fontSize: '0.9rem', marginBottom: '15px' }}>
        تدرب على كتابة الكلمات وتكوين الجمل الصحيحة 🔊
      </div>

      {/* الأسئلة التعريفية */}
      <div className="section-title">Vorstellung (الأسئلة التعريفية)</div>

      <div className="list-container">
        {[
          { ar: 'صباح الخير', de: 'Guten Morgen' },
          { ar: 'ما اسمك؟', de: 'Wie heißt du' },
          { ar: 'أنا أسمي لؤى', de: 'Ich heiße Loeay' },
          { ar: 'من أين أنت؟', de: 'Woher kommst du' },
          { ar: 'أنا أتـي من القاهرة', de: 'Ich komme aus Kairo' },
          { ar: 'كم عمرك؟', de: 'Wie alt bist du' },
          { ar: 'عُمري 10 سنوات', de: 'Ich bin 10 Jahre alt' },
          { ar: 'أين تسكن؟', de: 'Wo wohnst du' },
          { ar: 'أنا أسكن في أكتوبر', de: 'Ich wohne in Oktober' }
        ].map((item, index) => (
          <div key={index} className="card">
            <div className="row-content" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', padding: '5px' }}>
              <div className="arabic" style={{ color: 'var(--title-color)', textAlign: 'right', width: '100%' }}>{item.ar}</div>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center', direction: 'ltr' }}>
                <button
                  className="check-btn"
                  onClick={checkAnswer}
                  style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '6px 20px 6px 20px', fontWeight: 'bold' }}
                >
                  تحقق
                </button>
                <input
                  type="text"
                  className="practice-input"
                  data-answer={item.de}
                  placeholder="اكتب بالألمانية..."
                  onKeyPress={handleKeyPress}
                  style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '6px 20px 6px 20px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr', textAlign: 'left' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* أهم الكلمات */}
      <div className="section-title">Wichtige Wörter (أهم الكلمات)</div>

      <div className="list-container">
        {[
          { ar: 'ما - كيف', de: 'Wie' },
          { ar: 'انت', de: 'Du' },
          { ar: 'اين', de: 'Wo' },
          { ar: 'انا', de: 'Ich' },
          { ar: 'من أين', de: 'Woher' },
          { ar: 'و', de: 'Und' },
          { ar: 'يسمي', de: 'heißen' },
          { ar: 'إلى اللقاء', de: 'Auf Wiedersehen' },
          { ar: 'يسكن', de: 'Wohnen' },
          { ar: 'في', de: 'in' },
          { ar: 'يأتي', de: 'Kommen' },
          { ar: 'من', de: 'aus' },
          { ar: 'مصر', de: 'Ägypten' },
          { ar: 'ألمانيا', de: 'Deutschland' },
          { ar: 'القاهرة', de: 'Kairo' },
          { ar: 'برلين', de: 'Berlin' },
          { ar: 'الجيزة', de: 'Gisa' },
          { ar: 'انا + الفعل + e', de: 'Ich Verb+e' },
          { ar: 'مدينة اكتوبر', de: '6. Oktober Stadt' },
          { ar: 'انا آتي', de: 'Ich komme' },
          { ar: 'يأتي من', de: 'Komme aus' },
          { ar: 'انت + الفعل + st', de: 'Verb+st du' },
          { ar: 'يسكن في', de: 'Wohne in' },
          { ar: 'هل تسكن انت', de: 'Wohnst du' }
        ].map((item, index) => (
          <div key={index} className="card">
            <div className="row-content" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', padding: '5px' }}>
              <div className="arabic" style={{ color: 'var(--title-color)', textAlign: 'right', width: '100%' }}>{item.ar}</div>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center', direction: 'ltr' }}>
                <button
                  className="check-btn"
                  onClick={checkAnswer}
                  style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '6px 20px 6px 20px', fontWeight: 'bold' }}
                >
                  تحقق
                </button>
                <input
                  type="text"
                  className="practice-input"
                  data-answer={item.de}
                  placeholder="اكتب بالألمانية..."
                  onKeyPress={handleKeyPress}
                  style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '6px 20px 6px 20px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr', textAlign: 'left' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* تدريبات: ما الذي لا يناسب؟ */}
      <div className="section-title">Was passt nicht? (ما الذي لا يناسب؟)</div>

      <div className="list-container">
        {[
          {
            q: '1. اختر الكلمة الدخيلة (التي لا تناسب التحيات):',
            opts: [
              { text: 'Guten Morgen', correct: false },
              { text: 'Guten Abend', correct: false },
              { text: 'Gute Nacht', correct: true },
              { text: 'Guten Tag', correct: false }
            ]
          },
          {
            q: '2. اختر الكلمة الدخيلة (التي لا تناسب التحيات):',
            opts: [
              { text: 'Hallo', correct: false },
              { text: 'Guten Morgen', correct: false },
              { text: 'Tschüs', correct: true },
              { text: 'Guten Abend', correct: false }
            ]
          },
          {
            q: '3. اختر الكلمة الدخيلة (التي لا تناسب الوداع):',
            opts: [
              { text: 'Tschüs', correct: false },
              { text: 'Gute Nacht', correct: false },
              { text: 'Auf Wiedersehen', correct: false },
              { text: 'Guten Tag', correct: true }
            ]
          },
          {
            q: '4. اختر الكلمة الدخيلة (التي لا تناسب الوداع):',
            opts: [
              { text: 'Tschüs', correct: false },
              { text: 'Gute Nacht', correct: false },
              { text: 'Hallo', correct: true },
              { text: 'Auf Wiedersehen', correct: false }
            ]
          },
          {
            q: '5. اختر الكلمة الدخيلة (غير المناسبة للأرقام):',
            opts: [
              { text: 'zwei', correct: false },
              { text: 'vier', correct: false },
              { text: 'Apfel', correct: true },
              { text: 'eins', correct: false }
            ]
          },
          {
            q: '6. اختر الكلمة الدخيلة (غير المناسبة):',
            opts: [
              { text: 'drei', correct: false },
              { text: 'Kommen', correct: true },
              { text: 'sechs', correct: false },
              { text: 'acht', correct: false }
            ]
          },
          {
            q: '7. اختر الكلمة الدخيلة (أدوات الاستفهام W-Fragen):',
            opts: [
              { text: 'Wo', correct: false },
              { text: 'Woher', correct: false },
              { text: 'Wohnen', correct: true },
              { text: 'Wie', correct: false }
            ]
          },
          {
            q: '8. اختر الكلمة الدخيلة (الأفعال ضد الأرقام):',
            opts: [
              { text: 'Wohnen', correct: false },
              { text: 'Kommen', correct: false },
              { text: 'acht', correct: true },
              { text: 'heißen', correct: false }
            ]
          }
        ].map((item, index) => (
          <div key={index} className="card">
            <div className="row-content" style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', padding: '5px' }}>
              <div className="mcq-question" style={{ fontSize: '1rem', color: 'var(--title-color)', fontWeight: 'bold', textAlign: 'right', width: '100%' }}>{item.q}</div>
              <div className="options-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {item.opts.map((opt, optIndex) => (
                  <button
                    key={optIndex}
                    className="option-btn"
                    data-correct={opt.correct}
                    onClick={checkMcq}
                    style={{ padding: '8px 10px', fontSize: '0.9rem', fontWeight: 'bold', background: 'transparent', border: '1px solid var(--card-border)', color: 'inherit', borderRadius: '20px 6px 20px 6px', cursor: 'pointer', direction: 'ltr' }}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* تدريبات: تكوين الجمل */}
      <div className="section-title">Bilde richtige Sätze (كون جُملاً صحيحة)</div>

      <div className="list-container">
        {[
          { ar: 'رتب لتكون جملة: komme – aus – Ich – Alex', de: 'Ich komme aus Alex' },
          { ar: 'رتب لتكون سؤالاً: alt – du – Wie – bist – ?', de: 'Wie alt bist du' },
          { ar: 'رتب لتكون جملة: Ich – zehn – alt – bin – Jahre', de: 'Ich bin zehn Jahre alt' },
          { ar: 'رتب لتكون سؤالاً: wohnst – du – Wo – ?', de: 'Wo wohnst du' },
          { ar: 'رتب لتكون جملة: heiße – Adam – Ich', de: 'Ich heiße Adam' },
          { ar: 'رتب لتكون سؤالاً: du – Woher – kommst – ?', de: 'Woher kommst du' },
          { ar: 'رتب لتكون جملة: Ich – in – wohne – Ägypten', de: 'Ich wohne in Ägypten' },
          { ar: 'رتب لتكون سؤالاً: heißt – du – Wie – ?', de: 'Wie heißt du' }
        ].map((item, index) => (
          <div key={index} className="card">
            <div className="row-content" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', padding: '5px' }}>
              <div className="arabic" style={{ color: 'var(--title-color)', textAlign: 'right', width: '100%' }}>{item.ar}</div>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center', direction: 'ltr' }}>
                <button
                  className="check-btn"
                  onClick={checkAnswer}
                  style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '6px 20px 6px 20px', fontWeight: 'bold' }}
                >
                  تحقق
                </button>
                <input
                  type="text"
                  className="practice-input"
                  data-answer={item.de}
                  placeholder="اكتب الجملة مرتبة..."
                  onKeyPress={handleKeyPress}
                  style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '6px 20px 6px 20px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr', textAlign: 'left' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GermanPractice;