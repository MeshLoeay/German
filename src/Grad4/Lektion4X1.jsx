import React, { useState, useEffect } from 'react';

export default function Lektion4X1() {
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

  return (
    <div style={styles.body}>
      <div style={styles.container}>

        {/* Top Bar Header */}
        <div
          style={styles.topBar}
          onClick={() => speakText('Spiele und Hobbys', 'top-header')}
        >
          <div style={styles.titleMain} className="clickable-text">
            <i className="fa-solid fa-puzzle-piece" style={{ color: '#facc15' }}></i> Spiele und Hobbys (الألعاب والهوايات)
          </div>
        </div>

        <div
          style={styles.headerSubtext}
          onClick={() => speakText('اضغط على أي بطاقة لسماع النطق الصحيح باللغة الألمانية', 'subtext-speak')}
        >
          <p>اضغط على أي بطاقة أو عنوان لسماع النطق الصحيح باللغة الألمانية 🇩🇪</p>
        </div>

        {/* CONTAINER FOR SECTIONS */}
        <div id="contentContainer" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {gamesData.map((cat, catIdx) => {
            const catHeaderId = `cat-header-${catIdx}`;
            const isCatSpeaking = speakingWord === catHeaderId;
            return (
              <div key={catIdx} style={styles.sectionContainer}>
                <div
                  style={{
                    ...styles.categoryHeaderBanner,
                    borderColor: isCatSpeaking ? '#38bdf8' : '#334155',
                    transform: isCatSpeaking ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isCatSpeaking ? '0 0 20px rgba(56, 189, 248, 0.5)' : '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
                  }}
                  onClick={() => speakText(cat.categoryTitle.split(' ')[0], catHeaderId)}
                >
                  <h1 style={styles.categoryBannerH1}>
                    <i className="fa-solid fa-gamepad" style={{ color: '#38bdf8' }}></i> {cat.categoryTitle}
                  </h1>
                </div>
                <div style={styles.grid}>
                  {cat.items.map((item, itemIdx) => {
                    const cardId = `game-${catIdx}-${itemIdx}`;
                    const isSpeaking = speakingWord === cardId;
                    return (
                      <div
                        key={itemIdx}
                        style={{
                          ...styles.card,
                          borderColor: isSpeaking ? '#38bdf8' : '#334155',
                          transform: isSpeaking ? 'scale(1.04)' : 'scale(1)',
                          boxShadow: isSpeaking ? '0 0 20px rgba(56, 189, 248, 0.5)' : '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                        }}
                        onClick={() => speakText(item.de, cardId)}
                      >
                        <div style={styles.imgBox}>
                          <img src={item.img} alt={item.de} loading="lazy" style={styles.imgStyle} />
                        </div>
                        <div style={styles.wordTitle}>{item.de}</div>
                        <div style={styles.wordArabic}>{item.ar}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* PHRASES SECTION */}
        <div style={styles.phrasesContainer}>
          {(() => {
            const phraseHeaderId = 'phrases-category-header';
            const isPhraseHeaderSpeaking = speakingWord === phraseHeaderId;
            return (
              <div
                style={{
                  ...styles.categoryHeaderBanner,
                  borderColor: isPhraseHeaderSpeaking ? '#38bdf8' : '#334155',
                  transform: isPhraseHeaderSpeaking ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isPhraseHeaderSpeaking ? '0 0 20px rgba(56, 189, 248, 0.5)' : '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
                }}
                onClick={() => speakText('Wichtige Sätze', phraseHeaderId)}
              >
                <h1 style={styles.categoryBannerH1}>
                  <i className="fa-solid fa-comments" style={{ color: '#38bdf8' }}></i> Wichtige Sätze (جمل وتعبيرات هامة)
                </h1>
              </div>
            );
          })()}
          <div style={styles.phrasesGrid} id="phrasesContainer">
            {phrasesData.map((p, pIdx) => {
              const phraseId = `phrase-${pIdx}`;
              const isSpeaking = speakingWord === phraseId;
              return (
                <div
                  key={pIdx}
                  style={{
                    ...styles.phraseCard,
                    borderColor: isSpeaking ? '#38bdf8' : '#334155',
                    transform: isSpeaking ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isSpeaking ? '0 0 20px rgba(56, 189, 248, 0.5)' : '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                  }}
                  onClick={() => speakText(p.de, phraseId)}
                >
                  <div style={styles.phraseRow}>
                    <div style={styles.phraseDe}>
                      {p.de} <i className="fa-solid fa-volume-high" style={{ color: '#94a3b8', fontSize: '1rem', marginLeft: '8px' }}></i>
                    </div>
                    <div style={styles.phraseAr}>{p.ar}</div>
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
    maxWidth: '1100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    maxWidth: '1000px',
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
    fontSize: '1.2rem',
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
    maxWidth: '1000px',
    fontSize: '0.95rem',
    color: '#94a3b8',
    fontFamily: "'Tajawal', sans-serif",
    cursor: 'pointer',
  },
  sectionContainer: {
    width: '100%',
    maxWidth: '1100px',
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
    gridTemplateColumns: 'repeat(2, 1fr)',
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
    justifyContent: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.25s ease',
    border: '2px solid #334155',
    userSelect: 'none',
    overflow: 'hidden',
    direction: 'rtl',
  },
  imgBox: {
    width: '100%',
    aspectRatio: '4 / 5',
    margin: '0.3rem 0 0.7rem 0',
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#0f172a',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  wordTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  wordArabic: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#94a3b8',
    textAlign: 'center',
    fontFamily: "'Tajawal', sans-serif",
    marginTop: '3px',
  },
  phrasesContainer: {
    width: '100%',
    maxWidth: '1100px',
    marginTop: '2.5rem',
    marginBottom: '2rem',
  },
  phrasesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    direction: 'ltr',
  },
  phraseCard: {
    background: '#1e293b',
    border: '2px solid #334155',
    borderRadius: '30px 6px 30px 6px',
    padding: '1.2rem 1.4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    cursor: 'pointer',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.25s ease',
    userSelect: 'none',
    direction: 'ltr',
  },
  phraseRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  phraseDe: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#38bdf8',
    display: 'flex',
    alignItems: 'center',
  },
  phraseAr: {
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: "'Tajawal', sans-serif",
    textAlign: 'right',
  },
};