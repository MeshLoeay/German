import React, { useState } from 'react';

// يمكنك إضافة باقي الـ 1000 كلمة هنا بنفس الهيكل
const schoolData = [
  // مجموعة 1: المفردات المدرسية والأدوات الأساسية (الصورة 1)
  { id: 1, german: "die Schule", arabic: "المدرسة", pronunciation: "دي شوله", group: "المدرسة والأدوات الأساسية" },
  { id: 2, german: "der Unterricht", arabic: "الدرس / الحصة", pronunciation: "دِر أونترريشت", group: "المدرسة والأدوات الأساسية" },
  { id: 3, german: "die Klasse", arabic: "الصف / الفصل", pronunciation: "دي كلاسه", group: "المدرسة والأدوات الأساسية" },
  { id: 4, german: "der Lehrer", arabic: "المعلم", pronunciation: "دِر ليرر", group: "المدرسة والأدوات الأساسية" },
  { id: 5, german: "der Schüler", arabic: "التلميذ", pronunciation: "دِر شيولر", group: "المدرسة والأدوات الأساسية" },
  { id: 6, german: "der Student", arabic: "الطالب الجامعي", pronunciation: "دِر شتودنت", group: "المدرسة والأدوات الأساسية" },
  { id: 7, german: "das Buch", arabic: "الكتاب", pronunciation: "داس بوخ", group: "المدرسة والأدوات الأساسية" },
  { id: 8, german: "das Heft", arabic: "الدفتر / الكراسة", pronunciation: "داس هيفت", group: "المدرسة والأدوات الأساسية" },
  { id: 9, german: "der Stift", arabic: "القلم", pronunciation: "دِر شتيفت", group: "المدرسة والأدوات الأساسية" },

  // مجموعة 2: الأدوات والامتحانات والعلوم (الصورة 2)
  { id: 10, german: "der Bleistift", arabic: "قلم الرصاص", pronunciation: "دِر بلايشتیفت", group: "الأدوات والمواد الدراسية" },
  { id: 11, german: "der Kugelschreiber", arabic: "قلم الحبر الجاف", pronunciation: "دِر كوغل شرايبر", group: "الأدوات والمواد الدراسية" },
  { id: 12, german: "der Radiergummi", arabic: "الممحاة (الاستيكة)", pronunciation: "دِر رادير غومي", group: "الأدوات والمواد الدراسية" },
  { id: 13, german: "das Lineal", arabic: "المسطرة", pronunciation: "داس لينبال", group: "الأدوات والمواد الدراسية" },
  { id: 14, german: "die Tafel", arabic: "السبورة", pronunciation: "دي تافل", group: "الأدوات والمواد الدراسية" },
  { id: 15, german: "die Kreide", arabic: "الطباشير", pronunciation: "دي كرايده", group: "الأدوات والمواد الدراسية" },
  { id: 16, german: "die Hausaufgabe", arabic: "الواجب المنزلي", pronunciation: "دي هاوس أوفغابه", group: "الأدوات والمواد الدراسية" },
  { id: 17, german: "die Prüfung", arabic: "الامتحان / الاختبار", pronunciation: "دي بروفونغ", group: "الأدوات والمواد الدراسية" },
  { id: 18, german: "die Note", arabic: "الدرجة / العلامة", pronunciation: "دي نوته", group: "الأدوات والمواد الدراسية" },
  { id: 19, german: "das Zeugnis", arabic: "الشهادة المدرسية", pronunciation: "داس تسوغنس", group: "الأدوات والمواد الدراسية" },
  { id: 20, german: "das Diplom", arabic: "الدبلوم", pronunciation: "داس ديبلوم", group: "الأدوات والمواد الدراسية" },
  { id: 21, german: "der Abschluss", arabic: "التخرج / المؤهل", pronunciation: "دِر أبشلوس", group: "الأدوات والمواد الدراسية" },
  { id: 22, german: "die Wissenschaft", arabic: "العلم", pronunciation: "دي فيسنشافت", group: "الأدوات والمواد الدراسية" },
  { id: 23, german: "die Mathematik", arabic: "الرياضيات", pronunciation: "دي ماتيماتيك", group: "الأدوات والمواد الدراسية" },
  { id: 24, german: "die Physik", arabic: "الفيزياء", pronunciation: "دي فيزيك", group: "الأدوات والمواد الدراسية" },
  { id: 25, german: "die Chemie", arabic: "الكيمياء", pronunciation: "دي شيمي", group: "الأدوات والمواد الدراسية" },
  { id: 26, german: "die Biologie", arabic: "الأحياء", pronunciation: "دي بيولوجي", group: "الأدوات والمواد الدراسية" },
  { id: 27, german: "die Geschichte", arabic: "التاريخ", pronunciation: "دي غشيشته", group: "الأدوات والمواد الدراسية" },
  { id: 28, german: "die Geographie", arabic: "الجغرافيا", pronunciation: "دي غيوغرافي", group: "الأدوات والمواد الدراسية" },
  { id: 29, german: "die Sprache", arabic: "اللغة", pronunciation: "دي شبراخه", group: "الأدوات والمواد الدراسية" },
  { id: 30, german: "die Grammatik", arabic: "القواعد", pronunciation: "دي غراماتيك", group: "الأدوات والمواد الدراسية" },
  { id: 31, german: "das Wort", arabic: "الكلمة", pronunciation: "داس فورت", group: "الأدوات والمواد الدراسية" },
  { id: 32, german: "der Satz", arabic: "الجملة", pronunciation: "دِر زاتس", group: "الأدوات والمواد الدراسية" },
  { id: 33, german: "die Frage", arabic: "السؤال", pronunciation: "دي سراغه", group: "الأدوات والمواد الدراسية" },
  { id: 34, german: "die Antwort", arabic: "الجواب / الإجابة", pronunciation: "دي آنتفورت", group: "الأدوات والمواد الدراسية" },
  { id: 35, german: "die Bedeutung", arabic: "المعنى", pronunciation: "دي بدويتونغ", group: "الأدوات والمواد الدراسية" },
  { id: 36, german: "das Wörterbuch", arabic: "القاموس", pronunciation: "داس فورتربوخ", group: "الأدوات والمواد الدراسية" },
  { id: 37, german: "die Übung", arabic: "التمرين", pronunciation: "دي أوبونغ", group: "الأدوات والمواد الدراسية" },
  { id: 38, german: "das Beispiel", arabic: "المثال", pronunciation: "داس بايسبيل", group: "الأدوات والمواد الدراسية" },
  { id: 39, german: "die Aufgabe", arabic: "المهمة / التمرين", pronunciation: "دي أوفغابه", group: "الأدوات والمواد الدراسية" },
  { id: 40, german: "das Wissen", arabic: "المعرفة", pronunciation: "داس فيسن", group: "الأدوات والمواد الدراسية" },

  // مجموعة 3: المؤسسات والبيئة التعليمية
  { id: 41, german: "die Universität", arabic: "الجامعة", pronunciation: "دي يونيفيرسيتيت", group: "المؤسسات والبيئة التعليمية" },
  { id: 42, german: "die Bibliothek", arabic: "المكتبة", pronunciation: "دي بيبليوتيك", group: "المؤسسات والبيئة التعليمية" },
  { id: 43, german: "der Hörsaal", arabic: "مدرج المحاضرات", pronunciation: "دِر هيرسال", group: "المؤسسات والبيئة التعليمية" },
  { id: 44, german: "die Mensa", arabic: "مطعم الطلاب (المقصف)", pronunciation: "دي مينسا", group: "المؤسسات والبيئة التعليمية" },
  { id: 45, german: "die Schultasche", arabic: "الحقيبة المدرسية", pronunciation: "دي شول تاشه", group: "المؤسسات والبيئة التعليمية" },
  { id: 46, german: "der Spitzer", arabic: "البرّاية", pronunciation: "دِر شپيتسر", group: "المؤسسات والبيئة التعليمية" },
  { id: 47, german: "die Schere", arabic: "المقص", pronunciation: "دي شيره", group: "المؤسسات والبيئة التعليمية" },
  { id: 48, german: "der Klebstoff", arabic: "الصمغ / الغراء", pronunciation: "دِر كليب شتوف", group: "المؤسسات والبيئة التعليمية" },
  { id: 49, german: "der Mappe", arabic: "الملف / حافظة الأوراق", pronunciation: "دِر ماپه", group: "المؤسسات والبيئة التعليمية" },
  { id: 50, german: "der Textmarker", arabic: "قلم التظليل (الهايلايتر)", pronunciation: "دِر تيكست ماركر", group: "المؤسسات والبيئة التعليمية" },
  { id: 51, german: "der Block", arabic: "دفتر الملاحظات / نوت بوك", pronunciation: "دِر بلوك", group: "المؤسسات والبيئة التعليمية" },
  { id: 52, german: "der Taschenrechner", arabic: "الآلة الحاسبة", pronunciation: "دِر تاشين ريشنر", group: "المؤسسات والبيئة التعليمية" },

  // مجموعة 4: المراحل والمصطلحات الدراسية
  { id: 53, german: "der Stundenplan", arabic: "جدول الحصص الأسبوعي", pronunciation: "دِر شتوندن پلان", group: "المراحل والمصطلحات الدراسية" },
  { id: 54, german: "die Pause", arabic: "الفسحة / الاستراحة المدرسية", pronunciation: "دي باوزه", group: "المراحل والمصطلحات الدراسية" },
  { id: 55, german: "die Ferien", arabic: "الإجازة المدرسية", pronunciation: "دي فيرين", group: "المراحل والمصطلحات الدراسية" },
  { id: 56, german: "der Schulleiter", arabic: "مدير المدرسة", pronunciation: "دِر شول لايتر", group: "المراحل والمصطلحات الدراسية" },
  { id: 57, german: "die Vorlesung", arabic: "المحاضرة الجامعية", pronunciation: "دي فور ليزونغ", group: "المراحل والمصطلحات الدراسية" },
  { id: 58, german: "das Semester", arabic: "الفصل الدراسي", pronunciation: "داس زيستر", group: "المراحل والمصطلحات الدراسية" },
  { id: 59, german: "die Nachhilfe", arabic: "الدروس الخصوصية / تقوية", pronunciation: "دي ناخ هيلفه", group: "المراحل والمصطلحات الدراسية" },
  { id: 60, german: "das Thema", arabic: "الموضوع / العنوان", pronunciation: "داس تيما", group: "المراحل والمصطلحات الدراسية" },
  { id: 61, german: "der Fehler", arabic: "الخطأ", pronunciation: "دِر فايلر", group: "المراحل والمصطلحات الدراسية" },
  { id: 62, german: "die Korrektur", arabic: "التصحيح / التصويب", pronunciation: "دي كوريكتور", group: "المراحل والمصطلحات الدراسية" },
  { id: 63, german: "das Abitur", arabic: "الثانوية العامة الألمانية", pronunciation: "داس أبيتيور", group: "المراحل والمصطلحات الدراسية" },
  { id: 64, german: "der Kurs", arabic: "الدورة التدريبية / الكورس", pronunciation: "دِر كورس", group: "المراحل والمصطلحات الدراسية" },

  // مجموعة 5: المواد والأنشطة التعليمية
  { id: 65, german: "das Fach", arabic: "المادة الدراسية", pronunciation: "داس فاخ", group: "المواد والأنشطة التعليمية" },
  { id: 66, german: "die Kunst", arabic: "التربية الفنية / الرسم", pronunciation: "دي كونست", group: "المواد والأنشطة التعليمية" },
  { id: 67, german: "die Musik", arabic: "التربية الموسيقية", pronunciation: "دي موزيزك", group: "المواد والأنشطة التعليمية" },
  { id: 68, german: "der Sportunterricht", arabic: "حصة التربية الرياضية", pronunciation: "دِر شبورت أونترريشت", group: "المواد والأنشطة التعليمية" },
  { id: 69, german: "das Lesen", arabic: "القراءة", pronunciation: "داس ليزن", group: "المواد والأنشطة التعليمية" },
  { id: 70, german: "das Schreiben", arabic: "الكتابة", pronunciation: "داس شرايبن", group: "المواد والأنشطة التعليمية" },
  { id: 71, german: "das Rechnen", arabic: "الحساب / الرياضيات التطبيقية", pronunciation: "داس ريشنن", group: "المواد والأنشطة التعليمية" },
  { id: 72, german: "das Lernen", arabic: "التعلم / المذاكرة", pronunciation: "داس ليرنن", group: "المواد والأنشطة التعليمية" },
  { id: 73, german: "das Referat", arabic: "العرض التقديمي / البحث", pronunciation: "داس ريفيرات", group: "المواد والأنشطة التعليمية" },
  { id: 74, german: "die Klassenfahrt", arabic: "الرحلة المدرسية", pronunciation: "دي كلاسين فارت", group: "المواد والأنشطة التعليمية" },
  { id: 75, german: "die Buntstifte", arabic: "الأقلام الملونة", pronunciation: "دي بونت شتيفتي", group: "المواد والأنشطة التعليمية" },
  { id: 76, german: "das Zirkel", arabic: "الفرجار (البرجل)", pronunciation: "داس تسيركل", group: "المواد والأنشطة التعليمية" },
  { id: 77, german: "der Klassensprecher", arabic: "ممثل الفصل / رائد الفصل", pronunciation: "دِر كلاسين شبرشر", group: "المواد والأنشطة التعليمية" },
  { id: 78, german: "die Auslandsstudium", arabic: "الدراسة بالخارج", pronunciation: "دي أوسلاندس شتوديوم", group: "المواد والأنشطة التعليمية" },
  { id: 79, german: "das Stipendium", arabic: "المنحة الدراسية", pronunciation: "داس شتيبينديوم", group: "المواد والأنشطة التعليمية" },
  { id: 80, german: "die Schulbildung", arabic: "التعليم المدرسي", pronunciation: "دي شول بيلدونغ", group: "المواد والأنشطة التعليمية" },

  // مجموعة 6: المصطلحات الأكاديمية والامتحانات المتقدمة
  { id: 81, german: "die Grundschule", arabic: "المدرسة الابتدائية", pronunciation: "دي غروند شوله", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 82, german: "die Gesamtschule", arabic: "المدرسة الشاملة", pronunciation: "دي غيزامت شوله", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 83, german: "das Gymnasium", arabic: "المدرسة الثانوية المؤهلة للجامعة", pronunciation: "داس غيمنازيوم", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 84, german: "die Fachhochschule", arabic: "الجامعة للعلوم التطبيقية", pronunciation: "دي فاخ هوخ شوله", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 85, german: "der Dozent", arabic: "المحاضر الجامعي", pronunciation: "دِر دوتسينت", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 86, german: "der Professor", arabic: "الأستاذ الجامعي (البروفيسور)", pronunciation: "دِر پروفيسور", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 87, german: "die Bachelorarbeit", arabic: "مشروع تخرج البكالوريوس", pronunciation: "دي باتشيلور أربايت", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 88, german: "die Masterarbeit", arabic: "رسالة الماجستير", pronunciation: "دي ماستر أربايت", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 89, german: "die Dissertation", arabic: "رسالة الدكتوراه", pronunciation: "دي ديسيرتاسيون", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 90, german: "das Schuljahr", arabic: "العام الدراسي", pronunciation: "داس شول يار", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 91, german: "der Schulhof", arabic: "فناء المدرسة / حوش المدرسة", pronunciation: "دِر شول هوف", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 92, german: "die Zeugnisvergabe", arabic: "تسليم الشهادات الدراسية", pronunciation: "دي تسوغنس فيرغابه", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 93, german: "die Anwesenheit", arabic: "الاحضار / نسبة الحضور", pronunciation: "دي آنفيزنهايت", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 94, german: "die Abwesenheit", arabic: "الغياب عن الحصة", pronunciation: "دي أبفيزنهايت", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 95, german: "der Erstklässler", arabic: "تلميذ الصف الأول الابتدائي", pronunciation: "دِر إيرست كليسلر", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 96, german: "die Sprachprüfung", arabic: "اختبار الكفاءة اللغوية", pronunciation: "دي شبراخ بروفونغ", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 97, german: "die Mündliche Prüfung", arabic: "الامتحان الشفهي", pronunciation: "دي ميوندليشه بروفونغ", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 98, german: "die Schriftliche Prüfung", arabic: "الامتحان تحريرياً / التحريري", pronunciation: "دي شريفتليشه بروفونغ", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 99, german: "das Schulfach", arabic: "المادة المدرسية المقررة", pronunciation: "داس شول فاخ", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },
  { id: 100, german: "die Schulpflicht", arabic: "التعليم الإلزامي / إجبارية التعليم", pronunciation: "دي شول پفليشت", group: "المصطلحات الأكاديمية والامتحانات المتقدمة" },

  // مجموعة 7: المعامل والمجالات المتقدمة
  { id: 101, german: "das Labor", arabic: "المختبر / المعمل المدرسي", pronunciation: "داس لابور", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 102, german: "das Experiment", arabic: "التجربة العلمية", pronunciation: "داس إكسبيريمينت", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 103, german: "das Mikroskop", arabic: "المجهر / الميكروسكوب", pronunciation: "داس ميكروسكوب", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 104, german: "die Literatur", arabic: "الأدب / الدراسات الأدبية", pronunciation: "دي ليتيراتور", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 105, german: "die Philosophie", arabic: "الفلسفة", pronunciation: "دي فيلوزوفي", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 106, german: "die Informatik", arabic: "علوم الحاسوب / تكنولوجيا المعلومات", pronunciation: "دي إنفورماتيك", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 107, german: "die Psychologie", arabic: "علم النفس", pronunciation: "دي بسيشولوجي", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 108, german: "die Soziologie", arabic: "علم الاجتماع", pronunciation: "دي زوتسيولوجي", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 109, german: "die Medizin", arabic: "الطب البشرى", pronunciation: "دي ميديتسين", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 110, german: "die Jura", arabic: "القانون / الحقوق", pronunciation: "دي يورا", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 111, german: "die Pädagogik", arabic: "علم التربية / طرق التدريس", pronunciation: "دي پيداغوغيك", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 112, german: "der Vokabeltest", arabic: "اختبار المفردات اللغوية", pronunciation: "دِر فوكابل تست", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 113, german: "die Nachprüfung", arabic: "امتحان الإعادة / الملحق", pronunciation: "دي ناخ بروفونغ", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 114, german: "der Lehrplan", arabic: "المنهج الدراسي / المقرر", pronunciation: "دِر لير پلان", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 115, german: "die Einschulung", arabic: "الالتحاق بالمدرسة لأول مرة", pronunciation: "دي آين شولونغ", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 116, german: "der Schulbus", arabic: "حافلة المدرسة (حافلة الطلاب)", pronunciation: "دِر شول بوس", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 117, german: "die Sporthalle", arabic: "الصالة الرياضية المدرسية", pronunciation: "دي شپورت هاله", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 118, german: "der Wandtafel-Schwamm", arabic: "إسفنجة مسح السبورة", pronunciation: "دِر فاند تافل شوام", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 119, german: "die Klassenarbeit", arabic: "الاختبار الشامل للدرس", pronunciation: "دي كلاسين أربايت", group: "المعامل والمصطلحات الأكاديمية الإضافية" },
  { id: 120, german: "die Nachhilfelehrerin", arabic: "معلمة الدروس الخصوصية", pronunciation: "دي ناخ هيلفه ليررين", group: "المعامل والمصطلحات الأكاديمية الإضافية" },

  // مجموعة 8: السلوكيات المدرسية والوسائل التوضيحية
  { id: 121, german: "die Disziplin", arabic: "الانضباط المدرسي", pronunciation: "دي ديتسپلين", group: "السلوكيات والوسائل التعليمية" },
  { id: 122, german: "die Konzentration", arabic: "التركيز والاستيعاب", pronunciation: "دي كونتسينتراسيون", group: "السلوكيات والوسائل التعليمية" },
  { id: 123, german: "die Aufmerksamkeit", arabic: "الانتباه والاهتمام", pronunciation: "دي أوفميركسامكايت", group: "السلوكيات والوسائل التعليمية" },
  { id: 124, german: "der Beamer", arabic: "جهاز العرض الضوئي (الداتا شو)", pronunciation: "دِر بيمر", group: "السلوكيات والوسائل التعليمية" },
  { id: 125, german: "der Landkarte", arabic: "الخريطة الجغرافية", pronunciation: "دِر لاندكارته", group: "السلوكيات والوسائل التعليمية" },
  { id: 126, german: "das Wandbild", arabic: "المجسم التعليمي الحائطي", pronunciation: "داس فاند بيلد", group: "السلوكيات والوسائل التعليمية" },
  { id: 127, german: "die Schuluniform", arabic: "الزي المدرسي الموحد", pronunciation: "دي شول أونيفورم", group: "السلوكيات والوسائل التعليمية" },
  { id: 128, german: "der Vertretungslehrer", arabic: "المعلم البديل / معلم الاحتياط", pronunciation: "دِر فيرتريتونغس ليرر", group: "السلوكيات والوسائل التعليمية" },
  { id: 129, german: "die Nachholprüfung", arabic: "اختبار التعويض غياباً", pronunciation: "دي ناخ هول بروفونغ", group: "السلوكيات والوسائل التعليمية" },
  { id: 130, german: "die Arbeitsgruppe", arabic: "مجموعة العمل / ورشة العمل", pronunciation: "دي أربايتس غروبه", group: "السلوكيات والوسائل التعليمية" },
  { id: 131, german: "das Lehrbuch", arabic: "الكتاب المدرسي المقرر", pronunciation: "داس لير بوخ", group: "السلوكيات والوسائل التعليمية" },
  { id: 132, german: "das Arbeitsbuch", arabic: "كتاب التدريبات والأجوبة", pronunciation: "داس أربايتس بوخ", group: "السلوكيات والوسائل التعليمية" },
  { id: 133, german: "die Nachhilfestunde", arabic: "حصة تقوية خصوصية", pronunciation: "دي ناخ هيلفه شتونده", group: "السلوكيات والوسائل التعليمية" },
  { id: 134, german: "der Notendurchschnitt", arabic: "المعدل التراكمي / المجموع النهائي", pronunciation: "دِر نوترن دورشنيت", group: "السلوكيات والوسائل التعليمية" },
  { id: 135, german: "die Versetzung", arabic: "الانتقال إلى الصف التالي (النجاح)", pronunciation: "دي فيرسيتسونغ", group: "السلوكيات والوسائل التعليمية" },
  { id: 136, german: "das Klassenzimmer", arabic: "حجرة الدراسة / الفصل", pronunciation: "داس كلاسين تسيمر", group: "السلوكيات والوسائل التعليمية" },
  { id: 137, german: "der Lehrertisch", arabic: "مكتب المعلم", pronunciation: "دِر ليرر تيش", group: "السلوكيات والوسائل التعليمية" },
  { id: 138, german: "der Stuhl", arabic: "الكرسي / المقعد", pronunciation: "دِر شتول", group: "السلوكيات والوسائل التعليمية" },
  { id: 139, german: "der Papierkorb", arabic: "سلة المهملات الورقية", pronunciation: "دِر پاپير كورب", group: "السلوكيات والوسائل التعليمية" },
  { id: 140, german: "die Kreidetafel", arabic: "السبورة الطباشيرية التقليدية", pronunciation: "دي كرايده تافل", group: "السلوكيات والوسائل التعليمية" },

  // مجموعة 9: التكنولوجيا التعليمية والمهارات الأكاديمية المتقدمة
  { id: 141, german: "das Tablet", arabic: "الجهاز اللوحي / التابلت التعليمي", pronunciation: "داس تابليت", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 142, german: "der Laptop", arabic: "الحاسوب المحمول", pronunciation: "دِر لابتوب", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 143, german: "die Lernplattform", arabic: "منصة التعلم الإلكتروني", pronunciation: "دي ليرن بلاتفورم", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 144, german: "das E-Learning", arabic: "التعليم عن بُعد / الإلكتروني", pronunciation: "داس إي ليرنينغ", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 145, german: "der Online-Kurs", arabic: "الدورة التدريبية عبر الإنترنت", pronunciation: "دِر أونلاين كورس", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 146, german: "die Präsentation", arabic: "العرض التوضيحي / العرض الشفهي", pronunciation: "دي بريزينتاسيون", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 147, german: "die Teamarbeit", arabic: "العمل الجماعي / التعاوني", pronunciation: "دي تيم أربايت", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 148, german: "die Recherche", arabic: "الجمع والبحث عن المعلومات", pronunciation: "دي ريشرشه", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 149, german: "die Mitschrift", arabic: "تدوين الملاحظات أثناء الشرح", pronunciation: "دي ميت شريفت", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 150, german: "die Abgabefrist", arabic: "الموعد النهائي لتسليم الواجب", pronunciation: "دي أبغابه فريست", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 151, german: "der Prüfungsstress", arabic: "توتر وضغط الامتحانات", pronunciation: "دِر بروفونغس شترس", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 152, german: "die Note Eins", arabic: "الدرجة الممتازة (المرتبة الأولى)", pronunciation: "دي نوته آينس", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 153, german: "die Vorbereitung", arabic: "التحضير والاستعداد للاختبار", pronunciation: "دي فور بيرايتونغ", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 154, german: "der Ausbildungsplatz", arabic: "فرصة التدريب المهني", pronunciation: "دِر أوس بيلدونغس بلاتس", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 155, german: "die Qualifikation", arabic: "المؤهل الدراسي / الكفاءة", pronunciation: "دي كفاليفيكاسيون", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 156, german: "der Schulabgänger", arabic: "خريج المدرسة", pronunciation: "دِر شول أبغينغر", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 157, german: "die Nachhilfestunde", arabic: "حصة المراجعة والدعم", pronunciation: "دي ناخ هيلفه شتونده", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 158, german: "das Fachbuch", arabic: "الكتاب المتخصص في مادة ما", pronunciation: "داس فاخ بوخ", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 159, german: "die Allgemeinbildung", arabic: "الثقافة والمعرفة العامة", pronunciation: "دي ألمغماين بيلدونغ", group: "التكنولوجيا التعليمية والمهارات" },
  { id: 160, german: "der Lehrberuf", arabic: "مهنة التدريس والتعليم", pronunciation: "دِر لير بيروف", group: "التكنولوجيا التعليمية والمهارات" },

  // مجموعة 10: الأنشطة الأكاديمية والتخصصات
  { id: 161, german: "die Facharbeit", arabic: "البحث العلمي الدراسي التخصصي", pronunciation: "دي فاخ أربايت", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 162, german: "der Schulabschluss", arabic: "مؤهل إنهاء المرحلة المدرسية", pronunciation: "دِر شول أبشلوس", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 163, german: "die Studienberatung", arabic: "الإرشاد الأكاديمي والجامعي", pronunciation: "دي شتودين بيرا تونغ", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 164, german: "das Erstsemester", arabic: "طالب الفصل الدراسي الأول (المستجد)", pronunciation: "داس إيرست زيستر", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 165, german: "die Campus-Bibliothek", arabic: "مكتبة الحرم الجامعي", pronunciation: "دي كامپوس بيبليوتيك", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 166, german: "der Dekan", arabic: "عميد الكلية", pronunciation: "دِر ديكان", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 167, german: "die Fakultät", arabic: "الكلية الجامعية / القسم الأكاديمي", pronunciation: "دي فاكولتيت", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 168, german: "der Notenspiegel", arabic: "كشف بيان الدرجات", pronunciation: "دِر نوترن شبيغل", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 169, german: "die Studiengebühr", arabic: "الرسوم والمصروفات الدراسية", pronunciation: "دي شتودين غبيور", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 170, german: "der Studentenausweis", arabic: "البطاقة / كارنيه الطالب الجامعي", pronunciation: "دِر شتودنتن أوسفايس", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 171, german: "das Schüleraustauschprogramm", arabic: "برنامج التبادل الطلابي الدولي", pronunciation: "داس شيولر أوس تاوش برنامج", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 172, german: "die Abiturprüfung", arabic: "امتحانات الثانوية العامة النهائية", pronunciation: "دي أبيتيور بروفونغ", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 173, german: "der Pflichtunterricht", arabic: "التعليم / الحصص الإلزامية", pronunciation: "دِر پفليشت أونترريشت", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 174, german: "der Wahlunterricht", arabic: "الحصص الاختيارية", pronunciation: "دِر فال أونترريشت", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 175, german: "die Nachmittagsschule", arabic: "الدراسة المسائية / الممتدة", pronunciation: "دي ناخميتانغس شوله", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 176, german: "die Sprachschule", arabic: "معهد / مدرسة تعليم اللغات", pronunciation: "دي شبراخ شوله", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 177, german: "die Volkshochschule", arabic: "مركز التعليم المستمر للكبار", pronunciation: "دي فولكس هوخ شوله", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 178, german: "das Sprachzertifikat", arabic: "شهادة الكفاءة اللغوية المعتمدة", pronunciation: "داس شبراخ تسيرتيفيكات", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 179, german: "der Schulgong", arabic: "جرس المدرسة", pronunciation: "دِر شول غونغ", group: "الأنشطة الأكاديمية والتخصصات" },
  { id: 180, german: "die Schulordnung", arabic: "اللائحة الداخلية والقواعد المدرسية", pronunciation: "دي شول أوردنونغ", group: "الأنشطة الأكاديمية والتخصصات" },

  // مجموعة 11: البيئة التفاعلية والمصطلحات الإدارية
  { id: 181, german: "die Elternversammlung", arabic: "اجتماع أولياء الأمور", pronunciation: "دي إيلترن فيرزاملونغ", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 182, german: "der Elternsprechtag", arabic: "يوم مقابلة المعلمين وأولياء الأمور", pronunciation: "دِر إيلترن شبريخ تاغ", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 183, german: "die Einschreibung", arabic: "التسجيل / قيد الطلاب", pronunciation: "دي آين شرايبونغ", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 184, german: "die Immatrikulation", arabic: "التسجيل الرسمي في الجامعة", pronunciation: "دي إيماتريكولاسيون", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 185, german: "die Exmatrikulation", arabic: "إلغاء القيد / سحب الملف الجامعي", pronunciation: "دي إكسماتريكولاسيون", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 186, german: "das Vorlesungsverzeichnis", arabic: "دليل المحاضرات والمواد المقررة", pronunciation: "داس فورليزونغس فيرتسايخنيس", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 187, german: "die Notenskala", arabic: "مقياس وسلم التقديرات", pronunciation: "دي نوترن إسكالا", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 188, german: "die Mindestnote", arabic: "الحد أدنى لعلامة النجاح", pronunciation: "دي ميندست نوته", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 189, german: "die Höchstnote", arabic: "الدرجة العظمى / النهائية", pronunciation: "دي هيخست نوته", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 190, german: "die Zulassung", arabic: "القَبول الجامعي الرسمي", pronunciation: "دي تسولاسونغ", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 191, german: "der Zulassungsbescheid", arabic: "خطاب القبول الجامعي", pronunciation: "دِر تسولاسونغس بيشايد", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 192, german: "die Studienplatzvergabe", arabic: "توزيع المقاعد الدراسية", pronunciation: "دي شتودين بلاتس فيرغابه", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 193, german: "das Studienkolleg", arabic: "السنة التحضيرية للجامعة", pronunciation: "داس شتودين كوليغ", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 194, german: "die Feststellungsprüfung", arabic: "اختبار تقييم المستوى للسنة التحضيرية", pronunciation: "دي فيست شتيلونغس بروفونغ", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 195, german: "das Schulfest", arabic: "الحفل / المهرجان المدرسي", pronunciation: "داس شول فيست", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 196, german: "die Schulkantine", arabic: "مقصف المدرسة / الكانتين", pronunciation: "دي شول كانتينه", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 197, german: "der Pausenhof", arabic: "ساحة الاستراحة والفسحة", pronunciation: "دِر باوزن هوف", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 198, german: "die Schulmedizin", arabic: "الطب الوقائي / العيادة المدرسية", pronunciation: "دي شول ميديتسين", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 199, german: "der Schulpsychologe", arabic: "الأخصائي النفسي المدرسي", pronunciation: "دِر شول بسيشولوغه", group: "البيئة التفاعلية والمصطلحات الإدارية" },
  { id: 200, german: "der Sozialarbeiter", arabic: "الأخصائي الاجتماعي المدرسي", pronunciation: "دِر زوتسيال أربايتر", group: "البيئة التفاعلية والمصطلحات الإدارية" },

  // مجموعة 12: الأفعال والعبارات التعليمية والتنفيذية
  { id: 201, german: "das Auswendiglernen", arabic: "الحفظ عن ظهر قلب", pronunciation: "داس أوس فيندغ ليرنن", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 202, german: "das Textverständnis", arabic: "فهم واستيعاب النصوص", pronunciation: "داس تيكست فيرشتيندنيس", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 203, german: "die Hausaufgabenbetreuung", arabic: "الإشراف على الواجبات المدرسية", pronunciation: "دي هاوس أوفغابن بيتراوونغ", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 204, german: "der Nachhilfeunterricht", arabic: "دروس التقوية واستدراك المادة", pronunciation: "دِر ناخ هيلفه أونترريشت", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 205, german: "das Zeugnisheft", arabic: "كتيب الشهادات المدرسية", pronunciation: "داس تسوغنس هيفت", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 206, german: "die Vorlesungsfreie Zeit", arabic: "إجازة ما بين الفصلين الدراسيين", pronunciation: "دي فورليزونغس فرايه تسايت", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 207, german: "das Erststudium", arabic: "الدراسة الجامعية الأولى (البكالوريوس)", pronunciation: "داس إيرست شتوديوم", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 208, german: "das Zweitstudium", arabic: "الدراسة الجامعية الثانية", pronunciation: "داس تسفايت شتوديوم", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 209, german: "der Ausbildungsberuf", arabic: "المهنة التدريبية / الفنية", pronunciation: "دِر أوس بيلدونغس بيروف", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 210, german: "die Berufsakademie", arabic: "الأكاديمية المهنية", pronunciation: "دي بيروفس أكاديمي", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 211, german: "der Bildungsweg", arabic: "المسار / المسلك التعليمي", pronunciation: "دِر بيلدونغس فيغ", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 212, german: "die Bildungsreform", arabic: "إصلاح منظومة التعليم", pronunciation: "دي بيلدونغس ريفورم", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 213, german: "die Chancengleichheit", arabic: "تكافؤ الفرص التعليمية", pronunciation: "دي شانسن غلايخهايت", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 214, german: "die Schulpflichtigen", arabic: "الأطفال الخاضعون للتعليم الإلزامي", pronunciation: "دي شول پفليشتيغن", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 215, german: "der Erstleser", arabic: "المبتدئ في القراءة", pronunciation: "دِر إيرست ليزر", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 216, german: "das Schullandheim", arabic: "المعسكر المدرسي التعليمي", pronunciation: "داس شول لاند هايم", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 217, german: "die Nachhilfezentrale", arabic: "مركز تقديم الدروس الخصوصية", pronunciation: "دي ناخ هيلفه تسينتراله", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 218, german: "die Musterlösung", arabic: "الإجابة النموذجية", pronunciation: "دي موستر ليزونغ", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 219, german: "die Kontrollarbeit", arabic: "اختبار المراجعة الدوري", pronunciation: "دي کونترول أربايت", group: "الأفعال والعبارات التعليمية والتنفيذية" },
  { id: 220, german: "der Wissensstand", arabic: "مستوى التحصيل العلمي الحالي", pronunciation: "دِر فيسنز شتاند", group: "الأفعال والعبارات التعليمية والتنفيذية" },

  // مجموعة 13: القاعات والتنظيم الأكاديمي المتقدم
  { id: 221, german: "das Sprachlabor", arabic: "معمل اللغات الصوتية", pronunciation: "داس شبراخ لابور", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 222, german: "der Computerraum", arabic: "قاعة الحاسوب / المعمل الآلي", pronunciation: "دِر كومبيوتر راوم", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 223, german: "die Studienordnung", arabic: "اللوائح والنظم الدراسية", pronunciation: "دي شتودين أوردنونغ", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 224, german: "der Prüfungsordnung", arabic: "لائحة وشروط الامتحانات", pronunciation: "دِر بروفونغس أوردنونغ", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 225, german: "das Prüfungskomitee", arabic: "لجنة الامتحانات / الكنترول", pronunciation: "داس بروفونغس كوميتي", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 226, german: "der Studiengang", arabic: "التخصص الدراسي / البرامج الجامعي", pronunciation: "دِر شتودين غانغ", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 227, german: "der Teilleistungsnachweis", arabic: "شهادة اجتياز جزء من المادة", pronunciation: "دِر تايل لايستونغس ناخوايس", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 228, german: "die Leistungsbewertung", arabic: "تقييم مستوى الأداء العلمي", pronunciation: "دي لايستونغس بي فيرتونغ", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 229, german: "die Fehlstunde", arabic: "ساعة الغياب عن الحصة", pronunciation: "دي فايل شتونده", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 230, german: "das Entschuldigungsschreiben", arabic: "خطاب عذر الغياب الرسمي", pronunciation: "داس إينتشولديغونغس شرايبن", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 231, german: "die Sprechstunde", arabic: "الساعات المكتبية للمدرس", pronunciation: "دي شبريخ شتونده", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 232, german: "das Praktikum", arabic: "التدريب العملي / الميداني", pronunciation: "داس براكتيكوم", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 233, german: "der Praktikant", arabic: "الطالب المتدرب ميدانياً", pronunciation: "دِر براكتيكانت", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 234, german: "die Forschungsarbeit", arabic: "العمل والبحث العلمي", pronunciation: "دي فورشونغس أربايت", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 235, german: "das Seminar", arabic: "الحلقة الدراسية / الندوة البحثية", pronunciation: "داس زيمينار", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 236, german: "der Tutor", arabic: "المعيد / المساعد الأكاديمي", pronunciation: "دِر توتور", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 237, german: "das Tutorium", arabic: "حصة التمرين / الدعم الجامعي", pronunciation: "داس توتوريوم", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 238, german: "die Klausur", arabic: "الاختبار التحريري المباشر", pronunciation: "دي كلاوزور", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 239, german: "das Scheinstudium", arabic: "الدراسة الشكليّة غير المنتظمة", pronunciation: "داس شاين شتوديوم", group: "القاعات والتنظيم الأكاديمي المتقدم" },
  { id: 240, german: "der Bildungsabschluss", arabic: "المؤهل التعليمي النهائي", pronunciation: "دِر بيلدونغس أبشلوس", group: "القاعات والتنظيم الأكاديمي المتقدم" },

  // مجموعة 14: الأنشطة الطلابية والتنظيم الأكاديمي
  { id: 241, german: "die Fachschaft", arabic: "مجلس اتحاد طلاب الكلية / التخصص", pronunciation: "دي فاخ شافت", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 242, german: "der Semesterbeitrag", arabic: "اشتراك الفصل الدراسي الجامعي", pronunciation: "دِر زيستر بايتراغ", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 243, german: "das Semesterticket", arabic: "تذكرة المواصلات الطلابية للفصل", pronunciation: "داس زيستر تيكيت", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 244, german: "die Regelstudienzeit", arabic: "المدة الزمنية القياسية للدراسة", pronunciation: "دي ريغل شتودين تسايت", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 245, german: "der Leistungspunkt", arabic: "نقطة الساعات المعتمدة (الكريدت)", pronunciation: "دِر لايستونغس بونكت", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 246, german: "das Modulhandbuch", arabic: "دليل الوصف التفصيلي للمواد", pronunciation: "داس مودول هاند بوخ", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 247, german: "die Zwischenprüfung", arabic: "امتحان منتصف الفصل (الميدتيرم)", pronunciation: "دي تسفيشن بروفونغ", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 248, german: "die Abschlussarbeit", arabic: "مشروع أو رسالة التخرج النهائية", pronunciation: "دي أبشلوس أربايت", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 249, german: "der Kolloquium", arabic: "مناقشة رسالة التخرج / السمينار", pronunciation: "دِر كولوكفيوم", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 250, german: "die Promotion", arabic: "نيل شهادة الحصول على الدكتوراه", pronunciation: "دي بروموتسيون", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 251, german: "der Doktorand", arabic: "طالب مرحلة الدكتوراه", pronunciation: "دِر دوكتوراند", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 252, german: "der Habilitation", arabic: "تأهيل الأستاذية الجامعية", pronunciation: "دِر هابيليتاسيون", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 253, german: "die Gastvorlesung", arabic: "محاضرة الأستاذ الزائر", pronunciation: "دي غاست فور ليزونغ", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 254, german: "das Studentenwerk", arabic: "هيئة رعاية وشؤون الطلاب", pronunciation: "داس شتودنتن فيرك", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 255, german: "das Studentenwohnheim", arabic: "السكن الجامعي الطلابي", pronunciation: "داس شتودنتن فون هايم", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 256, german: "der Erstsemesterempfang", arabic: "حفل استقبال الطلاب الجدد", pronunciation: "دِر إيرست زيستر إمبفانغ", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 257, german: "die Absolventenfeier", arabic: "حفل تخرج الدفعة", pronunciation: "دي أبسولفينتن فاير", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 258, german: "das Reifezeugnis", arabic: "شهادة إتمام الثانوية العامة", pronunciation: "داس رايفه تسوغنس", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 259, german: "die Zeugnisabschrift", arabic: "نسخة طبق الأصل من الشهادة", pronunciation: "دي تسوغنس أبشريفت", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },
  { id: 260, german: "die Beglaubigung", arabic: "التصديق والتوثيق الرسمي للشهادات", pronunciation: "دي بغلاوبيغونغ", group: "الأنشطة الطلابية والتنظيم الأكاديمي" },

  // مجموعة 15: مصطلحات الاختبارات والتحصيل المتقدم
  { id: 261, german: "der Lückentext", arabic: "النص ذو الفراغات (تمرين الإكمال)", pronunciation: "دِر لوكن تيكست", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 262, german: "die Mehrfachauswahl", arabic: "الأسئلة متعددة الخيارات (MCQ)", pronunciation: "دي ميرفاخ أوسفال", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 263, german: "die Aufsatzform", arabic: "الامتحان المقالي", pronunciation: "دي أوفزاتس فورم", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 264, german: "die Leseverstehen", arabic: "مهارة فهم واستيعاب المقروء", pronunciation: "دي ليزه فيرشتين", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 265, german: "die Hörverstehen", arabic: "مهارة الاستماع والاستيعاب الصوتي", pronunciation: "دي هير فيرشتين", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 266, german: "die Freie Rede", arabic: "الإلقاء والشرح الحر بدون تحضير", pronunciation: "دي فرايه ريده", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 267, german: "der Spickzettel", arabic: "ورقة الغش الصغيرة", pronunciation: "دِر شپيك تسيتل", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 268, german: "der Täuschungsversuch", arabic: "محاولة الغش في الامتحان", pronunciation: "دِر تويشونغس فيرزوخ", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 269, german: "die Prüfungsaufsicht", arabic: "مراقبة وتأمين الامتحانات", pronunciation: "دي بروفونغس أوفزيشت", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 270, german: "der Prüfungskandidat", arabic: "المتقدم للامتحان", pronunciation: "دِر بروفونغس كانديدات", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 271, german: "die Korrekturfrist", arabic: "مهلة وتاريخ تصحيح الاختبارات", pronunciation: "دي كوريكتور فريست", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 272, german: "die Zweitkorrektur", arabic: "التصحيح والمراجعة الثانية للورقة", pronunciation: "دي تسفايت كوريكتور", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 273, german: "die Einsichtnahme", arabic: "الاطلاع والمراجعة على ورقة الإجابة", pronunciation: "دي آين زيشت نامه", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 274, german: "der Prüfungsrücktritt", arabic: "الانسحاب الرسمي من الامتحان", pronunciation: "دِر بروفونغس روكتريت", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 275, german: "das Attest", arabic: "التقرير الطبي لطلب تأجيل الامتحان", pronunciation: "داس أتست", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 276, german: "die Nachholklausur", arabic: "الاختبار التحريري التعويضي", pronunciation: "دي ناخ هول كلاوزور", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 277, german: "die Freiversuch", arabic: "فرصة الاختبار الإضافية المجانية", pronunciation: "دي فراي فيرزوخ", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 278, german: "das Prädikat", arabic: "التقدير واللقب الشرفي للدرجة", pronunciation: "داس براديكات", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 279, german: "die Auszeichnung", arabic: "التكريم / وسام التفوق العلمي", pronunciation: "دي أوس تسايشنونغ", group: "مصطلحات الاختبارات والتحصيل المتقدم" },
  { id: 280, german: "der Bestnote", arabic: "أعلى وذروة العلامات المستحقة", pronunciation: "دِر بيست نوته", group: "مصطلحات الاختبارات والتحصيل المتقدم" },

  // مجموعة 16: البيئة المدرسية والأنشطة المتطورة
  { id: 281, german: "die Ganztagsschule", arabic: "المدرسة ذات اليوم الكامل", pronunciation: "دي غانتس تاغس شوله", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 282, german: "die Internatsschule", arabic: "المدرسة الداخلية (السكنية)", pronunciation: "دي إينتيرناتس شوله", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 283, german: "die Abendschule", arabic: "المدرسة المسائية للكبار", pronunciation: "دي آبيند شوله", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 284, german: "die Sommerschule", arabic: "المدرسة الصيفية (الدورات الصيفية)", pronunciation: "دي زومر شوله", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 285, german: "der Schulgarten", arabic: "الحديقة المدرسية / المزرعة", pronunciation: "دِر شول غارتن", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 286, german: "die Schulzeitung", arabic: "الصحيفة المدرسية / المطبوعة الطلابية", pronunciation: "دي شول تسايتونغ", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 287, german: "der Schulband", arabic: "الفرقة الموسيقية المدرسية", pronunciation: "دِر شول باند", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 288, german: "der Schulchor", arabic: "الكورال الغنائي المدرسي", pronunciation: "دِر شول كور", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 289, german: "die Theater-AG", arabic: "جماعة / نشاط المسرح المدرسي", pronunciation: "دي تيآتر آيه غيه", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 290, german: "die Sport-AG", arabic: "جماعة النشاط الرياضي المدرسي", pronunciation: "دي شپورت آيه غيه", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 291, german: "der Förderunterricht", arabic: "حصص التقوية للطلاب المتأخرين", pronunciation: "دِر فيردر أونترريشت", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 292, german: "der Begabtenförderung", arabic: "برنامج رعاية الطلاب الموهوبين", pronunciation: "دِر بغابتن فيردرونغ", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 293, german: "die Inklusionsklasse", arabic: "فصل الدمج للتربية الخاصة", pronunciation: "دي إينكلوزيونس كلاسه", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 294, german: "der Sonderpädagoge", arabic: "معلم التربية الخاصة / الدمج", pronunciation: "دِر زوندر پيداغوغه", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 295, german: "das Lehrerkollegium", arabic: "هيئة التدريس / مجلس المعلمين", pronunciation: "داس ليرر كوليغيوم", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 296, german: "die Lehrerkonferenz", arabic: "مؤتمر / اجتماع المعلمين", pronunciation: "دي ليرر كونفيرينتس", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 297, german: "der Fachlehrer", arabic: "المعلم المتخصص في مادة معينة", pronunciation: "دِر فاخ ليرر", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 298, german: "der Klassenlehrer", arabic: "رائد الفصل / معلم الصف الرئيسي", pronunciation: "دِر كلاسين ليرر", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 299, german: "die Schulbescheinigung", arabic: "إفادة إثبات قيد مدرسي", pronunciation: "دي شول بشاينغونغ", group: "البيئة المدرسية والأنشطة المتطورة" },
  { id: 300, german: "die Schulbefreiung", arabic: "إذن أو تصريح الإعفاء من الحضور", pronunciation: "دي شول بفرايونغ", group: "البيئة المدرسية والأنشطة المتطورة" },

  // مجموعة 17: وسائل التكنولوجيا التعليمية والتجهيزات الحديثة
  { id: 301, german: "das Smartboard", arabic: "السبورة التفاعلية الذكية", pronunciation: "داس سمارت بورد", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 302, german: "der Dokumentenkamera", arabic: "كاميرا عرض الوثائق", pronunciation: "دِر دوكومينتن كاميرا", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 303, german: "die Lern-App", arabic: "تطبيق التعلم الإلكتروني", pronunciation: "دي ليرن أب", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 304, german: "das Digitales Klassenbuch", arabic: "سجل الفصل الرقمي الإلكتروني", pronunciation: "داس ديغيتالس كلاسين بوخ", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 305, german: "die Schulwebseite", arabic: "الموقع الإلكتروني للمدرسة", pronunciation: "دي شول فيب سايت", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 306, german: "der Online-Stundenplan", arabic: "جدول الحصص عبر الإنترنت", pronunciation: "دِر أونلاين شتوندن پلان", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 307, german: "die Cloud-Speicherung", arabic: "التخزين السحابي للملفات المدرسية", pronunciation: "دي كلاود شپايشرونغ", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 308, german: "die Videokonferenz", arabic: "الاجتماع عبر الفيديو / الحصة الافتراضية", pronunciation: "دي فيديو كونفيرينتس", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 309, german: "der Headset", arabic: "سماعة الرأس المزودة بـ الميكروفون", pronunciation: "دِر هيدسيت", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 310, german: "die Tastatur", arabic: "لوحة المفاتيح", pronunciation: "دي تاستاتور", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 311, german: "die Computermaus", arabic: "فأرة الحاسوب", pronunciation: "دي كومبيوتر ماوس", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 312, german: "der Flachbildschirm", arabic: "الشاشة المسطحة", pronunciation: "دِر فلاخ بيلد شيرم", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 313, german: "der USB-Stick", arabic: "ذاكرة الفلاشة المحمولة", pronunciation: "دِر يو إس بي شتيك", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 314, german: "der Drucker", arabic: "الطابعة المدرسية", pronunciation: "دِر دروكر", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 315, german: "der Kopierer", arabic: "آلة تصوير المستندات", pronunciation: "دِر كوبيرر", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 316, german: "der Scanner", arabic: "الماسح الضوئي", pronunciation: "دِر إسكانر", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 317, german: "das WLAN-Netzwerk", arabic: "شبكة الواي فاي المدرسية", pronunciation: "داس فيلان نيتس فيرك", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 318, german: "die Steckdose", arabic: "مقبس الكهرباء / الفيشة", pronunciation: "دي شتيك دوضه", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 319, german: "das Ladekabel", arabic: "كابل الشحن", pronunciation: "داس لاده كابل", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },
  { id: 320, german: "der Projektor", arabic: "جهاز العرض السينمائي / البروجيكتور", pronunciation: "دِر پرو يكتور", group: "وسائل التكنولوجيا والتجهيزات الحديثة" },

  // مجموعة 18: الأنشطة والأدوات الرياضية والعلمية المتقدمة
  { id: 321, german: "der Zirkelkasten", arabic: "علبة الأدوات الهندسية", pronunciation: "دِر تسيركل كاستن", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 322, german: "das Geodreieck", arabic: "المثلث الهندسي (المنقلة والمثلث)", pronunciation: "داس غيو دراي إيك", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 323, german: "der Farbkasten", arabic: "علبة ألوان المائية", pronunciation: "دِر فارب كاستن", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 324, german: "der Pinsel", arabic: "فرشاة الرسم", pronunciation: "دِر بينسل", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 325, german: "der Zeichenblock", arabic: "كراسة الرسم والتصميم", pronunciation: "دِر تسايخن بلوك", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 326, german: "die Knetmasse", arabic: "صلصال التشكيل", pronunciation: "دي كنيت ماسه", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 327, german: "der Turnbeutel", arabic: "كيس / حقيبة الملابس الرياضية", pronunciation: "دِر تورن بويتل", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 328, german: "die Turnmatte", arabic: "بساط الجمباز الرياضي", pronunciation: "دي تورن ماته", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 329, german: "der Medizinball", arabic: "الكرة الطبية للتمرين", pronunciation: "دِر ميديتسين بال", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 330, german: "die Trillerpfeife", arabic: "صفارة الحكم / معلم الرياضة", pronunciation: "دي تريلر بفايفه", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 331, german: "der Reagenzglas", arabic: "أنبوب الاختبار العلمي", pronunciation: "دِر ريآغينتس غلاس", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 332, german: "der Bunsenbrenner", arabic: "موقد بنسن في المعمل", pronunciation: "دِر بونزن برينر", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 333, german: "die Schutzbrille", arabic: "نظارة الحماية في المختبر", pronunciation: "دي شوتس بريله", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 334, german: "der Globus", arabic: "مجسم الكرة الأرضية", pronunciation: "دِر غلوبوس", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 335, german: "das Periodensystem", arabic: "الجدول الدوري للعناصر", pronunciation: "داس بيريودن سيستيم", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 336, german: "der Skelettmodell", arabic: "مجسم الهيكل العظمي التعليمي", pronunciation: "دِر إسكليت موديل", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 337, german: "die Notenblatt", arabic: "ورقة النوتة الموسيقية", pronunciation: "دي نوترن بلات", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 338, german: "die Stoppuhr", arabic: "ساعة الإيقاف (الأسبقية)", pronunciation: "دي شتوب أور", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 339, german: "der Locher", arabic: "خراقة الأوراق", pronunciation: "دِر لوخر", group: "الأنشطة والأدوات الرياضية والعلمية" },
  { id: 340, german: "der Heftklammer", arabic: "دبوس الكباس / الدباسة", pronunciation: "دِر هيفت كلامر", group: "الأنشطة والأدوات الرياضية والعلمية" },

  // مجموعة 19: شؤون الطلاب والبيئة الجامعية الشاملة
  { id: 341, german: "das Akademisches Viertel", arabic: "الربع الأكاديمي (ربع ساعة سماح المحاضرة)", pronunciation: "داس أكاديميشيس فيرتل", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 342, german: "die Ringvorlesung", arabic: "سلسلة المحاضرات المشتركة / العامة", pronunciation: "دي رينغ فور ليزونغ", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 343, german: "das Hauptseminar", arabic: "حلقة البحث الرئيسية المتقدمة", pronunciation: "داس هاوبت زيمينار", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 344, german: "das Proseminar", arabic: "الحلقة الدراسية التمهيدية", pronunciation: "داس پرو زيمينار", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 345, german: "der Forschungsbericht", arabic: "تقرير البحث العلمي", pronunciation: "دِر فورشونغس بيريشت", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 346, german: "die Quellenangabe", arabic: "توثيق المراجع والمصادر البحثية", pronunciation: "دي كويلين أنغابه", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 347, german: "das Literaturverzeichnis", arabic: "قائمة المراجع والمصادر", pronunciation: "داس ليتيراتور فيرتسايخنيس", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 348, german: "die Plagiatprüfung", arabic: "فحص واكتشاف السرقة الأدبية", pronunciation: "دي بلاغيانت بروفونغ", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 349, german: "der wissenschaftliche Mitarbeiter", arabic: "الباحث المساعد / المعيد بالجامعة", pronunciation: "دِر فيسنشافتليشه ميتايبيتر", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 350, german: "die Senatsverwaltung", arabic: "إدارة مجلس الشيوخ الجامعي", pronunciation: "دي زيانات فير فالتونغ", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 351, german: "das Rektorat", arabic: "مكتب رئاسة الجامعة", pronunciation: "داس ريكتورات", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 352, german: "der Rektor", arabic: "رئيس الجامعة", pronunciation: "دِر ريكتور", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 353, german: "die Universitätsleitung", arabic: "إدارة قيادة الجامعة", pronunciation: "دي يونيفيرسيتيتس لايتونغ", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 354, german: "das Akademisches Auslandsamt", arabic: "مكتب الشؤون الدولية والعلاقات الخارجية", pronunciation: "داس أكاديميشيس أوسلاندس أامت", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 355, german: "die Studienbeihilfe", arabic: "المساعدة المالية والرواتب الطلابية", pronunciation: "دي شتودين باي هيلفه", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 356, german: "das BAföG-Amt", arabic: "مكتب القروض والمنح الطلابية الحكومية", pronunciation: "داس بافوغ أامت", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 357, german: "die Mensakarte", arabic: "بطاقة الدفع الإلكتروني لمقصف الطلاب", pronunciation: "دي مينسا كارته", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 358, german: "der Hochschulsport", arabic: "الأنشطة الرياضية الجامعية", pronunciation: "دِر هوخ شول شپورت", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 359, german: "das Studierendenparlament", arabic: "برلمان اتحاد الطلاب الجامعي", pronunciation: "داس شتوديريندن پارلامينت", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },
  { id: 360, german: "die Campus-Radio", arabic: "محطة الإذاعة الخاصة بالحرم الجامعي", pronunciation: "دي كامپوس راديو", group: "شؤون الطلاب والبيئة الجامعية الشاملة" },

  // مجموعة 20: محتويات الحقيبة المدرسية والمقلمة
  { id: 361, german: "das Federmäppchen", arabic: "مقلمة الأقلام", pronunciation: "داس فيدير ميپشن", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 362, german: "der Füllfederhalter", arabic: "قلم الحبر السائل (الفلوماستر المدرسي)", pronunciation: "داس فِيدِر هالتير", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 363, german: "der Patronen", arabic: "خراطيش حبر قلم الجاف", pronunciation: "دِر باترونين", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 364, german: "die Brotdose", arabic: "صندوق الطعام المدرسي (اللانش بوكس)", pronunciation: "دي بروت دوزه", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 365, german: "die Trinkflasche", arabic: "زجاجة الماء المدرسية (القمقم)", pronunciation: "دي ترينك فلاشة", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 366, german: "das Portemonnaie", arabic: "محفظة النقود المدرسية", pronunciation: "داس پورت موني", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 367, german: "der Hausschlüssel", arabic: "مفتاح المنزل المدرسي المعلق بالحقيبة", pronunciation: "دِر هاوس شلوسيل", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 368, german: "das Papiertaschentuch", arabic: "منديل الورق الورقي", pronunciation: "داس بابير تاشين توخ", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 369, german: "das Pflaster", arabic: "لازمة الجروح / البلاستر الطبي", pronunciation: "داس فلاستير", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 370, german: "der Schülerausweis", arabic: "بطاقة الهوية / الكارنيه المدرسي", pronunciation: "دِر شيولر أوسفايس", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 371, german: "der Klebestift", arabic: "صمغ اللصق الورقي العود", pronunciation: "دِر كليب شتيفت", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 372, german: "die Büroklammer", arabic: "مشبك الورق المعدني", pronunciation: "دي بيورو كلامر", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 373, german: "das Reißzwecke", arabic: "دبوس اللوحة الفلينية (المسمار الصغير)", pronunciation: "داس رايس تفيكه", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 374, german: "das Lesezeichen", arabic: "علامة / فاصل الكتب", pronunciation: "داس ليزه تسايشن", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 375, german: "der Notizblock", arabic: "دفتر الملاحظات الصغير", pronunciation: "دِر نوتيتس بلوك", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 376, german: "die Vokabelheft", arabic: "دفتر تدوين وحفظ المفردات", pronunciation: "دي فوكابل هيفت", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 377, german: "der Schulplaner", arabic: "منظم المهام والجدول المدرسي اليومي", pronunciation: "دِر شول پلانر", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 378, german: "der Malkoffer", arabic: "حقيبة أدوات الرسم والألوان", pronunciation: "دِر مال كوفر", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 379, german: "die Lupen", arabic: "عدسة المكبرة اليدوية", pronunciation: "دي لوبين", group: "محتويات الحقيبة المدرسية والمقلمة" },
  { id: 380, german: "das Klassentagebuch", arabic: "دفتر يوميات ومتابعة الفصل", pronunciation: "داس كلاسين تاغه بوخ", group: "محتويات الحقيبة المدرسية والمقلمة" },

  // مجموعة 21: أدوات المعمل المتقدمة ومستلزمات الحصة الدراسية
  { id: 381, german: "der Messzylinder", arabic: "الأسطوانة القياسية المدرجة (المخبار)", pronunciation: "دِر ميس تسيليندر", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 382, german: "die Pipette", arabic: "القطارة المخبرية", pronunciation: "دي بيبته", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 383, german: "die Petrischale", arabic: "طبق بتري المخصص للمزارع البكتيرية", pronunciation: "دي بيتري شاله", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 384, german: "der Trichter", arabic: "القمع المخبري", pronunciation: "دِر تريشتر", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 385, german: "die Reagenzglasständer", arabic: "حامل أنابيب الاختبار", pronunciation: "دي ريآغينتس غلاس شتندر", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 386, german: "die Waage", arabic: "الميزان العلمي الدقيق", pronunciation: "دي فاغه", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 387, german: "das Thermometer", arabic: "مقياس الحرارة (الترمومتر)", pronunciation: "داس تيرموميتر", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 388, german: "der Spatel", arabic: "الملعقة الكيميائية / السباتولا", pronunciation: "دِر شباتيل", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 389, german: "die Stativ", arabic: "حامل الأجهزة الحديدي (الستاند)", pronunciation: "دي شتاتيف", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 390, german: "die Zange", arabic: "الماسك المعدني / الكماشة", pronunciation: "دي تسانغه", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 391, german: "die Kreideschachtel", arabic: "علبة الطباشير", pronunciation: "دي كرايده شاختل", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 392, german: "der Radiergummihalter", arabic: "حامل الممحاة", pronunciation: "دِر رادير غومي هالتير", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 393, german: "das Zeichenpapier", arabic: "ورق الرسم والتلوين", pronunciation: "داس تسايخن بابير", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 394, german: "der Papierschneider", arabic: "آلة قص الورق المكتبية", pronunciation: "دِر بابير شنايدير", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 395, german: "der Pinnwand", arabic: "لوحة الإعلانات الفلينية الحائطية", pronunciation: "دِر بين فاند", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 396, german: "die Magnettafel", arabic: "السبورة المغناطيسية البيضاء", pronunciation: "دي ماغنيت تافل", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 397, german: "die Magnete", arabic: "المغناطيس التعليمي", pronunciation: "دي ماغنيته", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 398, german: "der Lernposter", arabic: "الملصق التعليمي التوضيحي", pronunciation: "دِر ليرن بوستر", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 399, german: "die Schulglocke", arabic: "جرس المدرسة اليدوي أو التلقائي", pronunciation: "دي شول غلوكه", group: "أدوات المعمل ومستلزمات الحصة" },
  { id: 400, german: "der Klassenlehrertisch", arabic: "مكتب رائد الفصل الرئيسي", pronunciation: "دِر كلاسين ليرر تيش", group: "أدوات المعمل ومستلزمات الحصة" },

  // مجموعة 22: الأنشطة اللاصفية والرحلات والفعاليات المدرسية
  { id: 401, german: "das Schulfestival", arabic: "المهرجان المدرسي الاحتفالي", pronunciation: "داس شول فيستيفال", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 402, german: "der Wandertag", arabic: "يوم المسير / الرحلة الخلوية", pronunciation: "دِر فاندير تاغ", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 403, german: "die Museumspädagogik", arabic: "التربية المتحفية والزيارات الثقافية", pronunciation: "دي موسيوم پيداغوغيك", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 404, german: "der Schullandheimaufenthalt", arabic: "الإقامة في المعسكر المدرسي الريفي", pronunciation: "داس شول لاند هايم أوفهالت", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 405, german: "die Theateraufführung", arabic: "العرض المسرحي المدرسي", pronunciation: "دي تيآتر أوففوريونغ", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 406, german: "das Schulkonzert", arabic: "الحفل الموسيقي المدرسي", pronunciation: "داس شول كونسيرت", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 407, german: "der Projekttag", arabic: "يوم المشاريع التفاعلية الجماعية", pronunciation: "دِر پروجه كت تاغ", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 408, german: "die Schulbibliothek", arabic: "مكتبة القراءة المدرسية الداخلية", pronunciation: "دي شول بيبليوتيك", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 409, german: "der Schachclub", arabic: "نادي الشطرنج المدرسي", pronunciation: "دِر شاخ كلوب", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 410, german: "die Foto-AG", arabic: "جماعة التصوير الفوتوغرافي المدرسي", pronunciation: "دي فوتو آيه غيه", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 411, german: "die Schulsprecherin", arabic: "المتحدثة الرسمية باسم اتحاد الطلاب", pronunciation: "دي شول شبرشرين", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 412, german: "das Schülermagazin", arabic: "المجلة الصحفية الطلابية الشهرية", pronunciation: "داس شيولر مغازين", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 413, german: "der Schüleraustausch", arabic: "برنامج تبادل الطلاب الخارجي", pronunciation: "دِر شيولر أوس تاوش", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 414, german: "die Erasmus-Förderung", arabic: "منحة برنامج إيراسموس الأوروبي للطلاب", pronunciation: "دي إيراسموس فيردرونغ", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 415, german: "das Studienjahr", arabic: "السنة الدراسية الأكاديمية الكاملة", pronunciation: "داس شتودين يار", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 416, german: "die Semesterferien", arabic: "إجازة ما بين الفصول الدراسية", pronunciation: "دي زيستر فيرين", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 417, german: "der Nachhilfekurs", arabic: "دورة التقوية والاستدراك الدراسية", pronunciation: "دِر ناخ هيلفه كورس", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 418, german: "die Hausaufgabenhilfe", arabic: "برنامج مساعدة حل الواجبات", pronunciation: "دي هاوس أوفغابن هيلفه", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 419, german: "der Schulabschlussball", arabic: "حفل تخرج وسهرة نهاية الدراسية", pronunciation: "دِر شول أبشلوس بال", group: "الأنشطة اللاصفية والرحلات المدرسية" },
  { id: 420, german: "das Bildungministerium", arabic: "وزارة التربية والتعليم", pronunciation: "داس بيلدونغس ميستر يوم", group: "الأنشطة اللاصفية والرحلات المدرسية" },

  // مجموعة 23: التجهيزات المكتبية ومستلزمات قاعة الدرس الإضافية
  { id: 421, german: "der Stuhlkreis", arabic: "دائرة الكراسي (جلسة النقاش الجماعي)", pronunciation: "دِر شتول كرايس", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 422, german: "die Stehlampe", arabic: "مصباح الإضاءة الأرضي في القاعة", pronunciation: "دي شتيلامپه", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 423, german: "das Rollo", arabic: "الستارة المعدنية / القماشية للنافذة", pronunciation: "داس رولو", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 424, german: "der Klassentür", arabic: "باب الفصل المدرسي", pronunciation: "دِر كلاسين تور", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 425, german: "das Fenster", arabic: "نافذة الفصل الدراسي", pronunciation: "داس فينشتر", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 426, german: "die Fensterbank", arabic: "حافة النافذة الداخلية", pronunciation: "دي فينشتر بانك", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 427, german: "der Heizkörper", arabic: "جهاز التدفئة في الفصل", pronunciation: "دِر هايتس كوربر", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 428, german: "die Zimmerpflanze", arabic: "نبات التزيين الداخلي للفصل", pronunciation: "دي تسيمر بلانتسه", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 429, german: "der Aktenordner", arabic: "ملف الأرشفة المكتبي الكبير", pronunciation: "دِر آكتين أوردنر", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 430, german: "die Briefablage", arabic: "حاملة وتنظيم الأوراق المكتبية الأفقية", pronunciation: "دي بريف أبلاغه", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 431, german: "der Tesafilm", arabic: "شريط اللصق الشفاف (التيب)", pronunciation: "دِر تيزافيلم", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 432, german: "die Schreibtischlampe", arabic: "مصباح مكتب المعلم", pronunciation: "دي شرايب تيش لامپه", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 433, german: "der Stiftehalter", arabic: "حاملة الأقلام المكتبية", pronunciation: "دِر شتيفتي هالتير", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 434, german: "die Pinnnadel", arabic: "دبوس التثبيت المعدني للوحات", pronunciation: "دي بين نادل", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 435, german: "der Wandkalender", arabic: "تقويم وحائط العام الدراسي", pronunciation: "دِر فاند كاليندر", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 436, german: "die Armbanduhr", arabic: "ساعة اليد الشخصية للطالب", pronunciation: "دي أرْمباند أور", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 437, german: "der Schultergurt", arabic: "حزام الحقيبة المدرسية المبطن", pronunciation: "دِر شولتر غورت", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 438, german: "die Sporttasche", arabic: "حقيبة الرياضة الكبيرة", pronunciation: "دي شپورت تاشه", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 439, german: "der Schwammhalter", arabic: "حامل إسفنجة السبورة", pronunciation: "دِر شوام هالتير", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },
  { id: 440, german: "die Pausenbrot", arabic: "شطيرة ووجبة الفسحة الخفيفة", pronunciation: "دي باوزين بروت", group: "التجهيزات المكتبية ومستلزمات قاعة الدرس" },

  // مجموعة 24: الأنشطة التفاعلية وأساليب التعلم المتقدمة
  { id: 441, german: "der Gruppenarbeitstisch", arabic: "طاولة العمل الجماعي المشترك", pronunciation: "دِر غروبن أربايتس تيش", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 442, german: "die Leseecke", arabic: "ركن القراءة الهادئة في الفصل", pronunciation: "دي ليزه إيكه", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 443, german: "das Lernspiel", arabic: "لعبة تعليمية تفاعلية", pronunciation: "داس ليرن شبيل", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 444, german: "die Rechenmaschine", arabic: "آلة الحساب الميكانيكية التقليدية", pronunciation: "دي ريشن ماشينه", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 445, german: "der Buchstabenkasten", arabic: "صندوق الحروف المغناطيسية التعليمية", pronunciation: "دِر بوخشتابين كاستن", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 446, german: "die Lautsprecheranlage", arabic: "نظام مكبرات الصوت المدرسية", pronunciation: "دي لاوت شبريشير أنلاغه", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 447, german: "der Schulhofzaun", arabic: "سياج وفناء ساحة المدرسة", pronunciation: "دِر شول هوف تساون", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 448, german: "das Sportfeld", arabic: "ملعب الرياضة الخارجي للمدرسة", pronunciation: "داس شپورت فيلد", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 449, german: "die Basketballanlage", arabic: "ملعب وسلة كرة السلة", pronunciation: "دي باسكت بال أنلاغه", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 450, german: "das Fußballtor", arabic: "مرمى / عارضة كرة القدم المدرسية", pronunciation: "داس فوس بال تور", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 451, german: "der Pausenhofkiosk", arabic: "كشك بيع الأغذية في ساحة الفسحة", pronunciation: "دِر باوزن هوف كيوسك", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 452, german: "die Trinkwasserstation", arabic: "محطة مياه الشرب الطلابية", pronunciation: "دي ترينك فاسر شتاتيون", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 453, german: "der Fahrradständer", arabic: "موقف / حامل دراجات الطلاب", pronunciation: "دِر فاهر راد شتندر", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 454, german: "das Lehrermilieu", arabic: "مجتمع وبيئة المعلمين الداخلية", pronunciation: "داس ليرر ميليو", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 455, german: "die Schulleiterin", arabic: "مديرة المدرسة", pronunciation: "دي شول لايتيرين", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 456, german: "der Stellvertretende Schulleiter", arabic: "نائب مدير المدرسة", pronunciation: "دِر شتيل فيرتريتيند الشول لايتر", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 457, german: "die Sekretärin", arabic: "سكرتيرة الإدارة المدرسية", pronunciation: "دي سيكريتارين", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 458, german: "das Schulsekretariat", arabic: "مكتب شؤون سكرتارية المدرسة", pronunciation: "داس شول سيكريتاريات", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 459, german: "der Hausmeister", arabic: "فني الصيانة / بواب المدرسة (العم سام)", pronunciation: "دِر هاوس ميستر", group: "الأنشطة التفاعلية وأساليب التعلم" },
  { id: 460, german: "die Schulreinigung", arabic: "فريق نظافة وصيانة المدرسة", pronunciation: "دي شول رايغونغ", group: "الأنشطة التفاعلية وأساليب التعلم" },

  // مجموعة 25: تفاصيل الحرم المدرسي والخدمات الإضافية
  { id: 461, german: "der Notausgang", arabic: "مخرج الطوارئ المدرسي", pronunciation: "دِر نوت أوسغانغ", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 462, german: "das Feuerlöscher", arabic: "طفاية الحريق المدرسية", pronunciation: "داس فويير لوشر", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 463, german: "die Feueralarm", arabic: "إنذار الحريق المدرسي", pronunciation: "دي فويير ألارم", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 464, german: "der Erste-Hilfe-Raum", arabic: "غرفة الإسعافات الأولية والعيادة", pronunciation: "دِر إيرست هيلفه راوم", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 465, german: "die Schrank", arabic: "خزانة حفظ أغراض الطلاب الفردية (اللوكر)", pronunciation: "دي شيرانك", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 466, german: "der Garderobenhaken", arabic: "شماعة وتعليقة المعاطف في المدخل", pronunciation: "دِر غارديروبين هاكن", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 467, german: "die Toilette", arabic: "دورة المياه / المرحاض المدرسي", pronunciation: "دي تواليت", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 468, german: "das Waschbecken", arabic: "حوض غسل اليدين", pronunciation: "داس واش بيكن", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 469, german: "der Seifenspender", arabic: "موزع الصابون السائل", pronunciation: "دِر زايڤين شبيندر", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 470, german: "der Handtuchhalter", arabic: "حامل المناشف الورقية", pronunciation: "دِر هاند توخ هالتير", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 471, german: "die Treppe", arabic: "درج / سلم المدرسة الطابق العلوي", pronunciation: "دي تريبه", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 472, german: "der Flur", arabic: "ممر وطرقة الفصل الدراسي", pronunciation: "دِر فلور", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 473, german: "das Treppengeländer", arabic: "درابزين السلم والحماية", pronunciation: "داس تريبين غيليندر", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 474, german: "die Dachterrasse", arabic: "سطح أو شرفة مبنى المدرسة", pronunciation: "دي داخ تيراسه", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 475, german: "der Schülerausweisautomat", arabic: "جهاز استخراج البطاقات الطلابية الآلي", pronunciation: "دِر شيولر أوسفايس أوتومات", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 476, german: "die Fundgrube", arabic: "صندوق المفقودات والمعثورات", pronunciation: "دي فوند غروبه", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 477, german: "der Kopierraum", arabic: "غرفة وطباعة وتصوير الأوراق", pronunciation: "دِر كوبير راوم", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 478, german: "das Lehrerzimmer", arabic: "غرفة استراحة المعلمين", pronunciation: "داس ليرر تسيمر", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 479, german: "die Schulklingel", arabic: "جرس الحصص الإلكتروني المبرمج", pronunciation: "دي شول كينغيل", group: "تفاصيل الحرم المدرسي والخدمات" },
  { id: 480, german: "der Schulabschlusszeugnis", arabic: "شهادة التخرج النهائية الرسمية", pronunciation: "دِر شول أبشلوس تسوغنس", group: "تفاصيل الحرم المدرسي والخدمات" },

  // مجموعة 26: الأنشطة اللاصفية والمعارض المدرسية
  { id: 481, german: "die Schulmesse", arabic: "المعرض المدرسي السنوي", pronunciation: "دي شول ميسه", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 482, german: "der Projektabschluss", arabic: "ختام وتسليم المشروع المدرسي", pronunciation: "دِر پروجه كت أبشلوس", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 483, german: "die Sportwettkämpfe", arabic: "المسابقات والبطولات الرياضية المدرسية", pronunciation: "دي شپورت فيتكيمبفه", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 484, german: "der Bundesjugendspiele", arabic: "الألعاب الرياضية الشبابية الفيدرالية الألمانية", pronunciation: "دِر بوندس يوغيند شبيله", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 485, german: "das Schullandheimspiel", arabic: "أنشطة وألعاب المعسكر المدرسي", pronunciation: "داس شول لاند هايم شبيل", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 486, german: "die Vorlesewettbewerb", arabic: "مسابقة القراءة والإلقاء التعبيرية", pronunciation: "دي فورليزه فيتكيبيرب", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 487, german: "der Mathematik-Wettbewerb", arabic: "مسابقة أولمبياد الرياضيات المدرسية", pronunciation: "دِر ماتيماتيك فيتكيبيرب", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 488, german: "die Forscher-AG", arabic: "جماعة الباحثين الصغار العلمية", pronunciation: "دي فورشر آيه غيه", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 489, german: "der Umwelt-Club", arabic: "نادي البيئة وحماية الطبيعة المدرسي", pronunciation: "دِر أومفيلت كلوب", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 490, german: "die Schülerfirma", arabic: "شركة الطلاب الافتراضية التجريبية", pronunciation: "دي شيولر فيرما", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 491, german: "der Berufsorientierungstag", arabic: "يوم التوجيه المهني واختيار الوظائف", pronunciation: "دِر بيروفس أورينتيرونغس تاغ", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 492, german: "die Ausbildungsmesse", arabic: "معرض فرص التدريب المهني والوظائف", pronunciation: "دي أوس بيلدونغس ميسه", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 493, german: "das Betriebspraktikum", arabic: "التدريب العملي الميداني داخل الشركات", pronunciation: "داس بيتريب براكتيكوم", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 494, german: "der Praktikumsbericht", arabic: "تقرير وتوثيق فترة التدريب الميداني", pronunciation: "دِر براكتيكومس بيريشت", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 495, german: "die Präsentationsprüfung", arabic: "امتحان العرض التقديمي الشفهي النهائي", pronunciation: "دي بريزينتاسيوناس بروفونغ", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 496, german: "der Schulpate", arabic: "برنامج دعم الطلاب الجدد من الطلاب القدامى", pronunciation: "دِر شول باته", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 497, german: "die Klassenrat", arabic: "مجلس الفصل والمناقشة الدورية", pronunciation: "دي كلاسين رات", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 498, german: "der Schülerrat", arabic: "مجلس اتحاد طلاب المدرسة العام", pronunciation: "دِر شيولير رات", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 499, german: "die Verbindungslehrer", arabic: "معلم التنسيق والوساطة الطلابية", pronunciation: "دي فيرتيندونغس ليرر", group: "الأنشطة اللاصفية والمعارض المدرسية" },
  { id: 500, german: "das Bildungssystem", arabic: "النظام والمنظومة التعليمية الشاملة", pronunciation: "داس بيلدونغس زيستيم", group: "الأنشطة اللاصفية والمعارض المدرسية" },

  // مجموعة 27: منظومة التعلم الرقمي والاختبارات الدولية
  { id: 501, german: "der Onlinetest", arabic: "الاختبار الإلكتروني عبر الإنترنت", pronunciation: "دِر أونلاين تست", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 502, german: "die Lernsoftware", arabic: "برمجيات وتطبيقات التعلم التعليمي", pronunciation: "دي ليرن صوفتفار", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 503, german: "der Webbrowser", arabic: "متصفح الإنترنت التعليمي", pronunciation: "دِر فيب بروسر", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 504, german: "die Passwort", arabic: "كلمة المرور لحساب المنصة التعليمية", pronunciation: "دي باسبورت", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 505, german: "das Benutzerkonto", arabic: "حساب المستخدم الشخصي على المنصة", pronunciation: "داس بينوتسر كونو", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 506, german: "der Downloadbereich", arabic: "قسم تحميل الملفات والكتب الدراسية", pronunciation: "دِر دونلود بيرايش", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 507, german: "die Upload-Funktion", arabic: "خاصية رفع وتسليم الواجبات الرقمية", pronunciation: "دي أوبلواد فويكتسيون", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 508, german: "das Videoportal", arabic: "بوابة الفيديو وشروحات الحصص المصورة", pronunciation: "داس فيديو پورتال", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 509, german: "der Chatraum", arabic: "غرفة الدردشة والمحادثة التعليمية", pronunciation: "دِر شات راوم", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 510, german: "die Forumsdiskussion", arabic: "مناقشات منتديات الحوار المدرسي", pronunciation: "دي فورومز ديسكوسيون", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 511, german: "der Sprachtest", arabic: "اختبار قياس القدرات اللغوية", pronunciation: "دِر شبراخ تست", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 512, german: "die Niveaustufe", arabic: "المستوى المعياري للغة (مثل A1, B2)", pronunciation: "دي نيفو شتوفه", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 513, german: "der Europäische Referenzrahmen", arabic: "الإطار الأوروبي المرجعي المشترك للغات", pronunciation: "دِر أوروبيشيس ريفيرينتس راهمن", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 514, german: "das Testzentrum", arabic: "مركز عقد واجتياز الاختبارات الدولية المعتمدة", pronunciation: "داس تست تسينتروم", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 515, german: "die Teilnahmebescheinigung", arabic: "شهادة ووثيقة إثبات حضور دورة أو ورشة عمل", pronunciation: "دي تايل ناهمه بشاينغونغ", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 516, german: "der Bildungsurlaub", arabic: "إجازة التفرغ التعليمي والثقافي", pronunciation: "دِر بيلدونغس أورلاوب", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 517, german: "die Erwachsenenbildung", arabic: "تعليم الكبار وتنمية المهارات المستمرة", pronunciation: "دي إيرفاسينن بيلدونغ", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 518, german: "das Fernstudium", arabic: "الدراسة والتعليم عن بُعد", pronunciation: "داس فيرن شتوديوم", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 519, german: "der Gasthörer", arabic: "مستمع زائر للمحاضرات بدون تسجيل رسمي", pronunciation: "دِر غاست هيرر", group: "منظومة التعلم الرقمي والاختبارات الدولية" },
  { id: 520, german: "die Bildungsberatung", arabic: "خدمات الاستشارة والتوجيه التعليمي المتخصص", pronunciation: "دي بيلدونغس بيرا تونغ", group: "منظومة التعلم الرقمي والاختبارات الدولية" },

  // مجموعة 28: تفاصيل قاعة الدرس التفاعلية والمكتبة الرقمية
  { id: 521, german: "der Lesesaal", arabic: "قاعة القراءة الهادئة بالمكتبة", pronunciation: "دِر ليزه زال", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 522, german: "die Fernleihe", arabic: "خدمة استعارة الكتب بين المكتبات", pronunciation: "دي فيرن لايه", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 523, german: "das Bibliothekskonto", arabic: "حساب استعارة الكتب الخاص بالمكتبة", pronunciation: "داس بيبليوتيكس كونو", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 524, german: "die Leihfrist", arabic: "مهلة وموعد إعادة الكتاب المستعار", pronunciation: "دي لايه فريست", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 525, german: "der Mahnbescheid", arabic: "إنذار وتأخير تسخير إعادة الكتاب", pronunciation: "داس مان بيشايد", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 526, german: "die Semesterkarte", arabic: "تذكرة ومشتريات الفصل الدراسية", pronunciation: "دي زيستر كارته", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 527, german: "der Bibliotheksausweis", arabic: "بطاقة كارنيه عضوية المكتبة", pronunciation: "دِر بيبليوتيكس أوسفايس", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 528, german: "die Buchbinder", arabic: "قسم تجلد وصيانة الكتب التالفة", pronunciation: "دي بوخ بيندير", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 529, german: "das Digitalarchiv", arabic: "الأرشيف الرقمي للمستندات والدراسات", pronunciation: "داس ديجيتال أركيف", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 530, german: "der E-Book-Reader", arabic: "قارئ الكتب الإلكترونية اللوحي", pronunciation: "دِر إي بوخ ريدر", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 531, german: "die Multimedia-Station", arabic: "محطة الوسائط المتعددة التعليمية", pronunciation: "دي مولتيميديا شتاتيون", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 532, german: "der Kopfhöreranschluss", arabic: "مخرج وقابس سماعة الأذن", pronunciation: "دِر كوب هيرر أنشلوس", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 533, german: "die Mikrofonanlage", arabic: "نظام وتوصيلات الميكروفون الصوتي", pronunciation: "دي ميكروفون أنلاغه", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 534, german: "das Klassenfoto", arabic: "صورة الفصل التذكارية الجماعية", pronunciation: "داس كلاسين فوتو", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 535, german: "der Schulausflug", arabic: "الرحلة والنزول الترفيهي المدرسي", pronunciation: "داس شول أوس فلويغ", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 536, german: "die Abschiedsfeier", arabic: "حفل الوداع أو تخرج الفصل", pronunciation: "دي أبشيدس فاير", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 537, german: "der Notenüberblick", arabic: "نظرة عامة على درجات وتقييمات الفصل", pronunciation: "دِر نوترن أوبربليك", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 538, german: "die Leistungssteigerung", arabic: "تحسن وتطور مستوى الأداء التحصيلي", pronunciation: "دي لايستونغس شتايغورنغ", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 539, german: "der Begabtenkurs", arabic: "دورة تنمية ورعاية المتفوقين والموهوبين", pronunciation: "دِر بغابتن كورس", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },
  { id: 540, german: "das Sprachzertifikat B2", arabic: "شهادة إتقان اللغة الألمانية مستوى B2", pronunciation: "داس شبراخ تسيرتيفيكات بيتسفاي", group: "تفاصيل قاعة الدرس والمكتبة الرقمية" },

  // مجموعة 29: محاور منصات البحث الرقمي والأكاديمي المتقدمة
  { id: 541, german: "der Zitationsindex", arabic: "مؤشر الاقتباسات والمراجع العلمية", pronunciation: "دِر تسيتاطيونس إنديكس", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 542, german: "die Fachdatenbank", arabic: "قاعدة البيانات التخصصية للأبحاث", pronunciation: "دي فاخ داتين بانك", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 543, german: "das Abstract", arabic: "الملخص العلمي للبحث أو الورقة", pronunciation: "داس أبستراكت", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 544, german: "der Peer-Review-Prozess", arabic: "عملية مراجعة الأقران العلمية المحكمة", pronunciation: "دِر بير ريفيو بروسيس", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 545, german: "die Open-Access-Zeitschrift", arabic: "مجلة الوصول المفتوح العلمية المجانية", pronunciation: "دي أوبن أكسيس تسايت شريفت", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 546, german: "das Forschungsstipendium", arabic: "منحة التفرغ والبحث العلمي المتقدم", pronunciation: "داس فورشونغس شتيبينديوم", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 547, german: "der Konferenzband", arabic: "كتاب وقائع وأبحاث المؤتمرات العلمية", pronunciation: "دِر كونفيرينتس باند", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 548, german: "die akademische Integrität", arabic: "النزاهة والأمانة الأكاديمية", pronunciation: "دي أكاديميشيس إنتيجريتات", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 549, german: "das Forschungsprojekt", arabic: "المشروع البحثي الميداني المشترك", pronunciation: "داس فورشونغس پرويه كت", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 550, german: "der Forschungsdatensatz", arabic: "مجموعة البيانات البحثية الخام", pronunciation: "داس فورشونغس داتين زاتس", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 551, german: "die Methodik", arabic: "منهجية وطرق البحث العلمي", pronunciation: "دي ميتوديك", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 552, german: "der Forschungsansatz", arabic: "المدخل والتوجه البحثي", pronunciation: "دِر فورشونغس أنزاتس", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 553, german: "die Hypothese", arabic: "الفرضية العلمية القابلة للاختبار", pronunciation: "دي هيپوتيزه", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 554, german: "die Datenanalyse", arabic: "تحليل البيانات والإحصاءات", pronunciation: "دي داتين أناليزه", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 555, german: "das empirische Resultat", arabic: "النتيجة التجريبية التطبيقية للبحث", pronunciation: "داس إمپيريشن ريزولتاز", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 556, german: "die wissenschaftliche Publikation", arabic: "النشر والاصدار العلمي المحكم", pronunciation: "دي فيسنشافتليشه پوپليكاسيون", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 557, german: "der Gutachter", arabic: "المحكّم العلمي / مقيّم الأبحاث", pronunciation: "دِر غوت أختر", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 558, german: "die akademische Laufbahn", arabic: "المسيرة والمسار الوظيفي الأكاديمي", pronunciation: "دي أكاديميشيس لاوف بان", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 559, german: "das Forschungsnetzwerk", arabic: "شبكة التعاون والعلاقات البحثية", pronunciation: "داس فورشونغس نيتس فيرك", group: "محاور منصات البحث الرقمي والأكاديمي" },
  { id: 560, german: "der Exzellenzcluster", arabic: "عنقود التميز والريادة البحثية", pronunciation: "دِر إكسيلينتس كلستر", group: "محاور منصات البحث الرقمي والأكاديمي" },

  // مجموعة 30: الإدارة المتقدمة للمكتبات الرقمية
  { id: 561, german: "das Online-Archiv", arabic: "الأرشيف الرقمي المفتوح عبر الإنترنت", pronunciation: "داس أونلاين أركيف", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 562, german: "die E-Mediathek", arabic: "مكتبة الوسائط الرقمية المرئية والصوتية", pronunciation: "دي إي ميديا تيك", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 563, german: "der Literaturnachweis", arabic: "توثيق وكشاف الأدبيات والمصادر", pronunciation: "دِر ليتيراتور ناخوايس", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 564, german: "die Digitalisat", arabic: "النسخة الرقمية المحفوظة للمخطوطات", pronunciation: "دي ديجيتاليزات", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 565, german: "der Online-Katalog", arabic: "الفهرس الرقمي للبحث بالمكتبة", pronunciation: "دِر أونلاين كاتالوغ", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 566, german: "das Literaturverwaltungsprogramm", arabic: "برنامج إدارة وتنظيم المراجع والكتب", pronunciation: "داس ليتيراتور فير فالتونغس پروگرام", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 567, german: "die Zitationsstil", arabic: "أسلوب ونظام توثيق الاقتباسات (مثل APA)", pronunciation: "دي تسيتاطيونس شتيل", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 568, german: "das Zitierkartell", arabic: "دليل وإرشادات قواعد الاقتباس العلمي", pronunciation: "داس تسيتر كارتيل", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 569, german: "die wissenschaftliche Schreibwerkstatt", arabic: "ورشة تدريب مهارات الكتابة الأكاديمية", pronunciation: "دي فيسنشافتليشه شرايب فيرك شتات", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 570, german: "der Korrektoratsservice", arabic: "خدمة التدقيق اللغوي والتصحيح الأكاديمي", pronunciation: "دِر كوريكتورات سيرفيس", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 571, german: "die Abschlussarbeitverteidigung", arabic: "جلسة مناقشة رسالة ومفاصل التخرج", pronunciation: "دي أبشلوس أربايت فيرتيدغونغ", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 572, german: "das Promotionsrecht", arabic: "حق وصلاحية منح درجة الدكتوراه", pronunciation: "داس بروموتسيونس ريشت", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 573, german: "die Ehrendoktorwürde", arabic: "درجة الدكتوراه الفخرية الشرفية", pronunciation: "دي إيهرين دوكتور وورده", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 574, german: "der Lehrstuhl", arabic: "الكرسي الأكاديمي الرئاسي للقسم", pronunciation: "دِر لير شتول", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 575, german: "die Habilitationsschrift", arabic: "أطروحة وبحث التأهيل للأستاذية", pronunciation: "دي هابيليتاسيونص شريفت", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 576, german: "das Sommersemester", arabic: "الفصل الدراسي الصيفي الجامعي", pronunciation: "داس زومر زيستر", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 577, german: "das Wintersemester", arabic: "الفصل الدراسي الشتوي الجامعي", pronunciation: "داس فينتر زيستر", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 578, german: "die Studierendenvertretung", arabic: "الممثلية والاتحاد العام للطلاب", pronunciation: "دي شتوديريندن فيرتريتونغ", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 579, german: "der Semesterstart", arabic: "بداية ونقاط انطلاق الفصل الدراسي", pronunciation: "دِر زيستر شتارت", group: "الإدارة المتقدمة للمكتبات الرقمية" },
  { id: 580, german: "das Bildungszertifikat", arabic: "الشهادة والوثيقة التعليمية الرسمية المعتمدة", pronunciation: "داس بيلدونغس تسيرتيفيكات", group: "الإدارة المتقدمة للمكتبات الرقمية" },

  // مجموعة 31: الفعاليات الدولية والورش الأكاديمية
  { id: 581, german: "der akademische Austausch", arabic: "التبادل الأكاديمي الدولي والعلمي", pronunciation: "دِر أكاديميشيس أوستاوش", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 582, german: "die Gastdozentur", arabic: "زمالة الأستاذ الزائر والمحاضر الخارجي", pronunciation: "دي غاست دوتسينتور", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 583, german: "das Forschungsstipendium", arabic: "منحة الأبحاث والدراسات المتقدمة", pronunciation: "داس فورشونغس شتيبينديوم", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 584, german: "die Summer School", arabic: "المدرسة الصيفية الدولية المكثفة", pronunciation: "دي زومر شول", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 585, german: "der Workshop", arabic: "ورشة العمل التدريبية التفاعلية", pronunciation: "دِر وركشوب", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 586, german: "das Fachsymposium", arabic: "الندوة والمؤتمر التخصصي العلمي", pronunciation: "داس فاخ سمپوسيوم", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 587, german: "die Keynote-Speaker", arabic: "المتحدث الرئيسي الافتتاحي في المؤتمر", pronunciation: "دي كي نوت سبيكر", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 588, german: "der Poster-Präsentation", arabic: "عرض الملصقات البحثية في المؤتمرات", pronunciation: "دِر بوستر بريزينتاسيون", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 589, german: "die Paneldiskussion", arabic: "حلقة النقاش الجماعية الحوارية", pronunciation: "دي پانيل ديسكوسيون", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 590, german: "das Forschungsnetz", arabic: "شبكة التعاون البحثي العالمي", pronunciation: "داس فورشونغس نيتس", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 591, german: "der Innovationshub", arabic: "مركز الابتكار والتطوير التعليمي", pronunciation: "دِر إينوفاتسيونس هوب", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 592, german: "die Start-up-Schule", arabic: "حضنة ريادة الأعمال والشركات الناشئة", pronunciation: "دي ستارت أب شوله", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 593, german: "das Gründerstipendium", arabic: "منحة رواد الأعمال والمبتكرين", pronunciation: "داس غروندير شتيبينديوم", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 594, german: "die Business-Plan-Prüfung", arabic: "تقييم واختبار خطة العمل التجاري", pronunciation: "دي بيزنس پلان بروفونغ", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 595, german: "der akademischer Grad", arabic: "الدرجة واللقب الأكاديمي الممنوح", pronunciation: "دِر أكاديميشيس غراد", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 596, german: "die Studienbescheinigung", arabic: "شهادة قيد وتأكيد الانتظام الدراسي", pronunciation: "دي شتودين بشاينغونغ", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 597, german: "das Rückmeldeformular", arabic: "استمارة وتأكيد تجديد قيد الفصل", pronunciation: "داس روك ميلده فورمولار", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 598, german: "die Studiengangsleitung", arabic: "إدارة وتنسيق البرنامج الدراسي", pronunciation: "دي شتودين غانغز لايتونغ", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 599, german: "der Modulverantwortliche", arabic: "المسؤول عن توصيف ومحتوى المادة", pronunciation: "دِر مودول فيرانتفورتليخه", group: "الفعاليات الدولية والورش الأكاديمية" },
  { id: 600, german: "das Credit-Point-System", arabic: "نظام الساعات المعتمدة والنقاط", pronunciation: "داس كريديت بونت زيستيم", group: "الفعاليات الدولية والورش الأكاديمية" },

  // مجموعة 32: تفاصيل إضافية في الحياة الأكاديمية والمكتبات
  { id: 601, german: "die Ausleihtheke", arabic: "منضدة وشباك إعارة الكتب", pronunciation: "دي أوسلايه تيهه", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 602, german: "der Rückgabeautomat", arabic: "جهاز إعادة الكتب الذاتي الآلي", pronunciation: "دِر روك غابه أوتومات", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 603, german: "die Selbstbedienungstheke", arabic: "منضدة الخدمة الذاتية للمكتبة", pronunciation: "دي زيلبست بيدينونغس تيهه", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 604, german: "das Kopierguthaben", arabic: "رصيد وطباعة الأوراق في المكتبة", pronunciation: "داس كوبير غوتهابن", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 605, german: "der Ausleihstatus", arabic: "حالة وتتبع الكتاب المستعار", pronunciation: "دِر أوسلايه شتاتوس", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 606, german: "die Magazinbibliothek", arabic: "مكتبة المخازن والأرشيف العتيق", pronunciation: "دي مغازين بيبليوتيك", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 607, german: "der Freihandbereich", arabic: "قسم الكتب المفتوحة للإطلاع الحر", pronunciation: "دِر فري هاند بيرايش", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 608, german: "die Präsenzbibliothek", arabic: "مكتبة المراجع والمطالعة الداخلية فقط", pronunciation: "دي بريزينتس بيبليوتيك", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 609, german: "das Bibliotheksportal", arabic: "بوابة المكتبة الرقمية الموحدة", pronunciation: "داس بيبليوتيكس پورتال", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 610, german: "der Katalogdienst", arabic: "خدمة الفهرسة والبحث المكتبي", pronunciation: "دِر كاتالوغ دينست", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 611, german: "die Lehrbuchsammlung", arabic: "مجموعة الكتب والمقررات الدراسية", pronunciation: "دي ليربوخ زاملونغ", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 612, german: "der Semesterapparat", arabic: "الرف المخصص لكتب الفصل الدراسي", pronunciation: "دِر زيستر أبارات", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 613, german: "die Sonderausstellung", arabic: "المعرض الخاص المؤقت بالمكتبة", pronunciation: "دي زوندر أوسشتيلونغ", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 614, german: "das Handschriftenarchiv", arabic: "أرشيف المخطوطات والوثائق النادرة", pronunciation: "داس هاند شريفتن أركيف", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 615, german: "der Mikrofilmleser", arabic: "جهاز قراءة وتحليل الميكروفيلم", pronunciation: "دِر ميكروفيلم ليزر", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 616, german: "die Digitalisierungsstelle", arabic: "قسم تحويل الأوراق إلى رقمية", pronunciation: "دي ديجيتاليزيرونغس شتيلي", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 617, german: "der Bibliotheksdirektor", arabic: "مدير ورئيس قطاع المكتبات", pronunciation: "دِر بيبليوتيكس ديريكتور", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 618, german: "die Bibliothekarin", arabic: "أخصائية وموظفة المكتبة", pronunciation: "دي بيبليوتيكارين", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 619, german: "das Bibliotheksgebäude", arabic: "مبنى المكتبة الرئيسي", pronunciation: "داس بيبليوتيكس غيبويوده", group: "تفاصيل الحياة الأكاديمية والمكتبات" },
  { id: 620, german: "der Campusgarten", arabic: "حديقة واستراحة الحرم الجامعي", pronunciation: "دِر كامپوس غارتن", group: "تفاصيل الحياة الأكاديمية والمكتبات" },

  // مجموعة 33: التدريب المهني والمصانع المدرسية
  { id: 621, german: "die Berufsschule", arabic: "المدرسة المهنية التطبيقية", pronunciation: "دي بيروفس شوله", group: "التدريب المهني والمصانع المدرسية" },
  { id: 622, german: "das Ausbildungszentrum", arabic: "مركز التدريب المهني المتخصص", pronunciation: "داس أوس بيلدونغس تسينتروم", group: "التدريب المهني والمصانع المدرسية" },
  { id: 623, german: "der Ausbilder", arabic: "مدرب وموجه ورشة العمل المهنية", pronunciation: "دِر أوسبيلدر", group: "التدريب المهني والمصانع المدرسية" },
  { id: 624, german: "die Lehrlingswerkstatt", arabic: "ورشة تدريب الصبية والعمال الجدد", pronunciation: "دي ليرلينغس فيركشتات", group: "التدريب المهني والمصانع المدرسية" },
  { id: 625, german: "der Ausbildungsnachweis", arabic: "دفتر وسجل توثيق التدريب المهني (التشبرت)", pronunciation: "دِر أوس بيلدونغس ناخوايس", group: "التدريب المهني والمصانع المدرسية" },
  { id: 626, german: "die Zwischenprüfung", arabic: "اختبار منتصف فترة التدريب المهني", pronunciation: "دي تسفيشن بروفونغ", group: "التدريب المهني والمصانع المدرسية" },
  { id: 627, german: "die Gesellenprüfung", arabic: "امتحان الحصول على درجة الصانع (الجيزيل)", pronunciation: "دي غيزيلين بروفونغ", group: "التدريب المهني والمصانع المدرسية" },
  { id: 628, german: "der Geselle", arabic: "الصانع المؤهل / الفني المساعد", pronunciation: "دِر غيزيله", group: "التدريب المهني والمصانع المدرسية" },
  { id: 629, german: "der Meisterbrief", arabic: "شهادة ولقب الأستاذ الحرفي المعتمد (الميستر)", pronunciation: "دِر ميستر بريف", group: "التدريب المهني والمصانع المدرسية" },
  { id: 630, german: "die Handwerkskammer", arabic: "غرفة الحرف والصناعات اليدوية", pronunciation: "دي هاندفيركس كامر", group: "التدريب المهني والمصانع المدرسية" },
  { id: 631, german: "die Industrie- und Handelskammer", arabic: "غرفة التجارة والصناعة (IHK)", pronunciation: "دي إيندوشتري أوند هانديلس كامر", group: "التدريب المهني والمصانع المدرسية" },
  { id: 632, german: "der duale Ausbildung", arabic: "نظام التدريب المهني المزدوج الألماني", pronunciation: "دِر دواله أوس بيلدونغ", group: "التدريب المهني والمصانع المدرسية" },
  { id: 633, german: "die Ausbildungsvergütung", arabic: "راتب ومكافأة فترة التدريب المهني", pronunciation: "دي أوس بيلدونغس فيرغوتونغ", group: "التدريب المهني والمصانع المدرسية" },
  { id: 634, german: "der Ausbildungsvertrag", arabic: "عقد التدريب المهني الرسمي", pronunciation: "دِر أوس بيلدونغس فريتراغ", group: "التدريب المهني والمصانع المدرسية" },
  { id: 635, german: "die Probezeit", arabic: "فترة التجربة والاختبار المهني الأولية", pronunciation: "دي بروبه تسايت", group: "التدريب المهني والمصانع المدرسية" },
  { id: 636, german: "der Werkstattunterricht", arabic: "حصة ودراسة التدريب داخل الورشة", pronunciation: "دِر فيركشتات أونترريشت", group: "التدريب المهني والمصانع المدرسية" },
  { id: 637, german: "die Unfallverhütung", arabic: "الوقاية من الحوادث وإجراءات الأمان المهني", pronunciation: "دي أونفال فيرهوتونغ", group: "التدريب المهني والمصانع المدرسية" },
  { id: 638, german: "die Schutzkleidung", arabic: "ملابس ومعدات الحماية والأمن الصناعي", pronunciation: "دي شوتس كلايدونغ", group: "التدريب المهني والمصانع المدرسية" },
  { id: 639, german: "der Arbeitsschutz", arabic: "السلامة والصحة المهنية للعمال والطلاب", pronunciation: "دِر أربايتس شوتس", group: "التدريب المهني والمصانع المدرسية" },
  { id: 640, german: "das Berufsinformationszentrum", arabic: "مركز معلومات الإرشاد المهني والوظيفي (BIZ)", pronunciation: "داس بيروفس إنفورماتسيونس تسينتروم", group: "التدريب المهني والمصانع المدرسية" },

  // مجموعة 34: معايير المهارات والتقييمات المهنية
  { id: 641, german: "die Fachkompetenz", arabic: "الكفاءة التخصصية الفنية", pronunciation: "دي فاخ كومپيتينتس", group: "معايير المهارات والتقييمات المهنية" },
  { id: 642, german: "die Sozialkompetenz", arabic: "الكفاءة الاجتماعية ومهارات التواصل", pronunciation: "دي زوتسيال كومپيتينتس", group: "معايير المهارات والتقييمات المهنية" },
  { id: 643, german: "die Methodenkompetenz", arabic: "الكفاءة المنهجية وطرق التفكير والتحليل", pronunciation: "دي ميتودين كومپيتينتس", group: "معايير المهارات والتقييمات المهنية" },
  { id: 644, german: "die Handlungskompetenz", arabic: "القدرة والكفاءة الشاملة على الأداء العملي", pronunciation: "دي هاندلونغس كومپيتينتس", group: "معايير المهارات والتقييمات المهنية" },
  { id: 645, german: "der Qualifikationsrahmen", arabic: "إطار تصنيف وتحديد المؤهلات", pronunciation: "دِر كفاليفيكاسيونص راهمن", group: "معايير المهارات والتقييمات المهنية" },
  { id: 646, german: "das Lernziel", arabic: "الهدف والغاية التعليمية المراد تحقيقيها", pronunciation: "داس ليرن تسیل", group: "معايير المهارات والتقييمات المهنية" },
  { id: 647, german: "die Erfolgskontrolle", arabic: "مراقبة وقياس مدى نجاح التحصيل", pronunciation: "دي إيرفولغس كونتصوله", group: "معايير المهارات والتقييمات المهنية" },
  { id: 648, german: "der Leistungsnachweis", arabic: "توحيد وإثبات مستويات الأداء", pronunciation: "دِر لايستونغس ناخوايس", group: "معايير المهارات والتقييمات المهنية" },
  { id: 649, german: "die Verhaltensnote", arabic: "درجة وسلوك التقويم السلوكي والأخلاقي", pronunciation: "دي فيرهالتينغس نوته", group: "معايير المهارات والتقييمات المهنية" },
  { id: 650, german: "das Zeugnisbüro", arabic: "مكتب شؤون استخراج وكتابة الشهادات", pronunciation: "داس تسوغنس بيورو", group: "معايير المهارات والتقييمات المهنية" },
  { id: 651, german: "die Begabtenförderung", arabic: "برنامج دعم ورعاية المتميزين", pronunciation: "دي بغابتن فيردرونغ", group: "معايير المهارات والتقييمات المهنية" },
  { id: 652, german: "der Schüleraustauschdienst", arabic: "خدمات وبرامج التبادل الطلابي", pronunciation: "دِر شيولر أوس تاوش دينست", group: "معايير المهارات والتقييمات المهنية" },
  { id: 653, german: "das Internatsleben", arabic: "حياة وأجواء الإقامة الداخلية المدرسية", pronunciation: "داس إينترناتس ليبن", group: "معايير المهارات والتقييمات المهنية" },
  { id: 654, german: "die Mensaleitung", arabic: "إدارة مطعم ومقصف الطلاب الجامعي", pronunciation: "دي مينسا لايتونغ", group: "معايير المهارات والتقييمات المهنية" },
  { id: 655, german: "der Campusplan", arabic: "خريطة وتصميم الحرم الجامعي", pronunciation: "دِر كامپوس پلان", group: "معايير المهارات والتقييمات المهنية" },
  { id: 656, german: "die Universitätsbibliothek", arabic: "المكتبة المركزية الكبرى للجامعة", pronunciation: "دي يونيفيرسيتيتس بيبليوتيك", group: "معايير المهارات والتقييمات المهنية" },
  { id: 657, german: "der Semesterferienkurs", arabic: "دورة وكورس إجازة الفصل الدراسي", pronunciation: "دِر زيستر فيرين كورس", group: "معايير المهارات والتقييمات المهنية" },
  { id: 658, german: "die Immatrikulationsbescheinigung", arabic: "شهادة وإفادة قيد التسجيل الجامعي الرسمي", pronunciation: "دي إيماتريكولاسيونص بشاينغونغ", group: "معايير المهارات والتقييمات المهنية" },
  { id: 659, german: "der Vorlesungsbeginn", arabic: "ساعة وموعد انطلاق وبداية المحاضرات", pronunciation: "دِر فورليزونغس بيكين", group: "معايير المهارات والتقييمات المهنية" },
  { id: 660, german: "das Bildungsnetzwerk", arabic: "شبكة التعاون التعليمي والأكاديمي الكبرى", pronunciation: "داس بيلدونغس نيتس فيرك", group: "معايير المهارات والتقييمات المهنية" },

  // مجموعة 35: الأجهزة الذكية والتقنيات الرقمية التعليمية
  { id: 661, german: "der Touchscreen", arabic: "شاشة اللمس التفاعلية التعليمية", pronunciation: "دِر تاتش شيرين", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 662, german: "die VR-Brille", arabic: "نظارة الواقع الافتراضي للتعليم (VR)", pronunciation: "دي فاو إير بريله", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 663, german: "das Augmented-Reality", arabic: "التقنية المعززة (الواقع المعزز AR)", pronunciation: "داس أوغمنتد ريالتيتي", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 664, german: "der 3D-Drucker", arabic: "طابعة الثلاثية الأبعاد (الـ 3D)", pronunciation: "دِر دراي دي دروكر", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 665, german: "die Roboter-AG", arabic: "نادي الروبوت والذكاء الاصطناعي", pronunciation: "دي روبوتر آيه غيه", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 666, german: "das Programmierwerkzeug", arabic: "أدوات لغة وبرمجة الحاسب التعليمية", pronunciation: "داس پروگرامير فيرك تسويغ", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 667, german: "der Coding-Kurs", arabic: "كورس ودورة البرمجة وتطوير البرمجيات", pronunciation: "دِر كودينغ كورس", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 668, german: "die Lern-Analytics", arabic: "تحليلات أداء ومستوى التعلم الذكي", pronunciation: "دي ليرن أناليتيكس", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 669, german: "das Content-Management-System", arabic: "نظام إدارة المحتوى التعليمي الرقمي", pronunciation: "داس كونتينت ماناجمنت زيستيم", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 670, german: "der Serverraum", arabic: "غرفة الخوادم والاتحادات الرقمية المركزية", pronunciation: "دِر سيرفر راوم", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 671, german: "die Firewall", arabic: "جدار الحماية وأمان شبكة المدرسة", pronunciation: "دي فايرفال", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 672, german: "das Backup-System", arabic: "نظام النسخ الاحتياطي للبيانات الدراسية", pronunciation: "داس باك أب زيستيم", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 673, german: "der Administrator", arabic: "مسؤول ومشرف شبكات النظم التعليمية", pronunciation: "دِر أدمينستراتور", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 674, german: "die IT-Support-Stelle", arabic: "قسم ومكتب الدعم الفني التقني", pronunciation: "دي إي تي سوبورت شتيلي", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 675, german: "das Intranet", arabic: "شبكة الاتصال الداخلي المغلقة بالمؤسسة", pronunciation: "داس إنترانت", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 676, german: "der Router", arabic: "جهاز توجيه شبكة الإنترنت (الروتر)", pronunciation: "دِر روتر", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 677, german: "die Glasfaserleitung", arabic: "خط وكابل الألياف الضوئية السريعة", pronunciation: "دي غلاس فازير لايتونغ", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 678, german: "der Datentenschutz", arabic: "حماية الخصوصية وأمان البيانات", pronunciation: "دِر داتين شوتس", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 679, german: "die Cyber-Security", arabic: "الأمن السيبراني والوقاية الرقمية", pronunciation: "دي سايبر سيكيوريتي", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },
  { id: 680, german: "das Smart-Campus-Projekt", arabic: "مشروع الحرم الجامعي الذكي المتكامل", pronunciation: "داس سمارت كامپوس پرويه كت", group: "الأجهزة الذكية والتقنيات الرقمية التعليمية" },

  // مجموعة 36: مصطلحات التخطيط والتطوير التعليمي
  { id: 681, german: "der Lehrplanentwurf", arabic: "مسودة ومقترح المنهج الدراسي الجديد", pronunciation: "دِر لير پلان إينتورف", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 682, german: "die Bildungsforschung", arabic: "بحوث ودراسات علوم تطوير التعليم", pronunciation: "دي بيلدونغس فورشونغ", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 683, german: "das Schulentwicklungsprojekt", arabic: "مشروع تطوير وتحسين أداء المدرسة", pronunciation: "داس شول إنتفيكلونغس پرويه كت", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 684, german: "die Qualitätssicherung", arabic: "ضمان الجودة الشاملة في المؤسسات", pronunciation: "دي كفاليتاتس شيتشونغ", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 685, german: "der Evaluierungsbericht", arabic: "تقرير التقييم والمتابعة الشاملة للأداء", pronunciation: "دِر إيفالويرونغس بيريشت", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 686, german: "die Akkreditierungsagentur", arabic: "هيئة الاعتماد الأكاديمي والمهني", pronunciation: "دي أكريديتيرونغس آغينتور", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 687, german: "das Siegel", arabic: "خاتم الاعتماد والتوثيق الرسمي للجودة", pronunciation: "داس زيغيل", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 688, german: "die Bildungsökonomie", arabic: "اقتصاديات التعليم وإدارة الميزانيات", pronunciation: "دي بيلدونغس إيكونومي", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 689, german: "der Bildungsfonds", arabic: "صندوق الدعم المالي والمنح التعليمية", pronunciation: "دِر بيلدونغس فوندز", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 690, german: "die Stiftungsuniversität", arabic: "الجامعة الوقفية الأهلية المستقلة", pronunciation: "دي شتيفتونغس يونيفيرسيتيت", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 691, german: "der Alumni-Verein", arabic: "رابطة ونادي خريجي الكلية والجامعة", pronunciation: "دِر ألومني فيراين", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 692, german: "die Spendenkampagne", arabic: "حملة التبرعات ودعم تطوير المرافق", pronunciation: "دي شپيندين كامباني", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 693, german: "das Stiftungsvermögen", arabic: "الأوقاف والأصول المالية للجامعة", pronunciation: "داس شتيفتونغس فيرموغن", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 694, german: "die Karriereberatung", arabic: "خدمات التوجيه والإرشاد المهني للتوظيف", pronunciation: "دي كارير بيرا تونغ", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 695, german: "der Job-Messe", arabic: "معرض وظائف وملتقى التوظيف الطلابي", pronunciation: "دِر جوب ميسه", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 696, german: "die Unternehmenskooperation", arabic: "التعاون والشراكة بين الجامعة والشركات", pronunciation: "دي أونترنهمينس كوبراتيون", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 697, german: "das Trainee-Programm", arabic: "برنامج التأهيل وتدريب الخريجين (تريني)", pronunciation: "داس ترينيه پروگرام", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 698, german: "der Direkteinstieg", arabic: "التوظيف والالتحاق المباشر بسوق العمل", pronunciation: "دِر ديريكت إينشتيغ", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 699, german: "die Berufsperspektive", arabic: "الآفاق المستقبلية والفرص الوظيفية", pronunciation: "دي بيروفس بيرسپيكتيفه", group: "مصطلحات التخطيط والتطوير التعليمي" },
  { id: 700, german: "das Bildungsziel", arabic: "الهدف والغاية الاستراتيجية للتعليم", pronunciation: "داس بيلدونغس تسیل", group: "مصطلحات التخطيط والتطوير التعليمي" },

  // مجموعة 37: قاعات الدرس المتقدمة وتجهيزات المحاضرات الإضافية
  { id: 701, german: "der Seminarraum", arabic: "قاعة الندوات والحلقات الدراسية الصغيرة", pronunciation: "دِر زيمينار راوم", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 702, german: "die Podiumsdiskussion", arabic: "مناقشة المنصة وحوار الخبراء العلني", pronunciation: "دي بوديومس ديسكوسيون", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 703, german: "das Mikrofonpult", arabic: "منصة التحدث المجهزة بالميكروفون", pronunciation: "داس ميكروفون بولت", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 704, german: "der Rednerpult", arabic: "منصة الخطابة والإلقاء", pronunciation: "دِر ريدنير بولت", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 705, german: "die Laserpointer", arabic: "قلم الليزر التوجيهي للعروض التقديمية", pronunciation: "دي لازير بواينتر", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 706, german: "das Whiteboard", arabic: "السبورة البيضاء الحديثة", pronunciation: "داس وايت بورد", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 707, german: "der Whiteboard-Marker", arabic: "أقلام السبورة البيضاء الملونة", pronunciation: "دِر وايت بورد ماركر", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 708, german: "die Flipchart", arabic: "لوحة الورق القلاب التعليمية (الفليب تشارت)", pronunciation: "دي فليب تشارت", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 709, german: "das Flipchart-Papier", arabic: "أوراق لوحة العرض القلاب", pronunciation: "داس فليب تشارت بابير", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 710, german: "der Moderationskoffer", arabic: "حقيبة أدوات إدارة وورش العمل والتدريب", pronunciation: "دِر موديراتسيونس كوفر", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 711, german: "die Moderationskarte", arabic: "بطاقات ورقية ملونة لتسجيل أفكار ورش العمل", pronunciation: "دي موديراتسيونس كارته", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 712, german: "der Klebepunkt", arabic: "نقاط اللصق الدائرية لتنظيم الأفكار", pronunciation: "دِر كليب بونكت", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 713, german: "die Pinnwandnadel", arabic: "دبابيس تثبيت اللوحات الفلينية", pronunciation: "دي بين فاند نادل", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 714, german: "der Overheadprojektor", arabic: "جهاز العرض العلوي الشفاف القديم", pronunciation: "دِر أوبرهايد پرو يكتور", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 715, german: "die Folie", arabic: "شرائح العرض البلاستيكية الشفافة", pronunciation: "دي فوليه", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 716, german: "der Aktenkasten", arabic: "صندوق وحافظة المستندات والملفات", pronunciation: "دِر آكتين كاستن", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 717, german: "die Schreibtischunterlage", arabic: "حافظة ومفرش سطح مكتب المعلم", pronunciation: "دي شرايب تيش أونترلاغه", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 718, german: "der Terminplaner", arabic: "مفكرة ومذكرة مواعيد واجتماعات المعلم", pronunciation: "دِر تيرمين پلانر", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 719, german: "die Abswesenheitsliste", arabic: "قائمة كشف رصد الغياب والحضور اليومي", pronunciation: "دي أبفيزنهايتس ليست", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },
  { id: 720, german: "das Klassenbuch", arabic: "سجل الفصل الدراسي الرسمي للرصد", pronunciation: "داس كلاسين بوخ", group: "قاعات الدرس المتقدمة وتجهيزات المحاضرات" },

  // مجموعة 38: الفعاليات الثقافية والتبادلية وبرامج المنح
  { id: 721, german: "der Kulturbeauftragte", arabic: "مسؤول ومنسق الأنشطة الثقافية بالمؤسسة", pronunciation: "دِر كولتور بيفراغتو", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 722, german: "die Städtepartnerschaft", arabic: "توأمة المدن والتبادل الثقافي المتبادل", pronunciation: "دي شتادتين بارتنرشافت", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 723, german: "das Kulturprogramm", arabic: "البرنامج والنشاط الثقافي المدرسي", pronunciation: "داس كولتور پروگرام", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 724, german: "die Sprachreise", arabic: "رحلة معسكر تعلم وإتقان اللغات بالخارج", pronunciation: "دي شبراخ رايزه", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 725, german: "der Gastfamilienaufenthalt", arabic: "الإقامة واستضافة الأسرة المضيفة بالخارج", pronunciation: "دِر غاست فاميلين أوفهالت", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 726, german: "die Gastfamilie", arabic: "الأسرة المضيفة للطالب المتبادل", pronunciation: "دي غاست فاميليه", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 727, german: "das DAAD-Stipendium", arabic: "منحة هيئة التبادل الأكاديمي الألماني (DAAD)", pronunciation: "داس داد شتيبينديوم", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 728, german: "die Begabtenförderungswerk", arabic: "مؤسسات والهيئات لرعاية ودعم الموهوبين", pronunciation: "دي بغابتن فيردرونغس فيرك", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 729, german: "der Lebenslauf", arabic: "السيرة الذاتية المهنية والأكاديمية (CV)", pronunciation: "دِر ليبينز لارف", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 730, german: "das Motivationsschreiben", arabic: "خطاب الدافع وحافز التقديم للمنحة", pronunciation: "داس موتيڤاتسيونس شرايبن", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 731, german: "das Empfehlungsschreiben", arabic: "خطاب التوصية والتزكية الأكاديمية", pronunciation: "داس إيمبفيلونغس شرايبن", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 732, german: "die Bewerbungsmappe", arabic: "ملف وحافظة أوراق التقديم والتوظيف", pronunciation: "دي بيفيربونغس ماپه", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 733, german: "das Vorstellungsgespräch", arabic: "مقابلة واختبار القبول الشخصي", pronunciation: "داس فورشتيلونغس غيشبريش", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 734, german: "die Eignungsprüfung", arabic: "اختبار صلاحية وتحديد الكفاءة للقبول", pronunciation: "دي إيغنونغس بروفونغ", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 735, german: "der Sprachtestnachweis", arabic: "إثبات وشهادة اجتياز اختبار اللغة", pronunciation: "دِر شبراخ تست ناخوايس", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 736, german: "die Visumbeantragung", arabic: "إجراءات التقديم واستخراج تأشيرة السفر", pronunciation: "دي فيزوم بيانتراغونغ", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 737, german: "das Studentenvisum", arabic: "تأشيرة ودراسة السفر الطلابي", pronunciation: "داس شتودنتن فيزوم", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 738, german: "die Auslandskrankenversicherung", arabic: "تأمين السفر الصحي الدولي للدراسة", pronunciation: "دي أوسلاندس كرانكن فيرتسيهرونغ", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 739, german: "der Studierendenausweis", arabic: "البطاقة الذكية وتخفيضات الطالب الدولية", pronunciation: "دِر شتوديريندن أوسفايس", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },
  { id: 740, german: "das Bildungsnetz", arabic: "شبكة مجتمع المعرفة والتعاون العلمي العالمي", pronunciation: "داس بيلدونغس نيتس", group: "الفعاليات الثقافية والتبادلية وبرامج المنح" },

  // مجموعة 39: أدوات المعمل الإلكتروني الحديث والتقنيات الرقمية المتطورة
  { id: 741, german: "der Digitale Messwerterfassung", arabic: "نظام تسجيل القراءات والقياسات الرقمية بالمعمل", pronunciation: "دِر ديجيتالس ميس فيرت إرفاسونغ", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 742, german: "die Sensor-Box", arabic: "صندوق واستشعار الحساسات الإلكترونية الدقيقة", pronunciation: "دي زينزور بوكس", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 743, german: "das Oszilloskop", arabic: "جهاز رسم واختبار الإشارات الكهربائية (الأوسيلوسكوب)", pronunciation: "داس أوسيليوسكوب", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 744, german: "der Funktionsgenerator", arabic: "مولد الوظائف والذبذبات الكهربائية بالمعمل", pronunciation: "دِر فويكتسيونس جينيراتور", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 745, german: "das Multimeter", arabic: "جهاز القياس المتعدد (الأفوميتر الرقمي)", pronunciation: "داس مولتيميتر", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 746, german: "der Lötstation", arabic: "محطة لحام الدوائر والمكونات الإلكترونية", pronunciation: "دِر لوت شتاتيون", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 747, german: "das Steckbrett", arabic: "لوحة تجارب وتوصيل الدوائر الكهربائية (البريد بورد)", pronunciation: "داس شتيك بريت", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 748, german: "der Mikrocontroller", arabic: "المتحكم الدقيق للأنظمة الذكية (مثل الأردوينو)", pronunciation: "دِر ميكروكونترولر", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 749, german: "die Elektronik-Komponenten", arabic: "المكونات والعناصر الإلكترونية التجريبية", pronunciation: "دي إلكترونيك كومپونينتن", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 750, german: "der Solarzellenkasten", arabic: "حقيبة ومعدات تجارب الخلايا الشمسية", pronunciation: "دِر زولار تسيلين كاستن", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 751, german: "die Windkraftanlage-Modell", arabic: "مجسم نموذج محطة توليد طاقة الرياح التعليمي", pronunciation: "دي فيندكرافت أنلاغه موديل", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 752, german: "der Brennstoffzellenkasten", arabic: "حقيبة تجارب خلايا الوقود الهيدروجيني", pronunciation: "دِر بريننشتوف تسيلين كاستن", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 753, german: "das Roboter-Kit", arabic: "مجموعة أجزاء تركيب الروبوت التعليمي", pronunciation: "داس روبوتر كيت", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 754, german: "der Lasersensor", arabic: "حساس واستشعار شعاع الليزر", pronunciation: "دِر لازير زينزور", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 755, german: "die Infrarotkamera", arabic: "كاميرا التصوير الحراري والأشعة تحت الحمراء", pronunciation: "دي إنفراشروت كاميرا", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 756, german: "das Spektrometer", arabic: "جهاز قياس وتحليل الطيف الضوئي", pronunciation: "داس شبيكتروميتر", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 757, german: "der Magnetrührer", arabic: "جهاز التقليب المغناطيسي للمحاليل المخبرية", pronunciation: "دِر ماغنيت رورر", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 758, german: "die Zentrifuge", arabic: "جهاز الطرد المركزي لفصل العينات", pronunciation: "دي تسينترينفوغ", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 759, german: "der Autoklav", arabic: "جهاز التعقيم بالبخار الضاغط (الأوتوكلاف)", pronunciation: "دِر أوتوكلاف", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },
  { id: 760, german: "das Laborjournal", arabic: "دفتر وسجل تدوين تجارب ونتائج المختبر", pronunciation: "داس لابور جورنال", group: "أدوات المعمل الإلكتروني الحديث والتقنيات" },

  // مجموعة 40: أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي
  { id: 761, german: "die Künstliche Intelligenz", arabic: "الذكاء الاصطناعي وتطبيقاته التعليمية (AI)", pronunciation: "دي كوينستليشه إنتليغينتس", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 762, german: "der KI-Lernassistent", arabic: "مساعد التعلم الذكي المعتمد على الذكاء الاصطناعي", pronunciation: "دِر كاي إي ليرن أسيستنت", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 763, german: "das Adaptive Lernen", arabic: "التعلم التكيفي المخصص لمستوى الطالب", pronunciation: "داس أداپتيڤه ليرنن", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 764, german: "die Spracherkennungssoftware", arabic: "برمجيات التقاط وتحديد التعرف الصوتي", pronunciation: "دي شبراخ إيركِنونغس صوفتفار", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 765, german: "das Automatisierte Feedback", arabic: "التقييم والرد الآلي الفوري على الواجبات", pronunciation: "داس أوتوماتيزيرته فيدباك", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 766, german: "der Lernfortschrittsbericht", arabic: "تقرير وتتبع تطور مستوى تقدم الطالب الذكي", pronunciation: "دِر ليرن فورتشريتس بيريشت", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 767, german: "die Personalisierte Bildung", arabic: "التعليم المخصص والفردي حسب القدرات", pronunciation: "دي بيرسوناليزيرته بيلدونغ", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 768, german: "das Digitale Klassenzimmer", arabic: "حجرة الفصل الدراسي الرقمي بالكامل", pronunciation: "داس ديجيتالس كلاسين تسيمر", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 769, german: "der Interaktive Stift", arabic: "القلم الإلكتروني التفاعلي للسبورة الذكية", pronunciation: "دِر إينتراكتیڤه شتيفت", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 770, german: "die Cloud-Plattform", arabic: "منصة السحابة الإلكترونية للمؤسسة التعليمية", pronunciation: "دي كلاود بلاتفورم", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 771, german: "der Virtuelle Klassenraum", arabic: "الفصل الافتراضي لتعلم عن بُعد", pronunciation: "دِر فيرتويلي كلاسين راوم", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 772, german: "das Digitale Portfolio", arabic: "حقيبة وإنجاز الأعمال الرقمية للطالب", pronunciation: "داس ديجيتالس پورتفوليو", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 773, german: "der Online-Prüfungsproctoring", arabic: "نظام مراقبة الامتحانات الإلكترونية عن بُعد", pronunciation: "دِر أونلاين بروفونغس بروكوتيرينغ", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 774, german: "die Blended-Learning-Methode", arabic: "أسلوب ونظام التعلم المدمج (المختلط)", pronunciation: "دي بلنديد ليرنينغ ميتوده", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 775, german: "das Microlearning", arabic: "التعلم المصغر السريع والمكثف", pronunciation: "داس مايكروليرنينغ", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 776, german: "der Gamification-Ansatz", arabic: "أسلوب التلعيب في المناهج التعليمية", pronunciation: "دِر غاميفيکاسيون أنزاتس", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 777, german: "das E-Portfolio", arabic: "الملف الإلكتروني الشامل لانجازات الطالب", pronunciation: "داس إي پورتفوليو", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 778, german: "der Bildungsanalytiker", arabic: "محلل البيانات ومنظومات الأداء التعليمي", pronunciation: "دِر بيلدونغس أناليتيكر", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 779, german: "die Intelligente Lernumgebung", arabic: "بيئة ومحيط التعلم الذكي المتطور", pronunciation: "دي إنتليغينته ليرن أومغيبونغ", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },
  { id: 780, german: "das Zukunftszentrum für Bildung", arabic: "مركز مستقبل التعليم والابتكار المعرفي", pronunciation: "داس تسوكونفتس تسينتروم فور بيلدونغ", group: "أنظمة وتقنيات الفصل الذكي والذكاء الاصطناعي" },

  // مجموعة 41: أحدث تقنيات التعليم الرقمي المتقدم (جديدة كلياً)
  { id: 781, german: "der Sprachgenerator", arabic: "مولد النصوص الصوتية بالذكاء الاصطناعي", pronunciation: "دِر شبراخ جينيراتور", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 782, german: "die Lern-Applikation", arabic: "التطبيق التعليمي الذكي للهواتف", pronunciation: "دي ليرن أبليكاسيون", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 783, german: "das Digitale Notizbuch", arabic: "دفتر الملاحظات الرقمي السحابي", pronunciation: "داس ديجيتالس نوتيتس بوخ", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 784, german: "der Online-Workshop", arabic: "ورشة العمل التدريبية التفاعلية عبر الإنترنت", pronunciation: "دِر أونلاين وركشوب", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 785, german: "die Webinar-Plattform", arabic: "منصة الندوات والمحاضرات المرئية (الويبينار)", pronunciation: "دي فيبينار بلاتفورم", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 786, german: "das E-Assessment", arabic: "نظام التقييم والاختبار الإلكتروني المتطور", pronunciation: "داس إي أيسيسمنت", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 787, german: "der Lernfortschritt", arabic: "مؤشر تقدم وتحصيل الطالب الدراسي", pronunciation: "دِر ليرن فورتشريت", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 788, german: "die Online-Sprechstunde", arabic: "الساعات المكتبية الافتراضية عبر الإنترنت", pronunciation: "دي أونلاين شبريخ شتونده", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 789, german: "das Digitale Klassenzimmer-Netzwerk", arabic: "شبكة الفصول الدراسية الرقمية المتكاملة", pronunciation: "داس ديجيتالس كلاسين تسيمر نيتس فيرك", group: "أحدث تقنيات التعليم الرقمي المتقدم" },
  { id: 790, german: "der KI-Tutor", arabic: "المعلم والمعيد الافتراضي المعتمد على الذكاء الاصطناعي", pronunciation: "دِر كاي إي توتور", group: "أحدث تقنيات التعليم الرقمي المتقدم" },

  // مجموعة 42: معدات وبرمجيات المعامل الإلكترونية المتقدمة (جديدة كلياً)
  { id: 791, german: "der Elektronik-Simulator", arabic: "برنامج محاكاة الدوائر الإلكترونية بالمعمل", pronunciation: "دِر إلكترونيك سيمولاتور", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 792, german: "die Virtuelle Laborumgebung", arabic: "بيئة المختبر والمعمل الافتراضي ثلاثي الأبعاد", pronunciation: "دي فيرتويلي لابور أومغيبونغ", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 793, german: "das Datenlogger-System", arabic: "نظام تسجيل وتخزين البيانات المخبرية الآلي", pronunciation: "داس داتين لوغر زيستيم", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 794, german: "der Frequenzzähler", arabic: "جهاز عد القياس والترددات الإلكترونية", pronunciation: "دِر فريكوينتس تسيلير", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 795, german: "die Signalquelle", arabic: "مصدر توليد الإشارات والذبذبات المخبرية", pronunciation: "دي زيكنال كفيله", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 796, german: "das Logik-Analysegerät", arabic: "جهاز تحليل المنظومات والدوائر الرقمية", pronunciation: "داس لوجيك أناليزه غيرات", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 797, german: "der Netzteil", arabic: "مصدر ومنظم التغذية الكهربائية بالمعمل", pronunciation: "دِر نيتستايل", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 798, german: "die Schانتافيل", arabic: "لوحة التحكم الرئيسية لتجربة المعمل", pronunciation: "دي شالت تافل", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 799, german: "das Messkabel", arabic: "كابل وقابس أجهزة القياس المخبرية", pronunciation: "داس ميس كابل", group: "معدات وبرمجيات المعامل الإلكترونية" },
  { id: 800, german: "der Versuchsaufbau", arabic: "تركيب وتجهيز التجربة العلمية بالمختبر", pronunciation: "دِر فيرزوخس أوفباو", group: "معدات وبرمجيات المعامل الإلكترونية" },

  // مجموعة 43: مهارات التواصل الأكاديمي والبحث الرقمي الحديث (جديدة كلياً)
  { id: 801, german: "der Diskussionsbeitrag", arabic: "المشاركة والمداخلة في النقاش الأكاديمي", pronunciation: "دِر ديسكوسيونز بايتراغ", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 802, german: "die Fragestellung", arabic: "صياغة وتحديد إشكالية البحث العلمي", pronunciation: "دي فراغه شتيلونغ", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 803, german: "das Forschungsdesign", arabic: "تصميم وإطار منهجية البحث العلمي", pronunciation: "داس فورشونغس ديسين", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 804, german: "der Literaturüberblick", arabic: "مسح واستعراض الأدبيات والدراسات السابقة", pronunciation: "دِر ليتيراتور أوبربليك", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 805, german: "die Stichprobe", arabic: "عينة البحث الإحصائية والتطبيقية", pronunciation: "دي شتيش بروبه", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 806, german: "das Umfrageformular", arabic: "استمارة استبيان جمع البيانات البحثية", pronunciation: "داس أومفراغه فورمولار", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 807, german: "der Fragebogen", arabic: "استبيان البحث الميداني", pronunciation: "دِر فراغه بوغن", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 808, german: "die Datenerhebung", arabic: "عملية جمع وتخزين بيانات البحث", pronunciation: "دي داتين إيرهيبونغ", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 809, german: "das Statistikprogramm", arabic: "برنامج التحليل الإحصائي للأبحاث (مثل SPSS)", pronunciation: "داس ستاتيستيك پروگرام", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },
  { id: 810, german: "der Forschungsberichtsschreiber", arabic: "معد وكتابة تقرير ومستند البحث العلمي", pronunciation: "دِر فورشونغس بيريشتس شرايبير", group: "مهارات التواصل الأكاديمي والبحث الرقمي" },

  // مجموعة 44: الإدارة الذكية لشؤون الطلاب والمنصات (جديدة كلياً)
  { id: 811, german: "das Online-Studiensekretariat", arabic: "مكتب شؤون الطلاب الرقمي عبر الإنترنت", pronunciation: "داس أونلاين شتودين سيكريتاريات", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 812, german: "die Leistungsübersicht", arabic: "كشف ومتابعة ملخص الأداء والدرجات", pronunciation: "دي لايستونغس أوبرزيشت", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 813, german: "der Online-Studienplatz", arabic: "طلب وحجز المقعد الدراسي الإلكتروني", pronunciation: "دِر أونلاين شتودين بلاتس", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 814, german: "die Semester-Rückmeldung", arabic: "تأكيد وتجديد التسجيل للفصل الدراسي", pronunciation: "دي زيستر روك ميلدونغ", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 815, german: "das Studienkonto", arabic: "حساب الرسوم والمصروفات الدراسية للطالب", pronunciation: "داس شتودين كونو", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 816, german: "der Bibliotheks-Account", arabic: "حساب العضوية الرقمي بالمكتبة الجامعية", pronunciation: "دِر بيبليوتيكس أكونت", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 817, german: "die Campus-Card", arabic: "بطاقة الحرم الجامعي الذكية متعددة الاستخدامات", pronunciation: "دي كامپوس كارد", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 818, german: "das Mensa-Guthaben", arabic: "رصيد ومحفظة مطعم ومقصف الطلاب", pronunciation: "داس مينسا غوتهابن", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 819, german: "der Studierenden-Support", arabic: "خدمات مساعدة ودعم الطلاب المستجدين", pronunciation: "دِر شتوديريندن سوبورت", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },
  { id: 820, german: "die Studienberatungsstelle", arabic: "مركز ومكتب الإرشاد والتوجيه الدراسي", pronunciation: "دي شتودين بيرا تونغس شتيلي", group: "الإدارة الذكية لشؤون الطلاب والمنصات" },

  // مجموعة 45: بيئات التعاون الافتراضي والمنصات السحابية (جديدة كلياً)
  { id: 821, german: "der Cloud-Workspace", arabic: "مساحة العمل السحابية المشتركة للمجموعات", pronunciation: "دِر كلاود فيرك سبايس", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 822, german: "die Online-Zusammenarbeit", arabic: "التعاون والعمل المشترك عبر الإنترنت", pronunciation: "دي أونلاين تسوزامن أربايت", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 823, german: "das Dokumenten-Sharing", arabic: "خاصية مشاركة وفتح الملفات المدرسية", pronunciation: "داس دوكومينتن شيرينغ", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 824, german: "der Echtzeit-Chat", arabic: "الدردشة الفورية والمحادثة الحية المباشرة", pronunciation: "دِر إيشت تسايت شات", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 825, german: "die Bildschirm-Freigabe", arabic: "خاصية مشاركة وعرض شاشة الحاسوب", pronunciation: "دي بيلد شيرم فرايغا به", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 826, german: "das Digitale Whiteboard", arabic: "السبورة واللوحة الرقمية التشاركية عبر الشبكة", pronunciation: "داس ديجيتالس وايت بورد", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 827, german: "der Breakout-Room", arabic: "غرف العمل الجانبية المصغرة بالاجتماع الافتراضي", pronunciation: "دِر بريك آوت راوم", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 828, german: "die Umfrage-Funktion", arabic: "خاصية ووسيلة إجراء التصويت واستطلاع الأراء", pronunciation: "دي أومفراغه فويكتسيون", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 829, german: "das Meeting-Protokoll", arabic: "محضر وتوثيق وقائع الاجتماع الافتراضي", pronunciation: "داس ميتينغ پروتوكول", group: "بيئات التعاون الافتراضي والمنصات السحابية" },
  { id: 830, german: "der Online-Terminplaner", arabic: "منظم ومجدول المواعيد والاجتماعات الرقمية", pronunciation: "دِر أونلاين تيرمين پلانر", group: "بيئات التعاون الافتراضي والمنصات السحابية" },

  // مجموعة 46: الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة (جديدة كلياً)
  { id: 831, german: "der Coding-Club", arabic: "نادي البرمجة وتطوير التطبيقات المدرسي", pronunciation: "دِر كودينغ كلوب", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 832, german: "die Webdesign-AG", arabic: "جماعة تصميم وتطوير مواقع الإنترنت المدرسية", pronunciation: "دي ويبديزاين آيه غيه", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 833, german: "das Hacker-Space", arabic: "مختبر ونادي ابتكار وتطوير التكنولوجيا للشباب", pronunciation: "داس هاكر سپايس", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 834, german: "der Maker-Space", arabic: "مساحة ومعمل الابتكار والصنع اليدوي والتكنولوجي", pronunciation: "داس ميكر سپايس", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 835, german: "die Jugend-forscht-AG", arabic: "جماعة ومسابقة (الشباب يبحثون ويفكرون)", pronunciation: "دي يوغيند فورشت آيه غيه", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 836, german: "das Schülerlabor", arabic: "معمل وتجربة العلوم المخصصة للطلاب والمدرسين", pronunciation: "داس شيولر لابور", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 837, german: "der Wissenschaftstag", arabic: "يوم العلم والمعارض والمشاريع الاستكشافية", pronunciation: "دِر فيسنشافتس تاغ", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 838, german: "die Lange Nacht der Wissenschaften", arabic: "فعالية الليلة الطويلة للعلوم والأبحاث بالجامعات", pronunciation: "دي لانغه ناخت دير فيسنشافتن", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 839, german: "das Science-Slam", arabic: "مسابقة وعروض السرد العلمي المبسط والممتع", pronunciation: "داس سايانس سلام", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },
  { id: 840, german: "der Tag der offenen Tür", arabic: "يوم الأبواب المفتوحة للتعريف بالمدرسة أو الجامعة", pronunciation: "دِر تاغ دير أوفينين تور", group: "الأنشطة اللامنهجية الرقمية ومجتمعات المعرفة" },

  // مجموعة 47: أدوات الكتابة والتوثيق الأكاديمي المتقدم (جديدة كلياً)
  { id: 841, german: "die Fussnote", arabic: "الهامش والحاشية السفلية بالبحث العلمي", pronunciation: "دي فوس نوته", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 842, german: "das Inhaltsverzeichnis", arabic: "فهرس محتويات وموضوعات الكتاب أو البحث", pronunciation: "داس إنهالتس فيرتسايخنيس", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 843, german: "die Abbildungsverzeichnis", arabic: "فهرس وكشاف الأشكال التوضيحية والصور", pronunciation: "دي أبيلدونغس فيرتسايخنيس", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 844, german: "das Tabellenverzeichnis", arabic: "فهرس الجداول والبيانات الإحصائية بالبحث", pronunciation: "داس تابيلين فيرتسايخنيس", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 845, german: "der Anhang", arabic: "ملحق المراجع والبيانات الإضافية للبحث", pronunciation: "دِر أنهاغ", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 846, german: "die Eidesstattliche Erklärung", arabic: "إقرار وتعهد الشرف والأمانة العلمية للبحث", pronunciation: "دي إيديش شتاتليشه إركليرونغ", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 847, german: "das Deckblatt", arabic: "غلاف وواجهة البحث أو الرسالة الأكاديمية", pronunciation: "داس ديك بلات", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 848, german: "der Zusammenfassung", arabic: "الخلاصة والملخص الشامل للأطروحة", pronunciation: "دِر تسوزامين فاسوغ", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 849, german: "die Einleitung", arabic: "مقدمة وتمهيد البحث العلمي", pronunciation: "دي آين ليتونغ", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 850, german: "der Hauptteil", arabic: "المتن والفصل الرئيسي للبحث والتحليل", pronunciation: "دِر هاوبت تايل", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 851, german: "die Schlussbetrachtung", arabic: "الخاتمة والتوصيات الختامية للبحث", pronunciation: "داس شلوس بيتر اختونغ", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 852, german: "das Korrektorat", arabic: "عملية ومهمة التدقيق والضبط اللغوي", pronunciation: "داس كوريكتورات", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 853, german: "der Satzspiegel", arabic: "تخطيط وتنسيق مساحة الصفحة والطباعة", pronunciation: "دِر زاتس شبيغل", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 854, german: "die Formatvorlage", arabic: "نموذج وقالب تنسيق المستندات والبحوث", pronunciation: "دي فورمات فورلاغه", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 855, german: "das Textverarbeitungsprogramm", arabic: "برنامج معالجة النصوص وكتابة البحوث (مثل وورد)", pronunciation: "داس تيكست فيراربايتونغس پروگرام", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 856, german: "der PDF-Reader", arabic: "قارئ ملفات المستندات الرقمية (بي دي إف)", pronunciation: "دِر بيديإف ريدر", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 857, german: "die Druckversion", arabic: "النسخة القابلة للطباعة من المستند", pronunciation: "دي دروك فيرسيون", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 858, german: "das Online-Manuskript", arabic: "المخطوطة والمسودة الرقمية للبحث", pronunciation: "داس أونلاين مانوسكريبت", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 859, german: "der Peer-Reviewer", arabic: "المرجّع والمحكّم العلمي للنشر المحكم", pronunciation: "دِر بير ريفيور", group: "أدوات الكتابة والتوثيق الأكاديمي" },
  { id: 860, german: "das Publikationsorgan", arabic: "المنبر والمنصة الرسمية لنشر الأبحاث العلمية", pronunciation: "داس پوپليكاسيونص أورغان", group: "أدوات الكتابة والتوثيق الأكاديمي" }

  // مجموعة 48: استراتيجيات وتقنيات التعلم الحديثة والمتطورة (جديدة كلياً)
  ,{ id: 861, german: "der interaktive Bildschirm", arabic: "الشاشة الرقمية التفاعلية بالفصل", pronunciation: "دِر إينتراكتيفه بيلدشيرم", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 862, german: "die Online-Präsentation", arabic: "العرض التقديمي المباشر عبر الإنترنت", pronunciation: "دي أونلاين بريزينتاسيون", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 863, german: "das Digitale Klassenbuch", arabic: "سجل الفصل الدراسي الإلكتروني السحابي", pronunciation: "داس ديجيتالس كلاسين بوخ", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 864, german: "der virtuelle Assistent", arabic: "المساعد الشخصي الذكي للتعلم", pronunciation: "دِر فيرتويلي أسيستنت", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 865, german: "die Lernplattform-App", arabic: "تطبيق المنصة التعليمية الرقمية للهواتف الذكية", pronunciation: "دي ليرن بلاتفورم أب", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 866, german: "das Online-Lernspiel", arabic: "لعبة التعلم والتدريب عبر الإنترنت", pronunciation: "داس أونلاين ليرنشبيل", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 867, german: "der Sprachkurs", arabic: "دورة وكورس تدريب وتعلم اللغات", pronunciation: "دِر شبراخ كورس", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 868, german: "die Lernsoftware-Lizenz", arabic: "رخصة استخدام برمجيات وتطبيقات التعلم", pronunciation: "دي ليرن صوفتفار ليتسينتس", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 869, german: "das Online-W Wörterbuch", arabic: "القاموس والمعجم الرقمي عبر الإنترنت", pronunciation: "داس أونلاين فورتربوخ", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },
  { id: 870, german: "der Multimedia-Leرحلاغ", arabic: "الجولة الاستكشافية الرقمية المتعددة الوسائط", pronunciation: "دِر مولتيميديا ليربلاج", group: "استراتيجيات وتقنيات التعلم الحديثة والمتطورة" },

  // مجموعة 49: التجهيزات المعملية والمعدات التخصصية المتقدمة (جديدة كلياً)
  { id: 871, german: "der elektronische Messschieber", arabic: "القدمة ذات الورنية الإلكترونية الرقمية", pronunciation: "دِر إلكترونيشيه ميس شيبر", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 872, german: "die digitale Feinwaage", arabic: "الميزان الحساس الرقمي الدقيق للغاية", pronunciation: "دي ديجيتاله فاينفاغه", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 873, german: "das Infrarot-Thermometer", arabic: "مقياس الحرارة الرقمي بالاشعة تحت الحمراء", pronunciation: "داس إنفراشروت تيرموميتر", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 874, german: "der pH-Meter", arabic: "جهاز قياس ودرجة الحموضة والقلوية (البي إه)", pronunciation: "دِر پي هاج ميتر", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 875, german: "die UV-Lampe", arabic: "مصباح أشعة فوق البنفسجية المخبري", pronunciation: "دي فاو في لامپه", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 876, german: "das Ultraschallbad", arabic: "جهاز التنظيف والحمام بالموجات فوق الصوتية", pronunciation: "داس أولتراشال باد", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 877, german: "der Magnetrührer mit Heizung", arabic: "جهاز التقليب المغناطيسي المزود بالتسخين", pronunciation: "دِر ماغنيت رورر ميت هايزونغ", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 878, german: "die Laborpumpe", arabic: "مضخة تفريغ وسحب السوائل والغازات المعملية", pronunciation: "دي لابور بومپه", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 879, german: "das Gasventil", arabic: "صمام ومحبس الغاز الطبيعي بالمعمل", pronunciation: "داس غاس فينتيل", group: "التجهيزات المعملية والمعدات التخصصية" },
  { id: 880, german: "der Abzugsschrank", arabic: "خزانة وسحب الابخرة والغازات السامة بالمعمل", pronunciation: "داس أبزوغس شيرانك", group: "التجهيزات المعملية والمعدات التخصصية" },

  // مجموعة 50: مهارات القيادة والريادة الأكاديمية والمدرسية (جديدة كلياً)
  { id: 881, german: "das Schulmanagement", arabic: "إدارة وإستراتيجيات القيادة المدرسية", pronunciation: "داس شول ماناجمنت", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 882, german: "die Qualitätsentwicklung", arabic: "تطوير وتحسين جودة الأداء التعليمي", pronunciation: "دي كفاليتاتس إنتفيكلونغ", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 883, german: "der Bildungscontrolling", arabic: "رقابة وتقييم ومتابعة الميزانيات والبرامج", pronunciation: "دِر بيلدونغس كونترولينغ", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 884, german: "die Krisenprävention", arabic: "إدارة الأزمات وخطط الوقاية المدرسية", pronunciation: "دي كريزن بريفينتسيون", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 885, german: "das Konfliktmanagement", arabic: "إدارة وفض النزاعات والتوترات بالفصل", pronunciation: "داس كونفليكت ماناجمنت", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 886, german: "die Elternarbeit", arabic: "برامج وخطط التعاون مع أولياء الأمور", pronunciation: "دي إيلترن أربايت", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 887, german: "der Schulsozialdienst", arabic: "خدمات الرعاية الاجتماعية والدعم المدرسي", pronunciation: "دِر شول زوتسيال دينست", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 888, german: "die Studien- und Berufsberatung", arabic: "مركز التوجيه والإرشاد المهني والجامعي", pronunciation: "دي شتودين أوند بيروفس بيرا تونغ", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 889, german: "das Inklusionskonzept", arabic: "خطة وبرنامج دمج ذوي الاحتياجات الخاصة", pronunciation: "داس إينكلوزيونس كونسيپت", group: "مهارات القيادة والريادة الأكاديمية" },
  { id: 890, german: "die Schulentwicklungsplan", arabic: "خطة وتطوير استراتيجية المدرسة المستقبلية", pronunciation: "دي شول إنتفيكلونغس پلان", group: "مهارات القيادة والريادة الأكاديمية" },

  // مجموعة 51: محاور البيئة الرقمية السحابية والمنصات التفاعلية (جديدة كلياً)
  { id: 891, german: "der Online-Campus", arabic: "الحرم الجامعي والافتراضي عبر الإنترنت", pronunciation: "دِر أونلاين كامپوس", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 892, german: "die Videokonferenz-Software", arabic: "برمجيات ونظم عقد المؤتمرات المرئية", pronunciation: "دي فيديو كونفيرينتس صوفتفار", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 893, german: "das Cloud-Speichermedium", arabic: "وسائط ومساحات التخزين السحابي الرقمي", pronunciation: "داس كلاود شبايكر ميديندوم", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 894, german: "der digitale Anwesenheits-Check", arabic: "نظام تسجيل الحضور والانصراف الرقمي الآلي", pronunciation: "دِر ديجيتاله آنفيزنهايتس تشيك", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 895, german: "die interaktive Umfrage", arabic: "الاستطلاع والتصويت التفاعلي الفوري بالحصة", pronunciation: "دي إينتراكتيفه أومفراغه", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 896, german: "das virtuelle Klassenzimmer-Tool", arabic: "أداة وبرنامج إدارة الفصل الافتراضي", pronunciation: "داس فيرتويلي كلاسين تسيمر تول", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 897, german: "der Online-Abgabe-Ordner", arabic: "مجلد تسليم ورفع الواجبات والبحوث الرقمي", pronunciation: "دِر أونلاين أبغابه أوردنر", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 898, german: "die KI-gestützte Korrektur", arabic: "التصحيح والمراجعة المدعومة بالذكاء الاصطناعي", pronunciation: "دي كاي إي غيشتوتسته كوريكتور", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 899, german: "das automatisierte Quiz", arabic: "الاختبارات والأسئلة القصيرة المحوسبة الآلية", pronunciation: "داس أوتوماتيزيرته كويز", group: "محاور البيئة الرقمية السحابية والمنصات" },
  { id: 900, german: "der digitale Lernfortschritts-Graph", arabic: "رسم بياني إحصائي لتطور التحصيل الدراسي", pronunciation: "دِر ديجيتale ليرن فورتشريتس غراف", group: "محاور البيئة الرقمية السحابية والمنصات" },

  // مجموعة 52: الأنشطة اللامنهجية المتقدمة والنوادي الطلابية (جديدة كلياً)
  { id: 901, german: "der Debattierclub", arabic: "نادي المناظرات والحوار الفكري المدرسي", pronunciation: "دِر ديباتيير كلوب", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 902, german: "die Schülerzeitungsredaktion", arabic: "هيئة تحرير وإدارة الصحيفة المدرسية", pronunciation: "دي شيولر تسايتونغس ريداكتيون", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 903, german: "das Schach-Turnier", arabic: "بطولة ومسابقة الشطرنج السنوية", pronunciation: "داس شاخ تورنير", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 904, german: "die Theater-AG-Leiterin", arabic: "مدربة ومشرفة جماعة المسرح المدرسي", pronunciation: "دي تيآتر آيه غيه لايتيرين", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 905, german: "das Schulorchester", arabic: "الأوركسترا والفرقة الموسيقية الكبرى للمدرسة", pronunciation: "داس شول أوركسترا", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 906, german: "der Chorleiter", arabic: "قائد ومايسترو الكورال الغنائي المدرسي", pronunciation: "دِر كورلايتر", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 907, german: "die Kunst-Werkstatt", arabic: "ورشة ومعمل التربية الفنية والرسم الحر", pronunciation: "دي كونست فيركشتات", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 908, german: "das Foto-Atelier", arabic: "استوديو ومعمل التصوير الفني والتوثيق", pronunciation: "داس فوتو أاتيليه", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 909, german: "der Sportverein", arabic: "النادي الرياضي المدرسي / الفريق الرياضي", pronunciation: "دِر شپور فيراين", group: "الأنشطة اللامنهجية والنوادي الطلابية" },
  { id: 910, german: "die Wandergruppe", arabic: "جماعة رحلات المشي الخلوي واستكشاف الطبيعة", pronunciation: "دي فاندير غروبه", group: "الأنشطة اللامنهجية والنوادي الطلابية" },

  // مجموعة 53: أدوات المراجعة والتدقيق العلمي والأكاديمي النهائي (جديدة كلياً)
  { id: 911, german: "die Quellenprüfung", arabic: "تدقيق والتحقق من مصادر ومراجع البحث", pronunciation: "دي كويلين بروفونغ", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 912, german: "das Plagiatserkennungs-Tool", arabic: "أداة وبرنامج كشف الانتحال والسرقة الأدبية", pronunciation: "داس بلاغيانتس إيركنونغس تول", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 913, german: "der Zitierleitfaden", arabic: "دليل وشروط كتابة وقواعد التوثيق العلمي", pronunciation: "دِر تسيتر لايتفادن", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 914, german: "die Formatierungsrichtlinie", arabic: "إرشادات وقواعد تنسيق البحوث والرسائل", pronunciation: "دي فورماتيرونغس ريشتليني", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 915, german: "das Manuskriptlektorat", arabic: "مراجعة وتحرير النصوص الأكاديمية والكتب", pronunciation: "داس مانوسكريبت ليكتورات", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 916, german: "der Korrekturabzug", arabic: "نسخة وبروفة المراجعة والتصحيح النهائية", pronunciation: "دِر كوريكتور أبزوغ", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 917, german: "die Druckfreigabe", arabic: "إذن وترخيص النشر والطباعة النهائي", pronunciation: "دي دروك فرايغابه", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 918, german: "das Verlagslektorat", arabic: "تحرير ومراجعة دور النشر الأكاديمية", pronunciation: "داس فيرلاغس ليكتورات", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 919, german: "der wissenschaftliche Aufsatz", arabic: "المقال والبحث العلمي المنشور بالدوريات", pronunciation: "دِر فيسنشافتليشه أوفزاتس", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" },
  { id: 920, german: "die Fachzeitschriftenredaktion", arabic: "هيئة تحرير المجلات العلمية المحكمة المتخصصة", pronunciation: "دي فاخ تسايت شريفتن ريداكتيون", group: "أدوات المراجعة والتدقيق العلمي والأكاديمي" }
  ,// مجموعة 54: منصات التعلم الرقمي والذكاء الاصطناعي (جديدة)
  { id: 921, german: "die Lernplattform-Cloud", arabic: "منصة التعلم السحابية", pronunciation: "دي ليرن بلاتفورم كلاود", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 922, german: "der Online-Schulungsraum", arabic: "قاعة التدريب عبر الإنترنت", pronunciation: "دِر أونلاين شولونغس راوم", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 923, german: "die KI-Lernsoftware", arabic: "برمجيات التعلم المدعومة بالذكاء الاصطناعي", pronunciation: "دي كاي إي ليرن صوفتفار", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 924, german: "das Digitale Klassenzimmer-Portal", arabic: "بوابة الفصل الدراسي الرقمي", pronunciation: "داس ديجيتالس كلاسين تسيمر پورتال", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 925, german: "der Online-Testgenerator", arabic: "مولد الاختبارات الإلكترونية", pronunciation: "دِر أونلاين تست جينيراتور", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 926, german: "die Sprachlern-App", arabic: "تطبيق تعلم اللغات الذكي", pronunciation: "دي شبراخ ليرن أب", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 927, german: "das Interaktive E-Book", arabic: "الكتاب الإلكتروني التفاعلي", pronunciation: "داس إينتراكتيفه إي بوخ", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 928, german: "der Digitale Fragebogen", arabic: "الاستبيان الإلكتروني الرقمي", pronunciation: "دِر ديجيتالس فراغه بوغن", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 929, german: "die Online-Sprechstunden-App", arabic: "تطبيق الساعات المكتبية الافتراضية", pronunciation: "دي أونلاين شبريخ شتوندين أب", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },
  { id: 930, german: "das KI-Sprachmodell", arabic: "نموذج اللغة للذكاء الاصطناعي التعليمي", pronunciation: "داس كاي إي شبراخ موديل", group: "منصات التعلم الرقمي والذكاء الاصطناعي" },

  // مجموعة 55: معدات ومستلزمات المعامل الذكية (جديدة)
  { id: 931, german: "der Digitale Oszilloskop", arabic: "جهاز رسم الإشارات الرقمي (الأوسيلوسكوب)", pronunciation: "دِر ديجيتالس أوسيليوسكوب", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 932, german: "die Labor-Schnittstelle", arabic: "واجهة ربط الأجهزة المعملية بالحاسوب", pronunciation: "دي لابور شنيت شتيله", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 933, german: "das Mikroprozessor-Kit", arabic: "حقيبة معالجات ودائرة التحكم الدقيق", pronunciation: "داس ميكروپروسيسور كيت", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 934, german: "der Sensor-Controller", arabic: "جهاز التحكم بالحساسات الإلكترونية", pronunciation: "دِر زينزور كونترولر", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 935, german: "die Solarenergie-Box", arabic: "صندوق تجارب الطاقة الشمسية المتطورة", pronunciation: "دي زولار إنيرجي بوكس", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 936, german: "das Brennstoffzellen-Modell", arabic: "نموذج خلايا الوقود التجريبي", pronunciation: "داس بريننشتوف تسيلين موديل", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 937, german: "der Labor-Mغناطيس", arabic: "المغناطيس المخبري فائق القوة", pronunciation: "دِر لابور ماغنيت", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 938, german: "die Digitale Durchflussmesser", arabic: "جهاز قياس التدفق الرقمي المعملي", pronunciation: "دي ديجيتاله دورش فلوس ميسر", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 939, german: "das Thermoelement", arabic: "عنصر قياس الحرارة المزدوج (الثيرموجفت)", pronunciation: "داس تيرمو إيليمينت", group: "معدات ومستلزمات المعامل الذكية" },
  { id: 940, german: "der Schaltschrank", arabic: "خزانة ولوحة التحكم الكهربائي بالمعمل", pronunciation: "دِر شالت شيرانك", group: "معدات ومستلزمات المعامل الذكية" },

  // مجموعة 56: مهارات البحث الأكاديمي والتوثيق الرقمي (جديدة)
  { id: 941, german: "das Zitationsprogramm", arabic: "برنامج تنظيم وتوثيق المراجع", pronunciation: "داس تسيتاطيونس پروگرام", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 942, german: "die Literaturdatenbank", arabic: "قاعدة بيانات الأدبيات والمراجع الإلكترونية", pronunciation: "دي ليتيراتور داتين بانك", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 943, german: "der Forschungsantrag", arabic: "طلب وتمويل مشروع البحث العلمي", pronunciation: "داس فورشونغس أنترانغ", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 944, german: "die empirische Datenerhebung", arabic: "جمع البيانات بالطرق التجريبية الميدانية", pronunciation: "دي إمپيريشه داتين إيرهيبونغ", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 945, german: "das Statistik-Tool", arabic: "أداة وبرنامج التحليل الإحصائي للبحوث", pronunciation: "داس ستاتيستيك تول", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 946, german: "der wissenschaftliche Artikel", arabic: "المقالة والورقة العلمية المحكمة", pronunciation: "دِر فيسنشافتليشه آرتيكل", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 947, german: "die Publikationsgebühr", arabic: "رسوم نشر الأبحاث في المجلات العلمية", pronunciation: "دي پوپليكاسيونص غبيور", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 948, german: "das Forschungsmanuskript", arabic: "مسودة ومخطوطة البحث العلمي", pronunciation: "داس فورشونغس مانوسكريبت", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 949, german: "der Gutachterbericht", arabic: "تقرير محكّم ومقيم الأبحاث العلمية", pronunciation: "دِر غوت أختر بيريشت", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },
  { id: 950, german: "die Open-Access-Initiative", arabic: "مبادرة ونظام النشر الحر المفتوح", pronunciation: "دي أوبن أكسيس إينيتياتيفه", group: "مهارات البحث الأكاديمي والتوثيق الرقمي" },

  // مجموعة 57: الفعاليات والأنشطة الطلابية المتقدمة (جديدة)
  { id: 951, german: "das Studierenden-Netzwerk", arabic: "شبكة تواصل الطلاب الجامعيين", pronunciation: "داس شتوديريندن نيتس فيرك", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 952, german: "der Campus-Podcast", arabic: "بودغاست وإذاعة الحرم الجامعي", pronunciation: "دِر كامپوس بودكاست", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 953, german: "die Hochschulgruppe", arabic: "الأسرة والجماعة الطلابية بالجامعة", pronunciation: "دي هوخ شول غروبه", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 954, german: "das Kultur-Festival", arabic: "المهرجان والاحتفال الثقافي الجامعي", pronunciation: "داس كولتور فيستيفال", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 955, german: "der Sport-Wettbewerb", arabic: "المسابقة والبطولة الرياضية الكبرى", pronunciation: "دِر شپورت فيتكيبيرب", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 956, german: "die Theater-Gruppe", arabic: "فرقة وجماعة المسرح المدرسي", pronunciation: "دي تيآتر غروبه", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 957, german: "das Schulorchester-Konzert", arabic: "حفل الأوركسترا والفرقة الموسيقية", pronunciation: "داس شول أوركسترا كونسيرت", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 958, german: "der Schüleraustausch-Besuch", arabic: "زيارة برنامج التبادل الطلابي الخارجي", pronunciation: "دِر شيولر أوس تاوش بيسوش", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 959, german: "die Projektwoche", arabic: "أسبوع المشاريع والأنشطة المكثفة بالمدرسة", pronunciation: "دي پرويه كت فوخه", group: "الفعاليات والأنشطة الطلابية المتقدمة" },
  { id: 960, german: "das Absolvententreffen", arabic: "لقاء وملتقى الخريجين السنوي", pronunciation: "داس أبسولفينتن تريفن", group: "الفعاليات والأنشطة الطلابية المتقدمة" },

  // مجموعة 58: الإدارة المدرسية والنظم التعليمية الحديثة (جديدة)
  { id: 961, german: "die Schulkonferenz", arabic: "مؤتمر وإدارة مجلس المدرسة", pronunciation: "دي شول كونفيرينتس", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 962, german: "der Bildungsplaner", arabic: "مخطط ومطور المناهج والخطط التعليمية", pronunciation: "دِر بيلدونغس پلانر", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 963, german: "die Qualitätskontrolle", arabic: "مراقبة وضمان جودة المؤسسات", pronunciation: "دي كفاليتاتس كونتصوله", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 964, german: "das Schולقانون", arabic: "قانون ونظارات اللائحة المدرسية", pronunciation: "داس شول غسيتس", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 965, german: "der Elternbeirat", arabic: "مجلس أولياء الأمور والآباء المدرسي", pronunciation: "دِر إيلترن بايرات", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 966, german: "die Schülervertretung", arabic: "اتحاد وممثلية الطلاب المدرسية", pronunciation: "دي شيولر فيرتريتونغ", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 967, german: "das Bildungsministerium", arabic: "وزارة التربية والتعليم والبحث", pronunciation: "داس بيلدونغس ميستر يوم", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 968, german: "der Schulinspektor", arabic: "مفتش وموجه التعليم والمدرسة", pronunciation: "دِر شول إنسبيكتور", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 969, german: "die Schulentwicklungsabteilung", arabic: "قسم تطوير التخطيط المدرسي", pronunciation: "دي شول إنتفيكلونغس أبتايلونغ", group: "الإدارة المدرسية والنظم التعليمية" },
  { id: 970, german: "das Bildungsbudget", arabic: "الميزانية المخصصة للتعليم والمدرسة", pronunciation: "داس بيلدونغس بودجيت", group: "الإدارة المدرسية والنظم التعليمية" },
  // مجموعة 59: البرمجيات المتقدمة وتقنيات الفصول الافتراضية (جديدة)
  { id: 971, german: "der Live-Streaming-Dienst", arabic: "خدمة البث الحي المباشر للمحاضرات", pronunciation: "دِر لايف ستريمينغ دينست", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 972, german: "die Online-Whiteboard-App", arabic: "تطبيق السبورة الرقمية عبر الإنترنت", pronunciation: "دي أونلاين وايت بورد أب", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 973, german: "das KI-Chatbot-System", arabic: "نظام الشات بوت المعتمد على الذكاء الاصطناعي", pronunciation: "داس كاي إي شاتبوت زيستيم", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 974, german: "der Digitale Kalender", arabic: "التقويم والجدول الزمني الرقمي", pronunciation: "دِر ديجيتالس كاليندر", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 975, german: "die Cloud-Datenbank", arabic: "قاعدة البيانات السحابية المركزية", pronunciation: "دي كلاود داتين بانك", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 976, german: "das Online-Vokabeltraining", arabic: "تدريب المفردات اللغوية عبر الإنترنت", pronunciation: "داس أونلاين فوكابل ترينينغ", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 977, german: "der Sprachvergleichs-Test", arabic: "اختبار مقارنة وتقييم مستويات اللغات", pronunciation: "دِر شبراخ فيرغليخس تست", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 978, german: "die Digitale Notiz-App", arabic: "تطبيق تدوين الملاحظات الرقمي", pronunciation: "دي ديجيتاله نوتيتس أب", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 979, german: "das E-Learning-Portal", arabic: "بوابة وموقع التعلم الإلكتروني الشامل", pronunciation: "داس إي ليرنينغ پورتال", group: "البرمجيات المتقدمة وتقنيات الفصول" },
  { id: 980, german: "der Virtuelle Campus-Rندgang", arabic: "الجولة الافتراضية الاستكشافية للحرم الجامعي", pronunciation: "دِر فيرتويلي كامپوس روندغانغ", group: "البرمجيات المتقدمة وتقنيات الفصول" },

  // مجموعة 60: معدات معامل الأبحاث والفيزياء المتقدمة (جديدة)
  { id: 981, german: "der Vakuum-Ofen", arabic: "فرن التفريغ والحرارة المعملي", pronunciation: "دِر فاکوم أوفن", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 982, german: "die Infrarot-Kamera", arabic: "كاميرا ومستشعر التصوير الحراري", pronunciation: "دي إنفراشروت كاميرا", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 983, german: "das Laser-Messgerät", arabic: "جهاز القياس بالليزر الدقيق", pronunciation: "داس لازير ميس غيرات", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 984, german: "der Gas-Chromatograph", arabic: "جهاز كروماتوغرافيا الغاز المعملي (GC)", pronunciation: "دِر غاس كروماتوغراف", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 985, german: "die Analysen-Waage", arabic: "الميزان التحليلي فائق الدقة للأبحاث", pronunciation: "دي أناليزين فاغه", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 986, german: "das Magnetfeld-Messgerät", arabic: "جهاز قياس شدة وحقول المغناطيس", pronunciation: "داس ماغنيت فيلد ميس غيرات", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 987, german: "der Schwingungs-Generator", arabic: "مولد الاهتزازات والذبذبات الميكانيكية", pronunciation: "دِر شفينغونغس جينيراتور", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 988, german: "die Hochleistungs-Pumpe", arabic: "مضخة تفريغ وضغط السوائل فائقة الأداء", pronunciation: "دي هوخليستونغس بومپه", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 989, german: "das Labor-Mikroskop", arabic: "مجهر وميكروسكوب المعمل العلمي", pronunciation: "داس لابور ميكروسكوب", group: "معدات معامل الأبحاث والفيزياء" },
  { id: 990, german: "der Temperatur-Regler", arabic: "منظم ومتحكم درجات الحرارة الآلي", pronunciation: "دِر تيمبيراتور ريغلر", group: "معدات معامل الأبحاث والفيزياء" },

  // مجموعة 61: شؤون الخريجين والتطوير المهني (جديدة)
  { id: 991, german: "das Alumni-Netzwerk", arabic:" شبكة خريجي الجامعة والأكاديمية", pronunciation: "داس ألومني نيتس فيرك", group: "شؤون الخريجين والتطوير المهني" },
  { id: 992, german: "die Karriere-Messe", arabic: "معرض وظائف وملتقى التوظيف السنوي", pronunciation: "دي كارير ميسه", group: "شؤون الخريجين والتطوير المهني" },
  { id: 993, german: "das Praktikumsangebot", arabic: "عرض وفرصة التدريب الميداني للطلاب", pronunciation: "داس براكتيكومس أنغابوت", group: "شؤون الخريجين والتطوير المهني" },
  { id: 994, german: "der Berufseinstieg", arabic: "خطوة البداية والالتحاق بسوق العمل", pronunciation: "دِر بيروفس إينشتيغ", group: "شؤون الخريجين والتطوير المهني" },
  { id: 995, german: "die Arbeitsmarkt-Analyse", arabic: "تحليل ودراسة اتجاهات سوق العمل", pronunciation: "دي أربايتس ماركت أناليزه", group: "شؤون الخريجين والتطوير المهني" },
  { id: 996, german: "das Weiterbildungszertifikat", arabic: "شهادة ومستند التدريب المهني المستمر", pronunciation: "داس فايتر بيلدونغس تسيرتيفيكات", group: "شؤون الخريجين والتطوير المهني" },
  { id: 997, german: "der Qualifikationsnachweis", arabic: "إثبات الكفاءة والمؤهلات المهنية", pronunciation: "دِر كفاليفيكاسيونص ناخوايس", group: "شؤون الخريجين والتطوير المهني" },
  { id: 998, german: "die Fortbildungsveranstaltung", arabic: "فعالية ونشاط التطوير والتدريب المستمر", pronunciation: "دي فورت بيلدونغس فيرأنتالتونغ", group: "شؤون الخريجين والتطوير المهني" },
  { id: 999, german: "das Mentoratsprogramm", arabic: "برنامج الإرشاد والتوجيه المهني الفردي", pronunciation: "داس مينتوراتس پروگرام", group: "شؤون الخريجين والتطوير المهني" },
  { id: 1000, german: "der Kompetenzatlas", arabic: "أطلس وموسوعة المهارات والكفاءات الأكاديمية", pronunciation: "دِر كومپيتينتس أتلاس", group: "شؤون الخريجين والتطوير المهني" }
];

export default function SchoolAndEducationPage() {
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
    if (parts.length > 0) {
      const firstWord = parts[0].toLowerCase();
      let wordColor = 'inherit';

      if (firstWord === 'der') wordColor = '#00bfff'; // لبنى
      else if (firstWord === 'das') wordColor = '#22c55e'; // أخضر
      else if (firstWord === 'die') wordColor = '#ec4899'; // بمبي

      if (wordColor !== 'inherit') {
        return (
          <span>
            <span style={{ color: wordColor, fontWeight: 'bold' }}>{parts[0]}</span> {parts.slice(1).join(' ')}
          </span>
        );
      }
    }
    return germanStr;
  };

  const filteredData = schoolData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      (item.group && item.group.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // تجميع العناصر حسب الـ group للحفاظ على ترتيب المجموعات وعرض الأرقام تلقائياً
  const groupedData = filteredData.reduce((acc, item) => {
    const groupName = item.group || 'أخرى';
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(item);
    return acc;
  }, {});

  return (
    <div style={{ padding: '15px 15px 40px 15px', color: 'inherit', background: 'transparent' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: inherit;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }
        .search-input {
          width: 100%;
          max-width: 400px;
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          outline: none;
          box-sizing: border-box;
          direction: rtl;
        }
        .category-heading {
          text-align: center;
          font-size: 1.0rem;
          font-weight: 900;
          margin: 35px 0 15px 0;
          color: #00bfff;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        .category-badge {
          background-color: #ff3333;
          color: #ffffff;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
        }
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
          width: 100%;
        }
        .vocab-card {
          position: relative;
          width: 100%;
          max-width: 400px;
          border: 2px solid currentColor;
          border-radius: 30px 6px;
          padding: 14px 16px 14px 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: inherit;
          background: transparent;
          box-sizing: border-box;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease;
          min-height: 55px;
        }
        .vocab-card:hover {
          border-color: #00bfff;
        }
        .vocab-main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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
          font-size: 0.6rem;
          font-weight: bold;
          z-index: 2;
        }
        .pronunciation-wrapper {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: #ff3333;
          border: 1px solid #ffffff;
          padding: 2px 14px;
          border-radius: 14px;
          font-size: 0.78rem;
          font-weight: 900;
          z-index: 2;
          white-space: nowrap;
          pointer-events: none;
        }
        .speaker-left {
          position: absolute;
          left: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-130deg);
          font-size: 0.78rem;
          display: inline-block;
        }
        .speaker-right {
          position: absolute;
          right: -20px;
          top: 20%;
          transform: translateY(-50%) rotate(-50deg);
          font-size: 0.78rem;
          display: inline-block;
        }
        .arabic-word {
          font-size: 1.1rem;
          font-weight: 900;
          text-align: right;
          display: flex;
          align-items: center;
        }
        .german-word {
          font-size: 1.0rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
          display: flex;
          align-items: center;
        }
      `}</style>

      <h1 className="page-title">المدرسة والتعليم (Schule und Bildung)</h1>

      {/* حقل البحث */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة ألمانية أو عربية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* حاوية الكروت متضمنة رقم المجموعة المضيء قبل العنوان */}
      <div className="cards-container">
        {Object.keys(groupedData).map((groupName, groupIndex) => (
          <div key={groupName} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' }}>
            <div className="category-heading">
              <span className="category-badge">{groupIndex + 1}</span>
              <span>{groupName}</span>
            </div>
            {groupedData[groupName].map((item) => (
              <div
                key={item.id}
                className="vocab-card"
                onClick={() => speakGerman(item.german)}
              >
                {/* رقم الكارت */}
                <div className="item-number">{item.id}</div>

                {/* شريط النطق */}
                <div className="pronunciation-wrapper">
                  <span className="speaker-left">🔊</span>
                  <span>{item.pronunciation}</span>
                  <span className="speaker-right">🔊</span>
                </div>

                {/* الكلمات */}
                <div className="vocab-main-row">
                  <div className="arabic-word">{item.arabic}</div>
                  <div className="german-word">{renderColoredGermanWord(item.german)}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}