import React, { useState } from 'react';

export default function MeinKoerperApp() {
  const [currentMode, setCurrentMode] = useState('word');

  const bodyData = [
    {
      categoryTitle: "Mein Körper (أعضاء الجسم)",
      sections: [
        {
          type: "der",
          title: "المذكر (Maskulin)",
          article: "der",
          pronoun: "mein",
          items: [
            { de: "Finger", ar: "إصبع", img: "https://images.akhbarelyom.com/UP/20220511150149402.jpg", speakWith: "der Finger" },
            { de: "Mund", ar: "فم", img: "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-mouth-teeth-human-organs-image_1440716.jpg", speakWith: "der Mund" },
            { de: "Zahn", ar: "سن / ضرس", img: "https://png.pngtree.com/png-vector/20240910/ourlarge/pngtree-cute-happy-tooth-3d-dentist-strong-healthy-teeth-png-image_13803217.png", speakWith: "der Zahn" },
            { de: "Zeh", ar: "إصبع القدم", img: "https://www.shutterstock.com/image-vector/foot-thumb-cartoon-vector-toe-260nw-1278011215.jpg", speakWith: "der Zeh" },
            { de: "Arm", ar: "ذراع", img: "https://png.pngtree.com/png-vector/20240309/ourlarge/pngtree-sticker-of-a-flexing-strong-arm-cartoon-png-image_11911722.png", speakWith: "der Arm" },
            { de: "Bauch", ar: "بطن", img: "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/623368746_772423072551326_4920102729116029024_n.jpg?stp=dst-jpg_tt6&cstp=mx735x713&ctp=s735x713&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PwZyiQ4-2u4Q7kNvwGtH89a&_nc_oc=Adq-f3PewutCRSHGto7PbBglpV0ViAmnXRKmcv04FVcbQ4lJCFlGGTJjhMWOfxPJopQ&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=tpgiUEh9z7eM6ysIm9a5EA&_nc_ss=7d2a8&oh=00_AQF8fkDfCAQ_Mz2r6-hB3jtBNzon5vEFlLr-lWQ1fmASHQ&oe=6A958DDF", speakWith: "der Bauch" },
            { de: "Hals", ar: "رقبة", img: "https://png.pngtree.com/png-vector/20191123/ourmid/pngtree-neck-plastic-correction-icon-cartoon-style-png-image_2007449.jpg", speakWith: "der Hals" },
            { de: "Kopf", ar: "رأس", img: "https://png.pngtree.com/png-vector/20191122/ourlarge/pngtree-a-long-neck-vector-or-color-illustration-png-image_2017474.jpg", speakWith: "der Kopf" },
            { de: "Fuß", ar: "قدم", img: "https://png.pngtree.com/recommend-works/png-clipart/20250101/ourlarge/pngtree-five-fingers-on-the-soles-of-both-feet-png-image_14982373.png", speakWith: "der Fuß" },
            { de: "Rücken", ar: "ظهر", img: "https://columbiaclinic.us/wp-content/uploads/2020/05/unnamed-file-1-1-768x576.jpg", speakWith: "der Rücken" }
          ]
        },
        {
          type: "das",
          title: "المحايد (Neutral)",
          article: "das",
          pronoun: "mein",
          items: [
            { de: "Auge", ar: "عين", img: "https://png.pngtree.com/png-vector/20240124/ourlarge/pngtree-cartoon-eyes-free-png-png-image_11482599.png", speakWith: "das Auge" },
            { de: "Haar", ar: "شعرة", img: "https://thumbs.dreamstime.com/b/single-human-hair-strand-growing-follicle-skin-layer-d-471552710.jpg?w=992", speakWith: "das Haar" },
            { de: "Ohr", ar: "أذن", img: "https://cdn.prod.website-files.com/639994c60c9babedd27b9981/67ac74c34ff82573acbf0501_Causes%20of%20Hearing%20Loss%20in%20One%20Ear.jpg", speakWith: "das Ohr" },
            { de: "Bein", ar: "ساق", img: "https://i.pinimg.com/736x/68/7d/30/687d30dccea8c3f51f85ea0093dd90ea.jpg", speakWith: "das Bein" },
            { de: "Gesicht", ar: "وجه", img: "https://png.pngtree.com/png-vector/20240624/ourlarge/pngtree-a-cartoon-girl-face-png-image_12840717.png", speakWith: "das Gesicht" }
          ]
        },
        {
          type: "die",
          title: "المؤنث (Feminin)",
          article: "die",
          pronoun: "meine",
          items: [
            { de: "Hand", ar: "يد", img: "https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-cartoon-of-a-cute-hand-png-image_12740911.png", speakWith: "die Hand" },
            { de: "Nase", ar: "أنف", img: "https://png.pngtree.com/png-vector/20240621/ourlarge/pngtree-a-cartoon-nose-with-an-exaggeratedly-large-size-featuring-comical-and-png-image_12751007.png", speakWith: "die Nase" },
            { de: "Brust", ar: "صدر", img: "https://img.magnific.com/premium-vector/human-chest-muscles_1162360-11493.jpg?w=1060", speakWith: "die Brust" }
          ]
        },
        {
          type: "plural",
          title: "الجمع (Plural)",
          article: "die (Pl.)",
          pronoun: "meine",
          items: [
            { de: "Haare", ar: "شعر", img: "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cartoon-red-scorpion-head-image_1234217.jpg", speakWith: "die Haare" },
            { de: "Zähne", ar: "أسنان", img: "https://vid.alarabiya.net/images/2016/11/07/460c0ca7-ae3c-4425-916c-f4c94ee85601/460c0ca7-ae3c-4425-916c-f4c94ee85601_16x9_1200x676.jpg?width=1120", speakWith: "die Zähne" }
          ]
        }
      ]
    }
  ];

  const verbsColumns = [
    [
      { de: "spielen", ar: "يلعب" },
      { de: "schlafen", ar: "ينام" },
      { de: "können", ar: "يستطيع" },
      { de: "bleiben", ar: "يمكث / يبقى" }
    ],
    [
      { de: "tanzen", ar: "يرقص" },
      { de: "schmecken", ar: "له مذاق" },
      { de: "lesen", ar: "يقرأ" },
      { de: "essen", ar: "يأكل" }
    ],
    [
      { de: "trinken", ar: "يشرب" },
      { de: "schreiben", ar: "يكتب" },
      { de: "malen", ar: "يلون" },
      { de: "fernsehen", ar: "يشاهد التلفاز" }
    ],
    [
      { de: "turnen", ar: "يلعب جمباز" },
      { de: "singen", ar: "يغني" },
      { de: "möchten", ar: "يود" },
      { de: "haben", ar: "يملك / عنده" },
      { de: "rechnen", ar: "يحسب" }
    ]
  ];

  const questionsData = [
    { de: "Wie geht es?", ar: "أزيك؟ / كيف حالك؟" },
    { de: "Warum?", ar: "لماذا؟" }
  ];

  const warumQuestionsData = [
    { de: "Warum kannst du nicht spielen?", ar: "لماذا لا تستطيع اللعب؟", answerDe: "Mein Bein tut so weh.", answerAr: "لأن ساقي تؤلمني." },
    { de: "Warum kannst du nicht schreiben?", ar: "لماذا لا تستطيع الكتابة؟", answerDe: "Meine Hand tut so weh.", answerAr: "لأن يدي تؤلمني." },
    { de: "Warum kannst du nicht essen?", ar: "لماذا لا تستطيع الأكل؟", answerDe: "Mein Bauch tut so weh.", answerAr: "لأن بطني يؤلمني." },
    { de: "Warum kannst du nicht trinken?", ar: "لماذا لا تستطيع الشرب؟", answerDe: "Mein Hals tut so weh.", answerAr: "لأن زوري يؤلمني." },
    { de: "Warum kannst du nicht singen?", ar: "لماذا لا تستطيع الغناء؟", answerDe: "Mein Hals tut so weh.", answerAr: "لأن زوري يؤلمني." },
    { de: "Warum kannst du nicht lernen?", ar: "لماذا لا تستطيع المذاكرة؟", answerDe: "Mein Kopf tut so weh.", answerAr: "لأن رأسي يؤلمني." },
    { de: "Warum kannst du nicht laufen?", ar: "لماذا لا تستطيع الجري؟", answerDe: "Mein Fuß tut so weh.", answerAr: "لأن قدمي تؤلمني." },
    { de: "Warum kannst du nicht gut sehen?", ar: "لماذا لا تستطيع الرؤية جيدا؟", answerDe: "Mein Auge tut so weh.", answerAr: "لأن عيني تؤلمني." }
  ];

  const sentencesData = [
    { de: "Mein Bein tut so weh. Ich kann nicht spielen.", ar: "ساقي تؤلمني هكذا. لا أستطيع اللعب." },
    { de: "Meine Hand tut so weh. Ich kann nicht schreiben.", ar: "يدي تؤلمني هكذا. لا أستطيع الكتابة." },
    { de: "Mein Bauch tut so weh. Ich kann nicht essen.", ar: "بطني يؤلمني هكذا. لا أستطيع الأكل." },
    { de: "Mein Hals tut so weh. Ich kann nicht singen.", ar: "زوري يؤلمني هكذا. لا أستطيع الغناء." }
  ];

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('متصفحك لا يدعم نطق الصوت.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleCardClick = (fullText, pureWord, e) => {
    let textToSpeak = (currentMode === 'article') ? fullText : pureWord;
    speakText(textToSpeak);

    const card = e.currentTarget;
    if (card) {
      card.classList.add('speaking');
      setTimeout(() => {
        if (card) card.classList.remove('speaking');
      }, 800);
    }
  };

  return (
    <div style={{ direction: 'rtl' }} className="app-container">
      <style>{`
        :root {
          --primary-der: #38bdf8;
          --primary-das: #4ade80;
          --primary-die: #f472b6;
          --primary-plural: #fb923c;
          --primary-verb: #a78bfa;
          --primary-pembe: #ff758c;
          --text-main: inherit;
          --text-sub: rgba(148, 163, 184, 0.85);
          --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
          /* تقلي ووضوح البوردر (زيادة الشفافية والوضوح ليعمل بكفاءة مع الداركت واللايت مود) */
          --border-strong: rgba(148, 163, 184, 0.55);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        div {
          border-radius: 30px 6px;
        }

        body {
          font-family: 'Fredoka', 'Tajawal', sans-serif;
          background: transparent;
          min-height: 100vh;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .top-bar {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          padding: 0.8rem 1rem;
          background: transparent;
          border: 2px solid var(--border-strong);
          box-shadow: var(--shadow);
          text-align: center;
          gap: 0.3rem;
          border-radius: 30px 6px;
        }

        .top-bar .title-main {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-der);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .clickable-text {
          cursor: pointer;
          user-select: none;
        }

        .header-subtext {
          text-align: center;
          margin-bottom: 1rem;
          width: 100%;
          max-width: 1000px;
        }

        .header-subtext p {
          font-size: 0.9rem;
          color: var(--text-sub);
          font-family: 'Tajawal', sans-serif;
        }

        .controls-container {
          background: transparent;
          border: 2px solid var(--border-strong);
          padding: 0.7rem 0.9rem;
          box-shadow: var(--shadow);
          margin-bottom: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
          max-width: 900px;
          width: 100%;
          border-radius: 30px 6px;
        }

        .mode-title {
          font-family: 'Tajawal', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .mode-buttons-wrapper {
          display: flex;
          gap: 0.6rem;
          width: 100%;
          justify-content: center;
        }

        .mode-btn {
          flex: 1;
          background-color: transparent;
          color: var(--text-sub);
          border: 2px solid var(--border-strong);
          padding: 0.5rem 0.5rem;
          font-size: 0.85rem;
          font-family: 'Tajawal', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          border-radius: 30px 6px;
        }

        .mode-btn.active {
          background-color: var(--primary-der);
          color: #0f172a;
          border-color: var(--primary-der);
          box-shadow: 0 4px 14px rgba(56, 189, 248, 0.3);
        }

        .section-container {
          width: 100%;
          max-width: 1100px;
          margin-bottom: 1.8rem;
        }

        .category-header-banner {
          display: inline-flex;
          background: transparent;
          border: 2px solid var(--border-strong);
          padding: 0.5rem 1rem;
          margin: 1.2rem auto 1rem auto;
          box-shadow: var(--shadow);
          border-radius: 30px 6px;
          text-align: center;
        }

        .category-wrapper-center {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .category-header-banner h1 {
          font-size: 1.1rem;
          color: var(--primary-pembe);
          font-family: 'Fredoka', 'Tajawal', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
          margin-bottom: 0.8rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid var(--border-strong);
          direction: rtl;
        }

        .section-header.der { color: var(--primary-der); }
        .section-header.das { color: var(--primary-das); }
        .section-header.die { color: var(--primary-die); }
        .section-header.plural { color: var(--primary-plural); }
        .section-header.verben { color: var(--primary-verb); }
        .section-header.warum { color: var(--primary-pembe); }

        .section-header h2 {
          font-size: 1rem;
          font-family: 'Tajawal', sans-serif;
          font-weight: 600;
        }

        .section-badge {
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          color: #0f172a;
          cursor: pointer;
          direction: ltr;
          display: inline-flex;
          gap: 0.3rem;
          align-items: center;
          border-radius: 30px 6px;
        }

        .badge-der { background-color: var(--primary-der); }
        .badge-das { background-color: var(--primary-das); }
        .badge-die { background-color: var(--primary-die); }
        .badge-plural { background-color: var(--primary-plural); }
        .badge-verben { background-color: var(--primary-verb); }
        .badge-pembe { background-color: var(--primary-pembe); }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          direction: ltr;
        }

        @media (min-width: 640px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 900px) {
          .grid { grid-template-columns: repeat(4, 1fr); }
        }

        .card {
          background: transparent;
          padding: 0.8rem 0.6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow);
          cursor: pointer;
          position: relative;
          transition: all 0.25s ease;
          border: 2px solid var(--border-strong);
          user-select: none;
          overflow: hidden;
          direction: rtl;
          border-radius: 30px 6px;
        }

        .card:active { transform: scale(0.96); }

        .card.der-card:hover { border-color: var(--primary-der); }
        .card.das-card:hover { border-color: var(--primary-das); }
        .card.die-card:hover { border-color: var(--primary-die); }
        .card.plural-card:hover { border-color: var(--primary-plural); }

        .card.speaking {
          animation: pulse 0.8s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.04); }
        }

        .top-badges-container {
          position: absolute;
          top: 6px;
          left: 6px;
          right: 6px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          z-index: 2;
          direction: ltr;
        }

        .article-tag {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 6px;
          color: #0f172a;
          display: inline-flex;
          gap: 4px;
          align-items: center;
          border-radius: 30px 6px;
        }

        .tag-der { background-color: var(--primary-der); }
        .tag-das { background-color: var(--primary-das); }
        .tag-die { background-color: var(--primary-die); }
        .tag-plural { background-color: var(--primary-plural); color: #fff; }

        .img-box {
          width: 100%;
          aspect-ratio: 1 / 1;
          margin: 0.2rem 0 0.4rem 0;
          overflow: hidden;
          background: transparent;
          border-radius: 30px 6px;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          border-radius: 30px 6px;
        }

        .card:hover .img-box img {
          transform: scale(1.08);
        }

        .words-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 3px;
          direction: ltr;
        }

        .word-title {
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
        }

        .word-arabic {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-sub);
          text-align: right;
          font-family: 'Tajawal', sans-serif;
        }

        .verbs-columns-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0.8rem;
          direction: ltr;
        }

        @media (min-width: 640px) {
          .verbs-columns-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 900px) {
          .verbs-columns-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .verb-column {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .verb-card {
          background: transparent;
          border: 2px solid var(--border-strong);
          padding: 0.7rem 0.9rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow);
          direction: ltr;
          border-radius: 30px 6px;
        }

        .verb-card:hover {
          border-color: var(--primary-verb);
          transform: translateY(-2px);
        }

        .verb-de {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--primary-verb);
          text-align: left;
        }

        .verb-ar {
          font-size: 0.85rem;
          font-weight: 500;
          text-align: right;
          font-family: 'Tajawal', sans-serif;
        }

        .sentences-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          direction: ltr;
        }

        .sentence-card {
          background: transparent;
          border: 2px solid var(--border-strong);
          padding: 0.8rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow);
          border-radius: 30px 6px;
        }

        .sentence-card:hover {
          border-color: var(--primary-der);
        }

        .sentence-de {
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
        }

        .sentence-ar {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-sub);
          text-align: right;
          font-family: 'Tajawal', sans-serif;
        }

        .qa-box {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .qa-answer {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--primary-pembe);
          text-align: left;
          border-top: 1px dashed var(--border-strong);
          padding-top: 0.3rem;
          margin-top: 0.1rem;
        }
      `}</style>

      {/* Top Bar Header */}
      <div className="top-bar">
        <div className="title-main clickable-text" onClick={() => speakText('Mein Körper und Verben')}>
          <i className="fa-solid fa-child"></i> Mein Körper (أعضاء الجسم والأفعال والأسئلة)
        </div>
      </div>

      <div className="header-subtext">
        <p>اضغط على أي عنصر لسماع النطق الصحيح باللغة الألمانية 🇩🇪</p>
      </div>

      {/* Mode Controls */}
      <div className="controls-container">
        <div className="mode-title">اختر طريقة النطق عند الضغط على الكروت:</div>
        <div className="mode-buttons-wrapper">
          <button
            className={`mode-btn ${currentMode === 'word' ? 'active' : ''}`}
            onClick={() => setCurrentMode('word')}
          >
            <i className="fa-solid fa-volume-high"></i> نطق الكلمة فقط
          </button>
          <button
            className={`mode-btn ${currentMode === 'article' ? 'active' : ''}`}
            onClick={() => setCurrentMode('article')}
          >
            <i className="fa-solid fa-rotate"></i> نطق (الكلمة + الأداة)
          </button>
        </div>
      </div>

      {/* CONTAINER FOR SECTIONS */}
      <div id="contentContainer">
        {bodyData.map((cat, catIdx) => (
          <React.Fragment key={catIdx}>
            <div className="category-wrapper-center">
              <div className="category-header-banner">
                <h1><i className="fa-solid fa-heart-pulse"></i> {cat.categoryTitle}</h1>
              </div>
            </div>

            {cat.sections.map((sec, secIdx) => (
              <div className="section-container" key={secIdx}>
                <div className={`section-header ${sec.type}`}>
                  <h2>{sec.title}</h2>
                  <span
                    className={`section-badge badge-${sec.type}`}
                    onClick={() => speakText(sec.article.replace(' (Pl.)', ''))}
                  >
                    <span>{sec.pronoun}</span> | <span>{sec.article}</span>
                  </span>
                </div>

                <div className="grid">
                  {sec.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`card ${sec.type}-card`}
                      onClick={(e) => handleCardClick(item.speakWith, item.de, e)}
                    >
                      <div className="top-badges-container">
                        <span className={`article-tag tag-${sec.type}`}>
                          <span>{sec.pronoun}</span> | <span>{sec.article}</span>
                        </span>
                      </div>

                      <div className="img-box">
                        <img src={item.img} alt={item.de} loading="lazy" />
                      </div>

                      <div className="words-container">
                        <div className="word-title">{item.de}</div>
                        <div className="word-arabic">{item.ar}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}

        {/* الأفعال Verben مرتبة بأعمدة */}
        <div className="section-container">
          <div className="category-wrapper-center">
            <div className="category-header-banner">
              <h1><i className="fa-solid fa-person-running"></i> Verben (الأفعال)</h1>
            </div>
          </div>

          <div className="section-header verben">
            <h2>أفعال هامة</h2>
            <span className="section-badge badge-verben" onClick={() => speakText('Verben')}>
              <span>Wichtige Verben</span>
            </span>
          </div>

          <div className="verbs-columns-grid">
            {verbsColumns.map((column, colIdx) => (
              <div className="verb-column" key={colIdx}>
                {column.map((verb, vIdx) => (
                  <div
                    key={vIdx}
                    className="verb-card"
                    onClick={(e) => {
                      speakText(verb.de);
                      const card = e.currentTarget;
                      if (card) {
                        card.classList.add('speaking');
                        setTimeout(() => { if (card) card.classList.remove('speaking'); }, 800);
                      }
                    }}
                  >
                    <div className="verb-de">{verb.de}</div>
                    <div className="verb-ar">{verb.ar}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* الأسئلة Wie geht es? و Warum? */}
        <div className="section-container">
          <div className="category-wrapper-center">
            <div className="category-header-banner">
              <h1><i className="fa-solid fa-circle-question"></i> Fragen (الأسئلة الأساسية)</h1>
            </div>
          </div>

          <div className="sentences-list">
            {questionsData.map((q, qIdx) => (
              <div
                key={qIdx}
                className="sentence-card"
                onClick={(e) => {
                  speakText(q.de);
                  const card = e.currentTarget;
                  if (card) {
                    card.classList.add('speaking');
                    setTimeout(() => { if (card) card.classList.remove('speaking'); }, 800);
                  }
                }}
              >
                <div className="sentence-de">{q.de}</div>
                <div className="sentence-ar">{q.ar}</div>
              </div>
            ))}
          </div>
        </div>

        {/* الجمل التطبيقية */}
        <div className="section-container">
          <div className="category-wrapper-center">
            <div className="category-header-banner">
              <h1><i className="fa-solid fa-comment-dots"></i> Sätze (الجمل)</h1>
            </div>
          </div>

          <div className="sentences-list">
            {sentencesData.map((s, sIdx) => (
              <div
                key={sIdx}
                className="sentence-card"
                onClick={(e) => {
                  speakText(s.de);
                  const card = e.currentTarget;
                  if (card) {
                    card.classList.add('speaking');
                    setTimeout(() => { if (card) card.classList.remove('speaking'); }, 800);
                  }
                }}
              >
                <div className="sentence-de">{s.de}</div>
                <div className="sentence-ar">{s.ar}</div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم أسئلة لماذا (Warum) والأسباب (في آخر الصفحة) */}
        <div className="section-container">
          <div className="category-wrapper-center">
            <div className="category-header-banner">
              <h1><i className="fa-solid fa-clipboard-question"></i> Warum Fragen (أسئلة لماذا والأسباب)</h1>
            </div>
          </div>

          <div className="section-header warum">
            <h2>لماذا لا تستطيع؟ (الأسباب والردود)</h2>
            <span className="section-badge badge-pembe" onClick={() => speakText('Warum?')}>
              <span>Fragen & Antworten</span>
            </span>
          </div>

          <div className="sentences-list">
            {warumQuestionsData.map((wq, wqIdx) => (
              <div
                key={wqIdx}
                className="sentence-card"
                onClick={(e) => {
                  speakText(`${wq.de}. ${wq.answerDe}`);
                  const card = e.currentTarget;
                  if (card) {
                    card.classList.add('speaking');
                    setTimeout(() => { if (card) card.classList.remove('speaking'); }, 800);
                  }
                }}
              >
                <div className="qa-box">
                  <div className="sentence-de">{wq.de}</div>
                  <div className="sentence-ar">{wq.ar}</div>
                  <div className="qa-answer">💡 {wq.answerDe} ({wq.answerAr})</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}