import React, { useState } from 'react';

const sentencesData = [
  { id: 1, german: "Ich gehe heute früh zur Arbeit.", arabic: "أذهب اليوم مبكرًا إلى العمل." },
  { id: 2, german: "Mein Kollege hilft mir bei der Aufgabe.", arabic: "زميلي يساعدني في المهمة." },
  { id: 3, german: "Ich lerne jeden Abend neue Wörter.", arabic: "أتعلم كلمات جديدة كل مساء." },
  { id: 4, german: "Wir treffen uns morgen im Café.", arabic: "سنلتقي غدًا في المقهى." },
  { id: 5, german: "Ich kaufe heute Lebensmittel.", arabic: "أشتري مواد غذائية اليوم." },
  { id: 6, german: "Meine Schwester arbeitet im Krankenhaus.", arabic: "أختي تعمل في المستشفى." },
  { id: 7, german: "Ich fahre jeden Tag mit dem Bus.", arabic: "أذهب كل يوم بالحافلة." },
  { id: 8, german: "Wir besuchen unsere Großeltern.", arabic: "نزور أجدادنا." },
  { id: 9, german: "Ich trinke morgens gern Tee.", arabic: "أحب شرب الشاي صباحًا." },
  { id: 10, german: "Heute habe ich einen wichtigen Termin.", arabic: "لدي موعد مهم اليوم." },
  { id: 11, german: "Ich lese jeden Tag eine Seite Deutsch.", arabic: "أقرا صفحة ألمانية كل يوم." },
  { id: 12, german: "Wir gehen am Wochenende ins Kino.", arabic: "نذهب إلى السينما في نهاية الأسبوع." },
  { id: 13, german: "Ich koche heute Reis und Gemüse.", arabic: "أطبخ اليوم أرزًا وخضارًا." },
  { id: 14, german: "Mein Vater schaut gern Nachrichten.", arabic: "والدي يحب مشاهدة الأخبار." },
  { id: 15, german: "Ich schreibe eine Nachricht an meinen Freund.", arabic: "أكتب رسالة لصديقي." },
  { id: 16, german: "Wir lernen zusammen für die Prüfung.", arabic: "ندرس معًا من أجل الامتحان." },
  { id: 17, german: "Ich arbeite heute bis fünf Uhr.", arabic: "أعمل اليوم حتى الساعة الخامسة." },
  { id: 18, german: "Meine Mutter macht das Frühstück.", arabic: "أمي تحضر الإفطار." },
  { id: 19, german: "Ich höre im Auto Musik.", arabic: "أستمع إلى الموسيقى في السيارة." },
  { id: 20, german: "Wir machen heute einen kurzen Spaziergang.", arabic: "نقوم بنزهة قصيرة اليوم." },
  { id: 21, german: "Ich brauche einen neuen Stift.", arabic: "أحتاج إلى قلم جديد." },
  { id: 22, german: "Der Lehrer erklärt die Grammatik.", arabic: "المعلم يشرح القواعد." },
  { id: 23, german: "Ich verstehe die Frage jetzt.", arabic: "أفهم السؤال الآن." },
  { id: 24, german: "Wir wiederholen die Lektion.", arabic: "نراجع الدرس." },
  { id: 25, german: "Ich schreibe meine Notizen.", arabic: "أكتب ملاحظاتي." },
  { id: 26, german: "Meine Freundin lernt auch Deutsch.", arabic: "صديقتي تتعلم الألمانية أيضًا." },
  { id: 27, german: "Wir sprechen im Kurs Deutsch.", arabic: "نتحدث بالألمانية في الكورس." },
  { id: 28, german: "Ich mache jeden Tag eine Übung.", arabic: "أقوم بمرين كل يوم." },
  { id: 29, german: "Heute lernen wir neue Verben.", arabic: "نتعلم أفعالاً جديدة اليوم." },
  { id: 30, german: "Ich stelle eine Frage im Unterricht.", arabic: "أطرح سؤالاً في الدرس." },
  { id: 31, german: "Ich gehe nach der Arbeit nach Hause.", arabic: "أذهب إلى المنزل بعد العمل." },
  { id: 32, german: "Wir essen zusammen zu Mittag.", arabic: "نتناول الغداء معًا." },
  { id: 33, german: "Ich rufe meine Familie an.", arabic: "أتصل بعائلتي." },
  { id: 34, german: "Meine Schwester kommt heute zu Besuch.", arabic: "أختي تأتي للزيارة اليوم." },
  { id: 35, german: "Wir trinken zusammen Kaffee.", arabic: "نشرب القهوة معًا." },
  { id: 36, german: "Ich erzähle von meinem Tag.", arabic: "أتحدث عن يومي." },
  { id: 37, german: "Wir planen einen Ausflug.", arabic: "نخطط لنزهة." },
  { id: 38, german: "Ich mache das Fenster auf.", arabic: "أفتح النافذة." },
  { id: 39, german: "Wir hören zusammen Musik.", arabic: "نستمع إلى الموسيقى معًا." },
  { id: 40, german: "Danach sehe ich fern.", arabic: "بعد ذلك أشاهد التلفاز." },
  { id: 41, german: "Ich gehe am Abend einkaufen.", arabic: "أذهب للتسوق مساءً." },
  { id: 42, german: "Ich kaufe Brot und Milch.", arabic: "أشتري خبزًا وحليبًا." },
  { id: 43, german: "Die Verkäuferin ist freundlich.", arabic: "البائعة لطيفة." },
  { id: 44, german: "Ich bezahle an der Kasse.", arabic: "أدفع عند الصندوق." },
  { id: 45, german: "Wir tragen die Taschen nach Hause.", arabic: "نحمل الأكياس إلى المنزل." },
  { id: 46, german: "Ich stelle das Essen in den Kühlschrank.", arabic: "أضع الطعام في الثلاجة." },
  { id: 47, german: "Wir kochen zusammen das Abendessen.", arabic: "نطبخ العشاء معًا." },
  { id: 48, german: "Ich schneide das Gemüse.", arabic: "أقطع الخضار." },
  { id: 49, german: "Das Essen schmeckt sehr gut.", arabic: "الطعام طعمه جيد جداً." },
  { id: 50, german: "Wir essen zusammen am Tisch.", arabic: "نأكل معًا على الطاولة." },
  { id: 51, german: "Ich gehe gern im Park spazieren.", arabic: "أحب المشي في الحديقة." },
  { id: 52, german: "Wir sehen viele Menschen dort.", arabic: "نرى الكثير من الناس هنا." },
  { id: 53, german: "Kinder spielen im Park.", arabic: "الأطفال يلعبون في الحديقة." },
  { id: 54, german: "Ich mache ein Foto vom Park.", arabic: "ألتقط صورة للحديقة." },
  { id: 55, german: "Wir sitzen auf einer Bank.", arabic: "نجلس على مقعد." },
  { id: 56, german: "Ich lese ein kleines Buch.", arabic: "أقرأ كتابًا صغيرًا." },
  { id: 57, german: "Die Sonne scheint heute.", arabic: "الشمس مشرفة اليوم." },
  { id: 58, german: "Das Wetter ist angenehm.", arabic: "الطقس لطيف." },
  { id: 59, german: "Wir bleiben eine Stunde dort.", arabic: "نبقى هناك ساعة." },
  { id: 60, german: "Danach gehen wir nach Hause.", arabic: "بعد ذلك نذهب إلى المنزل." },
  { id: 61, german: "Ich arbeite heute im Büro.", arabic: "أعمل اليوم في المكتب." },
  { id: 62, german: "Mein Chef gibt mir eine Aufgabe.", arabic: "مديري يعطيني مهمة." },
  { id: 63, german: "Ich schreibe einen Bericht.", arabic: "أكتب تقريرًا." },
  { id: 64, german: "Wir haben eine kurze Besprechung.", arabic: "لدينا اجتماع قصير." },
  { id: 65, german: "Ich sende eine E-Mail.", arabic: "أرسل بريدًا إلكترونيًا." },
  { id: 66, german: "Mein Kollege hilft mir.", arabic: "زميلي يساعدني." },
  { id: 67, german: "Wir trinken zusammen Kaffee.", arabic: "نشرب القهوة معًا." },
  { id: 68, german: "Ich mache eine kleine Pause.", arabic: "آخذ استراحة قصيرة." },
  { id: 69, german: "Danach arbeite ich weiter.", arabic: "بعد ذلك أواصل العمل." },
  { id: 70, german: "Um fünf Uhr gehe ich nach Hause.", arabic: "الساعة الخامسة أذهب إلى المنزل." },
  { id: 71, german: "Ich besuche einen Deutschkurs.", arabic: "أحضر دورة لغة ألمانية." },
  { id: 72, german: "Der Kurs beginnt um neun Uhr.", arabic: "الكورس يبدأ الساعة التاسعة." },
  { id: 73, german: "Wir lernen neue Wörter.", arabic: "نتعلم كلمات جديدة." },
  { id: 74, german: "Ich schreibe die Wörter in mein Heft.", arabic: "أكتب الكلمات في دفتري." },
  { id: 75, german: "Wir machen viele Übungen.", arabic: "نقوم بالكثير من التمارين." },
  { id: 76, german: "Der Lehrer spricht langsam.", arabic: "المعلم يتحدث ببطء." },
  { id: 77, german: "Ich verstehe fast alles.", arabic: "أفهم تقريبًا كل شيء." },
  { id: 78, german: "Wir arbeiten in Gruppen.", arabic: "نعمل في مجموعات." },
  { id: 79, german: "Ich spreche mit meinen Mitschülern.", arabic: "أتحدث مع زملائي." },
  { id: 80, german: "Der Unterricht macht Spaß.", arabic: "الدرس ممتع." },
  { id: 81, german: "Am Wochenende habe ich frei.", arabic: "في نهاية الأسبوع لدي إجازة." },
  { id: 82, german: "Ich schlafe am Morgen länger.", arabic: "أنام أكثر في الصباح." },
  { id: 83, german: "Wir frühstücken zusammen.", arabic: "نتناول الإفطار معًا." },
  { id: 84, german: "Danach gehen wir einkaufen.", arabic: "بعد ذلك نذهب للتسوق." },
  { id: 85, german: "Ich kaufe Kleidung.", arabic: "أشتري ملابس." },
  { id: 86, german: "Wir essen im Restaurant.", arabic: "نأكل في المطعم." },
  { id: 87, german: "Ich bestelle Reis mit Hähnchen.", arabic: "أطلب أرزًا مع دجاج." },
  { id: 88, german: "Das Restaurant ist sehr schön.", arabic: "المطعم جميل جدًا." },
  { id: 89, german: "Wir bezahlen und gehen.", arabic: "ندفع ونغادر." },
  { id: 90, german: "Der Tag ist sehr schön.", arabic: "اليوم جميل جدًا." },
  { id: 91, german: "Ich habe ein neues Ziel.", arabic: "لدي هدف جديد." },
  { id: 92, german: "Ich möchte besser Deutsch lernen.", arabic: "أريد تعلم الألمانية بشكل أفضل." },
  { id: 93, german: "Ich übe jeden Tag ein bisschen.", arabic: "أتدرب قليلًا كل يوم." },
  { id: 94, german: "Ich lese einfache deutsche Texte.", arabic: "أقرأ نصوصًا ألمانية بسيطة." },
  { id: 95, german: "Ich höre deutsche Podcasts.", arabic: "أستمع إلى بودكاست ألماني." },
  { id: 96, german: "Ich schreibe neue Sätze.", arabic: "أكتب جملًا جديدة." },
  { id: 97, german: "Fehler sind normal beim Lernen.", arabic: "الأخطاء طبيعية أثناء التعلم." },
  { id: 98, german: "Ich habe Geduld mit mir selbst.", arabic: "لدي صبر مع نفسي." },
  { id: 99, german: "Mein Deutsch wird langsam besser.", arabic: "لغتي الألمانية تتحسن تدريجيًا." },
  { id: 100, german: "Ich mache jeden Tag weiter.", arabic: "أواصل التعلم كل يوم." },
  { id: 101, german: "Ich trinke ein Glas Wasser.", arabic: "أشرب كوباً من الماء." },
  { id: 102, german: "Kannst du mir bitte helfen?", arabic: "هل يمكنك مساعدتي من فضلك؟" },
  { id: 103, german: "Ich verstehe das nicht ganz.", arabic: "لا أفهم هذا تماماً." },
  { id: 104, german: "Das ist eine sehr gute Idee.", arabic: "هذه فكرة ممتازة جداً." },
  { id: 105, german: "Wie viel kostet das?", arabic: "كم يتكلف هذا؟" },
  { id: 106, german: "Ich wünsche dir einen schönen Tag.", arabic: "أتمنى لك يوماً جميلاً." },
  { id: 107, german: "Ich bin bereit zu lernen.", arabic: "أنا مستعد للتعلم." },
  { id: 108, german: "Alles wird gut sein.", arabic: "كل شيء سيكون بخير." },
  { id: 109, german: "Ich lerne Deutsch Schritt für Schritt.", arabic: "أتعلم الألمانية خطوة بخطوة." },
  { id: 110, german: "Übung macht den Meister.", arabic: "التكرار يصنع المهارة." },
  { id: 111, german: "Wo ist die nächste Haltestelle?", arabic: "أين تقع المحطة القادمة؟" },
  { id: 112, german: "Ich möchte ein Ticket kaufen.", arabic: "أريد شراء تذكرة." },
  { id: 113, german: "Entschuldigung, wie spät ist es?", arabic: "عذراً، كم الساعة الآن؟" },
  { id: 114, german: "Ich habe heute viel zu tun.", arabic: "لدي الكثير لأفعله اليوم." },
  { id: 115, german: "Rufen Sie mich später an.", arabic: "اتصل بي في وقت لاحق." },
  { id: 116, german: "Ich freue mich auf das Wochenende.", arabic: "أنا يتطلع بشوق إلى نهاية الأسبوع." },
  { id: 117, german: "Das hat mir sehr gut gefallen.", arabic: "لقد أعجبني هذا جداً." },
  { id: 118, german: "Ich bin gleich da.", arabic: "سأكون هناك بعد قليل." },
  { id: 119, german: "Haben Sie noch Fragen?", arabic: "هل لديك أي أسئلة أخرى؟" },
  { id: 120, german: "Wir sehen uns morgen wieder.", arabic: "نلتقي مجدداً غداً." },
  { id: 121, german: "Ich brauche ein bisschen Zeit.", arabic: "أحتاج إلى القليل من الوقت." },
  { id: 122, german: "Guten Appetit beim Essen!", arabic: "شهية طيبة عند الأكل!" },
  { id: 123, german: "Vielen Dank für deine Hilfe.", arabic: "شكراً جزيلاً لك على مساعدتك." },
  { id: 124, german: "Das ist kein Problem für mich.", arabic: "هذا ليس مشكلة بالنسبة لي." },
  { id: 125, german: "Ich wünsche dir viel Erfolg!", arabic: "أتمنى لك كل النجاح والتوفيق!" },

  // حزمة جمل جديدة مفيدة جداً (من 126 إلى 150)
  { id: 126, german: "Wie geht es dir heute?", arabic: "كيف حالك اليوم؟" },
  { id: 127, german: "Mir geht es sehr gut, danke.", arabic: "أنا بخير جداً، شكراً لك." },
  { id: 128, german: "Woher kommst du?", arabic: "من أين أنت؟" },
  { id: 129, german: "Ich komme aus Ägypten.", arabic: "أنا من مصر." },
  { id: 130, german: "Wo wohnst du zurzeit?", arabic: "أين تسكن في الوقت الحالي؟" },
  { id: 131, german: "Ich wohne in einer schönen Stadt.", arabic: "أسكن في مدينة جميلة." },
  { id: 132, german: "Sprechen Sie Deutsch oder Englisch?", arabic: "هل تتحدث الألمانية أم الإنجليزية؟" },
  { id: 133, german: "Ich spreche ein bisschen Deutsch.", arabic: "أتحدث القليل من الألمانية." },
  { id: 134, german: "Können Sie das bitte wiederholen?", arabic: "هل يمكنك إعادة ذلك من فضلك؟" },
  { id: 135, german: "Bitte sprechen Sie etwas langsamer.", arabic: "من فضلك تحدث ببطء أكثر قليلاً." },
  { id: 136, german: "Was bedeutet dieses Wort?", arabic: "ماذا تعني هذه الكلمة؟" },
  { id: 137, german: "Ich suche den Bahnhof.", arabic: "أنا أبحث عن محطة القطار." },
  { id: 138, german: "Gehen Sie bitte geradeaus.", arabic: "امشِ مباشرة من فضلك." },
  { id: 139, german: "Die Apotheke ist um die Ecke.", arabic: "الصيدلية عند ناصية الشارع." },
  { id: 140, german: "Ich möchte einen Tisch reservieren.", arabic: "أريد حجز طاولة." },
  { id: 141, german: "Die Rechnung, bitte!", arabic: "الفاتورة من فضلك!" },
  { id: 142, german: "Ich fühle mich heute nicht gut.", arabic: "لا أشعر بأني بخير اليوم." },
  { id: 143, german: "Ich muss zum Arzt gehen.", arabic: "يجب أن أذهب إلى الطبيب." },
  { id: 144, german: "Ich habe Kopfschmerzen.", arabic: "عندي صداع في الرأس." },
  { id: 145, german: "Gute Besserung!", arabic: "اتمنى لك الشفاء العاجل!" },
  { id: 146, german: "Wann fährt der nächste Zug?", arabic: "متى ينطلق القطار القادم؟" },
  { id: 147, german: "Der Zug hat zehn Minuten Verspätung.", arabic: "القطار متأخر عشر دقائق." },
  { id: 148, german: "Ich wünsche dir ein schönes Wochenende.", arabic: "أتمنى لك عطلة نهاية أسبوع سعيدة." },
  { id: 149, german: "Herzlichen Glückwunsch zum Geburtstag!", arabic: "تهانينا الحارة بمناسبة عيد الميلاد!" },
  { id: 150, german: "Vielen Dank und bis bald!", arabic: "شكراً جزيلاً وإلى اللقاء قريبًا!" }
];

