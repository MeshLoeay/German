import React, { useRef } from 'react';

// الأبجدية الألمانية
const alphabetData = [
  { letter: 'A a', words: [{ ar: 'تفاحة', de: 'Apfel' }, { ar: 'سيارة', de: 'Auto' }] },
  { letter: 'B b', words: [{ ar: 'كتاب', de: 'Buch' }, { ar: 'كرة', de: 'Ball' }] },
  { letter: 'C c', words: [{ ar: 'سنت', de: 'Cent' }, { ar: 'مقهى', de: 'Café' }] },
  { letter: 'D d', words: [{ ar: 'شكر', de: 'Dank' }, { ar: 'قرية', de: 'Dorf' }] },
  { letter: 'E e', words: [{ ar: 'بطة', de: 'Ente' }, { ar: 'مثلجات', de: 'Eis' }] },
  { letter: 'F f', words: [{ ar: 'سمكة', de: 'Fisch' }, { ar: 'سؤال', de: 'Frage' }] },
  { letter: 'G g', words: [{ ar: 'مال', de: 'Geld' }, { ar: 'جيد', de: 'Gut' }] },
  { letter: 'H h', words: [{ ar: 'منزل', de: 'Haus' }, { ar: 'يد', de: 'Hand' }] },
  { letter: 'I i', words: [{ ar: 'قنفذ', de: 'Igel' }, { ar: 'كوخ ثلجي', de: 'Iglu' }] },
  { letter: 'J j', words: [{ ar: 'نعم', de: 'Ja' }, { ar: 'سنة', de: 'Jahr' }] },
  { letter: 'K k', words: [{ ar: 'قطة', de: 'Katze' }, { ar: 'طفل', de: 'Kind' }] },
  { letter: 'L l', words: [{ ar: 'مصباح', de: 'Lampe' }, { ar: 'بلد', de: 'Land' }] },
  { letter: 'M m', words: [{ ar: 'أم', de: 'Mutter' }, { ar: 'قمر', de: 'Mond' }] },
  { letter: 'N n', words: [{ ar: 'ليل', de: 'Nacht' }, { ar: 'اسم', de: 'Name' }] },
  { letter: 'O o', words: [{ ar: 'جد', de: 'Opa' }, { ar: 'أذن', de: 'Ohr' }] },
  { letter: 'P p', words: [{ ar: 'طرد', de: 'Paket' }, { ar: 'ورق', de: 'Papier' }] },
  { letter: 'Q q', words: [{ ar: 'نبع', de: 'Quelle' }, { ar: 'نسبة', de: 'Quote' }] },
  { letter: 'R r', words: [{ ar: 'وردة', de: 'Rose' }, { ar: 'دراجة', de: 'Rad' }] },
  { letter: 'S s', words: [{ ar: 'شمس', de: 'Sonne' }, { ar: 'كأس', de: 'Glas' }] },
  { letter: 'T t', words: [{ ar: 'طاولة', de: 'Tisch' }, { ar: 'يوم', de: 'Tag' }] },
  { letter: 'U u', words: [{ ar: 'ساعة', de: 'Uhr' }, { ar: 'أسفل', de: 'Unten' }] },
  { letter: 'V v', words: [{ ar: 'طائر', de: 'Vogel' }, { ar: 'أربعة', de: 'Vier' }] },
  { letter: 'W v', words: [{ ar: 'ماء', de: 'Wasser' }, { ar: 'طريق', de: 'Weg' }] },
  { letter: 'X x', words: [{ ar: 'إكسيليفون', de: 'Xylophon' }, { ar: 'تاكسي', de: 'Taxi' }] },
  { letter: 'Y y', words: [{ ar: 'يخت', de: 'Yacht' }, { ar: 'نظام', de: 'System' }] },
  { letter: 'Z z', words: [{ ar: 'قطار', de: 'Zug' }, { ar: 'وقت', de: 'Zeit' }] },
  { letter: 'Ä ä', words: [{ ar: 'تفاح', de: 'Äpfel' }, { ar: 'طبيبة', de: 'Ärztin' }] },
  { letter: 'Ö ö', words: [{ ar: 'زيت', de: 'Öl' }, { ar: 'النمسا', de: 'Österreich' }] },
  { letter: 'Ü ü', words: [{ ar: 'تمرين', de: 'Übung' }, { ar: 'فوق', de: 'Über' }] },
  { letter: 'ß', words: [{ ar: 'شارع', de: 'Straße' }, { ar: 'قدم', de: 'Fuß' }] }
];

