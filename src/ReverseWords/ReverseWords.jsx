import React, { useState } from 'react';

const allAdjectivesData = [
  // --- مستوى A1 ---
  { id: 1, german1: "gut", arabic1: "جيد", german2: "schlecht", arabic2: "سيئ", level: "A1" },
  { id: 2, german1: "groß", arabic1: "كبير", german2: "klein", arabic2: "صغير", level: "A1" },
  { id: 3, german1: "neu", arabic1: "جديد", german2: "alt", arabic2: "قديم", level: "A1" },
  { id: 4, german1: "jung", arabic1: "شاب", german2: "alt", arabic2: "عجوز / مسن", level: "A1" },
  { id: 5, german1: "lang", arabic1: "طويل", german2: "kurz", arabic2: "قصير", level: "A1" },
  { id: 6, german1: "hoch", arabic1: "مرتفع", german2: "niedrig", arabic2: "منخفض", level: "A1" },
  { id: 7, german1: "dick", arabic1: "سمين / بدين", german2: "dünn", arabic2: "رفيع / نحيف", level: "A1" },
  { id: 8, german1: "breit", arabic1: "عريض", german2: "schmal", arabic2: "ضيق", level: "A1" },
  { id: 9, german1: "schwer", arabic1: "ثقيل", german2: "leicht", arabic2: "خفيف", level: "A1" },
  { id: 10, german1: "schwer", arabic1: "صعب", german2: "einfach", arabic2: "سهل", level: "A1" },
  { id: 11, german1: "schnell", arabic1: "سريع", german2: "langsam", arabic2: "بطيء", level: "A1" },
  { id: 12, german1: "stark", arabic1: "قوي", german2: "schwach", arabic2: "ضعيف", level: "A1" },
  { id: 13, german1: "reich", arabic1: "غني", german2: "arm", arabic2: "فقير", level: "A1" },
  { id: 14, german1: "teuer", arabic1: "غالي", german2: "billig", arabic2: "رخيص", level: "A1" },
  { id: 15, german1: "schön", arabic1: "جميل", german2: "hässlich", arabic2: "قبيح", level: "A1" },
  { id: 16, german1: "sauber", arabic1: "نظيف", german2: "schmutzig", arabic2: "متسخ", level: "A1" },
  { id: 17, german1: "kühl", arabic1: "بارد قليلاً", german2: "warm", arabic2: "دافئ", level: "A1" },
  { id: 18, german1: "heiß", arabic1: "ساخن", german2: "kalt", arabic2: "بارد", level: "A1" },
  { id: 19, german1: "süß", arabic1: "حلو", german2: "sauer", arabic2: "حامض", level: "A1" },
  { id: 20, german1: "salzig", arabic1: "مالح", german2: "bitter", arabic2: "مر", level: "A1" },
  { id: 21, german1: "scharf", arabic1: "حار / حاد", german2: "mild", arabic2: "خفيف / غير حار", level: "A1" },
  { id: 22, german1: "hart", arabic1: "صلب / قاسي", german2: "weich", arabic2: "ناعم / لين", level: "A1" },
  { id: 23, german1: "voll", arabic1: "ممتلئ", german2: "leer", arabic2: "فارغ", level: "A1" },
  { id: 24, german1: "offen", arabic1: "مفتوح", german2: "geschlossen", arabic2: "مغلق", level: "A1" },
  { id: 25, german1: "richtig", arabic1: "صحيح", german2: "falsch", arabic2: "خاطئ", level: "A1" },
  { id: 26, german1: "ruhig", arabic1: "هادئ", german2: "laut", arabic2: "صاخِب", level: "A1" },
  { id: 27, german1: "leise", arabic1: "منخفض الصوت", german2: "lautstark", arabic2: "مرتفع الصوت جداً", level: "A1" },
  { id: 28, german1: "hell", arabic1: "مضيء / فاتح", german2: "dunkel", arabic2: "مظلم / داكن", level: "A1" },
  { id: 29, german1: "glücklich", arabic1: "سعيد", german2: "traurig", arabic2: "حزين", level: "A1" },
  { id: 30, german1: "müde", arabic1: "متعب", german2: "wach", arabic2: "مستيقظ", level: "A1" },
  { id: 31, german1: "hungrig", arabic1: "جائع", german2: "durstig", arabic2: "عطشان", level: "A1" },
  { id: 32, german1: "krank", arabic1: "مريض", german2: "gesund", arabic2: "سليم / صحي", level: "A1" },
  { id: 33, german1: "freundlich", arabic1: "ودود", german2: "unfreundlich", arabic2: "غير ودود", level: "A1" },
  { id: 34, german1: "sonnig", arabic1: "مشمس", german2: "regnerisch", arabic2: "ممطر", level: "A1" },
  { id: 35, german1: "windig", arabic1: "عاصف", german2: "windstill", arabic2: "ساكن الرياح", level: "A1" },
  { id: 36, german1: "nass", arabic1: "مبتل", german2: "trocken", arabic2: "جاف", level: "A1" },
  { id: 37, german1: "nah", arabic1: "قريب", german2: "weit", arabic2: "بعيد", level: "A1" },
  { id: 38, german1: "Anfang", arabic1: "البداية", german2: "Ende", arabic2: "النهاية", level: "A1" },
  { id: 39, german1: "immer", arabic1: "دائمًا", german2: "nie", arabic2: "أبدًا", level: "A1" },
  { id: 40, german1: "alle", arabic1: "الجميع", german2: "niemand", arabic2: "لا أحد", level: "A1" },
  { id: 41, german1: "alles", arabic1: "كل شيء", german2: "nichts", arabic2: "لا شيء", level: "A1" },
  { id: 42, german1: "früh", arabic1: "مبكرًا", german2: "spät", arabic2: "متأخرًا", level: "A1" },
  { id: 43, german1: "gebraucht", arabic1: "مستعمل", german2: "fabrikneu", arabic2: "جديد تماماً", level: "A1" },
  { id: 44, german1: "Tag", arabic1: "نهار", german2: "Nacht", arabic2: "ليل", level: "A1" },
  { id: 45, german1: "Mann", arabic1: "رجل", german2: "Frau", arabic2: "امرأة", level: "A1" },
  { id: 46, german1: "Junge", arabic1: "ولد", german2: "Mädchen", arabic2: "بنت", level: "A1" },
  { id: 47, german1: "Leben", arabic1: "حياة", german2: "Tod", arabic2: "موت", level: "A1" },
  { id: 48, german1: "kaufen", arabic1: "يشتري", german2: "verkaufen", arabic2: "يبيع", level: "A1" },
  { id: 49, german1: "lachen", arabic1: "يضحك", german2: "weinen", arabic2: "يبكي", level: "A1" },
  { id: 50, german1: "kommen", arabic1: "يأتي", german2: "gehen", arabic2: "يذهب", level: "A1" },
  { id: 51, german1: "geben", arabic1: "يعطي", german2: "nehmen", arabic2: "يأخذ", level: "A1" },
  { id: 52, german1: "fragen", arabic1: "يسأل", german2: "antworten", arabic2: "يجيب", level: "A1" },
  { id: 53, german1: "öffnen", arabic1: "يفتح", german2: "schließen", arabic2: "يغلق", level: "A1" },
  { id: 54, german1: "stehen", arabic1: "يقف", german2: "sitzen", arabic2: "يجلس", level: "A1" },
  { id: 55, german1: "schlafen", arabic1: "ينام", german2: "aufwachen", arabic2: "يستيقظ", level: "A1" },
  { id: 56, german1: "leben", arabic1: "يعيش", german2: "sterben", arabic2: "يموت", level: "A1" },
  { id: 57, german1: "finden", arabic1: "يجد", german2: "verlieren", arabic2: "يفقد / يخسر", level: "A1" },
  { id: 58, german1: "gewinnen", arabic1: "يفوز / يربح", german2: "verlieren", arabic2: "يخسر", level: "A1" },
  { id: 59, german1: "lieben", arabic1: "يحب", german2: "hassen", arabic2: "يكره", level: "A1" },
  { id: 60, german1: "anfangen", arabic1: "يبدأ", german2: "aufhören", arabic2: "يتوقف / ينتهي", level: "A1" },
  { id: 61, german1: "steigen", arabic1: "يصعد / يرتفع", german2: "sinken", arabic2: "ينخفض / ينزل", level: "A1" },
  { id: 62, german1: "bringen", arabic1: "يجلب / يحضر", german2: "holen", arabic2: "يجلب / يستحضر", level: "A1" },
  { id: 63, german1: "suchen", arabic1: "يبحث", german2: "finden", arabic2: "يجد", level: "A1" },
  { id: 64, german1: "schreiben", arabic1: "يكتب", german2: "lesen", arabic2: "يقرأ", level: "A1" },
  { id: 65, german1: "schalten", arabic1: "يشغّل (جهاز)", german2: "ausschalten", arabic2: "يطفئ (جهاز)", level: "A1" },
  { id: 66, german1: "helfen", arabic1: "يساعد", german2: "hindern", arabic2: "يعيق / يمنع", level: "A1" },
  { id: 67, german1: "treffen", arabic1: "يقابل", german2: "verlassen", arabic2: "يهجر / يغادر", level: "A1" },
  { id: 68, german1: "schicken", arabic1: "يرسل", german2: "empfangen", arabic2: "يستقبل / يتلقى", level: "A1" },
  { id: 69, german1: "sagen", arabic1: "يقول", german2: "schweigen", arabic2: "يصمت", level: "A1" },
  { id: 70, german1: "singen", arabic1: "يغني", german2: "zuhören", arabic2: "ينصت / يستمع", level: "A1" },
  { id: 71, german1: "treten", arabic1: "يخطو / يدخل", german2: "zurücktreten", arabic2: "يتراجع / يستقيل", level: "A1" },
  { id: 72, german1: "treiben", arabic1: "يمارس (رياضة)", german2: "ruhen", arabic2: "يستريح", level: "A1" },
  { id: 73, german1: "glauben", arabic1: "يعتقد / يصدق", german2: "zweifeln", arabic2: "يشك", level: "A1" },
  { id: 74, german1: "hoffen", arabic1: "يأمل", german2: "befürchten", arabic2: "يخشى / يخاف", level: "A1" },
  { id: 75, german1: "essen", arabic1: "يأكل", german2: "fasten", arabic2: "يصوم", level: "A1" },
  { id: 76, german1: "trinken", arabic1: "يشرب", german2: "dürsten", arabic2: "يعطش", level: "A1" },
  { id: 77, german1: "kommen", arabic1: "يصل", german2: "abfahren", arabic2: "يغادر / ينطلق", level: "A1" },
  { id: 78, german1: "Sonne", arabic1: "شمس", german2: "Mond", arabic2: "قمر", level: "A1" },
  { id: 79, german1: "Sommer", arabic1: "صيف", german2: "Winter", arabic2: "شتاء", level: "A1" },
  { id: 80, german1: "Katze", arabic1: "قطة", german2: "Hund", arabic2: "كلب", level: "A1" },
  { id: 81, german1: "Auto", arabic1: "سيارة", german2: "Fahrrad", arabic2: "دراجة", level: "A1" },
  { id: 82, german1: "Wasser", arabic1: "ماء", german2: "Feuer", arabic2: "نار", level: "A1" },
  { id: 83, german1: "Haus", arabic1: "منزل", german2: "Straße", arabic2: "شارع", level: "A1" },
  { id: 84, german1: "Nord", arabic1: "شمال", german2: "Süd", arabic2: "جنوب", level: "A1" },
  { id: 85, german1: "Ost", arabic1: "شرق", german2: "West", arabic2: "غرب", level: "A1" },
  { id: 86, german1: "arbeiten", arabic1: "يعمل", german2: "ausruhen", arabic2: "يستريح / يأخذ قسطاً من الراحة", level: "A1" },
  { id: 87, german1: "oben", arabic1: "في الأعلى", german2: "unten", arabic2: "في الأسفل", level: "A1" },
  { id: 88, german1: "vorn", arabic1: "في الأمام", german2: "hinten", arabic2: "في الخلف", level: "A1" },
  { id: 89, german1: "links", arabic1: "يسارًا", german2: "rechts", arabic2: "يمينًا", level: "A1" },
  { id: 90, german1: "hier", arabic1: "هنا", german2: "da / dort", arabic2: "هناك", level: "A1" },
  { id: 91, german1: "Freund", arabic1: "صديق", german2: "Feind", arabic2: "عدو", level: "A1" },
  { id: 92, german1: "Himmel", arabic1: "سماء", german2: "Erde", arabic2: "أرض", level: "A1" },
  { id: 93, german1: "Morgen", arabic1: "صباح", german2: "Abend", arabic2: "مساء", level: "A1" },
  { id: 94, german1: "Licht", arabic1: "ضوء", german2: "Schatten", arabic2: "ظل", level: "A1" },
  { id: 95, german1: "minus", arabic1: "ناقص / سالب", german2: "plus", arabic2: "زائد / موجب", level: "A1" },
  { id: 96, german1: "gestern", arabic1: "أمس", german2: "morgen", arabic2: "غدًا", level: "A1" },
  { id: 97, german1: "gesund", arabic1: "صحي", german2: "ungesund", arabic2: "غير صحي", level: "A1" },

  // --- مستوى A2 ---
  { id: 98, german1: "einfach", arabic1: "بسيط", german2: "kompliziert", arabic2: "معقد", level: "A2" },
  { id: 99, german1: "wichtig", arabic1: "مهم", german2: "unwichtig", arabic2: "غير مهم", level: "A2" },
  { id: 100, german1: "nötig", arabic1: "ضروري", german2: "unnötig", arabic2: "غير ضروري", level: "A2" },
  { id: 101, german1: "möglich", arabic1: "ممكن", german2: "unmöglich", arabic2: "مستحيل", level: "A2" },
  { id: 102, german1: "sicher", arabic1: "آمن", german2: "gefährlich", arabic2: "خطر", level: "A2" },
  { id: 103, german1: "sicher", arabic1: "متأكد / آكيد", german2: "unsicher", arabic2: "غير متأكد / متردد", level: "A2" },
  { id: 104, german1: "klug", arabic1: "ذكي", german2: "dumm", arabic2: "غبي", level: "A2" },
  { id: 105, german1: "ehrlich", arabic1: "صادق", german2: "unehrlich", arabic2: "غير صادق", level: "A2" },
  { id: 106, german1: "höflich", arabic1: "مهذب", german2: "unhöflich", arabic2: "وقح", level: "A2" },
  { id: 107, german1: "ängstlich", arabic1: "خائف / قلق", german2: "mutig", arabic2: "شجاع", level: "A2" },
  { id: 108, german1: "frech", arabic1: "وقح / متمرد", german2: "nett", arabic2: "لطيف", level: "A2" },
  { id: 109, german1: "gemein", arabic1: "خبيث / لئيم", german2: "lieb", arabic2: "طيب / ودود", level: "A2" },
  { id: 110, german1: "spannend", arabic1: "مثير / مشوق", german2: "langweilig", arabic2: "ممل", level: "A2" },
  { id: 111, german1: "gemütlich", arabic1: "مريح / دافئ", german2: "ungemütlich", arabic2: "غير مريح", level: "A2" },
  { id: 112, german1: "bekannt", arabic1: "معروف / مشهور", german2: "unbekannt", arabic2: "مجهول", level: "A2" },
  { id: 113, german1: "pünktlich", arabic1: "دقيق المواعيد", german2: "unpünktlich", arabic2: "متأخر / غير ملتزم", level: "A2" },
  { id: 114, german1: "zufrieden", arabic1: "راضٍ", german2: "unzufrieden", arabic2: "متذمر / غير راضٍ", level: "A2" },
  { id: 115, german1: "aktiv", arabic1: "نشيط", german2: "passiv", arabic2: "خامل / سلبي", level: "A2" },
  { id: 116, german1: "modern", arabic1: "حديث", german2: "altmodisch", arabic2: "عتيق / قديم الطراز", level: "A2" },
  { id: 117, german1: "flach", arabic1: "سطحي / مسطح", german2: "tief", arabic2: "عميق", level: "A2" },
  { id: 118, german1: "ernst", arabic1: "جاد", german2: "lustig", arabic2: "مرح / مضحك", level: "A2" },
  { id: 119, german1: "komisch", arabic1: "غريب", german2: "normal", arabic2: "طبيعي", level: "A2" },
  { id: 120, german1: "verrückt", arabic1: "مجنون", german2: "vernünftig", arabic2: "عاقل", level: "A2" },
  { id: 121, german1: "nervös", arabic1: "متوتر / عصبي", german2: "gelassen", arabic2: "هادئ / هادئ الأعصاب", level: "A2" },
  { id: 122, german1: "ordentlich", arabic1: "مرتب / أنيق", german2: "unordentlich", arabic2: "فوضوي / مهمل", level: "A2" },
  { id: 123, german1: "vorsichtig", arabic1: "حذر / محترس", german2: "unvorsichtig", arabic2: "طائش / مهمل", level: "A2" },
  { id: 124, german1: "saftig", arabic1: "طري / ملئ بالماء", german2: "trocken", arabic2: "جاف / ناشف", level: "A2" },
  { id: 125, german1: "stumpf", arabic1: "غير حاد / ثلم", german2: "scharf", arabic2: "حاد", level: "A2" },
  { id: 126, german1: "eng", arabic1: "ضيق جداً", german2: "weit", arabic2: "واسع / فسيح", level: "A2" },
  { id: 127, german1: "verspätet", arabic1: "متأخر جداً", german2: "rechtzeitig", arabic2: "في الوقت المناسب", level: "A2" },
  { id: 128, german1: "lebendig", arabic1: "حي / مفعم بالحياة", german2: "tot", arabic2: "ميت", level: "A2" },
  { id: 129, german1: "spitz", arabic1: "مدبب", german2: "stumpf", arabic2: "غير مدبب", level: "A2" },
  { id: 130, german1: "glatt", arabic1: "أملس / ناعم", german2: "rauh", arabic2: "خشن", level: "A2" },
  { id: 131, german1: "fröhlich", arabic1: "مبتهج / مرح", german2: "traurig", arabic2: "حزين / كئيب", level: "A2" },
  { id: 132, german1: "innen", arabic1: "داخلي", german2: "außen", arabic2: "خارجي", level: "A2" },
  { id: 133, german1: "ungeduldig", arabic1: "نفاد الصبر / عجول", german2: "geduldig", arabic2: "صبور", level: "A2" },
  { id: 134, german1: "Eingang", arabic1: "المدخل", german2: "Ausgang", arabic2: "المخرج", level: "A2" },
  { id: 135, german1: "Kauf", arabic1: "الشراء", german2: "Verkauf", arabic2: "البيع", level: "A2" },
  { id: 136, german1: "Zukunft", arabic1: "المستقبل", german2: "Vergangenheit", arabic2: "الماضي", level: "A2" },
  { id: 137, german1: "Liebe", arabic1: "الحب", german2: "Hass", arabic2: "الكره / الكراهية", level: "A2" },
  { id: 138, german1: "vorher", arabic1: "قبل ذلك", german2: "nachher", arabic2: "بعد ذلك", level: "A2" },
  { id: 139, german1: "wahr", arabic1: "حقيقي", german2: "unwahr", arabic2: "كاذب", level: "A2" },
  { id: 140, german1: "satt", arabic1: "شبعان", german2: "hungrig", arabic2: "جائع", level: "A2" },
  { id: 141, german1: "bequem", arabic1: "مريح", german2: "unbequem", arabic2: "غير مريح", level: "A2" },
  { id: 142, german1: "beliebt", arabic1: "محبوب", german2: "unbeliebt", arabic2: "غير محبوب", level: "A2" },
  { id: 143, german1: "feindselig", arabic1: "عدائي", german2: "friedlich", arabic2: "سلمي / أليف", level: "A2" },
  { id: 144, german1: "anziehen", arabic1: "يرتدي", german2: "ausziehen", arabic2: "يخلع", level: "A2" },
  { id: 145, german1: "einsteigen", arabic1: "يركب (وسيلة)", german2: "aussteigen", arabic2: "ينزل (من وسيلة)", level: "A2" },
  { id: 146, german1: "einladen", arabic1: "يدعو", german2: "ausladen", arabic2: "يفرغ", level: "A2" },
  { id: 147, german1: "erlauben", arabic1: "يسمح", german2: "verbieten", arabic2: "يمنع / يحظر", level: "A2" },
  { id: 148, german1: "loben", arabic1: "يمدح", german2: "tadeln", arabic2: "يوبخ", level: "A2" },
  { id: 149, german1: "bitten", arabic1: "يرجو / يطلب", german2: "danken", arabic2: "يشكر", level: "A2" },
  { id: 150, german1: "leihen", arabic1: "يقرض / يستعير", german2: "zurückgeben", arabic2: "يعيد / يرجع", level: "A2" },
  { id: 151, german1: "bauen", arabic1: "يبني", german2: "zerstören", arabic2: "يدمر", level: "A2" },
  { id: 152, german1: "erinnern", arabic1: "يتذكر", german2: "vergessen", arabic2: "ينسى", level: "A2" },
  { id: 153, german1: "sparen", arabic1: "يدخر / يوفر", german2: "ausgeben", arabic2: "ينفق / يصرف", level: "A2" },
  { id: 154, german1: "wärmen", arabic1: "يسخن / يدفئ", german2: "kühlen", arabic2: "يبرد", level: "A2" },
  { id: 155, german1: "verbergen", arabic1: "يخفي", german2: "zeigen", arabic2: "يظهر / يعرض", level: "A2" },
  { id: 156, german1: "verbinden", arabic1: "يربط / يوصل", german2: "trennen", arabic2: "يفصل", level: "A2" },
  { id: 157, german1: "akzeptieren", arabic1: "يقبل", german2: "ablehnen", arabic2: "يرفض", level: "A2" },
  { id: 158, german1: "vergrößern", arabic1: "يكبر / يوسع", german2: "verkleinern", arabic2: "يصغر / يقلص", level: "A2" },
  { id: 159, german1: "beschleunigen", arabic1: "يسرع", german2: "abbremsen", arabic2: "يبطئ", level: "A2" },
  { id: 160, german1: "männlich", arabic1: "ذكوري", german2: "weiblich", arabic2: "أنثوي", level: "A2" },
  { id: 161, german1: "Fleiß", arabic1: "اجتهاد", german2: "Faulheit", arabic2: "كسل", level: "A2" },
  { id: 162, german1: "einschlafen", arabic1: "يستغرق في النوم", german2: "aufwachen", arabic2: "يستيقظ", level: "A2" },
  { id: 163, german1: "begrüßen", arabic1: "يررحب بـ", german2: "verabschieden", arabic2: "يودع", level: "A2" },
  { id: 164, german1: "anmachen", arabic1: "يشعل / يضيء", german2: "ausmachen", arabic2: "يطفئ", level: "A2" },
  { id: 165, german1: "fallen", arabic1: "يسقط / يهبط", german2: "steigen", arabic2: "يصعد / يرتفع", level: "A2" },
  { id: 166, german1: "Sommerzeit", arabic1: "التوقيت الصيفي", german2: "Winterzeit", arabic2: "التوقيت الشتوي", level: "A2" },
  { id: 167, german1: "sicherstellen", arabic1: "يضمن / يؤمن", german2: "gefährden", arabic2: "يعرض للخطر", level: "A2" },
  { id: 168, german1: "Anstieg", arabic1: "ارتفاع / صعود", german2: "Rückgang", arabic2: "انخفاض / تراجع", level: "A2" },
  { id: 169, german1: "Vorteil", arabic1: "ميزة", german2: "Nachteil", arabic2: "عذر / عيب", level: "A2" },

  // --- مستوى B1 ---
  { id: 170, german1: "fleißig", arabic1: "مجتهد / مثابر", german2: "faul", arabic2: "كسول", level: "B1" },
  { id: 171, german1: "optimistisch", arabic1: "متفائل", german2: "pessimistisch", arabic2: "متشائم", level: "B1" },
  { id: 172, german1: "großzügig", arabic1: "كريـم / سخي", german2: "geizig", arabic2: "بخيل", level: "B1" },
  { id: 173, german1: "neugierig", arabic1: "فضولي / مهتم", german2: "desinteressiert", arabic2: "غير مهتم", level: "B1" },
  { id: 174, german1: "bescheiden", arabic1: "متواضع", german2: "eingebildet", arabic2: "مغرور / متكبر", level: "B1" },
  { id: 175, german1: "aufmerksam", arabic1: "منتبه", german2: "unaufmerksam", arabic2: "غير منتبه", level: "B1" },
  { id: 176, german1: "selbstbewusst", arabic1: "واثق من نفسه", german2: "schüchtern", arabic2: "خجول", level: "B1" },
  { id: 177, german1: "hilfsbereit", arabic1: "خدوم", german2: "egoistisch", arabic2: "أناني", level: "B1" },
  { id: 178, german1: "starr", arabic1: "صلب / متيبس", german2: "elastisch", arabic2: "مرن / مطاطي", level: "B1" },
  { id: 179, german1: "fruchtbar", arabic1: "خصب", german2: "unfruchtbar", arabic2: "عقيم", level: "B1" },
  { id: 180, german1: "träge", arabic1: "خمول / كسول", german2: "schwungvoll", arabic2: "حيوي / نشيط", level: "B1" },
  { id: 181, german1: "gestresst", arabic1: "متوتر / مضغوط", german2: "entspannt", arabic2: "مسترخٍ / مرتاح", level: "B1" },
  { id: 182, german1: "überrascht", arabic1: "مندهش / متفاجئ", german2: "enttäuscht", arabic2: "خائب الأمل", level: "B1" },
  { id: 183, german1: "feige", arabic1: "جبان", german2: "mutig", arabic2: "جريء / شجاع", level: "B1" },
  { id: 184, german1: "einheimisch", arabic1: "محلي / من أهل البلد", german2: "ausländisch", arabic2: "أجنبي / خارجي", level: "B1" },
  { id: 185, german1: "öffentlich", arabic1: "عام / علني", german2: "privat", arabic2: "خاص / سري", level: "B1" },
  { id: 186, german1: "nachlässig", arabic1: "مهمل / غير مبالٍ", german2: "sorgfältig", arabic2: "حريص / دقيق", level: "B1" },
  { id: 187, german1: "sichtbar", arabic1: "مرئي / ظاهر", german2: "unsichtbar", arabic2: "خفي / غير مرئي", level: "B1" },
  { id: 188, german1: "echt", arabic1: "حقيقي / أصلي", german2: "künstlich", arabic2: "مزيّف / اصطناعي", level: "B1" },
  { id: 189, german1: "gerecht", arabic1: "عادل", german2: "ungerecht", arabic2: "ظالم / غير عادل", level: "B1" },
  { id: 190, german1: "überraschend", arabic1: "مفاجئ", german2: "erwartet", arabic2: "متوقع", level: "B1" },
  { id: 191, german1: "angenehm", arabic1: "سار / ممتع", german2: "unangenehm", arabic2: "غير سار / مزعج", level: "B1" },
  { id: 192, german1: "Sieg", arabic1: "النصر / الفوز", german2: "Niederlage", arabic2: "الهزيمة", level: "B1" },
  { id: 193, german1: "Frieden", arabic1: "السلام", german2: "Krieg", arabic2: "الحرب", level: "B1" },
  { id: 194, german1: "Erfolg", arabic1: "النجاح", german2: "Misserfolg", arabic2: "الفشل", level: "B1" },
  { id: 195, german1: "Wahrheit", arabic1: "الحقيقة", german2: "Lüge", arabic2: "الكذب", level: "B1" },
  { id: 196, german1: "überall", arabic1: "في كل مكان", german2: "nirgends", arabic2: "لا في أي مكان", level: "B1" },
  { id: 197, german1: "abhängig", arabic1: "تابع", german2: "unabhängig", arabic2: "مستقل", level: "B1" },
  { id: 198, german1: "legal", arabic1: "قانوني", german2: "illegal", arabic2: "غير قانوني", level: "B1" },
  { id: 199, german1: "logisch", arabic1: "منطقي", german2: "unlogisch", arabic2: "غير منطقي", level: "B1" },
  { id: 200, german1: "mobil", arabic1: "متنقل", german2: "immobil", arabic2: "ثابت", level: "B1" },
  { id: 201, german1: "perfekt", arabic1: "مثالي", german2: "unvollkommen", arabic2: "ناقص", level: "B1" },
  { id: 202, german1: "fremd", arabic1: "غريب", german2: "vertraut", arabic2: "مألوف / قريب", level: "B1" },
  { id: 203, german1: "erfolgreich", arabic1: "ناجح", german2: "erfolglos", arabic2: "فاشل", level: "B1" },
  { id: 204, german1: "sinnvoll", arabic1: "مفيد / ذو معنى", german2: "sinnlos", arabic2: "عديم الفائدة", level: "B1" },
  { id: 205, german1: "kreativ", arabic1: "إبداعي", german2: "unkreativ", arabic2: "غير إبداعي", level: "B1" },
  { id: 206, german1: "flexibel", arabic1: "مرن", german2: "inflexibel", arabic2: "غير مرن", level: "B1" },
  { id: 207, german1: "sparsam", arabic1: "مقتصد / موفر", german2: "verschwenderisch", arabic2: "مسرف / مبذر", level: "B1" },
  { id: 208, german1: "gelingen", arabic1: "ينجح", german2: "misslingen", arabic2: "يفشل", level: "B1" },
  { id: 209, german1: "zusagen", arabic1: "يقبل / يوافق", german2: "absagen", arabic2: "يلغي / يرفض", level: "B1" },
  { id: 210, german1: "ansteigen", arabic1: "يرتفع", german2: "sinken", arabic2: "ينخفض", level: "B1" },
  { id: 211, german1: "vermehren", arabic1: "يزيد / يضاعف", german2: "verringern", arabic2: "يقلل / ينقص", level: "B1" },
  { id: 212, german1: "aufbauen", arabic1: "يبني / ينشئ", german2: "abbauen", arabic2: "يفكك / يزيل", level: "B1" },
  { id: 213, german1: "fortsetzen", arabic1: "يستأنف / يكمل", german2: "unterbrechen", arabic2: "يقاطع / يوقف", level: "B1" },
  { id: 214, german1: "beschützen", arabic1: "يحمي", german2: "angreifen", arabic2: "يهاجم", level: "B1" },
  { id: 215, german1: "verteidigen", arabic1: "يدفع / يدافع", german2: "angreifen", arabic2: "يشن هجوماً", level: "B1" },
  { id: 216, german1: "Fortschritt", arabic1: "تقدم", german2: "Rückschritt", arabic2: "تراجع", level: "B1" },
  { id: 217, german1: "Zustimmung", arabic1: "موافقة", german2: "Ablehnung", arabic2: "معارضة / رفض", level: "B1" },

  // --- مستوى B2 ---
  { id: 218, german1: "gerissen", arabic1: "مكار / داهية", german2: "naiv", arabic2: "ساذج / بسيط", level: "B2" },
  { id: 219, german1: "unverschämt", arabic1: "قليل الحياء / وقح", german2: "anständig", arabic2: "محترم / خلوق", level: "B2" },
  { id: 220, german1: "temporär", arabic1: "مؤقت", german2: "dauerhaft", arabic2: "دائم / مستمر", level: "B2" },
  { id: 221, german1: "überzeugt", arabic1: "مقتنع / جازم", german2: "zweifelhaft", arabic2: "متردد / مشكوك فيه", level: "B2" },
  { id: 222, german1: "menschlich", arabic1: "إنساني", german2: "unmenschlich", arabic2: "لا إنساني / قاسي", level: "B2" },
  { id: 223, german1: "kompetent", arabic1: "كفء / مؤهل", german2: "inkompetent", arabic2: "غير كفء", level: "B2" },
  { id: 224, german1: "überflüssig", arabic1: "زائد عن الحاجة", german2: "unentbehrlich", arabic2: "لا غنى عنه", level: "B2" },
  { id: 225, german1: "nachhaltig", arabic1: "مستدام", german2: "kurzfristig", arabic2: "قصير المدى", level: "B2" },
  { id: 226, german1: "Sicherheit", arabic1: "أمان", german2: "Unsicherheit", arabic2: "شك / عدم أمان", level: "B2" },
  { id: 227, german1: "Freiheit", arabic1: "حرية", german2: "Gefangenschaft", arabic2: "أسر", level: "B2" },
  { id: 228, german1: "Hoffnung", arabic1: "أمل", german2: "Verzweiflung", arabic2: "يأس", level: "B2" },
  { id: 229, german1: "Optimismus", arabic1: "تفاؤل", german2: "Pessimismus", arabic2: "تشاؤم", level: "B2" },
  { id: 230, german1: "Verteidigung", arabic1: "دفاع", german2: "Angriff", arabic2: "هجوم", level: "B2" },
  { id: 231, german1: "Gerechtigkeit", arabic1: "عدالة", german2: "Ungerechtigkeit", arabic2: "ظلم", level: "B2" },
  { id: 232, german1: "Gewinn", arabic1: "ربح", german2: "Verlust", arabic2: "خسارة", level: "B2" },
  { id: 233, german1: "Anwesenheit", arabic1: "حضور", german2: "Abwesenheit", arabic2: "غياب", level: "B2" },
  { id: 234, german1: "global", arabic1: "عالمي", german2: "lokal", arabic2: "محلي", level: "B2" },
  { id: 235, german1: "komplex", arabic1: "معقد / مركب", german2: "simpel", arabic2: "بسيط", level: "B2" },
  { id: 236, german1: "präzise", arabic1: "دقيق", german2: "ungenau", arabic2: "غير دقيق", level: "B2" },
  { id: 237, german1: "kontrovers", arabic1: "مثير للجدل", german2: "einstimmig", arabic2: "إجماعي / متفق عليه", level: "B2" },
  { id: 238, german1: "Rational", arabic1: "عقلاني", german2: "Emotional", arabic2: "عاطفي", level: "B2" },
  { id: 239, german1: "oberflächlich", arabic1: "سطحي", german2: "gründlich", arabic2: "عميق / متعمق", level: "B2" },
  { id: 240, german1: "Toleranz", arabic1: "تسامح", german2: "Intoleranz", arabic2: "تعصب", level: "B2" },

  // --- مستوى C1 ---
  { id: 241, german1: "obendrein", arabic1: "بالإضافة إلى ذلك", german2: "keineswegs", arabic2: "على الإطلاق", level: "C1" },
  { id: 242, german1: "Akzeptanz", arabic1: "قبول", german2: "Ablehnung", arabic2: "رفض", level: "C1" },
  { id: 243, german1: "Dauerhaft", arabic1: "دائم", german2: "Vergänglich", arabic2: "زائل", level: "C1" },
  { id: 244, german1: "Transparent", arabic1: "شفاف", german2: "Intransparent", arabic2: "غامض", level: "C1" },
  { id: 245, german1: "Subjektiv", arabic1: "ذاتي", german2: "Objektiv", arabic2: "موضوعي", level: "C1" },
  { id: 246, german1: "Fiktion", arabic1: "خيال", german2: "Realität", arabic2: "واقع", level: "C1" },
  { id: 247, german1: "Harmonie", arabic1: "انسجام", german2: "Diskrepanz", arabic2: "تناقض", level: "C1" },
  { id: 248, german1: "Beschleunigen", arabic1: "تسريع", german2: "Verzögern", arabic2: "تأخير", level: "C1" },
  { id: 249, german1: "Abstrakt", arabic1: "مجرد", german2: "Konkret", arabic2: "ملموس", level: "C1" },
  { id: 250, german1: "Konsequent", arabic1: "حازم / متسق", german2: "Inkonsequent", arabic2: "متذبذب", level: "C1" },
  { id: 251, german1: "Theoretisch", arabic1: "نظري", german2: "Praktisch", arabic2: "عملي", level: "C1" },
  { id: 252, german1: "kompakt", arabic1: "مدمج / مكثف", german2: "ausgedehnt", arabic2: "ممتد / متباعد", level: "C1" },
  { id: 253, german1: "Authentisch", arabic1: "أصلي / موثوق", german2: "Fälschung", arabic2: "مزيف", level: "C1" },
  { id: 254, german1: "fundiert", arabic1: "راسخ / موثوق", german2: "oberflächlich", arabic2: "سطحي / واهٍ", level: "C1" },
  { id: 255, german1: "Explizit", arabic1: "صريح / واضح", german2: "Implizit", arabic2: "ضمني / ضبابي", level: "C1" },

  // --- مستوى C2 ---
  { id: 256, german1: "Ephemer", arabic1: "قصير العمر", german2: "Perennierend", arabic2: "دائم المعمرة", level: "C2" },
  { id: 257, german1: "Ambivalenz", arabic1: "ازدواجية", german2: "Eindeutigkeit", arabic2: "وضوح قاطع", level: "C2" },
  { id: 258, german1: "Konformität", arabic1: "امتثال", german2: "Dissent", arabic2: "معارضة", level: "C2" },
  { id: 259, german1: "Zäsur", arabic1: "انقطاع", german2: "Kontinuum", arabic2: "استمرارية", level: "C2" },
  { id: 260, german1: "Dogmatisch", arabic1: "عقائدي", german2: "Pragmatisch", arabic2: "براغماتي", level: "C2" },
  { id: 261, german1: "Exogen", arabic1: "خارجي المنشأ", german2: "Endogen", arabic2: "داخلي المنشأ", level: "C2" },
  { id: 262, german1: "Inferenz", arabic1: "استدلال", german2: "Deduktion", arabic2: "استنتاج", level: "C2" },
  { id: 263, german1: "Transzendent", arabic1: "متعالي", german2: "Immanent", arabic2: "كامن", level: "C2" },
  { id: 264, german1: "Souverän", arabic1: "سيادي / مستقل", german2: "Abhängig", arabic2: "تابع", level: "C2" },
  { id: 265, german1: "Affirmation", arabic1: "تأكيد", german2: "Negation", arabic2: "نفي", level: "C2" }
];

