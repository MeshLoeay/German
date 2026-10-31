import React, { useState } from 'react';

// قائمة البيانات مع تعديل الأرقام لت تبدأ من 1 بترتيب تصاعدي
const shapesData = [
  { id: 1, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'das Rechteck', pronunciation: 'داس ريشتإك', arabic: 'المستطيل' },
  { id: 2, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'das Quadrat', pronunciation: 'داس كفادرات', arabic: 'المربع' },
  { id: 3, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'der Kreis', pronunciation: 'در كرايس', arabic: 'الدائرة' },
  { id: 4, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'das Dreieck', pronunciation: 'داس دراياك', arabic: 'المثلث' },
  { id: 5, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'der Stern', pronunciation: 'در شتيرن', arabic: 'النجم' },
  { id: 6, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'die Linie', pronunciation: 'دي لينيه', arabic: 'الخط' },
  { id: 7, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'die Form', pronunciation: 'دي فورم', arabic: 'الشكل' },
  { id: 8, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'die Größe', pronunciation: 'دي غريوسه', arabic: 'الحجم' },
  { id: 9, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'rund', pronunciation: 'روند', arabic: 'مستدير' },
  { id: 10, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'eckig', pronunciation: 'إكيغ', arabic: 'زاوي' },
  { id: 11, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'gerade', pronunciation: 'غراده', arabic: 'مستقيم' },
  { id: 12, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'krumm', pronunciation: 'كروم', arabic: 'منحني' },
  { id: 13, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'die Fläche', pronunciation: 'دي فليشه', arabic: 'المساحة' },
  { id: 14, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'das Muster', pronunciation: 'داس موستر', arabic: 'النقش' },
  { id: 15, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'der Punkt', pronunciation: 'در بونكت', arabic: 'النقطة' },
  { id: 16, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'die Kugel', pronunciation: 'دي كوغل', arabic: 'الكرة' },
  { id: 17, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'der Würfel', pronunciation: 'در فيورفل', arabic: 'المكعب' },
  { id: 18, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'die Pyramide', pronunciation: 'دي بيراميده', arabic: 'الهرم' },
  { id: 19, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'das Oval', pronunciation: 'داس أوفال', arabic: 'البيضاوي' },
  { id: 20, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'der Bogen', pronunciation: 'در بوغن', arabic: 'القوس' },
  { id: 21, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'der Rand', pronunciation: 'در رانت', arabic: 'الحد' },
  { id: 22, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'das Zylinder', pronunciation: 'داس تسيليندر', arabic: 'الأسطوانة' },
  { id: 23, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'das Fünfeck', pronunciation: 'داس فونفإك', arabic: 'خماسي الأضلاع' },
  { id: 24, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'das Sechseck', pronunciation: 'داس زيكسإك', arabic: 'سداسي الأضلاع' },
  { id: 25, categoryNum: 1, categoryTitle: 'الأشكال والأحجام', german: 'der Kegel', pronunciation: 'در كيغل', arabic: 'المخروط' }
];

export default function GermanShapesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // دالة تشغيل الصوت عبر متصفح الويب
  const speakGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
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

  const filteredData = shapesData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let lastCategoryNum = null;

  return (
    <div style={{ width: '100%', padding: '15px 0 40px 0', color: 'inherit', background: 'transparent', boxSizing: 'border-box' }}>
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
        }
        .search-input {
          width: 90%;
          max-width: 90%;
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
        .category-heading {
          text-align: center;
          font-size: 1.0rem;
          font-weight: 900;
          margin: 30px 0 15px 0;
          color: #00bfff;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          width: 100%;
        }
        .category-badge {
          background-color: #ff3333;
          color: #ffffff;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
          width: 100%;
        }
        .vocab-card {
          position: relative;
          width: 90%;
          max-width: 90%;
          border: 2px solid currentColor;
          border-radius: 30px 6px;
          padding: 14px 16px 14px 16px;
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
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
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

      <h1 className="page-title">الأشكال والأحجام</h1>

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
        {filteredData.map((item) => {
          const showHeading = item.categoryNum !== lastCategoryNum;
          lastCategoryNum = item.categoryNum;

          return (
            <React.Fragment key={item.id}>
              {showHeading && (
                <div className="category-heading">
                  <span className="category-badge">{item.categoryNum}</span>
                  <span>{item.categoryTitle}</span>
                </div>
              )}
              <div
                className="vocab-card"
                onClick={() => speakGerman(item.german)}
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
                  <div className="german-word">{renderColoredGermanWord(item.german)}</div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}