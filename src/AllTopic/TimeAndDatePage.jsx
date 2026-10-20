import React, { useState } from 'react';

const timeData = [
  { id: 1, article: 'die', word: 'Zeit', arabic: 'الوقت', pronunciation: 'دي تسايت' },
  { id: 2, article: 'die', word: 'Uhr', arabic: 'الساعة (آلة/توقيت)', pronunciation: 'دي أور' },
  { id: 3, article: 'die', word: 'Stunde', arabic: 'الساعة (مدة)', pronunciation: 'دي شتونده' },
  { id: 4, article: 'die', word: 'Minute', arabic: 'الدقيقة', pronunciation: 'دي مينوته' },
  { id: 5, article: 'die', word: 'Sekunde', arabic: 'الثانية', pronunciation: 'دي زكونده' },
  { id: 6, article: 'der', word: 'Tag', arabic: 'اليوم', pronunciation: 'دِر تاغ' },
  { id: 7, article: 'die', word: 'Woche', arabic: 'الأسبوع', pronunciation: 'دي فوخه' },
  { id: 8, article: 'der', word: 'Monat', arabic: 'الشهر', pronunciation: 'دِر مونات' },
  { id: 9, article: 'das', word: 'Jahr', arabic: 'السنة', pronunciation: 'داس يار' },
  { id: 10, article: 'das', word: 'Jahrzehnt', arabic: 'العقد (10 سنوات)', pronunciation: 'داس يارتسينت' },
  { id: 11, article: 'das', word: 'Jahrhundert', arabic: 'القرن (100 سنة)', pronunciation: 'داس يارهوندرت' },
  { id: 12, article: 'der', word: 'Morgen', arabic: 'الصباح', pronunciation: 'دِر مورغن' },
  { id: 13, article: 'der', word: 'Vormittag', arabic: 'قبل الظهر', pronunciation: 'دِر فورميتاغ' },
  { id: 14, article: 'der', word: 'Mittag', arabic: 'الظهر', pronunciation: 'دِر ميتاغ' },
  { id: 15, article: 'der', word: 'Nachmittag', arabic: 'بعد الظهر', pronunciation: 'دِر ناخميتاغ' },
  { id: 16, article: 'der', word: 'Abend', arabic: 'المساء', pronunciation: 'دِر آبند' },
  { id: 17, article: 'die', word: 'Nacht', arabic: 'الليل', pronunciation: 'دي ناخت' },
  { id: 18, article: 'die', word: 'Mitternacht', arabic: 'منتصف الليل', pronunciation: 'دي ميترناخت' },
  { id: 19, article: '', word: 'heute', arabic: 'اليوم', pronunciation: 'هوته' },
  { id: 20, article: '', word: 'morgen', arabic: 'غداً', pronunciation: 'مورغن' },
  { id: 21, article: '', word: 'gestern', arabic: 'أمس', pronunciation: 'غيسترن' },
  { id: 22, article: '', word: 'vorgestern', arabic: 'أول أمس', pronunciation: 'فورغيسترن' },
  { id: 23, article: '', word: 'übermorgen', arabic: 'بعد الغد', pronunciation: 'إيوبرمورغن' },
  { id: 24, article: '', word: 'jetzt', arabic: 'الآن', pronunciation: 'ييتست' },
  { id: 25, article: '', word: 'später', arabic: 'لاحقاً', pronunciation: 'شبيتر' },
  { id: 26, article: '', word: 'früh', arabic: 'مبكراً', pronunciation: 'فروش' },
  { id: 27, article: '', word: 'spät', arabic: 'متأخراً', pronunciation: 'شبيت' },
  { id: 28, article: '', word: 'immer', arabic: 'دائماً', pronunciation: 'إمر' },
  { id: 29, article: '', word: 'oft', arabic: 'غالباً', pronunciation: 'أوفت' },
  { id: 30, article: '', word: 'manchmal', arabic: 'أحياناً', pronunciation: 'مانشمال' },
  { id: 31, article: '', word: 'selten', arabic: 'نادراً', pronunciation: 'زيلتن' },
  { id: 32, article: '', word: 'nie', arabic: 'أبداً', pronunciation: 'ني' },
  { id: 33, article: '', word: 'täglich', arabic: 'يومياً', pronunciation: 'تيغليش' },
  { id: 34, article: '', word: 'wöchentlich', arabic: 'أسبوعياً', pronunciation: 'فوخنتليش' },
  { id: 35, article: '', word: 'monatlich', arabic: 'شهرياً', pronunciation: 'موناتليش' },
  { id: 36, article: '', word: 'jährlich', arabic: 'سنوياً', pronunciation: 'ييرليش' },
  { id: 37, article: 'das', word: 'Wochenende', arabic: 'نهاية الأسبوع', pronunciation: 'داس فوخينإنده' },
  { id: 38, article: 'der', word: 'Urlaub', arabic: 'العطلة / الإجازة', pronunciation: 'دِر أورلاوب' },
  { id: 39, article: 'die', word: 'Ferien', arabic: 'العطلة المدرسية', pronunciation: 'دي فيرين' },
  { id: 40, article: 'der', word: 'Termin', arabic: 'الموعد', pronunciation: 'دِر ترمين' },
  { id: 41, article: 'die', word: 'Pause', arabic: 'الاستراحة', pronunciation: 'دي باوزه' },
  { id: 42, article: 'die', word: 'Zukunft', arabic: 'المستقبل', pronunciation: 'دي تسوكونفت' },
  { id: 43, article: 'die', word: 'Gegenwart', arabic: 'الحاضر', pronunciation: 'دي غيغنفارت' },
  { id: 44, article: '', word: 'pünktlich', arabic: 'في الموعد تماماً', pronunciation: 'بيونكتليش' },
  { id: 45, article: 'die', word: 'Verspätung', arabic: 'التأخير', pronunciation: 'دي فيرشبيتونغ' },
  { id: 46, article: 'die', word: 'Dauer', arabic: 'المدة الزمنية', pronunciation: 'دي داور' },
  { id: 47, article: 'der', word: 'Moment', arabic: 'اللحظة', pronunciation: 'دِر مومنت' },
  { id: 48, article: 'die', word: 'Frist', arabic: 'الموعد النهائي / المهلة', pronunciation: 'دي فريست' },
  { id: 49, article: 'die', word: 'Halbstunde', arabic: 'نصف الساعة', pronunciation: 'دي هالبشتونده' },
  { id: 50, article: 'das', word: 'Viertelstunde', arabic: 'ربع الساعة', pronunciation: 'داس فيرتلشتونده' },
  { id: 51, article: '', word: 'sofort', arabic: 'فوراً / على الفور', pronunciation: 'زوفورت' },
  { id: 52, article: '', word: 'gleich', arabic: 'بعد قليل / فوراً', pronunciation: 'غلايخ' },
  { id: 53, article: '', word: 'damals', arabic: 'في ذلك الوقت / قديماً', pronunciation: 'دامالس' },
  { id: 54, article: '', word: 'demnächst', arabic: 'قريباً', pronunciation: 'ديمنيشت' },
  { id: 55, article: '', word: 'zuerst', arabic: 'أولاً / في البداية', pronunciation: 'تسويرست' },
  { id: 56, article: '', word: 'schließlich', arabic: 'أخيراً / في النهاية', pronunciation: 'شليشليش' },
  { id: 57, article: 'der', word: 'Feierabend', arabic: 'وقت انتهاء العمل', pronunciation: 'دِر فايرآبند' },
  { id: 58, article: 'der', word: 'Feiertag', arabic: 'العطلة الرسمية', pronunciation: 'دِر فايرتاغ' },
  { id: 59, article: 'der', word: 'Werktag', arabic: 'يوم عمل', pronunciation: 'دِر فيركتاغ' },
  { id: 60, article: 'die', word: 'Uhrzeit', arabic: 'التوقيت / الساعة كم', pronunciation: 'دي أورتسايت' },
  { id: 61, article: 'die', word: 'Zeitverschiebung', arabic: 'فارق التوقيت', pronunciation: 'دي تسايت فيرشيبونغ' },
  { id: 62, article: 'die', word: 'Pünktlichkeit', arabic: 'الانضباط بالمواعيد', pronunciation: 'دي بيونكتليش كايت' },
  { id: 63, article: '', word: 'inzwischen', arabic: 'في هذه الأثناء', pronunciation: 'إن تسفيشين' },
  { id: 64, article: '', word: 'mittlerweile', arabic: 'في الوقت الحالي', pronunciation: 'ميتلرفايله' },
  { id: 65, article: '', word: 'vorhin', arabic: 'قبل قليل', pronunciation: 'فورهين' },
  { id: 66, article: '', word: 'nachher', arabic: 'بعد قليل / فيما بعد', pronunciation: 'ناخهير' },
  { id: 67, article: '', word: 'ab und zu', arabic: 'من حين لآخر', pronunciation: 'آب أوند تسو' },
  { id: 68, article: '', word: 'heutzutage', arabic: 'في هذه الأيام', pronunciation: 'هويتسوتّاغه' },
  { id: 69, article: '', word: 'kürzlich', arabic: 'مؤخراً / حديثاً', pronunciation: 'كيورتسليش' },
  { id: 70, article: '', word: 'bald', arabic: 'قريباً جداً', pronunciation: 'بالد' },
  { id: 71, article: '', word: 'dauernd', arabic: 'بشكل مستمر', pronunciation: 'داورند' },
  { id: 72, article: 'das', word: 'Zeitalter', arabic: 'العصر / الحقبة الزمنية', pronunciation: 'داس تسايتالتر' },
  { id: 73, article: 'der', word: 'Zeitraum', arabic: 'الفترة الزمنية', pronunciation: 'دِر تسايتراوم' },
  { id: 74, article: 'der', word: 'Zeitpunkt', arabic: 'النقطة الزمنية / اللحظة المحددة', pronunciation: 'دِر تسايتپونكت' },
  { id: 75, article: 'die', word: 'Epoche', arabic: 'العصر / الحقبة التاريخية', pronunciation: 'دي إپوخه' },
  { id: 76, article: 'die', word: 'Frühschicht', arabic: 'وردية الصباح (الشفت الصباحي)', pronunciation: 'دي فرويشيشت' },
  { id: 77, article: 'die', word: 'Spätschicht', arabic: 'وردية المساء (الشفت المسائي)', pronunciation: 'دي شبيتشيشت' },
  { id: 78, article: 'die', word: 'Nachtschicht', arabic: 'وردية الليل (الشفت ليلي)', pronunciation: 'دي ناختشيشت' },
  { id: 79, article: '', word: 'stündlich', arabic: 'كل ساعة / بالساعة', pronunciation: 'شتوندليش' },
  { id: 80, article: '', word: 'rechtzeitig', arabic: 'في الوقت المناسب / قبل فوات الأوان', pronunciation: 'ريشتتسايتيش' },
  { id: 81, article: '', word: 'vorübergehend', arabic: 'مؤقتاً / بشكل مؤقت', pronunciation: 'فورويبرغيهيند' },
  { id: 82, article: '', word: 'gleichzeitig', arabic: 'في نفس الوقت / بالتزامن', pronunciation: 'غلايشتسايتيش' },
  { id: 83, article: '', word: 'gelegentlich', arabic: 'منين لآخر / عند المناسبة', pronunciation: 'غيليغنتليش' },
  { id: 84, article: '', word: 'bisher', arabic: 'حتى الآن / إلى هذا الحين', pronunciation: 'بيسهير' },
  { id: 85, article: '', word: 'seither', arabic: 'منذ ذلك الحين', pronunciation: 'زايتهير' },
  { id: 86, article: '', word: 'demnächst', arabic: 'في الأيام القادمة', pronunciation: 'ديمنيشت' },
  { id: 87, article: '', word: 'zukünftig', arabic: 'في المستقبل', pronunciation: 'تسوكونفتيش' },
  { id: 88, article: '', word: 'vergangenen', arabic: 'الماضي / المنصرم', pronunciation: 'فيرغانغينين' },
  { id: 89, article: '', word: 'kommenden', arabic: 'القادم / المقابل', pronunciation: 'كوميندين' },
  { id: 90, article: '', word: 'lebenslang', arabic: 'مدى الحياة', pronunciation: 'ليبينسلانغ' }
];

export default function TimeAndSchedulePage() {
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

  const filteredData = timeData.filter((item) => {
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

      <h1 className="page-title">الزمان والمواعيد ⏰</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن وقت، يوم، أو كلمة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item) => {
          const fullGerman = item.article ? `${item.article} ${item.word}` : item.word;
          return (
            <div
              key={item.id}
              className="vocab-card"
              onClick={() => speakGerman(fullGerman)}
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
                <div className="german-word">{renderColoredGermanWord(item)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}