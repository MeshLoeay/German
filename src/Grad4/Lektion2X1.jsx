import React from 'react';
import '../style.css';

export default function Lektion2X1() {
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
    <div className="page-container" dir="rtl">
      <h1 className="page-title">
        التحيات والوداع باللغة الألمانية - Lektion 2 (X1)
      </h1>

      {/* Begrüßung */}
      <div className="section-title" onClick={() => speakText('Begrüßung')}>
        Begrüßung (التحيات)
      </div>

      <div className="list-container">
        {[
          { ar: 'أهلا', de: 'Hallo!', audio: 'Hallo' },
          { ar: 'صباح الخير', de: 'Guten Morgen!', audio: 'Guten Morgen', note: 'المعاد من 6 صباحاً حتي 12 ظهراً' },
          { ar: 'يوم سعيد', de: 'Guten Tag!', audio: 'Guten Tag', note: 'المعاد من 12 ظهراً حتي 6 مساءً' },
          { ar: 'مساء الخير', de: 'Guten Abend!', audio: 'Guten Abend', note: 'المعاد من 6 مساءً حتي النوم' }
        ].map((item, index) => (
          <div className="card" key={index}>
            <div className="row-content" onClick={() => speakText(item.audio)}>
              <div className="arabic">{item.ar}</div>
              <div className="german">{item.de}</div>
            </div>
            {item.note && (
              <div className="note" onClick={() => speakText(item.audio)}>
                <div style={{ textAlign: 'right', width: '100%' }}>{item.note}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Abschied */}
      <div className="section-title" onClick={() => speakText('Abschied')}>
        Abschied (الوداع)
      </div>

      <div className="list-container">
        {[
          { ar: 'سلام', de: 'Tschüss', audio: 'Tschüss' },
          { ar: 'إلى اللقاء', de: 'Auf Wiedersehen', audio: 'Auf Wiedersehen' },
          { ar: 'باي', de: 'Bye', audio: 'Bye' },
          { ar: 'تصبح على خير', de: 'Gute Nacht!', audio: 'Gute Nacht' }
        ].map((item, index) => (
          <div className="card" key={index}>
            <div className="row-content" onClick={() => speakText(item.audio)}>
              <div className="arabic">{item.ar}</div>
              <div className="german">{item.de}</div>
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
          { ar: 'جيد - خير', de: 'Gut' },
          { ar: 'صبح', de: 'Morgen' },
          { ar: 'ظهيرة أو يوم', de: 'Tag' },
          { ar: 'مساء', de: 'Abend' },
          { ar: 'ليله', de: 'Nacht' },
          { ar: 'ما - كيف', de: 'Wie' },
          { ar: 'يسمي', de: 'heißen' },
          { ar: 'انت', de: 'Du' },
          { ar: 'انا', de: 'Ich' }
        ].map((item, index) => (
          <div className="card" key={index}>
            <div className="row-content" onClick={() => speakText(item.de)}>
              <div className="arabic">{item.ar}</div>
              <div className="german">{item.de}</div>
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
            <div className="german">Wie heißt du?</div>
          </div>
          <div className="note" onClick={() => speakText('Ich heiße Loeay')}>
            <div className="answer-arabic">اسمى لؤى</div>
            <div className="answer-german">Ich heiße Loeay</div>
          </div>
        </div>

        <div className="card">
          <div className="row-content" onClick={() => speakText('Wie alt bist du?')}>
            <div className="arabic">كم عمرك؟</div>
            <div className="german">Wie alt bist du?</div>
          </div>
          <div className="note" onClick={() => speakText('Ich bin 10 Jahre alt')}>
            <div className="answer-arabic">عندى 10 سنوات</div>
            <div className="answer-german">Ich bin 10 Jahre alt</div>
          </div>
        </div>
      </div>
    </div>
  );
}