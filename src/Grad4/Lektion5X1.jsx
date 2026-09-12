import React, { useState } from 'react';

export default function Lesson5() {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const totalCount = 37;

  // Track answered state for each question index
  const [answeredState, setAnsweredState] = useState({});

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAnswer = (qIndex, selectedOption, correctOption) => {
    if (answeredState[qIndex]) return; // Already answered

    const isCorrect = selectedOption.trim().toLowerCase() === correctOption.trim().toLowerCase();

    setAnsweredState(prev => ({
      ...prev,
      [qIndex]: { status: isCorrect ? 'correct' : 'wrong', selected: selectedOption }
    }));

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongCount(prev => prev + 1);
    }
  };

  const resetQuiz = () => {
    setCorrectCount(0);
    setWrongCount(0);
    setAnsweredState({});
  };

  const questionsData = [
    { num: 1, textStart: "Wo wohnst du? - (", options: ["Du", "Ich", "Wir"], textEnd: ") wohne in Kairo.", correct: "Ich" },
    { num: 2, textStart: "Was macht ihr? - (", options: ["Ihr", "Ich", "Wir"], textEnd: ") zeichnen.", correct: "Wir" },
    { num: 3, textStart: "Was spielt (", options: ["du", "ihr", "ich"], textEnd: ")? - Wir spielen Wurfeln.", correct: "ihr" },
    { num: 4, textStart: "Wer bist du? - (", options: ["Ich", "Ihr", "Du"], textEnd: ") bin Mona.", correct: "Ich" },
    { num: 5, textStart: "Darf ich mitspielen? - Klar. (", options: ["Ihr", "Wir", "Du"], textEnd: ") bist dran.", correct: "Du" },
    { num: 6, textStart: "Du und Sabine spielt. (", options: ["Wir", "Ich", "Ihr"], textEnd: ") spielt Memory.", correct: "Ihr" },
    { num: 7, textStart: "Hany und ich malen. (", options: ["Ich", "Wir", "Du"], textEnd: ") zeichnen auch.", correct: "Wir" },
    { num: 8, textStart: "Was macht Omar und du? - (", options: ["Wir", "Ich", "Du"], textEnd: ") spielen.", correct: "Wir" },
    { num: 9, textStart: "Wie heißt (", options: ["du", "ich", "wir"], textEnd: ")? - Ich heiße Marion.", correct: "du" },
    { num: 10, textStart: "Omar und (", options: ["du", "ihr", "ich"], textEnd: ") = wir", correct: "ich" },
    { num: 11, textStart: "(", options: ["Wir", "Du", "Ich"], textEnd: ") und Maria = ihr", correct: "Du" },
    { num: 12, textStart: "Bin ich dran? - Ja, (", options: ["ich", "du", "wir"], textEnd: ") bist dran.", correct: "du" },
    { num: 13, textStart: "Was machst du und Laila? Spielt (", options: ["ihr", "ich", "wir"], textEnd: ")? - Ja.", correct: "ihr" },
    { num: 14, textStart: "Was machst du? - (", options: ["Du", "Ihr", "Ich"], textEnd: ") male.", correct: "Ich" },
    { num: 15, textStart: "Wie alt bist du? - (", options: ["Du", "Ihr", "Ich"], textEnd: ") bin 6 Jahre alt.", correct: "Ich" },
    { num: 16, textStart: "Laila und ich spielen. (", options: ["Ihr", "Ich", "Wir"], textEnd: ") spielen verstecken.", correct: "Wir" },
    { num: 17, textStart: "Bist (", options: ["ich", "du", "wir"], textEnd: ") dran? - Ja, ich bin dran.", correct: "du" },
    { num: 18, textStart: "Ahmed = (", options: ["er", "sie", "ihr"], textEnd: ")", correct: "er" },
    { num: 19, textStart: "Sara = (", options: ["er", "sie", "ich"], textEnd: ")", correct: "sie" },
    { num: 20, textStart: "Sara und du = (", options: ["ihr", "sie", "ich"], textEnd: ")", correct: "ihr" },
    { num: 21, textStart: "Ich und Marwa = (", options: ["ihr", "sie", "wir"], textEnd: ")", correct: "wir" },
    { num: 22, textStart: "Mein Vater = (", options: ["er", "sie", "ich"], textEnd: ")", correct: "er" },
    { num: 23, textStart: "Frau Salwa = (", options: ["er", "sie", "ich"], textEnd: ")", correct: "sie" },
    { num: 24, textStart: "Wie heißt deine Schwester? - (", options: ["Sie", "Ich", "Er"], textEnd: ") heißt Lisa.", correct: "Sie" },
    { num: 25, textStart: "Wie alt ist Farid? - (", options: ["Ich", "Er", "Sie"], textEnd: ") ist 20 Jahre alt.", correct: "Er" },
    { num: 26, textStart: "Wie alt ist (", options: ["Karim", "Nadia", "du"], textEnd: ")? - Sie ist 7 Jahre alt.", correct: "Nadia" },
    { num: 27, textStart: "Das ist mein (", options: ["Freund", "Mama", "Freundin"], textEnd: "). Er heißt Kamal.", correct: "Freundin" },
    { num: 28, textStart: "Was spielst du? - (", options: ["Ich", "Du", "Wir"], textEnd: ") spiele Lego.", correct: "Ich" },
    { num: 29, textStart: "Was macht ihr denn da? - (", options: ["Ihr", "Ich", "Wir"], textEnd: ") zeichnen.", correct: "Wir" },
    { num: 30, textStart: "Wo ist denn dein Freund? - (", options: ["Ich", "Er", "Sie"], textEnd: ") ist nicht da.", correct: "Er" },
    { num: 31, textStart: "Wie heißt deine Mutter? - (", options: ["Sie", "Ich", "Er"], textEnd: ") heißt Angelika.", correct: "Sie" },
    { num: 32, textStart: "Wer bist du? - (", options: ["Ich", "Er", "Sie"], textEnd: ") bin Sabine.", correct: "Ich" },
    { num: 33, textStart: "Was macht Tina und du? - (", options: ["Wir", "Ich", "Du"], textEnd: ") malen.", correct: "Wir" },
    { num: 34, textStart: "Wie alt ist Tamer? - (", options: ["Ich", "Sie", "Er"], textEnd: ") ist 8 Jahre alt.", correct: "Er" },
    { num: 35, textStart: "Mona ist meine Freundin. (", options: ["Ich", "Du", "Sie"], textEnd: ") ist 9 Jahre alt.", correct: "Sie" },
    { num: 36, textStart: "Bist (", options: ["du", "ich", "er"], textEnd: ") müde?", correct: "du" },
    { num: 37, textStart: "Was macht ihr? - (", options: ["Wir", "Ich", "Ihr"], textEnd: ") lernen Deutsch.", correct: "Wir" }
  ];

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 'bold' }}>الدرس رقم 5</span>
          <h1 style={styles.mainTitle}>Grammatik</h1>
          <div style={styles.subTitle}>Die Personalpronomen - الشرح والتمارين الشاملة</div>
        </div>

        {/* Scoreboard Header */}
        <div style={styles.scoreboard}>
          <div style={styles.scoreItem}>
            <span style={styles.scoreLabel}>إجمالي الأسئلة</span>
            <span style={{ ...styles.scoreValue, ...styles.scoreTotal }}>{totalCount}</span>
          </div>
          <div style={styles.scoreItem}>
            <span style={styles.scoreLabel}>إجابات صحيحة</span>
            <span style={{ ...styles.scoreValue, ...styles.scoreCorrect }}>{correctCount}</span>
          </div>
          <div style={styles.scoreItem}>
            <span style={styles.scoreLabel}>إجابات خاطئة</span>
            <span style={{ ...styles.scoreValue, ...styles.scoreWrong }}>{wrongCount}</span>
          </div>
        </div>

        <div style={styles.sectionsWrapper}>
          {/* Basic Pronouns Section */}
          <div style={styles.cardSection}>
            <div style={styles.sectionHeading}>الضمائر الأساسية</div>
            <div style={styles.gridRow}>
              {[
                { de: 'Ich', ar: 'أنا' },
                { de: 'Du', ar: 'أنتَ – أنتِ' },
                { de: 'Wir', ar: 'نحن = أنا و أنت' },
                { de: 'Ihr', ar: 'أنتم = أنت و شخص اخر' }
              ].map((item, idx) => (
                <div key={idx} style={styles.pronounCard} onClick={() => speakText(item.de)}>
                  <div style={styles.pronounInfo}>
                    <span style={styles.deWord}>{item.de}</span>
                    <span style={styles.arMeaning}>{item.ar}</span>
                  </div>
                  <button style={styles.btnAudio} onClick={(e) => { e.stopPropagation(); speakText(item.de); }}>🔊</button>
                </div>
              ))}
            </div>
          </div>

          {/* Examples Section */}
          <div style={{ ...styles.cardSection, borderRightColor: '#22c55e' }}>
            <div style={styles.sectionHeading}>أمثلة وتوضيح</div>
            <div style={styles.verticalList}>
              <div style={styles.exampleCard} onClick={() => speakText('Was spielst du? Ich spiele Domio')}>
                <span style={styles.exampleText}>
                  <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>Was spielst du? (ماذا تلعب؟)</span> - Ich spiele Domio (أنا ألعب دومينو)
                </span>
                <button style={styles.btnAudio} onClick={(e) => { e.stopPropagation(); speakText('Was spielst du? Ich spiele Domio'); }}>🔊</button>
              </div>
              <div style={styles.exampleCard} onClick={() => speakText('Was spielst ihr? Wir spiele Domio')}>
                <span style={styles.exampleText}>
                  <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>Was spielst ihr? (ماذا تلعبون؟)</span> - Wir spiele Domio (نحن نلعب دومينو)
                </span>
                <button style={styles.btnAudio} onClick={(e) => { e.stopPropagation(); speakText('Was spielst ihr? Wir spiele Domio'); }}>🔊</button>
              </div>
            </div>
          </div>

          {/* Gender Pronouns Section */}
          <div style={{ ...styles.cardSection, borderRightColor: '#f59e0b' }}>
            <div style={styles.sectionHeading}>ضمائر الغائب</div>
            <div style={styles.gridRow}>
              {[
                { de: 'Er', ar: 'هو (مفرد مذكر)' },
                { de: 'Sie', ar: 'هي (مفرد مؤنث)' }
              ].map((item, idx) => (
                <div key={idx} style={styles.pronounCard} onClick={() => speakText(item.de)}>
                  <div style={styles.pronounInfo}>
                    <span style={styles.deWord}>{item.de}</span>
                    <span style={styles.arMeaning}>{item.ar}</span>
                  </div>
                  <button style={styles.btnAudio} onClick={(e) => { e.stopPropagation(); speakText(item.de); }}>🔊</button>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Exercises Section */}
          <div style={{ ...styles.cardSection, borderRightColor: '#38bdf8' }}>
            <div style={styles.sectionHeading}>تمارين إضافية على الضمائر</div>
            <div style={styles.verticalList}>
              {questionsData.map((q, qIndex) => {
                const answerState = answeredState[qIndex];
                return (
                  <div key={qIndex} style={styles.questionCard}>
                    <div style={styles.questionContent}>
                      <span style={styles.qNum}>{q.num}.</span>
                      <span>{q.textStart}</span>
                      <span style={styles.optionsInline}>
                        {q.options.map((opt, optIdx) => {
                          let currentBtnStyle = { ...styles.optionBtn };

                          if (answerState) {
                            const isThisSelected = opt.trim().toLowerCase() === answerState.selected.trim().toLowerCase();

                            if (isThisSelected) {
                              if (answerState.status === 'correct') {
                                currentBtnStyle = { ...currentBtnStyle, backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#ffffff' };
                              } else {
                                currentBtnStyle = { ...currentBtnStyle, backgroundColor: '#ef4444', borderColor: '#ef4444', color: '#ffffff' };
                              }
                            }
                          }

                          return (
                            <React.Fragment key={optIdx}>
                              {optIdx > 0 && ' - '}
                              <button
                                style={currentBtnStyle}
                                disabled={!!answerState}
                                onClick={() => handleAnswer(qIndex, opt, q.correct)}
                              >
                                {opt}
                              </button>
                            </React.Fragment>
                          );
                        })}
                      </span>
                      <span>{q.textEnd}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions Bar */}
          <div style={styles.actionsBar}>
            <button style={styles.btnReset} onClick={resetQuiz}>إعادة ضبط التمارين</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: '#0b1329',
    color: '#ffffff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '15px 8px',
    margin: 0,
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    direction: 'rtl'
  },
  container: {
    width: '100%',
    maxWidth: '850px',
    background: '#111c38',
    padding: '15px',
    borderRadius: '30px 6px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
    border: '1px solid #1e2d54',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  mainTitle: {
    textAlign: 'center',
    color: '#38bdf8',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0'
  },
  subTitle: {
    textAlign: 'center',
    color: '#cbd5e1',
    fontSize: '0.95rem',
    marginTop: '-4px',
    marginBottom: '4px'
  },
  scoreboard: {
    background: '#091024',
    border: '1px solid #1e2d54',
    borderRadius: '30px 6px',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    textAlign: 'center',
    gap: '8px'
  },
  scoreItem: { display: 'flex', flexDirection: 'column', gap: '2px' },
  scoreLabel: { fontSize: '0.85rem', color: '#cbd5e1' },
  scoreValue: { fontSize: '1.2rem', fontWeight: 'bold' },
  scoreTotal: { color: '#ffffff' },
  scoreCorrect: { color: '#22c55e' },
  scoreWrong: { color: '#ef4444' },
  sectionsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  cardSection: {
    background: '#091024',
    border: '1px solid #1e2d54',
    borderRight: '3px solid #00a3ff',
    borderRadius: '30px 6px',
    padding: '10px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  sectionHeading: {
    color: '#38bdf8',
    fontSize: '1.05rem',
    fontWeight: 'bold',
    borderBottom: '1px solid #1e2d54',
    paddingBottom: '5px'
  },
  gridRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px'
  },
  verticalList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  pronounCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#111c38',
    border: '1px solid #1e2d54',
    padding: '8px 10px',
    borderRadius: '30px 6px',
    cursor: 'pointer',
    gap: '8px'
  },
  pronounInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    direction: 'ltr'
  },
  deWord: {
    color: '#38bdf8',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  arMeaning: {
    color: '#ffffff',
    fontSize: '0.9rem',
    direction: 'rtl',
    textAlign: 'right'
  },
  exampleCard: {
    background: '#162242',
    border: '1px solid #1e2d54',
    borderLeft: '3px solid #22c55e',
    padding: '8px 10px',
    borderRadius: '30px 6px',
    cursor: 'pointer',
    direction: 'ltr',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  exampleText: {
    color: '#cbd5e1',
    fontSize: '0.9rem'
  },
  questionCard: {
    background: '#111c38',
    border: '1px solid #1e2d54',
    borderRight: '3px solid #00a3ff',
    borderRadius: '30px 6px',
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center',
    direction: 'rtl'
  },
  questionContent: {
    direction: 'ltr',
    textAlign: 'left',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '6px',
    width: '100%'
  },
  qNum: {
    color: '#00a3ff',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    marginLeft: '6px',
    minWidth: '22px'
  },
  optionsInline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    margin: '0 3px'
  },
  optionBtn: {
    background: '#253356',
    border: '1px solid #3b4d76',
    color: '#ffffff',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  btnAudio: {
    background: 'transparent',
    border: 'none',
    color: '#38bdf8',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  actionsBar: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4px'
  },
  btnReset: {
    background: '#1e2d54',
    border: '1px solid #00a3ff',
    color: '#38bdf8',
    padding: '8px 20px',
    borderRadius: '30px 6px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};