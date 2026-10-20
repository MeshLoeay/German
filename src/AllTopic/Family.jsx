import React, { useState } from 'react';

// قائمة كلمات قسم (العائلة والناس) الشاملة مع إضافة أفراد عائلة الأب والأم بدقة
const familyPeopleData = [
  { id: 1, article: 'die', word: 'Familie', pronunciation: 'دي فاميليى', arabic: 'العائلة' },
  { id: 2, article: 'der', word: 'Vater', pronunciation: 'در فاتر', arabic: 'الأب' },
  { id: 3, article: 'die', word: 'Mutter', pronunciation: 'دي موتر', arabic: 'الأم' },
  { id: 4, article: 'der', word: 'Sohn', pronunciation: 'در زون', arabic: 'الابن' },
  { id: 5, article: 'die', word: 'Tochter', pronunciation: 'دي توختر', arabic: 'الابنة' },
  { id: 6, article: 'der', word: 'Bruder', pronunciation: 'در بروذر', arabic: 'الأخ' },
  { id: 7, article: 'die', word: 'Schwester', pronunciation: 'دي شفستر', arabic: 'الأخت' },
  { id: 8, article: 'der', word: 'Großvater', pronunciation: 'در غروسفاتر', arabic: 'الجد' },
  { id: 9, article: 'die', word: 'Großmutter', pronunciation: 'دي غروسموتر', arabic: 'الجدة' },
  { id: 10, article: 'der', word: 'Enkel', pronunciation: 'در إنكل', arabic: 'الحفيد' },
  { id: 11, article: 'die', word: 'Enkelin', pronunciation: 'دي إنكلين', arabic: 'الحفيدة' },
  { id: 12, article: 'der', word: 'Onkel', pronunciation: 'در أونكل', arabic: 'العم / الخال' },
  { id: 13, article: 'die', word: 'Tante', pronunciation: 'دي تانته', arabic: 'العمّة / الخالة' },
  { id: 14, article: 'der', word: 'Cousin', pronunciation: 'در كوزان', arabic: 'ابن العم / الخال' },
  { id: 15, article: 'die', word: 'Cousine', pronunciation: 'دي كوزينه', arabic: 'ابنة العم / الخال' },
  { id: 16, article: 'der', word: 'Neffe', pronunciation: 'در نيفه', arabic: 'ابن الأخ / الأخت' },
  { id: 17, article: 'die', word: 'Nichte', pronunciation: 'دي نيشته', arabic: 'بنت الأخ / الأخت' },
  { id: 18, article: 'der', word: 'Ehemann', pronunciation: 'در إيهمان', arabic: 'الزوج' },
  { id: 19, article: 'die', word: 'Ehefrau', pronunciation: 'دي إيهفراو', arabic: 'الزوجة' },
  { id: 20, article: 'der', word: 'Mann', pronunciation: 'در مان', arabic: 'الرجل / الزوج' },
  { id: 21, article: 'die', word: 'Frau', pronunciation: 'دي فراو', arabic: 'المرأة / الزوجة' },
  { id: 22, article: 'das', word: 'Kind', pronunciation: 'داس كينت', arabic: 'الطفل' },
  { id: 23, article: 'der', word: 'Junge', pronunciation: 'در يونغه', arabic: 'الولد' },
  { id: 24, article: 'das', word: 'Mädchen', pronunciation: 'داس ميدشن', arabic: 'البنت' },
  { id: 25, article: 'der', word: 'Freund', pronunciation: 'در فروينت', arabic: 'الصديق' },
  { id: 26, article: 'die', word: 'Freundin', pronunciation: 'دي فرويندين', arabic: 'الصديقة' },
  { id: 27, article: 'der', word: 'Nachbar', pronunciation: 'در ناخبار', arabic: 'الجار' },
  { id: 28, article: 'die', word: 'Nachbarin', pronunciation: 'دي ناخبارين', arabic: 'الجارة' },
  { id: 29, article: 'der', word: 'Gast', pronunciation: 'در غاست', arabic: 'الضيف' },
  { id: 30, article: 'der', word: 'Mensch', pronunciation: 'در مينش', arabic: 'الإنسان' },
  { id: 31, article: 'der', word: 'Herr', pronunciation: 'در هير', arabic: 'السيد' },
  { id: 32, article: 'die', word: 'Dame', pronunciation: 'دي دامه', arabic: 'السيدة' },
  { id: 33, article: 'der', word: 'Chef', pronunciation: 'در شيف', arabic: 'المدير' },
  { id: 34, article: 'der', word: 'Kollege', pronunciation: 'در كوليغه', arabic: 'الزميل' },
  { id: 35, article: 'der', word: 'Lehrer', pronunciation: 'در ليرر', arabic: 'المعلم' },
  { id: 36, article: 'der', word: 'Schüler', pronunciation: 'در شولر', arabic: 'التلميذ' },
  { id: 37, article: 'der', word: 'Arzt', pronunciation: 'در آرتست', arabic: 'الطبيب' },
  { id: 38, article: 'der', word: 'Polizist', pronunciation: 'در بوليتسيست', arabic: 'الشرطي' },
  { id: 39, article: 'der', word: 'Verkäufer', pronunciation: 'در فركاوفر', arabic: 'البائع' },
  { id: 40, article: 'der', word: 'Kunde', pronunciation: 'در كونده', arabic: 'العميل' },
  { id: 41, article: 'das', word: 'Baby', pronunciation: 'داس بيبي', arabic: 'الرضيع' },
  { id: 42, article: 'die', word: 'Eltern', pronunciation: 'دي إلترن', arabic: 'الوالدان' },
  { id: 43, article: 'die', word: 'Geschwister', pronunciation: 'دي غشفستر', arabic: 'الأشقاء' },
  { id: 44, article: 'die', word: 'Großeltern', pronunciation: 'دي غروسإلترن', arabic: 'الأجداد' },
  { id: 45, article: 'der', word: 'Schwager', pronunciation: 'در شفاغر', arabic: 'أخو الزوج / الزوجة' },
  { id: 46, article: 'die', word: 'Schwägerin', pronunciation: 'دي شفيغرين', arabic: 'أخت الزوج / الزوجة' },
  { id: 47, article: 'das', word: 'Ehepaar', pronunciation: 'داس إيهبار', arabic: 'الزوجان' },
  { id: 48, article: 'der', word: 'Verwandte', pronunciation: 'در فرفانته', arabic: 'القريب' },
  { id: 49, article: 'der', word: 'Bekannte', pronunciation: 'در بكانته', arabic: 'أحد المعارف' },
  { id: 50, article: 'die', word: 'Leute', pronunciation: 'دي لويته', arabic: 'الناس' },
  { id: 51, article: 'der', word: 'Schwiegervater', pronunciation: 'در شفيغرباتر', arabic: 'أبو الزوج / الزوجة (الحمى)' },
  { id: 52, article: 'die', word: 'Schwiegermutter', pronunciation: 'دي شفيغرموتر', arabic: 'أم الزوج / الزوجة (الحماة)' },
  { id: 53, article: 'der', word: 'Schwiegersohn', pronunciation: 'در شفيغرزون', arabic: 'زوج الابنة (النسيب)' },
  { id: 54, article: 'die', word: 'Schwiegertochter', pronunciation: 'دي شفيغرتوختر', arabic: 'زوجة الابن (الكنة)' },
  { id: 55, article: 'die', word: 'Kinder', pronunciation: 'دي كيندر', arabic: 'الأطفال' },
  { id: 56, article: 'die', word: 'Urgroßmutter', pronunciation: 'دي أورغروسموتر', arabic: 'الجدة الكبرى' },
  { id: 57, article: 'der', word: 'Urgroßvater', pronunciation: 'در أورغروسفاتر', arabic: 'الجد الأكبر' },
  { id: 58, article: 'der', word: 'Partner', pronunciation: 'در بارتنر', arabic: 'الشريك' },
  { id: 59, article: 'die', word: 'Partnerin', pronunciation: 'دي بارتنرين', arabic: 'الشريكة' },
  { id: 60, article: 'die', word: 'Jugendlichen', pronunciation: 'دي يوغندليخن', arabic: 'الشباب / المراهقون' },

  // إضافات عائلة الأب والأم لتكتمل العائلة تماماً
  { id: 61, article: 'der', word: 'Vatersvater', pronunciation: 'در فاترسفاتر', arabic: 'جد الأب' },
  { id: 62, article: 'die', word: 'Vatersmutter', pronunciation: 'دي فاترسموتر', arabic: 'جدة الأب' },
  { id: 63, article: 'der', word: 'Muttersvater', pronunciation: 'در موترسفاتر', arabic: 'جد الأم' },
  { id: 64, article: 'die', word: 'Muttersmutter', pronunciation: 'دي موترسموتر', arabic: 'جدة الأم' },
  { id: 65, article: 'der', word: 'Vatersbruder', pronunciation: 'در فاترسبروذر', arabic: 'عم الأب' },
  { id: 66, article: 'die', word: 'Vatersschwester', pronunciation: 'دي فاترسشفستر', arabic: 'عمة الأب' },
  { id: 67, article: 'der', word: 'Muttersbruder', pronunciation: 'در موترسبروذر', arabic: 'خال الأم' },
  { id: 68, article: 'die', word: ' Muttersschwester', pronunciation: 'دي موترسشفستر', arabic: 'خالة الأم' },
  { id: 69, article: 'der', word: 'Stiefvater', pronunciation: 'در شتيففاتر', arabic: 'زوج الأم (الربيب / الأب الروحي)' },
  { id: 70, article: 'die', word: 'Stiefmutter', pronunciation: 'دي شتيفموتر', arabic: 'زوجة الأب (الـمُربّية)' }
];

export default function FamilyPeoplePage() {
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

  const filteredData = familyPeopleData.filter((item) => {
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

      <h1 className="page-title">العائلة والناس 👨‍👩‍👧‍👦</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن فرد من العائلة أو كلمة..."
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