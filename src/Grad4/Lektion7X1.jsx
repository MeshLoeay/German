import React, { useState } from 'react';

export default function Lektion6Exercises() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isLight = theme === 'light';

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

  const [familyInputs, setFamilyInputs] = useState({});
  const [qaInputs, setQaInputs] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

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

  return (
    <div style={{ padding: '20px', fontFamily: 'Tajawal, sans-serif', backgroundColor: isLight ? '#f8fafc' : '#0f172a', color: isLight ? '#1e293b' : '#f8fafc', minHeight: '100vh', direction: 'rtl' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* زر التبديل */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button
          onClick={toggleTheme}
          title="تغيير المظهر"
          style={{ padding: '10px 15px', borderRadius: '12px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: isLight ? '#ffffff' : '#1e293b', color: isLight ? '#0f172a' : '#ffffff' }}
        >
          {isLight ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
        </button>
      </div>

      {/* العنوان الرئيسي */}
      <div style={{ textAlign: 'center', marginBottom: '30px', background: isLight ? '#ffffff' : '#1e293b', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h1><i className="fa-solid fa-users" style={{ marginLeft: '8px' }}></i> Meine Familie & Fragen</h1>
        <p style={{ opacity: 0.8, marginTop: '5px' }}>اختبار أفراد العائلة والأسئلة وحوارات ضمائر الملكية (Lektion 6)</p>
      </div>

      {/* أقسام العائلة */}
      {categoriesData.map((cat, catIndex) => (
        <React.Fragment key={catIndex}>
          <div style={{ marginTop: '25px', marginBottom: '15px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{cat.categoryTitle}</h2>
          </div>
          {cat.sections.map((sec, sIndex) => {
            const uniqueSecKey = `${catIndex}-${sIndex}`;
            return (
              <div key={uniqueSecKey} style={{ background: isLight ? '#ffffff' : '#1e293b', padding: '20px', borderRadius: '16px', marginBottom: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ fontWeight: '600', marginBottom: '12px', color: '#3b82f6' }}><i className="fa-solid fa-bookmark" style={{ marginLeft: '5px' }}></i> {sec.title}</div>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {sec.items.map((item, iIndex) => {
                    const uniqueId = `${catIndex}-${sIndex}-${iIndex}`;
                    const itemData = familyInputs[uniqueId] || {};
                    return (
                      <div key={uniqueId} style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', background: isLight ? '#f1f5f9' : '#0f172a', borderRadius: '12px' }}>
                        <div style={{ fontWeight: '700' }}>{item.ar}</div>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                          <div style={{ flex: 1, minWidth: '100px' }}>
                            <span style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>الأداة:</span>
                            <input
                              type="text"
                              placeholder="der / die"
                              value={itemData.art || ''}
                              onChange={(e) => handleFamilyChange(uniqueId, 'art', e.target.value)}
                              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', ...(itemData.artStatus === 'correct' ? styles.correct : itemData.artStatus === 'wrong' ? styles.wrong : {}) }}
                            />
                          </div>
                          <div style={{ flex: 1, minWidth: '100px' }}>
                            <span style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>الملكية:</span>
                            <input
                              type="text"
                              placeholder={sec.possessive === 'mein' ? 'mein / meine' : 'dein / deine'}
                              value={itemData.poss || ''}
                              onChange={(e) => handleFamilyChange(uniqueId, 'poss', e.target.value)}
                              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', ...(itemData.possStatus === 'correct' ? styles.correct : itemData.possStatus === 'wrong' ? styles.wrong : {}) }}
                            />
                          </div>
                          <div style={{ flex: 1, minWidth: '120px' }}>
                            <span style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>الكلمة:</span>
                            <input
                              type="text"
                              placeholder="الاسم بالألمانية"
                              value={itemData.word || ''}
                              onChange={(e) => handleFamilyChange(uniqueId, 'word', e.target.value)}
                              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', ...(itemData.wordStatus === 'correct' ? styles.correct : itemData.wordStatus === 'wrong' ? styles.wrong : {}) }}
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => checkFamilyItem(uniqueId, sec.article, sec.possessive, item.de)}
                          style={{ alignSelf: 'flex-start', marginTop: '6px', padding: '6px 14px', borderRadius: '8px', border: 'none', background: '#3b82f6', color: '#fff', cursor: 'pointer', fontSize: '13px' }}
                        >
                          فحص هذا العنصر
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </React.Fragment>
      ))}

      {/* قسم الأسئلة والحوارات */}
      <div style={{ marginTop: '30px', background: isLight ? '#ffffff' : '#1e293b', padding: '20px', borderRadius: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}><i className="fa-solid fa-comments" style={{ marginLeft: '5px' }}></i> الأسئلة والحوارات التعريفية (Fragesätze)</div>
        <p style={{ opacity: 0.8, marginBottom: '15px', fontSize: '14px' }}>اكتب الأسئلة والإجابات باللغة الألمانية في المربعات المخصصة ثم اضغط تحقق:</p>
        <div style={{ display: 'grid', gap: '15px' }}>
          {qaData.map((item) => {
            const qaState = qaInputs[item.id] || {};
            return (
              <div key={item.id} style={{ padding: '15px', background: isLight ? '#f1f5f9' : '#0f172a', borderRadius: '12px' }}>
                <div style={{ fontWeight: '600', marginBottom: '10px' }}><i className="fa-solid fa-circle-question" style={{ marginLeft: '5px' }}></i> {item.title}</div>
                <div style={{ display: 'grid', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>اكتب السؤال بالألمانية:</label>
                    <input
                      type="text"
                      placeholder="اكتب السؤال هنا..."
                      value={qaState.q || ''}
                      onChange={(e) => handleQaChange(item.id, 'q', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', ...(qaState.qStatus === 'correct' ? styles.correct : qaState.qStatus === 'wrong' ? styles.wrong : {}) }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px' }}>اكتب الإجابة بالألمانية:</label>
                    <input
                      type="text"
                      placeholder="اكتب الإجابة هنا..."
                      value={qaState.a || ''}
                      onChange={(e) => handleQaChange(item.id, 'a', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', ...(qaState.aStatus === 'correct' ? styles.correct : qaState.aStatus === 'wrong' ? styles.wrong : {}) }}
                    />
                  </div>
                </div>
                <button
                  onClick={() => checkQaItem(item.id, item.qAns, item.aAns)}
                  style={{ padding: '6px 14px', borderRadius: '8px', border: 'none', background: '#3b82f6', color: '#fff', cursor: 'pointer', fontSize: '13px' }}
                >
                  تحقق من الإجابة
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* قسم الاختيار من متعدد */}
      <div style={{ marginTop: '30px', background: isLight ? '#ffffff' : '#1e293b', padding: '20px', borderRadius: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '15px' }}><i className="fa-solid fa-list-check" style={{ marginLeft: '5px' }}></i> Die Possessivpronomen - تمارين اختيار من متعدد</div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ background: isLight ? '#f1f5f9' : '#0f172a', padding: '10px 15px', borderRadius: '10px', flex: 1, textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '12px', opacity: 0.8 }}>إجمالي الأسئلة</span>
            <span style={{ fontWeight: '700', fontSize: '16px' }}>{quizData.length}</span>
          </div>
          <div style={{ background: isLight ? '#f1f5f9' : '#0f172a', padding: '10px 15px', borderRadius: '10px', flex: 1, textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '12px', opacity: 0.8 }}>إجابات صحيحة</span>
            <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '16px' }}>{correctCount}</span>
          </div>
          <div style={{ background: isLight ? '#f1f5f9' : '#0f172a', padding: '10px 15px', borderRadius: '10px', flex: 1, textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '12px', opacity: 0.8 }}>إجابات خاطئة</span>
            <span style={{ color: '#ef4444', fontWeight: '700', fontSize: '16px' }}>{wrongCount}</span>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '12px' }}>
          {quizData.map((q) => {
            const answerState = quizAnswers[q.id];
            return (
              <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: isLight ? '#f1f5f9' : '#0f172a', borderRadius: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => speakText(q.audio)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#3b82f6' }}
                  title="استماع"
                >
                  🔊
                </button>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <span style={{ fontWeight: '600', marginLeft: '5px' }}>{q.id}.</span>
                  <span>{q.text.split('( ___ )')[0]}</span>
                  <span style={{ margin: '0 5px' }}>
                    {q.options.map((opt, i) => {
                      let customStyle = { padding: '4px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', cursor: 'pointer', background: isLight ? '#ffffff' : '#1e293b', color: isLight ? '#1e293b' : '#ffffff' };
                      if (answerState) {
                        if (opt === q.correct) {
                          customStyle = { ...customStyle, ...styles.correctOpt };
                        } else if (opt === answerState.selected && !answerState.isCorrect) {
                          customStyle = { ...customStyle, ...styles.wrongOpt };
                        }
                      }
                      return (
                        <React.Fragment key={i}>
                          {i > 0 && <span style={{ margin: '0 4px' }}>/</span>}
                          <button
                            style={customStyle}
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

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            onClick={resetQuiz}
            style={{ padding: '10px 20px', borderRadius: '10px', border: 'none', background: '#ef4444', color: '#fff', cursor: 'pointer', fontWeight: '600' }}
          >
            إعادة المحاولة Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  correct: {
    borderColor: '#16a34a',
    backgroundColor: '#064e3b',
    color: '#dcfce7'
  },
  wrong: {
    borderColor: '#dc2626',
    backgroundColor: '#7f1d1d',
    color: '#fee2e2'
  },
  correctOpt: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
    color: '#ffffff'
  },
  wrongOpt: {
    backgroundColor: '#ef4444',
    borderColor: '#ef4444',
    color: '#ffffff'
  }
};