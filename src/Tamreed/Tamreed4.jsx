import React from 'react';

export default function AllBodyDialogueNoBgHoverApp() {
  const dialogueData = [
    // --- المذكر (Der) ---
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht tippen.", responseAr: "أنا لست بخير. لا أستطيع الكتابة على الكيبورد.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Finger tut so weh.", answerAr: "لأن إصبعي يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht sprechen.", responseAr: "أنا لست بخير. لا أستطيع الكلام.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Mund tut so weh.", answerAr: "لأن فمي يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht kauen.", responseAr: "أنا لست بخير. لا أستطيع المضغ.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Zahn tut so weh.", answerAr: "لأن سني / ضرسي يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht auftreten.", responseAr: "أنا لست بخير. لا أستطيع الضغط على قدمي.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Zeh tut so weh.", answerAr: "لأن إصبع قدمي يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nichts tragen.", responseAr: "أنا لست بخير. لا أستطيع حمل شيء.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Arm tut so weh.", answerAr: "لأن ذراعي يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht essen.", responseAr: "أنا لست بخير. لا أستطيع الأكل.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Bauch tut so weh.", answerAr: "لأن بطني يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht schlucken.", responseAr: "أنا لست بخير. لا أستطيع البلع.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Hals tut so weh.", answerAr: "لأن زوري يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht lernen.", responseAr: "أنا لست بخير. لا أستطيع المذاكرة.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Kopf tut so weh.", answerAr: "لأن رأسي تؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht laufen.", responseAr: "أنا لست بخير. لا أستطيع الجري.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Fuß tut so weh.", answerAr: "لأن قدمي تؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht gerade sitzen.", responseAr: "أنا لست بخير. لا أستطيع الجلوس مستقيماً.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Rücken tut so weh.", answerAr: "لأن ظهري يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann den Kopf nicht drehen.", responseAr: "أنا لست بخير. لا أستطيع تحريك رأسي.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Nacken tut so weh.", answerAr: "لأن مؤخرة رقبتي تؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann den Arm nicht beugen.", responseAr: "أنا لست بخير. لا أستطيع ثني ذراعي.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Ellbogen tut so weh.", answerAr: "لأن كوعي يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann die Flasche nicht öffnen.", responseAr: "أنا لست بخير. لا أستطيع فتح الزجاجة.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Daumen tut so weh.", answerAr: "لأن إبهامي يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht fest stehen.", responseAr: "أنا لست بخير. لا أستطيع الوقوف بثبات.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Knöchel tut so weh.", answerAr: "لأن كاحلي يؤلمني.", color: "der-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann den Ring nicht tragen.", responseAr: "أنا لست بخير. لا أستطيع ارتداء الخاتم.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Zeigefinger tut so weh.", answerAr: "لأن سبابتي تؤلمني.", color: "der-color"
    },

    // --- المحايد (Das) ---
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht lesen.", responseAr: "أنا لست بخير. لا أستطيع القراءة.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Auge tut so weh.", answerAr: "لأن عيني تؤلمني.", color: "das-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht gut hören.", responseAr: "أنا لست بخير. لا أستطيع السمع جيداً.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Ohr tut so weh.", answerAr: "لأن أذني تؤلمني.", color: "das-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht Fußball spielen.", responseAr: "أنا لست بخير. لا أستطيع لعب كرة القدم.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Bein tut so weh.", answerAr: "لأن ساقي تؤلمني.", color: "das-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht lächeln.", responseAr: "أنا لست بخير. لا أستطيع الابتسام.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Gesicht tut so weh.", answerAr: "لأن وجهي يؤلمني.", color: "das-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht Treppen steigen.", responseAr: "أنا لست بخير. لا أستطيع صعود السلم.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Knie tut so weh.", answerAr: "لأن ركبتي تؤلمني.", color: "das-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann den Mund nicht öffnen.", responseAr: "أنا لست بخير. لا أستطيع فتح فمي.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Kinn tut so weh.", answerAr: "لأن ذقني يؤلمني.", color: "das-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht zeichnen.", responseAr: "أنا لست بخير. لا أستطيع الرسم.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Handgelenk tut so weh.", answerAr: "لأن معصمي يؤلمني.", color: "das-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann den Kopf nicht drehen.", responseAr: "أنا لست بخير. لا أستطيع التفات رأسي.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Mein Sprunggelenk tut so weh.", answerAr: "لأن مفصل كاحلي يؤلمني.", color: "das-color"
    },

    // --- المؤنث (Die) ---
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht schreiben.", responseAr: "أنا لست بخير. لا أستطيع الكتابة.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Hand tut so weh.", answerAr: "لأن يدي تؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht gut riechen.", responseAr: "أنا لست بخير. لا أستطيع الشم جيداً.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Nase tut so weh.", answerAr: "لأن أنفي يؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht tief atmen.", responseAr: "أنا لست بخير. لا أستطيع التنفس بعمق.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Brust tut so weh.", answerAr: "لأن صدري يؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann die Tasche nicht heben.", responseAr: "أنا لست بخير. لا أستطيع رفع الحقيبة.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Schulter tut so weh.", answerAr: "لأن كتفي يؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht gut sprechen.", responseAr: "أنا لست بخير. لا أستطيع التكلم جيداً.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Zunge tut so weh.", answerAr: "لأن لساني يؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht pfeifen.", responseAr: "أنا لست بخير. لا أستطيع الصفير.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Lippe tut so weh.", answerAr: "لأن شفتي تؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann mich nicht konzentrieren.", responseAr: "أنا لست بخير. لا أستطيع التركيز.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Stirn tut so weh.", answerAr: "لأن جبهتي تؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht schnell rennen.", responseAr: "أنا لست بخير. لا أستطيع الجري بسرعة.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Wade tut so weh.", answerAr: "لأن سمانة ساقي تؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann die Schuhe nicht anziehen.", responseAr: "أنا لست بخير. لا أستطيع ارتداء الحذاء.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Ferse tut so weh.", answerAr: "لأن كعبي يؤلمني.", color: "die-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht tanzen.", responseAr: "أنا لست بخير. لا أستطيع الرقص.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Hüfte tut so weh.", answerAr: "لأن وركي يؤلمني.", color: "die-color"
    },

    // --- الجمع (Plural) ---
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann die Haare nicht kämmen.", responseAr: "أنا لست بخير. لا أستطيع تمشيط شعري.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Haare tun so weh.", answerAr: "لأن شعري يؤلمني.", color: "plural-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann den Apfel nicht beißen.", responseAr: "أنا لست بخير. لا أستطيع قضم التفاحة.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Zähne tun so weh.", answerAr: "لأن أسناني تؤلمني.", color: "plural-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann die Augen nicht öffnen.", responseAr: "أنا لست بخير. لا أستطيع فتح عيني.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Wimpern tun so weh.", answerAr: "لأن رموشي تؤلمني.", color: "plural-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann die Stirn nicht runzeln.", responseAr: "أنا لست بخير. لا أستطيع تقطيب جبهتي.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Augenbrauen tun so weh.", answerAr: "لأن حواجبي تؤلمني.", color: "plural-color"
    },
    {
      qStateDe: "Wie geht es?", qStateAr: "كيف حالك؟",
      responseDe: "Mir geht es nicht gut. Ich kann nicht klatschen.", responseAr: "أنا لست بخير. لا أستطيع التصفيق.",
      whyDe: "Warum?", whyAr: "لماذا؟",
      answerDe: "Meine Hände tun so weh.", answerAr: "لأن يداي تؤلمانني.", color: "plural-color"
    }
  ];

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('متصفحك لا يدعم نطق الصوت.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="app-container">
      <style>{`
        :root {
          --primary-der: #38bdf8;
          --primary-das: #4ade80;
          --primary-die: #f472b6;
          --primary-plural: #fb923c;
          --primary-pembe: #ff758c;
          --text-sub: rgba(148, 163, 184, 0.85);
          --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
          --border-strong: rgba(148, 163, 184, 0.35);
        }

        .der-color { color: var(--primary-der) !important; }
        .das-color { color: var(--primary-das) !important; }
        .die-color { color: var(--primary-die) !important; }
        .plural-color { color: var(--primary-plural) !important; }

        .bg-der { background-color: var(--primary-der) !important; }
        .bg-das { background-color: var(--primary-das) !important; }
        .bg-die { background-color: var(--primary-die) !important; }
        .bg-plural { background-color: var(--primary-plural) !important; }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          padding: 1.5rem 0.75rem;
          background: transparent;
        }

        div, button, .dialogue-card, .category-header-banner {
          border-radius: 30px 6px !important;
        }

        .section-container {
          width: 100%;
          max-width: 800px;
          margin-bottom: 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .category-wrapper-center {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 1.2rem;
        }

        .category-header-banner {
          display: inline-flex;
          background: transparent;
          border: 2px solid var(--border-strong);
          padding: 0.6rem 1.4rem;
          box-shadow: var(--shadow);
          text-align: center;
        }

        .category-header-banner h1 {
          font-size: 1.05rem;
          color: var(--primary-pembe);
          font-family: 'Cairo', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .dialogue-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          width: 100%;
          direction: ltr;
        }

        /* إزالة خلفية الكارت وإلغاء أي تأثير هوفر */
        .dialogue-card {
          background: transparent !important;
          border: 2px solid var(--border-strong);
          padding: 1.2rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          cursor: pointer;
          box-shadow: var(--shadow);
          user-select: none;
          position: relative;
          margin-top: 10px;
        }

        .dialogue-card:active {
          transform: scale(0.98);
        }

        .dialogue-card.speaking {
          animation: pulse 0.8s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.02); }
        }

        /* الرقم الدائري 50% بمقاس 20*20 بكسل موضع بأعلى اليسار بخروج جزئي */
        .absolute-number {
          position: absolute;
          top: -10px;
          left: 10px;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
          color: #0f172a;
          border-radius: 50% !important;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          z-index: 3;
        }

        /* خط ألماني أبيض */
        .text-de {
          font-size: 0.98rem;
          font-weight: 600;
          font-style: italic;
          color: #ffffff;
          text-align: left;
          line-height: 1.3;
          font-family: 'Courgette', 'Cairo', sans-serif;
        }

        /* سطر الترجمة بالعربي */
        .text-ar {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-sub);
          text-align: right;
          direction: rtl;
          font-family: 'Cairo', sans-serif;
        }
      `}</style>

      <div className="section-container">
        {/* عنوان الصفحة */}
        <div className="category-wrapper-center">
          <div className="category-header-banner">
            <h1><i className="fa-solid fa-comments" style={{ color: '#ff758c' }}></i> Gespräche & Warum (حوارات وأسئلة لماذا لأعضاء الجسم)</h1>
          </div>
        </div>

        {/* قائمة المحادثات */}
        <div className="dialogue-list">
          {dialogueData.map((d, idx) => {
            const cardNum = idx + 1;
            return (
              <div
                key={idx}
                className="dialogue-card"
                onClick={(e) => {
                  speakText(`${d.qStateDe}. ${d.responseDe}. ${d.whyDe}. ${d.answerDe}`);
                  const card = e.currentTarget;
                  if (card) {
                    card.classList.add('speaking');
                    setTimeout(() => { if (card) card.classList.remove('speaking'); }, 800);
                  }
                }}
              >
                {/* الرقم الدائري 20*20 موضع بأعلى اليسار */}
                <span className={`absolute-number bg-${d.color.replace('-color', '')}`}>
                  {cardNum}
                </span>

                {/* سؤال الحال: إزيك؟ */}
                <div>
                  <div className="text-de">{d.qStateDe}</div>
                  <div className="text-ar">{d.qStateAr}</div>
                </div>

                {/* الرد: مش قادر أعمل كذا */}
                <div>
                  <div className="text-de">{d.responseDe}</div>
                  <div className="text-ar">{d.responseAr}</div>
                </div>

                {/* سؤال لماذا؟ */}
                <div>
                  <div className="text-de">{d.whyDe}</div>
                  <div className="text-ar">{d.whyAr}</div>
                </div>

                {/* الإجابة بالسبب (ملونة بلون الأداة) */}
                <div>
                  <div className={`text-de ${d.color}`}>{d.answerDe}</div>
                  <div className={`text-ar ${d.color}`}>{d.answerAr}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}