export default function AllAdjectivesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('ALL');

  const speakGerman = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredData = allAdjectivesData.filter((item) => {
    const matchesLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
    const matchesSearch =
      item.german1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic1.includes(searchTerm) ||
      (item.german2 && item.german2.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.arabic2 && item.arabic2.includes(searchTerm));
    return matchesLevel && matchesSearch;
  });

  const levelsGrouped = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].reduce((acc, lvl) => {
    acc[lvl] = filteredData.filter(item => item.level === lvl);
    return acc;
  }, {});

  return (
    <div style={{ padding: '15px 15px 40px 15px', color: 'inherit', background: 'transparent' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: inherit;
        }
        .levels-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          width: 100%;
          max-width: 450px;
          margin-left: auto;
          margin-right: auto;
        }
        .all-btn-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .level-buttons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width: 100%;
        }
        .level-btn {
          width: 100%;
          padding: 8px 10px;
          border-radius: 20px;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font-size: 0.9rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          box-sizing: border-box;
        }
        .all-btn {
          max-width: 250px;
        }
        .level-btn.active, .level-btn:hover {
          background-color: #00bfff;
          color: #fff;
          border-color: #00bfff;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }
        .search-input {
          width: 100%;
          max-width: 400px;
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font-size: 0.95rem;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .stats-bar {
          text-align: center;
          font-size: 0.85rem;
          opacity: 0.8;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .level-section-title {
          width: 100%;
          max-width: 450px;
          text-align: center;
          font-size: 1.25rem;
          font-weight: bold;
          margin: 30px 0 15px 0;
          padding: 6px;
          border-bottom: 2px dashed currentColor;
          opacity: 0.9;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
          width: 100%;
          padding-top: 10px;
        }
        .vocab-card {
          position: relative;
          width: 100%;
          max-width: 450px;
          border: 2px solid currentColor;
          border-radius: 30px 6px;
          padding: 16px;
          display: flex;
          flex-direction: column;
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
        .words-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          gap: 15px;
        }
        .word-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }
        .german-word {
          font-size: 1.15rem;
          font-weight: bold;
          direction: ltr;
        }
        .arabic-word {
          font-size: 0.95rem;
          font-weight: bold;
          margin-top: 2px;
          opacity: 0.9;
        }
        .item-number {
          position: absolute;
          top: -10px;
          left: 20px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: bold;
          z-index: 2;
        }
        .level-badge {
          position: absolute;
          top: -10px;
          right: 20px;
          padding: 0 8px;
          height: 20px;
          border-radius: 10px;
          background-color: #8b5cf6;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: bold;
          z-index: 2;
        }
        .audio-icon {
          position: absolute;
          top: -11px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.1rem;
          z-index: 2;
          pointer-events: none;
        }
        .vs-divider {
          font-weight: bold;
          color: #888;
          font-size: 0.9rem;
          align-self: center;
        }
      `}</style>

      <h1 className="page-title">قائمة المتضادات والصفات الشاملة (A1 - C2)</h1>

      {/* أزرار تصفية المستويات */}
      <div className="levels-container">
        <div className="all-btn-wrapper">
          <button
            className={`level-btn all-btn ${selectedLevel === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('ALL')}
          >
            عرض الكل (ALL)
          </button>
        </div>
        <div className="level-buttons-grid">
          <button
            className={`level-btn ${selectedLevel === 'A1' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('A1')}
          >
            مستوى A1
          </button>
          <button
            className={`level-btn ${selectedLevel === 'A2' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('A2')}
          >
            مستوى A2
          </button>
          <button
            className={`level-btn ${selectedLevel === 'B1' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('B1')}
          >
            مستوى B1
          </button>
          <button
            className={`level-btn ${selectedLevel === 'B2' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('B2')}
          >
            مستوى B2
          </button>
          <button
            className={`level-btn ${selectedLevel === 'C1' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('C1')}
          >
            مستوى C1
          </button>
          <button
            className={`level-btn ${selectedLevel === 'C2' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('C2')}
          >
            مستوى C2
          </button>
        </div>
      </div>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن صفة أو كلمة ألمانية أو عربية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* إحصائية المعروض */}
      <div className="stats-bar">
        إجمالي المتضادات المعروضة حالياً: {filteredData.length}
      </div>

      {/* حاوية الكروت مع عناوين المستويات */}
      <div className="cards-container">
        {Object.keys(levelsGrouped).map((lvl) => {
          const items = levelsGrouped[lvl];
          if (items.length === 0) return null;

          return (
            <React.Fragment key={lvl}>
              <div className="level-section-title">كلمات مستوى ({lvl})</div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="vocab-card"
                  onClick={() => speakGerman(item.german1)}
                >
                  {/* رقم الكارت */}
                  <div className="item-number">{item.id}</div>

                  {/* شارة المستوى */}
                  <div className="level-badge">{item.level}</div>

                  {/* أيقونة السماعة */}
                  <div className="audio-icon">🔊</div>

                  {/* الصف الرئيسي: الكلمة ومضادها */}
                  <div className="words-row">
                    {/* الكلمة الأولى */}
                    <div
                      className="word-block"
                      onClick={(e) => { e.stopPropagation(); speakGerman(item.german1); }}
                    >
                      <div className="german-word" style={{ color: '#00bfff' }}>{item.german1}</div>
                      <div className="arabic-word">{item.arabic1}</div>
                    </div>

                    {/* إذا كان هناك كلمة ثانية (مضاد) */}
                    {item.german2 && (
                      <>
                        <div className="vs-divider">⚡</div>

                        {/* الكلمة الثانية (المضاد) */}
                        <div
                          className="word-block"
                          onClick={(e) => { e.stopPropagation(); speakGerman(item.german2); }}
                        >
                          <div className="german-word" style={{ color: '#ec4899' }}>{item.german2}</div>
                          <div className="arabic-word">{item.arabic2}</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}