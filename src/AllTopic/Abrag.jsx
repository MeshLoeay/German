import React, { useState } from 'react';

const zodiacData = [
  {
    id: 1,
    german: "der Widder",
    arabic: "برج الحمل",
    date: "21.03 - 20.04",
    pronunciation: "دِر فيدر",
    funnyComment: "دماغه أنشف من الحيطة وبيعافر مع الهواء!"
  },
  {
    id: 2,
    german: "der Stier",
    arabic: "برج الثور",
    date: "21.04 - 20.05",
    pronunciation: "دِر شتير",
    funnyComment: "أهم حاجتين في حياته: الأكل والنوم، وأي حد يزعجه فيهم بياكله 🐮"
  },
  {
    id: 3,
    german: "die Zwillinge",
    arabic: "برج الجوزاء",
    date: "21.05 - 21.06",
    pronunciation: "دي تسڤيلينغه",
    funnyComment: "شخصيتين في شخص واحد.. وأحياناً 5 في نفس الدقيقة!"
  },
  {
    id: 4,
    german: "der Krebs",
    arabic: "برج السرطان",
    date: "22.06 - 22.07",
    pronunciation: "دِر كريبس",
    funnyComment: "حساس وزعلاني وبيعيط لو الهوا جه عليه جامد (عيوطه)"
  },
  {
    id: 5,
    german: "der Löwe",
    arabic: "برج الأسد",
    date: "23.07 - 23.08",
    pronunciation: "دِر لوفه",
    funnyComment: "أنا الأسد أهو 🦁"
  },
  {
    id: 6,
    german: "die Jungfrau",
    arabic: "برج العذراء",
    date: "24.08 - 23.09",
    pronunciation: "دي يونغفراو",
    funnyComment: "مفتش كرومبو البرج.. النظافة والتفتيش على كل حاجة!"
  },
  {
    id: 7,
    german: "die Waage",
    arabic: "برج الميزان",
    date: "24.09 - 23.10",
    pronunciation: "دي فاجِه",
    funnyComment: "مابيعرفش يختار حتى بين الطعمية والفول!"
  },
  {
    id: 8,
    german: "der Skorpion",
    arabic: "برج العقرب",
    date: "24.10 - 22.11",
    pronunciation: "دِر سكوربيون",
    funnyComment: "أكيد دي العقربة اللي بصالي في حياتي 🦂 الهجاصين بتوع الهجايص"
  },
  {
    id: 9,
    german: "der Schütze",
    arabic: "برج القوس",
    date: "23.11 - 21.12",
    pronunciation: "دِر شويتسه",
    funnyComment: "قوس قزح 🌈"
  },
  {
    id: 10,
    german: "der Steinbock",
    arabic: "برج الجدي",
    date: "22.12 - 20.01",
    pronunciation: "دِر شتاينبوك",
    funnyComment: "الجدي والخروف ماااء 🐐"
  },
  {
    id: 11,
    german: "der Wassermann",
    arabic: "برج الدلو",
    date: "21.01 - 19.02",
    pronunciation: "دِر فاسرمان",
    funnyComment: "برج الجردل 🪣 عايش في كوكب تاني لوحده ومقتنع إن البشر كلهم مجانين وهو الوحيد العاقل"
  },
  {
    id: 12,
    german: "die Fische",
    arabic: "برج الحوت",
    date: "20.02 - 20.03",
    pronunciation: "دي فيشه",
    funnyComment: "والله بحبك موت وأحب برج الحوت 🐟❤️ دراما كوين الأبراج.. بيسمع أغنية حزينة ويتخيل إنه البطل اللي اتغدر بيه"
  }
];

export default function GermanZodiacPage() {
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

  const filteredData = zodiacData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.date.includes(searchTerm)
  );

  return (
    <div style={{ padding: '15px 15px 40px 15px', color: 'inherit', background: 'transparent' }}>
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
          margin-bottom: 25px;
        }
        .search-input {
          width: 100%;
          max-width: 400px;
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
        }
        .zodiac-card {
          position: relative;
          width: 100%;
          max-width: 400px;
          border: 2px solid currentColor;
          border-radius: 25px 6px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: inherit;
          background: transparent;
          box-sizing: border-box;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease;
        }
        .zodiac-card:hover {
          border-color: #00bfff;
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
        .zodiac-main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-top: 4px;
        }
        .arabic-word {
          font-size: 1.1rem;
          font-weight: 900;
          text-align: right;
        }
        .german-word {
          font-size: 1.0rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
        }
        .date-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #00bfff;
          text-align: center;
          direction: ltr;
        }
        .funny-comment {
          font-size: 0.8rem;
          line-height: 1.4;
          text-align: center;
          opacity: 0.85;
          margin-top: 4px;
          padding-top: 6px;
          border-top: 1px dashed rgba(255, 255, 255, 0.2);
          white-space: pre-line;
        }
      `}</style>

      <h1 className="page-title">الأبراج بالألمانية 🔮</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن برج أو تاريخ..."
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
            className="zodiac-card"
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

            {/* الصف الرئيسي: البرج بالعربي والألماني */}
            <div className="zodiac-main-row">
              <div className="arabic-word">{item.arabic}</div>
              <div className="german-word">{renderColoredGermanWord(item.german)}</div>
            </div>

            {/* التاريخ */}
            <div className="date-badge">📅 {item.date}</div>

            {/* التعليق الساخر */}
            <div className="funny-comment">{item.funnyComment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}