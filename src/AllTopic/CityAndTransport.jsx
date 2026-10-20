import React, { useState } from 'react';

// قائمة كلمات قسم (المدينة والمواصلات) الشاملة (60 كلمة)
const cityTransportData = [
  { id: 1, article: 'die', word: 'Stadt', pronunciation: 'دي شتات', arabic: 'المدينة' },
  { id: 2, article: 'das', word: 'Dorf', pronunciation: 'داس دورف', arabic: 'القرية' },
  { id: 3, article: 'die', word: 'Straße', pronunciation: 'دي شتراسه', arabic: 'الشارع' },
  { id: 4, article: 'der', word: 'Platz', pronunciation: 'در بلاتس', arabic: 'الساحة' },
  { id: 5, article: 'die', word: 'Brücke', pronunciation: 'دي بريوكه', arabic: 'الجسر' },
  { id: 6, article: 'der', word: 'Park', pronunciation: 'در بارك', arabic: 'الحديقة العامة' },
  { id: 7, article: 'der', word: 'Markt', pronunciation: 'در ماركت', arabic: 'السوق' },
  { id: 8, article: 'das', word: 'Geschäft', pronunciation: 'داس غشيفت', arabic: 'المتجر' },
  { id: 9, article: 'der', word: 'Laden', pronunciation: 'در لادن', arabic: 'الدكان' },
  { id: 10, article: 'das', word: 'Einkaufszentrum', pronunciation: 'داس أينكاوفسنتُروم', arabic: 'مركز التسوق' },
  { id: 11, article: 'die', word: 'Bank', pronunciation: 'دي بانك', arabic: 'البنك' },
  { id: 12, article: 'die', word: 'Post', pronunciation: 'دي بوست', arabic: 'البريد' },
  { id: 13, article: 'das', word: 'Krankenhaus', pronunciation: 'داس كرانكنهاوس', arabic: 'المستشفى' },
  { id: 14, article: 'die', word: 'Apotheke', pronunciation: 'دي أبوتيكه', arabic: 'الصيدلية' },
  { id: 15, article: 'die', word: 'Schule', pronunciation: 'دي شوله', arabic: 'المدرسة' },
  { id: 16, article: 'die', word: 'Universität', pronunciation: 'دي أونيفرسيتيت', arabic: 'الجامعة' },
  { id: 17, article: 'die', word: 'Bibliothek', pronunciation: 'دي بيبيليوتيك', arabic: 'المكتبة' },
  { id: 18, article: 'das', word: 'Museum', pronunciation: 'داس موزِيوم', arabic: 'المتحف' },
  { id: 19, article: 'das', word: 'Kino', pronunciation: 'داس كينو', arabic: 'السينما' },
  { id: 20, article: 'das', word: 'Theater', pronunciation: 'داس تيآتر', arabic: 'المسرح' },
  { id: 21, article: 'das', word: 'Restaurant', pronunciation: 'داس ريستورانت', arabic: 'المطعم' },
  { id: 22, article: 'das', word: 'Hotel', pronunciation: 'داس هوتيل', arabic: 'الفندق' },
  { id: 23, article: 'der', word: 'Bahnhof', pronunciation: 'در بانهوف', arabic: 'محطة القطار' },
  { id: 24, article: 'der', word: 'Flughafen', pronunciation: 'در فلوغهافن', arabic: 'المطار' },
  { id: 25, article: 'die', word: 'Bushaltestelle', pronunciation: 'دي بوسهالتستيله', arabic: 'موقف الباص' },
  { id: 26, article: 'das', word: 'Auto', pronunciation: 'داس أوتو', arabic: 'السيارة' },
  { id: 27, article: 'der', word: 'Bus', pronunciation: 'در بوس', arabic: 'الباص' },
  { id: 28, article: 'der', word: 'Zug', pronunciation: 'در تسوخ', arabic: 'القطار' },
  { id: 29, article: 'die', word: 'Straßenbahn', pronunciation: 'دي شتراسينبان', arabic: 'الترام' },
  { id: 30, article: 'die', word: 'U-Bahn', pronunciation: 'دي أوبان', arabic: 'المترو' },
  { id: 31, article: 'das', word: 'Fahrrad', pronunciation: 'داس فابراد', arabic: 'الدراجة' },
  { id: 32, article: 'das', word: 'Motorrad', pronunciation: 'داس موتورراد', arabic: 'الدراجة النارية' },
  { id: 33, article: 'das', word: 'Taxi', pronunciation: 'داس تاكسي', arabic: 'التاكسي' },
  { id: 34, article: 'das', word: 'Flugzeug', pronunciation: 'داس فلوغتسويغ', arabic: 'الطائرة' },
  { id: 35, article: 'das', word: 'Schiff', pronunciation: 'داس شيف', arabic: 'السفينة' },
  { id: 36, article: 'das', word: 'Boot', pronunciation: 'داس بوت', arabic: 'القارب' },
  { id: 37, article: 'der', word: 'Lastwagen', pronunciation: 'در لاستفاغن', arabic: 'الشاحنة' },
  { id: 38, article: 'die', word: 'Fahrkarte', pronunciation: 'دي فاركارته', arabic: 'التذكرة' },
  { id: 39, article: 'der', word: 'Fahrplan', pronunciation: 'در فاربلان', arabic: 'الجدول الزمني' },
  { id: 40, article: 'der', word: 'Führerschein', pronunciation: 'در فيوررشاين', arabic: 'رخصة القيادة' },
  { id: 41, article: 'die', word: 'Kreuzung', pronunciation: 'دي كرويتسونغ', arabic: 'التقاطع' },
  { id: 42, article: 'die', word: 'Ampel', pronunciation: 'دي أمبل', arabic: 'إشارة المرور' },
  { id: 43, article: 'der', word: 'Gehweg', pronunciation: 'در غيهفيغ', arabic: 'الرصيف' },
  { id: 44, article: 'die', word: 'Richtung', pronunciation: 'دي ريشتونغ', arabic: 'الاتجاه' },
  { id: 45, word: 'links', pronunciation: 'لينكس', arabic: 'يسار' },
  { id: 46, word: 'rechts', pronunciation: 'ريشتس', arabic: 'يمين' },
  { id: 47, word: 'geradeaus', pronunciation: 'غرادهاوس', arabic: 'مباشرة / إلى الأمام' },
  { id: 48, word: 'oben', pronunciation: 'أوبن', arabic: 'في الأعلى' },
  { id: 49, word: 'unten', pronunciation: 'أونتن', arabic: 'في الأسفل' },
  { id: 50, word: 'nah', pronunciation: 'ناه', arabic: 'قريب' },
  { id: 51, word: 'weit', pronunciation: 'فايت', arabic: 'بعيد' },
  { id: 52, word: 'hier', pronunciation: 'هير', arabic: 'هنا' },
  { id: 53, word: 'dort', pronunciation: 'دورت', arabic: 'هناك' },
  { id: 54, article: 'die', word: 'Karte', pronunciation: 'دي كارته', arabic: 'الخريطة' },
  { id: 55, article: 'die', word: 'Adresse', pronunciation: 'دي أدريسه', arabic: 'العنوان' },
  { id: 56, article: 'der', word: 'Weg', pronunciation: 'در فيغ', arabic: 'الطريق' },
  { id: 57, article: 'die', word: 'Entfernung', pronunciation: 'دي إنتفيرنونغ', arabic: 'المسافة' },
  { id: 58, article: 'das', word: 'Ziel', pronunciation: 'داس تسيل', arabic: 'الوجهة / الهدف' },
  { id: 59, article: 'die', word: 'Reise', pronunciation: 'دي رايزه', arabic: 'الرحلة' },
  { id: 60, article: 'die', word: 'Tankstelle', pronunciation: 'دي تانكستيله', arabic: 'محطة وقود' }
];

export default function CityTransportPage() {
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

  const filteredData = cityTransportData.filter((item) => {
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

      <h1 className="page-title">المدينة والمواصلات 🏙️🚆</h1>

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