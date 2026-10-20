import React, { useState } from 'react';

const expressionsData = [
  // 1. التحيات والعبارات اليومية الأساسية
  { id: 1, categoryNum: "1", categoryTitle: "التحيات والتواصل اليومي", german: "Guten Morgen", arabic: "صباح الخير", pronunciation: "غوتن مورغن" },
  { id: 2, categoryNum: "1", categoryTitle: "التحيات والتواصل اليومي", german: "Wie geht’s?", arabic: "كيف حالك؟", pronunciation: "في غيتس؟" },
  { id: 3, categoryNum: "1", categoryTitle: "التحيات والتواصل اليومي", german: "Mir geht’s gut", arabic: "أنا بخير", pronunciation: "مير غيتس غوت" },
  { id: 4, categoryNum: "1", categoryTitle: "التحيات والتواصل اليومي", german: "Dankeschön", arabic: "شكراً جزيلاً", pronunciation: "دانكِشون" },
  { id: 5, categoryNum: "1", categoryTitle: "التحيات والتواصل اليومي", german: "Kein Problem", arabic: "لا مشكلة", pronunciation: "كاين بروبليم" },
  { id: 6, categoryNum: "1", categoryTitle: "التحيات والتواصل اليومي", german: "Alles klar", arabic: "كل شيء تمام / حسناً", pronunciation: "أليس كلار" },

  // 2. التعبير عن الحالات والمشاعر
  { id: 7, categoryNum: "2", categoryTitle: "التعبير عن الحالات والمشاعر", german: "Ich weiß nicht", arabic: "لا أعرف", pronunciation: "إش فايس نيشت" },
  { id: 8, categoryNum: "2", categoryTitle: "التعبير عن الحالات والمشاعر", german: "Kein Stress", arabic: "لا داعي للقلق / بدون توتر", pronunciation: "كاين شتريس" },
  { id: 9, categoryNum: "2", categoryTitle: "التعبير عن الحالات والمشاعر", german: "Kein Geld", arabic: "لا يوجد مال", pronunciation: "كاين غيلد" },
  { id: 10, categoryNum: "2", categoryTitle: "التعبير عن الحالات والمشاعر", german: "Ich habe Hunger", arabic: "أنا جائع", pronunciation: "إش هابه هونغر" },
  { id: 11, categoryNum: "2", categoryTitle: "التعبير عن الحالات والمشاعر", german: "Ich habe Durst", arabic: "أنا عطشان", pronunciation: "إش هابه دورست" },
  { id: 12, categoryNum: "2", categoryTitle: "التعبير عن الحالات والمشاعر", german: "Ich bin müde", arabic: "أنا متعب", pronunciation: "إش بين ميوده" },

  // 3. الفهم والأسئلة والتنقل
  { id: 13, categoryNum: "3", categoryTitle: "الفهم والأسئلة والتنقل", german: "Ich bin glücklich", arabic: "أنا سعيد", pronunciation: "إش بين غلوكليش" },
  { id: 14, categoryNum: "3", categoryTitle: "الفهم والأسئلة والتنقل", german: "Ich verstehe", arabic: "أنا أفهم", pronunciation: "إش فيرشتيهه" },
  { id: 15, categoryNum: "3", categoryTitle: "الفهم والأسئلة والتنقل", german: "Ich verstehe nicht", arabic: "أنا لا أفهم", pronunciation: "إش فيرشتيهه نيشت" },
  { id: 16, categoryNum: "3", categoryTitle: "الفهم والأسئلة والتنقل", german: "Wo bist du?", arabic: "أين أنت؟", pronunciation: "فو بيست دو؟" },
  { id: 17, categoryNum: "3", categoryTitle: "الفهم والأسئلة والتنقل", german: "Was machst du?", arabic: "ماذا تفعل؟", pronunciation: "فاس ماخت دو؟" },
  { id: 18, categoryNum: "3", categoryTitle: "الفهم والأسئلة والتنقل", german: "Ich komme gleich", arabic: "سأأتي قريباً / أنا قادم فوراً", pronunciation: "إش كومه غلايش" },

  // 4. التنبيهات والتعبير عن الرأي
  { id: 19, categoryNum: "4", categoryTitle: "التنبيهات والتعبير عن الرأي", german: "Pass auf", arabic: "انتبه", pronunciation: "باس أوف" },
  { id: 20, categoryNum: "4", categoryTitle: "التنبيهات والتعبير عن الرأي", german: "Mach schnell", arabic: "أسرع", pronunciation: "ماخ شنيل" },
  { id: 21, categoryNum: "4", categoryTitle: "التنبيهات والتعبير عن الرأي", german: "Keine Ahnung", arabic: "لا فكرة لدي / لا أدري", pronunciation: "كاينه آنونغ" },
  { id: 22, categoryNum: "4", categoryTitle: "التنبيهات والتعبير عن الرأي", german: "Sehr gut", arabic: "ممتاز جداً / جيد جداً", pronunciation: "زير غوت" },
  { id: 23, categoryNum: "4", categoryTitle: "التنبيهات والتعبير عن الرأي", german: "Nicht schlecht", arabic: "ليس سيئاً", pronunciation: "نيشت شليخت" },
  { id: 24, categoryNum: "4", categoryTitle: "التنبيهات والتعبير عن الرأي", german: "Ich liebe dich", arabic: "أنا أحبك", pronunciation: "إش ليبِه دِش" },

  // 5. الطقس والوداع
  { id: 25, categoryNum: "5", categoryTitle: "الطقس والوداع", german: "Es ist kalt", arabic: "الطقس بارد", pronunciation: "إس إست كالت" },
  { id: 26, categoryNum: "5", categoryTitle: "الطقس والوداع", german: "Es ist heiß", arabic: "الطقس حار", pronunciation: "إس إست هايس" },
  { id: 27, categoryNum: "5", categoryTitle: "الطقس والوداع", german: "Ich gehe nach Hause", arabic: "أنا ذاهب إلى المنزل", pronunciation: "إش غيهه ناخ هاوزه" },
  { id: 28, categoryNum: "5", categoryTitle: "الطقس والوداع", german: "Gute Nacht", arabic: "تصبح على خير / ليلة سعيدة", pronunciation: "غوته ناخت" },
  { id: 29, categoryNum: "5", categoryTitle: "الطقس والوداع", german: "Bis später", arabic: "أراك لاحقاً", pronunciation: "بيس شبيتر" },
  { id: 30, categoryNum: "5", categoryTitle: "الطقس والوداع", german: "Tschüss", arabic: "مع السلامة / وداعاً", pronunciation: "تشوس" }
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
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: inherit;
        }
        .video-container {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
          width: 100%;
        }
        .video-wrapper {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 9 / 16;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid currentColor;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .video-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
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
          font-size: 0.95rem;
          font-weight: 700;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .category-heading {
          text-align: center;
          font-size: 1.1rem;
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
          font-size: 0.75rem;
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
          font-size: 0.85rem;
          font-weight: 900;
          z-index: 2;
          white-space: nowrap;
          pointer-events: none;
        }
        /* السماعة اليسرى - تم رفعها لأعلى (top: 20%) */
        .speaker-left {
          position: absolute;
          left: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-130deg);
          font-size: 0.85rem;
          display: inline-block;
        }
        /* السماعة اليمنى - تم رفعها لأعلى (top: 20%) */
        .speaker-right {
          position: absolute;
          right: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-50deg);
          font-size: 0.85rem;
          display: inline-block;
        }
        .arabic-word {
          font-size: 1.2rem;
          font-weight: 900;
          text-align: right;
          display: flex;
          align-items: center;
        }
        .german-word {
          font-size: 1.1rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
          display: flex;
          align-items: center;
        }
      `}</style>

      <h1 className="page-title">العبارات اليومية والشائعة</h1>

      {/* مشغل فيديو الأغنية (YouTube Short) في البداية */}
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/jrHrQN2cn38"
            title="Deutsch lernen mit Musik"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

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