export default function GermanSentencesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const speakGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const renderColoredGermanWord = (germanStr) => {
    const parts = germanStr.split(' ');
    if (parts.length > 1) {
      const article = parts[0].toLowerCase();
      const rest = parts.slice(1).join(' ');
      let articleColor = 'inherit';

      if (article === 'der') articleColor = '#00bfff';
      else if (article === 'das') articleColor = '#22c55e';
      else if (article === 'die') articleColor = '#ec4899';

      return (
        <span>
          <span style={{ color: articleColor, fontWeight: 'bold' }}>{parts[0]}</span> {rest}
        </span>
      );
    }
    return germanStr;
  };

  const filteredData = sentencesData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm)
  );

  return (
    <div style={{ padding: '15px 10px 40px 10px', color: 'inherit', background: 'transparent', width: '100%', boxSizing: 'border-box' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: inherit;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }
        .search-input {
          width: 100%;
          max-width: 500px;
          padding: 10px 16px;
          border-radius: 25px;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font-size: 1rem;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }
        .vocab-card {
          position: relative;
          width: 100%;
          max-width: 500px;
          border: 2px solid currentColor;
          border-radius: 25px 8px;
          padding: 16px 18px 14px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: inherit;
          background: transparent;
          box-sizing: border-box;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease;
        }
        .vocab-card:hover {
          border-color: #00bfff;
        }
        .item-number {
          position: absolute;
          top: -11px;
          left: 20px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
          z-index: 2;
        }
        .audio-icon {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.15rem;
          z-index: 2;
          pointer-events: none;
        }

        .sentence-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          width: 100%;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .german-sentence {
          font-size: 1.05rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
          flex: 1 1 auto;
          word-break: break-word;
        }
        .arabic-sentence {
          font-size: 1.05rem;
          font-weight: bold;
          text-align: right;
          direction: rtl;
          flex: 1 1 auto;
          word-break: break-word;
        }
      `}</style>

      <h1 className="page-title">جمل ألمانية لجميع المراحل (Deutsch für alle Stufen)</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن جملة بالعربية أو الألمانية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="vocab-card"
            onClick={() => speakGerman(item.german)}
          >
            {/* رقم الكارت */}
            <div className="item-number">{item.id}</div>

            {/* أيقونة السماعة */}
            <div className="audio-icon">🔊</div>

            {/* صف الجملة (ألماني يسار وعربي يمين على نفس السطر) */}
            <div className="sentence-row">
              <div className="arabic-sentence">{item.arabic}</div>
              <div className="german-sentence">{renderColoredGermanWord(item.german)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}