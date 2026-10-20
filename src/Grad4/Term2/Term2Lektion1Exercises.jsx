import React, { useState } from 'react';

const categoriesData = [
  {
    categoryTitle: "🏫 الأساسيات في الفصل",
    sections: [
      {
        title: "المذكر (Masculin)",
        article: "der",
        items: [
          { de: "Papierkorb", ar: "سلة المهملات", img: "https://media.zid.store/cd9db128-ebb6-4f68-bfbd-a0a93263f354/9fe873a8-6407-43af-8abd-842eb1d0e985.jpg" },
          { de: "Schrank", ar: "دولاب / خزانة", img: "https://arkanelqasr.com/wp-content/uploads/2022/09/%D8%AE%D8%B2%D8%A7%D9%86%D8%A9-%D9%85%D9%84%D8%A7%D8%A8%D8%B3-2-2-1.webp" },
          { de: "Stuhl", ar: "كرسي", img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=80" },
          { de: "Tisch", ar: "طاولة / منضدة", img: "https://media.zid.store/thumbs/eaeeaeee-3342-4288-94a1-7276aeaff27d/dd5ac33d-f479-4f80-ad8a-1c860932f346-thumbnail-1000x1000-70.jpg" }
        ]
      },
      {
        title: "المحايد (Neutral)",
        article: "das",
        items: [
          { de: "Fenster", ar: "شباك / نافذة", img: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=400&auto=format&fit=crop&q=80" },
          { de: "Pult", ar: "ديسك", img: "https://hmofficefurniture.com/wp-content/uploads/2023/07/ChatGPT-Image-Aug-26-2025-03_15_46-PM-1.jpg" },
          { de: "Waschbecken", ar: "حوض غسيل", img: "https://www.ceramicbasin.com/wp-content/uploads/2024/07/beautiful-wholesale-marble-wash-basins-with-high-quality-1-750x600.webp" }
        ]
      },
      {
        title: "المؤنث (Feminin)",
        article: "die",
        items: [
          { de: "Klasse", ar: "فصل دراسي", img: "https://i.pinimg.com/736x/f0/d6/f8/f0d6f84fb5f25ba657694707d229a7ac.jpg" },
          { de: "Tafel", ar: "سبورة", img: "https://5.imimg.com/data5/SELLER/Default/2025/9/547889501/VL/KN/WG/4020506/writing-surface-blackboard-1000x1000.png" },
          { de: "Tür", ar: "باب", img: "https://eg-rv.homzmart.net/catalog/product/M/A/MAGARDOA380-env.jpg" },
          { de: "Schultasche", ar: "شنطة مدرسية", img: "https://elrobystore.com/storage/products/6a81ad3cbd47c.jpg" },
          { de: "Landkarte", ar: "خريطة", img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&auto=format&fit=crop&q=80" }
        ]
      }
    ]
  },
  {
    categoryTitle: "🎒 In der Tasche (في الشنطة)",
    sections: [
      {
        title: "المذكر (Masculin)",
        article: "der",
        items: [
          { de: "Bleistift", ar: "قلم رصاص", img: "https://samir-and-aly-stationaries.fra1.cdn.digitaloceanspaces.com/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/0/7/0720002201250_4.jpg" },
          { de: "Block", ar: "دفتر ملاحظات / مفكرة", img: "https://img.joomcdn.net/b6f936c6e1129e6ad8367210b9bba96cee9a5b4c_original.jpeg" },
          { de: "Farbstift", ar: "قلم ألوان", img: "https://imychic.com/wp-content/uploads/2023/09/Crayons-Couleur-12Pcs-Grand-Modele-Cleo-CCLong12G-1-1.jpg" },
          { de: "Füller", ar: "قلم حبر", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&auto=format&fit=crop&q=80" },
          { de: "Malkasten", ar: "علبه الوان", img: "https://elghazawy.b-cdn.net/32470/6223001416012.jpg" },
          { de: "Pinsel", ar: "فرشاة رسم", img: "https://png.pngtree.com/png-clipart/20250124/original/pngtree-contemporary-paintbrush-design-for-creative-projects-png-image_19692068.png" },
          { de: "Radiergummi", ar: "ممحاة / أستيكة", img: "https://smartstationery.net/wp-content/webpc-passthru.php?src=https://smartstationery.net/wp-content/uploads/2023/11/1698789549_Untitled-120copy.jpg&nocache=1" },
          { de: "Spitzer", ar: "براية", img: "https://www.maktaba.ps/image/cache/catalog/products/22201000-2-1100x1100w.jpg" }
        ]
      },
      {
        title: "المحايد (Neutral)",
        article: "das",
        items: [
          { de: "Buch", ar: "كتاب", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80" },
          { de: "Federmäppchen", ar: "مقلمة", img: "https://elghazawy.b-cdn.net/157538/69168488_2961559737251914_1592198209747288064_n.webp" },
          { de: "Heft", ar: "كراسة / كشكول", img: "https://i.pinimg.com/736x/03/21/e8/0321e86a0ae25df50d6ce0493fa5cd04.jpg" },
          { de: "Lineal", ar: "مسطرة", img: "https://cdn.salla.sa/GQjBoylaN1eVkTohGyxg4PUNOJiH01WOtZ8rrXO9.jpg" },
          { de: "Turnzeug", ar: "ملابس الرياضة", img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/j/28/af8f42c6-b4e5-423b-9111-17fd5c46667e.jpg" }
        ]
      },
      {
        title: "المؤنث (Feminin)",
        article: "die",
        items: [
          { de: "Kreide", ar: "طباشير", img: "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/72/686691/1.jpg?7386" },
          { de: "Schere", ar: "مقص", img: "https://png.pngtree.com/png-vector/20250917/ourmid/pngtree-smiling-cartoon-scissors-with-red-handles-isolated-on-a-transparent-background-png-image_17472972.webp" }
        ]
      }
    ]
  },
  {
    categoryTitle: "🎨 Aktivitäten (الأنشطة والأفعال)",
    sections: [
      {
        title: "الأفعال (Verbs)",
        article: "",
        items: [
          { de: "basteln", ar: "يمارس الأشغال اليدوية", img: "https://m.media-amazon.com/images/I/71Voiv5-POL._AC_SL1500_.jpg" },
          { de: "lesen", ar: "يقرأ", img: "https://png.pngtree.com/png-vector/20240625/ourlarge/pngtree-baby-read-the-book-png-image_12839865.png" },
          { de: "malen", ar: "يلون", img: "https://png.pngtree.com/png-vector/20260111/ourlarge/pngtree-little-artist-at-work-painting-a-colorful-landscape-png-image_18477493.webp" },
          { de: "rechnen", ar: "يحسب", img: "https://png.pngtree.com/background/20241219/original/pngtree-man-calculating-finance-at-home-with-calculator-people-salary-account-photo-picture-image_11664022.jpg" },
          { de: "schlafen", ar: "ينام", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=80" },
          { de: "schreiben", ar: "يكتب", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop&q=80" },
          { de: "singen", ar: "يغني", img: "https://png.pngtree.com/png-vector/20251026/ourlarge/pngtree-a-man-passionately-singing-into-microphone-with-music-notes-depicted-in-png-image_17835263.webp" },
          { de: "spielen", ar: "يلعب", img: "https://png.pngtree.com/recommend-works/png-clipart/20250118/ourlarge/pngtree-little-boy-playing-football-png-image_15260129.png" },
          { de: "tanzen", ar: "يرقص", img: "https://png.pngtree.com/element_our/20200611/ourlarge/pngtree-dancing-singing-boy-image_2253365.jpg" },
          { de: "turnen", ar: "يمارس ألعاب القوى / جمباز", img: "https://png.pngtree.com/png-clipart/20211020/ourlarge/pngtree-pommel-horse-gymnastics-cartoon-characters-png-image_4000056.png" },
          { de: "zeichnen", ar: "يرسم بالقلم الرصاص", img: "https://i.pinimg.com/736x/e4/2b/f5/e42bf5e292b4ce99dc3a4393ac294856.jpg" }
        ]
      }
    ]
  }
];

export default function SchoolQuizApp() {
  const [activeCards, setActiveCards] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [validationStatus, setValidationStatus] = useState({});

  const toggleCard = (uniqueId) => {
    setActiveCards(prev => ({
      ...prev,
      [uniqueId]: !prev[uniqueId]
    }));
  };

  const handleInputChange = (fieldKey, value) => {
    setInputValues(prev => ({
      ...prev,
      [fieldKey]: value
    }));
  };

  const validateField = (fieldKey, correctVal) => {
    const userVal = (inputValues[fieldKey] || "").trim().toLowerCase();
    const isCorrect = userVal === correctVal.toLowerCase();
    setValidationStatus(prev => ({
      ...prev,
      [fieldKey]: isCorrect ? 'correct' : 'wrong'
    }));
  };

  const checkSingle = (e, uniqueId, hasArticle, articleAnswer, wordAnswer) => {
    e.stopPropagation();
    if (hasArticle) {
      validateField(`art-${uniqueId}`, articleAnswer);
    }
    validateField(`word-${uniqueId}`, wordAnswer);
  };

  const checkAllAnswers = () => {
    categoriesData.forEach((cat, catIndex) => {
      cat.sections.forEach((sec, sIndex) => {
        sec.items.forEach((item, iIndex) => {
          const uniqueId = `${catIndex}-${sIndex}-${iIndex}`;
          if (sec.article !== "") {
            validateField(`art-${uniqueId}`, sec.article);
          }
          validateField(`word-${uniqueId}`, item.de);
        });
      });
    });
  };

  // دالة لتحديد لون عنوان القسم بناءً على نوعه
  const getSectionTitleColor = (title) => {
    if (title.includes("المذكر") || title.includes("Masculin")) return "#38bdf8"; // لبنى
    if (title.includes("المحايد") || title.includes("Neutral")) return "#4ade80"; // أخضر
    if (title.includes("المؤنث") || title.includes("Feminin")) return "#f472b6"; // بمبي
    if (title.includes("الجمع") || title.includes("Plural")) return "#fb923c"; // برتقالي
    return "#38bdf8";
  };

  return (
    <div style={{
      fontFamily: "'Tajawal', sans-serif",
      backgroundColor: "#0f172a",
      color: "#f8fafc",
      minHeight: "100vh",
      padding: "1.5rem 1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      direction: "rtl"
    }}>
      <style>{`
        @keyframes colorBlink {
          0% { color: #ffffff; }
          50% { color: #facc15; }
          100% { color: #ffffff; }
        }
        .warning-banner {
          width: 100%;
          max-width: 1100px;
          text-align: center;
          margin: 1rem 0 1.5rem 0;
          padding: 1rem;
          background: rgba(30, 41, 59, 0.7);
          border: 1px dashed #facc15;
          border-radius: 30px 6px;
        }
        .warning-title {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 0.4rem;
          animation: colorBlink 1.5s infinite;
        }
        .warning-text {
          font-size: 1.05rem;
          color: #f8fafc;
          font-weight: 600;
        }
        .top-bar {
          width: 100%;
          max-width: 1100px;
          background: #1e293b;
          padding: 1.5rem;
          border-radius: 30px 6px;
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.4);
          border: 1px solid #334155;
          text-align: center;
          margin-bottom: 2rem;
        }
        .top-bar h1 {
          font-size: 1.8rem;
          color: #38bdf8;
          font-family: 'Fredoka', sans-serif;
          margin-bottom: 0.5rem;
        }
        .top-bar p {
          color: #94a3b8;
          font-size: 0.95rem;
        }
        .category-banner {
          width: 100%;
          max-width: 1100px;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border: 1px solid #334155;
          padding: 1rem 1.5rem;
          border-radius: 30px 6px;
          margin: 2.5rem 0 1.5rem 0;
          text-align: center;
        }
        .category-banner h2 {
          font-size: 1.6rem;
          color: #facc15;
          font-family: 'Fredoka', sans-serif;
        }
        .section-container {
          width: 100%;
          max-width: 1100px;
          margin-bottom: 2rem;
        }
        .category-header {
          font-size: 1.3rem;
          margin-bottom: 1.2rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid #334155;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
          direction: ltr;
        }
        @media (min-width: 700px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1000px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }
        .card {
          background-color: #1e293b;
          border-radius: 30px 6px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.4);
          border: 1px solid #334155;
          direction: rtl;
          position: relative;
          min-height: 350px;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          transition: justify-content 0.4s ease;
        }
        .card-content {
          background: rgba(15, 23, 42, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          width: 100%;
          position: relative;
          bottom: -38%;
          transition: bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card.active .card-content {
          bottom: 0;
        }
        .word-arabic {
          font-size: 1.25rem;
          font-weight: 800;
          color: #000000;
          text-align: right;
          width: 100%;
          margin-bottom: 0.2rem;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
          min-height: 32px;
          display: flex;
          align-items: center;
        }
        .inputs-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          width: 100%;
        }
        .input-row {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .input-row span {
          font-size: 0.8rem;
          color: #000000;
          width: 80px;
          text-align: right;
          font-weight: 700;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
        }
        .input-row input {
          flex: 1;
          padding: 8px 12px;
          border-radius: 30px 6px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(15, 23, 42, 0.25);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: #fff;
          font-size: 0.95rem;
          text-align: center;
          outline: none;
          transition: all 0.3s ease;
        }
        .input-row input::placeholder {
          color: rgba(241, 245, 249, 0.6);
        }
        .input-row input:focus {
          border-color: #38bdf8;
          background: rgba(15, 23, 42, 0.45);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
        }
        input.correct {
          border-color: #4ade80 !important;
          background-color: rgba(74, 222, 128, 0.35) !important;
        }
        input.wrong {
          border-color: #f87171 !important;
          background-color: rgba(248, 113, 113, 0.35) !important;
        }
        .check-single-btn {
          margin-top: 0.4rem;
          background-color: #38bdf8;
          color: #0f172a;
          border: none;
          padding: 8px;
          border-radius: 30px 6px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          transition: 0.2s;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .check-single-btn:hover {
          background-color: #0ea5e9;
          color: #fff;
        }
        .global-container {
          text-align: center;
          margin: 2.5rem 0;
        }
        .global-check {
          background-color: #22c55e;
          color: white;
          border: none;
          padding: 12px 35px;
          font-size: 1.2rem;
          font-weight: 700;
          border-radius: 30px 6px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
          transition: 0.2s;
        }
        .global-check:hover {
          background-color: #16a34a;
        }
      `}</style>

      <div className="top-bar">
        <h1><i className="fa-solid fa-school"></i> Die Schule & Aktivitäten</h1>
        <p>اختبار تفاعلي لأدوات المدرسة، محتويات الحقيبة، والأنشطة والأفعال بالألمانية</p>
      </div>

      <div id="appContainer" style={{ width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {categoriesData.map((cat, catIndex) => (
          <React.Fragment key={catIndex}>
            <div className="category-banner">
              <h2>{cat.categoryTitle}</h2>
            </div>

            {/* عرض التحذير بخط كبير وتغيير الألوان بعد عنوان "الأساسيات في الفصل" */}
            {catIndex === 0 && (
              <div className="warning-banner">
                <div className="warning-title">⚠️ ملحوظه مهمه جدا ⚠️</div>
                <div className="warning-text">اضغط على الصوره هيطلع المكان المخصص للاجابه</div>
              </div>
            )}

            {cat.sections.map((sec, sIndex) => (
              <div className="section-container" key={sIndex}>
                <div
                  className="category-header"
                  style={{ color: getSectionTitleColor(sec.title) }}
                >
                  <i className="fa-solid fa-bookmark" style={{ color: getSectionTitleColor(sec.title) }}></i> {sec.title}
                </div>
                <div className="grid">
                  {sec.items.map((item, iIndex) => {
                    const uniqueId = `${catIndex}-${sIndex}-${iIndex}`;
                    const isActive = activeCards[uniqueId] || false;
                    const artKey = `art-${uniqueId}`;
                    const wordKey = `word-${uniqueId}`;

                    return (
                      <div
                        key={iIndex}
                        className={`card ${isActive ? 'active' : ''}`}
                        style={{ backgroundImage: `url('${item.img}')` }}
                        onClick={() => toggleCard(uniqueId)}
                      >
                        <div className="card-content" onClick={(e) => e.stopPropagation()}>
                          <div className="word-arabic">{item.ar}</div>
                          <div className="inputs-wrapper">
                            {sec.article !== "" && (
                              <div className="input-row">
                                <span>الأداة:</span>
                                <input
                                  type="text"
                                  id={artKey}
                                  className={validationStatus[artKey] || ''}
                                  value={inputValues[artKey] || ''}
                                  onChange={(e) => handleInputChange(artKey, e.target.value)}
                                  placeholder="der / das / die"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            )}
                            <div className="input-row">
                              <span>{sec.article !== "" ? "الكلمة:" : "الفعل:"}</span>
                              <input
                                type="text"
                                id={wordKey}
                                className={validationStatus[wordKey] || ''}
                                value={inputValues[wordKey] || ''}
                                onChange={(e) => handleInputChange(wordKey, e.target.value)}
                                placeholder={sec.article !== "" ? "الاسم بالألمانية" : "الفعل بالألمانية"}
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          </div>
                          <button
                            className="check-single-btn"
                            onClick={(e) => checkSingle(e, uniqueId, sec.article !== "", sec.article, item.de)}
                          >
                            فحص هذا العنصر
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="global-container">
        <button className="global-check" onClick={checkAllAnswers}>
          التحقق من جميع الإجابات
        </button>
      </div>
    </div>
  );
}