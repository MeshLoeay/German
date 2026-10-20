import React, { useState } from 'react';

// قائمة الضمائر وأدوات الاستفهام الشاملة (50 كلمة)
const pronounsData = [
  { id: 1, german: 'ich', pronunciation: 'إش', arabic: 'أنا' },
  { id: 2, german: 'du', pronunciation: 'دو', arabic: 'أنت' },
  { id: 3, german: 'er', pronunciation: 'إر', arabic: 'هو' },
  { id: 4, german: 'sie', pronunciation: 'زي', arabic: 'هي / هم' },
  { id: 5, german: 'es', pronunciation: 'إس', arabic: 'هو/هي (للمحايد)' },
  { id: 6, german: 'wir', pronunciation: 'فير', arabic: 'نحن' },
  { id: 7, german: 'ihr', pronunciation: 'إير', arabic: 'أنتم' },
  { id: 8, german: 'Sie', pronunciation: 'زي', arabic: 'حضرتك/حضرتكم' },
  { id: 9, german: 'mich', pronunciation: 'ميش', arabic: 'إياي (مفعول به)' },
  { id: 10, german: 'dich', pronunciation: 'ديش', arabic: 'إياك (مفعول به)' },
  { id: 11, german: 'sich', pronunciation: 'زيش', arabic: 'نفسه / نفسها' },
  { id: 12, german: 'uns', pronunciation: 'أونس', arabic: 'إيانا' },
  { id: 13, german: 'euch', pronunciation: 'أويش', arabic: 'إياكم' },
  { id: 14, german: 'mein', pronunciation: 'ماين', arabic: 'ملكي' },
  { id: 15, german: 'dein', pronunciation: 'داين', arabic: 'ملكك' },
  { id: 16, german: 'sein', pronunciation: 'زاين', arabic: 'ملكه' },
  { id: 17, german: 'unser', pronunciation: 'أونزر', arabic: 'ملكنا' },
  { id: 18, german: 'euer', pronunciation: 'أوير', arabic: 'ملككم' },
  { id: 19, german: 'wer', pronunciation: 'فير', arabic: 'من' },
  { id: 20, german: 'was', pronunciation: 'فاس', arabic: 'ماذا' },
  { id: 21, german: 'wann', pronunciation: 'فان', arabic: 'متى' },
  { id: 22, german: 'wo', pronunciation: 'فو', arabic: 'أين' },
  { id: 23, german: 'wie', pronunciation: 'في', arabic: 'كيف' },
  { id: 24, german: 'warum', pronunciation: 'فاروم', arabic: 'لماذا' },
  { id: 25, german: 'wohin', pronunciation: 'فوهين', arabic: 'إلى أين' },
  { id: 26, german: 'woher', pronunciation: 'فوهير', arabic: 'من أين' },
  { id: 27, german: 'welcher', pronunciation: 'فيلشر', arabic: 'أي' },
  { id: 28, german: 'wie viel', pronunciation: 'في فيل', arabic: 'كم' },
  { id: 29, german: 'dieser', pronunciation: 'ديزر', arabic: 'هذا' },
  { id: 30, german: 'jener', pronunciation: 'ينر', arabic: 'ذاك' },
  { id: 31, german: 'jeder', pronunciation: 'يدر', arabic: 'كل' },
  { id: 32, german: 'etwas', pronunciation: 'إتفاس', arabic: 'شيء ما' },
  { id: 33, german: 'nichts', pronunciation: 'نيشتس', arabic: 'لا شيء' },
  { id: 34, german: 'jemand', pronunciation: 'يمانت', arabic: 'شخص ما' },
  { id: 35, german: 'niemand', pronunciation: 'نيمانت', arabic: 'لا أحد' },
  { id: 36, german: 'alle', pronunciation: 'أله', arabic: 'الكل' },
  { id: 37, german: 'man', pronunciation: 'مان', arabic: 'المرء' },
  { id: 38, german: 'selbst', pronunciation: 'زيلبست', arabic: 'بنفسه' },
  { id: 39, german: 'einander', pronunciation: 'أيناندر', arabic: 'بعضهم البعض' },
  { id: 40, german: 'beide', pronunciation: 'بايده', arabic: 'كلاهما' },
  { id: 41, german: 'ihr', pronunciation: 'إير', arabic: 'ملكها' },
  { id: 42, german: 'mir', pronunciation: 'مير', arabic: 'لي (مجرور)' },
  { id: 43, german: 'dir', pronunciation: 'دير', arabic: 'لك (مجرور)' },
  { id: 44, german: 'ihm', pronunciation: 'إيم', arabic: 'له (مجرور)' },
  { id: 45, german: 'ihnen', pronunciation: 'إينن', arabic: 'لهم (مجرور)' },
  { id: 46, german: 'wie viele', pronunciation: 'في فيله', arabic: 'كم عدد' },
  { id: 47, german: 'wie lange', pronunciation: 'في لانغه', arabic: 'كم المدة' },
  { id: 48, german: 'welche', pronunciation: 'فيلخه', arabic: 'أي (للمؤنث والجمع)' },
  { id: 49, german: 'welches', pronunciation: 'فيلخس', arabic: 'أي (للمحايد)' },
  { id: 50, german: 'manche', pronunciation: 'مانخه', arabic: 'بعض' }
];

