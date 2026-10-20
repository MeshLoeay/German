import React, { useState, useEffect } from 'react';

export default function GermanNumbersApp() {
  const [activeTab, setActiveTab] = useState('numbers'); // 'numbers' or 'training'
  const [searchVal, setSearchVal] = useState('');
  const [minRange, setMinRange] = useState('');
  const [maxRange, setMaxRange] = useState('');
  const [currentList, setCurrentList] = useState([]);
  const [trainingList, setTrainingList] = useState([]);
  const [checkedAnswers, setCheckedAnswers] = useState(false);

  const getArabicWord = (n) => {
    const arabicWords = {
      0: "صفر", 1: "واحد", 2: "اثنان", 3: "ثلاثة", 4: "أربعة", 5: "خمسة",
      6: "ستة", 7: "سبعة", 8: "ثمانية", 9: "تسعة", 10: "عشرة",
      11: "أحد عشر", 12: "اثنا عشر", 13: "ثلاثة عشر", 14: "أربعة عشر", 15: "خمسة عشر",
      16: "ستة عشر", 17: "سبعة عشر", 18: "ثمانية عشر", 19: "تسعة عشر", 20: "عشرون",
      30: "ثلاثون", 40: "أربعون", 50: "خمسون", 60: "ستون", 70: "سبعون", 80: "ثمانون", 90: "تسعون", 100: "مائة", 1000: "ألف", 1000000: "مليون"
    };
    if (arabicWords[n]) return arabicWords[n];
    return n.toLocaleString();
  };

  const generateRandomList = (min, max, count = 15) => {
    let numbersSet = new Set();
    while (numbersSet.size < count && numbersSet.size < (max - min + 1)) {
      let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
      numbersSet.add(randNum);
    }
    let list = Array.from(numbersSet).map(num => ({
      num: num,
      ar: getArabicWord(num),
      userAnswer: ''
    }));
    setTrainingList(list);
    setCheckedAnswers(false);
  };

  useEffect(() => {
    handleRender('0-100');
    generateRandomList(0, 100, 15);
  }, []);

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.75;
      utterance.pitch = 1.0;

      const setBestVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const bestVoice = voices.find(v =>
          v.lang === 'de-DE' && (
            v.name.toLowerCase().includes('natural') ||
            v.name.toLowerCase().includes('google') ||
            v.name.toLowerCase().includes('online') ||
            v.name.toLowerCase().includes('premium')
          )
        ) || voices.find(v => v.lang === 'de-DE');

        if (bestVoice) {
          utterance.voice = bestVoice;
        }

        window.speechSynthesis.speak(utterance);
      };

      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setBestVoice();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          setBestVoice();
        };
      }
    }
  };

  const units = ["Null", "Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun"];
  const teens = ["Zehn", "Elf", "Zwölf", "Dreizehn", "Vierzehn", "Fünfzehn", "Sechzehn", "Siebzehn", "Achtzehn", "Neunzehn"];
  const tens = ["", "", "Zwanzig", "Dreißig", "Vierzig", "Fünfzig", "Sechzig", "Siebzig", "Achtzig", "Neunzig"];

  const getGermanNumberData = (n) => {
    let deHTML = "";
    let dePure = "";

    if (n === 0) {
      deHTML = "Null"; dePure = "Null";
    } else if (n < 10) {
      deHTML = units[n]; dePure = units[n];
    } else if (n >= 10 && n < 20) {
      deHTML = teens[n - 10]; dePure = teens[n - 10];
    } else if (n < 100) {
      let t = Math.floor(n / 10);
      let u = n % 10;
      if (u === 0) {
        deHTML = tens[t]; dePure = tens[t];
      } else {
        let unitWord = (u === 1) ? "ein" : units[u];
        deHTML = (
          <span>
            {unitWord}<span style={{ color: '#ec4899', fontWeight: '900', margin: '0 1px' }}>und</span>{tens[t].toLowerCase()}
          </span>
        );
        dePure = `${(u === 1) ? "ein" : units[u]}und${tens[t].toLowerCase()}`;
      }
    } else if (n < 1000) {
      let h = Math.floor(n / 100);
      let rem = n % 100;
      let hWord = (h === 1) ? "Hundert" : `${units[h]}hundert`;
      if (rem === 0) {
        deHTML = hWord; dePure = hWord;
      } else {
        let remData = getGermanNumberData(rem);
        deHTML = <>{hWord}{remData.html}</>;
        dePure = `${hWord}${remData.pure}`;
      }
    } else if (n < 1000000) {
      let th = Math.floor(n / 1000);
      let rem = n % 1000;
      let thWord = (th === 1) ? "Tausend" : `${getGermanNumberData(th).pure}tausend`;
      if (rem === 0) {
        deHTML = thWord; dePure = thWord;
      } else {
        let remData = getGermanNumberData(rem);
        deHTML = <>{thWord}{remData.html}</>;
        dePure = `${thWord}${remData.pure}`;
      }
    } else if (n === 1000000) {
      deHTML = "Eine Million"; dePure = "Eine Million";
    } else if (n > 1000000) {
      let mil = Math.floor(n / 1000000);
      let rem = n % 1000000;
      let milWord = `${mil} Million${mil > 1 ? 'en' : ''}`;
      if (rem === 0) {
        deHTML = milWord; dePure = milWord;
      } else {
        let remData = getGermanNumberData(rem);
        deHTML = <>{milWord}{remData.html}</>;
        dePure = `${milWord}${remData.pure}`;
      }
    }
    return { html: deHTML, pure: dePure };
  };

  const handleRender = (type) => {
    setSearchVal('');
    let list = [];
    if (type === '0-100') {
      for (let i = 0; i <= 100; i++) {
        list.push({ num: i, ar: getArabicWord(i), userAnswer: '' });
      }
    } else if (type === 'steps') {
      const stepsArr = [
        10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
        200, 300, 400, 500, 600, 700, 800, 900, 1000,
        2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
        20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
        1000000
      ];
      stepsArr.forEach(s => list.push({ num: s, ar: getArabicWord(s), userAnswer: '' }));
    }
    setCurrentList(list);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchVal(val);
    if (val === '') {
      handleRender('0-100');
      return;
    }
    let n = parseInt(val);
    if (!isNaN(n) && n >= 0) {
      setCurrentList([{ num: n, ar: getArabicWord(n), userAnswer: '' }]);
    }
  };

  const handleCustomRangeSubmit = () => {
    let min = parseInt(minRange);
    let max = parseInt(maxRange);
    if (!isNaN(min) && !isNaN(max) && min <= max) {
      generateRandomList(min, max, 15);
    }
  };

  const handleUserAnswerChange = (index, val) => {
    const updated = [...trainingList];
    updated[index].userAnswer = val;
    setTrainingList(updated);
  };

  return (
    <div style={{
      padding: '30px 20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      direction: 'rtl'
    }}>

      <h1
        onClick={() => speakText('Die Zahlen')}
        style={{
          textAlign: 'center',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          marginBottom: '25px',
          cursor: 'pointer',
          userSelect: 'none',
          border: '2px solid',
          borderColor: 'inherit',
          borderRadius: '20px 4px',
          padding: '8px 20px',
        }}
      >
        Die Zahlen - الأرقام الألمانية
      </h1>

      {/* الأزرار الأساسية (الأرقام - التدريب) */}
      <div style={{
        display: 'flex',
        gap: '15px',
        width: '100%',
        maxWidth: '450px',
        marginBottom: '30px',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setActiveTab('numbers')}
          style={{
            ...buttonStyle,
            opacity: activeTab === 'numbers' ? 1 : 0.6,
            boxShadow: activeTab === 'numbers' ? 'inset 0 0 0 2px currentColor' : 'none'
          }}
        >
          الأرقام
        </button>
        <button
          onClick={() => setActiveTab('training')}
          style={{
            ...buttonStyle,
            opacity: activeTab === 'training' ? 1 : 0.6,
            boxShadow: activeTab === 'training' ? 'inset 0 0 0 2px currentColor' : 'none'
          }}
        >
          التدريب
        </button>
      </div>

      {/* محتوى قسم الأرقام */}
      {activeTab === 'numbers' && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            width: '100%',
            maxWidth: '450px',
            marginBottom: '40px',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => handleRender('0-100')} style={buttonStyle}>
                0 إلى 100
              </button>
              <button onClick={() => handleRender('steps')} style={buttonStyle}>
                العشرات والمئات والآلاف حتى 100 ألف
              </button>
            </div>

            <input
              type="number"
              value={searchVal}
              onChange={handleSearchChange}
              placeholder="اكتب الرقم اللى انتا حابب تعرفه و تسمعه"
              style={{
                ...inputStyle,
                direction: 'ltr',
                textAlign: 'center'
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '55px',
            width: '100%',
            maxWidth: '420px',
          }}>
            {currentList.map((item, index) => {
              const gerData = getGermanNumberData(item.num);
              return (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    userSelect: 'none',
                    marginTop: '25px'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-42px',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <span
                      onClick={() => speakText(gerData.pure)}
                      style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        color: '#38bdf8',
                        lineHeight: 1,
                        cursor: 'pointer'
                      }}
                      title="اضغط لسماع النطق"
                    >
                      {item.num}
                    </span>

                    {/* أيقونة السماعة مع الشادو للتوافق مع الـ Light والـ Dark Mode */}
                    <span
                      style={{
                        fontSize: '1.1rem',
                        opacity: 0.9,
                        marginTop: '-2px',
                        pointerEvents: 'none',
                        filter: 'drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.8)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.35))'
                      }}
                    >
                      🔊
                    </span>
                  </div>

                  <div
                    onClick={() => speakText(gerData.pure)}
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      border: '2px solid',
                      borderColor: 'inherit',
                      borderRadius: '30px 6px',
                      padding: '20px 20px 15px 20px',
                      marginTop: '15px',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '15px',
                      textAlign: 'center',
                      boxShadow: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                      {item.ar}
                    </span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 'bold', direction: 'ltr' }}>
                      {gerData.html}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* محتوى قسم التدريب */}
      {activeTab === 'training' && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            width: '100%',
            maxWidth: '450px',
            marginBottom: '30px',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => generateRandomList(0, 100, 15)} style={buttonStyle}>
                من 0 ل 100
              </button>
              <button onClick={() => generateRandomList(100, 1000, 15)} style={buttonStyle}>
                من 100 ل 1000
              </button>
            </div>

            <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => generateRandomList(1000, 10000, 15)} style={buttonStyle}>
                من 1000 ل 10 تلاف
              </button>
              <button onClick={() => generateRandomList(10000, 100000, 15)} style={buttonStyle}>
                من 10 تلاف ل 100 الف
              </button>
            </div>

            <div style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', marginTop: '10px', fontSize: '0.95rem' }}>
              اكتب انتا عاوز تسمع الارقام من كام ل كام
            </div>

            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              <input
                type="number"
                value={minRange}
                onChange={(e) => setMinRange(e.target.value)}
                placeholder="من (مثال: 0)"
                style={inputStyle}
              />
              <input
                type="number"
                value={maxRange}
                onChange={(e) => setMaxRange(e.target.value)}
                placeholder="إلى (مثال: 500)"
                style={inputStyle}
              />
            </div>

            <button
              onClick={handleCustomRangeSubmit}
              style={{ ...buttonStyle, width: '100%' }}
            >
              تطبيق النطاق المخصص
            </button>
          </div>

          <div style={{ width: '100%', maxWidth: '420px', marginBottom: '35px' }}>
            <button
              onClick={() => setCheckedAnswers(true)}
              style={{
                ...buttonStyle,
                width: '100%',
                backgroundColor: '#38bdf8',
                color: '#000',
                border: 'none',
                padding: '14px',
                fontSize: '1.1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              التاكد من الاجابات
            </button>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '55px',
            width: '100%',
            maxWidth: '420px',
          }}>
            {trainingList.map((item, index) => {
              const gerData = getGermanNumberData(item.num);

              let borderColorVal = 'inherit';
              if (checkedAnswers) {
                const cleanUser = item.userAnswer.trim().toLowerCase();
                const cleanCorrect = gerData.pure.trim().toLowerCase();
                borderColorVal = (cleanUser === cleanCorrect) ? '#22c55e' : '#ef4444';
              }

              return (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    userSelect: 'none',
                    marginTop: '20px'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      fontSize: '3.5rem',
                      fontWeight: '800',
                      top: '-35px',
                      zIndex: 1,
                      color: '#38bdf8',
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </div>

                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    border: '2px solid',
                    borderColor: 'inherit',
                    borderRadius: '30px 6px',
                    padding: '20px 20px 15px 20px',
                    marginTop: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px',
                    textAlign: 'center',
                    boxShadow: 'none'
                  }}>
                    <input
                      type="text"
                      value={item.userAnswer}
                      onChange={(e) => handleUserAnswerChange(index, e.target.value)}
                      placeholder="اكتب الكلمات للتسميع هنا..."
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '1rem',
                        border: '2px solid',
                        borderColor: borderColorVal,
                        borderRadius: '20px 6px',
                        outline: 'none',
                        textAlign: 'center',
                        direction: 'ltr',
                        backgroundColor: 'transparent',
                        color: 'inherit',
                        transition: 'border-color 0.3s ease'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}

const buttonStyle = {
  border: '2px solid',
  borderColor: 'inherit',
  padding: '10px 15px',
  borderRadius: '30px 6px',
  fontSize: '0.95rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  flex: 1,
  minWidth: '130px',
  backgroundColor: 'transparent',
  color: 'inherit'
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  fontSize: '1.1rem',
  border: '2px solid',
  borderColor: 'inherit',
  borderRadius: '30px 6px',
  outline: 'none',
  textAlign: 'center',
  background: 'transparent',
  color: 'inherit'
};