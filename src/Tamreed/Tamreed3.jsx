import React from 'react';

export default function WarumQuestionsFinalApp() {
  const bodyData = [
    {
      categoryTitle: "Mein Körper (أسئلة لماذا لأعضاء الجسم)",
      sections: [
        {
          type: "der",
          title: "المذكر (Maskulin)",
          article: "der",
          pronoun: "mein",
          colorClass: "der-color",
          items: [
            {
              de: "Finger", ar: "إصبع اليد",
              qDe: "Warum kannst du nicht tippen?", qAr: "لماذا لا تستطيع الكتابة على الكيبورد؟",
              answers: [
                { de: "Mein Finger tut so weh.", ar: "لأن إصبعي يؤلمني بشدة.", color: "der-color" },
                { de: "Meine Hand tut mir weh.", ar: "لأن يدي تؤلمني.", color: "die-color" }
              ]
            },
            {
              de: "Mund", ar: "فم",
              qDe: "Warum kannst du nicht sprechen?", qAr: "لماذا لا تستطيع الكلام؟",
              answers: [
                { de: "Mein Mund tut so weh.", ar: "لأن فمي يؤلمني بشدة.", color: "der-color" },
                { de: "Meine Zunge tut mir weh.", ar: "لأن لساني يؤلمني.", color: "die-color" },
                { de: "Mein Hals tut so weh.", ar: "لأن زوري يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Zahn", ar: "سن / ضرس",
              qDe: "Warum kannst du nicht kauen?", qAr: "لماذا لا تستطيع المضغ؟",
              answers: [
                { de: "Mein Zahn tut so weh.", ar: "لأن سني / ضرسي يؤلمني بشدة.", color: "der-color" },
                { de: "Meine Zähne tun mir weh.", ar: "لأن أسناني تؤلمني.", color: "plural-color" },
                { de: "Mein Mund tut so weh.", ar: "لأن فمي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Zeh", ar: "إصبع القدم",
              qDe: "Warum kannst du nicht auftreten?", qAr: "لماذا لا تستطيع الضغط على قدمك؟",
              answers: [
                { de: "Mein Zeh tut so weh.", ar: "لأن إصبع قدمي يؤلمني بشدة.", color: "der-color" },
                { de: "Mein Fuß tut mir weh.", ar: "لأن قدمي تؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Arm", ar: "ذراع",
              qDe: "Warum kannst du nichts tragen?", qAr: "لماذا لا تستطيع حمل شيء؟",
              answers: [
                { de: "Mein Arm tut so weh.", ar: "لأن ذراعي يؤلمني بشدة.", color: "der-color" },
                { de: "Meine Hand tut mir weh.", ar: "لأن يدي تؤلمني.", color: "die-color" },
                { de: "Meine Schulter tut so weh.", ar: "لأن كتفي يؤلمني.", color: "die-color" }
              ]
            },
            {
              de: "Bauch", ar: "بطن",
              qDe: "Warum kannst du nicht essen?", qAr: "لماذا لا تستطيع الأكل؟",
              answers: [
                { de: "Mein Bauch tut so weh.", ar: "لأن بطني يؤلمني بشدة.", color: "der-color" },
                { de: "Mein Zahn tut mir weh.", ar: "لأن سني / ضرسي يؤلمني.", color: "der-color" },
                { de: "Mein Hals tut so weh.", ar: "لأن زوري يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Hals", ar: "رقبة / زور",
              qDe: "Warum kannst du nicht schlucken?", qAr: "لماذا لا تستطيع البلع؟",
              answers: [
                { de: "Mein Hals tut so weh.", ar: "لأن زوري يؤلمني بشدة.", color: "der-color" },
                { de: "Mein Mund tut mir weh.", ar: "لأن فمي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Kopf", ar: "رأس",
              qDe: "Warum kannst du nicht lernen?", qAr: "لماذا لا تستطيع المذاكرة؟",
              answers: [
                { de: "Mein Kopf tut so weh.", ar: "لأن رأسي يؤلمني بشدة.", color: "der-color" },
                { de: "Mein Auge tut mir weh.", ar: "لأن عيني تؤلمني.", color: "das-color" }
              ]
            },
            {
              de: "Fuß", ar: "قدم",
              qDe: "Warum kannst du nicht laufen?", qAr: "لماذا لا تستطيع الجري؟",
              answers: [
                { de: "Mein Fuß tut so weh.", ar: "لأن قدمي تؤلمني بشدة.", color: "der-color" },
                { de: "Mein Bein tut mir weh.", ar: "لأن ساقي تؤلمني.", color: "das-color" },
                { de: "Mein Zeh tut so weh.", ar: "لأن إصبع قدمي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Rücken", ar: "ظهر",
              qDe: "Warum kannst du nicht gerade sitzen?", qAr: "لماذا لا تستطيع الجلوس مستقيماً؟",
              answers: [
                { de: "Mein Rücken tut so weh.", ar: "لأن ظهري يؤلمني بشدة.", color: "der-color" },
                { de: "Mein Bauch tut mir weh.", ar: "لأن بطني يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Nacken", ar: "مؤخرة الرقبة",
              qDe: "Warum kannst du den Kopf nicht nach hinten drehen?", qAr: "لماذا لا تستطيع إمالة رأسك للخلف؟",
              answers: [
                { de: "Mein Nacken tut so weh.", ar: "لأن مؤخرة رقبتي تؤلمني بشدة.", color: "der-color" },
                { de: "Mein Kopf tut mir weh.", ar: "لأن رأسي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Ellbogen", ar: "المرفق / الكوع",
              qDe: "Warum kannst du den Arm nicht beugen?", qAr: "لماذا لا تستطيع ثني ذراعك؟",
              answers: [
                { de: "Mein Ellbogen tut so weh.", ar: "لأن كوعي يؤلمني بشدة.", color: "der-color" },
                { de: "Mein Arm tut mir weh.", ar: "لأن ذراعي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Daumen", ar: "الإبهام",
              qDe: "Warum kannst du die Flasche nicht öffnen?", qAr: "لماذا لا تستطيع فتح الزجاجة؟",
              answers: [
                { de: "Mein Daumen tut so weh.", ar: "لأن إبهامي يؤلمني بشدة.", color: "der-color" },
                { de: "Meine Hand tut mir weh.", ar: "لأن يدي تؤلمني.", color: "die-color" }
              ]
            },
            {
              de: "Knöchel", ar: "الكاحل",
              qDe: "Warum kannst du nicht fest stehen?", qAr: "لماذا لا تستطيع الوقوف بثبات؟",
              answers: [
                { de: "Mein Knöchel tut so weh.", ar: "لأن كاحلي يؤلمني بشدة.", color: "der-color" },
                { de: "Mein Fuß tut mir weh.", ar: "لأن قدمي تؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Zeigefinger", ar: "السبابة",
              qDe: "Warum kannst du nicht auf das Bild zeigen?", qAr: "لماذا لا تستطيع الإشارة إلى الصورة؟",
              answers: [
                { de: "Mein Zeigefinger tut so weh.", ar: "لأن سبابتي تؤلمني بشدة.", color: "der-color" },
                { de: "Mein Finger tut mir weh.", ar: "لأن إصبعي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Unterarm", ar: "الساعد",
              qDe: "Warum kannst du dich nicht aufstützen?", qAr: "لماذا لا تستطيع الاستناد بساعدك؟",
              answers: [
                { de: "Mein Unterarm tut so weh.", ar: "لأن ساعدي يؤلمني بشدة.", color: "der-color" },
                { de: "Mein Arm tut mir weh.", ar: "لأن ذراعي يؤلمني.", color: "der-color" }
              ]
            }
          ]
        },
        {
          type: "das",
          title: "المحايد (Neutral)",
          article: "das",
          pronoun: "mein",
          colorClass: "das-color",
          items: [
            {
              de: "Auge", ar: "عين",
              qDe: "Warum kannst du nicht lesen?", qAr: "لماذا لا تستطيع القراءة؟",
              answers: [
                { de: "Mein Auge tut so weh.", ar: "لأن عيني تؤلمني بشدة.", color: "das-color" },
                { de: "Mein Kopf tut mir weh.", ar: "لأن رأسي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Ohr", ar: "أذن",
              qDe: "Warum kannst du nicht gut hören?", qAr: "لماذا لا تستطيع السمع جيداً؟",
              answers: [
                { de: "Mein Ohr tut so weh.", ar: "لأن أذني تؤلمني بشدة.", color: "das-color" },
                { de: "Mein Kopf tut mir weh.", ar: "لأن رأسي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Bein", ar: "ساق",
              qDe: "Warum kannst du nicht Fußball spielen?", qAr: "لماذا لا تستطيع لعب كرة القدم؟",
              answers: [
                { de: "Mein Bein tut so weh.", ar: "لأن ساقي تؤلمني بشدة.", color: "das-color" },
                { de: "Mein Fuß tut mir weh.", ar: "لأن قدمي تؤلمني.", color: "der-color" },
                { de: "Mein Knie tut so weh.", ar: "لأن ركبتي تؤلمني.", color: "das-color" }
              ]
            },
            {
              de: "Gesicht", ar: "وجه",
              qDe: "Warum kannst du nicht lächeln?", qAr: "لماذا لا تستطيع الابتسام؟",
              answers: [
                { de: "Mein Gesicht tut so weh.", ar: "لأن وجهي يؤلمني بشدة.", color: "das-color" },
                { de: "Mein Mund tut mir weh.", ar: "لأن فمي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Knie", ar: "الركبة",
              qDe: "Warum kannst du nicht Treppen steigen?", qAr: "لماذا لا تستطيع صعود السلم؟",
              answers: [
                { de: "Mein Knie tut so weh.", ar: "لأن ركبتي تؤلمني بشدة.", color: "das-color" },
                { de: "Mein Bein tut mir weh.", ar: "لأن ساقي تؤلمني.", color: "das-color" }
              ]
            },
            {
              de: "Kinn", ar: "الذقن",
              qDe: "Warum kannst du den Mund nicht weit öffnen?", qAr: "لماذا لا تستطيع فتح فمك واسعاً؟",
              answers: [
                { de: "Mein Kinn tut so weh.", ar: "لأن ذقني يؤلمني بشدة.", color: "das-color" },
                { de: "Mein Mund tut mir weh.", ar: "لأن فمي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Handgelenk", ar: "معصم اليد / الرسغ",
              qDe: "Warum kannst du nicht zeichnen?", qAr: "لماذا لا تستطيع الرسم؟",
              answers: [
                { de: "Mein Handgelenk tut so weh.", ar: "لأن معصمي يؤلمني بشدة.", color: "das-color" },
                { de: "Meine Hand tut mir weh.", ar: "لأن يدي تؤلمني.", color: "die-color" },
                { de: "Mein Finger tut so weh.", ar: "لأن إصبعي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Sprunggelenk", ar: "مفصل الكاحل",
              qDe: "Warum kannst du den Fuß nicht drehen?", qAr: "لماذا لا تستطيع تحريك قدمك؟",
              answers: [
                { de: "Mein Sprunggelenk tut so weh.", ar: "لأن مفصل كاحلي يؤلمني بشدة.", color: "das-color" },
                { de: "Mein Fuß tut mir weh.", ar: "لأن قدمي تؤلمني.", color: "der-color" }
              ]
            }
          ]
        },
        {
          type: "die",
          title: "المؤنث (Feminin)",
          article: "die",
          pronoun: "meine",
          colorClass: "die-color",
          items: [
            {
              de: "Hand", ar: "يد",
              qDe: "Warum kannst du nicht schreiben?", qAr: "لماذا لا تستطيع الكتابة؟",
              answers: [
                { de: "Meine Hand tut so weh.", ar: "لأن يدي تؤلمني بشدة.", color: "die-color" },
                { de: "Mein Finger tut mir weh.", ar: "لأن إصبعي يؤلمني.", color: "der-color" },
                { de: "Mein Handgelenk tut so weh.", ar: "لأن معصمي يؤلمني.", color: "das-color" }
              ]
            },
            {
              de: "Nase", ar: "أنف",
              qDe: "Warum kannst du nicht gut riechen?", qAr: "لماذا لا تستطيع الشم جيداً؟",
              answers: [
                { de: "Meine Nase tut so weh.", ar: "لأن أنفي يؤلمني بشدة.", color: "die-color" },
                { de: "Mein Kopf tut mir weh.", ar: "لأن رأسي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Brust", ar: "صدر",
              qDe: "Warum kannst du nicht tief einatmen?", qAr: "لماذا لا تستطيع الشهيق بعمق؟",
              answers: [
                { de: "Meine Brust tut so weh.", ar: "لأن صدري يؤلمني بشدة.", color: "die-color" },
                { de: "Mein Rücken tut mir weh.", ar: "لأن ظهري يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Schulter", ar: "الكتف",
              qDe: "Warum kannst du die Tasche nicht heben?", qAr: "لماذا لا تستطيع رفع الحقيبة؟",
              answers: [
                { de: "Meine Schulter tut so weh.", ar: "لأن كتفي يؤلمني بشدة.", color: "die-color" },
                { de: "Mein Arm tut mir weh.", ar: "لأن ذراعي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Zunge", ar: "اللسان",
              qDe: "Warum kannst du nicht heißes Essen probieren?", qAr: "لماذا لا تستطيع تذوق الطعام الساخن؟",
              answers: [
                { de: "Meine Zunge tut so weh.", ar: "لأن لساني يؤلمني بشدة.", color: "die-color" },
                { de: "Mein Mund tut mir weh.", ar: "لأن فمي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Lippe", ar: "الشفة",
              qDe: "Warum kannst du nicht flöten?", qAr: "لماذا لا تستطيع العزف على الناي؟",
              answers: [
                { de: "Meine Lippe tut so weh.", ar: "لأن شفتي تؤلمني بشدة.", color: "die-color" },
                { de: "Mein Mund tut mir weh.", ar: "لأن فمي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Stirn", ar: "الجبهة",
              qDe: "Warum kannst du dich nicht konzentrieren?", qAr: "لماذا لا تستطيع التركيز؟",
              answers: [
                { de: "Meine Stirn tut so weh.", ar: "لأن جبهتي تؤلمني بشدة.", color: "die-color" },
                { de: "Mein Kopf tut mir weh.", ar: "لأن رأسي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Wade", ar: "ربلة الساق / السمانة",
              qDe: "Warum kannst du nicht schnell rennen?", qAr: "لماذا لا تستطيع الجري بسرعة؟",
              answers: [
                { de: "Meine Wade tut so weh.", ar: "لأن سمانة ساقي تؤلمني بشدة.", color: "die-color" },
                { de: "Mein Bein tut mir weh.", ar: "لأن ساقي تؤلمني.", color: "das-color" }
              ]
            },
            {
              de: "Ferse", ar: "كعب القدم",
              qDe: "Warum kannst du die Schuhe nicht anziehen?", qAr: "لماذا لا تستطيع ارتداء الحذاء؟",
              answers: [
                { de: "Meine Ferse tut so weh.", ar: "لأن كعبي يؤلمني بشدة.", color: "die-color" },
                { de: "Mein Fuß tut mir weh.", ar: "لأن قدمي تؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Handfläche", ar: "راحة اليد",
              qDe: "Warum kannst du den Ball nicht fangen?", qAr: "لماذا لا تستطيع الإمساك بالكرة؟",
              answers: [
                { de: "Meine Handfläche tut so weh.", ar: "لأن راحة يدي تؤلمني بشدة.", color: "die-color" },
                { de: "Meine Hand tut mir weh.", ar: "لأن يدي تؤلمني.", color: "die-color" }
              ]
            },
            {
              de: "Fußsohle", ar: "باطن القدم",
              qDe: "Warum kannst du nicht barfuß gehen?", qAr: "لماذا لا تستطيع المشي حافياً؟",
              answers: [
                { de: "Meine Fußsohle tut so weh.", ar: "لأن باطن قدمي تؤلمني بشدة.", color: "die-color" },
                { de: "Mein Fuß tut mir weh.", ar: "لأن قدمي تؤلمني.", color: "der-color" }
              ]
            }
          ]
        },
        {
          type: "plural",
          title: "الجمع (Plural)",
          article: "die",
          pronoun: "meine",
          colorClass: "plural-color",
          items: [
            {
              de: "Haare", ar: "شعر",
              qDe: "Warum kannst du deine Haare nicht kämmen?", qAr: "لماذا لا تستطيع تمشيط شعرك؟",
              answers: [
                { de: "Meine Haare tun so weh.", ar: "لأن فروة شعري تؤلمني بشدة.", color: "plural-color" },
                { de: "Mein Kopf tut mir weh.", ar: "لأن رأسي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Zähne", ar: "أسنان",
              qDe: "Warum kannst du den Apfel nicht beißen?", qAr: "لماذا لا تستطيع قضم التفاحة؟",
              answers: [
                { de: "Meine Zähne tun so weh.", ar: "لأن أسناني تؤلمني بشدة.", color: "plural-color" },
                { de: "Mein Zahn tut mir weh.", ar: "لأن سني / ضرسي يؤلمني.", color: "der-color" },
                { de: "Mein Mund tut so weh.", ar: "لأن فمي يؤلمني.", color: "der-color" }
              ]
            },
            {
              de: "Wimpern", ar: "رموش",
              qDe: "Warum kannst du die Augen nicht leicht öffnen?", qAr: "لماذا لا تستطيع فتح عينيك بسهولة؟",
              answers: [
                { de: "Meine Wimpern tun so weh.", ar: "لأن رموشي تؤلمني بشدة.", color: "plural-color" },
                { de: "Mein Auge tut mir weh.", ar: "لأن عيني تؤلمني.", color: "das-color" }
              ]
            },
            {
              de: "Augenbrauen", ar: "حواجب",
              qDe: "Warum kannst du die Stirn nicht runzeln?", qAr: "لماذا لا تستطيع تقطيب جبهتك؟",
              answers: [
                { de: "Meine Augenbrauen tun so weh.", ar: "لأن حواجبي تؤلمني بشدة.", color: "plural-color" },
                { de: "Meine Stirn tut mir weh.", ar: "لأن جبهتي تؤلمني.", color: "die-color" }
              ]
            },
            {
              de: "Lippen", ar: "شفاه",
              qDe: "Warum kannst du das kalte Wasser nicht trinken?", qAr: "لماذا لا تستطيع شرب الماء البارد؟",
              answers: [
                { de: "Meine Lippen tun so weh.", ar: "لأن شفاهي تؤلمني بشدة.", color: "plural-color" },
                { de: "Mein Zahn tut mir weh.", ar: "لأن سني / ضرسي يؤلمني.", color: "der-color" }
              ]
            }
          ]
        }
      ]
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

  let globalIndex = 1;

  return (
    <div className="app-container">
      <style>{`
        :root {
          --primary-der: #38bdf8;
          --primary-das: #4ade80;
          --primary-die: #f472b6;
          --primary-plural: #fb923c;
          --text-sub: rgba(148, 163, 184, 0.85);
          --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
          --border-strong: rgba(148, 163, 184, 0.55);
        }

        .der-color { color: var(--primary-der) !important; border-color: var(--primary-der) !important; }
        .das-color { color: var(--primary-das) !important; border-color: var(--primary-das) !important; }
        .die-color { color: var(--primary-die) !important; border-color: var(--primary-die) !important; }
        .plural-color { color: var(--primary-plural) !important; border-color: var(--primary-plural) !important; }

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
          font-family: Cairo, Courgette, sans-serif;
          text-size-adjust: 100%;
          direction: rtl;
          padding: 1.5rem 0.75rem;
        }

        div, button, .card, .top-bar, .category-header-banner, .section-badge, .info-box {
          border-radius: 30px 6px !important;
        }

        .top-bar {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          padding: 0.8rem 1rem;
          background: transparent;
          border: 2px solid var(--border-strong);
          box-shadow: var(--shadow);
          text-align: center;
          gap: 0.3rem;
        }

        .top-bar .title-main {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary-der);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* صندوق توضيحي بنور متوهج */
        .info-box {
          width: 100%;
          max-width: 1000px;
          background: transparent;
          border: 2px solid var(--primary-die);
          padding: 1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 15px rgba(244, 114, 182, 0.4), var(--shadow);
          text-align: right;
          direction: rtl;
          animation: glowingBorder 2s infinite alternate;
        }

        @keyframes glowingBorder {
          0% { border-color: var(--primary-die); box-shadow: 0 0 5px rgba(244, 114, 182, 0.3); }
          100% { border-color: var(--primary-der); box-shadow: 0 0 20px rgba(56, 189, 248, 0.6); }
        }

        .info-box h3 {
          font-size: 0.95rem;
          color: var(--primary-die);
          margin-bottom: 0.6rem;
          font-family: 'Cairo', sans-serif;
        }

        .info-box ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          font-size: 0.85rem;
          color: var(--text-sub);
          font-family: 'Cairo', sans-serif;
        }

        .info-box li strong {
          color: #ffffff;
        }

        .info-label {
          display: block;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.1rem;
        }

        .example-line {
          display: block;
          margin-top: 0.2rem;
          color: var(--primary-der);
          font-weight: 600;
          direction: ltr;
          text-align: left;
        }

        .header-subtext {
          text-align: center;
          margin-bottom: 1rem;
          width: 100%;
          max-width: 1000px;
        }

        .header-subtext p {
          font-size: 0.88rem;
          color: var(--text-sub);
          font-family: 'Cairo', sans-serif;
        }

        .section-container {
          width: 100%;
          max-width: 1000px;
          margin-bottom: 1.8rem;
        }

        .category-header-banner {
          display: inline-flex;
          background: transparent;
          border: 2px solid var(--border-strong);
          padding: 0.5rem 1rem;
          margin: 1.2rem auto 1rem auto;
          box-shadow: var(--shadow);
          text-align: center;
        }

        .category-wrapper-center {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .category-header-banner h1 {
          font-size: 1rem;
          color: var(--primary-die);
          font-family: 'Cairo', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
          margin-bottom: 0.8rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid var(--border-strong);
          direction: rtl;
        }

        .section-header h2 {
          font-size: 0.98rem;
          font-family: 'Cairo', sans-serif;
          font-weight: 600;
        }

        .section-badge {
          font-size: 0.88rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          color: #0f172a;
          cursor: pointer;
          direction: ltr;
          display: inline-flex;
          gap: 0.3rem;
          align-items: center;
        }

        .badge-der { background-color: var(--primary-der); }
        .badge-das { background-color: var(--primary-das); }
        .badge-die { background-color: var(--primary-die); }
        .badge-plural { background-color: var(--primary-plural); color: #fff; }

        .grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          direction: ltr;
          margin-top: 1rem;
        }

        @media (min-width: 640px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }

        .card {
          background: transparent;
          padding: 1.2rem 1rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: var(--shadow);
          cursor: pointer;
          position: relative;
          transition: all 0.25s ease;
          border: 2px solid var(--border-strong);
          user-select: none;
          direction: rtl;
          gap: 0.6rem;
          margin-top: 10px;
        }

        .card:active { transform: scale(0.98); }
        .card.speaking { animation: pulse 0.8s infinite alternate; }

        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.02); }
        }

        /* رقم السؤال: دائرة 50% وبأبعاد 20*20 بكسل ونصفه خارج الكارت */
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

        .words-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          direction: ltr;
        }

        .word-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .word-title {
          font-size: 0.95rem;
          font-weight: 600;
          text-align: left;
        }

        .word-arabic {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-sub);
          text-align: right;
          font-family: 'Cairo', sans-serif;
        }

        .qa-box {
          font-size: 0.88rem;
          text-align: left;
          border-top: 1px dashed var(--border-strong);
          padding-top: 0.5rem;
          margin-top: 0.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          width: 100%;
        }

        .qa-question-de {
          font-weight: 600;
          color: #ffffff;
        }

        .qa-question-ar {
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          font-family: 'Cairo', sans-serif;
          text-align: right;
        }

        .qa-answer-de {
          font-weight: 500;
        }

        .qa-answer-ar {
          font-weight: 500;
          font-family: 'Cairo', sans-serif;
          text-align: right;
        }
      `}</style>

      {/* Top Bar Header */}
      <div className="top-bar">
        <div className="title-main" onClick={() => speakText('Warum Fragen')}>
          <i className="fa-solid fa-clipboard-question"></i> Warum Fragen (أسئلة لماذا لأعضاء الجسم)
        </div>
      </div>

      {/* صندوق توضيحي متحرك ومتوهج مع العبارات المطلوبة */}
      <div className="info-box">
        <h3>💡 دليل سريع لفروق أوجاع الجسم في الألمانية:</h3>
        <ul>
          <li>
            <strong className="info-label">ألم قوي وشديد: (tut so weh)</strong>
            <span>تُستخدم للتركيز على شدة وقوة الألم في العضو نفسه:</span>
            <span className="example-line">Mein Bein tut so weh.</span>
          </li>
          <li>
            <strong className="info-label">ألم عادي: (tut mir weh)</strong>
            <span>تُستخدم لتحديد عائديّة الألم على الشخص المتكلم:</span>
            <span className="example-line">Das tut mir weh.</span>
          </li>
        </ul>
      </div>

      <div className="header-subtext">
        <p>اضغط على أي سؤال لسماع النطق الصحيح باللغة الألمانية 🇩🇪</p>
      </div>

      {/* CONTAINER FOR SECTIONS */}
      <div id="contentContainer">
        {bodyData.map((cat, catIdx) => (
          <React.Fragment key={catIdx}>
            <div className="category-wrapper-center">
              <div className="category-header-banner">
                <h1><i className="fa-solid fa-heart-pulse"></i> {cat.categoryTitle}</h1>
              </div>
            </div>

            {cat.sections.map((sec, secIdx) => (
              <div className="section-container" key={secIdx}>
                <div className="section-header">
                  <h2 className={sec.colorClass}>{sec.title}</h2>
                  <span
                    className={`section-badge badge-${sec.type}`}
                    onClick={() => speakText(sec.article)}
                  >
                    <span>{sec.pronoun}</span> | <span>{sec.article}</span>
                  </span>
                </div>

                <div className="grid">
                  {sec.items.map((item, itemIdx) => {
                    const currentNum = globalIndex++;
                    const fullSpokenAnswers = item.answers.map(a => a.de).join('. ');
                    return (
                      <div
                        key={itemIdx}
                        className="card"
                        onClick={(e) => {
                          speakText(`${item.qDe}. ${fullSpokenAnswers}`);
                          const card = e.currentTarget;
                          if (card) {
                            card.classList.add('speaking');
                            setTimeout(() => { if (card) card.classList.remove('speaking'); }, 800);
                          }
                        }}
                      >
                        {/* الرقم 20*20 وبوردر رديوس 50% ونصفه خارج الكارت */}
                        <span className={`absolute-number bg-${sec.type}`}>
                          {currentNum}
                        </span>

                        <div className="words-container">
                          <div className="word-row">
                            <div className={`word-title ${sec.colorClass}`}>
                              {sec.article} {item.de}
                            </div>
                            <div className="word-arabic">{item.ar}</div>
                          </div>

                          <div className="qa-box">
                            <div className="qa-question-de">{item.qDe}</div>
                            <div className="qa-question-ar">{item.qAr}</div>

                            {item.answers.map((ans, aIdx) => (
                              <div key={aIdx} style={{ marginTop: aIdx > 0 ? '0.3rem' : '0' }}>
                                <div className={`qa-answer-de ${ans.color}`}>{ans.de}</div>
                                <div className={`qa-answer-ar ${ans.color}`}>{ans.ar}</div>
                              </div>
                            ))}
                          </div>
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
    </div>
  );
}