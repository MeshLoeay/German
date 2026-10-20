import React from 'react';

function Lektion3X1() {
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

  return (
    <div className="page-container">
      <h1 className="page-title">الأسئلة التعريفية - loeay</h1>

      <div style={{ textAlign: 'center', color: 'var(--sub-text)', fontSize: '0.9rem', marginBottom: '15px' }}>
        اضغط على أي سؤال أو إجابة لسماع نطقها بالألمانية 🔊
      </div>

      <div className="section-title">Vorstellung (التعريف بالنفس)</div>

      <div className="list-container">
        {/* التحية */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Guten Morgen')}>
            <div className="arabic">صباح الخير</div>
            <div className="german">Guten Morgen</div>
          </div>
        </div>

        {/* الاسم */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Wie heißt du?')} style={{ borderBottom: '1px dashed var(--card-border)', paddingBottom: '8px', marginBottom: '4px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>ما اسمك؟</div>
            <div className="german" style={{ color: 'var(--title-color)' }}>Wie heißt du?</div>
          </div>
          <div className="row-content" onClick={() => speakText('Ich heiße Loeay')}>
            <div className="arabic">أنا أسمي لؤى</div>
            <div className="german">Ich heiße Loeay</div>
          </div>
        </div>

        {/* مكان القدوم */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Woher kommst du?')} style={{ borderBottom: '1px dashed var(--card-border)', paddingBottom: '8px', marginBottom: '4px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>من أين أنت؟</div>
            <div className="german" style={{ color: 'var(--title-color)' }}>Woher kommst du?</div>
          </div>
          <div className="row-content" onClick={() => speakText('Ich komme aus Kairo')}>
            <div className="arabic">أنا أتـي من القاهرة</div>
            <div className="german">Ich komme aus Kairo</div>
          </div>
        </div>

        {/* العمر */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Wie alt bist du?')} style={{ borderBottom: '1px dashed var(--card-border)', paddingBottom: '8px', marginBottom: '4px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>كم عمرك؟</div>
            <div className="german" style={{ color: 'var(--title-color)' }}>Wie alt bist du?</div>
          </div>
          <div className="row-content" onClick={() => speakText('Ich bin 10 Jahre alt')}>
            <div className="arabic">عُمري 10 سنوات</div>
            <div className="german">Ich bin 10 Jahre alt</div>
          </div>
        </div>

        {/* مكان السكن */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Wo wohnst du?')} style={{ borderBottom: '1px dashed var(--card-border)', paddingBottom: '8px', marginBottom: '4px' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>أين تسكن؟</div>
            <div className="german" style={{ color: 'var(--title-color)' }}>Wo wohnst du?</div>
          </div>
          <div className="row-content" onClick={() => speakText('Ich wohne in Oktober')}>
            <div className="arabic">أنا أسكن في أكتوبر</div>
            <div className="german">Ich wohne in Oktober</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lektion3X1;