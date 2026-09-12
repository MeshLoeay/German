import React, { useState } from 'react';

export default function Lektion4Exercises() {
  const [answers, setAnswers] = useState({});
  const [statuses, setStatuses] = useState({});
  const [speakingWord, setSpeakingWord] = useState(null);

  const speakText = (phrase, id) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;

      setSpeakingWord(id);
      utterance.onend = () => setSpeakingWord(null);
      utterance.onerror = () => setSpeakingWord(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  const gamesData = [
    {
      categoryTitle: "Spiele (الألعاب)",
      items: [
        { de: "Blindekuh", ar: "لعبة البقره العمياء", img: "https://cf.geekdo-images.com/t98ieacqLBN7im-nRjpXzg__imagepage/img/Iy6LmFEBGNevSs03_0KW8yMGrmc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7768099.jpg" },
        { de: "Fußball", ar: "كرة قدم", img: "https://images.stockcake.com/public/6/2/c/62c621ac-e7ae-4a3b-9ed3-51907af8e26d/soccer-ball-detail-stockcake.jpg" },
        { de: "Memory", ar: "لعبة الذاكرة", img: "https://play-lh.googleusercontent.com/vo_L5F5oPzAKAStvI3tGUbhuzZsxxku8RPPOutZhCW6hTyogkqpJkTv6rOw_xve1ssz4LDg6B07KIVP-qQxuiVU=w480-h960-rw" },
        { de: "Domino", ar: "دومينو", img: "https://i.ebayimg.com/images/g/ECgAAeSwPARn82JP/s-l1600.webp" },
        { de: "Würfeln", ar: "لعبة النرد (الزهر)", img: "https://e7.pngegg.com/pngimages/56/672/png-clipart-gurps-customer-service-dice-dice-throw-game-service.png" },
        { de: "Karten", ar: "ورق اللعب (كوتشينة)", img: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/3984431/2.jpg?8057" },
        { de: "Verstecken", ar: "الاستخفاء / الاستغماية", img: "https://media.gemini.media/img/large/2018/3/31/2018_3_31_21_15_30_146.jpg" },
        { de: "Fangen", ar: "لعبة الإمساك / المطاردة", img: "https://img.kwcdn.com/product/fancy/4322e301-6f06-4e11-961a-e52e5794f67f.jpg?imageView2/2/w/800/q/70/format/avif" },
        { de: "Lego", ar: "مكعبات ليجو", img: "https://images-na.ssl-images-amazon.com/images/I/51OLJClSznL._SL500_._AC_SL500_.jpg" },
        { de: "Indianer", ar: "لعبة الهنود الحمر", img: "https://www.asianewslb.com/userfiles/04595.jpg" }
      ]
    },
    {
      categoryTitle: "Hobbys & Aktivitäten (الهوايات والأنشطة)",
      items: [
        { de: "malen", ar: "يلون / يدهن بالفرشاة", img: "https://png.pngtree.com/png-vector/20260111/ourlarge/pngtree-little-artist-at-work-painting-a-colorful-landscape-png-image_18477493.webp" },
        { de: "zeichnen", ar: "يرسم بالقلم", img: "https://i.pinimg.com/736x/e4/2b/f5/e42bf5e292b4ce99dc3a4393ac294856.jpg" },
        { de: "spielen", ar: "يلعب", img: "https://png.pngtree.com/recommend-works/png-clipart/20250118/ourlarge/pngtree-little-boy-playing-football-png-image_15260129.png" },
        { de: "machen", ar: "يفعل", img: "https://images.stockcake.com/public/8/8/6/8863aa9b-57fc-4621-aef4-472b535d496a_large/focused-child-drawing-stockcake.jpg" }
      ]
    }
  ];

  const phrasesData = [
    { de: "Was machst du?", ar: "ماذا تفعل؟ (مفرد)" },
    { de: "Was macht ihr?", ar: "ماذا تفعلون؟ (جمع)" },
    { de: "Komm, wir spielen!", ar: "تعال نلعب!" },
    { de: "Komm, wir malen!", ar: "تعال نلون!" },
    { de: "Komm, wir zeichnen!", ar: "تعال نرسم!" },
    { de: "Wer ist dran?", ar: "مين عليه الدور؟" },
    { de: "Du bist dran.", ar: "أنت عليك الدور." },
    { de: "Ich bin dran.", ar: "أنا عليه الدور." },
    { de: "Darf ich mitspielen?", ar: "تسمح لي ألعاب معاك؟" },
    { de: "Ich habe Vier.", ar: "جبت أربعة." },
    { de: "Du hast sechs.", ar: "جبت ستة." },
    { de: "Also, dann los!", ar: "يالا نبدأ!" },
    { de: "Falsch", ar: "خطأ" },
    { de: "Richtig", ar: "صواب" },
    { de: "Gewonnen!", ar: "فزت!" },
    { de: "So ein Quatsch", ar: "هذا هراء / كلام فارغ" }
  ];

  const wasPasstData = [
    { q: "1. ich - machen - du - ihr", de: "machen" },
    { q: "2. drei - sechs - haben - eins", de: "haben" },
    { q: "3. Was - Karten - Lego - Würfeln", de: "Was" },
    { q: "4. spielen - zeichnen - malen - ja", de: "ja" },
    { q: "5. sechs - Wer - four - two", de: "Wer" },
    { q: "6. Herr - Frau - da - Kind", de: "da" },
    { q: "1. Falsch - kommen - machen - haben", de: "Falsch" },
    { q: "2. Tschus - dran - Auf Wiedersehen - Gute Nacht", de: "dran" },
    { q: "3. ich - du - wir - nein", de: "nein" },
    { q: "4. zwei - los - vier - sechs", de: "los" },
    { q: "5. Lego - Domino - Was - Fangen", de: "Was" },
    { q: "6. Hallo! - Herr - Guten Tag! - Guten Morgen!", de: "Herr" }
  ];

  const bildeSätzeData = [
    { q: "1. Ich - dran - bin.", de: "Ich bin dran" },
    { q: "2. mitspielen - Darf - ich?", de: "Darf ich mitspielen" },
    { q: "3. ihr - Was - spielt?", de: "Was spielt ihr" },
    { q: "4. habe - sechs - Ich.", de: "Ich habe sechs" },
    { q: "1. drei - Ich - habe.", de: "Ich habe drei" },
    { q: "2. spielen - Fußball - Wir.", de: "Wir spielen Fußball" },
    { q: "3. du - heißt - Wie?", de: "Wie heißt du" },
    { q: "4. dran - Bist - du?", de: "Bist du dran" }
  ];

  const cleanText = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .replace(/[^\w\säöüß]/gi, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const handleInputChange = (id, val) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const checkField = (id, correctVal) => {
    const userVal = cleanText(answers[id] || "");
    const correctClean = cleanText(correctVal);

    if (userVal === correctClean && userVal !== "") {
      setStatuses(prev => ({ ...prev, [id]: 'correct' }));
    } else {
      setStatuses(prev => ({ ...prev, [id]: 'wrong' }));
    }
  };

  return (
    <div style={styles.body}>
      <style>{`
        @media (min-width: 640px) {
          .responsive-grid-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 900px) {
          .responsive-grid-cards { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
      <div style={styles.container}>

        {/* Top Bar Header */}
        <div
          style={styles.topBar}
          onClick={() => speakText('Spiele und Hobbys', 'top-bar')}
        >
          <div style={styles.titleMain}>
            <i className="fa-solid fa-puzzle-piece" style={{ color: '#facc15' }}></i> Spiele und Hobbys (اختبار الكلمات والجمل)
          </div>
        </div>

        <div
          style={styles.headerSubtext}
          onClick={() => speakText('وضع التدريب: اكتب الكلام فقط دون الحاجة لأي علامات أو رموز، وبأي حروف', 'subtext')}
        >
          <p>وضع التدريب: اكتب الكلام فقط دون الحاجة لأي علامات أو رموز، وبأي حروف (سمول أو كابيتال) 🇩🇪</p>
        </div>

        {/* GAMES SECTIONS */}
        {gamesData.map((cat, catIndex) => {
          const catHeaderId = `cat-${catIndex}`;
          const isCatSpeaking = speakingWord === catHeaderId;
          return (
            <div key={catIndex} style={styles.sectionContainer}>
              <div
                style={{
                  ...styles.categoryHeaderBanner,
                  borderColor: isCatSpeaking ? '#38bdf8' : '#334155',
                  transform: isCatSpeaking ? 'scale(1.02)' : 'scale(1)',
                }}
                onClick={() => speakText(cat.categoryTitle.split(' ')[0], catHeaderId)}
              >
                <h1 style={styles.categoryBannerH1}>
                  <i className="fa-solid fa-gamepad" style={{ color: '#38bdf8' }}></i> {cat.categoryTitle}
                </h1>
              </div>
              <div style={styles.grid} className="responsive-grid-cards">
                {cat.items.map((item, itemIndex) => {
                  const uniqueId = `game-${catIndex}-${itemIndex}`;
                  const status = statuses[uniqueId];
                  return (
                    <div key={itemIndex} style={styles.card}>
                      <div
                        style={styles.imgBox}
                        onClick={() => speakText(item.de, `img-${uniqueId}`)}
                      >
                        <img src={item.img} alt="تدريب" loading="lazy" style={styles.imgStyle} />
                      </div>
                      <div
                        style={styles.wordArabic}
                        onClick={() => speakText(item.de, `ar-${uniqueId}`)}
                      >
                        {item.ar}
                      </div>
                      <div style={styles.inputGroup}>
                        <input
                          type="text"
                          style={{
                            ...styles.input,
                            ...(status === 'correct' ? styles.correctInput : {}),
                            ...(status === 'wrong' ? styles.wrongInput : {})
                          }}
                          value={answers[uniqueId] || ''}
                          onChange={(e) => handleInputChange(uniqueId, e.target.value)}
                          placeholder="اكتب الكلمة فقط..."
                        />
                        <button
                          style={styles.checkBtn}
                          onClick={() => checkField(uniqueId, item.de)}
                        >
                          فحص
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* PHRASES SECTION */}
        <div style={styles.sectionContainer}>
          {(() => {
            const headerId = 'phrases-header';
            const isSpeaking = speakingWord === headerId;
            return (
              <div
                style={{
                  ...styles.categoryHeaderBanner,
                  borderColor: isSpeaking ? '#38bdf8' : '#334155',
                }}
                onClick={() => speakText('Wichtige Sätze', headerId)}
              >
                <h1 style={styles.categoryBannerH1}>
                  <i className="fa-solid fa-comments" style={{ color: '#38bdf8' }}></i> Wichtige Sätze (اختبار الجمل والتعبيرات)
                </h1>
              </div>
            );
          })()}
          <div style={styles.grid} className="responsive-grid-cards">
            {phrasesData.map((p, pIndex) => {
              const uniqueId = `phrase-${pIndex}`;
              const status = statuses[uniqueId];
              return (
                <div key={pIndex} style={styles.phraseCard}>
                  <div
                    style={styles.phraseAr}
                    onClick={() => speakText(p.de, `spoken-${uniqueId}`)}
                  >
                    {p.ar} <i className="fa-solid fa-volume-high" style={{ color: '#94a3b8', fontSize: '0.9rem', marginRight: '6px', cursor: 'pointer' }}></i>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(status === 'correct' ? styles.correctInput : {}),
                        ...(status === 'wrong' ? styles.wrongInput : {})
                      }}
                      value={answers[uniqueId] || ''}
                      onChange={(e) => handleInputChange(uniqueId, e.target.value)}
                      placeholder="اكتب الجملة بدون علامات..."
                    />
                    <button
                      style={styles.checkBtn}
                      onClick={() => checkField(uniqueId, p.de)}
                    >
                      فحص
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WAS PASST NICHT SECTION */}
        <div style={styles.sectionContainer}>
          {(() => {
            const headerId = 'was-header';
            const isSpeaking = speakingWord === headerId;
            return (
              <div
                style={{
                  ...styles.categoryHeaderBanner,
                  borderColor: isSpeaking ? '#38bdf8' : '#334155',
                }}
                onClick={() => speakText('Was passt nicht', headerId)}
              >
                <h1 style={{ ...styles.categoryBannerH1, color: '#facc15' }}>
                  <i className="fa-solid fa-chalkboard"></i> Was passt nicht? (ما الذي لا ينتمي؟)
                </h1>
              </div>
            );
          })()}
          <div style={styles.grid} className="responsive-grid-cards">
            {wasPasstData.map((item, wIndex) => {
              const uniqueId = `was-${wIndex}`;
              const status = statuses[uniqueId];
              return (
                <div key={wIndex} style={styles.phraseCard}>
                  <div
                    style={{ ...styles.phraseAr, direction: 'ltr', textAlign: 'left' }}
                    onClick={() => speakText(item.de, `spoken-${uniqueId}`)}
                  >
                    {item.q}
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(status === 'correct' ? styles.correctInput : {}),
                        ...(status === 'wrong' ? styles.wrongInput : {})
                      }}
                      value={answers[uniqueId] || ''}
                      onChange={(e) => handleInputChange(uniqueId, e.target.value)}
                      placeholder="اكتب الكلمة الشاذة فقط..."
                    />
                    <button
                      style={styles.checkBtn}
                      onClick={() => checkField(uniqueId, item.de)}
                    >
                      فحص
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BILDE RICHTIGE SÄTZE SECTION */}
        <div style={styles.sectionContainer}>
          {(() => {
            const headerId = 'bilde-header';
            const isSpeaking = speakingWord === headerId;
            return (
              <div
                style={{
                  ...styles.categoryHeaderBanner,
                  borderColor: isSpeaking ? '#38bdf8' : '#334155',
                }}
                onClick={() => speakText('Bilde richtige Sätze', headerId)}
              >
                <h1 style={{ ...styles.categoryBannerH1, color: '#4ade80' }}>
                  <i className="fa-solid fa-pen-nib"></i> Bilde richtige Sätze (كوّن جملاً صحيحة)
                </h1>
              </div>
            );
          })()}
          <div style={styles.grid} className="responsive-grid-cards">
            {bildeSätzeData.map((item, bIndex) => {
              const uniqueId = `bilde-${bIndex}`;
              const status = statuses[uniqueId];
              return (
                <div key={bIndex} style={styles.phraseCard}>
                  <div
                    style={{ ...styles.phraseAr, direction: 'ltr', textAlign: 'left' }}
                    onClick={() => speakText(item.de, `spoken-${uniqueId}`)}
                  >
                    {item.q}
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(status === 'correct' ? styles.correctInput : {}),
                        ...(status === 'wrong' ? styles.wrongInput : {})
                      }}
                      value={answers[uniqueId] || ''}
                      onChange={(e) => handleInputChange(uniqueId, e.target.value)}
                      placeholder="اكتب الجملة الصحيحة بدون علامات..."
                    />
                    <button
                      style={styles.checkBtn}
                      onClick={() => checkField(uniqueId, item.de)}
                    >
                      فحص
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    padding: '1rem 0.75rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Fredoka', 'Tajawal', sans-serif",
  },
  container: {
    width: '100%',
    maxWidth: '1300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    padding: '0.8rem 1rem',
    background: '#1e293b',
    borderRadius: '30px 6px 30px 6px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    border: '1px solid #334155',
    textAlign: 'center',
    gap: '0.6rem',
    cursor: 'pointer',
  },
  titleMain: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#facc15',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    userSelect: 'none',
  },
  headerSubtext: {
    textAlign: 'center',
    marginBottom: '1.2rem',
    width: '100%',
    maxWidth: '1200px',
    fontSize: '0.95rem',
    color: '#94a3b8',
    fontFamily: "'Tajawal', sans-serif",
    cursor: 'pointer',
  },
  sectionContainer: {
    width: '100%',
    maxWidth: '1300px',
    marginBottom: '2rem',
  },
  categoryHeaderBanner: {
    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
    border: '2px solid #334155',
    borderRadius: '30px 6px 30px 6px',
    padding: '0.6rem 1rem',
    margin: '1.2rem 0',
    textAlign: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  },
  categoryBannerH1: {
    fontSize: '1.05rem',
    color: '#38bdf8',
    fontFamily: "'Fredoka', 'Tajawal', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.1rem',
    direction: 'ltr',
  },
  card: {
    background: '#1e293b',
    borderRadius: '30px 6px 30px 6px',
    padding: '1.1rem 0.9rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    border: '2px solid #334155',
    direction: 'rtl',
    transition: 'all 0.25s ease',
  },
  imgBox: {
    width: '100%',
    aspectRatio: '4 / 3',
    margin: '0.3rem 0 0.7rem 0',
    borderRadius: '30px 6px 30px 6px',
    overflow: 'hidden',
    background: '#0f172a',
    cursor: 'pointer',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  wordArabic: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: "'Tajawal', sans-serif",
    marginBottom: '0.8rem',
    cursor: 'pointer',
  },
  inputGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '30px 6px 30px 6px',
    border: '1px solid #334155',
    background: 'rgba(15, 23, 42, 0.85)',
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: "'Fredoka', sans-serif",
  },
  correctInput: {
    borderColor: '#4ade80 !important',
    backgroundColor: 'rgba(74, 222, 128, 0.2) !important',
  },
  wrongInput: {
    borderColor: '#f87171 !important',
    backgroundColor: 'rgba(248, 113, 113, 0.2) !important',
  },
  checkBtn: {
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    border: 'none',
    padding: '6px',
    borderRadius: '30px 6px 30px 6px',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '0.85rem',
    transition: '0.2s',
    fontFamily: "'Tajawal', sans-serif",
  },
  phraseCard: {
    background: '#1e293b',
    border: '2px solid #334155',
    borderRadius: '30px 6px 30px 6px',
    padding: '1.2rem 1.4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '0.8rem',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    direction: 'rtl',
  },
  phraseAr: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: "'Tajawal', sans-serif",
    textAlign: 'right',
    direction: 'ltr',
    cursor: 'pointer',
  },
};