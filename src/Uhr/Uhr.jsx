import React, { useState, useEffect } from 'react';

export default function ClockApp() {
  const [activeTab, setActiveTab] = useState('clock'); // 'clock' or 'training'
  const [hour, setHour] = useState(3);
  const [minute, setMinute] = useState(5);

  // حالات قسم التدريبات
  const [quizQuestion, setQuizQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.75;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getGermanTimeText = (h, m) => {
    const hours = ["", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf"];
    const nextHour = h === 12 ? 1 : h + 1;
    const nextHourWord = hours[nextHour];
    const currentHourWord = h === 1 ? "ein Uhr" : `${hours[h]} Uhr`;

    if (m === 0) return `Es ist ${currentHourWord}.`;
    if (m === 5) return `Es ist fünf nach ${hours[h]}.`;
    if (m === 10) return `Es ist zehn nach ${hours[h]}.`;
    if (m === 15) return `Es ist Viertel nach ${hours[h]}.`;
    if (m === 20) return `Es ist zwanzig nach ${hours[h]}.`;
    if (m === 25) return `Es ist fünf vor halb ${nextHourWord}.`;
    if (m === 30) return `Es ist halb ${nextHourWord}.`;
    if (m === 35) return `Es ist fünf nach halb ${nextHourWord}.`;
    if (m === 40) return `Es ist zwanzig vor ${nextHourWord}.`;
    if (m === 45) return `Es ist Viertel vor ${nextHourWord}.`;
    if (m === 50) return `Es ist zehn vor ${nextHourWord}.`;
    if (m === 55) return `Es ist fünf vor ${nextHourWord}.`;

    return `Es ist ${hours[h]} Uhr ${m}.`;
  };

  const baseMinuteOffsets = [
    { m: 0, ar: (h, nxt) => `الساعة ${h}` },
    { m: 5, ar: (h, nxt) => `${h} و 5 دقائق` },
    { m: 10, ar: (h, nxt) => `${h} و 10 دقائق` },
    { m: 15, ar: (h, nxt) => `${h} و ربع` },
    { m: 20, ar: (h, nxt) => `${h} و ثلث` },
    { m: 25, ar: (h, nxt) => `${h} و نص إلا 5` },
    { m: 30, ar: (h, nxt) => `${h} و نص` },
    { m: 35, ar: (h, nxt) => `${h} و نص و 5` },
    { m: 40, ar: (h, nxt) => `${nxt} إلا ثلث` },
    { m: 45, ar: (h, nxt) => `${nxt} إلا ربع` },
    { m: 50, ar: (h, nxt) => `${nxt} إلا 10 دقائق` },
    { m: 55, ar: (h, nxt) => `${nxt} إلا 5 دقائق` },
  ];

  const [syncHour, setSyncHour] = useState(3);

  const handleSyncAllToTop = () => {
    setSyncHour(hour);
  };

  // إعداد سؤال عشوائي مستمر ومتجدد تلقائياً
  const generateNewQuestion = () => {
    const randomH = Math.floor(Math.random() * 12) + 1;
    const minutesList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const randomM = minutesList[Math.floor(Math.random() * minutesList.length)];

    const correctAnswer = getGermanTimeText(randomH, randomM);

    let optionsSet = new Set([correctAnswer]);
    while (optionsSet.size < 4) {
      const optH = Math.floor(Math.random() * 12) + 1;
      const optM = minutesList[Math.floor(Math.random() * minutesList.length)];
      optionsSet.add(getGermanTimeText(optH, optM));
    }

    const shuffledOptions = Array.from(optionsSet).sort(() => Math.random() - 0.5);

    setQuizQuestion({
      h: randomH,
      m: randomM,
      correctAnswer: correctAnswer,
      options: shuffledOptions,
      formattedTime: `${String(randomH).padStart(2, '0')}:${String(randomM).padStart(2, '0')}`
    });

    setSelectedOption(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const handleAnswerClick = (option) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);

    const correct = option === quizQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 1);
      speakText(option);
    }

    // الانتقال للسؤال التالي تلقائياً بعد ثانيتين للأسئلة المستمرة
    setTimeout(() => {
      generateNewQuestion();
    }, 1800);
  };

  const minuteAngle = minute * 6;
  const hourAngle = (hour % 12) * 30 + minute * 0.5;

  const germanSentence = getGermanTimeText(hour, minute);
  const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  const formellText = `formell: Es ist ${hour} Uhr ${minute > 0 ? minute : ''}`;

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes softGlowPink {
          0% {
            text-shadow: 0 0 5px rgba(255, 254, 254, 0.6), 0 0 10px rgba(255, 255, 255, 0.4);
            opacity: 0.92;
          }
          50% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.85), 0 0 18px rgba(246, 240, 243, 0.65);
            opacity: 1;
          }
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(231, 222, 226, 0.4);
            opacity: 0.92;
          }
        }
        @keyframes softGlowBlue {
          0% {
            text-shadow: 0 0 5px rgba(56, 189, 248, 0.6), 0 0 10px rgba(56, 189, 248, 0.4);
            opacity: 0.92;
          }
          50% {
            text-shadow: 0 0 10px rgba(56, 189, 248, 0.85), 0 0 18px rgba(56, 189, 248, 0.65);
            opacity: 1;
          }
          100% {
            text-shadow: 0 0 5px rgba(56, 189, 248, 0.6), 0 0 10px rgba(56, 189, 248, 0.4);
            opacity: 0.92;
          }
        }
        .glowing-pink {
          animation: softGlowPink 2.2s infinite ease-in-out;
        }
        .glowing-blue {
          animation: softGlowBlue 2.2s infinite ease-in-out;
        }
      `}</style>

      <main style={{ width: '100%', maxWidth: '850px', padding: '10px 12px', flex: 1, boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <p className="glowing-pink" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#5fee17', marginBottom: '6px' }}>
            شكر خاص للبشمهندسه مياده <br/> فى اتقانها فى عمل ساعه حلوه زى دى
          </p>
          <p className="glowing-blue" style={{ fontSize: '1.1rem', fontWeight: '700', color: '#38bdf8', marginBottom: '10px' }}>
            و شكرا لانها ادتهالنا كلنا بكل حب
          </p>
        </div>
        <h1 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          Die Uhrzeit — قراءة الساعة
        </h1>

        {/* أزرار التنقل الأساسية (الساعة - التدريب) */}
        <div style={{
          display: 'flex',
          gap: '12px',
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto 20px auto',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setActiveTab('clock')}
            style={{
              ...tabButtonStyle,
              opacity: activeTab === 'clock' ? 1 : 0.6,
              boxShadow: activeTab === 'clock' ? 'inset 0 0 0 2px currentColor' : 'none'
            }}
          >
            ⏰ الساعة
          </button>
          <button
            onClick={() => setActiveTab('training')}
            style={{
              ...tabButtonStyle,
              opacity: activeTab === 'training' ? 1 : 0.6,
              boxShadow: activeTab === 'training' ? 'inset 0 0 0 2px currentColor' : 'none'
            }}
          >
            🎯 التدريب
          </button>
        </div>

        {/* محتوى قسم الساعة */}
        {activeTab === 'clock' && (
          <>
            <section style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg viewBox="0 0 100 100" width="170" height="170" role="img" aria-label={formattedTime}>
                  <circle cx="50" cy="50" r="47" fill="transparent" stroke="currentColor" strokeWidth="2" opacity="0.8" />

                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, idx) => (
                    <line
                      key={idx}
                      x1="50"
                      y1="6"
                      x2="50"
                      y2={deg % 90 === 0 ? "12" : "9"}
                      stroke="currentColor"
                      strokeWidth={deg % 90 === 0 ? "2" : "1"}
                      transform={`rotate(${deg} 50 50)`}
                    />
                  ))}

                  <text x="50" y="22" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">12</text>
                  <text x="82" y="53" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">3</text>
                  <text x="50" y="84" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">6</text>
                  <text x="18" y="53" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">9</text>

                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="28"
                    stroke="#ef4444"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ transform: `rotate(${hourAngle}deg)`, transformOrigin: '50px 50px', transition: 'transform 0.3s ease' }}
                  />

                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="14"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    style={{ transform: `rotate(${minuteAngle}deg)`, transformOrigin: '50px 50px', transition: 'transform 0.3s ease' }}
                  />

                  <circle cx="50" cy="50" r="3" fill="#eab308" />
                </svg>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p dir="ltr" style={{ textAlign: 'left', fontSize: '0.78rem', opacity: 0.7, margin: 0 }}>Wie spät ist es?</p>
                <p dir="ltr" style={{ textAlign: 'left', fontSize: '1.3rem', fontWeight: '800', color: '#ef4444', lineHeight: 1.1, margin: 0 }}>
                  {germanSentence}
                </p>
                <p dir="ltr" style={{ textAlign: 'left', fontSize: '0.78rem', opacity: 0.75, margin: '0 0 2px 0' }}>
                  {formattedTime} · {formellText}
                </p>

                <div>
                  <button onClick={() => speakText(germanSentence)} style={soundButtonStyle}>
                    <span style={{ fontSize: '0.9rem', filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.8)) drop-shadow(0px 1px 3px rgba(0,0,0,0.3))' }}>🔊</span>
                    <span>استمع للنطق</span>
                  </button>
                </div>

                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 'bold', marginTop: '6px' }}>
                  اسحب لتغيير الساعة
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={hour}
                    onChange={(e) => setHour(parseInt(e.target.value))}
                    style={rangeInputStyle}
                  />
                </label>

                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 'bold', marginTop: '2px' }}>
                  اسحب لتغيير الدقائق
                  <input
                    type="range"
                    min="0"
                    max="55"
                    step="5"
                    value={minute}
                    onChange={(e) => setMinute(parseInt(e.target.value))}
                    style={rangeInputStyle}
                  />
                </label>
              </div>
            </section>

            {/* قسم الشرح والأمثلة */}
            <section style={{ marginTop: '12px' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '2px' }}>الشرح</h2>
              <p style={{ marginTop: '0', fontSize: '0.82rem', opacity: 0.85, lineHeight: '1.4', marginBottom: '8px' }}>
                في الكلام اليومي نستخدم <b>nach</b> (بعد) و <b>vor</b> (قبل) و <b>Viertel</b> (ربع) و <b>halb</b> (نصف). انتبهي: <b dir="ltr">halb vier</b> تعني ٣:٣٠ — أي «نصف الطريق إلى الرابعة». أما الصيغة الرسمية/الرقمية فتُقرأ كما هي: <span dir="ltr">15:30 → fünfzehn Uhr dreißig</span>.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
                <button
                  onClick={handleSyncAllToTop}
                  style={syncAllButtonStyle}
                >
                  اضغط لتظبيط الساعة اللي تحت على الساعة اللي فوق
                </button>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '35px 12px'
              }}>
                {baseMinuteOffsets.map((item, idx) => {
                  const hoursNames = ["", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf"];
                  const nxtH = syncHour === 12 ? 1 : syncHour + 1;
                  const nxtWord = hoursNames[nxtH];

                  let deText = "";
                  if (item.m === 0) deText = `${hoursNames[syncHour]} Uhr`;
                  else if (item.m === 5) deText = `fünf nach ${hoursNames[syncHour]}`;
                  else if (item.m === 10) deText = `zehn nach ${hoursNames[syncHour]}`;
                  else if (item.m === 15) deText = `Viertel nach ${hoursNames[syncHour]}`;
                  else if (item.m === 20) deText = `zwanzig nach ${hoursNames[syncHour]}`;
                  else if (item.m === 25) deText = `fünf vor halb ${nxtWord}`;
                  else if (item.m === 30) deText = `halb ${nxtWord}`;
                  else if (item.m === 35) deText = `fünf nach halb ${nxtWord}`;
                  else if (item.m === 40) deText = `zwanzig vor ${nxtWord}`;
                  else if (item.m === 45) deText = `Viertel vor ${nxtWord}`;
                  else if (item.m === 50) deText = `zehn vor ${nxtWord}`;
                  else if (item.m === 55) deText = `fünf vor ${nxtWord}`;

                  const displayTimeStr = `${String(syncHour).padStart(2, '0')}:${String(item.m).padStart(2, '0')}`;
                  const fullTextToSpeak = `Es ist ${deText}`;
                  const arabicText = item.ar(syncHour, nxtH);

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setHour(syncHour);
                        setMinute(item.m);
                        speakText(fullTextToSpeak);
                      }}
                      style={itemCardContainerStyle}
                    >
                      <div style={topBadgeStyle}>
                        <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#38bdf8', lineHeight: 1 }} dir="ltr">
                          {displayTimeStr}
                        </span>
                        <span style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '2px', filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.8)) drop-shadow(0px 1px 3px rgba(0,0,0,0.3))' }}>
                          🔊
                        </span>
                      </div>

                      <div style={itemBoxStyle}>
                        <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'inherit', textAlign: 'right' }}>
                          {arabicText}
                        </span>
                        <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'inherit', textAlign: 'left' }} dir="ltr">
                          {deText}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {/* قسم التدريب المفتوح بدون حدود بعرض 100% */}
        {activeTab === 'training' && quizQuestion && (
          <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginBottom: '15px'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                🏆 النقاط: <span style={{ color: '#22c55e', fontSize: '1.2rem' }}>{score}</span>
              </span>
            </div>

            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxSizing: 'border-box',
              padding: '10px 0'
            }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: 0 }}>
                Wie spät ist es? كم الساعة؟
              </p>

              {/* رسمة ساعة بدون بوردر خارجي */}
              <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', maxWidth: '180px', height: 'auto' }} role="img">
                  <circle cx="50" cy="50" r="47" fill="transparent" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, idx) => (
                    <line
                      key={idx}
                      x1="50"
                      y1="6"
                      x2="50"
                      y2={deg % 90 === 0 ? "12" : "9"}
                      stroke="currentColor"
                      strokeWidth={deg % 90 === 0 ? "2" : "1"}
                      transform={`rotate(${deg} 50 50)`}
                    />
                  ))}
                  <text x="50" y="22" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">12</text>
                  <text x="82" y="53" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">3</text>
                  <text x="50" y="84" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">6</text>
                  <text x="18" y="53" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">9</text>

                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="28"
                    stroke="#ef4444"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ transform: `rotate(${(quizQuestion.h % 12) * 30 + quizQuestion.m * 0.5}deg)`, transformOrigin: '50px 50px' }}
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="14"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    style={{ transform: `rotate(${quizQuestion.m * 6}deg)`, transformOrigin: '50px 50px' }}
                  />
                  <circle cx="50" cy="50" r="3" fill="#eab308" />
                </svg>
              </div>

              <p style={{ fontSize: '1.3rem', fontWeight: '800', color: '#38bdf8', margin: '0 0 18px 0' }} dir="ltr">
                {quizQuestion.formattedTime}
              </p>

              {/* أزرار الاختيارات متجاوبة بعرض 100% */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '12px',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                {quizQuestion.options.map((option, idx) => {
                  let btnBorderColor = 'inherit';
                  let btnBg = 'transparent';

                  if (selectedOption !== null) {
                    if (option === quizQuestion.correctAnswer) {
                      btnBorderColor = '#22c55e';
                      btnBg = 'rgba(34, 197, 94, 0.15)';
                    } else if (option === selectedOption) {
                      btnBorderColor = '#ef4444';
                      btnBg = 'rgba(239, 68, 68, 0.15)';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerClick(option)}
                      style={{
                        padding: '14px 10px',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        borderRadius: '12px',
                        border: '2px solid',
                        borderColor: btnBorderColor,
                        backgroundColor: btnBg,
                        color: 'inherit',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                      dir="ltr"
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <div style={{ marginTop: '15px' }}>
                  <p style={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: isCorrect ? '#22c55e' : '#ef4444',
                    margin: 0
                  }}>
                    {isCorrect ? '✅ إجابة صحيحة!' : `❌ إجابة خاطئة! الصحيح: ${quizQuestion.correctAnswer}`}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  direction: 'rtl',
  backgroundColor: 'transparent',
  color: 'inherit'
};

const tabButtonStyle = {
  border: '2px solid',
  borderColor: 'inherit',
  padding: '8px 15px',
  borderRadius: '30px 6px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  flex: 1,
  backgroundColor: 'transparent',
  color: 'inherit'
};

const cardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '10px',
  alignItems: 'center',
  padding: '10px 12px',
  borderRadius: '16px',
  border: '2px solid',
  borderColor: 'inherit',
  backgroundColor: 'transparent',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
};

const soundButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  padding: '4px 10px',
  borderRadius: '8px',
  border: '2px solid',
  borderColor: 'inherit',
  backgroundColor: 'transparent',
  color: 'inherit',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '0.78rem'
};

const rangeInputStyle = {
  width: '100%',
  marginTop: '1px',
  accentColor: '#ef4444',
  cursor: 'pointer'
};

const syncAllButtonStyle = {
  width: 'fit-content',
  padding: '8px 18px',
  fontSize: '0.82rem',
  fontWeight: 'bold',
  borderRadius: '30px',
  border: '1px solid #ef4444',
  backgroundColor: '#ef4444',
  color: '#fff',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(239, 68, 68, 0.25)',
  transition: 'transform 0.2s ease, opacity 0.2s ease'
};

const itemCardContainerStyle = {
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none'
};

const topBadgeStyle = {
  position: 'absolute',
  top: '-18px',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'inherit'
};

const itemBoxStyle = {
  position: 'relative',
  zIndex: 2,
  width: '100%',
  border: '2px solid',
  borderColor: 'inherit',
  borderRadius: '16px 6px',
  padding: '14px 12px 10px 12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px'
};