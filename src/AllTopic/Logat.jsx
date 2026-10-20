import React, { useState } from 'react';

const languagesData = [
  { id: 1, article: 'die', word: 'Sprache', arabic: 'اللغة', pronunciation: 'دي شتراخه' },
  { id: 2, article: 'die', word: 'Muttersprache', arabic: 'اللغة الأم', pronunciation: 'دي موترشتراخه' },
  { id: 3, article: 'die', word: 'Fremdsprache', arabic: 'اللغة الأجنبية', pronunciation: 'دي فريمدشتراخه' },
  { id: 4, article: 'die', word: 'Zweitsprache', arabic: 'اللغة الثانية', pronunciation: 'دي تسڤايتشترِاخِه' },

  // اللغات السابقة
  { id: 5, article: '', word: 'Arabisch', arabic: 'اللغة العربية', pronunciation: 'أرابيش' },
  { id: 6, article: '', word: 'Deutsch', arabic: 'اللغة الألمانية', pronunciation: 'دويلتش' },
  { id: 7, article: '', word: 'Englisch', arabic: 'اللغة الإنجليزية', pronunciation: 'إنجليش' },
  { id: 8, article: '', word: 'Französisch', arabic: 'اللغة الفرنسية', pronunciation: 'فرانتسوزيش' },
  { id: 9, article: '', word: 'Spanisch', arabic: 'اللغة الإسبانية', pronunciation: 'شپانيش' },
  { id: 10, article: '', word: 'Italienisch', arabic: 'اللغة الإيطالية', pronunciation: 'إيتاليانيش' },
  { id: 11, article: '', word: 'Russisch', arabic: 'اللغة الروسية', pronunciation: 'روسيش' },
  { id: 12, article: '', word: 'Chinesisch', arabic: 'اللغة الصينية', pronunciation: 'شينيزيش' },
  { id: 13, article: '', word: 'Japanisch', arabic: 'اللغة اليابانية', pronunciation: 'يابانيش' },
  { id: 14, article: '', word: 'Türkisch', arabic: 'اللغة التركية', pronunciation: 'تيوركيش' },
  { id: 15, article: '', word: 'Griechisch', arabic: 'اللغة اليونانية', pronunciation: 'غريشيش' },
  { id: 16, article: '', word: 'Niederländisch', arabic: 'اللغة الهولندية', pronunciation: 'نيدرلنديش' },
  { id: 17, article: '', word: 'Portugiesisch', arabic: 'اللغة البرتغالية', pronunciation: 'پورتوغيريش' },
  { id: 18, article: '', word: 'Polnisch', arabic: 'اللغة البولندية', pronunciation: 'پولنيش' },
  { id: 19, article: '', word: 'Koreanisch', arabic: 'اللغة الكورية', pronunciation: 'كوريانيش' },
  { id: 20, article: '', word: 'Hindi', arabic: 'اللغة الهندية', pronunciation: 'هيندي' },
  { id: 21, article: '', word: 'Persisch', arabic: 'اللغة الفارسية', pronunciation: 'پيرسيش' },
  { id: 22, article: '', word: 'Schwedisch', arabic: 'اللغة السويدية', pronunciation: 'شڤيديش' },
  { id: 23, article: '', word: 'Dänisch', arabic: 'اللغة الدنماركية', pronunciation: 'دينيش' },
  { id: 24, article: '', word: 'Norwegisch', arabic: 'اللغة النرويجية', pronunciation: 'نورفيجيش' },
  { id: 25, article: '', word: 'Finnisch', arabic: 'اللغة الفنلندية', pronunciation: 'فينيش' },
  { id: 26, article: '', word: 'Tschechisch', arabic: 'اللغة التشيكية', pronunciation: 'تشيهيش' },
  { id: 27, article: '', word: 'Ungarisch', arabic: 'اللغة المجرية', pronunciation: 'ونغاريش' },
  { id: 28, article: '', word: 'Rumänisch', arabic: 'اللغة الرومانية', pronunciation: 'رومانيش' },
  { id: 29, article: '', word: 'Ukrainisch', arabic: 'اللغة الأوكرانية', pronunciation: 'أوكرانيش' },
  { id: 30, article: '', word: 'Vietnamesisch', arabic: 'اللغة الفيتنامية', pronunciation: 'فيتناميش' },
  { id: 31, article: '', word: 'Hebräisch', arabic: 'اللغة العبرية', pronunciation: 'هيبرايش' },
  { id: 32, article: '', word: 'Indonesisch', arabic: 'اللغة الإندونيسية', pronunciation: 'إندونيزيش' },
  { id: 33, article: '', word: 'Thailändisch', arabic: 'اللغة التايلندية', pronunciation: 'تايلنديش' },
  { id: 34, article: '', word: 'Katalanisch', arabic: 'اللغة الكتالونية', pronunciation: 'كاتالانيش' },
  { id: 35, article: '', word: 'Kroatisch', arabic: 'اللغة الكرواتية', pronunciation: 'كرواتيش' },
  { id: 36, article: '', word: 'Serbisch', arabic: 'اللغة الصربية', pronunciation: 'زيربيش' },
  { id: 37, article: '', word: 'Slowakisch', arabic: 'اللغة السلوفاكية', pronunciation: 'سلوفاكيش' },
  { id: 38, article: '', word: 'Bulgarisch', arabic: 'اللغة البلغارية', pronunciation: 'بولغاريش' },

  // لغات إضافية جديدة
  { id: 39, article: '', word: 'Urdu', arabic: 'اللغة الأردية', pronunciation: 'أوردو' },
  { id: 40, article: '', word: 'Bengalisch', arabic: 'اللغة البنغالية', pronunciation: 'بنغاليش' },
  { id: 41, article: '', word: 'Malayisch', arabic: 'اللغة الملايوية', pronunciation: 'ملاييش' },
  { id: 42, article: '', word: 'Tagalog', arabic: 'اللغة التغالوغية (الفلبينية)', pronunciation: 'تاغالوغ' },
  { id: 43, article: '', word: 'Swahili', arabic: 'اللغة السواحلية', pronunciation: 'سواهيلي' },
  { id: 44, article: '', word: 'Litauisch', arabic: 'اللغة الليتوانية', pronunciation: 'ليتوانيش' },
  { id: 45, article: '', word: 'Lettisch', arabic: 'اللغة اللاتفية', pronunciation: 'لاتفيش' },
  { id: 46, article: '', word: 'Estnisch', arabic: 'اللغة الإستونية', pronunciation: 'إستونيش' }
];

export default function LanguagesPage() {
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

  const renderColoredGermanWord = (item) => {
    const fullText = item.article ? `${item.article} ${item.word}` : item.word;

    if (item.article) {
      const article = item.article.toLowerCase();
      let wordColor = 'inherit';

      if (article === 'der') wordColor = '#00bfff';
      else if (article === 'das') wordColor = '#22c55e';
      else if (article === 'die') wordColor = '#ec4899';

      return (
        <span>
          <span style={{ color: wordColor, fontWeight: 'bold' }}>{item.article}</span> {item.word}
        </span>
      );
    }
    return fullText;
  };

  const filteredData = languagesData.filter((item) => {
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
      `}</style>

      <h1 className="page-title">اللغات 🌍</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن لغة أو كلمة..."
          value= {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item, index) => {
          const fullGerman = item.article ? `${item.article} ${item.word}` : item.word;
          return (
            <div
              key={item.id}
              className="vocab-card"
              onClick={() => speakGerman(fullGerman)}
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
                <div className="german-word">{renderColoredGermanWord(item)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}