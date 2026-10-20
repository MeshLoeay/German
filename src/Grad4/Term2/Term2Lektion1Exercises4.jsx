import React, { useState, useEffect, useRef } from 'react';

export default function GermanQuizApp() {
  // حالة أسئلة الاختيارات
  const [answersState, setAnswersState] = useState({});

  const handleCheckAnswer = (questionIndex, optionIndex, isCorrect) => {
    setAnswersState(prev => ({
      ...prev,
      [questionIndex]: { optionIndex, isCorrect }
    }));
  };

  // حالات وتفاصيل التوصيل (Match)
  const [firstSelected, setFirstSelected] = useState(null);
  const [connections, setConnections] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const matchAreaRef = useRef(null);

  const handleMatchItemClick = (side, id, elementId) => {
    const el = document.getElementById(elementId);
    if (!el) return;

    if (!firstSelected) {
      setFirstSelected({ side, id, elementId });
    } else {
      if (firstSelected.elementId === elementId) {
        setFirstSelected(null);
        return;
      }
      if (firstSelected.side === side) {
        setFirstSelected({ side, id, elementId });
        return;
      }

      const isCorrect = (firstSelected.id === id);
      const rightId = firstSelected.side === 'right' ? firstSelected.id : id;
      const leftId = firstSelected.side === 'left' ? firstSelected.id : id;

      const newConnections = connections.filter(
        conn => conn.rightId !== rightId && conn.leftId !== leftId
      );

      newConnections.push({ rightId, leftId, isCorrect });
      setConnections(newConnections);
      setFirstSelected(null);
    }
  };

  const handleMouseMove = (e) => {
    if (!firstSelected || !matchAreaRef.current) return;
    const wrapperRect = matchAreaRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - wrapperRect.left,
      y: e.clientY - wrapperRect.top
    });
  };

  // حساب إحداثيات عناصر التوصيل
  const [elementCoords, setElementCoords] = useState({});
  useEffect(() => {
    const updateCoords = () => {
      if (!matchAreaRef.current) return;
      const rect = matchAreaRef.current.getBoundingClientRect();
      const coords = {};
      ['r-1', 'r-2', 'r-3', 'l-1', 'l-2', 'l-3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const elRect = el.getBoundingClientRect();
          coords[id] = {
            x: (id.startsWith('r') ? elRect.right : elRect.left) - rect.left,
            y: elRect.top + elRect.height / 2 - rect.top
          };
        }
      });
      setElementCoords(coords);
    };

    updateCoords();
    window.addEventListener('resize', updateCoords);
    return () => window.removeEventListener('resize', updateCoords);
  }, []);

  const getActiveLineCoords = () => {
    if (!firstSelected || !elementCoords[firstSelected.elementId]) return null;
    const start = elementCoords[firstSelected.elementId];
    return {
      x1: start.x,
      y1: start.y,
      x2: mousePos.x,
      y2: mousePos.y
    };
  };

  const activeLine = getActiveLineCoords();

  return (
    <div style={styles.body} onMouseMove={handleMouseMove}>
      {/* الشريط العلوي الرئيسي */}
      <div style={styles.mainHeader}>
        <h1 style={styles.mainHeaderH1}>Was passt zusammen? 🧩</h1>
      </div>

      <div style={styles.containerGrid}>

        {/* القسم الأول: الجمل الثلاث العليا */}
        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>أولاً: الجمل المترابطة للتعبير عن الرغبة</div>
          <hr style={styles.cardDivider} />

          <div style={styles.phraseBtn}>
            <div style={styles.arabicSide}>أنا أريد أن أقرأ . أُريد <span style={styles.highlightWordAr}>الكتاب</span></div>
            <div style={styles.germanSide}>Ich möchte lesen. Ich möchte <span style={styles.highlightWordDe}>das Buch</span></div>
          </div>

          <div style={styles.phraseBtn}>
            <div style={styles.arabicSide}>أنا أريد أن ألون . اعطيني <span style={styles.highlightWordAr}>فرشاة الألوان</span> !</div>
            <div style={styles.germanSide}>Ich möchte malen. Gib mir <span style={styles.highlightWordDe}>den Pinsel</span> !</div>
          </div>

          <div style={styles.phraseBtn}>
            <div style={styles.arabicSide}>أنا أريد أن أكتب . معاك <span style={styles.highlightWordAr}>قلم حبر</span>؟</div>
            <div style={styles.germanSide}>Ich möchte schreiben. Hast du <span style={styles.highlightWordDe}>den Füller</span>?</div>
          </div>
        </div>

        {/* القسم الثاني: سؤال التوصيل */}
        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>ثانياً: صل كل جملة بما يناسبها (Was passt zusammen?)</div>
          <hr style={styles.cardDivider} />
          <div style={styles.matchInstruction}>اضغط على أي عنصر (من اليمين أو اليسار)، سيتحرك معك القلم لتوصله بالطرف الآخر:</div>

          <div style={styles.matchWrapper} ref={matchAreaRef} id="match-area">
            <svg style={styles.connectionSvg} id="connection-svg">
              {activeLine && (
                <line
                  id="active-line"
                  x1={activeLine.x1}
                  y1={activeLine.y1}
                  x2={activeLine.x2}
                  y2={activeLine.y2}
                  stroke="#f0f6fc"
                  strokeWidth="3"
                  strokeDasharray="4,4"
                />
              )}
              {connections.map((conn, idx) => {
                const start = elementCoords[`r-${conn.rightId}`];
                const end = elementCoords[`l-${conn.leftId}`];
                if (!start || !end) return null;
                return (
                  <line
                    key={idx}
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    stroke={conn.isCorrect ? '#2ea043' : '#f85149'}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>

            <div style={{ ...styles.matchColumn, alignItems: 'flex-start' }} id="right-column">
              <div
                id="r-1"
                style={{
                  ...styles.matchItem,
                  ...styles.rightCol,
                  ...(firstSelected?.elementId === 'r-1' ? styles.matchItemSelected : {})
                }}
                onClick={() => handleMatchItemClick('right', '1', 'r-1')}
              >
                1. Ich möchte malen.
              </div>
              <div
                id="r-2"
                style={{
                  ...styles.matchItem,
                  ...styles.rightCol,
                  ...(firstSelected?.elementId === 'r-2' ? styles.matchItemSelected : {})
                }}
                onClick={() => handleMatchItemClick('right', '2', 'r-2')}
              >
                2. Ich möchte lesen.
              </div>
              <div
                id="r-3"
                style={{
                  ...styles.matchItem,
                  ...styles.rightCol,
                  ...(firstSelected?.elementId === 'r-3' ? styles.matchItemSelected : {})
                }}
                onClick={() => handleMatchItemClick('right', '3', 'r-3')}
              >
                3. Ich möchte schreiben.
              </div>
            </div>

            <div style={{ ...styles.matchColumn, alignItems: 'flex-end' }} id="left-column">
              <div
                id="l-3"
                style={{
                  ...styles.matchItem,
                  ...(firstSelected?.elementId === 'l-3' ? styles.matchItemSelected : {})
                }}
                onClick={() => handleMatchItemClick('left', '3', 'l-3')}
              >
                a) Hast du den Füller?
              </div>
              <div
                id="l-1"
                style={{
                  ...styles.matchItem,
                  ...(firstSelected?.elementId === 'l-1' ? styles.matchItemSelected : {})
                }}
                onClick={() => handleMatchItemClick('left', '1', 'l-1')}
              >
                b) Hast du einen Farbstift?
              </div>
              <div
                id="l-2"
                style={{
                  ...styles.matchItem,
                  ...(firstSelected?.elementId === 'l-2' ? styles.matchItemSelected : {})
                }}
                onClick={() => handleMatchItemClick('left', '2', 'l-2')}
              >
                c) Ich möchte das Buch.
              </div>
            </div>
          </div>
        </div>

        {/* القسم الثالث: أسئلة الاختيار بين القوسين */}
        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>ثالثاً: أكمل الجملة بالكلمة الصحيحة</div>
          <hr style={styles.cardDivider} />
          {renderQuizBox(301, "Pinsel, komm! Ich möchte (.......)", ["malen", "lesen", "singen"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(302, "Ball, komm! Ich möchte (.......)", ["singen", "schreiben", "spielen"], [false, false, true], answersState, handleCheckAnswer)}
          {renderQuizBox(303, "Füller, komm! Ich möchte (.......)", ["rechnen", "schreiben", "turnen"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(304, "Buch, komm! Ich möchte (.......)", ["lesen", "schreiben", "singen"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(305, "Schere, komm! Ich möchte (.......)", ["tanzen", "schlafen", "basteln"], [false, false, true], answersState, handleCheckAnswer)}
        </div>

        {/* القسم الرابع: التدريبات الشاملة السابقة */}
        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>رابعاً: التدريبات الإضافية (Wähle die richtige Option)</div>
          <hr style={styles.cardDivider} />
          {renderQuizBox(401, "1. In der Klasse ist die (.......).", ["Bleistift", "Tafel", "Tisch"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(402, "2. In der Schultasche habe ich das (.......).", ["Buch", "Tafel", "Fenster"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(403, "3. Ich möchte malen. Gib mir bitte den (.......).", ["Pinsel", "Fenster", "Papierkorb"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(404, "4. Ich möchte schreiben. Gib mir bitte die (.......).", ["Pult", "Waschbecken", "Kreide"], [false, false, true], answersState, handleCheckAnswer)}
          {renderQuizBox(405, "5. Ich möchte malen. Gib mir bitte den (.......).", ["Malkasten", "Radiergummi", "Tür"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(406, "6. Ich möchte schreiben. Gib mir bitte den (.......).", ["Buch", "Füller", "Klasse"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(407, "7. In der Klasse ist das (.......).", ["Pult", "Tür", "Schrank"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(408, "8. Ich möchte malen. Gib mir bitte den (.......).", ["Farbstift", "Kreide", "Federmäppchen"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(409, "9. Ich möchte schreiben. Ich möchte das (.......).", ["Heft", "Buch", "Tasche"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(410, "10. In der Schultasche habe ich den (.......).", ["Schrank", "Block", "Pult"], [false, true, false], answersState, handleCheckAnswer)}
        </div>

        {/* القسم الخامس: أسئلة أدوات التعريف (1 إلى 10) */}
        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>خامساً: اختر الأداة الصحيحة (der - das - die) (الجزء 1)</div>
          <hr style={styles.cardDivider} />
          {renderQuizBox(501, "1. Hier ist (.......) Buch.", ["der", "das", "die"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(502, "2. Das ist (.......) Klasse.", ["der", "das", "die"], [false, false, true], answersState, handleCheckAnswer)}
          {renderQuizBox(503, "3. Wo ist (.......) Block? - Hier.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(504, "4. Hier ist (.......) Schultasche.", ["der", "das", "die"], [false, false, true], answersState, handleCheckAnswer)}
          {renderQuizBox(505, "5. Hier ist (.......) Füller.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(506, "6. Das ist (.......) Malkasten.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(507, "7. Ist das (.......) Tisch? - Nein.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(508, "8. Was ist das? - Das ist (.......) Tafel.", ["der", "das", "die"], [false, false, true], answersState, handleCheckAnswer)}
          {renderQuizBox(509, "9. Hier ist (.......) Pinsel.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(510, "10. Das ist (.......) Schere.", ["der", "das", "die"], [false, false, true], answersState, handleCheckAnswer)}
        </div>

        {/* القسم السادس: أسئلة أدوات التعريف الجديدة (11 إلى 20) */}
        <div style={styles.contentCard}>
          <div style={styles.cardHeading}>سادساً: اختر الأداة الصحيحة (der - das - die) (الجزء 2 الجديدة)</div>
          <hr style={styles.cardDivider} />
          {renderQuizBox(601, "11. Was ist das? - Das ist (.......) Farbstift.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(602, "12. Ist das (.......) Federmäppchen? - Nein.", ["der", "das", "die"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(603, "13. Wo ist (.......) Turnzeug? - Hier.", ["der", "das", "die"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(604, "14. Hier ist (.......) Radiergummi.", ["der", "das", "die"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(605, "15. Das ist (.......) Schrank.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(606, "16. Wo ist (.......) Spitzer? - Hier.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(607, "17. Ist das (.......) Stuhl? - Ja.", ["der", "das", "die"], [true, false, false], answersState, handleCheckAnswer)}
          {renderQuizBox(608, "18. Das ist (.......) Fenster.", ["der", "das", "die"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(609, "19. Hier ist (.......) Heft.", ["der", "das", "die"], [false, true, false], answersState, handleCheckAnswer)}
          {renderQuizBox(610, "20. Das ist (.......) Lineal.", ["der", "das", "die"], [false, true, false], answersState, handleCheckAnswer)}
        </div>

      </div>

      <div style={styles.hint}>💡 هذا تدريب تفاعلي للحل والتقييم الذاتي</div>
    </div>
  );
}

// دالة مساعدة لتوليد عناصر الأسئلة بدون أي تفاعل للصوت
function renderQuizBox(id, questionText, options, correctness, answersState, handleCheckAnswer) {
  const formattedQuestion = questionText
    .replace('(.......)', '(<span style="color: #ffa657; font-weight:800;">.......</span>)')
    .replace('(.......)', '(<span style="color: #ffa657; font-weight:800;">.......</span>)');

  return (
    <div style={styles.quizBox} key={id}>
      <div
        style={styles.quizQuestionGermanStatic}
        dangerouslySetInnerHTML={{ __html: formattedQuestion }}
      />
      <div style={styles.quizOptions}>
        {options.map((opt, idx) => {
          const isSelected = answersState[id]?.optionIndex === idx;
          const isCorrect = correctness[idx];

          let btnStyle = { ...styles.optionBtn };
          if (isSelected) {
            btnStyle.backgroundColor = isCorrect ? '#238636' : '#da3633';
            btnStyle.borderColor = isCorrect ? '#2ea043' : '#f85149';
            btnStyle.color = '#ffffff';
            btnStyle.boxShadow = isCorrect ? '0 0 10px rgba(46, 160, 67, 0.5)' : '0 0 10px rgba(248, 81, 73, 0.5)';
          }

          return (
            <button
              key={idx}
              style={btnStyle}
              onClick={() => handleCheckAnswer(id, idx, isCorrect)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// الأنماط والتنسيقات
const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#c9d1d9',
    margin: 0,
    padding: '25px 15px',
    direction: 'rtl',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: 'transparent',
  },
  mainHeader: {
    color: '#f0f6fc',
    borderRadius: '30px 6px',
    padding: '16px 22px',
    marginBottom: '25px',
    maxWidth: '900px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    border: '1px solid #30363d',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
  },
  mainHeaderH1: {
    margin: 0,
    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
    fontWeight: 600,
  },
  containerGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '900px',
    width: '100%',
    boxSizing: 'border-box',
  },
  contentCard: {
    border: '1px solid #30363d',
    borderRadius: '30px 6px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  cardHeading: {
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    color: '#8b949e',
    textAlign: 'right',
    marginBottom: '0px',
    fontWeight: 700,
  },
  cardDivider: {
    border: 'none',
    borderTop: '1px solid #30363d',
    margin: '0 0 4px 0',
  },
  phraseBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #30363d',
    borderRadius: '30px 6px',
    padding: '12px 16px',
    gap: '15px',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  germanSide: {
    fontSize: 'clamp(0.95rem, 2vw, 1.02rem)',
    fontWeight: 700,
    color: '#a5d6ff',
    direction: 'ltr',
    textAlign: 'left',
    flex: 1,
    minWidth: '200px',
  },
  arabicSide: {
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    color: '#f0f6fc',
    textAlign: 'right',
    flex: 1,
    fontWeight: 600,
    minWidth: '200px',
  },
  quizBox: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '6px',
    paddingBottom: '8px',
    borderBottom: '1px dashed #21262d',
    width: '100%',
    boxSizing: 'border-box',
  },
  quizQuestionGermanStatic: {
    fontSize: 'clamp(0.95rem, 2vw, 1.02rem)',
    color: '#a5d6ff',
    direction: 'ltr',
    textAlign: 'left',
    fontWeight: 700,
    wordBreak: 'break-word',
    margin: 0,
    width: '100%',
  },
  quizOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    direction: 'ltr',
    justifyContent: 'flex-start',
    width: '100%',
  },
  optionBtn: {
    border: '1px solid #30363d',
    color: '#c9d1d9',
    padding: '6px 12px',
    borderRadius: '20px 6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    textAlign: 'center',
    direction: 'ltr',
    backgroundColor: 'transparent',
    width: 'fit-content',
  },
  matchInstruction: {
    fontSize: '0.9rem',
    color: '#8b949e',
    marginBottom: '10px',
    fontWeight: 600,
  },
  matchWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px 5px',
    boxSizing: 'border-box',
  },
  matchColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    zIndex: 2,
    width: 'fit-content',
  },
  matchItem: {
    border: '1px solid #30363d',
    color: '#a5d6ff',
    padding: '8px 12px',
    borderRadius: '30px 6px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 700,
    direction: 'ltr',
    textAlign: 'left',
    width: 'fit-content',
    transition: 'all 0.2s ease',
    userSelect: 'none',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
  },
  rightCol: {
    color: '#79c0ff',
  },
  matchItemSelected: {
    backgroundColor: '#1f6feb',
    borderColor: '#f0f6fc',
    color: '#ffffff',
    boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
  },
  connectionSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  },
  highlightWordDe: {
    color: '#ffa657',
    fontWeight: 800,
  },
  highlightWordAr: {
    color: '#ffa657',
    fontWeight: 800,
  },
  hint: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#8b949e',
    marginTop: '25px',
    fontStyle: 'italic',
    fontWeight: 500,
    padding: '0 10px',
  }
};