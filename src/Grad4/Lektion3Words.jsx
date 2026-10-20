import React from 'react';

function Lektion3Words() {
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
      <h1 className="page-title">الأسئلة والكلمات الألمانية - loeay</h1>

      <div style={{ textAlign: 'center', color: 'var(--sub-text)', fontSize: '0.9rem', marginBottom: '15px' }}>
        اضغط على أي صف لسماع نطقه بالألمانية 🔊
      </div>

      {/* الأسئلة التعريفية */}
      <div className="section-title">Vorstellung (الأسئلة التعريفية)</div>

      <div className="list-container">

        {/* التحية */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Guten Morgen')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', cursor: 'pointer' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>صباح الخير</div>
            <div className="german" style={{ fontWeight: 'bold', direction: 'ltr' }}>Guten Morgen</div>
          </div>
        </div>

        {/* الاسم */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Wie heißt du?')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', borderBottom: '1px dashed var(--card-border)', paddingBottom: '8px', marginBottom: '4px', cursor: 'pointer' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>ما اسمك؟</div>
            <div className="german" style={{ color: 'var(--title-color)', fontWeight: 'bold', direction: 'ltr' }}>Wie heißt du?</div>
          </div>
          <div className="row-content" onClick={() => speakText('Ich heiße Loeay')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', cursor: 'pointer' }}>
            <div className="arabic">أنا أسمي لؤى</div>
            <div className="german" style={{ fontWeight: 'bold', direction: 'ltr' }}>Ich heiße Loeay</div>
          </div>
        </div>

        {/* مكان القدوم */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Woher kommst du?')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', borderBottom: '1px dashed var(--card-border)', paddingBottom: '8px', marginBottom: '4px', cursor: 'pointer' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>من أين أنت؟</div>
            <div className="german" style={{ color: 'var(--title-color)', fontWeight: 'bold', direction: 'ltr' }}>Woher kommst du?</div>
          </div>
          <div className="row-content" onClick={() => speakText('Ich komme aus Kairo')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', cursor: 'pointer' }}>
            <div className="arabic">أنا أتـي من القاهرة</div>
            <div className="german" style={{ fontWeight: 'bold', direction: 'ltr' }}>Ich komme aus Kairo</div>
          </div>
        </div>

        {/* العمر */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Wie alt bist du?')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', borderBottom: '1px dashed var(--card-border)', paddingBottom: '8px', marginBottom: '4px', cursor: 'pointer' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>كم عمرك؟</div>
            <div className="german" style={{ color: 'var(--title-color)', fontWeight: 'bold', direction: 'ltr' }}>Wie alt bist du?</div>
          </div>
          <div className="row-content" onClick={() => speakText('Ich bin 10 Jahre alt')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', cursor: 'pointer' }}>
            <div className="arabic">عُمري 10 سنوات</div>
            <div className="german" style={{ fontWeight: 'bold', direction: 'ltr' }}>Ich bin 10 Jahre alt</div>
          </div>
        </div>

        {/* مكان السكن */}
        <div className="card">
          <div className="row-content" onClick={() => speakText('Wo wohnst du?')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', borderBottom: '1px dashed var(--card-border)', paddingBottom: '8px', marginBottom: '4px', cursor: 'pointer' }}>
            <div className="arabic" style={{ color: 'var(--title-color)' }}>أين تسكن؟</div>
            <div className="german" style={{ color: 'var(--title-color)', fontWeight: 'bold', direction: 'ltr' }}>Wo wohnst du?</div>
          </div>
          <div className="row-content" onClick={() => speakText('Ich wohne in Oktober')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', cursor: 'pointer' }}>
            <div className="arabic">أنا أسكن في أكتوبر</div>
            <div className="german" style={{ fontWeight: 'bold', direction: 'ltr' }}>Ich wohne in Oktober</div>
          </div>
        </div>

      </div>

      {/* أهم الكلمات */}
      <div className="section-title">أهم الكلمات</div>

      <div className="list-container">
        {[
          { de: 'Wie', ar: 'ما - كيف' },
          { de: 'Du', ar: 'انت' },
          { de: 'Wo', ar: 'اين' },
          { de: 'Ich', ar: 'انا' },
          { de: 'Woher', ar: 'من أين' },
          { de: 'Und', ar: 'و' },
          { de: 'heißen', ar: 'يسمي' },
          { de: 'Auf Wiedersehen', ar: 'إلى اللقاء' },
          { de: 'Wohnen', ar: 'يسكن' },
          { de: 'in', ar: 'في' },
          { de: 'Kommen', ar: 'يأتي' },
          { de: 'aus', ar: 'من' },
          { de: 'Ägypten', ar: 'مصر' },
          { de: 'Deutschland', ar: 'ألمانيا' },
          { de: 'Kairo', ar: 'القاهرة' },
          { de: 'Berlin', ar: 'برلين' },
          { de: 'Gisa', ar: 'الجيزة' },
          { de: 'Ich Verb+e', ar: 'انا + الفعل + e' },
          { de: '6. Oktober Stadt', ar: 'مدينة اكتوبر' },
          { de: 'Ich komme', ar: 'انا آتي' },
          { de: 'Komme aus', ar: 'يأتي من' },
          { de: 'Verb+st du', ar: 'انت + الفعل + st' },
          { de: 'Wohne in', ar: 'يسكن في' },
          { de: 'Wohnst du', ar: 'هل تسكن انت' }
        ].map((item, index) => (
          <div key={index} className="card">
            <div className="row-content" onClick={() => speakText(item.de)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '5px', cursor: 'pointer' }}>
              <div className="arabic">{item.ar}</div>
              <div className="german" style={{ fontWeight: 'bold', direction: 'ltr' }}>{item.de}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lektion3Words;