export default function PronounsQuestionWordsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const speakGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const renderColoredGermanWord = (germanStr) => {
    const parts = germanStr.split(' ');
    if (parts.length > 0) {
      const firstWord = parts[0].toLowerCase();
      let wordColor = 'inherit';

      if (firstWord === 'der') wordColor = '#00bfff';
      else if (firstWord === 'das') wordColor = '#22c55e';
      else if (firstWord === 'die') wordColor = '#ec4899';

      if (wordColor !== 'inherit') {
        return (
          <span>
            <span style={{ color: wordColor, fontWeight: 'bold' }}>{parts[0]}</span> {parts.slice(1).join(' ')}
          </span>
        );
      }
    }
    return germanStr;
  };

  const filteredData = pronounsData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.pronunciation.includes(searchTerm)
  );

  return (
    <div style={{ padding: '15px 0 40px 0', width: '95%', margin: '0 auto', color: 'inherit', background: 'transparent', boxSizing: 'border-box' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: inherit;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
          padding: 0;
        }
        .search-input {
          width: 100%;
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
          width: 100%;
          padding: 0;
        }
        .vocab-card {
          position: relative;
          width: 100%;
          border: 2px solid currentColor;
          border-radius: 30px 6px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: inherit;
          background: transparent;
          box-sizing: border-box;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease;
          min-height: 55px;
        }
        .vocab-card:hover {
          border-color: #00bfff;
        }
        .vocab-main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .item-number {
          position: absolute;
          top: -10px;
          left: 20px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          font-weight: bold;
          z-index: 2;
        }
        .pronunciation-wrapper {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: #ff3333;
          border: 1px solid #ffffff;
          padding: 2px 14px;
          border-radius: 14px;
          font-size: 0.78rem;
          font-weight: 900;
          z-index: 2;
          white-space: nowrap;
          pointer-events: none;
        }
        .speaker-left {
          position: absolute;
          left: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-130deg);
          font-size: 0.78rem;
          display: inline-block;
        }
        .speaker-right {
          position: absolute;
          right: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-50deg);
          font-size: 0.78rem;
          display: inline-block;
        }
        .arabic-word {
          font-size: 1.1rem;
          font-weight: 900;
          text-align: right;
          display: flex;
          align-items: center;
        }
        .german-word {
          font-size: 1.0rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
          display: flex;
          align-items: center;
        }
      `}</style>

      <h1 className="page-title">الضمائر وأدوات الاستفهام ❓👥</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة ألمانية أو عربية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item, index) => (
          <div
            key={item.id}
            className="vocab-card"
            onClick={() => speakGerman(item.german)}
          >
            {/* رقم الكارت */}
            <div className="item-number">{index + 1}</div>

            {/* شريط النطق */}
            <div className="pronunciation-wrapper">
              <span className="speaker-left">🔊</span>
              <span>{item.pronunciation}</span>
              <span className="speaker-right">🔊</span>
            </div>

            {/* الكلمات */}
            <div className="vocab-main-row">
              <div className="arabic-word">{item.arabic}</div>
              <div className="german-word">{renderColoredGermanWord(item.german)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}