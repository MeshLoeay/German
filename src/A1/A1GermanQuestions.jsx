import React, { useState, useEffect } from 'react';

const questionsData = [
  {
    id: 1,
    de: "Wie heißt du?",
    ar: "ما اسمك؟",
    answers: [
      { de: "Ich heiße Loeay.", ar: "أدعى لؤي." },
      { de: "Mein Name ist Loeay.", ar: "اسمي لؤي." },
      { de: "Ich bin Loeay.", ar: "أنا لؤي." },
      { de: "Man nennt mich Loeay.", ar: "يطلقون علي اسم لؤي." },
      { de: "Ich werde Loeay gerufen.", ar: "يُنادى علي باسم لؤي." }
    ]
  },
  {
    id: 2,
    de: "Wie alt bist du?",
    ar: "كم عمرك؟",
    answers: [
      { de: "Ich bin 25 Jahre alt.", ar: "عُمري 25 عاماً." },
      { de: "Ich bin 30.", ar: "أنا في الثلاثين من عمري." },
      { de: "Ich bin fast 26 Jahre alt.", ar: "اقتربت من 26 عاماً." },
      { de: "Ich bin über zwanzig Jahre alt.", ar: "أنا أكبر من عشرين عاماً." },
      { de: "Mein Alter beträgt 28 Jahre.", ar: "عمري يبلغ 28 عاماً." }
    ]
  },
  {
    id: 3,
    de: "Wo wohnst du?",
    ar: "أين تسكن؟",
    answers: [
      { de: "Ich wohne in Kairo.", ar: "أنا أسكن في القاهرة." },
      { de: "Ich wohne in Berlin.", ar: "أنا أسكن في برلين." },
      { de: "Ich wohne in einer schönen Wohnung.", ar: "أنا أسكن في شقة جميلة." },
      { de: "Ich wohne im Zentrum der Stadt.", ar: "أنا أسكن في مركز المدينة." },
      { de: "Ich wohne in einer ruhigen Gegend.", ar: "أنا أسكن في منطقة هادئة." }
    ]
  },
  {
    id: 4,
    de: "Woher kommst du?",
    ar: "من أين أنت؟",
    answers: [
      { de: "Ich komme aus Ägypten.", ar: "أنا أتيت من مصر." },
      { de: "Ich komme aus Deutschland.", ar: "أنا أتيت من ألمانيا." },
      { de: "Ich bin gebürtig aus Kairo.", ar: "أنا في الأصل من القاهرة." },
      { de: "Ich komme aus einer großen Stadt.", ar: "أنا أتيت من مدينة كبيرة." },
      { de: "Ich stamme aus Kairo.", ar: "أنا أتنحدر من القاهرة." }
    ]
  },
  {
    id: 5,
    de: "Was machst du beruflich?",
    ar: "ما هو عملك؟",
    answers: [
      { de: "Ich bin Webentwickler.", ar: "أنا مطور ويب." },
      { de: "Ich bin Softwareentwickler.", ar: "أنا مطور برمجيات." },
      { de: "Ich bin Krankenpfleger.", ar: "أنا ممرض." },
      { de: "Ich bin Pflegekraft.", ar: "أنا فرد أطقم رعاية وتمريض." },
      { de: "Ich bin Arzt.", ar: "أنا طبيب." },
      { de: "Ich bin Lehrer.", ar: "أنا معلم." },
      { de: "Ich bin Ingenieur.", ar: "أنا مهندس." },
      { de: "Ich bin Designer.", ar: "أنا مصمم." },
      { de: "Ich bin Student und arbeite nebenbei.", ar: "أنا طالب وأعمل في الوقت ذاته." },
      { de: "Ich arbeite im IT-Bereich.", ar: "أنا أعمل في مجال تكنولوجيا المعلومات." },
      { de: "Ich bin arbeitsuchend.", ar: "أنا أبحث عن عمل." }
    ]
  },
  {
    id: 6,
    de: "Hast du Geschwister?",
    ar: "هل لديك أخوة؟",
    answers: [
      { de: "Ja, ich habe zwei Brüder und eine Schwester.", ar: "نعم، لدى اخان و اخت." },
      { de: "Ja, ich habe zwei Schwestern und einen Bruder.", ar: "نعم، لدى اختان و اخ." },
      { de: "Ja, ich habe einen Bruder und eine Schwester.", ar: "نعم، لدي أخ وأخت." },
      { de: "Nein, ich bin Einzelkind.", ar: "لا، أنا ابن وحيد." },
      { de: "Ich habe eine große Familie.", ar: "لدي عائلة كبيرة." }
    ]
  },
  {
    id: 7,
    de: "Hast du Kinder?",
    ar: "هل لديك أطفال؟",
    answers: [
      { de: "Ja, ich habe einen Sohn und eine Tochter.", ar: "نعم، عندي ولد وبنت." },
      { de: "Ja, ich habe ein Kind.", ar: "نعم، لدي طفل واحد." },
      { de: "Ja, ich habe zwei Kinder.", ar: "نعم، لدي طفلان." },
      { de: "Nein, ich habe keine Kinder.", ar: "لا، ليس لدي أطفال." },
      { de: "Ich bin noch nicht verheiratet und habe keine Kinder.", ar: "لست متزوجاً بعد وليس لدي أطفال." }
    ]
  },
  {
    id: 8,
    de: "Bist du verheiratet?",
    ar: "هل أنت متزوج؟",
    answers: [
      { de: "Ja, ich bin verheiratet.", ar: "نعم، أنا متزوج." },
      { de: "Nein, ich bin ledig.", ar: "لا، أنا أعزب." },
      { de: "Ich bin verlobt.", ar: "أنا مخطوب." },
      { de: "Ich bin geschieden.", ar: "أنا مطلق." }
    ]
  },
  {
    id: 9,
    de: "Sprichst du Deutsch?",
    ar: "هل تتحدث الألمانية؟",
    answers: [
      { de: "Ja, ein bisschen Deutsch.", ar: "نعم، أتحدث قليلاً من الألمانية." },
      { de: "Ja, ich lerne noch.", ar: "نعم، ما زلت أتعلم." },
      { de: "Ich spreche schon gut Deutsch.", ar: "أنا أتحدث الألمانية بشكل جيد بالفعل." },
      { de: "Nein, ich spreche kein Deutsch.", ar: "لا، لا أتحدث الألمانية." }
    ]
  },
  {
    id: 10,
    de: "Was sind deine Hobbys?",
    ar: "ما هي هواياتك؟",
    answers: [
      { de: "Meine Hobbys sind Lesen und Programmieren.", ar: "هواياتي هي القراءة والبرمجة." },
      { de: "Ich spiele gerne Fußball.", ar: "أحب لعب كرة القدم." },
      { de: "Ich höre gerne Musik in meiner Freizeit.", ar: "أحب الاستماع للموسيقى في وقت فراغي." },
      { de: "Ich fotografiere gerne.", ar: "أحب التقاط الصور الفوتوغرافية." }
    ]
  },
  {
    id: 11,
    de: "Magst du Musik?",
    ar: "هل تحب الموسيقى؟",
    answers: [
      { de: "Ja, ich liebe Musik.", ar: "نعم، أنا أحب الموسيقى." },
      { de: "Ja, sehr gerne.", ar: "نعم، كثيراً جداً." },
      { de: "Manchmal höre ich gerne Musik.", ar: "أحياناً أحب الاستماع للموسيقى." },
      { de: "Nein, ich höre selten Musik.", ar: "لا، نادراً ما أستمع إلى الموسيقى." }
    ]
  },
  {
    id: 12,
    de: "Welche Sprachen sprichst du?",
    ar: "ما اللغات التي تتحدثها؟",
    answers: [
      { de: "Ich spreche Arabisch und Deutsch.", ar: "أنا أتحدث العربية والألمانية." },
      { de: "Ich spreche Arabisch und Englisch.", ar: "أنا أتحدث العربية والإنجليزية." },
      { de: "Ich spreche drei Sprachen.", ar: "أنا أتحدث ثلاث لغات." },
      { de: "Meine Muttersprache ist Arabisch.", ar: "لغتي الأم هي العربية." }
    ]
  },
  {
    id: 13,
    de: "Wo arbeitest du?",
    ar: "أين تعمل؟",
    answers: [
      { de: "Ich arbeite in einem Krankenhaus.", ar: "أنا أعمل في مستشفى." },
      { de: "Ich arbeite von zu Hause aus.", ar: "أنا أعمل من المنزل (عن بُعد)." },
      { de: "Ich arbeite in einer Firma.", ar: "أنا أعمل في شركة." },
      { de: "Ich arbeite im Büro.", ar: "أنا أعمل في المكتب." }
    ]
  },
  {
    id: 14,
    de: "Was ist dein Lieblingsessen?",
    ar: "ما هو طعامك المفضّل؟",
    answers: [
      { de: "Mein Lieblingsessen ist Pizza.", ar: "طعامي المفضّل هو البيتزا." },
      { de: "Ich esse gerne Hähnchenfleisch mit Reis.", ar: "أحب أكل الدجاج مع الأرز." },
      { de: "Ich mag Pasta sehr.", ar: "أنا أحب المعكرونة كثيراً." },
      { de: "Ich mag traditionelles ägyptisches Essen.", ar: "أحب الأكل المصري التقليدي." }
    ]
  },
  {
    id: 15,
    de: "Hast du Haustiere?",
    ar: "هل لديك حيوانات أليفة؟",
    answers: [
      { de: "Ja, ich habe eine Katze.", ar: "نعم، لدي قطة." },
      { de: "Ja, ich habe einen Hund.", ar: "نعم، لدي كلب." },
      { de: "Ich habe Vögel.", ar: "لدى طيور." },
      { de: "Nein, ich habe keine Haustiere.", ar: "لا، ليس لدي حيوانات أليفة." }
    ]
  },
  {
    id: 16,
    de: "Was ist dein Lieblingsfilm?",
    ar: "ما هو فيلمك المفضّل؟",
    answers: [
      { de: "Ich sehe gerne Actionfilme.", ar: "أحب مشاهدة أفلام الحركة." },
      { de: "Ich mag Komödien.", ar: "أحب أفلام الكوميديا." },
      { de: "Ich sehe gerne Dokumentarfilme.", ar: "أحب مشاهدة الأفلام الوثائقية." },
      { de: "Ich habe keinen Lieblingsfilm.", ar: "ليس لدي فيلم مفضل محدد." }
    ]
  },
  // سؤال الساعة مع إجابات الساعة كاملة (تماماً، وخمسة، وعشرة، وربع، وتلت، ونصف إلا خمسة، ونصف، وباقي التوقيتات)
  {
    id: 17,
    de: "Wie spät ist es?",
    ar: "كم الساعة الآن؟ (إجابات الوقت بالتفصيل)",
    answers: [
      { de: "Es ist genau zehn Uhr.", ar: "إنها الساعة العاشرة تماماً." },
      { de: "Es ist fünf nach zehn.", ar: "إنها العاشرة وخمس دقائق." },
      { de: "Es ist zehn nach zehn.", ar: "إنها العاشرة وعشر دقائق." },
      { de: "Es ist Viertel nach zehn.", ar: "إنها العاشرة والربع." },
      { de: "Es ist zwanzig nach zehn.", ar: "إنها العاشرة والثلت (وعشرون دقيقة)." },
      { de: "Es ist fünf vor halb elf.", ar: "إنها العاشرة ونصف إلا خمسة." },
      { de: "Es ist halb elf.", ar: "إنها العاشرة والنصف." },
      { de: "Es ist fünf nach halb elf.", ar: "إنها العاشرة ونصف وخمسة." },
      { de: "Es ist zwanzig vor elf.", ar: "إنها الحادية عشرة إلا ثلث." },
      { de: "Es ist Viertel vor elf.", ar: "إنها الحادية عشرة إلا ربع." },
      { de: "Es ist zehn vor elf.", ar: "إنها الحادية عشرة إلا عشرة." },
      { de: "Es ist fünf vor elf.", ar: "إنها الحادية عشرة إلا خمسة." },
      { de: "Es ist elf Uhr.", ar: "إنها الحادية عشرة تماماً." }
    ]
  },
  {
    id: 18,
    de: "Was ist dein Lieblingsland?",
    ar: "ما هي دولتك المفضلة؟",
    answers: [
      { de: "Mein Lieblingsland ist Deutschland.", ar: "دولتي المفضلة هي ألمانيا." },
      { de: "Ich mag Ägypten sehr.", ar: "أنا أحب مصر كثيراً." },
      { de: "Die Schweiz ist wunderschön.", ar: "سويسرا رائعة الجمال." },
      { de: "Ich mag viele Länder.", ar: "أنا أحب دولاً عديدة." }
    ]
  },
  {
    id: 19,
    de: "Was machst du gerne in deiner Freizeit?",
    ar: "ماذا تحب أن تفعل في وقت فراغك؟",
    answers: [
      { de: "In meiner Freizeit lese ich gerne Bücher.", ar: "في وقت فراغي أحب قراءة الكتب." },
      { de: "Ich treffe mich gerne mit Freunden.", ar: "أحب مقابلة الأصدقاء." },
      { de: "Ich sehe oft Serien.", ar: "أشاهد المسلسلات غالباً." },
      { de: "Ich mache Sport.", ar: "أمارس الرياضة." }
    ]
  },
  {
    id: 20,
    de: "Was ist dein Lieblingssport?",
    ar: "ما هو رياضتك المفضلة؟",
    answers: [
      { de: "Mein Lieblingssport ist Fußball.", ar: "رياضتي المفضلة هي كرة القدم." },
      { de: "Ich schwimme gerne.", ar: "أحب السباحة." },
      { de: "Ich gehe ins Fitnessstudio.", ar: "أذهب إلى صالة الألعاب الرياضية." },
      { de: "Ich laufe gerne am Morgen.", ar: "أحب الجري في الصباح." }
    ]
  },
  {
    id: 21,
    de: "Trinkst du Kaffee oder Tee?",
    ar: "هل تشرب القهوة أم الشاي؟",
    answers: [
      { de: "Ich trinke lieber Kaffee.", ar: "أفضل شرب القهوة." },
      { de: "Ich trinke gerne Tee.", ar: "أحب شرب الشاي." },
      { de: "Ich trinke beides gerne.", ar: "أحب شرب الاثنين معاً." },
      { de: "Ich trinke morgens Kaffee und abends Tee.", ar: "أشرب القهوة صباحاً والشاي مساءً." }
    ]
  },
  {
    id: 22,
    de: "Kannst du kochen?",
    ar: "هل تستطيع الطهي؟",
    answers: [
      { de: "Ja, ich kann gut kochen.", ar: "نعم، أستطيع الطهي بشكل جيد." },
      { de: "Ein bisschen.", ar: "قليلاً." },
      { de: "Ja, ich koche sehr gerne.", ar: "نعم، أحب الطهي كثيراً." },
      { de: "Nein, ich kann nicht kochen.", ar: "لا، لا أستطيع الطهي." }
    ]
  },
  {
    id: 23,
    de: "Hast du ein Auto?",
    ar: "هل لديك سيارة؟",
    answers: [
      { de: "Ja, ich habe ein Auto.", ar: "نعم، لدي سيارة." },
      { de: "Nein, ich habe kein Auto.", ar: "لا، ليس لدي سيارة." },
      { de: "Ich plane, ein Auto zu kaufen.", ar: "أخطط لشراء سيارة." },
      { de: "Ich nutze öffentliche Verkehrsmittel.", ar: "أنا أستخدم وسائل المواصلات العامة." }
    ]
  },
  {
    id: 24,
    de: "Wie ist das Wetter heute?",
    ar: "كيف الطقس اليوم؟",
    answers: [
      { de: "Heute ist das Wetter schön und sonnig.", ar: "الطقس اليوم جميل ومشمس." },
      { de: "Es regnet heute.", ar: "اليوم تمطر." },
      { de: "Es ist heute sehr kalt.", ar: "الجو بارد جداً اليوم." },
      { de: "Es ist windig.", ar: "الجو عاصف." }
    ]
  },
  {
    id: 25,
    de: "Wie war dein Tag?",
    ar: "كيف كان يومك؟",
    answers: [
      { de: "Mein Tag war sehr gut.", ar: "كان يومي جيداً جداً." },
      { de: "Es war ein langer und anstrengender Tag.", ar: "لقد كان يوماً طويلاً ومُرهقاً." },
      { de: "Es war fantastisch und produktiv.", ar: "لقد كان رائعاً ومثمراً." }
    ]
  },
  {
    id: 26,
    de: "Was ist dein Traumjob?",
    ar: "ما هو عمل أحلامك؟",
    answers: [
      { de: "Mein Traumjob ist Softwareentwickler.", ar: "عمل أحلامي هو مطور برمجيات." },
      { de: "Ich möchte als Arzt arbeiten.", ar: "أود العمل كطبيب." },
      { de: "Ich möchte eine leitende Position haben.", ar: "أود أن أمتلك منصباً قيادياً." },
      { de: "Erfolgreich im IT-Bereich sein.", ar: "أن أكون ناجحاً في مجال تكنولوجيا المعلومات." }
    ]
  },
  {
    id: 27,
    de: "Reist du gerne?",
    ar: "هل تحب السفر؟",
    answers: [
      { de: "Ja, ich reise sehr gerne.", ar: "نعم، أحب السفر كثيراً." },
      { de: "Manchmal reise ich gerne.", ar: "أحب السفر أحياناً." },
      { de: "Nein, ich bleibe lieber zu Hause.", ar: "لا، أفضّل البقاء في المنزل." }
    ]
  },
  {
    id: 28,
    de: "Warst du schon einmal in Deutschland?",
    ar: "هل سبق لك أن زرت ألمانيا؟",
    answers: [
      { de: "Ja, ich war schon in Deutschland.", ar: "نعم، لقد زرت ألمانيا من قبل." },
      { de: "Nein, noch nie.", ar: "لا، لم أزرها من قبل قط." },
      { de: "Hoffentlich bald.", ar: "آمل ذلك قريباً." }
    ]
  },
  {
    id: 29,
    de: "Was studierst du?",
    ar: "ماذا تدرس؟",
    answers: [
      { de: "Ich studiere Informatik.", ar: "أنا أدرس علوم الحاسوب." },
      { de: "Ich studiere Medizin.", ar: "أنا أدرس الطب." },
      { de: "Ich bin mit dem Studium fertig.", ar: "لقد انتهيت من الدراسة." }
    ]
  },
  {
    id: 30,
    de: "Wo bist du geboren?",
    ar: "أين ولدت؟",
    answers: [
      { de: "Ich bin in Kairo geboren.", ar: "لقد ولدت في القاهرة." },
      { de: "Ich bin in Alexandria geboren.", ar: "لقد ولدت في الإسكندرية." },
      { de: "Ich bin in einer kleinen Stadt geboren.", ar: "لقد ولدت في مدينة صغيرة." }
    ]
  },
  {
    id: 31,
    de: "Magst du Tiere?",
    ar: "هل تحب الحيوانات؟",
    answers: [
      { de: "Ja, ich mag Tiere sehr.", ar: "نعم، أنا أحب الحيوانات كثيراً." },
      { de: "Ja, besonders Katzen.", ar: "نعم، وخصوصاً القطط." },
      { de: "Nein, nicht wirklich.", ar: "لا، ليس حقاً." }
    ]
  },
  {
    id: 32,
    de: "Welcher Tag ist heute?",
    ar: "ما هو اليوم؟",
    answers: [
      { de: "Heute ist Montag.", ar: "اليوم هو يوم الإثنين." },
      { de: "Heute ist Freitag.", ar: "اليوم هو يوم الجمعة." },
      { de: "Heute ist Samstag.", ar: "اليوم هو يوم السبت." }
    ]
  },
  {
    id: 33,
    de: "Was ist deine Lieblingsfarbe?",
    ar: "ما هو لونك المفضّل؟",
    answers: [
      { de: "Meine Lieblingsfarbe ist Blau.", ar: "لوني المفضّل هو الأزرق." },
      { de: "Ich mag Grün am liebsten.", ar: "أفضل اللون الأخضر." },
      { de: "Schwarz ist meine Lieblingsfarbe.", ar: "الأسود هو لوني المفضّل." }
    ]
  },
  {
    id: 34,
    de: "Wie heißt deine Mutter?",
    ar: "ما اسم والدتك؟",
    answers: [
      { de: "Das ist privat.", ar: "هذا أمر شخصي." },
      { de: "Meine Mutter ist eine wunderbare Frau.", ar: "والدتي امرأة رائعة." }
    ]
  },
  {
    id: 35,
    de: "Wie heißt dein Vater?",
    ar: "ما اسم والدك؟",
    answers: [
      { de: "Das bleibt privat.", ar: "هذا يظل شخصياً." },
      { de: "Mein Vater ist ein ehrenhafter Mann.", ar: "والدي رجل محترم." }
    ]
  },
  {
    id: 36,
    de: "Wie groß bist du?",
    ar: "كم طولك؟",
    answers: [
      { de: "Ich bin 1,75 Meter groß.", ar: "طولي متر وسبعون سنتيمتراً." },
      { de: "Ich bin 1,80 Meter groß.", ar: "طولي متر وثمانون سنتيمتراً." }
    ]
  },
  {
    id: 37,
    de: "Welche Musik hörst du gerne?",
    ar: "أي نوع من الموسيقى تحب أن تستمع إليه؟",
    answers: [
      { de: "Ich höre gerne ruhige Musik.", ar: "أحب الاستماع إلى الموسيقى الهادئة." },
      { de: "Ich mag Popmusik und klassische Musik.", ar: "أحب موسيقى البوب والموسيقى الكلاسيكية." }
    ]
  },
  {
    id: 38,
    de: "Was machst du morgen?",
    ar: "ماذا ستفعل غداً؟",
    answers: [
      { de: "Morgen werde ich arbeiten.", ar: "غداً سأقوم بالعمل." },
      { de: "Morgen bleibe ich zu Hause.", ar: "غداً سأبقى في المنزل." }
    ]
  },
  {
    id: 39,
    de: "Was ist dein Lieblingsmonat?",
    ar: "ما هو شهرك المفضّل؟",
    answers: [
      { de: "Mein Lieblingsmonat ist Mai.", ar: "شهري المفضّل هو مايو." },
      { de: "Ich mag den Januar.", ar: "أنا أحب شهر يناير." }
    ]
  },
  {
    id: 40,
    de: "Magst du Schokolade?",
    ar: "هل تحب الشوكولاتة؟",
    answers: [
      { de: "Ja, ich liebe Schokolade.", ar: "نعم، أنا أعشق الشوكولاتة." },
      { de: "Nein, ich mag keine Süßigkeiten.", ar: "لا، أنا لا أحب الحلويات." }
    ]
  },
  {
    id: 41,
    de: "Was isst du gerne zum Frühstück?",
    ar: "ماذا تحب أن تأكل على الإفطار؟",
    answers: [
      { de: "Ich esse morgens gerne Brot mit Käse.", ar: "أحب في الصباح تناول الخبز مع الجبن." },
      { de: "Ich esse Eier und trinke Saft zum Frühstück.", ar: "أتناول البيض وأشرب العصير على الإفطار." }
    ]
  },
  {
    id: 42,
    de: "Welche Jahreszeit magst du am liebsten?",
    ar: "ما هو فصلك المفضل؟",
    answers: [
      { de: "Ich mag den Sommer am liebsten.", ar: "أفضل فصل الصيف أكثر شيء." },
      { de: "Der Winter ist meine Lieblingsjahreszeit.", ar: "الشتاء هو فصلي المفضّل." }
    ]
  },
  {
    id: 43,
    de: "Hast du Hunger?",
    ar: "هل أنت جائع؟",
    answers: [
      { de: "Ja, ich habe großen Hunger.", ar: "نعم، أنا جائع جداً." },
      { de: "Nein, ich bin satt.", ar: "لا، أنا شبعان." }
    ]
  },
  {
    id: 44,
    de: "Hast du Durst?",
    ar: "هل أنت عطشان؟",
    answers: [
      { de: "Ja, ich möchte Wasser trinken.", ar: "نعم، أود أن أشرب الماء." },
      { de: "Nein, danke.", ar: "لا، شكراً لك." }
    ]
  },
  {
    id: 45,
    de: "Was machst du heute Abend?",
    ar: "ماذا ستفعل هذا المساء؟",
    answers: [
      { de: "Heute Abend sehe ich einen Film.", ar: "هذا المساء سأشاهد فيلماً." },
      { de: "Ich werde zu Hause bleiben und entspannen.", ar: "سأبقى في المنزل وأستريح." }
    ]
  },
  {
    id: 46,
    de: "Gehst du gerne spazieren?",
    ar: "هل تحب التنزه؟",
    answers: [
      { de: "Ja, ich gehe abends gerne spazieren.", ar: "نعم، أحب التنزه في المساء." },
      { de: "Nein, ich bleibe lieber drinnen.", ar: "لا، أفضّل البقاء في الداخل." }
    ]
  },
  {
    id: 47,
    de: "Hast du Angst vor etwas?",
    ar: "هل تخاف من شيء ما؟",
    answers: [
      { de: "Nein, vor nichts Besonderem.", ar: "لا، لا أخاف من شيء معين." },
      { de: "Ich habe ein wenig Angst vor Hunden.", ar: "أخاف قليلاً من الكلاب." }
    ]
  },
  {
    id: 48,
    de: "Was ist deine Lieblingsstadt?",
    ar: "ما هي مدينتك المفضلة؟",
    answers: [
      { de: "Meine Lieblingsstadt ist Kairo.", ar: "مدينتي المفضلة هي القاهرة." },
      { de: "Ich mag Berlin sehr.", ar: "أنا أحب برلين كثيراً." }
    ]
  },
  {
    id: 49,
    de: "Welchen Tag magst du am meisten?",
    ar: "أي يوم تحب أكثر؟",
    answers: [
      { de: "Ich mag den Freitag am meisten.", ar: "أحب يوم الجمعة أكثر شيء." },
      { de: "Samstag ist mein Lieblingstag.", ar: "السبت هو يومي المفضّل." }
    ]
  },
  {
    id: 50,
    de: "Hast du heute viel gearbeitet?",
    ar: "هل عملت كثيراً اليوم؟",
    answers: [
      { de: "Ja, ich habe sehr viel gearbeitet.", ar: "نعم، لقد عملت كثيراً جداً." },
      { de: "Nein, es war ein ruhiger Tag.", ar: "لا، لقد كان يوماً هادئاً." }
    ]
  },
  {
    id: 51,
    de: "Wo möchtest du leben?",
    ar: "أين تريد أن تعيش؟",
    answers: [
      { de: "Ich möchte in Deutschland leben.", ar: "أريد أن أعيش في ألمانيا." },
      { de: "Ich lebe gerne in Kairo.", ar: "أحب العيش في القاهرة." }
    ]
  },
  {
    id: 52,
    de: "Gehst du gerne ins Kino?",
    ar: "هل تحب الذهاب إلى السينما؟",
    answers: [
      { de: "Ja, ich gehe oft ins Kino.", ar: "نعم، أذهب إلى السينما كثيراً." },
      { de: "Nein, ich sehe Filme lieber zu Hause.", ar: "لا، أفضّل مشاهدة الأفلام في المنزل." }
    ]
  },
  {
    id: 53,
    de: "Bist du glücklich?",
    ar: "هل أنت سعيد؟",
    answers: [
      { de: "Ja, ich bin sehr glücklich.", ar: "نعم، أنا سعيد جداً." },
      { de: "Es geht so.", ar: "الأمر ماشي حاله / إلى حد ما." }
    ]
  },
  {
    id: 54,
    de: "Hast du einen besten Freund?",
    ar: "هل لديك صديق مقرب؟",
    answers: [
      { de: "Ja, ich habe einen besten Freund.", ar: "نعم، لدي صديق مقرب." },
      { de: "Ja, meine Familie ist mein bester Rückhalt.", ar: "نعم، عائلتي هي سندي الأول." }
    ]
  },
  {
    id: 55,
    de: "Wie lange lernst du schon Deutsch?",
    ar: "منذ متى وأنت تتعلم الألمانية؟",
    answers: [
      { de: "Ich lerne seit sechs Monaten Deutsch.", ar: "أنا أتعلم الألمانية منذ ستة أشهر." },
      { de: "Ich lerne erst seit kurzem Deutsch.", ar: "أنا أتعلم الألمانية منذ وقت قصير فقط." }
    ]
  },
  {
    id: 56,
    de: "Wie viele Geschwister hast du?",
    ar: "كم عدد إخوتك؟",
    answers: [
      { de: "Ich habe zwei Brüder und eine Schwester.", ar: "لدى اخان و اخت." },
      { de: "Ich habe zwei Schwestern und einen Bruder.", ar: "لدى اختان و اخ." },
      { de: "Ich habe keine Geschwister.", ar: "ليس لدي إخوة." }
    ]
  },
  {
    id: 57,
    de: "Arbeitest du heute?",
    ar: "هل تعمل اليوم؟",
    answers: [
      { de: "Ja, ich muss heute arbeiten.", ar: "نعم، يجب أن أعمل اليوم." },
      { de: "Nein, heute habe ich frei.", ar: "لا، اليوم لدي إجازة." }
    ]
  },
  {
    id: 58,
    de: "Gehst du gerne einkaufen?",
    ar: "هل تحب التسوق؟",
    answers: [
      { de: "Ja, ich gehe gerne einkaufen.", ar: "نعم، أحب التسوق." },
      { de: "Nein, ich mag Einkaufen nicht.", ar: "لا، لا أحب التسوق." }
    ]
  },
  {
    id: 59,
    de: "Was ist dein Lieblingsfest?",
    ar: "ما هو عيدك المفضّل؟",
    answers: [
      { de: "Mein Lieblingsfest ist das Eid-Fest.", ar: "عيدي المفضّل هو عيد الفطر/الأضحى." },
      { de: "Ich mag Weihnachten.", ar: "أنا أحب عيد الميلاد المجيد." }
    ]
  },
  {
    id: 60,
    de: "Bist du müde?",
    ar: "هل أنت متعب؟",
    answers: [
      { de: "Ja, ich bin sehr müde.", ar: "نعم، أنا متعب جداً." },
      { de: "Nein, ich bin fit.", ar: "لا، أنا بكامل نشاطي." }
    ]
  },
  {
    id: 61,
    de: "Wie fühlst du dich heute?",
    ar: "كيف تشعر اليوم؟",
    answers: [
      { de: "Mir geht es heute sehr gut.", ar: "أشعر بحالة جيدة جداً اليوم." },
      { de: "Ich fühle mich hervorragend.", ar: "أشعر بأنني بحال ممتازة." }
    ]
  },
  {
    id: 62,
    de: "Kannst du schwimmen?",
    ar: "هل تستطيع السباحة؟",
    answers: [
      { de: "Ja, ich kann gut schwimmen.", ar: "نعم، أستطيع السباحة جيدا." },
      { de: "Nein, ich kann nicht schwimmen.", ar: "لا، لا أستطيع السباحة." }
    ]
  },
  {
    id: 63,
    de: "Spielst du ein Instrument?",
    ar: "هل تعزف على آلة موسيقية؟",
    answers: [
      { de: "Ja, ich spiele Gitarre.", ar: "نعم، أعزف على الجيتار." },
      { de: "Nein, ich spiele kein Instrument.", ar: "لا، لا أعزف على أي آلة موسيقية." }
    ]
  },
  {
    id: 64,
    de: "Hast du einen Lieblingssänger?",
    ar: "هل لديك مُغَنٍّ مفضل؟",
    answers: [
      { de: "Ja, ich höre gerne verschiedene Sänger.", ar: "نعم، أحب الاستماع إلى مغنين مختلفين." },
      { de: "Ich habe keinen Lieblingssänger.", ar: "ليس لدي مطرب مفضل محدد." }
    ]
  },
  {
    id: 65,
    de: "Was ist dein Lieblingslied?",
    ar: "ما هي أغنيتك المفضلة؟",
    answers: [
      { de: "Ich habe viele Lieblingslieder.", ar: "لدي العديد من الأغاني المفضلة." },
      { de: "Ich höre keine bestimmten Lieder.", ar: "لا أستمع لأغاني محددة." }
    ]
  },
  {
    id: 66,
    de: "Hast du eine Lieblingsserie?",
    ar: "هل لديك مسلسل مفضل؟",
    answers: [
      { de: "Ja, ich sehe gerne Serien auf Netflix.", ar: "نعم، أحب مشاهدة المسلسلات على نتفليكس." },
      { de: "Nein, ich sehe selten Serien.", ar: "لا، نادراً ما أتابع المسلسلات." }
    ]
  },
  {
    id: 67,
    de: "Was ist dein Lieblingsgetränk?",
    ar: "ما هو مشروبك المفضّل؟",
    answers: [
      { de: "Mein Lieblingsgetränk ist Orangensaft.", ar: "مشروبي المفضّل هو عصير البرتقال." },
      { de: "Ich trinke am liebsten Wasser.", ar: "أفضل شرب الماء." }
    ]
  },
  {
    id: 68,
    de: "Hast du Freunde in Deutschland?",
    ar: "هل لديك أصدقاء في ألمانيا؟",
    answers: [
      { de: "Ja, ich habe ein paar Freunde dort.", ar: "نعم، لدي بعض الأصدقاء هناك." },
      { de: "Nein, noch nicht.", ar: "لا، ليس بعد." }
    ]
  },
  {
    id: 69,
    de: "Bist du ein Morgenmensch?",
    ar: "هل أنت شخص صباحي؟",
    answers: [
      { de: "Ja, ich stehe gerne früh auf.", ar: "نعم، أحب الاستيقاظ مبكراً." },
      { de: "Nein, ich bin ein Nachtmensch.", ar: "لا، أنا شخص ليلي." }
    ]
  },
  {
    id: 70,
    de: "Was möchtest du lernen?",
    ar: "ماذا تريد أن تتعلم؟",
    answers: [
      { de: "Ich möchte fließend Deutsch sprechen.", ar: "أريد التحدث بالألمانية بطلاقة." },
      { de: "Ich möchte Programmieren lernen.", ar: "أريد تعلم البرمجة بعمق." }
    ]
  },
  {
    id: 71,
    de: "Hast du einen Garten?",
    ar: "هل لديك حديقة؟",
    answers: [
      { de: "Ja, wir haben einen kleinen Garten.", ar: "نعم، لدينا حديقة صغيرة." },
      { de: "Nein, ich wohne in einer Wohnung.", ar: "لا، أنا أسكن في شقة." }
    ]
  },
  {
    id: 72,
    de: "Wann bist du aufgestanden?",
    ar: "متى استيقظت؟",
    answers: [
      { de: "Ich bin um sieben Uhr aufgestanden.", ar: "استيقظت في الساعة السابعة." },
      { de: "Heute bin ich sehr früh aufgestanden.", ar: "استيقظت مبكراً جداً اليوم." }
    ]
  },
  {
    id: 73,
    de: "Fährst du gerne Fahrrad?",
    ar: "هل تحب ركوب الدراجة؟",
    answers: [
      { de: "Ja, ich fahre gerne Rad.", ar: "نعم، أحب ركوب الدراجة." },
      { de: "Nein, ich habe kein Fahrrad.", ar: "لا، ليس لدي دراجة." }
    ]
  },
  {
    id: 74,
    de: "Was machst du, wenn du traurig bist?",
    ar: "ماذا تفعل عندما تكون حزيناً؟",
    answers: [
      { de: "Wenn ich traurig bin, höre ich Musik.", ar: "عندما أكون حزيناً أستمع إلى الموسيقى." },
      { de: "Ich versuche mich abzulenken.", ar: "أحاول إلهاء نفسي بأمور إيجابية." }
    ]
  },
  {
    id: 75,
    de: "Wie lange schläfst du?",
    ar: "كم تنام؟",
    answers: [
      { de: "Ich schlafe etwa sieben Stunden.", ar: "أنام حوالي سبع ساعات." },
      { de: "Ich schlafe meistens acht Stunden.", ar: "أنام غالباً ثماني ساعات." }
    ]
  },
  {
    id: 76,
    de: "Trägst du eine Brille?",
    ar: "هل ترتدي نظارات؟",
    answers: [
      { de: "Ja, ich trage eine Brille zum Lesen.", ar: "نعم، أرتدي نظارات للقراءة." },
      { de: "Nein, ich brauche keine Brille.", ar: "لا، لا أحتاج إلى نظارات." }
    ]
  },
  {
    id: 77,
    de: "Welche Farbe haben deine Augen?",
    ar: "ما لون عينيك؟",
    answers: [
      { de: "Meine Augen sind braun.", ar: "عيناي بنيتان." },
      { de: "Meine Augen sind schwarz.", ar: "عيناي سوداوان." }
    ]
  },
  {
    id: 78,
    de: "Welche Farbe haben deine Haare?",
    ar: "ما لون شعرك؟",
    answers: [
      { de: "Meine Haare sind schwarz.", ar: "شعري أسود." },
      { de: "Meine Haare sind braun.", ar: "شعري بني." }
    ]
  },
  {
    id: 79,
    de: "Magst du die Natur?",
    ar: "هل تحب الطبيعة؟",
    answers: [
      { de: "Ja, ich liebe die Natur und Spaziergänge.", ar: "نعم، أنا أعشق الطبيعة والتنزه." },
      { de: "Ja, sehr.", ar: "نعم، كثيراً." }
    ]
  },
  {
    id: 80,
    de: "Hast du gestern Sport gemacht?",
    ar: "هل مارست الرياضة أمس؟",
    answers: [
      { de: "Ja, ich war gestern im Fitnessstudio.", ar: "نعم، كنت في صالة الألعاب الرياضية أمس." },
      { de: "Nein, gestern war ich zu müde.", ar: "لا، كنت متعباً جداً أمس." }
    ]
  },
  {
    id: 81,
    de: "Kannst du tanzen?",
    ar: "هل تستطيع الرقص؟",
    answers: [
      { de: "Nein, ich kann nicht gut tanzen.", ar: "لا، لا أستطيع الرقص جيداً." },
      { de: "Ein bisschen.", ar: "قليلاً." }
    ]
  },
  {
    id: 82,
    de: "Wann hast du Geburtstag?",
    ar: "متى عيد ميلادك؟",
    answers: [
      { de: "Mein Geburtstag ist im Januar.", ar: "عيد ميلادي في شهر يناير." },
      { de: "Ich habe im Sommer Geburtstag.", ar: "عيد ميلادي في الصيف." }
    ]
  },
  {
    id: 83,
    de: "Hast du Pläne für das Wochenende?",
    ar: "هل لديك خطط لعطلة نهاية الأسبوع؟",
    answers: [
      { de: "Ja, ich werde meine Familie besuchen.", ar: "نعم، سأقوم بزيارة عائلتي." },
      { de: "Nein, ich habe noch keine Pläne.", ar: "لا، ليست لدي أي خطط بعد." }
    ]
  },
  {
    id: 84,
    de: "Magst du Videospiele?",
    ar: "هل تحب ألعاب الفيديو؟",
    answers: [
      { de: "Ja, ich spiele ab und zu gerne.", ar: "نعم، أحب اللعب من حين لآخر." },
      { de: "Nein, das interessiert mich nicht.", ar: "لا، هذا لا يثير اهتمامي." }
    ]
  },
  {
    id: 85,
    de: "Was machst du, wenn es regnet?",
    ar: "ماذا تفعل عندما تمطر؟",
    answers: [
      { de: "Wenn es regnet, bleibe ich zu Hause.", ar: "عندما تمطر أبقى في المنزل." },
      { de: "Ich trinke warmen Tee und lese.", ar: "أشرب شاي دافئ وأقرأ." }
    ]
  },
  {
    id: 86,
    de: "Liest du gerne Bücher?",
    ar: "هل تحب قراءة الكتب؟",
    answers: [
      { de: "Ja, ich lese sehr gerne Sachbücher.", ar: "نعم، أحب جداً قراءة الكتب الواقعية والعلمية." },
      { de: "Nein, ich lese lieber im Internet.", ar: "لا، أفضّل القراءة على الإنترنت." }
    ]
  },
  {
    id: 87,
    de: "Hast du eine Lieblingsblume?",
    ar: "هل لديك زهرة مفضلة؟",
    answers: [
      { de: "Ja, ich mag Rosen.", ar: "نعم، أنا أحب الورود." },
      { de: "Nicht wirklich.", ar: "ليس حقاً." }
    ]
  },
  {
    id: 88,
    de: "Welche Farben magst du nicht?",
    ar: "ما هي الألوان التي لا تحبها؟",
    answers: [
      { de: "Ich mag Braun nicht besonders.", ar: "لا أحب اللون البني كثيراً." },
      { de: "Ich mag alle Farben.", ar: "أحب كل الألوان تقريباً." }
    ]
  },
  {
    id: 89,
    de: "Fährst du gerne Auto?",
    ar: "هل تحب قيادة السيارة؟",
    answers: [
      { de: "Ja, ich fahre sehr gerne Auto.", ar: "نعم، أحب قيادة السيارة كثيراً." },
      { de: "Nein, ich fahre nicht oft.", ar: "لا، لا أقود كثيراً." }
    ]
  },
  {
    id: 90,
    de: "Gehst du gerne wandern?",
    ar: "هل تحب المشي لمسافات طويلة؟",
    answers: [
      { de: "Ja, im Urlaub wandere ich gerne.", ar: "نعم، في العطلة أحب المشي لمسافات طويلة." },
      { de: "Nein, das ist zu anstrengend.", ar: "لا، هذا مرهق للغاية." }
    ]
  },
  {
    id: 91,
    de: "Was ist dein Lieblingsobst?",
    ar: "ما هي فاكهتك المفضلة؟",
    answers: [
      { de: "Mein Lieblingsobst ist Banane.", ar: "فاكهتي المفضلة هي الموز." },
      { de: "Ich esse am liebsten Äpfel.", ar: "أفضل تناول التفاح." }
    ]
  },
  {
    id: 92,
    de: "Hast du einen Computer?",
    ar: "هل لديك كمبيوتر؟",
    answers: [
      { de: "Ja, ich habe einen Laptop für die Arbeit.", ar: "نعم، لدي حاسوب محمول للعمل." },
      { de: "Ja, ich nutze ihn täglich.", ar: "نعم، أستخدامه يومياً." }
    ]
  },
  {
    id: 93,
    de: "Lächelst du oft?",
    ar: "هل تبتسم كثيراً؟",
    answers: [
      { de: "Ja, ich versuche immer positiv zu sein.", ar: "نعم، أحب دائماً أن أكون إيجابياً." },
      { de: "Manchmal.", ar: "أحياناً." }
    ]
  },
  {
    id: 94,
    de: "Bist du kreativ?",
    ar: "هل أنت مبدع؟",
    answers: [
      { de: "Ja, als Entwickler muss ich kreativ sein.", ar: "نعم، كمطور يجب أن أكون مبدعاً." },
      { de: "Ein bisschen.", ar: "قليلاً." }
    ]
  },
  {
    id: 95,
    de: "Magst du Pizza?",
    ar: "هل تحب البيتزا؟",
    answers: [
      { de: "Ja, Pizza schmeckt mir sehr gut.", ar: "نعم، البيتزا تعجبني كثيراً." },
      { de: "Nein, ich esse lieber Pasta.", ar: "لا، أفضّل تناول المعكرونة." }
    ]
  },
  {
    id: 96,
    de: "Gehst du gerne schwimmen?",
    ar: "هل تحب السباحة؟",
    answers: [
      { de: "Ja, im Sommer gehe ich oft schwimmen.", ar: "نعم، في الصيف أذهب للسباحة كثيراً." },
      { de: "Nein, nicht wirklich.", ar: "لا، ليس حقاً." }
    ]
  },
  {
    id: 97,
    de: "Bist du pünktlich?",
    ar: "هل أنت دقيق في المواعيد؟",
    answers: [
      { de: "Ja, Pünktlichkeit ist mir sehr wichtig.", ar: "نعم، الالتزام بالمواعيد مهم جداً بالنسبة لي." },
      { de: "Ich versuche immer pünktlich zu sein.", ar: "أحاول دائماً أن أكون دقيقاً في مواعيدي." }
    ]
  },
  {
    id: 98,
    de: "Was ist deine Lieblingsjahreszeit?",
    ar: "ما هو فصلك المفضل؟",
    answers: [
      { de: "Mein Lieblingsjahreszeit ist der Frühling.", ar: "فصلي المفضّل هو الربيع." },
      { de: "Ich mag den Herbst sehr gerne.", ar: "أحب الخريف كثيراً." }
    ]
  },
  {
    id: 99,
    de: "Kochst du gerne am Wochenende?",
    ar: "هل تحب الطهي في عطلة نهاية الأسبوع؟",
    answers: [
      { de: "Ja, am Wochenende habe ich mehr Zeit zum Kochen.", ar: "نعم، لدي وقت أطول للطهي في عطلة نهاية الأسبوع." },
      { de: "Nein, ich esse oft auswärts.", ar: "لا، غالباً ما أتناول طعامي بالخارج." }
    ]
  },
  {
    id: 100,
    de: "Lernst du gerne neue Dinge?",
    ar: "هل تحب تعلم أشياء جديدة؟",
    answers: [
      { de: "Ja, ich bin sehr neugierig und lerne gerne dazu.", ar: "نعم، أنا شغوف جداً وأحب التعلم باستمرار." },
      { de: "Ja, besonders in meinem Fachgebiet.", ar: "نعم، وخاصة في مجال تخصصي." }
    ]
  },
  {
    id: 101,
    de: "Wie ist deine Telefonnummer?",
    ar: "ما هو رقم هاتفك؟",
    answers: [
      { de: "Meine Nummer ist 0123456789.", ar: "رقمي هو 0123456789." },
      { de: "Ich habe kein Telefon.", ar: "ليس لدي هاتف." }
    ]
  },
  {
    id: 102,
    de: "Wie ist deine Adresse?",
    ar: "ما هو عنوانك؟",
    answers: [
      { de: "Ich wohne in der Hauptstraße 5.", ar: "أسكن في شارع هوبشتراسه رقم 5." },
      { de: "Meine Adresse ist vertraulich.", ar: "عنواني سري." }
    ]
  },
  {
    id: 103,
    de: "Welche Staatsangehörigkeit hast du?",
    ar: "ما هي جنسيتك؟",
    answers: [
      { de: "Ich bin Ägypter.", ar: "أنا مصري." },
      { de: "Ich habe die ägyptische Staatsbürgerschaft.", ar: "أحمل الجنسية المصرية." }
    ]
  },
  {
    id: 104,
    de: "Bezahlst du bar oder mit Karte?",
    ar: "هل تدفع نقداً أم بالبطاقة؟",
    answers: [
      { de: "Ich bezahle bar.", ar: "أدفع نقداً." },
      { de: "Ich bezahle mit Karte.", ar: "أدفع بالبطاقة الائتمانية." }
    ]
  },
  {
    id: 105,
    de: "Brauchst du Hilfe?",
    ar: "هل تحتاج إلى مساعدة؟",
    answers: [
      { de: "Ja, bitte.", ar: "نعم، من فضلك." },
      { de: "Nein, danke, ich komme klar.", ar: "لا، شكراً، أنا أستطيع تدبر أمري." }
    ]
  },
  {
    id: 106,
    de: "Wo ist die Toilette?",
    ar: "أين توجد دورة المياه؟",
    answers: [
      { de: "Die Toilette ist dort drüben.", ar: "دورة المياه توجد هناك في الصوب الآخر." },
      { de: "Entschuldigung, wo ist das WC?", ar: "عذراً، أين المرحاض؟" }
    ]
  },
  {
    id: 107,
    de: "Wie viel kostet das?",
    ar: "كم تكلفة هذا؟",
    answers: [
      { de: "Das kostet zehn Euro.", ar: "هذا يكلف عشرة يورو." },
      { de: "Wie teuer ist das?", ar: "ما مدى غلاء هذا؟" }
    ]
  },
  {
    id: 108,
    de: "Hast du Geschwister oder bist du Einzelkind?",
    ar: "هل لديك إخوة أم أنك ابن وحيد؟",
    answers: [
      { de: "Ich habe eine Schwester und einen Bruder.", ar: "لدي أخت وأخ." },
      { de: "Ich bin Einzelkind.", ar: "أنا ابن وحيد." }
    ]
  },
  {
    id: 109,
    de: "Was trinkst du gerne im Sommer?",
    ar: "ماذا تحب أن تشرب في الصيف؟",
    answers: [
      { de: "Ich trinke gerne kalten Eistee.", ar: "أحب شرب الشاي المثلج." },
      { de: "Ich trinke viel Wasser im Sommer.", ar: "أشرب الكثير من الماء في الصيف." }
    ]
  },
  {
    id: 110,
    de: "Bist du bereit für die Prüfung?",
    ar: "هل أنت مستعد للاختبار؟",
    answers: [
      { de: "Ja, ich habe viel gelernt.", ar: "نعم، لقد درست كثيراً." },
      { de: "Noch nicht ganz, aber bald.", ar: "ليس تماماً بعد، ولكن قريباً." }
    ]
  },
  {
    id: 111,
    de: "Wer ist das?",
    ar: "من هذا؟",
    answers: [
      { de: "Das ist mein Freund.", ar: "هذا صديقي." },
      { de: "Das ist mein Bruder.", ar: "هذا أخي." },
      { de: "Das ist mein Lehrer.", ar: "هذا معلمي." },
      { de: "Das ist eine Bekannte von mir.", ar: "هذه صديقة لي." }
    ]
  },
  {
    id: 112,
    de: "Was ist das?",
    ar: "ما هذا؟",
    answers: [
      { de: "Das ist ein Buch.", ar: "هذا كتاب." },
      { de: "Das ist mein Handy.", ar: "هذا هاتفي المحمول." },
      { de: "Das ist ein Geschenk.", ar: "هذه هدية." },
      { de: "Ich weiß es nicht genau.", ar: "لا أعرف بالضبط." }
    ]
  },
  {
    id: 113,
    de: "Wohin gehst du?",
    ar: "إلى أين تذهب؟",
    answers: [
      { de: "Ich gehe nach Hause.", ar: "أنا ذاهب إلى المنزل." },
      { de: "Ich gehe in die Arbeit.", ar: "أنا ذاهب إلى العمل." },
      { de: "Ich gehe in den Supermarkt.", ar: "أنا ذاهب إلى السوبر ماركت." }
    ]
  },
  {
    id: 114,
    de: "Woher weißt du das?",
    ar: "من أين عرفت ذلك؟",
    answers: [
      { de: "Das habe ich im Internet gelesen.", ar: "لقد قرأت ذلك على الإنترنت." },
      { de: "Ein Freund hat es mir gesagt.", ar: "أخبرني صديق بذلك." }
    ]
  },
  {
    id: 115,
    de: "Warum lernst du Deutsch?",
    ar: "لماذا تتعلم الألمانية؟",
    answers: [
      { de: "Ich möchte in Deutschland arbeiten.", ar: "أريد أن أعمل في ألمانيا." },
      { de: "Weil es eine interessante Sprache ist.", ar: "لأنها لغة ممتعة." }
    ]
  },
  {
    id: 116,
    de: "Wann kommst du zurück?",
    ar: "متى ستعود؟",
    answers: [
      { de: "Ich komme am Abend zurück.", ar: "سأعود في المساء." },
      { de: "In einer Stunde.", ar: "خلال ساعة." }
    ]
  },
  {
    id: 117,
    de: "Wie geht es dir?",
    ar: "كيف حالك؟",
    answers: [
      { de: "Mir geht es sehr gut, danke.", ar: "أنا بحالة جيدة جداً، شكراً." },
      { de: "Es geht so.", ar: "الحال ماشي." }
    ]
  },
  {
    id: 118,
    de: "Was machst du gerade?",
    ar: "ماذا تفعل الآن؟",
    answers: [
      { de: "Ich lerne Deutsch.", ar: "أنا أتعلم الألمانية." },
      { de: "Ich höre Musik.", ar: "أنا أستمع إلى الموسيقى." }
    ]
  },
  {
    id: 119,
    de: "Wem gehört das Buch?",
    ar: "لمن هذا الكتاب؟",
    answers: [
      { de: "Das Buch gehört mir.", ar: "هذا الكتاب يخصني." },
      { de: "Das ist für meinen Freund.", ar: "هذا لصديقي." }
    ]
  },
  {
    id: 120,
    de: "Wie war dein Wochenende?",
    ar: "كيف كانت عطلة نهاية الأسبوع؟",
    answers: [
      { de: "Mein Wochenende war sehr erholsam.", ar: "كانت عطلتي مريحة جداً." },
      { de: "Ich habe viel geschlafen.", ar: "نمت كثيراً." }
    ]
  },
  // السؤال المخصص لأعضاء الجسم والألم (عينى توجعنى، رجلى توجعنى، الخ...)
  {
    id: 121,
    de: "Was tut dir weh?",
    ar: "ما الذي يوجعك؟ (أعضاء الجسم)",
    answers: [
      { de: "Mein Auge tut mir weh.", ar: "عيني توجعني." },
      { de: "Mein Bein tut mir weh.", ar: "رجلي / ساقي توجعني." },
      { de: "Meine Hand tut mir weh.", ar: "يدي توجعني." },
      { de: "Mein Kopf tut mir weh.", ar: "رأسي يوجعني (أشعر بالصداع)." },
      { de: "Mein Rücken tut mir weh.", ar: "ظهري يوجعني." },
      { de: "Mein Bauch tut mir weh.", ar: "بطني يوجعني." },
      { de: "Meine Zähne tun mir weh.", ar: "أسناني تؤلمني." },
      { de: "Mein Ohr tut mir weh.", ar: "أذني توجعني." },
      { de: "Mein Hals tut mir weh.", ar: "رقبتي / زلقي يوجعني." },
      { de: "Mir tut nichts weh, ich bin gesund.", ar: "لا يوجعني شيء، أنا بصحة جيدة." }
    ]
  },
  {
    id: 122,
    de: "Brauchst du einen Arzt?",
    ar: "هل تحتاج إلى طبيب؟",
    answers: [
      { de: "Ja, ich brauche einen Termin beim Arzt.", ar: "نعم، أحتاج إلى موعد عند الطبيب." },
      { de: "Nein, es ist nicht so schlimm.", ar: "لا، الأمر ليس سيئاً للغاية." },
      { de: "Ich muss in die Apotheke gehen.", ar: "يجب أن أذهب إلى الصيدلية." }
    ]
  },
  {
    id: 123,
    de: "Haben Sie Schmerzen?",
    ar: "هل تشعر بأي آلام؟",
    answers: [
      { de: "Ja, ich habe starke Schmerzen.", ar: "نعم، لدي آلام شديدة." },
      { de: "Nein, ich habe keine Schmerzen.", ar: "لا، ليس لدي أي آلام." },
      { de: "Nur ein bisschen Kopfschmerzen.", ar: "قليل من الصداع فقط." }
    ]
  },
  {
    id: 124,
    de: "Was kostet das Kilo?",
    ar: "كم سعر الكيلو؟",
    answers: [
      { de: "Das Kilo kostet drei Euro.", ar: "الكيلو بثلاثة يورو." },
      { de: "Äpfel kosten zwei Euro pro Kilo.", ar: "التفاح يورو2 لكل كيلو." }
    ]
  },
  {
    id: 125,
    de: "Haben Sie das in einer anderen Größe?",
    ar: "هل لديك هذا بمقاس آخر؟",
    answers: [
      { de: "Ja, wir haben Größe M und L.", ar: "نعم، لدينا مقاس متوسط وكبير." },
      { de: "Leider nein, das ist die letzte Größe.", ar: "للأسف لا، هذا هو المقاس الأخير." }
    ]
  },
  {
    id: 126,
    de: "Kann ich mit Karte bezahlen?",
    ar: "هل يمكنني الدفع بالبطاقة؟",
    answers: [
      { de: "Ja, Sie können mit Kreditkarte bezahlen.", ar: "نعم، يمكنك الدفع ببطاقة الائتمان." },
      { de: "Nein, nur Barzahlung bitte.", ar: "لا، الدفع نقداً فقط من فضلك." }
    ]
  },
  {
    id: 127,
    de: "Zahlen, bitte!",
    ar: "الحساب من فضلك!",
    answers: [
      { de: "Gerne, das macht zusammen 25 Euro.", ar: "تفضل، المجموع 25 يورو." },
      { de: "Zusammen oder getrennt?", ar: "معاً أم بشكل منفصل؟" }
    ]
  },
  {
    id: 128,
    de: "Entschuldigung, wie komme ich zum Bahnhof?",
    ar: "عذراً، كيف أصل إلى محطة القطار؟",
    answers: [
      { de: "Gehen Sie geradeaus und dann links.", ar: "اذهب بشكل مستقيم ثم إلى اليسار." },
      { de: "Nehmen Sie die U-Bahn.", ar: "استقل مترو الأنفاق." }
    ]
  },
  {
    id: 129,
    de: "Fährt dieser Bus zum Zentrum?",
    ar: "هل تذهب هذه الحافلة إلى المركز؟",
    answers: [
      { de: "Ja, dieser Bus fährt direkt ins Zentrum.", ar: "نعم، هذه الحافلة تذهب مباشرة إلى المركز." },
      { de: "Nein, Sie müssen den anderen Bus nehmen.", ar: "لا، عليك استقلال الحافلة الأخرى." }
    ]
  },
  {
    id: 130,
    de: "Ist dieser Platz frei?",
    ar: "هل هذا المقعد خالٍ؟",
    answers: [
      { de: "Ja, Sie können sich setzen.", ar: "نعم، يمكنك الجلوس." },
      { de: "Nein, der Platz ist besetzt.", ar: "لا، المقعد محجوز / مشغول." }
    ]
  },
  {
    id: 131,
    de: "Wann beginnt der Kurs?",
    ar: "متى تبدأ الدورة؟",
    answers: [
      { de: "Der Kurs beginnt am Montag.", ar: "تبدأ الدورة يوم الإثنين." },
      { de: "Um neun Uhr morgens.", ar: "في تمام الساعة التاسعة صباحاً." }
    ]
  },
  {
    id: 132,
    de: "Haben Sie am Freitag Zeit?",
    ar: "هل لديك وقت يوم الجمعة؟",
    answers: [
      { de: "Ja, am Freitag habe ich frei.", ar: "نعم، أنا متفرغ يوم الجمعة." },
      { de: "Nein, da muss ich arbeiten.", ar: "لا، يجب أن أعمل في ذلك اليوم." }
    ]
  },
  {
    id: 133,
    de: "Wie lange dauert das?",
    ar: "كم يستغرق ذلك من الوقت؟",
    answers: [
      { de: "Das dauert etwa zwei Stunden.", ar: "يستغرق ذلك حوالي ساعتين." },
      { de: "Nur ein paar Minuten.", ar: "دقائق معدودة فقط." }
    ]
  },
  {
    id: 134,
    de: "Wohin fahren Sie in den Urlaub?",
    ar: "إلى أين ستسافر في العطلة؟",
    answers: [
      { de: "Ich fahre ans Meer.", ar: "سأذهب إلى البحر." },
      { de: "Ich bleibe zu Hause und entspanne mich.", ar: "سأبقى في المنزل وأرتاح." }
    ]
  },
  {
    id: 135,
    de: "Gibt es hier ein gutes Hotel?",
    ar: "هل يوجد هنا فندق جيد؟",
    answers: [
      { de: "Ja, es gibt ein Hotel in der Nähe.", ar: "نعم، يوجد فندق قريب من هنا." },
      { de: "Nein, aber ich kenne eine schöne Pension.", ar: "لا، لكني أعرف نزلاً جميلاً." }
    ]
  }
];