// المقاطع الصوتية (الصورة الأولى)
const phoneticSectionsImage1 = [
  {
    title: "1. CH",
    content: "النطق الأول: صوت خنخ\nغالباً لما بيجي فيبل ch أحد حروف العل الخلفية: a - o - u - au\nأمثلة:\nBuch : كتاب\nBauch : بطن\nLoch : خفرة / حفرة\nauch : أيضاً\nmachen : يفعل / يعمل\n\nالنطق الثاني: الصوت الخفيف\nبعد الأصوات الأمامية مثل: e - i - ä - ö - ü\nيكون صوت خفيف جداً، قريب من ش خفيفة جداً، ويخرج من مقدمة/وسط سقف الفم.\nأمثلة:\nich : أنا\nMilch : حليب\nMünchen : ميونخ\nwelche : دأي / واحدة\nMädchen : فتاة\n\nملاحظة:\nالصوت ده مش ش ألمانية واضحة زي sch؛ مش لها صوت ش واضح، أما ch في ich فهو صوت مختلف وأخلف."
  },
  {
    title: "2. CHS",
    content: "chs بيتنطق كس / x\nأمثلة:\nFuchs : ثعلب\nsechs : ستة\nwachsen : ينمو\nDachs : غرير\nOchse : ثور\n"
  },
  {
    title: "3. CK",
    content: "ck بيتنطق ك.\nأمثلة:\nZucker : سكر\nWecker : منبه\nJacke : جاكيت / سترة\nbacken : يخيز\nBrücke : جسر\n\nie → إي = ei → أي 💡 أحفظها كده:"
  },
  {
    title: "4. IE",
    content: "ie بيتنطق إي طويلة.\nأمثلة:\nTier : حيوان\nsieben : سبعة\nfliegen : يطير\nLiebe : حب\nspielen : يلعب\n"
  },
  {
    title: "5. EI",
    content: "ei بيتنطق إي.\nأمثلة:\nEi : بيضة\nReis : أرز\nEis : آيس كريم\nEisen : حديد\nmein : لي / خاصتي\nklein : صغير\n"
  },
  {
    title: "6. AU",
    content: "au بيتنطق أو.\nأمثلة:\nAuto : سيارة\nHaus : بيت\nBaum : شجرة\nFrau : امرأة\nkaufen : يشتري\n"
  },
  {
    title: "7. EU / ÄU",
    content: "الاتنين بيتنطقوا تقريباً أوء، أوي.\nEU:\nEuro : يورو\nFeuer : نار\nheute : اليوم\nFreund : صديق\nneu : جديد\n\nÄU:\nBäume : أشجار\nMäuse : فئران\nHäuser : بيوت\nTräume : أحلام\nHäuser : منازل\n\nأوي → eu | أة → äu"
  },
  {
    title: "8. SCH",
    content: "sch بيتنطق ش واضحة وقوية نسبياً.\nأمثلة:\nSchule : مدرسة\nSchrank : دولاب / خزانة\nTasche : شنطة\nSchuhe : أحذية\nschön : جميل\n\nو ده مختلف عن ich:\nch = ش واضحة، بينما ch في ich في صوت خفيف مختلف."
  },
  {
    title: "9. ST / SP",
    content: "لما st أو sp بيجي في بداية الكلمة أو بداية مقطع، غالباً بيتنطقوا:\n\nشب ← SP\nأمثلة:\nSpiel : لعبة\nSpaß : متعة / مرح\nSpiegel : مرآة\nsprechen : يتحدث\nSport : رياضة\n\nشت ← ST\nأمثلة:\nStuhl : كرسي\nStraße : شارع\nstehen : يقف\nStadt : مدينة\nStein : حجر\n"
  },
  {
    title: "10. ER",
    content: "في نهاية الكلمة، الـ er غالباً لا تنطق كر عربية واضحة، والصوت كله بيطلع بشكل أقرب لصوت مركزي خفيف.\nأمثلة:\naber : لكن\nbesser : أفضل\nFenster : نافذة\nLehrer : معلم\nMutter : أم\n\nخصوصاً في نهاية الكلمة، متحاولش تنطق الـ r العربية بقوة."
  },
  {
    title: "11. UR",
    content: "ur بتدي صوتاً قريباً من أو/أوور.\nأمثلة:\nNatur : طبيعة\nKultur : ثقافة\nUhr : ساعة\nnur : فقط\nkurz : قصير\n"
  },
  {
    title: "12. QU",
    content: "qu في الألماني بيتنطق تقريباً كڤ / kv.\nأمثلة:\nQuelle : نبع\nQuatsch : هراء / كلام فارغ\nQuark : جبنة فريش\nQualität : جودة\nQuadrat : مربع\n\nيعني مش \"كو\" بالإنجليزية:\nالصوت الألماني فيه ك + ف."
  },
  {
    title: "13. PF",
    content: "pf صوت مركب سريع ب + ف.\nأمثلة:\nApfel : تفاحة\nTopf : حلة / إناء\nPferd : حصان\nPfanne : مقلاة\nPflanze : نبات\n\nلازم الصوتين يندمجوا مع بعض بسرعة، مش تنطقهم منفصلين بوضوح شديد."
  },
  {
    title: "14. -IG",
    content: "-ig لما تيجي في نهاية الكلمة. في النطق الألماني القياسي بألمانيا غالباً بتكون قريبة من الصوت الخفيف الموجود في ich.\nأمثلة:\nzwanzig : عشرون\nrichtig : صحيح\nwichtig : مهم\nlustig : مضحك\nfertig : انتهى / جاهز\n\nوفي بعض المناطق واللهجات ممكن تسمع النهاية أقرب إلى i-، بصوت g وده طبيعي."
  },
  {
    title: "15. -TION",
    content: "-tion في الكلمات الألمانية ذات الأصل اللاتيني/الفرنسي غالباً بيتنطق تسيون.\nأمثلة:\nLektion : درس\nInformation : معلومة / معلومات\nSituation : موقف / حالة\nStation : محطة\nNation : أمة / دولة\n\nيعني:\n-tion → -تسيون"
  }
];

