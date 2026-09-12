import React, { useState } from 'react';
import '../style.css';

export default function CombinedVerbExercises() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isLight = theme === 'light';

  // أسئلة الاختيار من متعدد (الجمل)
  const questionsData = [
    {
      prefix: "Komm, wir",
      suffix: "nach Hause.",
      options: ["gehst", "gehe", "gehen"],
      answer: "gehen"
    },
    {
      prefix: "Was",
      suffix: "ihr? - Karten.",
      options: ["spielen", "spielt", "spiele"],
      answer: "spielt"
    },
    {
      prefix: "",
      suffix: "du mitspielen? - Was denn?",
      options: ["Möchte", "Möchten", "Möchtest"],
      answer: "Möchtest"
    },
    {
      prefix: "Mein Bruder",
      suffix: "Klaus.",
      options: ["heißt", "heiße", "heißen"],
      answer: "heißt"
    },
    {
      prefix: "Was",
      suffix: "ihr denn? - Wir spielen.",
      options: ["machst", "mache", "macht"],
      answer: "macht"
    },
    {
      prefix: "Meine Schwester",
      suffix: "Karma.",
      options: ["heißen", "heiße", "heißt"],
      answer: "heißt"
    },
    {
      prefix: "Lobna",
      suffix: "Tennis.",
      options: ["spiele", "spielen", "spielt"],
      answer: "spielt"
    },
    {
      prefix: "",
      suffix: "du mit? - Ich habe keine Lust.",
      options: ["Spielt", "Spielst", "Spielen"],
      answer: "Spielst"
    },
    {
      prefix: "Wie",
      suffix: "du? - Ich heiße Adel.",
      options: ["heißt", "heiße", "heißen"],
      answer: "heißt"
    },
    {
      prefix: "Ich",
      suffix: "nach Hause.",
      options: ["gehst", "gehe", "gehen"],
      answer: "gehe"
    },
    {
      prefix: "Wie",
      suffix: "deine Schwester? - Lisa.",
      options: ["heißen", "heiße", "heißt"],
      answer: "heißt"
    },
    {
      prefix: "Spielst du mit? - Ich",
      suffix: "keine Lust.",
      options: ["hast", "hat", "habe"],
      answer: "habe"
    },
    {
      prefix: "Wie",
      suffix: "du? - Ich heiße Murad.",
      options: ["heißt", "heiße", "heißen"],
      answer: "heißt"
    },
    {
      prefix: "Tassilo",
      suffix: "mein Freund.",
      options: ["bin", "ist", "bist"],
      answer: "ist"
    },
    {
      prefix: "Wo",
      suffix: "denn deine Mutter? - Sie ist nicht hier.",
      options: ["bist", "bin", "ist"],
      answer: "ist"
    },
    {
      prefix: "Das ist mein Bruder.",
      suffix: "heißt Klaus.",
      options: ["Ich", "Er", "Wir"],
      answer: "Er"
    },
    {
      prefix: "Wo ist dein Bruder? - Da",
      suffix: "er ja.",
      options: ["ist", "bin", "bist"],
      answer: "ist"
    },
    {
      prefix: "Wer",
      suffix: "denn das? - Das ist Laura.",
      options: ["bist", "ist", "bin"],
      answer: "ist"
    },
    {
      prefix: "Wie alt",
      suffix: "du? - 16.",
      options: ["ist", "bin", "bist"],
      answer: "bist"
    }
  ];

  // أفعال تصريف المقالي (محدثة بالقائمة الكاملة المطلوبة بالتصريفات الصحيحة)
  const verbsData = [
    {
      id: "v-1",
      verbDe: "wohnen",
      verbAr: "يسكن",
      conjugations: [
        { pronoun: "ich", correct: "wohne" },
        { pronoun: "du", correct: "wohnst" },
        { pronoun: "er / sie / es", correct: "wohnt" },
        { pronoun: "wir", correct: "wohnen" },
        { pronoun: "ihr", correct: "wohnt" },
        { pronoun: "sie / Sie", correct: "wohnen" }
      ]
    },
    {
      id: "v-2",
      verbDe: "spielen",
      verbAr: "يلعب",
      conjugations: [
        { pronoun: "ich", correct: "spiele" },
        { pronoun: "du", correct: "spielst" },
        { pronoun: "er / sie / es", correct: "spielt" },
        { pronoun: "wir", correct: "spielen" },
        { pronoun: "ihr", correct: "spielt" },
        { pronoun: "sie / Sie", correct: "spielen" }
      ]
    },
    {
      id: "v-3",
      verbDe: "machen",
      verbAr: "يفعل / يعمل",
      conjugations: [
        { pronoun: "ich", correct: "mache" },
        { pronoun: "du", correct: "machst" },
        { pronoun: "er / sie / es", correct: "macht" },
        { pronoun: "wir", correct: "machen" },
        { pronoun: "ihr", correct: "macht" },
        { pronoun: "sie / Sie", correct: "machen" }
      ]
    },
    {
      id: "v-4",
      verbDe: "zeichnen",
      verbAr: "يرسم",
      conjugations: [
        { pronoun: "ich", correct: "zeichne" },
        { pronoun: "du", correct: "zeichnest" },
        { pronoun: "er / sie / es", correct: "zeichnet" },
        { pronoun: "wir", correct: "zeichnen" },
        { pronoun: "ihr", correct: "zeichnet" },
        { pronoun: "sie / Sie", correct: "zeichnen" }
      ]
    },
    {
      id: "v-5",
      verbDe: "malen",
      verbAr: "يلون / يلوّن / يرسُم",
      conjugations: [
        { pronoun: "ich", correct: "male" },
        { pronoun: "du", correct: "malst" },
        { pronoun: "er / sie / es", correct: "malt" },
        { pronoun: "wir", correct: "malen" },
        { pronoun: "ihr", correct: "malt" },
        { pronoun: "sie / Sie", correct: "malen" }
      ]
    },
    {
      id: "v-6",
      verbDe: "heißen",
      verbAr: "يُدعى / يُسمى",
      conjugations: [
        { pronoun: "ich", correct: "heiße" },
        { pronoun: "du", correct: "heißt" },
        { pronoun: "er / sie / es", correct: "heißt" },
        { pronoun: "wir", correct: "heißen" },
        { pronoun: "ihr", correct: "heißt" },
        { pronoun: "sie / Sie", correct: "heißen" }
      ]
    },
    {
      id: "v-7",
      verbDe: "kommen",
      verbAr: "يأتي",
      conjugations: [
        { pronoun: "ich", correct: "komme" },
        { pronoun: "du", correct: "kommst" },
        { pronoun: "er / sie / es", correct: "kommt" },
        { pronoun: "wir", correct: "kommen" },
        { pronoun: "ihr", correct: "kommt" },
        { pronoun: "sie / Sie", correct: "kommen" }
      ]
    },
    {
      id: "v-8",
      verbDe: "haben",
      verbAr: "يملك / لديه",
      conjugations: [
        { pronoun: "ich", correct: "habe" },
        { pronoun: "du", correct: "hast" },
        { pronoun: "er / sie / es", correct: "hat" },
        { pronoun: "wir", correct: "haben" },
        { pronoun: "ihr", correct: "habt" },
        { pronoun: "sie / Sie", correct: "haben" }
      ]
    },
    {
      id: "v-9",
      verbDe: "sein",
      verbAr: "يكون",
      conjugations: [
        { pronoun: "ich", correct: "bin" },
        { pronoun: "du", correct: "bist" },
        { pronoun: "er / sie / es", correct: "ist" },
        { pronoun: "wir", correct: "sind" },
        { pronoun: "ihr", correct: "seid" },
        { pronoun: "sie / Sie", correct: "sind" }
      ]
    },
    {
      id: "v-10",
      verbDe: "möchten",
      verbAr: "يودّ / يرغب",
      conjugations: [
        { pronoun: "ich", correct: "möchte" },
        { pronoun: "du", correct: "möchtest" },
        { pronoun: "er / sie / es", correct: "möchte" },
        { pronoun: "wir", correct: "möchten" },
        { pronoun: "ihr", correct: "möchtet" },
        { pronoun: "sie / Sie", correct: "möchten" }
      ]
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [inputs, setInputs] = useState({});

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectAnswer = (index, opt) => {
    setUserAnswers(prev => ({ ...prev, [index]: opt }));
  };

  const handleInputChange = (verbId, index, value) => {
    setInputs(prev => ({
      ...prev,
      [verbId]: {
        ...(prev[verbId] || {}),
        [index]: value
      }
    }));
  };

  const checkVerb = (verbId, conjugations) => {
    const verbInputs = inputs[verbId] || {};
    let updatedStatuses = {};

    conjugations.forEach((item, index) => {
      const userVal = (verbInputs[index] || "").trim().toLowerCase();
      const isValid = userVal === item.correct.toLowerCase();
      updatedStatuses[index] = isValid ? 'correct' : 'wrong';
    });

    setInputs(prev => ({
      ...prev,
      [verbId]: {
        ...prev[verbId],
        statuses: updatedStatuses
      }
    }));
  };

  // حساب الإحصائيات للقسم الأول
  let correctCount = 0;
  let wrongCount = 0;

  questionsData.forEach((q, index) => {
    if (userAnswers[index] !== undefined) {
      if (userAnswers[index] === q.answer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  return (
    <div style={{ backgroundColor: isLight ? '#f8fafc' : '#0b1329', color: isLight ? '#1e293b' : '#ffffff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '15px 10px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", direction: 'rtl', boxSizing: 'border-box' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet" />

      <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '20px', boxSizing: 'border-box' }}>

        {/* زر التبديل */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={toggleTheme}
            title="تغيير المظهر"
            style={{ padding: '6px 10px', borderRadius: '30px 6px', border: `1px solid ${isLight ? '#cbd5e1' : '#1e2d54'}`, cursor: 'pointer', backgroundColor: isLight ? '#f1f5f9' : '#091024', color: isLight ? '#1e293b' : '#ffffff', fontSize: '0.85rem' }}
          >
            {isLight ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
          </button>
        </div>

        {/* --- القسم الأول: الاختيار من متعدد --- */}
        <div style={{ background: isLight ? '#ffffff' : '#111c38', padding: '20px 15px', borderRadius: '30px 6px', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)', border: `1px solid ${isLight ? '#cbd5e1' : '#1e2d54'}`, boxSizing: 'border-box' }}>

          <div className="title-section" style={{ textAlign: 'center', marginBottom: '18px' }}>
            <h1 style={{ color: '#38bdf8', fontSize: '1.6rem', margin: 0, fontWeight: 700 }}>Verbkonjugieren</h1>
          </div>

          <div className="score-card" style={{ background: isLight ? '#f1f5f9' : '#091024', border: `1px solid ${isLight ? '#cbd5e1' : '#1e2d54'}`, borderRadius: '30px 6px', padding: '10px 15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px', textAlign: 'center' }}>
            <div className="stat-box" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="stat-label" style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : '#8b9bb4' }}>إجمالي الأسئلة</span>
              <span className="stat-number total" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: isLight ? '#0f172a' : '#ffffff' }}>{questionsData.length}</span>
            </div>
            <div className="stat-box" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="stat-label" style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : '#8b9bb4' }}>صحيحة</span>
              <span className="stat-number correct" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#22c55e' }}>{correctCount}</span>
            </div>
            <div className="stat-box" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="stat-label" style={{ fontSize: '0.75rem', color: isLight ? '#64748b' : '#8b9bb4' }}>خاطئة</span>
              <span className="stat-number wrong" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ef4444' }}>{wrongCount}</span>
            </div>
          </div>

          <div className="questions-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {questionsData.map((q, index) => {
              const selectedOpt = userAnswers[index];
              return (
                <div key={index} className="question-card" style={{ background: isLight ? '#f8fafc' : '#0e172e', borderRadius: '30px 6px', borderLeft: '3px solid #00a3ff', padding: '10px 12px', direction: 'ltr', display: 'flex', alignItems: 'center', fontSize: '0.95rem', lineHeight: 1.5, flexWrap: 'wrap', gap: '4px', boxSizing: 'border-box' }}>
                  <span className="q-number" style={{ color: '#00a3ff', fontWeight: 'bold', marginRight: '4px' }}>{index + 1}.</span>
                  <span>{q.prefix}</span>
                  <span className="bracket" style={{ color: isLight ? '#1e293b' : '#ffffff', fontWeight: 'bold' }}>(</span>
                  <div className="options-inline" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', margin: '0 2px', flexWrap: 'wrap' }}>
                    {q.options.map((opt, i) => {
                      let btnStyle = {
                        background: isLight ? '#e2e8f0' : '#2a3756',
                        color: isLight ? '#1e293b' : '#ffffff',
                        border: `1px solid ${isLight ? '#cbd5e1' : '#3b4d76'}`,
                        padding: '2px 8px',
                        borderRadius: '30px 6px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      };

                      if (selectedOpt !== undefined) {
                        if (opt === q.answer) {
                          btnStyle = { ...btnStyle, backgroundColor: '#16a34a', color: '#ffffff', borderColor: '#22c55e' };
                        } else if (opt === selectedOpt && selectedOpt !== q.answer) {
                          btnStyle = { ...btnStyle, backgroundColor: '#dc2626', color: '#ffffff', borderColor: '#ef4444' };
                        }
                      }

                      return (
                        <React.Fragment key={i}>
                          {i > 0 && <span className="bracket" style={{ margin: '0 1px' }}>-</span>}
                          <button
                            style={btnStyle}
                            onClick={() => handleSelectAnswer(index, opt)}
                          >
                            {opt}
                          </button>
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <span className="bracket" style={{ color: isLight ? '#1e293b' : '#ffffff', fontWeight: 'bold' }}>)</span>
                  <span>{q.suffix}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* --- القسم الثاني: تدريبات المقالي (أكمل الفراغات) --- */}
        <div style={{ background: isLight ? '#ffffff' : '#111c38', padding: '20px 15px', borderRadius: '30px 6px', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)', border: `1px solid ${isLight ? '#cbd5e1' : '#1e2d54'}`, boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: 0, fontWeight: 700 }}>
              <i className="fa-solid fa-pen-nib" style={{ marginLeft: '6px' }}></i> تصريف الأفعال (Konjugation der Verben)
            </h1>
            <p style={{ opacity: 0.8, marginTop: '4px', fontSize: '0.85rem' }}>تدريبات أكمل الفراغات المقالية لتصريف الأفعال مع الضمائر الشخصية</p>
          </div>

          <div style={{ display: 'grid', gap: '15px' }}>
            {verbsData.map((verb) => {
              const verbState = inputs[verb.id] || {};
              const statuses = verbState.statuses || {};

              return (
                <div key={verb.id} style={{ background: isLight ? '#f8fafc' : '#0e172e', padding: '12px 14px', borderRadius: '30px 6px', border: `1px solid ${isLight ? '#cbd5e1' : '#1e2d54'}`, boxShadow: '0 1px 3px rgba(0,0,0,0.03)', boxSizing: 'border-box' }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', borderBottom: `1px solid ${isLight ? '#cbd5e1' : '#1e2d54'}`, paddingBottom: '6px' }}>
                    <h2 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: '#3b82f6' }}>
                      {verb.verbDe} <span style={{ fontSize: '12px', fontWeight: 'normal', opacity: 0.8 }}>({verb.verbAr})</span>
                    </h2>
                    <button
                      onClick={() => speakText(verb.verbDe)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '15px', color: '#38bdf8' }}
                      title="استماع للفعل"
                    >
                      🔊
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                    {verb.conjugations.map((item, index) => {
                      const status = statuses[index];
                      let inputStyle = {
                        width: '100%',
                        padding: '6px 8px',
                        borderRadius: '30px 6px',
                        border: `1px solid ${isLight ? '#cbd5e1' : '#3b4d76'}`,
                        outline: 'none',
                        backgroundColor: isLight ? '#ffffff' : '#091024',
                        color: isLight ? '#1e293b' : '#f8fafc',
                        fontSize: '0.85rem',
                        boxSizing: 'border-box'
                      };

                      if (status === 'correct') {
                        inputStyle = { ...inputStyle, borderColor: '#16a34a', backgroundColor: '#064e3b', color: '#dcfce7' };
                      } else if (status === 'wrong') {
                        inputStyle = { ...inputStyle, borderColor: '#dc2626', backgroundColor: '#7f1d1d', color: '#fee2e2' };
                      }

                      return (
                        <div key={index} style={{ background: isLight ? '#f1f5f9' : '#091024', padding: '8px 10px', borderRadius: '30px 6px', border: `1px solid ${isLight ? '#cbd5e1' : '#1e2d54'}`, boxSizing: 'border-box' }}>
                          <label style={{ fontSize: '11px', display: 'block', marginBottom: '4px', fontWeight: '600' }}>
                            {item.pronoun}
                          </label>
                          <input
                            type="text"
                            placeholder="..."
                            value={verbState[index] || ''}
                            onChange={(e) => handleInputChange(verb.id, index, e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ marginTop: '10px', textAlign: 'left' }}>
                    <button
                      onClick={() => checkVerb(verb.id, verb.conjugations)}
                      style={{ padding: '6px 14px', borderRadius: '30px 6px', border: 'none', background: '#3b82f6', color: '#fff', cursor: 'pointer', fontWeight: '600', fontSize: '12px' }}
                    >
                      فحص الفعل
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