export default function GermanApp() {
  // السرعة الأساسية مضبوطة على 1.0 تماماً
  const [currentSpeechRate, setCurrentSpeechRate] = useState(1.0);
  const [germanVoice, setGermanVoice] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // السؤال الأول ظاهر افتراضياً والباقي مخفي
  const [openAnswers, setOpenAnswers] = useState({ 1: true });

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.body.classList.contains('dark') ||
                     document.documentElement.getAttribute('data-bs-theme') === 'dark' ||
                     window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme', 'class'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    const loadVoices = () => {
      if (!('speechSynthesis' in window)) return;
      const voices = window.speechSynthesis.getVoices();
      const foundVoice = voices.find(v => v.lang === 'de-DE' && v.name.includes('Google')) ||
                         voices.find(v => v.lang === 'de-DE') ||
                         voices.find(v => v.lang.startsWith('de'));
      setGermanVoice(foundVoice);
    };

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }

    return () => observer.disconnect();
  }, []);

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (germanVoice) {
        utterance.voice = germanVoice;
      }
      utterance.lang = 'de-DE';
      utterance.rate = currentSpeechRate;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleAnswers = (id) => {
    setOpenAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // ألوان ديناميكية متغيرة تماماً حسب المود (أسود صريح للّايت مود، وأبيض للدارك مود)
  const dynamicTextColor = isDarkMode ? '#ffffff' : '#000000';
  const itemBorderColor = isDarkMode ? 'rgba(255, 255, 255, 0.9)' : '#000000';
  const itemBorder = `1.5px solid ${itemBorderColor}`;
  const dynamicTextShadow = isDarkMode ? '0 1px 3px rgba(0,0,0,0.5)' : 'none';

  return (
    <div className="container-fluid py-4" style={{ fontFamily: 'Cairo, sans-serif', direction: 'rtl', color: dynamicTextColor, minHeight: '100vh' }}>
      <div className="container mx-auto" style={{ maxWidth: '800px' }}>

        {/* العناوين والسرعة في منتصف الصفحة تماماً (توسيط كامل) */}
        <div style={{ textAlign: 'center', margin: '0 auto', marginBottom: '30px' }} className="d-flex flex-column align-items-center justify-content-center">
          <div style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px', color: isDarkMode ? '#adb5bd' : '#333333', textAlign: 'center' }}>
            أهم {questionsData.length} سؤالاً فى الـ A1
          </div>
          <h3 style={{ fontWeight: 'bold', color: '#dc3545', marginBottom: '15px', textAlign: 'center' }}>تعلم اللغة الألمانية - المستوى A1</h3>

          <div style={{
            borderRadius: '30px 6px 30px 6px',
            padding: '8px 18px',
            backgroundColor: 'transparent',
            border: itemBorder,
            display: 'inline-flex',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: dynamicTextColor }}>السرعة:</span>
            <div style={{
              borderRadius: '30px 6px 30px 6px',
              padding: '3px',
              display: 'inline-flex',
              gap: '2px'
            }}>
              {[0.5, 1.0, 1.5].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setCurrentSpeechRate(rate)}
                  style={{
                    fontSize: '0.8rem',
                    padding: '4px 12px',
                    borderRadius: '30px 6px 30px 6px',
                    border: 'none',
                    background: currentSpeechRate === rate ? '#0d6efd' : 'transparent',
                    color: currentSpeechRate === rate ? '#fff' : dynamicTextColor,
                    boxShadow: currentSpeechRate === rate ? '0 2px 5px rgba(13,110,253,0.3)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* حاوية الأسئلة مع مسافة 30 بكسل بين العناصر */}
        <div id="questions-container" className="d-flex flex-column" style={{ gap: '30px' }}>
          {questionsData.map((q) => {
            const isOpen = !!openAnswers[q.id];
            return (
              <div
                key={q.id}
                style={{
                  position: 'relative',
                  paddingTop: '15px'
                }}
              >
                <div style={{
                  border: itemBorder,
                  borderRadius: '30px 6px 30px 6px',
                  padding: '20px 15px 15px 15px',
                  position: 'relative',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}>

                  {/* رقم السؤال في يمين البوردر من الأعلى */}
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '25px',
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: '30px 6px 30px 6px',
                    padding: '2px 12px',
                    fontSize: '0.75rem',
                    zIndex: 3
                  }}>
                    السؤال رقم {q.id}
                  </div>

                  {/* السؤال الرئيسي ونطقه بالصوت */}
                  <div className="p-1">
                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 15px',
                        borderRadius: '30px 6px 30px 6px',
                        cursor: 'pointer',
                        direction: 'ltr',
                        gap: '15px',
                        backgroundColor: 'transparent',
                        border: itemBorder,
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => speakText(q.de)}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, minWidth: 0 }}>
                        <span style={{ textAlign: 'left', fontFamily: 'Readex Pro, sans-serif', fontWeight: 700, color: '#0d6efd', fontSize: '0.9rem', wordBreak: 'break-word', width: '100%' }}>
                          {q.de}
                        </span>
                      </div>

                      {/* السماعة العلوية في المنتصف تماماً على البوردر */}
                      <i className="fas fa-volume-up" style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        border: itemBorder,
                        borderRadius: '50%',
                        width: '26px',
                        height: '26px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        zIndex: 5,
                        backgroundColor: isDarkMode ? '#212529' : '#ffffff',
                        color: dynamicTextColor
                      }}></i>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flex: 1, minWidth: 0 }}>
                        <span style={{ textAlign: 'right', fontWeight: 600, color: dynamicTextColor, fontSize: '0.9rem', wordBreak: 'break-word', width: '100%', direction: 'rtl', textShadow: dynamicTextShadow }}>
                          {q.ar}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* زر عرض/إخفاء الإجابات (أخضر للعرض، أحمر للإخفاء) مع مسافة آمنة وعدد الإجابات بدون خلفية */}
                  <div className="px-1" style={{ marginTop: '16px', marginBottom: '8px' }}>
                    <button
                      type="button"
                      onClick={() => toggleAnswers(q.id)}
                      style={{
                        width: '100%',
                        padding: '10px 18px',
                        borderRadius: '30px 6px 30px 6px',
                        border: isOpen ? '1px solid #dc3545' : '1px solid #198754',
                        background: isOpen
                          ? (isDarkMode ? 'rgba(220, 53, 69, 0.2)' : 'rgba(220, 53, 69, 0.1)')
                          : (isDarkMode ? 'rgba(25, 135, 84, 0.2)' : 'rgba(25, 135, 84, 0.1)'),
                        color: isOpen ? '#dc3545' : '#198754',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.25s ease-in-out'
                      }}
                    >
                      <span className="d-flex align-items-center gap-2">
                        <i className={`fas ${isOpen ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        {isOpen ? 'إخفاء الإجابات' : 'عرض الإجابات المتاحة'}
                      </span>
                      {/* عرض عدد الإجابات بدون أي خلفية */}
                      <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: isOpen ? '#dc3545' : '#198754' }}>
                        {q.answers.length} إجابات
                      </span>
                    </button>
                  </div>

                  {/* قائمة الإجابات مع مسافة بسيطة (12 بكسل) بين كل إجابة وأخرى */}
                  {isOpen && (
                    <div style={{ padding: '5px 5px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {q.answers.map((ans, idx) => (
                        <div
                          key={idx}
                          style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px 12px',
                            borderRadius: '30px 6px 30px 6px',
                            cursor: 'pointer',
                            direction: 'ltr',
                            gap: '15px',
                            border: itemBorder,
                            backgroundColor: 'transparent',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            speakText(ans.de);
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, minWidth: 0 }}>
                            <span style={{ textAlign: 'left', fontFamily: 'Readex Pro, sans-serif', fontWeight: 600, color: '#e83e8c', fontSize: '0.85rem', wordBreak: 'break-word', width: '100%' }}>
                              {ans.de}
                            </span>
                          </div>

                          {/* سماعة الإجابة في المنتصف تماماً على البوردر */}
                          <i className="fas fa-volume-up" style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            border: itemBorder,
                            borderRadius: '50%',
                            width: '26px',
                            height: '26px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            zIndex: 5,
                            backgroundColor: isDarkMode ? '#212529' : '#ffffff',
                            color: dynamicTextColor
                          }}></i>

                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flex: 1, minWidth: 0 }}>
                            <span style={{ textAlign: 'right', color: dynamicTextColor, fontSize: '0.85rem', fontWeight: 500, wordBreak: 'break-word', width: '100%', direction: 'rtl', textShadow: dynamicTextShadow }}>
                              {ans.ar}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}