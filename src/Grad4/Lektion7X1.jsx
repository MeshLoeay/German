import React, { useState } from 'react';

function Lektion7() {
  const [tableModes, setTableModes] = useState({
    regular: 'single',
    special: 'single'
  });

  const setTableMode = (tableId, mode) => {
    setTableModes(prev => ({
      ...prev,
      [tableId]: mode
    }));
  };

  const extractGermanText = (element) => {
    let text = '';
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text.trim();
  };

  const speakText = (text, onEndCallback = null) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.85;
    if (onEndCallback) {
      utterance.onend = onEndCallback;
    }
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeak = (e) => {
    const element = e.currentTarget;
    let germanText = extractGermanText(element);
    if (!germanText) return;

    const table = element.closest('table');
    const tableId = table ? table.getAttribute('data-table-id') : null;
    const currentMode = tableId && tableModes[tableId] ? tableModes[tableId] : 'single';

    let pronoun = '';
    const row = element.closest('tr');
    if (row && row.querySelector('.pronoun-column')) {
      pronoun = extractGermanText(row.querySelector('.pronoun-column'));
    }

    if (currentMode === 'single' || !pronoun || element.classList.contains('pronoun-column')) {
      speakText(germanText);
    } else if (currentMode === 'combo') {
      speakText(germanText, () => {
        speakText(`${pronoun} ${germanText}`);
      });
    }
  };

  return (
    <div dir="rtl" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        .main-page-wrapper {
          color: #f8fafc;
          padding: 10px 0;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .container {
          width: 95%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 30px 6px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          border: 1px solid #334155;
        }
        .title-section {
          text-align: center;
          margin-bottom: 25px;
          border-bottom: 2px solid #334155;
          padding-bottom: 15px;
        }
        .title-section h1 {
          color: #38bdf8;
          font-size: 2rem;
          margin: 0 0 6px 0;
          letter-spacing: 0.5px;
        }
        .title-section h2 {
          color: #cbd5e1;
          font-size: 1.3rem;
          font-weight: 500;
          margin: 0;
        }
        .section-header-block {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 15px;
        }
        .section-title-container {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .section-title {
          font-size: 1.15rem;
          color: #38bdf8;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }
        .section-title::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 18px;
          background-color: #38bdf8;
          border-radius: 30px 6px;
        }
        .section-subtitle {
          font-size: 0.9rem;
          color: #f59e0b;
          font-weight: 500;
          margin-right: 12px;
        }
        .table-controls {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          width: 100%;
        }
        @media (min-width: 576px) {
          .table-controls {
            width: auto;
          }
        }
        .mode-btn {
          color: #cbd5e1;
          border: 1px solid #38bdf8;
          padding: 6px 12px;
          border-radius: 30px 6px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: bold;
          transition: all 0.2s ease;
          flex: 1;
          text-align: center;
        }
        .mode-btn.active {
          background: #38bdf8;
          color: #0f172a;
          box-shadow: 0 0 6px rgba(56, 189, 248, 0.3);
        }
        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          direction: ltr;
          margin-bottom: 30px;
        }
        @media (min-width: 768px) {
          .steps-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
          }
        }
        .step-card {
          border-radius: 30px 6px;
          padding: 15px;
          border: 1px solid #334155;
          border-top: 3px solid #38bdf8;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 0.9rem;
        }
        .step-header {
          width: 100%;
          text-align: center;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px dashed #334155;
          direction: rtl;
        }
        .step-number {
          display: inline-block;
          background: #38bdf8;
          color: #0f172a;
          font-weight: bold;
          width: 24px;
          height: 24px;
          line-height: 24px;
          border-radius: 30px 6px;
          margin-left: 6px;
          font-size: 0.85rem;
          text-align: center;
        }
        .step-title {
          font-size: 1.05rem;
          font-weight: bold;
          color: #f8fafc;
        }
        .word-list {
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
          direction: ltr;
        }
        .word-list li {
          margin-bottom: 6px;
          padding: 8px;
          text-align: center;
          border-radius: 30px 6px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid #334155;
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          user-select: none;
        }
        .word-list li:hover {
          color: #38bdf8;
          transform: translateY(-2px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }
        .table-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 30px 6px;
          border: 1px solid #334155;
          margin-bottom: 30px;
          width: 100%;
        }
        .custom-table {
          width: 100%;
          border-collapse: collapse;
          text-align: center;
          font-size: 0.9rem;
          direction: ltr;
          min-width: 500px;
        }
        .custom-table th,
        .custom-table td {
          padding: 8px 10px;
          border: 1px solid #334155;
          transition: all 0.2s ease-in-out;
        }
        .custom-table th {
          color: #38bdf8;
          font-weight: bold;
        }
        .custom-table td {
          color: #f8fafc;
          cursor: pointer;
          user-select: none;
        }
        .pronoun-column {
          font-weight: bold;
          color: #38bdf8 !important;
          min-width: 90px;
        }
        .ar-sub {
          display: block;
          font-size: 0.75em;
          font-weight: normal;
          color: #94a3b8;
          margin-top: 2px;
        }
        .highlight-ending {
          color: #4ade80 !important;
          font-weight: bold;
        }
        .highlight-verb {
          color: #38bdf8 !important;
          font-weight: bold;
        }
        .highlight-special {
          color: #7dd3fc !important;
          font-weight: bold;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        /* Responsive adjustments for max-width: 600px */
        @media (max-width: 600px) {
          .container {
            width: 95%;
            padding: 12px 8px;
          }
          .title-section h1 {
            font-size: 1.4rem;
          }
          .title-section h2 {
            font-size: 1rem;
          }
          .step-card {
            padding: 10px;
            font-size: 0.85rem;
          }
          .word-list li {
            padding: 6px 8px;
            font-size: 0.8rem;
          }
          .mode-btn {
            padding: 4px 8px;
            font-size: 0.75rem;
          }
          .section-title {
            font-size: 0.95rem;
          }
          .custom-table {
            font-size: 0.8rem;
          }
          .custom-table th,
          .custom-table td {
            padding: 6px 8px;
          }
        }
      `}</style>

      <div className="main-page-wrapper">
        <div className="container">

          {/* Main Header */}
          <div className="title-section">
            <h1>Grammatik</h1>
            <h2>Verbkonjugieren (تصريف الفعل)</h2>
          </div>

          {/* Section 1: Explanation Steps */}
          <div className="section-title" style={{ marginBottom: '15px' }}>خطوات تصريف الأفعال (Schritte der Konjugation)</div>
          <div className="steps-grid">

            {/* Step 1 */}
            <div className="step-card">
              <div className="step-header">
                <span className="step-number">1</span>
                <span className="step-title">حذف الـ en</span>
              </div>
              <ul className="word-list">
                <li onClick={handleSpeak}>wohn <span className="ar-sub">(يسكن)</span></li>
                <li onClick={handleSpeak}>komm <span className="ar-sub">(يأتي)</span></li>
                <li onClick={handleSpeak}>mach <span className="ar-sub">(يفعل)</span></li>
                <li onClick={handleSpeak}>spiel <span className="ar-sub">(يلعب)</span></li>
                <li onClick={handleSpeak}>mal <span className="ar-sub">(يرسم بالألوان)</span></li>
                <li onClick={handleSpeak}>zeichn <span className="ar-sub">(يرسم بالقلم)</span></li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-header">
                <span className="step-number">2</span>
                <span className="step-title">تحديد الفاعل ( الضمير )</span>
              </div>
              <ul className="word-list">
                <li onClick={handleSpeak}>ich <span className="ar-sub">(أنا)</span></li>
                <li onClick={handleSpeak}>du <span className="ar-sub">(أنتَ/أنتِ)</span></li>
                <li onClick={handleSpeak}>er - sie <span className="ar-sub">(هو - هي)</span></li>
                <li onClick={handleSpeak}>wir <span className="ar-sub">(نحن)</span></li>
                <li onClick={handleSpeak}>ihr <span className="ar-sub">(أنتم)</span></li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-header">
                <span className="step-number">3</span>
                <span className="step-title">وضع نهاية جديدة مكان الـ en</span>
              </div>
              <div className="table-container" style={{ width: '100%', marginBottom: 0 }}>
                <table className="custom-table" data-table-id="step3">
                  <thead>
                    <tr>
                      <th colSpan="3" onClick={handleSpeak}>
                        spielen <span className="ar-sub" style={{ color: '#cbd5e1' }}>(يلعب)</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td onClick={handleSpeak}>ich <span className="ar-sub">(أنا)</span></td>
                      <td className="highlight-ending" onClick={handleSpeak}>e</td>
                      <td className="highlight-verb" onClick={handleSpeak}>spiele</td>
                    </tr>
                    <tr>
                      <td onClick={handleSpeak}>du <span className="ar-sub">(أنت)</span></td>
                      <td className="highlight-ending" onClick={handleSpeak}>st</td>
                      <td className="highlight-verb" onClick={handleSpeak}>spielst</td>
                    </tr>
                    <tr>
                      <td onClick={handleSpeak}>er - sie <span className="ar-sub">(هو/هي)</span></td>
                      <td className="highlight-ending" onClick={handleSpeak}>t</td>
                      <td className="highlight-verb" onClick={handleSpeak}>spielt</td>
                    </tr>
                    <tr>
                      <td onClick={handleSpeak}>wir <span className="ar-sub">(نحن)</span></td>
                      <td className="highlight-ending" onClick={handleSpeak}>en</td>
                      <td className="highlight-verb" onClick={handleSpeak}>spielen</td>
                    </tr>
                    <tr>
                      <td onClick={handleSpeak}>ihr <span className="ar-sub">(أنتم)</span></td>
                      <td className="highlight-ending" onClick={handleSpeak}>t</td>
                      <td className="highlight-verb" onClick={handleSpeak}>spielt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Section 2: Regular Verbs Table */}
          <div className="section-header-block">
            <div className="section-title">جدول تصريف الأفعال المنتظمة</div>
            <div className="table-controls">
              <button
                className={`mode-btn ${tableModes.regular === 'single' ? 'active' : ''}`}
                onClick={() => setTableMode('regular', 'single')}
              >
                النطق المفرد
              </button>
              <button
                className={`mode-btn ${tableModes.regular === 'combo' ? 'active' : ''}`}
                onClick={() => setTableMode('regular', 'combo')}
              >
                الكلمة ثم (الضمير + الفعل)
              </button>
            </div>
          </div>

          <div className="table-container">
            <table className="custom-table" data-table-id="regular">
              <thead>
                <tr>
                  <th className="pronoun-column">الضمائر</th>
                  <th onClick={handleSpeak}>wohnen <span className="ar-sub">(يسكن)</span></th>
                  <th onClick={handleSpeak}>spielen <span className="ar-sub">(يلعب)</span></th>
                  <th onClick={handleSpeak}>machen <span className="ar-sub">(يفعل)</span></th>
                  <th onClick={handleSpeak}>malen <span className="ar-sub">(يرسم ألوان)</span></th>
                  <th onClick={handleSpeak}>zeichnen <span className="ar-sub">(يرسم قلم)</span></th>
                  <th onClick={handleSpeak}>heißen <span className="ar-sub">(يسمى)</span></th>
                  <th onClick={handleSpeak}>kommen <span className="ar-sub">(يأتي)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>ich</td>
                  <td onClick={handleSpeak}>wohne</td>
                  <td onClick={handleSpeak}>spiele</td>
                  <td onClick={handleSpeak}>mache</td>
                  <td onClick={handleSpeak}>male</td>
                  <td onClick={handleSpeak}>zeichne</td>
                  <td onClick={handleSpeak}>heiße</td>
                  <td onClick={handleSpeak}>komme</td>
                </tr>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>du</td>
                  <td onClick={handleSpeak}>wohnst</td>
                  <td onClick={handleSpeak}>spielst</td>
                  <td onClick={handleSpeak}>machst</td>
                  <td onClick={handleSpeak}>malst</td>
                  <td onClick={handleSpeak}>zeichnst</td>
                  <td onClick={handleSpeak}>heißt</td>
                  <td onClick={handleSpeak}>kommst</td>
                </tr>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>er - sie</td>
                  <td onClick={handleSpeak}>wohnt</td>
                  <td onClick={handleSpeak}>spielt</td>
                  <td onClick={handleSpeak}>macht</td>
                  <td onClick={handleSpeak}>malt</td>
                  <td onClick={handleSpeak}>zeichnt</td>
                  <td onClick={handleSpeak}>heißt</td>
                  <td onClick={handleSpeak}>kommt</td>
                </tr>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>wir</td>
                  <td onClick={handleSpeak}>wohnen</td>
                  <td onClick={handleSpeak}>spielen</td>
                  <td onClick={handleSpeak}>machen</td>
                  <td onClick={handleSpeak}>malen</td>
                  <td onClick={handleSpeak}>zeichnen</td>
                  <td onClick={handleSpeak}>heißen</td>
                  <td onClick={handleSpeak}>kommen</td>
                </tr>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>ihr</td>
                  <td onClick={handleSpeak}>wohnt</td>
                  <td onClick={handleSpeak}>spielt</td>
                  <td onClick={handleSpeak}>macht</td>
                  <td onClick={handleSpeak}>malt</td>
                  <td onClick={handleSpeak}>zeichnt</td>
                  <td onClick={handleSpeak}>heißt</td>
                  <td onClick={handleSpeak}>kommt</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 3: Special & Auxiliary Verbs Table */}
          <div className="section-header-block">
            <div className="section-title-container">
              <div className="section-title">الأفعال الخاصة والمساعدة (Unregelmäßige / Hilfsverben)</div>
              <div className="section-subtitle">(أفعال تحفظ كما هي لأن ليس لها قاعدة)</div>
            </div>
            <div className="table-controls">
              <button
                className={`mode-btn ${tableModes.special === 'single' ? 'active' : ''}`}
                onClick={() => setTableMode('special', 'single')}
              >
                النطق المفرد
              </button>
              <button
                className={`mode-btn ${tableModes.special === 'combo' ? 'active' : ''}`}
                onClick={() => setTableMode('special', 'combo')}
              >
                الكلمة ثم (الضمير + الفعل)
              </button>
            </div>
          </div>

          <div className="table-container" style={{ marginBottom: 0 }}>
            <table className="custom-table" data-table-id="special">
              <thead>
                <tr>
                  <th className="pronoun-column">الضمائر</th>
                  <th onClick={handleSpeak}>haben <span className="ar-sub">(يملك)</span></th>
                  <th onClick={handleSpeak}>sein <span className="ar-sub">(يكون)</span></th>
                  <th onClick={handleSpeak}>möchten <span className="ar-sub">(يرغب)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>ich</td>
                  <td onClick={handleSpeak}>habe</td>
                  <td className="highlight-special" onClick={handleSpeak}>bin</td>
                  <td onClick={handleSpeak}>möchte</td>
                </tr>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>du</td>
                  <td className="highlight-special" onClick={handleSpeak}>hast</td>
                  <td className="highlight-special" onClick={handleSpeak}>bist</td>
                  <td onClick={handleSpeak}>möchtest</td>
                </tr>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>er - sie</td>
                  <td className="highlight-special" onClick={handleSpeak}>hat</td>
                  <td className="highlight-special" onClick={handleSpeak}>ist</td>
                  <td className="highlight-special" onClick={handleSpeak}>möchte</td>
                </tr>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>wir</td>
                  <td onClick={handleSpeak}>haben</td>
                  <td className="highlight-special" onClick={handleSpeak}>sind</td>
                  <td onClick={handleSpeak}>möchten</td>
                </tr>
                <tr>
                  <td className="pronoun-column" onClick={handleSpeak}>ihr</td>
                  <td onClick={handleSpeak}>habt</td>
                  <td className="highlight-special" onClick={handleSpeak}>seid</td>
                  <td onClick={handleSpeak}>möchtet</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Lektion7;