// // الحروف والقواعد المتقدمة (الصورة الثانية)
// const phoneticSectionsImage2 = [
//   {
//     title: "1. Vokale - حروف المد",
//     content: "الحروف المتحركة الأساسية: A - E - I - O - U\nالصوت الطويل والقصير\nبشكل مبسط:\n• حرف متحرك + حرف ساكن واحد → غالباً الصوت طويل.\n• حرف متحرك + حرف ساكن مزدوج → الصوت قصير.\n\nأمثلة:\n• Bett : سرير → ا قصيرة\n• bitte : من فضلك → ا قصيرة\n• kommen : يأتي → O قصيرة\n• Mutter : أم → U قصيرة\n• Name : اسم → A طويلة\n\nدي قاعدة مبسطة، وفي الألماني توجد طرق أخرى لمعرفة طول الحركة."
//   },
//   {
//     title: "2. C",
//     content: "حرف له أكثر من نطْق حسب الكلمة.\nتس = Cent\n• وفي كلمات أجنبية ممكن يكون ك، أو صوتاً آخر حسب أصل الكلمة: Café"
//   },
//   {
//     title: "3. H",
//     content: "في بداية الكلمة: H = هـ (Haus, Hand, Hund, heute)\nبعد حرف متحرك: في بعض الكلمات الـ H لا تنطق، لكنها تجعل الحركة قبلها طويلة: gehen, sehen, Zahl, Ohr, Uhr"
//   },
//   {
//     title: "4. J",
//     content: "J = ي\n• ja : نعم\n• Japan : اليابان\n• Jacke : جاكيت\n• Jahr : سنة"
//   },
//   {
//     title: "5. O / Ö",
//     content: "صوت O: Oma, Opa, Orange\nÖ (O Umlaut): تقرب اللسان من وضع E، ونضم الشفايف.\n• schön : جميل\n• hören : يسمع\n• Öl : زيت\n• zwölf : أثنا عشر"
//   },
//   {
//     title: "6. P",
//     content: "پ پ مع دفعة هواء.\n• Pack : جزمة\n• Post : بريد\n• Polen : بولندا\n• Papa : أبي"
//   },
//   {
//     title: "7. S / SS / ß",
//     content: "S = ز في بداية الكلمة: Sonne, Sohn, See\nS = س في نهاية الكلمة: das / Haus / was\nوقبل حرف ساكن: Wurst / Stadt (حالة خاصة لأن ST في البداية تنطق شت).\n\nSS = س: الـ ss صوتين، والحركة قبلها قصيرة: Essen, Wasser, Klasse, Schloss.\n\nß = س: اسمها Eszett، وصوتها مثل ss. وغالباً تأتي بعد حركة طويلة أو صوت مزدوج: Straße, Fuß, süß."
//   },
//   {
//     title: "8. SCH / SP / ST",
//     content: "SCH = ش (Schule, schön, Schwester)\nSP = شب في بداية الكلمة أو المقطع: Spaß, spielen, Sport\nST = شت في بداية الكلمة أو المقطع: Straße, stehen, Stadt"
//   },
//   {
//     title: "9. R",
//     content: "لها نطق مختلف حسب مكانها.\nفي بداية الكلمة تكون واضحة: rot, Reise, Radio, Rose, Regen.\nفي نهاية الكلمة أو المقطع: خصوصاً -er، تصبح خفيفة جداً وليست R قوية: Lehrer, Vater, Mutter, besser.\nR في وسط الكلمة وقبل حرف متحرك تكون مسموعة أكثر: Reise, Garage, Maria, Kamera."
//   },
//   {
//     title: "10. U",
//     content: "لها قريب من صوت وو:\n• Buch : كتاب\n• gut : جيد\n• Mutter : أم\n• Schule : مدرسة"
//   },
//   {
//     title: "11. Ü",
//     content: "Ü = U Umlaut\nأسهل طريقة لنطقها: انطقي إي، وبعدها ضفي الشفايف من غير ما تغيري وضع اللسان. إي + ضم الشفايف = Ü\nأمثلة:\n• Übung : تمرين\n• Stühle : كراسي\n• Bücher : كتب\n• Tür : باب\n• fünf : خمسة"
//   },
//   {
//     title: "12. Y - Ypsilon",
//     content: "وفي بعض الكلمات يكون قريباً من ت/. اسم الحرف: Ypsilon\nأمثلة:\n• Ägypten : مصر\n• Syrien : سوريا\n• Typ : نوع / شخص\nلكن مش دائماً صوتنا ة: النطق يعتمد على الكلمة."
//   },
//   {
//     title: "13. Z",
//     content: "تس = Z وليس زاي.\n• Zug : قطار\n• Zucker : سكر\n• Zimmer : غرفة\n• Zeit : وقت\n• zehn : عشرة"
//   },
//   {
//     title: "14. G",
//     content: "في بداية الكلمة: صوت G واضح (gut, gehen).\nفي نهاية الكلمة: غالباً يتحول إلى صوت من ك: (Tag, Weg, Berg)."
//   },
//   {
//     title: "15. D",
//     content: "في بداية الكلمة د عادية: Deutsch, Danke, du.\nفي نهاية الكلمة: تحول غالباً إلى صوت T: Hund, Kind, Abend."
//   }
// ];

