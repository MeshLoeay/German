import React, { useState } from 'react';

export default function Lektion4Exercises() {
  const [answers, setAnswers] = useState({});
  const [statuses, setStatuses] = useState({});

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
    { q: "3. ihr - What - spielt?", de: "Was spielt ihr" },
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

  const handleInputChange = (key, val) => {
    setAnswers(prev => ({ ...prev, [key]: val }));
  };

  const checkField = (key, correctVal) => {
    const userVal = cleanText(answers[key] || "");
    const correctClean = cleanText(correctVal);

    if (userVal !== "" && userVal === correctClean) {
      setStatuses(prev => ({ ...prev, [key]: 'correct' }));
    } else {
      setStatuses(prev => ({ ...prev, [key]: 'wrong' }));
    }
  };

  return (
    <div dir="rtl" style={{ fontFamily: "'Fredoka', 'Tajawal', sans-serif", backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        @media (min-width: 640px) {
          .responsive-grid-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 900px) {
          .responsive-grid-cards { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
      <div style={{ width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', padding: '1rem 1.2rem', background: '#1e293b', borderRadius: '30px 6px 30px 6px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)', border: '1px solid #334155', textAlign: 'center', gap: '0.6rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#facc15', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🧩 Spiele und Hobbys (اختبار الكلمات والجمل)
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1.2rem', width: '100%', maxWidth: '1000px' }}>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', fontFamily: 'Tajawal, sans-serif' }}>
            وضع التدريب: اكتب الكلام فقط دون الحاجة لأي علامات أو رموز، وبأي حروف (سمول أو كابيتال) 🇩🇪
          </p>
        </div>

        {/* GAMES SECTIONS */}
        {gamesData.map((cat, catIndex) => (
          <div key={`cat-${catIndex}`} style={{ width: '100%', maxWidth: '1100px', marginBottom: '2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '2px solid #334155', borderRadius: '30px 6px 30px 6px', padding: '0.8rem 1.2rem', margin: '1.2rem 0', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}>
              <h1 style={{ fontSize: '1.35rem', color: '#38bdf8', fontFamily: 'Fredoka, Tajawal, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                🎮 {cat.categoryTitle}
              </h1>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.1rem', direction: 'ltr' }} className="responsive-grid-cards">
              {cat.items.map((item, itemIndex) => {
                const uniqueKey = `game_${catIndex}_${itemIndex}`;
                const status = statuses[uniqueKey];
                return (
                  <div key={`item-${itemIndex}`} style={{ background: '#1e293b', borderRadius: '30px 6px 30px 6px', padding: '1.1rem 0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)', border: '2px solid #334155', direction: 'rtl', transition: 'all 0.25s ease' }}>
                    <div style={{ width: '100%', aspectRatio: '4 / 3', margin: '0.3rem 0 0.7rem 0', borderRadius: '20px 4px 20px 4px', overflow: 'hidden', background: '#0f172a' }}>
                      <img src={item.img} alt="تدريب" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', textAlign: 'right', width: '100%', fontFamily: 'Tajawal, sans-serif', marginBottom: '0.8rem' }}>
                      {item.ar}
                    </div>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <input
                        type="text"
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: '10px',
                          border: '1px solid #334155',
                          background: 'rgba(15, 23, 42, 0.85)',
                          color: '#fff',
                          fontSize: '1rem',
                          textAlign: 'center',
                          outline: 'none',
                          fontFamily: 'Fredoka, sans-serif',
                          ...(status === 'correct' ? { borderColor: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.2)' } : {}),
                          ...(status === 'wrong' ? { borderColor: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.2)' } : {})
                        }}
                        value={answers[uniqueKey] || ''}
                        onChange={(e) => handleInputChange(uniqueKey, e.target.value)}
                        placeholder="اكتب الكلمة فقط..."
                      />
                      <button
                        style={{ backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '6px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Tajawal, sans-serif' }}
                        onClick={() => checkField(uniqueKey, item.de)}
                      >
                        فحص
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* PHRASES SECTION */}
        <div style={{ width: '100%', maxWidth: '1100px', marginTop: '2rem', marginBottom: '2rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '2px solid #334155', borderRadius: '30px 6px 30px 6px', padding: '0.8rem 1.2rem', margin: '1.2rem 0', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}>
            <h1 style={{ fontSize: '1.35rem', color: '#38bdf8', fontFamily: 'Fredoka, Tajawal, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
              💬 Wichtige Sätze (اختبار الجمل)
            </h1>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', direction: 'ltr' }} className="responsive-grid-cards">
            {phrasesData.map((p, pIndex) => {
              const uniqueKey = `phrase_${pIndex}`;
              const status = statuses[uniqueKey];
              return (
                <div key={`phrase-${pIndex}`} style={{ background: '#1e293b', border: '2px solid #334155', borderRadius: '30px 6px 30px 6px', padding: '1.2rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)', direction: 'rtl' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', fontFamily: 'Tajawal, sans-serif', textAlign: 'right', direction: 'rtl', width: '100%' }}>
                    {p.ar}
                  </div>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        border: '1px solid #334155',
                        background: 'rgba(15, 23, 42, 0.85)',
                        color: '#fff',
                        fontSize: '1rem',
                        textAlign: 'center',
                        outline: 'none',
                        fontFamily: 'Fredoka, sans-serif',
                        ...(status === 'correct' ? { borderColor: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.2)' } : {}),
                        ...(status === 'wrong' ? { borderColor: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.2)' } : {})
                      }}
                      value={answers[uniqueKey] || ''}
                      onChange={(e) => handleInputChange(uniqueKey, e.target.value)}
                      placeholder="اكتب الجملة..."
                    />
                    <button
                      style={{ backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '6px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Tajawal, sans-serif' }}
                      onClick={() => checkField(uniqueKey, p.de)}
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
        <div style={{ width: '100%', maxWidth: '1100px', marginTop: '2rem', marginBottom: '2rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '2px solid #334155', borderRadius: '30px 6px 30px 6px', padding: '0.8rem 1.2rem', margin: '1.2rem 0', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}>
            <h1 style={{ fontSize: '1.35rem', color: '#facc15', fontFamily: 'Fredoka, Tajawal, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
              📋 Was passt nicht?
            </h1>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', direction: 'ltr' }} className="responsive-grid-cards">
            {wasPasstData.map((item, wIndex) => {
              const uniqueKey = `was_${wIndex}`;
              const status = statuses[uniqueKey];
              return (
                <div key={`was-${wIndex}`} style={{ background: '#1e293b', border: '2px solid #334155', borderRadius: '30px 6px 30px 6px', padding: '1.2rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)', direction: 'rtl' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', fontFamily: 'Tajawal, sans-serif', direction: 'ltr', textAlign: 'left' }}>{item.q}</div>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        border: '1px solid #334155',
                        background: 'rgba(15, 23, 42, 0.85)',
                        color: '#fff',
                        fontSize: '1rem',
                        textAlign: 'center',
                        outline: 'none',
                        fontFamily: 'Fredoka, sans-serif',
                        ...(status === 'correct' ? { borderColor: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.2)' } : {}),
                        ...(status === 'wrong' ? { borderColor: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.2)' } : {})
                      }}
                      value={answers[uniqueKey] || ''}
                      onChange={(e) => handleInputChange(uniqueKey, e.target.value)}
                      placeholder="اكتب الكلمة الشاذة..."
                    />
                    <button
                      style={{ backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '6px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Tajawal, sans-serif' }}
                      onClick={() => checkField(uniqueKey, item.de)}
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
        <div style={{ width: '100%', maxWidth: '1100px', marginTop: '2rem', marginBottom: '2rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '2px solid #334155', borderRadius: '30px 6px 30px 6px', padding: '0.8rem 1.2rem', margin: '1.2rem 0', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}>
            <h1 style={{ fontSize: '1.35rem', color: '#4ade80', fontFamily: 'Fredoka, Tajawal, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
              ✍️ Bilde richtige Sätze
            </h1>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', direction: 'ltr' }} className="responsive-grid-cards">
            {bildeSätzeData.map((item, bIndex) => {
              const uniqueKey = `bilde_${bIndex}`;
              const status = statuses[uniqueKey];
              return (
                <div key={`bilde-${bIndex}`} style={{ background: '#1e293b', border: '2px solid #334155', borderRadius: '30px 6px 30px 6px', padding: '1.2rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)', direction: 'rtl' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', fontFamily: 'Tajawal, sans-serif', direction: 'ltr', textAlign: 'left' }}>{item.q}</div>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        border: '1px solid #334155',
                        background: 'rgba(15, 23, 42, 0.85)',
                        color: '#fff',
                        fontSize: '1rem',
                        textAlign: 'center',
                        outline: 'none',
                        fontFamily: 'Fredoka, sans-serif',
                        ...(status === 'correct' ? { borderColor: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.2)' } : {}),
                        ...(status === 'wrong' ? { borderColor: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.2)' } : {})
                      }}
                      value={answers[uniqueKey] || ''}
                      onChange={(e) => handleInputChange(uniqueKey, e.target.value)}
                      placeholder="اكتب الجملة..."
                    />
                    <button
                      style={{ backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '6px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Tajawal, sans-serif' }}
                      onClick={() => checkField(uniqueKey, item.de)}
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