import React, { useState } from 'react';

export default function NumbersAndMath() {
  const [searchTerm, setSearchTerm] = useState('');

  // دالة نطق الكلمة الألمانية مع أداة التعريف إن وجِدت
  const speakWord = (item) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const textToSpeak = item.article ? `${item.article} ${item.word}` : item.word;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // قائمة الأرقام والعمليات الحسابية الشاملة (60 كلمة)
  const vocabList = [
    { id: 1, word: 'null', pronunciation: 'نول', arabic: 'صفر' },
    { id: 2, word: 'eins', pronunciation: 'آينس', arabic: 'واحد' },
    { id: 3, word: 'zwei', pronunciation: 'تسفاي', arabic: 'اثنان' },
    { id: 4, word: 'drei', pronunciation: 'دراي', arabic: 'ثلاثة' },
    { id: 5, word: 'vier', pronunciation: 'فير', arabic: 'أربعة' },
    { id: 6, word: 'fünf', pronunciation: 'فيونف', arabic: 'خمسة' },
    { id: 7, word: 'sechs', pronunciation: 'زكس', arabic: 'ستة' },
    { id: 8, word: 'sieben', pronunciation: 'زيبن', arabic: 'سبعة' },
    { id: 9, word: 'acht', pronunciation: 'أخت', arabic: 'ثمانية' },
    { id: 10, word: 'neun', pronunciation: 'نوين', arabic: 'تسعة' },
    { id: 11, word: 'zehn', pronunciation: 'تسين', arabic: 'عشرة' },
    { id: 12, word: 'elf', pronunciation: 'إلف', arabic: 'إحدى عشر' },
    { id: 13, word: 'zwölf', pronunciation: 'تسفولف', arabic: 'اثنا عشر' },
    { id: 14, word: 'dreizehn', pronunciation: 'درايتسين', arabic: 'ثلاثة عشر' },
    { id: 15, word: 'zwanzig', pronunciation: 'تسفانتسيش', arabic: 'عشرون' },
    { id: 16, word: 'dreißig', pronunciation: 'درايسيغ', arabic: 'ثلاثون' },
    { id: 17, word: 'vierzig', pronunciation: 'فيرتسيش', arabic: 'أربعون' },
    { id: 18, word: 'fünfzig', pronunciation: 'فيونفتسيش', arabic: 'خمسون' },
    { id: 19, word: 'sechzig', pronunciation: 'زخْتسيش', arabic: 'ستون' },
    { id: 20, word: 'siebzig', pronunciation: 'زيبتسيش', arabic: 'سبعون' },
    { id: 21, word: 'achtzig', pronunciation: 'أختسيش', arabic: 'ثمانون' },
    { id: 22, word: 'neunzig', pronunciation: 'نوينتسيش', arabic: 'تسعون' },
    { id: 23, word: 'hundert', pronunciation: 'هوندرت', arabic: 'مائة' },
    { id: 24, word: 'tausend', pronunciation: 'تاوزند', arabic: 'ألف' },
    { id: 25, article: 'die', word: 'Million', pronunciation: 'دي ميليون', arabic: 'مليون' },
    { id: 26, word: 'eins zu zwei', pronunciation: 'آينس تسو تسفاي', arabic: 'واحد إلى اثنين' },
    { id: 27, word: 'doppelt', pronunciation: 'دوبلت', arabic: 'مضاعف / مرتين' },
    { id: 28, word: 'dreifach', pronunciation: 'درايفاخ', arabic: 'ثلاثة أضعاف' },
    { id: 29, word: 'weniger', pronunciation: 'فينغر', arabic: 'أقل' },
    { id: 30, word: 'mehr', pronunciation: 'مير', arabic: 'أكثر' },
    { id: 31, word: 'ungefähr', pronunciation: 'أونغيرفير', arabic: 'تقريباً' },
    { id: 32, word: 'fast', pronunciation: 'فاست', arabic: 'على وشك / تقريباً' },
    { id: 33, word: 'schätzen', pronunciation: 'شيتسن', arabic: 'يقدر / يخمن' },
    { id: 34, word: 'erste', pronunciation: 'إيرسته', arabic: 'الأول' },
    { id: 35, word: 'zweite', pronunciation: 'تسفايلته', arabic: 'الثاني' },
    { id: 36, word: 'dritte', pronunciation: 'دريته', arabic: 'الثالث' },
    { id: 37, word: 'vierte', pronunciation: 'فيرته', arabic: 'الرابع' },
    { id: 38, word: 'fünfte', pronunciation: 'فيونفته', arabic: 'الخامس' },
    { id: 39, article: 'die', word: 'Hälfte', pronunciation: 'دي هيلفته', arabic: 'النصف' },
    { id: 40, word: 'ein Viertel', pronunciation: 'آين فيرتل', arabic: 'الربع' },
    { id: 41, article: 'das', word: 'Paar', pronunciation: 'داس بار', arabic: 'الزوجان' },
    { id: 42, word: 'ein Dutzend', pronunciation: 'آين دوتسنت', arabic: 'دستة' },
    { id: 43, article: 'die', word: 'Zahl', pronunciation: 'دي تسال', arabic: 'الرقم' },
    { id: 44, article: 'die', word: 'Nummer', pronunciation: 'دي نومر', arabic: 'النمرة' },
    { id: 45, word: 'plus', pronunciation: 'بلوس', arabic: 'زائد' },
    { id: 46, word: 'minus', pronunciation: 'مينوس', arabic: 'ناقص' },
    { id: 47, word: 'mal', pronunciation: 'مال', arabic: 'ضرب' },
    { id: 48, word: 'geteilt durch', pronunciation: 'غتايلت دورش', arabic: 'قسمة' },
    { id: 49, word: 'gleich', pronunciation: 'غلايش', arabic: 'يساوي' },
    { id: 50, word: 'Prozent', pronunciation: 'بروتسنت', arabic: 'بالمائة' },
    { id: 51, word: 'ein Drittel', pronunciation: 'آين دريتل', arabic: 'الثلث' },
    { id: 52, article: 'der', word: 'Durchschnitt', pronunciation: 'در دورشنيت', arabic: 'المتوسط الحسابي' },
    { id: 53, word: 'gerade Zahl', pronunciation: 'غراده تسال', arabic: 'عدد زوجي' },
    { id: 54, word: 'ungerade Zahl', pronunciation: 'أونغراده تسال', arabic: 'عدد فردي' },
    { id: 55, article: 'das', word: 'Ergebnis', pronunciation: 'داس إرغيبنيس', arabic: 'النتيجة / الحاصل' },
    { id: 56, article: 'die', word: 'Summe', pronunciation: 'دي زومه', arabic: 'المجموع' },
    { id: 57, article: 'der', word: 'Rest', pronunciation: 'در ريست', arabic: 'الباقي' },
    { id: 58, word: 'zählen', pronunciation: 'تسيلن', arabic: 'يشمر / يعد' },
    { id: 59, word: 'rechnen', pronunciation: 'ريشنن', arabic: 'يحسب' },
    { id: 60, article: 'die', word: 'Milliarde', pronunciation: 'دي ميليارده', arabic: 'مليار' }
  ];

  const filteredData = vocabList.filter((item) => {
    const fullGerman = item.article ? `${item.article} ${item.word}` : item.word;
    return (
      fullGerman.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.pronunciation.includes(searchTerm)
    );
  });

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
        .article.der { color: #00bfff; }
        .article.die { color: #ec4899; }
        .article.das { color: #22c55e; }
      `}</style>

      <h1 className="page-title">الأرقام والعمليات الحسابية 🔢</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن رقم أو عملية حسابية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="vocab-card"
            onClick={() => speakWord(item)}
          >
            {/* رقم الكارت */}
            <div className="item-number">{item.id}</div>

            {/* شريط النطق */}
            <div className="pronunciation-wrapper">
              <span className="speaker-left">🔊</span>
              <span>{item.pronunciation}</span>
              <span className="speaker-right">🔊</span>
            </div>

            {/* الكلمات */}
            <div className="vocab-main-row">
              <div className="arabic-word">{item.arabic}</div>
              <div className="german-word">
                {item.article && (
                  <span className={`article ${item.article}`}>{item.article} </span>
                )}
                <span>{item.word}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}