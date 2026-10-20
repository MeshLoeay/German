import React, { useState } from 'react';

// قائمة العبارات والتحيات الألمانية مصنفة ومرتبة
const expressionsData = [
  // القسم الأول: التحيات الأساسية (الصباح والمساء)
  { id: 1, categoryNum: 1, categoryTitle: 'التحيات الأساسية', german: 'Hallo', pronunciation: 'هالو', arabic: 'مرحباً' },
  { id: 2, categoryNum: 1, categoryTitle: 'التحيات الأساسية', german: 'Guten Morgen', pronunciation: 'غوتن مورغن', arabic: 'صباح الخير' },
  { id: 3, categoryNum: 1, categoryTitle: 'التحيات الأساسية', german: 'Guten Tag', pronunciation: 'غوتن تاغ', arabic: 'نهارك سعيد' },
  { id: 4, categoryNum: 1, categoryTitle: 'التحيات الأساسية', german: 'Guten Abend', pronunciation: 'غوتن آبند', arabic: 'مساء الخير' },
  { id: 5, categoryNum: 1, categoryTitle: 'التحيات الأساسية', german: 'Gute Nacht', pronunciation: 'غوته ناخت', arabic: 'تصبح على خير' },
  { id: 6, categoryNum: 1, categoryTitle: 'التحيات الأساسية', german: 'Herzlich willkommen', pronunciation: 'هيرتسليش فيلكومن', arabic: 'أهلاً وسهلاً' },

  // القسم الثاني: الوداع والرحيل
  { id: 7, categoryNum: 2, categoryTitle: 'الوداع ونهاية اللقاء', german: 'Tschüss', pronunciation: 'تشوس', arabic: 'سلام (وداعاً)' },
  { id: 8, categoryNum: 2, categoryTitle: 'الوداع ونهاية اللقاء', german: 'Auf Wiedersehen', pronunciation: 'أوف فيدرزيهن', arabic: 'إلى اللقاء' },
  { id: 9, categoryNum: 2, categoryTitle: 'الوداع ونهاية اللقاء', german: 'Bis bald', pronunciation: 'بيس بالد', arabic: 'إلى قريب' },
  { id: 10, categoryNum: 2, categoryTitle: 'الوداع ونهاية اللقاء', german: 'Bis morgen', pronunciation: 'بيس مورغن', arabic: 'إلى الغد' },
  { id: 11, categoryNum: 2, categoryTitle: 'الوداع ونهاية اللقاء', german: 'Bis später', pronunciation: 'بيس شبيلتر', arabic: 'إلى اللقاء لاحقاً' },
  { id: 12, categoryNum: 2, categoryTitle: 'الوداع ونهاية اللقاء', german: 'Schönen Tag noch', pronunciation: 'شينن تاغ نوخ', arabic: 'أتمنى لك بقية يوم سعيد' },
  { id: 13, categoryNum: 2, categoryTitle: 'الوداع ونهاية اللقاء', german: 'Schönes Wochenende', pronunciation: 'شينس فوخنإنده', arabic: 'عطلة نهاية أسبوع سعيدة' },

  // القسم الثالث: التعارف والأسئلة الشخصية
  { id: 14, categoryNum: 3, categoryTitle: 'التعارف والأسئلة الشخصية', german: 'Wie geht\'s?', pronunciation: 'في غيتس', arabic: 'كيف حالك؟' },
  { id: 15, categoryNum: 3, categoryTitle: 'التعارف والأسئلة الشخصية', german: 'Wie heißt du?', pronunciation: 'في هايست دو', arabic: 'ما اسمك؟' },
  { id: 16, categoryNum: 3, categoryTitle: 'التعارف والأسئلة الشخصية', german: 'Ich heiße...', pronunciation: 'إش هايسه', arabic: 'اسمي...' },
  { id: 17, categoryNum: 3, categoryTitle: 'التعارف والأسئلة الشخصية', german: 'Freut mich', pronunciation: 'فرويت ميش', arabic: 'تشرفت بمعرفتك' },
  { id: 18, categoryNum: 3, categoryTitle: 'التعارف والأسئلة الشخصية', german: 'Woher kommst du?', pronunciation: 'فوهير كومست دو', arabic: 'من أين أنت؟' },
  { id: 19, categoryNum: 3, categoryTitle: 'التعارف والأسئلة الشخصية', german: 'Ich komme aus...', pronunciation: 'إش كومه أوس', arabic: 'أنا من...' },
  { id: 20, categoryNum: 3, categoryTitle: 'التعارف والأسئلة الشخصية', german: 'Wo wohnst du?', pronunciation: 'فو فونست دو', arabic: 'أين تسكن؟' },
  { id: 21, categoryNum: 3, categoryTitle: 'التعارف والأسئلة الشخصية', german: 'Wie alt bist du?', pronunciation: 'في ألت بيست دو', arabic: 'كم عمرك؟' },

  // القسم الرابع: المجاملات والردود اليومية
  { id: 22, categoryNum: 4, categoryTitle: 'المجاملات والردود اليومية', german: 'Danke', pronunciation: 'دانكه', arabic: 'شكراً' },
  { id: 23, categoryNum: 4, categoryTitle: 'المجاملات والردود اليومية', german: 'Vielen Dank', pronunciation: 'فيلن دانك', arabic: 'شكراً جزيلاً' },
  { id: 24, categoryNum: 4, categoryTitle: 'المجاملات والردود اليومية', german: 'Bitte', pronunciation: 'بته', arabic: 'عفواً / تفضل' },
  { id: 25, categoryNum: 4, categoryTitle: 'المجاملات والردود اليومية', german: 'Gleichfalls', pronunciation: 'غلايشفالس', arabic: 'ولك بالمثل' },
  { id: 26, categoryNum: 4, categoryTitle: 'المجاملات والردود اليومية', german: 'Nichts zu danken', pronunciation: 'نيشتس تسو دانكن', arabic: 'لا شكر على واجب' },
  { id: 27, categoryNum: 4, categoryTitle: 'المجاملات والردود اليومية', german: 'Kein Problem', pronunciation: 'كاين بروبليم', arabic: 'لا مشكلة' },
  { id: 28, categoryNum: 4, categoryTitle: 'المجاملات والردود اليومية', german: 'Alles gut', pronunciation: 'أليس غوت', arabic: 'كل شيء بخير' },
  { id: 29, categoryNum: 4, categoryTitle: 'المجاملات والردود اليومية', german: 'Macht nichts', pronunciation: 'ماخت نيشتس', arabic: 'لا بأس / لا يهم' },

  // القسم الخامس: كلمات الموافقة والاعتذار
  { id: 30, categoryNum: 5, categoryTitle: 'الموافقة، الرفض والاعتذار', german: 'Ja', pronunciation: 'يا', arabic: 'نعم' },
  { id: 31, categoryNum: 5, categoryTitle: 'الموافقة، الرفض والاعتذار', german: 'Nein', pronunciation: 'ناين', arabic: 'لا' },
  { id: 32, categoryNum: 5, categoryTitle: 'الموافقة، الرفض والاعتذار', german: 'Vielleicht', pronunciation: 'فيلايشت', arabic: 'ربما' },
  { id: 33, categoryNum: 5, categoryTitle: 'الموافقة، الرفض والاعتذار', german: 'Entschuldigung', pronunciation: 'إنتشولديغونغ', arabic: 'المعذرة' },
  { id: 34, categoryNum: 5, categoryTitle: 'الموافقة، الرفض والاعتذار', german: 'Es tut mir leid', pronunciation: 'إس توت مير لايد', arabic: 'أنا آسف' },

  // القسم السادس: المساعدة والاستفسارات في الشارع
  { id: 35, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Sprichst du Arabisch?', pronunciation: 'شپريشتست دو أرابيش', arabic: 'هل تتكلم العربية؟' },
  { id: 36, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Ich verstehe nicht', pronunciation: 'إش فرشتيه نيشت', arabic: 'لا أفهم' },
  { id: 37, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Ich weiß nicht', pronunciation: 'إش فايس نيشت', arabic: 'لا أعرف' },
  { id: 38, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Wie bitte?', pronunciation: 'في بته', arabic: 'عفواً؟ (ماذا قلت؟)' },
  { id: 39, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Können Sie mir helfen?', pronunciation: 'كيونن زي مير هيلفن', arabic: 'هل يمكنك مساعدتي؟' },
  { id: 40, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Wo ist die Toilette?', pronunciation: 'فو إست دي تواليتها', arabic: 'أين الحمام؟' },
  { id: 41, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Wie viel kostet das?', pronunciation: 'في فيل كوستت داس', arabic: 'كم الثمن؟' },
  { id: 42, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Langsam, bitte', pronunciation: 'لانغسام بته', arabic: 'ببطء لو سمحت' },
  { id: 43, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Moment, bitte', pronunciation: 'مومنت بته', arabic: 'لحظة لو سمحت' },
  { id: 44, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Stört es Sie?', pronunciation: 'شتورت إس زي', arabic: 'هل يزعجك ذلك؟' },
  { id: 45, categoryNum: 6, categoryTitle: 'المساعدة والاستفسارات', german: 'Darf ich?', pronunciation: 'دارف إش', arabic: 'هل لي بـ...؟ / هل تسمح لي؟' },

  // القسم السابع: التعبيرات والمشاعر اليومية
  { id: 46, categoryNum: 7, categoryTitle: 'التعبيرات والمشاعر اليومية', german: 'Ich liebe dich', pronunciation: 'إش ليبى ديش', arabic: 'أحبك' },
  { id: 47, categoryNum: 7, categoryTitle: 'التعبيرات والمشاعر اليومية', german: 'Ich bin müde', pronunciation: 'إش بين ميوده', arabic: 'أنا متعب' },
  { id: 48, categoryNum: 7, categoryTitle: 'التعبيرات والمشاعر اليومية', german: 'Ich habe Hunger', pronunciation: 'إش هابه هونغر', arabic: 'أنا جائع' },
  { id: 49, categoryNum: 7, categoryTitle: 'التعبيرات والمشاعر اليومية', german: 'Gesundheit', pronunciation: 'غزوندهايت', arabic: 'يرحمك الله (بعد العطسة)' },
  { id: 50, categoryNum: 7, categoryTitle: 'التعبيرات والمشاعر اليومية', german: 'Gute Besserung', pronunciation: 'غوته بيسرونغ', arabic: 'شفاء عاجل' },

  // القسم الثامن: المناسبات والتهاني
  { id: 51, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Viel Glück', pronunciation: 'فيل غليوك', arabic: 'حظاً سعيداً' },
  { id: 52, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Gute Reise', pronunciation: 'غوته رايزه', arabic: 'رحلة سعيدة' },
  { id: 53, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Guten Appetit', pronunciation: 'غوتن أبيتيت', arabic: 'بالهناء والشفاء' },
  { id: 54, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Prost', pronunciation: 'بروست', arabic: 'في صحتك' },
  { id: 55, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Alles Gute!', pronunciation: 'أليس غوته', arabic: 'كل التوفيق / كل عام وأنت بخير' },
  { id: 56, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Herzlichen Glückwunsch', pronunciation: 'هيرتسليشن غليوكفونش', arabic: 'تهانينا الحارة / مبروك' },
  { id: 57, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Frohes neues Jahr', pronunciation: 'فروهس نوييس يار', arabic: 'سنة جديدة سعيدة' },
  { id: 58, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Schöne Ferien', pronunciation: 'شينه فيريين', arabic: 'إجازة سعيدة' },
  { id: 59, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Schlaf gut', pronunciation: 'شلاف غوت', arabic: 'نومأ هادئاً' },
  { id: 60, categoryNum: 8, categoryTitle: 'المناسبات والتهاني', german: 'Einsteigen, bitte', pronunciation: 'أينشتايغن بته', arabic: 'تفضلوا بالركوب' }
];

export default function GermanExpressionsPage() {
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

  const filteredData = expressionsData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let lastCategoryNum = null;

  return (
    <div style={{ padding: '15px 15px 40px 15px', color: 'inherit', background: 'transparent' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.5rem; /* تم التصغير من 1.6rem */
          font-weight: 900;
          margin-bottom: 15px;
          color: inherit;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }
        .search-input {
          width: 100%;
          max-width: 400px;
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font-size: 0.88rem; /* تم التصغير من 0.95rem */
          font-weight: 700;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .category-heading {
          text-align: center;
          font-size: 1.0rem; /* تم التصغير من 1.1rem */
          font-weight: 900;
          margin: 30px 0 15px 0;
          color: #00bfff;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
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
          font-size: 0.7rem; /* تم التصغير من 0.75rem */
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
          width: 100%;
          max-width: 400px;
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
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem; /* تم التصغير من 0.65rem */
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
          font-size: 0.78rem; /* تم التصغير من 0.85rem */
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
          font-size: 0.78rem; /* تم التصغير من 0.85rem */
          display: inline-block;
        }
        .speaker-right {
          position: absolute;
          right: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-50deg);
          font-size: 0.78rem; /* تم التصغير من 0.85rem */
          display: inline-block;
        }
        .arabic-word {
          font-size: 1.1rem; /* تم التصغير من 1.2rem */
          font-weight: 900;
          text-align: right;
          display: flex;
          align-items: center;
        }
        .german-word {
          font-size: 1.0rem; /* تم التصغير من 1.1rem */
          font-weight: bold;
          direction: ltr;
          text-align: left;
          display: flex;
          align-items: center;
        }
      `}</style>

      <h1 className="page-title">العبارات اليومية والشائعة</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن عبارة ألمانية أو عربية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item, index) => {
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
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}