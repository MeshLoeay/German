import React, { useState } from 'react';

export default function Lektion2Exercises() {
  // دالة نطق الصوت
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('متصفحك لا يدعم خاصية نطق الصوت.');
    }
  };

  // حالة لتخزين حالات الحقول (ألوان الحدود والخلفيات عند التحقق)
  const [inputStyles, setInputStyles] = useState({});

  const updateInputStyle = (id, isValid) => {
    setInputStyles(prev => ({
      ...prev,
      [id]: isValid
        ? { borderColor: '#16a34a', backgroundColor: 'rgba(22, 163, 74, 0.2)' }
        : { borderColor: '#dc2626', backgroundColor: 'rgba(220, 38, 38, 0.2)' }
    }));
  };

  const cleanText = (text) => {
    return (text || '').trim().toLowerCase().replace(/[؟\?]/g, '').trim();
  };

  const checkExactAnswer = (inputId, correctAnswer) => {
    const inputField = document.getElementById(inputId);
    if (!inputField) return;
    const userValue = cleanText(inputField.value);
    const correctValue = cleanText(correctAnswer);

    // السماح لكلمة Tschüss أو Tschüs بالقبول في الحالتين
    const isTschuessVariant =
      (userValue === 'tschüs' || userValue === 'tschüss') &&
      (correctValue === 'tschüs' || correctValue === 'tschüss');

    if (userValue === correctValue || isTschuessVariant) {
      updateInputStyle(inputId, true);
      speakText(correctAnswer);
    } else {
      updateInputStyle(inputId, false);
    }
  };

  const checkNameAnswer = (inputId) => {
    const inputField = document.getElementById(inputId);
    if (!inputField) return;
    const userValue = cleanText(inputField.value);

    if (userValue.startsWith("ich heiße") || userValue.startsWith("ich bin") || userValue.startsWith("mein name ist")) {
      updateInputStyle(inputId, true);
      speakText(inputField.value);
    } else {
      updateInputStyle(inputId, false);
    }
  };

  const checkAgeAnswer = (inputId) => {
    const inputField = document.getElementById(inputId);
    if (!inputField) return;
    const userValue = cleanText(inputField.value);

    if (userValue.startsWith("ich bin") && (userValue.includes("jahr") || userValue.includes("jahre") || /\d+/.test(userValue))) {
      updateInputStyle(inputId, true);
      speakText(inputField.value);
    } else {
      updateInputStyle(inputId, false);
    }
  };

  return (
    <div className="page-container" dir="rtl">
      <h1 className="page-title">
        تطبيق تدريب الألمانية - Loeay
      </h1>

      {/* Begrüßung */}
      <div className="section-title" onClick={() => speakText('Begrüßung')}>
        Begrüßung (التحيات)
      </div>

      <div className="list-container">
        <div className="card">
          <div className="row-content" onClick={() => speakText('Hallo')}>
            <div className="arabic">أهلا</div>
          </div>
          <div className="note">
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
              <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  id="input-hallo"
                  placeholder="اكتب بالألمانية هنا..."
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                    border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                    outline: 'none', direction: 'ltr', ...(inputStyles['input-hallo'] || {})
                  }}
                />
                <button
                  onClick={() => checkExactAnswer('input-hallo', 'Hallo')}
                  className="option-btn"
                  style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  تحقق
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row-content" onClick={() => speakText('Guten Morgen')}>
            <div className="arabic">صباح الخير</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ color: 'var(--title-color)', fontSize: '0.9rem' }}>المعاد من 6 صباحاً حتي 12 ظهراً</span>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
              <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  id="input-morgen"
                  placeholder="اكتب بالألمانية هنا..."
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                    border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                    outline: 'none', direction: 'ltr', ...(inputStyles['input-morgen'] || {})
                  }}
                />
                <button
                  onClick={() => checkExactAnswer('input-morgen', 'Guten Morgen')}
                  className="option-btn"
                  style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  تحقق
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row-content" onClick={() => speakText('Guten Tag')}>
            <div className="arabic">يوم سعيد</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ color: 'var(--title-color)', fontSize: '0.9rem' }}>المعاد من 12 ظهراً حتي 6 مساءً</span>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
              <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  id="input-tag"
                  placeholder="اكتب بالألمانية هنا..."
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                    border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                    outline: 'none', direction: 'ltr', ...(inputStyles['input-tag'] || {})
                  }}
                />
                <button
                  onClick={() => checkExactAnswer('input-tag', 'Guten Tag')}
                  className="option-btn"
                  style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  تحقق
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row-content" onClick={() => speakText('Guten Abend')}>
            <div className="arabic">مساء الخير</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ color: 'var(--title-color)', fontSize: '0.9rem' }}>المعاد من 6 مساءً حتي النوم</span>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
              <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  id="input-abend"
                  placeholder="اكتب بالألمانية هنا..."
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                    border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                    outline: 'none', direction: 'ltr', ...(inputStyles['input-abend'] || {})
                  }}
                />
                <button
                  onClick={() => checkExactAnswer('input-abend', 'Guten Abend')}
                  className="option-btn"
                  style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  تحقق
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abschied */}
      <div className="section-title" onClick={() => speakText('Abschied')}>
        Abschied (الوداع)
      </div>

      <div className="list-container">
        {[
          { ar: 'سلام', de: 'Tschüss', id: 'input-tschuess' },
          { ar: 'إلى اللقاء', de: 'Auf Wiedersehen', id: 'input-wiedersehen' },
          { ar: 'باي', de: 'Bye', id: 'input-bye' },
          { ar: 'تصبح على خير', de: 'Gute Nacht', id: 'input-nacht' }
        ].map((item, idx) => (
          <div className="card" key={idx}>
            <div className="row-content" onClick={() => speakText(item.de)}>
              <div className="arabic">{item.ar}</div>
            </div>
            <div className="note">
              <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
                <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    type="text"
                    id={item.id}
                    placeholder="اكتب بالألمانية هنا..."
                    style={{
                      flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                      border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                      outline: 'none', direction: 'ltr', ...(inputStyles[item.id] || {})
                    }}
                  />
                  <button
                    onClick={() => checkExactAnswer(item.id, item.de)}
                    className="option-btn"
                    style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    تحقق
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wichtige Wörter */}
      <div className="section-title" onClick={() => speakText('Wichtige Wörter')}>
        Wichtige Wörter (كلمات إضافية)
      </div>

      <div className="list-container">
        {[
          { ar: 'جيد - خير', de: 'Gut', id: 'input-gut' },
          { ar: 'صبح', de: 'Morgen', id: 'input-morgenword' },
          { ar: 'ظهيرة أو يوم', de: 'Tag', id: 'input-tagword' },
          { ar: 'مساء', de: 'Abend', id: 'input-abendword' },
          { ar: 'ليله', de: 'Nacht', id: 'input-nachtword' },
          { ar: 'ما - كيف', de: 'Wie', id: 'input-wie' },
          { ar: 'يسمي', de: 'heißen', id: 'input-heissen' },
          { ar: 'انت', de: 'Du', id: 'input-du' },
          { ar: 'انا', de: 'Ich', id: 'input-ich' }
        ].map((item, idx) => (
          <div className="card" key={idx}>
            <div className="row-content" onClick={() => speakText(item.de)}>
              <div className="arabic">{item.ar}</div>
            </div>
            <div className="note">
              <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
                <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    type="text"
                    id={item.id}
                    placeholder="اكتب بالألمانية هنا..."
                    style={{
                      flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                      border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                      outline: 'none', direction: 'ltr', ...(inputStyles[item.id] || {})
                    }}
                  />
                  <button
                    onClick={() => checkExactAnswer(item.id, item.de)}
                    className="option-btn"
                    style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    تحقق
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vorstellung */}
      <div className="section-title" onClick={() => speakText('Vorstellung')}>
        Vorstellung (التعريف بالنفس)
      </div>

      <div className="list-container">
        <div className="card">
          <div className="row-content" onClick={() => speakText('Wie heißt du?')}>
            <div className="arabic">ما اسمك؟</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--sub-text)' }}>اكتب السؤال بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  id="q-name"
                  placeholder="اكتب السؤال (Wie heißt du)..."
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                    border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                    outline: 'none', direction: 'ltr', ...(inputStyles['q-name'] || {})
                  }}
                />
                <button
                  onClick={() => checkExactAnswer('q-name', 'Wie heißt du')}
                  className="option-btn"
                  style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  تحقق السؤال
                </button>
              </div>
            </div>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--sub-text)' }}>اكتب الإجابة بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  id="input-name"
                  placeholder="اكتب إجابة الاسم (مثال: Ich heiße Loeay)..."
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                    border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                    outline: 'none', direction: 'ltr', ...(inputStyles['input-name'] || {})
                  }}
                />
                <button
                  onClick={() => checkNameAnswer('input-name')}
                  className="option-btn"
                  style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  تحقق الإجابة
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row-content" onClick={() => speakText('Wie alt bist du?')}>
            <div className="arabic">كم عمرك؟</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--sub-text)' }}>اكتب السؤال بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  id="q-age"
                  placeholder="اكتب السؤال (Wie alt bist du)..."
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                    border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                    outline: 'none', direction: 'ltr', ...(inputStyles['q-age'] || {})
                  }}
                />
                <button
                  onClick={() => checkExactAnswer('q-age', 'Wie alt bist du')}
                  className="option-btn"
                  style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  تحقق السؤال
                </button>
              </div>
            </div>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--sub-text)' }}>اكتب الإجابة بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  id="input-age"
                  placeholder="اكتب إجابة العمر (مثال: Ich bin 10 Jahre alt)..."
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: '1rem', borderRadius: '8px',
                    border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-color)',
                    outline: 'none', direction: 'ltr', ...(inputStyles['input-age'] || {})
                  }}
                />
                <button
                  onClick={() => checkAgeAnswer('input-age')}
                  className="option-btn"
                  style={{ padding: '10px 18px', backgroundColor: 'var(--main-color-1)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  تحقق الإجابة
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}