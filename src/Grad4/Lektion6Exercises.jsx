import React, { useState } from 'react';

function Lektion6Exercises() {
  // --- حالة وقوائم تمارين ضمائر الملكية ---
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [answeredState, setAnsweredState] = useState({});

  const questionsData = [
    { id: 1, correct: "mein", prefix: "Ist das dein Bruder? - Ja, das ist (", suffix: ") Bruder.", options: ["mein", "dein", "ich"] },
    { id: 2, correct: "Meine", prefix: "Wo ist deine Oma? - (", suffix: ") Oma ist nicht da.", options: ["Deine", "Du", "Meine"] },
    { id: 3, correct: "dein", prefix: "Wie heißt (", suffix: ") Vater? - Mein Vater heißt Ali.", options: ["mein", "dein", "du"] },
    { id: 4, correct: "meine", prefix: "Wo ist deine Mutter? - Da ist (", suffix: ") Mutter.", options: ["ich", "deine", "meine"] },
    { id: 5, correct: "deine", prefix: "Wo ist (", suffix: ") Schwester? - Da ist meine Schwester.", options: ["meine", "deine", "du"] },
    { id: 6, correct: "deine", prefix: "Ist das (", suffix: ") Mutter? - Ja, das ist meine Mutter.", options: ["deine", "meine", "ihr"] },
    { id: 7, correct: "Mein", prefix: "Wo ist dein Vater? - (", suffix: ") Vater ist nicht da.", options: ["Ich", "Mein", "Dein"] },
    { id: 8, correct: "Mein", prefix: "Wie alt ist dein Freund? - (", suffix: ") Freund ist 10.", options: ["Mein", "Dein", "Du"] },
    { id: 9, correct: "dein", prefix: "Ist das (", suffix: ") Bruder? - Nein, das ist mein Freund.", options: ["mein", "dein", "ich"] },
    { id: 10, correct: "Meine", prefix: "Wie heißt deine Oma? - (", suffix: ") Oma heißt Anne.", options: ["Meine", "Deine", "Du"] }
  ];

  const handleAnswer = (qId, selectedOption, correctOption) => {
    if (answeredState[qId]) return;

    const isCorrect = selectedOption === correctOption;
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      setWrongAnswers(prev => prev + 1);
    }

    setAnsweredState(prev => ({
      ...prev,
      [qId]: { selected: selectedOption, isCorrect }
    }));
  };

  const resetQuiz = () => {
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setAnsweredState({});
  };

  // --- حالة وقوائم تمارين العائلة والأسئلة (Lektion 6) ---
  const categoriesData = [
    {
      categoryTitle: "👨‍👩‍👧‍👦 عائلة ملكي (Meine Familie)",
      sections: [
        {
          title: "المذكر (Masculin)",
          article: "der",
          possessive: "mein",
          items: [
            { de: "Opa", ar: "الجد" },
            { de: "Vater", ar: "الأب" },
            { de: "Bruder", ar: "الأخ" },
            { de: "Onkel", ar: "العم / الخال" }
          ]
        },
        {
          title: "المؤنث (Feminin)",
          article: "die",
          possessive: "meine",
          items: [
            { de: "Oma", ar: "الجدة" },
            { de: "Mutter", ar: "الأم" },
            { de: "Schwester", ar: "الأخت" },
            { de: "Tante", ar: "العمة / الخالة" }
          ]
        }
      ]
    },
    {
      categoryTitle: "👥 عائلة ملكك (Deine Familie)",
      sections: [
        {
          title: "المذكر (Masculin)",
          article: "der",
          possessive: "dein",
          items: [
            { de: "Opa", ar: "جدك" },
            { de: "Vater", ar: "والدك" },
            { de: "Bruder", ar: "أخوك" },
            { de: "Onkel", ar: "عمك / خالك" }
          ]
        },
        {
          title: "المؤنث (Feminin)",
          article: "die",
          possessive: "deine",
          items: [
            { de: "Oma", ar: "جدتك" },
            { de: "Mutter", ar: "والدتك" },
            { de: "Schwester", ar: "أختك" },
            { de: "Tante", ar: "عمتك / خالتك" }
          ]
        }
      ]
    }
  ];

  const qaData = [
    { id: "q1", title: "من هذا؟ -> هذا والدي", qAns: "wer ist das", aAns: "das ist mein vater" },
    { id: "q2", title: "من هذه؟ -> هذه والدتي", qAns: "wer ist das", aAns: "das ist meine mutter" },
    { id: "q3", title: "من هذا؟ -> هذا أخي", qAns: "wer ist das", aAns: "das ist mein bruder" },
    { id: "q4", title: "من هذه؟ -> هذه أختي", qAns: "wer ist das", aAns: "das ist meine schwester" },
    { id: "q5", title: "أهذا والدك؟ -> نعم، هذا والدي أنا", qAns: "ist das dein vater", aAns: "ja, das ist mein vater" },
    { id: "q6", title: "أهذا والدك؟ -> لا، هذا والدك أنت", qAns: "ist das dein vater", aAns: "nein, das ist dein vater" },
    { id: "q7", title: "أهذا جدك؟ -> نعم، هذا جدي أنا", qAns: "ist das dein opa", aAns: "ja, das ist mein opa" },
    { id: "q8", title: "أهذا جدك؟ -> لا، هذا جدك أنت", qAns: "ist das dein opa", aAns: "nein, das ist dein opa" },
    { id: "q9", title: "أهذه والدتك؟ -> نعم، هذه والدتي أنا", qAns: "ist das deine mutter", aAns: "ja, das ist meine mutter" },
    { id: "q10", title: "أهذه والدتك؟ -> لا، هذه والدتك أنت", qAns: "ist das deine mutter", aAns: "nein, das ist deine mutter" },
    { id: "q11", title: "أهذا أخوك؟ -> نعم، هذا أخي أنا", qAns: "ist das dein bruder", aAns: "ja, das ist mein bruder" },
    { id: "q12", title: "أهذا أخوك؟ -> لا، هذا أخوك أنت", qAns: "ist das dein bruder", aAns: "nein, das ist dein bruder" },
    { id: "q13", title: "أهذه أختك؟ -> نعم، هذه أختي أنا", qAns: "ist das deine schwester", aAns: "ja, das ist meine schwester" },
    { id: "q14", title: "أهذه أختك؟ -> لا، هذه أختك أنت", qAns: "ist das deine schwester", aAns: "nein, das ist deine schwester" }
  ];

  const [inputsState, setInputsState] = useState({});

  const handleInputChange = (fieldId, value) => {
    setInputsState(prev => ({
      ...prev,
      [fieldId]: { ...prev[fieldId], value }
    }));
  };

  // دالة تحسين وتنظيف النص لمقارنة مرنة وخالية من الأخطاء البسيطة
  const cleanText = (text) => {
    if (!text) return "";
    return text
      .trim()
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "") // إزالة علامات الترقيم تلقائياً لو كتبها المستخدم بالخطأ
      .replace(/\s+/g, " "); // توحيد المسافات الزائدة
  };

  const validateField = (fieldId, correctVal) => {
    const currentData = inputsState[fieldId] || { value: '' };
    const userVal = cleanText(currentData.value);
    const targetVal = cleanText(correctVal);
    const isCorrect = userVal === targetVal;

    setInputsState(prev => ({
      ...prev,
      [fieldId]: {
        ...prev[fieldId],
        status: isCorrect ? 'correct' : 'wrong'
      }
    }));
  };

  const checkFamilyMemberSpecific = (uniqueId, article, possessive, wordDe) => {
    validateField(`art-${uniqueId}`, article);
    validateField(`poss-${uniqueId}`, possessive);
    validateField(`word-${uniqueId}`, wordDe);
  };

  const checkQaItem = (id, qAns, aAns) => {
    validateField(`q-${id}`, qAns);
    validateField(`a-${id}`, aAns);
  };

  const getClassNameFamily = (fieldId) => {
    const item = inputsState[fieldId];
    if (!item || !item.status) return '';
    return item.status;
  };

  const getValueFamily = (fieldId) => {
    return inputsState[fieldId]?.value || '';
  };

  return (
    <div dir="rtl" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .main-page-wrapper {
          color: inherit;
          min-height: 100vh;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }
        .container {
          width: 100%;
          max-width: 900px;
          background: inherit;
          padding: 20px 18px;
          border-radius: 30px 6px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .main-title {
          text-align: center;
          color: inherit;
          font-size: 1.8rem;
          font-weight: bold;
          margin: 0;
        }
        .scoreboard {
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px 6px;
          padding: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
          gap: 8px;
        }
        .score-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .score-label {
          font-size: 0.85rem;
          opacity: 0.8;
        }
        .score-value {
          font-size: 1.3rem;
          font-weight: bold;
        }
        .score-total { opacity: 1; }
        .score-correct { color: #22c55e; }
        .score-wrong { color: #ef4444; }
        .questions-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .question-card {
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 4px solid #00a3ff;
          border-radius: 30px 6px;
          padding: 12px 15px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          direction: rtl;
        }
        .question-content {
          direction: ltr;
          text-align: left;
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.5;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 5px;
          width: 100%;
        }
        .q-num {
          color: #00a3ff;
          font-weight: bold;
          font-size: 0.95rem;
        }
        .options-inline {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin: 0 2px;
        }
        .option-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: inherit;
          padding: 2px 8px;
          border-radius: 30px 6px;
          font-size: 0.85rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.15s ease;
          display: inline-block;
        }
        .option-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
          border-color: #00a3ff;
        }
        .option-btn.correct {
          background: #22c55e !important;
          border-color: #22c55e !important;
          color: #ffffff !important;
        }
        .option-btn.wrong {
          background: #ef4444 !important;
          border-color: #ef4444 !important;
          color: #ffffff !important;
        }
        .actions-bar {
          display: flex;
          justify-content: center;
          margin-top: 5px;
        }
        .btn-reset {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #00a3ff;
          color: inherit;
          padding: 8px 22px;
          border-radius: 30px 6px;
          font-size: 0.95rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-reset:hover {
          background: #00a3ff;
          color: #ffffff;
        }

        /* --- تنسيقات قسم العائلة (Lektion 6) --- */
        .top-bar {
          width: 100%;
          max-width: 900px;
          background: inherit;
          padding: 18px 20px;
          border-radius: 30px 6px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }
        .top-bar h1 {
          font-size: 1.6rem;
          margin-bottom: 0.3rem;
        }
        .top-bar p {
          opacity: 0.8;
          font-size: 0.9rem;
        }
        .category-banner {
          width: 100%;
          max-width: 900px;
          background: inherit;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 18px;
          border-radius: 30px 6px;
          margin: 10px 0;
          text-align: center;
        }
        .category-banner h2 {
          font-size: 1.3rem;
          color: #facc15;
        }
        .section-container {
          width: 100%;
          max-width: 900px;
          margin-bottom: 15px;
        }
        .category-header {
          font-size: 1.1rem;
          margin-bottom: 10px;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 15px;
          direction: ltr;
        }
        @media (min-width: 700px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        .card {
          background-color: inherit;
          border-radius: 30px 6px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          direction: rtl;
        }
        .card-content {
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        .word-arabic {
          font-size: 1.2rem;
          font-weight: bold;
          color: #facc15;
          text-align: right;
          width: 100%;
        }
        .inputs-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }
        .input-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .input-row span {
          font-size: 0.85rem;
          opacity: 0.8;
          width: 65px;
          text-align: right;
          font-weight: bold;
        }
        .input-row input {
          flex: 1;
          padding: 6px 10px;
          border-radius: 30px 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.2);
          color: inherit;
          font-size: 0.9rem;
          text-align: center;
          outline: none;
          transition: all 0.2s ease;
        }
        .input-row input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
        }
        input.correct, .input-row input.correct {
          border-color: #22c55e !important;
          background-color: #064e3b !important;
          color: #dcfce7 !important;
        }
        input.wrong, .input-row input.wrong {
          border-color: #ef4444 !important;
          background-color: #7f1d1d !important;
          color: #fee2e2 !important;
        }
        .check-single-btn {
          background-color: rgba(255, 255, 255, 0.05);
          color: inherit;
          border: 1px solid #00a3ff;
          padding: 8px;
          border-radius: 30px 6px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          font-size: 0.9rem;
          transition: 0.2s;
        }
        .check-single-btn:hover {
          background-color: #00a3ff;
          color: #fff;
        }
        .qa-section {
          width: 100%;
          max-width: 900px;
          background: inherit;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px 6px;
          padding: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          margin-top: 10px;
        }
        .qa-container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 12px;
          margin-top: 12px;
        }
        @media (min-width: 768px) {
          .qa-container { grid-template-columns: repeat(2, 1fr); }
        }
        .qa-box {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 30px 6px;
          padding: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 4px solid #00a3ff;
        }
        .qa-title {
          font-size: 1rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .qa-field-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .qa-field-group label {
          font-size: 0.8rem;
          font-weight: bold;
          opacity: 0.8;
        }
        .qa-field-group input {
          width: 100%;
          padding: 7px 10px;
          border-radius: 30px 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.2);
          color: inherit;
          font-size: 0.9rem;
          text-align: center;
          outline: none;
          transition: 0.2s;
        }
        .qa-field-group input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.2);
        }
        .qa-check-btn {
          background-color: rgba(255, 255, 255, 0.05);
          color: inherit;
          border: 1px solid #00a3ff;
          padding: 7px;
          border-radius: 30px 6px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.2s;
          font-size: 0.85rem;
          margin-top: 4px;
        }
        .qa-check-btn:hover {
          background-color: #00a3ff;
          color: white;
        }
      `}</style>

      <div className="main-page-wrapper">

        {/* --- أولاً: تمارين أفراد العائلة والأسئلة (Lektion 6) --- */}
        <div className="top-bar">
          <h1>Meine Familie & Fragen</h1>
          <p>اختبار أفراد العائلة والأسئلة والحوارات</p>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          {categoriesData.map((cat, catIndex) => (
            <React.Fragment key={catIndex}>
              <div className="category-banner">
                <h2>{cat.categoryTitle}</h2>
              </div>
              {cat.sections.map((sec, sIndex) => (
                <div className="section-container" key={sIndex}>
                  <div className="category-header">
                    <span>📌</span> {sec.title}
                  </div>
                  <div className="grid">
                    {sec.items.map((item, iIndex) => {
                      const uniqueId = `${catIndex}-${sIndex}-${iIndex}`;
                      return (
                        <div className="card" key={iIndex}>
                          <div className="card-content">
                            <div className="word-arabic">{item.ar}</div>
                            <div className="inputs-wrapper">
                              <div className="input-row">
                                <span>الأداة:</span>
                                <input
                                  type="text"
                                  className={getClassNameFamily(`art-${uniqueId}`)}
                                  value={getValueFamily(`art-${uniqueId}`)}
                                  onChange={(e) => handleInputChange(`art-${uniqueId}`, e.target.value)}
                                  placeholder="der / die"
                                />
                              </div>
                              <div className="input-row">
                                <span>الملكية:</span>
                                <input
                                  type="text"
                                  className={getClassNameFamily(`poss-${uniqueId}`)}
                                  value={getValueFamily(`poss-${uniqueId}`)}
                                  onChange={(e) => handleInputChange(`poss-${uniqueId}`, e.target.value)}
                                  placeholder={sec.possessive === 'mein' ? 'mein / meine' : 'dein / deine'}
                                />
                              </div>
                              <div className="input-row">
                                <span>الكلمة:</span>
                                <input
                                  type="text"
                                  className={getClassNameFamily(`word-${uniqueId}`)}
                                  value={getValueFamily(`word-${uniqueId}`)}
                                  onChange={(e) => handleInputChange(`word-${uniqueId}`, e.target.value)}
                                  placeholder="الاسم بالألمانية"
                                />
                              </div>
                            </div>
                            <button
                              className="check-single-btn"
                              onClick={() => checkFamilyMemberSpecific(uniqueId, sec.article, sec.possessive, item.de.toLowerCase())}
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

        {/* قسم الأسئلة والحوارات التعريفية (Fragesätze) */}
        <div className="qa-section">
          <div className="category-header">
            <span>💬</span> الأسئلة والحوارات التعريفية (Fragesätze)
          </div>
          <p style={{ opacity: 0.8, marginBottom: '10px', fontSize: '0.85rem' }}>
            اكتب الأسئلة والإجابات باللغة الألمانية في المربعات المخصصة ثم اضغط تحقق:
          </p>
          <div className="qa-container">
            {qaData.map((item) => (
              <div className="qa-box" key={item.id}>
                <div className="qa-title">
                  <span>❓</span> {item.title}
                </div>

                <div className="qa-field-group">
                  <label>اكتب السؤال بالألمانية:</label>
                  <input
                    type="text"
                    className={getClassNameFamily(`q-${item.id}`)}
                    value={getValueFamily(`q-${item.id}`)}
                    onChange={(e) => handleInputChange(`q-${item.id}`, e.target.value)}
                    placeholder="اكتب السؤال هنا..."
                  />
                </div>

                <div className="qa-field-group">
                  <label>اكتب الإجابة بالألمانية:</label>
                  <input
                    type="text"
                    className={getClassNameFamily(`a-${item.id}`)}
                    value={getValueFamily(`a-${item.id}`)}
                    onChange={(e) => handleInputChange(`a-${item.id}`, e.target.value)}
                    placeholder="اكتب الإجابة هنا..."
                  />
                </div>

                <button
                  className="qa-check-btn"
                  onClick={() => checkQaItem(item.id, item.qAns, item.aAns)}
                >
                  تحقق من الإجابة
                </button>
              </div>
            ))}
          </div>
        </div>


        {/* --- ثانياً: تمارين ضمائر الملكية (Die Possessivpronomen) --- */}
        <div className="container">
          <h1 className="main-title">Die Possessivpronomen</h1>

          {/* Scoreboard Header */}
          <div className="scoreboard">
            <div className="score-item">
              <span className="score-label">إجمالي الأسئلة</span>
              <span className="score-value score-total">10</span>
            </div>
            <div className="score-item">
              <span className="score-label">إجابات صحيحة</span>
              <span className="score-value score-correct">{correctAnswers}</span>
            </div>
            <div className="score-item">
              <span className="score-label">إجابات خاطئة</span>
              <span className="score-value score-wrong">{wrongAnswers}</span>
            </div>
          </div>

          {/* Questions Container */}
          <div className="questions-list">
            {questionsData.map((q) => {
              const state = answeredState[q.id];
              return (
                <div className="question-card" key={q.id}>
                  <div className="question-content">
                    <span className="q-num">{q.id}.</span>
                    <span>{q.prefix}</span>
                    <span className="options-inline">
                      {q.options.map((opt, idx) => {
                        let btnClass = "option-btn";
                        if (state) {
                          if (opt === q.correct) {
                            btnClass += " correct";
                          } else if (state.selected === opt && !state.isCorrect) {
                            btnClass += " wrong";
                          }
                        }
                        return (
                          <React.Fragment key={idx}>
                            <button
                              className={btnClass}
                              onClick={() => handleAnswer(q.id, opt, q.correct)}
                              disabled={!!state}
                            >
                              {opt}
                            </button>
                            {idx < q.options.length - 1 && " - "}
                          </React.Fragment>
                        );
                      })}
                    </span>
                    <span>{q.suffix}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="actions-bar">
            <button className="btn-reset" onClick={resetQuiz}>إعادة المحاولة Reset</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Lektion6Exercises;