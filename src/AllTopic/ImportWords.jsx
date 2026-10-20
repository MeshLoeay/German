import React, { useState } from 'react';

const vocabList = [
  { id: 1, german: 'und', pronunciation: 'أونت', arabic: 'و' },
  { id: 2, german: 'oder', pronunciation: 'أودر', arabic: 'أو' },
  { id: 3, german: 'aber', pronunciation: 'أبر', arabic: 'لكن' },
  { id: 4, german: 'weil', pronunciation: 'فايل', arabic: 'لأن' },
  { id: 5, german: 'denn', pronunciation: 'دين', arabic: 'لأن' },
  { id: 6, german: 'wenn', pronunciation: 'فين', arabic: 'إذا' },
  { id: 7, german: 'dass', pronunciation: 'داس', arabic: 'أن' },
  { id: 8, german: 'ob', pronunciation: 'أوب', arabic: 'ما إذا' },
  { id: 9, german: 'nicht', pronunciation: 'نيشت', arabic: 'ليس' },
  { id: 10, german: 'kein', pronunciation: 'كاين', arabic: 'لا (مع النكرة)' },
  { id: 11, german: 'auch', pronunciation: 'أوخ', arabic: 'أيضاً' },
  { id: 12, german: 'nur', pronunciation: 'نور', arabic: 'فقط' },
  { id: 13, german: 'sehr', pronunciation: 'زير', arabic: 'جداً' },
  { id: 14, german: 'zu', pronunciation: 'تسو', arabic: 'إلى/جداً' },
  { id: 15, german: 'mit', pronunciation: 'ميت', arabic: 'مع' },
  { id: 16, german: 'ohne', pronunciation: 'أونه', arabic: 'بدون' },
  { id: 17, german: 'für', pronunciation: 'فيور', arabic: 'لأجل' },
  { id: 18, german: 'gegen', pronunciation: 'غيغن', arabic: 'ضد' },
  { id: 19, german: 'zwischen', pronunciation: 'تسفيشن', arabic: 'بين' },
  { id: 20, german: 'unter', pronunciation: 'أونتر', arabic: 'تحت' },
  { id: 21, german: 'über', pronunciation: 'إيبر', arabic: 'فوق/عن' },
  { id: 22, german: 'neben', pronunciation: 'نيبن', arabic: 'بجانب' },
  { id: 23, german: 'vor', pronunciation: 'فور', arabic: 'قبل/أمام' },
  { id: 24, german: 'nach', pronunciation: 'ناخ', arabic: 'بعد/إلى' },
  { id: 25, german: 'aus', pronunciation: 'أوس', arabic: 'من' },
  { id: 26, german: 'bei', pronunciation: 'باي', arabic: 'عند' },
  { id: 27, german: 'von', pronunciation: 'فون', arabic: 'من' },
  { id: 28, german: 'bis', pronunciation: 'بيس', arabic: 'حتى' },
  { id: 29, german: 'seit', pronunciation: 'زايت', arabic: 'منذ' },
  { id: 30, german: 'durch', pronunciation: 'دورش', arabic: 'عبر' },
  { id: 31, german: 'um', pronunciation: 'أوم', arabic: 'حول/الساعة' },
  { id: 32, german: 'in', pronunciation: 'إن', arabic: 'في' },
  { id: 33, german: 'an', pronunciation: 'أن', arabic: 'على' },
  { id: 34, german: 'auf', pronunciation: 'أوف', arabic: 'على' },
  { id: 35, german: 'also', pronunciation: 'ألسو', arabic: 'إذن' },
  { id: 36, german: 'deshalb', pronunciation: 'دسهالب', arabic: 'لذلك' },
  { id: 37, german: 'trotzdem', pronunciation: 'تروتسديم', arabic: 'رغم ذلك' },
  { id: 38, german: 'außerdem', pronunciation: 'أوسرديم', arabic: 'بالإضافة' },
  { id: 39, german: 'zum Beispiel', pronunciation: 'تسوم بايسبيل', arabic: 'مثلاً' },
  { id: 40, german: 'das heißt', pronunciation: 'داس هايست', arabic: 'أي' },
  { id: 41, german: 'natürlich', pronunciation: 'ناتورليش', arabic: 'طبعاً' },
  { id: 42, german: 'vielleicht', pronunciation: 'فيلايشت', arabic: 'ربما' },
  { id: 43, german: 'sicher', pronunciation: 'زيشر', arabic: 'بالتأكيد' },
  { id: 44, german: 'genau', pronunciation: 'غناو', arabic: 'بالضبط' },
  { id: 45, german: 'wirklich', pronunciation: 'فيركليش', arabic: 'حقاً' },
  { id: 46, german: 'eigentlich', pronunciation: 'أيغنتليش', arabic: 'في الواقع' },
  { id: 47, german: 'normalerweise', pronunciation: 'نورمالرڤايزه', arabic: 'عادةً' },
  { id: 48, german: 'manchmal', pronunciation: 'مانشمال', arabic: 'أحياناً' },
  { id: 49, german: 'immer', pronunciation: 'إمر', arabic: 'دائماً' },
  { id: 50, german: 'niemals', pronunciation: 'نيمالس', arabic: 'أبداً' },
  { id: 51, german: 'überall', pronunciation: 'إيوبرال', arabic: 'في كل مكان' },
  { id: 52, german: 'irgendwo', pronunciation: 'إيرغندفو', arabic: 'في مكان ما' },
  { id: 53, german: 'irgendwann', pronunciation: 'إيرغندفان', arabic: 'في وقت ما' },
  { id: 54, german: 'zusammen', pronunciation: 'تسورامن', arabic: 'معاً' },
  { id: 55, german: 'allein', pronunciation: 'ألاين', arabic: 'وحيداً' },
  { id: 56, german: 'zurück', pronunciation: 'تسوروك', arabic: 'عائداً' },
  { id: 57, german: 'vorwärts', pronunciation: 'فورفرتس', arabic: 'إلى الأمام' },
  { id: 58, german: 'oben', pronunciation: 'أوبن', arabic: 'أعلى' },
  { id: 59, german: 'unten', pronunciation: 'أونتن', arabic: 'أسفل' },
  { id: 60, german: 'zwischen', pronunciation: 'تسفيشن', arabic: 'بين' }
];

export default function VocabListPage() {
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

  const filteredData = vocabList.filter((item) => {
    return (
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
          color: inherit;
        }
      `}</style>

      <h1 className="page-title">أهم الكلمات والروابط 📖</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة ألمانية أو باللغة العربية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item, index) => {
          return (
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
                <div className="german-word">{item.german}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}