export default function GermanApp() {
  // مرجع لتخزين معرفات المؤقتات لإلغائها تماماً عند الإيقاف
  const timerIdsRef = useRef([]);

  // دالة مساعدة لتصفية كافة المؤقتات
  const clearAllTimers = () => {
    timerIdsRef.current.forEach((id) => clearTimeout(id));
    timerIdsRef.current = [];
  };

  // دالة إيقاف النطق الشاملة
  const stopSpeaking = () => {
    clearAllTimers();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const speakText = (text) => {
    stopSpeaking();
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakLetterAndWords = (letter, word1, word2) => {
    stopSpeaking();

    if ('speechSynthesis' in window) {
      const utteranceLetter = new SpeechSynthesisUtterance(letter);
      utteranceLetter.lang = 'de-DE';
      utteranceLetter.rate = 0.8;

      const utteranceWord1 = new SpeechSynthesisUtterance(word1);
      utteranceWord1.lang = 'de-DE';
      utteranceWord1.rate = 0.8;

      const utteranceWord2 = new SpeechSynthesisUtterance(word2);
      utteranceWord2.lang = 'de-DE';
      utteranceWord2.rate = 0.8;

      window.speechSynthesis.speak(utteranceLetter);

      const t1 = setTimeout(() => {
        window.speechSynthesis.speak(utteranceWord1);
      }, 400);

      const t2 = setTimeout(() => {
        window.speechSynthesis.speak(utteranceWord2);
      }, 1000);

      timerIdsRef.current.push(t1, t2);
    }
  };

  // دالة لنطق كل الحروف تباعاً
  const speakAllLetters = () => {
    stopSpeaking();

    if ('speechSynthesis' in window) {
      alphabetData.forEach((item, index) => {
        const cleanLetter = item.letter.split(' ')[0];
        const utterance = new SpeechSynthesisUtterance(cleanLetter);
        utterance.lang = 'de-DE';
        utterance.rate = 0.9;

        // تأخير زمني تراكمي لكل حرف
        const tId = setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, index * 700);

        timerIdsRef.current.push(tId);
      });
    }
  };

  // دالة لنطق كل الحروف والكلمات التي تحتها تباعاً
  const speakAllLettersAndWords = () => {
    stopSpeaking();

    if ('speechSynthesis' in window) {
      let delay = 0;
      alphabetData.forEach((item) => {
        const cleanLetter = item.letter.split(' ')[0];

        // نطق الحرف
        const uLetter = new SpeechSynthesisUtterance(cleanLetter);
        uLetter.lang = 'de-DE';
        uLetter.rate = 0.9;
        const t1 = setTimeout(() => { window.speechSynthesis.speak(uLetter); }, delay);
        timerIdsRef.current.push(t1);
        delay += 600;

        // نطق الكلمة الأولى
        const uWord1 = new SpeechSynthesisUtterance(item.words[0].de);
        uWord1.lang = 'de-DE';
        uWord1.rate = 0.9;
        const t2 = setTimeout(() => { window.speechSynthesis.speak(uWord1); }, delay);
        timerIdsRef.current.push(t2);
        delay += 700;

        // نطق الكلمة الثانية
        const uWord2 = new SpeechSynthesisUtterance(item.words[1].de);
        uWord2.lang = 'de-DE';
        uWord2.rate = 0.9;
        const t3 = setTimeout(() => { window.speechSynthesis.speak(uWord2); }, delay);
        timerIdsRef.current.push(t3);
        delay += 900;
      });
    }
  };

  return (
    <>
      <style>{`
        /* استعلامات الوسائط لتصغير خطوط العناوين في شاشات الموبايل فقط وإحاطتها ببوردر */
        @media (max-width: 768px) {
          .mobile-bordered-title {
            font-size: 1.1rem !important;
            padding: 8px 12px !important;
            border: 1px solid currentColor !important;
            border-radius: 20px 4px !important;
            display: inline-block;
            margin-bottom: 15px !important;
          }
          .mobile-bordered-main-title {
            font-size: 1.3rem !important;
            padding: 10px 15px !important;
            border: 1px solid #ffffff !important;
            border-radius: 25px 6px !important;
            display: inline-block;
            margin-bottom: 20px !important;
          }
          .mobile-bordered-h3 {
            font-size: 0.95rem !important;
            padding: 6px 10px !important;
            border: 1px solid rgba(128, 128, 128, 0.5) !important;
            border-radius: 15px 4px !important;
            display: inline-block;
          }
          /* جعل زر إيقاف النطق يأخذ السطر كاملاً أسفل الزرين في شاشة الموبايل */
          .stop-btn-mobile {
            flex-basis: 100% !important;
            width: 100% !important;
          }
        }

        /* التحكم في عدد الأعمدة حسب حجم الشاشة */
        .alphabet-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* شاشات كبيرة: 4 أعمدة */
          gap: 12px;
          direction: ltr;
        }

        @media (max-width: 1024px) {
          .alphabet-grid {
            grid-template-columns: repeat(3, 1fr); /* التاب: 3 أعمدة */
          }
        }

        @media (max-width: 768px) {
          .alphabet-grid {
            grid-template-columns: repeat(2, 1fr); /* الموبايل: 2 عمود */
          }
        }
      `}</style>

      <div style={{ padding: '15px', minHeight: '100vh', background: 'transparent' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'transparent' }}>

          {/* العنوان الرئيسي باللون الأبيض وفي بوردر للموبايل */}
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <h1 className="mobile-bordered-main-title" style={{ color: '#ffffff', fontSize: '1.8rem', margin: 0 }}>
             الحروف
            </h1>
            {/* <h1 className="mobile-bordered-main-title" style={{ color: '#ffffff', fontSize: '1.8rem', margin: 0 }}>
              الحروف والأصوات في اللغة الألمانية
            </h1> */}
          </div>

          {/* قسم الحروف الأبجدية */}
          <section style={{ marginBottom: '40px' }}>
            <h2 className="mobile-bordered-title" style={{ borderBottom: '2px solid #3498db', paddingBottom: '10px', marginBottom: '20px', color: '#3498db' }}>
              الحروف الأبجدية
            </h2>
            <h3 className="mobile-bordered-title" style={{ borderBottom: '2px solid #ffee00', paddingBottom: '10px', color: '#ffee00' }}>
              اضغط على النطق للاستماع للحرف
            </h3>

            {/* الأزرار العامة الجديدة قبل الحروف */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <button
                onClick={speakAllLetters}
                style={{
                  background: '#3498db',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px 6px',
                  padding: '10px 15px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  flex: 1
                }}
              >
                🔊 نطق كل الحروف
              </button>
              <button
                onClick={speakAllLettersAndWords}
                style={{
                  background: '#2ecc71',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px 6px',
                  padding: '10px 15px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  flex: 1
                }}
              >
                🔊 الحروف والكلمات
              </button>
              <button
                className="stop-btn-mobile"
                onClick={stopSpeaking}
                style={{
                  background: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px 6px',
                  padding: '10px 15px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  // flex: 1
                }}
              >
                ⏹️ إيقاف النطق
              </button>
            </div>

            <div className="alphabet-grid">
              {alphabetData.map((item, index) => {
                const cleanLetter = item.letter.split(' ')[0];
                return (
                  <div
                    key={index}
                    style={{
                      background: 'transparent',
                      border: '1px solid currentColor',
                      borderColor: 'rgba(128, 128, 128, 0.4)',
                      borderRadius: '30px 6px',
                      padding: '12px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '6px' }}>
                      {item.letter}
                    </div>

                    <div style={{ fontSize: '0.95rem', fontWeight: 'bold', lineHeight: '1.6', marginBottom: '10px' }}>
                      {item.words.map((w, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse', gap: '8px' }}>
                          <span>{w.ar}</span>
                          <span>{w.de}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button
                        onClick={() => speakText(cleanLetter)}
                        style={{
                          background: '#3498db',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '30px 6px',
                          padding: '6px 4px',
                          cursor: 'pointer',
                          fontSize: '0.7rem',
                          flex: 1,
                          fontWeight: 'bold'
                        }}
                      >
                        نطق الحرف
                      </button>
                      <button
                        onClick={() => speakLetterAndWords(cleanLetter, item.words[0].de, item.words[1].de)}
                        style={{
                          background: '#2ecc71',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '30px 6px',
                          padding: '6px 4px',
                          cursor: 'pointer',
                          fontSize: '0.7rem',
                          flex: 1,
                          fontWeight: 'bold'
                        }}
                      >
                        الحرف والكلمات
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* قسم المقاطع الصوتية */}
          {/* <section style={{ marginBottom: '40px' }}>
            <h2 className="mobile-bordered-title" style={{ borderBottom: '2px solid #e74c3c', paddingBottom: '10px', marginBottom: '20px', color: '#e74c3c', fontFamily: 'Cairo, sans-serif' }}>
              المقاطع الصوتية في اللغة الألمانية (Deutsche Silben und ihre Aussprache)
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {phoneticSectionsImage1.map((sec, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(128, 128, 128, 0.4)',
                    borderRadius: '30px 6px',
                    padding: '18px',
                    fontFamily: 'Cairo, sans-serif'
                  }}
                >
                  <h3 className="mobile-bordered-h3" style={{ margin: '0 0 10px 0', color: '#e74c3c', fontSize: '1.1rem', fontWeight: 'bold' }}>{sec.title}</h3>
                  <p style={{ margin: 0, whiteSpace: 'pre-line', lineHeight: '1.6', fontSize: '1rem', fontWeight: 'normal' }}>
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          </section> */}

          {/* قسم الحروف والقواعد المتقدمة */}
          {/* <section>
            <h2 className="mobile-bordered-title" style={{ borderBottom: '2px solid #27ae60', paddingBottom: '10px', marginBottom: '20px', color: '#27ae60', fontFamily: 'Cairo, sans-serif' }}>
              الحروف والأصوات الألمانية المتقدمة والقواعد الذهبية
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {phoneticSectionsImage2.map((sec, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(128, 128, 128, 0.4)',
                    borderRadius: '30px 6px',
                    padding: '18px',
                    fontFamily: 'Cairo, sans-serif'
                  }}
                >
                  <h3 className="mobile-bordered-h3" style={{ margin: '0 0 10px 0', color: '#27ae60', fontSize: '1.1rem', fontWeight: 'bold' }}>{sec.title}</h3>
                  <p style={{ margin: 0, whiteSpace: 'pre-line', lineHeight: '1.6', fontSize: '1rem', fontWeight: 'normal' }}>
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          </section> */}

        </div>
      </div>
    </>
  );
}