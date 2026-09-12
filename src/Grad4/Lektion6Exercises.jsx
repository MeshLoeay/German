import React, { useState } from 'react';

export default function Lektion6Exercises() {
  // حالة الثيم (dark افتراضياً / يمكن تبديله من الأب أو هنا كمكون متكامل)
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isLight = theme === 'light';

  // بيانات كروت أفراد العائلة
  const categoriesData = [
    {
      categoryTitle: "👨‍👩‍👧‍👦 عائلة ملكي (Meine Familie)",
      sections: [
        {
          title: "المذكر (Masculin)",
          article: "der",
          possessive: "mein",
          items: [
            { id: "m-1", de: "Opa", ar: "الجد" },
            { id: "m-2", de: "Vater", ar: "الأب" },
            { id: "m-3", de: "Bruder", ar: "الأخ" },
            { id: "m-4", de: "Onkel", ar: "العم / الخال" }
          ]
        },
        {
          title: "المؤنث (Feminin)",
          article: "die",
          possessive: "meine",
          items: [
            { id: "f-1", de: "Oma", ar: "الجدة" },
            { id: "f-2", de: "Mutter", ar: "الأم" },
            { id: "f-3", de: "Schwester", ar: "الأخت" },
            { id: "f-4", de: "Tante", ar: "العمة / الخالة" }
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
            { id: "dm-1", de: "Opa", ar: "جدك" },
            { id: "dm-2", de: "Vater", ar: "والدك" },
            { id: "dm-3", de: "Bruder", ar: "أخوك" },
            { id: "dm-4", de: "Onkel", ar: "عمك / خالك" }
          ]
        },
        {
          title: "المؤنث (Feminin)",
          article: "die",
          possessive: "deine",
          items: [
            { id: "df-1", de: "Oma", ar: "جدتك" },
            { id: "df-2", de: "Mutter", ar: "والدتك" },
            { id: "df-3", de: "Schwester", ar: "أختك" },
            { id: "df-4", de: "Tante", ar: "عمتك / خالتك" }
          ]
        }
      ]
    }
  ];

  // بيانات الأسئلة التعريفية
  const qaData = [
    { id: "q1", title: "من هذا؟ -> هذا والدي", qAns: "wer ist das?", aAns: "das ist mein vater" },
    { id: "q2", title: "من هذه؟ -> هذه والدتي", qAns: "wer ist das?", aAns: "das ist meine mutter" },
    { id: "q3", title: "من هذا؟ -> هذا أخي", qAns: "wer ist das?", aAns: "das ist mein bruder" },
    { id: "q4", title: "من هذه؟ -> هذه أختي", qAns: "wer ist das?", aAns: "das ist meine schwester" },
    { id: "q5", title: "أهذا والدك؟ -> نعم، هذا والدي أنا", qAns: "ist das dein vater?", aAns: "ja, das ist mein vater" },
    { id: "q6", title: "أهذا والدك؟ -> لا، هذا والدك أنت", qAns: "ist das dein vater?", aAns: "nein, das ist dein vater" },
    { id: "q7", title: "أهذا جدك؟ -> نعم، هذا جدي أنا", qAns: "ist das dein opa?", aAns: "ja, das ist mein opa" },
    { id: "q8", title: "أهذا جدك؟ -> لا، هذا جدك أنت", qAns: "ist das dein opa?", aAns: "nein, das ist dein opa" },
    { id: "q9", title: "أهذه والدتك؟ -> نعم، هذه والدتي أنا", qAns: "ist das deine mutter?", aAns: "ja, das ist meine mutter" },
    { id: "q10", title: "أهذه والدتك؟ -> لا، هذه والدتك أنت", qAns: "ist das deine mutter?", aAns: "nein, das ist deine mutter" },
    { id: "q11", title: "أهذا أخوك؟ -> نعم، هذا أخي أنا", qAns: "ist das dein bruder?", aAns: "ja, das ist mein bruder" },
    { id: "q12", title: "أهذا أخوك؟ -> لا، هذا أخوك أنت", qAns: "ist das dein bruder?", aAns: "nein, das ist dein bruder" },
    { id: "q13", title: "أهذه أختك؟ -> نعم، هذه أختي أنا", qAns: "ist das deine schwester?", aAns: "ja, das ist meine schwester" },
    { id: "q14", title: "أهذه أختك؟ -> لا، هذه أختك أنت", qAns: "ist das deine schwester?", aAns: "nein, das ist deine schwester" }
  ];

  // بيانات الاختيار من متعدد
  const quizData = [
    { id: 1, text: "Ist das dein Bruder? - Ja, das ist ( ___ ) Bruder.", audio: "Ist das dein Bruder? Ja, das ist mein Bruder.", options: ["mein", "dein", "ich"], correct: "mein" },
    { id: 2, text: "Wo ist deine Oma? - ( ___ ) Oma ist nicht da.", audio: "Wo ist deine Oma? Meine Oma ist nicht da.", options: ["Deine", "Du", "Meine"], correct: "Meine" },
    { id: 3, text: "Wie heißt ( ___ ) Vater? - Mein Vater heißt Ali.", audio: "Wie heißt dein Vater? Mein Vater heißt Ali.", options: ["mein", "dein", "du"], correct: "dein" },
    { id: 4, text: "Wo ist deine Mutter? - Da ist ( ___ ) Mutter.", audio: "Wo ist deine Mutter? Da ist meine Mutter.", options: ["ich", "deine", "meine"], correct: "meine" },
    { id: 5, text: "Wo ist ( ___ ) Schwester? - Da ist meine Schwester.", audio: "Wo ist deine Schwester? Da ist meine Schwester.", options: ["meine", "deine", "du"], correct: "deine" },
    { id: 6, text: "Ist das ( ___ ) Mutter? - Ja, das ist meine Mutter.", audio: "Ist das deine Mutter? Ja, das ist meine Mutter.", options: ["deine", "meine", "ihr"], correct: "deine" },
    { id: 7, text: "Wo ist dein Vater? - ( ___ ) Vater ist nicht da.", audio: "Wo ist dein Vater? Mein Vater ist nicht da.", options: ["Ich", "Mein", "Dein"], correct: "Mein" },
    { id: 8, text: "Wie alt ist dein Freund? - ( ___ ) Freund ist 10.", audio: "Wie alt ist dein Freund? Mein Freund ist 10.", options: ["Mein", "Dein", "Du"], correct: "Mein" },
    { id: 9, text: "Ist das ( ___ ) Bruder? - Nein, das ist mein Freund.", audio: "Ist das dein Bruder? Nein, das ist mein Freund.", options: ["mein", "dein", "ich"], correct: "dein" },
    { id: 10, text: "Wie heißt deine Oma? - ( ___ ) Oma heißt Anne.", audio: "Wie heißt deine Oma? Meine Oma heißt Anne.", options: ["Meine", "Deine", "Du"], correct: "Meine" }
  ];

  // الحالات (States) لتخزين المدخلات والنتائج
  const [familyInputs, setFamilyInputs] = useState({});
  const [qaInputs, setQaInputs] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  // دالة النطق الصوتي
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // معالجة تغييرات حقول العائلة
  const handleFamilyChange = (id, field, value) => {
    setFamilyInputs(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const checkFamilyItem = (uniqueId, correctArt, correctPoss, correctWord) => {
    const current = familyInputs[uniqueId] || {};
    const artValid = (current.art || "").trim().toLowerCase() === correctArt.toLowerCase();
    const possValid = (current.poss || "").trim().toLowerCase() === correctPoss.toLowerCase();
    const wordValid = (current.word || "").trim().toLowerCase() === correctWord.toLowerCase();

    setFamilyInputs(prev => ({
      ...prev,
      [uniqueId]: {
        ...current,
        artStatus: artValid ? 'correct' : 'wrong',
        possStatus: possValid ? 'correct' : 'wrong',
        wordStatus: wordValid ? 'correct' : 'wrong',
      }
    }));
  };

  // معالجة تغييرات الأسئلة
  const handleQaChange = (id, field, value) => {
    setQaInputs(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  };

  const checkQaItem = (id, correctQ, correctA) => {
    const current = qaInputs[id] || {};
    const qValid = (current.q || "").trim().toLowerCase() === correctQ.toLowerCase();
    const aValid = (current.a || "").trim().toLowerCase() === correctA.toLowerCase();

    setQaInputs(prev => ({
      ...prev,
      [id]: {
        ...current,
        qStatus: qValid ? 'correct' : 'wrong',
        aStatus: aValid ? 'correct' : 'wrong',
      }
    }));
  };

  // معالجة إجابات الاختيار من متعدد
  const handleQuizChoice = (qId, option) => {
    if (quizAnswers[qId]) return;

    const question = quizData.find(q => q.id === qId);
    const isCorrect = option === question.correct;

    setQuizAnswers(prev => ({ ...prev, [qId]: { selected: option, isCorrect } }));

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongCount(prev => prev + 1);
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setCorrectCount(0);
    setWrongCount(0);
  };

  // تنسيقات ديناميكية تعتمد على ثيم الشمس (Light) والقمر (Dark)
  const currentStyles = {
    ...styles,
    body: {
      ...styles.body,
      backgroundColor: isLight ? '#f8fafc' : '#0f172a',
      color: isLight ? '#0f172a' : '#f8fafc',
    },
    topBar: {
      ...styles.topBar,
      backgroundColor: isLight ? '#ffffff' : '#1e293b',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #334155',
      boxShadow: isLight ? '0 4px 12px rgba(0,0,0,0.05)' : '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
    },
    topBarP: {
      ...styles.topBarP,
      color: isLight ? '#475569' : '#94a3b8',
    },
    categoryBanner: {
      ...styles.categoryBanner,
      background: isLight ? '#ffffff' : 'linear-gradient(135deg, #1e293b, #0f172a)',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #334155',
    },
    categoryHeader: {
      ...styles.categoryHeader,
      borderBottom: isLight ? '2px solid #cbd5e1' : '2px solid #334155',
    },
    card: {
      ...styles.card,
      backgroundColor: isLight ? '#ffffff' : '#334155',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #475569',
      boxShadow: isLight ? '0 4px 12px rgba(0,0,0,0.05)' : '0 8px 20px -4px rgba(0, 0, 0, 0.4)',
    },
    cardContent: {
      ...styles.cardContent,
      background: isLight ? '#ffffff' : '#334155',
    },
    inputSpan: {
      ...styles.inputSpan,
      color: isLight ? '#334155' : '#f1f5f9',
    },
    inputField: {
      ...styles.inputField,
      background: isLight ? '#f8fafc' : '#1e293b',
      color: isLight ? '#0f172a' : '#ffffff',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #64748b',
    },
    qaSection: {
      ...styles.qaSection,
      backgroundColor: isLight ? '#ffffff' : '#1e293b',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #334155',
      boxShadow: isLight ? '0 4px 12px rgba(0,0,0,0.05)' : '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
    },
    qaBox: {
      ...styles.qaBox,
      backgroundColor: isLight ? '#f8fafc' : '#26334d',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #3b4d76',
    },
    qaTitle: {
      ...styles.qaTitle,
      color: isLight ? '#0f172a' : '#ffffff',
    },
    qaLabel: {
      ...styles.qaLabel,
      color: isLight ? '#475569' : '#cbd5e1',
    },
    qaInput: {
      ...styles.qaInput,
      background: isLight ? '#ffffff' : '#1e293b',
      color: isLight ? '#0f172a' : '#ffffff',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #64748b',
    },
    quizSection: {
      ...styles.quizSection,
      backgroundColor: isLight ? '#ffffff' : '#1e293b',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #334155',
      boxShadow: isLight ? '0 4px 12px rgba(0,0,0,0.05)' : '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
    },
    scoreboard: {
      ...styles.scoreboard,
      background: isLight ? '#f1f5f9' : '#091024',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #1e2d54',
    },
    scoreLabel: {
      ...styles.scoreLabel,
      color: isLight ? '#475569' : '#cbd5e1',
    },
    questionCard: {
      ...styles.questionCard,
      background: isLight ? '#f8fafc' : '#091024',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #1e2d54',
      borderRight: '4px solid #00a3ff',
    },
    questionContent: {
      ...styles.questionContent,
      color: isLight ? '#0f172a' : '#ffffff',
    },
    optionBtn: {
      ...styles.optionBtn,
      background: isLight ? '#ffffff' : '#253356',
      border: isLight ? '1px solid #cbd5e1' : '1px solid #3b4d76',
      color: isLight ? '#0f172a' : '#ffffff',
      boxShadow: isLight ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
    },
    btnReset: {
      ...styles.btnReset,
      background: isLight ? '#f1f5f9' : '#1e2d54',
      color: isLight ? '#0284c7' : '#38bdf8',
      border: isLight ? '1px solid #0284c7' : '1px solid #00a3ff',
    }
  };

  return (
    <div style={currentStyles.body}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* زر تبديل الثيم (شمس / قمر) في أعلى الشاشة */}
      <div style={styles.themeToggleContainer}>
        <button style={styles.themeToggleBtn} onClick={toggleTheme} title="تغيير المظهر">
          {isLight ? <i className="fa-solid fa-moon" style={{ color: '#1e293b' }}></i> : <i className="fa-solid fa-sun" style={{ color: '#facc15' }}></i>}
        </button>
      </div>

      {/* شريط العنوان العلوي */}
      <div style={currentStyles.topBar}>
        <h1 style={styles.topBarH1}><i className="fa-solid fa-users"></i> Meine Familie & Fragen</h1>
        <p style={currentStyles.topBarP}>اختبار أفراد العائلة والأسئلة وحوارات ضمائر الملكية (Lektion 6)</p>
      </div>

      {/* الكروت التفاعلية لأفراد العائلة */}
      {categoriesData.map((cat, catIndex) => (
        <React.Fragment key={catIndex}>
          <div style={currentStyles.categoryBanner}>
            <h2 style={styles.categoryBannerH2}>{cat.categoryTitle}</h2>
          </div>
          {cat.sections.map((sec, sIndex) => {
            const uniqueSecKey = `${catIndex}-${sIndex}`;
            return (
              <div key={uniqueSecKey} style={styles.sectionContainer}>
                <div style={currentStyles.categoryHeader}><i className="fa-solid fa-bookmark"></i> {sec.title}</div>
                <div style={styles.grid}>
                  {sec.items.map((item, iIndex) => {
                    const uniqueId = `${catIndex}-${sIndex}-${iIndex}`;
                    const itemData = familyInputs[uniqueId] || {};
                    return (
                      <div key={uniqueId} style={currentStyles.card}>
                        <div style={currentStyles.cardContent}>
                          <div style={styles.wordArabic}>{item.ar}</div>
                          <div style={styles.inputsWrapper}>
                            <div style={styles.inputRow}>
                              <span style={currentStyles.inputSpan}>الأداة:</span>
                              <input
                                type="text"
                                placeholder="der / die"
                                value={itemData.art || ''}
                                onChange={(e) => handleFamilyChange(uniqueId, 'art', e.target.value)}
                                style={{ ...currentStyles.inputField, ...(itemData.artStatus === 'correct' ? styles.correct : itemData.artStatus === 'wrong' ? styles.wrong : {}) }}
                              />
                            </div>
                            <div style={styles.inputRow}>
                              <span style={currentStyles.inputSpan}>الملكية:</span>
                              <input
                                type="text"
                                placeholder={sec.possessive === 'mein' ? 'mein / meine' : 'dein / deine'}
                                value={itemData.poss || ''}
                                onChange={(e) => handleFamilyChange(uniqueId, 'poss', e.target.value)}
                                style={{ ...currentStyles.inputField, ...(itemData.possStatus === 'correct' ? styles.correct : itemData.possStatus === 'wrong' ? styles.wrong : {}) }}
                              />
                            </div>
                            <div style={styles.inputRow}>
                              <span style={currentStyles.inputSpan}>الكلمة:</span>
                              <input
                                type="text"
                                placeholder="الاسم بالألمانية"
                                value={itemData.word || ''}
                                onChange={(e) => handleFamilyChange(uniqueId, 'word', e.target.value)}
                                style={{ ...currentStyles.inputField, ...(itemData.wordStatus === 'correct' ? styles.correct : itemData.wordStatus === 'wrong' ? styles.wrong : {}) }}
                              />
                            </div>
                          </div>
                          <button
                            style={styles.checkSingleBtn}
                            onClick={() => checkFamilyItem(uniqueId, sec.article, sec.possessive, item.de)}
                          >
                            فحص هذا العنصر
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </React.Fragment>
      ))}

      {/* قسم الأسئلة والأجوبة (Fragesätze) */}
      <div style={currentStyles.qaSection}>
        <div style={currentStyles.categoryHeader}><i className="fa-solid fa-comments"></i> الأسئلة والحوارات التعريفية (Fragesätze)</div>
        <p style={{ color: isLight ? '#475569' : '#94a3b8', marginBottom: '1rem', fontSize: '0.85rem' }}>اكتب الأسئلة والإجابات باللغة الألمانية في المربعات المخصصة ثم اضغط تحقق:</p>
        <div style={styles.qaContainer}>
          {qaData.map((item) => {
            const qaState = qaInputs[item.id] || {};
            return (
              <div key={item.id} style={currentStyles.qaBox}>
                <div style={currentStyles.qaTitle}><i className="fa-solid fa-circle-question" style={{ color: '#0284c7' }}></i> {item.title}</div>
                <div style={styles.qaFieldGroup}>
                  <label style={currentStyles.qaLabel}>اكتب السؤال بالألمانية:</label>
                  <input
                    type="text"
                    placeholder="اكتب السؤال هنا..."
                    value={qaState.q || ''}
                    onChange={(e) => handleQaChange(item.id, 'q', e.target.value)}
                    style={{ ...currentStyles.qaInput, ...(qaState.qStatus === 'correct' ? styles.correct : qaState.qStatus === 'wrong' ? styles.wrong : {}) }}
                  />
                </div>
                <div style={styles.qaFieldGroup}>
                  <label style={currentStyles.qaLabel}>اكتب الإجابة بالألمانية:</label>
                  <input
                    type="text"
                    placeholder="اكتب الإجابة هنا..."
                    value={qaState.a || ''}
                    onChange={(e) => handleQaChange(item.id, 'a', e.target.value)}
                    style={{ ...currentStyles.qaInput, ...(qaState.aStatus === 'correct' ? styles.correct : qaState.aStatus === 'wrong' ? styles.wrong : {}) }}
                  />
                </div>
                <button style={styles.qaCheckBtn} onClick={() => checkQaItem(item.id, item.qAns, item.aAns)}>تحقق من الإجابة</button>
              </div>
            );
          })}
        </div>
      </div>

      {/* قسم تمارين ضمائر الملكية المتعددة */}
      <div style={currentStyles.quizSection}>
        <div style={currentStyles.categoryHeader}><i className="fa-solid fa-list-check"></i> Die Possessivpronomen - تمارين اختيار من متعدد</div>

        <div style={currentStyles.scoreboard}>
          <div style={styles.scoreItem}>
            <span style={currentStyles.scoreLabel}>إجمالي الأسئلة</span>
            <span style={{ ...styles.scoreValue, color: isLight ? '#0f172a' : '#ffffff' }}>{quizData.length}</span>
          </div>
          <div style={styles.scoreItem}>
            <span style={currentStyles.scoreLabel}>إجابات صحيحة</span>
            <span style={{ ...styles.scoreValue, color: '#22c55e' }}>{correctCount}</span>
          </div>
          <div style={styles.scoreItem}>
            <span style={currentStyles.scoreLabel}>إجابات خاطئة</span>
            <span style={{ ...styles.scoreValue, color: '#ef4444' }}>{wrongCount}</span>
          </div>
        </div>

        <div style={styles.questionsList}>
          {quizData.map((q) => {
            const answerState = quizAnswers[q.id];
            return (
              <div key={q.id} style={currentStyles.questionCard}>
                <button style={styles.btnAudio} onClick={() => speakText(q.audio)}>🔊</button>
                <div style={currentStyles.questionContent}>
                  <span style={styles.qNum}>{q.id}.</span>
                  <span>{q.text.split('( ___ )')[0]}</span>
                  <span style={styles.optionsInline}>
                    {q.options.map((opt, i) => {
                      let btnStyle = currentStyles.optionBtn;
                      if (answerState) {
                        if (opt === q.correct) {
                          btnStyle = { ...currentStyles.optionBtn, ...styles.correctOpt };
                        } else if (opt === answerState.selected && !answerState.isCorrect) {
                          btnStyle = { ...currentStyles.optionBtn, ...styles.wrongOpt };
                        }
                      }
                      return (
                        <React.Fragment key={i}>
                          {i > 0 && " - "}
                          <button
                            style={btnStyle}
                            onClick={() => handleQuizChoice(q.id, opt)}
                            disabled={!!answerState}
                          >
                            {opt}
                          </button>
                        </React.Fragment>
                      );
                    })}
                  </span>
                  <span>{q.text.split('( ___ )')[1]}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={styles.actionsBar}>
          <button style={currentStyles.btnReset} onClick={resetQuiz}>إعادة المحاولة Reset</button>
        </div>
      </div>
    </div>
  );
}

// التنسيقات الأساسية
const styles = {
  body: {
    fontFamily: "'Tajawal', sans-serif",
    minHeight: '100vh',
    padding: '1rem 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  },
  themeToggleContainer: {
    width: '100%',
    maxWidth: '900px',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '0.5rem',
    boxSizing: 'border-box'
  },
  themeToggleBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '1.4rem',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease'
  },
  topBar: {
    width: '100%',
    maxWidth: '900px',
    padding: '1.2rem 1rem',
    borderRadius: '24px 6px',
    textAlign: 'center',
    marginBottom: '1.5rem',
    boxSizing: 'border-box'
  },
  topBarH1: {
    fontSize: '1.5rem',
    color: '#38bdf8',
    fontFamily: "'Fredoka', sans-serif",
    marginBottom: '0.4rem'
  },
  topBarP: {
    fontSize: '0.85rem'
  },
  categoryBanner: {
    width: '100%',
    maxWidth: '900px',
    padding: '0.8rem 1rem',
    borderRadius: '24px 6px',
    margin: '1.8rem 0 1rem 0',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  categoryBannerH2: {
    fontSize: '1.3rem',
    color: '#facc15',
    fontFamily: "'Fredoka', sans-serif"
  },
  sectionContainer: {
    width: '100%',
    maxWidth: '900px',
    marginBottom: '1.5rem',
    boxSizing: 'border-box'
  },
  categoryHeader: {
    fontSize: '1.1rem',
    color: '#38bdf8',
    marginBottom: '1rem',
    paddingBottom: '0.3rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.2rem',
    direction: 'ltr',
    width: '100%',
    boxSizing: 'border-box'
  },
  card: {
    borderRadius: '24px 6px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    direction: 'rtl',
    position: 'relative',
    minHeight: '210px',
    boxSizing: 'border-box'
  },
  cardContent: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    width: '100%',
    boxSizing: 'border-box'
  },
  wordArabic: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: '#facc15',
    textAlign: 'right',
    width: '100%'
  },
  inputsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
    boxSizing: 'border-box'
  },
  inputRow: {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box'
  },
  inputSpan: {
    fontSize: '0.8rem',
    width: '55px',
    textAlign: 'right',
    fontWeight: '700',
    flexShrink: 0
  },
  inputField: {
    flex: 1,
    width: '100%',
    padding: '6px 8px',
    borderRadius: '20px 4px',
    fontSize: '0.85rem',
    textAlign: 'center',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  },
  correct: {
    borderColor: '#16a34a !important',
    backgroundColor: '#064e3b !important',
    color: '#dcfce7 !important'
  },
  wrong: {
    borderColor: '#dc2626 !important',
    backgroundColor: '#7f1d1d !important',
    color: '#fee2e2 !important'
  },
  checkSingleBtn: {
    backgroundColor: '#0ea5e9',
    color: '#fff',
    border: 'none',
    padding: '7px',
    borderRadius: '20px 4px',
    fontWeight: '700',
    cursor: 'pointer',
    width: '100%',
    fontSize: '0.85rem',
    transition: '0.2s',
    boxSizing: 'border-box'
  },
  qaSection: {
    width: '100%',
    maxWidth: '900px',
    marginTop: '2rem',
    borderRadius: '24px 6px',
    padding: '1.2rem',
    boxSizing: 'border-box'
  },
  qaContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
    boxSizing: 'border-box'
  },
  qaBox: {
    borderRadius: '24px 6px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    boxSizing: 'border-box'
  },
  qaTitle: {
    fontSize: '0.95rem',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem'
  },
  qaFieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    boxSizing: 'border-box'
  },
  qaLabel: {
    fontSize: '0.75rem',
    fontWeight: '700'
  },
  qaInput: {
    width: '100%',
    padding: '7px 8px',
    borderRadius: '20px 4px',
    fontSize: '0.85rem',
    textAlign: 'center',
    outline: 'none',
    boxSizing: 'border-box'
  },
  qaCheckBtn: {
    backgroundColor: '#0284c7',
    color: 'white',
    border: 'none',
    padding: '7px',
    borderRadius: '20px 4px',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '0.85rem',
    marginTop: '0.3rem',
    boxSizing: 'border-box'
  },
  quizSection: {
    width: '100%',
    maxWidth: '900px',
    marginTop: '2rem',
    borderRadius: '24px 6px',
    padding: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    boxSizing: 'border-box'
  },
  scoreboard: {
    borderRadius: '24px 6px',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    textAlign: 'center',
    gap: '8px',
    boxSizing: 'border-box'
  },
  scoreItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  scoreLabel: {
    fontSize: '0.8rem'
  },
  scoreValue: {
    fontSize: '1.3rem',
    fontWeight: 'bold'
  },
  questionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    boxSizing: 'border-box'
  },
  questionCard: {
    borderRadius: '24px 6px',
    padding: '12px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    direction: 'rtl',
    boxSizing: 'border-box'
  },
  btnAudio: {
    background: 'transparent',
    border: 'none',
    color: '#38bdf8',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  questionContent: {
    direction: 'ltr',
    textAlign: 'left',
    fontSize: '0.95rem',
    fontWeight: '600',
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '6px',
    flex: 1
  },
  qNum: {
    color: '#00a3ff',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  optionsInline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    margin: '0 2px'
  },
  optionBtn: {
    padding: '3px 10px',
    borderRadius: '16px 4px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-block'
  },
  correctOpt: {
    backgroundColor: '#22c55e !important',
    borderColor: '#22c55e !important',
    color: '#ffffff !important'
  },
  wrongOpt: {
    backgroundColor: '#ef4444 !important',
    borderColor: '#ef4444 !important',
    color: '#ffffff !important'
  },
  actionsBar: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px'
  },
  btnReset: {
    padding: '8px 20px',
    borderRadius: '20px 4px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};