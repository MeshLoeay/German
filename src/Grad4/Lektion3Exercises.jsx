import React from 'react';

function Lektion3Exercises() {
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

  const cleanText = (text) => {
    return text.trim().toLowerCase().replace(/[؟\?]/g, '').trim();
  };

  const checkExactAnswer = (inputId, correctAnswer) => {
    const inputField = document.getElementById(inputId);
    if (!inputField) return;
    const userValue = cleanText(inputField.value);
    const correctValue = cleanText(correctAnswer);

    if (userValue === correctValue) {
      inputField.style.borderColor = '#2ecc71';
      inputField.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
      speakText(correctAnswer);
    } else {
      inputField.style.borderColor = '#e74c3c';
      inputField.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
    }
  };

  const checkNameAnswer = (inputId) => {
    const inputField = document.getElementById(inputId);
    if (!inputField) return;
    const userValue = cleanText(inputField.value);

    if ((userValue.startsWith("ich heiße") || userValue.startsWith("mein name ist")) && userValue.includes("loeay") && !userValue.includes("jahr")) {
      inputField.style.borderColor = '#2ecc71';
      inputField.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
      speakText(inputField.value);
    } else {
      inputField.style.borderColor = '#e74c3c';
      inputField.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
    }
  };

  const checkFromAnswer = (inputId) => {
    const inputField = document.getElementById(inputId);
    if (!inputField) return;
    const userValue = cleanText(inputField.value);

    if (userValue.startsWith("ich komme aus")) {
      inputField.style.borderColor = '#2ecc71';
      inputField.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
      speakText(inputField.value);
    } else {
      inputField.style.borderColor = '#e74c3c';
      inputField.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
    }
  };

  const checkAgeAnswer = (inputId) => {
    const inputField = document.getElementById(inputId);
    if (!inputField) return;
    const userValue = cleanText(inputField.value);

    if (userValue.startsWith("ich bin") && (userValue.includes("10") || userValue.includes("zehn"))) {
      inputField.style.borderColor = '#2ecc71';
      inputField.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
      speakText(inputField.value);
    } else {
      inputField.style.borderColor = '#e74c3c';
      inputField.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
    }
  };

  const checkLiveAnswer = (inputId) => {
    const inputField = document.getElementById(inputId);
    if (!inputField) return;
    const userValue = cleanText(inputField.value);

    if (userValue.startsWith("ich wohne in")) {
      inputField.style.borderColor = '#2ecc71';
      inputField.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
      speakText(inputField.value);
    } else {
      inputField.style.borderColor = '#e74c3c';
      inputField.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">تدريب الأسئلة التعريفية - loeay</h1>

      <div style={{ textAlign: 'center', color: 'var(--sub-text)', fontSize: '0.9rem', marginBottom: '15px' }}>
        اكتب السؤال والإجابة بالألمانية وتحقق من صحتها 🔊
      </div>

      <div className="section-title">Vorstellung (التعريف بالنفس)</div>

      <div className="list-container">

        {/* 1. التحية */}
        <div className="card">
          <div className="row-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>صباح الخير</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px dashed var(--card-border)', paddingTop: '10px', marginTop: '5px' }}>
            <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input type="text" id="input-morgen" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
              <button onClick={() => checkExactAnswer('input-morgen', 'Guten Morgen')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق</button>
            </div>
          </div>
        </div>

        {/* 2. الاسم */}
        <div className="card">
          <div className="row-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>ما اسمك؟</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px dashed var(--card-border)', paddingTop: '10px', marginTop: '5px' }}>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--sub-text)' }}>اكتب السؤال بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input type="text" id="q-name" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
                <button onClick={() => checkExactAnswer('q-name', 'Wie heißt du')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق السؤال</button>
              </div>
            </div>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--sub-text)' }}>اكتب الإجابة بالألمانية (الاسم فقط):</label>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input type="text" id="input-name" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
                <button onClick={() => checkNameAnswer('input-name')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق الإجابة</button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. مكان القدوم */}
        <div className="card">
          <div className="row-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>من أين أنت؟</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px dashed var(--card-border)', paddingTop: '10px', marginTop: '5px' }}>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--sub-text)' }}>اكتب السؤال بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input type="text" id="q-from" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
                <button onClick={() => checkExactAnswer('q-from', 'Woher kommst du')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق السؤال</button>
              </div>
            </div>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--sub-text)' }}>اكتب الإجابة بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input type="text" id="input-from" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
                <button onClick={() => checkFromAnswer('input-from')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق الإجابة</button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. العمر */}
        <div className="card">
          <div className="row-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>كم عمرك؟</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px dashed var(--card-border)', paddingTop: '10px', marginTop: '5px' }}>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--sub-text)' }}>اكتب السؤال بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input type="text" id="q-age" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
                <button onClick={() => checkExactAnswer('q-age', 'Wie alt bist du')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق السؤال</button>
              </div>
            </div>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--sub-text)' }}>اكتب الإجابة بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input type="text" id="input-age" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
                <button onClick={() => checkAgeAnswer('input-age')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق الإجابة</button>
              </div>
            </div>
          </div>
        </div>

        {/* 5. مكان السكن */}
        <div className="card">
          <div className="row-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>أين تسكن؟</div>
          </div>
          <div className="note" style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px dashed var(--card-border)', paddingTop: '10px', marginTop: '5px' }}>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--sub-text)' }}>اكتب السؤال بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input type="text" id="q-live" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
                <button onClick={() => checkExactAnswer('q-live', 'Wo wohnst du')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق السؤال</button>
              </div>
            </div>
            <div className="input-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--sub-text)' }}>اكتب الإجابة بالألمانية:</label>
              <div className="input-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input type="text" id="input-live" style={{ flex: 1, padding: '8px 12px', fontSize: '0.95rem', borderRadius: '20px 6px 20px 6px', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', outline: 'none', direction: 'ltr' }} />
                <button onClick={() => checkLiveAnswer('input-live')} style={{ padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--card-border)', background: 'transparent', color: 'inherit', borderRadius: '20px 6px 20px 6px', fontWeight: 'bold' }}>تحقق الإجابة</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Lektion3Exercises;