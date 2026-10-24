import React, { useState } from 'react';

// 1. باليتة ألوان متعددة لتلوين الكلمات المتطابقة بدقة (نفس اللون للكلمة الألمانية وما يقابلها بالعربية)
const WORD_COLOR_PALETTE = [
  "#ec4899", // بمبه
  "#22c55e", // أخضر فاتح
  "#00bfff", // لبني
  "#f97316", // برتقالي
  "#ef4444", // أحمر
  "#10b981", // أخضر
  "#3b82f6", // أزرق
  "#a855f7", // بنفسجي
  "#eab308", // أصفر
  "#14b8a6"  // تيركواز
];

// 2. أسماء المتحدثين وألوان خلفياتهم المميزة
const SPEAKER_COLORS = {
  "المتحدث الأول": "#00bfff",  // لبني
  "المتحدث الثاني": "#22c55e", // أخضر
  "المتحدث الثالث": "#f97316", // برتقالي
  "المتحدث الرابع": "#a855f7"  // بنفسجي
};

// دالة لتحويل رموز المتحدثين إلى الأسماء العربية المطلوبة
const formatSpeaker = (s) => {
  if (s === "S1" || s === "المتحدث الأول") return "المتحدث الأول";
  if (s === "S2" || s === "المتحدث الثاني") return "المتحدث الثاني";
  if (s === "S3" || s === "المتحدث الثالث") return "المتحدث الثالث";
  if (s === "S4" || s === "المتحدث الرابع") return "المتحدث الرابع";
  return "المتحدث الأول";
};

// 3. قاعدة البيانات الشاملة لجميع الـ 540 جملة موزعة على 10 قصص كاملة
const categoriesData = [
  {
    id: "cat-1",
    title: "1. 🏥 قصة زيارة العيادة والمستشفى (Gesundheit & Medizin)",
    sentences: [
      { id: 1, speaker: "S1", german: "Ich wachte heute auf und hatte starke Kopfschmerzen.", arabic: "استيقظت اليوم وكان لدي صداع شديد.", map: [ [[0, 2], [0, 5]] ] },
      { id: 2, speaker: "S1", german: "Ich fühle mich überhaupt nicht gut.", arabic: "لا أشعر بأني بخير على الإطلاق.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 5]] ] },
      { id: 3, speaker: "S1", german: "Ich rief in der Praxis an, um einen Termin zu vereinbaren.", arabic: "اتصلت بالعيادة الطبية لحجز موعد.", map: [ [[0, 4], [0, 2]], [[5, 8], [3, 4]] ] },
      { id: 4, speaker: "S2", german: "Die Sprechstundenhilfe sagte: 'Kommen Sie sofort vorbei.'", arabic: "قالت موظفة الاستقبال: 'تعال على الفور'.", map: [ [[0, 2], [0, 2]], [[3, 6], [3, 5]] ] },
      { id: 5, speaker: "S1", german: "Ich ging zuerst in die Praxis des Hausarztes.", arabic: "ذهبت أولاً إلى عيادة طبيب الأسرة.", map: [ [[0, 2], [0, 1]], [[3, 6], [2, 5]] ] },
      { id: 6, speaker: "S1", german: "Im Wartezimmer saßen viele kranke Menschen.", arabic: "في غرفة الانتظار جلس العديد من المرضى.", map: [ [[0, 1], [0, 2]], [[2, 5], [3, 5]] ] },
      { id: 7, speaker: "S2", german: "Der Arzt untersuchte mich sehr gründlich.", arabic: "فحصني الطبيب بدقة شديدة.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 8, speaker: "S2", german: "Er maß meinen Blutdruck und untersuchte meinen Hals.", arabic: "قاس ضغط دمي وفحص حلقي.", map: [ [[0, 3], [0, 2]], [[4, 6], [3, 4]] ] },
      { id: 9, speaker: "S2", german: "Er sagte: 'Sie haben hohes Fieber und Grippe.'", arabic: "قال: 'لديك حمى عالية وإنفلونزا'.", map: [ [[0, 1], [0, 0]], [[2, 7], [1, 5]] ] },
      { id: 10, speaker: "S2", german: "Wegen der Schmerzen überwies er mich ins Krankenhaus.", arabic: "بسبب الآلام حولني إلى المستشفى.", map: [ [[0, 2], [0, 1]], [[3, 6], [2, 4]] ] },
      { id: 11, speaker: "S1", german: "Ich stieg ins Taxi und fuhr direkt ins Krankenhaus.", arabic: "ركبت التاكسي وذهبت مباشرة إلى المستشفى.", map: [ [[0, 3], [0, 1]], [[4, 7], [2, 5]] ] },
      { id: 12, speaker: "S1", german: "In der Notaufnahme war es sehr betriebsam.", arabic: "في غرفة الطوارئ كان الوضع مزدحماً جداً.", map: [ [[0, 2], [0, 2]], [[3, 5], [3, 5]] ] },
      { id: 13, speaker: "S3", german: "Eine nette Krankenschwester nahm mir Blut ab.", arabic: "ممرضة لطيفة سحبت مني عينة دم.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 5]] ] },
      { id: 14, speaker: "S2", german: "Der Facharzt machte eine Röntgenaufnahme von meiner Brust.", arabic: "أجرى الطبيب المختص صورة أشعة لصدري.", map: [ [[0, 1], [1, 2]], [[2, 6], [0, 0]] ] },
      { id: 15, speaker: "S2", german: "Glücklicherweise war kein Knochen gebrochen.", arabic: "لحسن الحظ لم يكن هناك عظم مكسور.", map: [ [[0, 0], [0, 1]], [[1, 4], [2, 5]] ] },
      { id: 16, speaker: "S2", german: "Der Arzt schrieb mir ein Rezept für Schmerztabletten.", arabic: "كتب لي الطبيب وصفة طبية لمسكنات الآلام.", map: [ [[0, 1], [2, 2]], [[2, 6], [0, 1]] ] },
      { id: 17, speaker: "S2", german: "Er verordnete mir auch einen Hustensaft aus der Apotheke.", arabic: "وصف لي أيضاً شراباً للسعال من الصيدلية.", map: [ [[0, 3], [0, 1]], [[4, 7], [2, 5]] ] },
      { id: 18, speaker: "S1", german: "Ich ging zur Apotheke neben dem Krankenhaus.", arabic: "ذهبت إلى الصيدلية المجاورة للمستشفى.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 19, speaker: "S3", german: "Der Apotheker erklärte mir die Einnahme der Medizin.", arabic: "شرح لي الصيدلي طريقة تناول الدواء.", map: [ [[0, 1], [2, 2]], [[2, 6], [0, 1]] ] },
      { id: 20, speaker: "S3", german: "Ich muss die Tabletten dreimal täglich nach dem Essen nehmen.", arabic: "يجب أن آخذ الحبوب ثلاث مرات يومياً بعد الأكل.", map: [ [[0, 3], [0, 3]], [[4, 8], [4, 7]] ] },
      { id: 21, speaker: "S2", german: "Der Arzt gab mir eine Krankschreibung für eine Woche.", arabic: "أعطاني الطبيب إجازة مرضية لمدة أسبوع.", map: [ [[0, 1], [1, 1]], [[2, 6], [0, 0]] ] },
      { id: 22, speaker: "S1", german: "Ich muss mich zu Hause ausruhen und viel Wasser trinken.", arabic: "يجب أن أستريح في البيت وأشرب الكثير من الماء.", map: [ [[0, 5], [0, 4]], [[6, 9], [5, 8]] ] },
      { id: 23, speaker: "S4", german: "Mein Freund wünschte mir eine schnelle Genesung.", arabic: "تمنى لي صديقي شفاءً سريعاً.", map: [ [[0, 1], [2, 2]], [[2, 5], [0, 1]] ] },
      { id: 24, speaker: "S1", german: "Am nächsten Tag fühlte ich mich schon etwas besser.", arabic: "في اليوم التالي شعرت بأني أفضل قليلاً.", map: [ [[0, 2], [0, 2]], [[3, 7], [3, 6]] ] },
      { id: 25, speaker: "S1", german: "Die Kopfschmerzen und das Fieber ließen nach.", arabic: "خفت آلام الرأس والحمى.", map: [ [[0, 3], [1, 3]], [[4, 5], [0, 0]] ] },
      { id: 26, speaker: "S1", german: "Ich nahm meine Salbe für die Hautverletzung.", arabic: "استخدمت مرهمي لإصابة الجلد.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 3]] ] },
      { id: 27, speaker: "S2", german: "Der Zahnarzt hatte mir letzte Woche auch geholfen.", arabic: "كان طبيب الأسنان قد ساعدني الأسبوع الماضي أيضاً.", map: [ [[0, 1], [2, 3]], [[2, 7], [0, 1]] ] },
      { id: 28, speaker: "S1", german: "Gesundheit ist das Wichtigste im Leben.", arabic: "الصحة هي أهم شيء في الحياة.", map: [ [[0, 0], [0, 0]], [[1, 4], [1, 5]] ] },
      { id: 29, speaker: "S1", german: "Nächste Woche gehe ich zur Nachuntersuchung in die Praxis.", arabic: "الأسبوع القادم سأذهب للفحص المتابعة في العيادة.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 6]] ] },
      { id: 30, speaker: "S1", german: "Jetzt bin ich wieder gesund und stark.", arabic: "الآن أنا بصحة جيدة وقوي مجدداً.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 5]] ] },
      { id: 31, speaker: "S1", german: "Ich kaufte auch Pflaster und Desinfektionsmittel.", arabic: "اشتريت أيضاً لاصقاً طبياً ومطهراً.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 32, speaker: "S1", german: "Die Wunde am Finger war nicht tief.", arabic: "الجرح في الإصبع لم يكن عميقاً.", map: [ [[0, 3], [0, 2]], [[4, 5], [3, 5]] ] },
      { id: 33, speaker: "S1", german: "Ich trank heißen Tee mit Honig gegen die Halsschmerzen.", arabic: "شربت الشاي الساخن مع العسل لعلاج ألم الحلق.", map: [ [[0, 4], [0, 4]], [[5, 7], [5, 7]] ] },
      { id: 34, speaker: "S2", german: "Der Blutdruck war nach der Ruhe wieder normal.", arabic: "كان ضغط الدم طبيعياً مجدداً بعد الراحة.", map: [ [[0, 1], [1, 2]], [[2, 6], [0, 0]] ] },
      { id: 35, speaker: "S4", german: "Mein Vater holte mich vom Krankenhaus ab.", arabic: "والدي أخذني من المستشفى.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 36, speaker: "S1", german: "Ich kühlte mein Fußgelenk mit Eis.", arabic: "برّدت كاحل قدمي بالثلج.", map: [ [[0, 2], [0, 2]], [[3, 4], [3, 3]] ] },
      { id: 37, speaker: "S2", german: "Der Notarzt war sehr kompetent und freundlich.", arabic: "طبيب الطوارئ كان كفؤاً ولطيفاً جداً.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 38, speaker: "S1", german: "Im Krankenhaus gab es moderne medizinische Geräte.", arabic: "في المستشفى كان هناك أجهزة طبية حديثة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 39, speaker: "S1", german: "Ich hielt mich strikt an die Anweisungen des Arztes.", arabic: "التزمت تماماً بتعليمات الطبيب.", map: [ [[0, 2], [0, 0]], [[3, 6], [1, 3]] ] },
      { id: 40, speaker: "S3", german: "Die Praxis bleibt am Mittwochnachmittag geschlossen.", arabic: "تغلق العيادة ظهر يوم الأربعاء.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 41, speaker: "S1", german: "Ich ließ mich gegen Grippe impfen.", arabic: "تطعمت ضد الإنفلونزا.", map: [ [[0, 2], [0, 0]], [[3, 4], [1, 2]] ] },
      { id: 42, speaker: "S2", german: "Die Augenärztin verschrieb mir Augentropfen.", arabic: "طبيبة العيون وصفت لي قطرة عين.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 43, speaker: "S1", german: "Ich spürte eine große Erleichterung.", arabic: "شعرت براحة كبيرة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 2]] ] },
      { id: 44, speaker: "S3", german: "Der Verband wurde nach zwei Tagen gewechselt.", arabic: "تم تغيير الضمادة بعد يومين.", map: [ [[0, 1], [2, 2]], [[2, 5], [0, 1]] ] },
      { id: 45, speaker: "S1", german: "Ich bedankte mich bei den Pflegekräften.", arabic: "شكرت طاقم التمريض.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 46, speaker: "S1", german: "Meine Krankenversicherung deckte alle Kosten ab.", arabic: "تأميني الصحي غطى جميع التكاليف.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 47, speaker: "S1", german: "Ich trank viel Kräutertee zur Stärkung.", arabic: "شربت الكثير من شاي الأعشاب للتقوية.", map: [ [[0, 3], [0, 3]], [[4, 5], [4, 4]] ] },
      { id: 48, speaker: "S1", german: "Der Husten ließ nach drei Tagen nach.", arabic: "خف السعال بعد ثلاثة أيام.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 49, speaker: "S1", german: "Ich schlief acht Stunden durch.", arabic: "نمت ثماني ساعات متواصلة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 50, speaker: "S1", german: "Das Krankenbett war erstaunlich bequem.", arabic: "سرير المستشفى كان مريحاً بشكل مدهش.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 51, speaker: "S1", german: "Ich fühlte mich voller neuer Energie.", arabic: "شعرت بأني مليء بالطاقة الجديدة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 52, speaker: "S2", german: "Der Chefarzt besuchte die Station am Morgen.", arabic: "كبير الأطباء زار القسم في الصباح.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 53, speaker: "S1", german: "Ich verließ das Krankenhaus mit einem Lächeln.", arabic: "غادرت المستشفى بابتسامة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 54, speaker: "S4", german: "Meine Familie wartete zu Hause auf mich.", arabic: "عائلتي كانت تنتظرني في البيت.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 55, speaker: "S1", german: "Ich bin froh, wieder gesund zu sein.", arabic: "أنا سعيد لأنني عدت بصحة جيدة.", map: [ [[0, 2], [0, 1]], [[3, 6], [2, 5]] ] },
      { id: 56, speaker: "S1", german: "Ich brauchte ein Attest für die Arbeitgeber.", arabic: "أحتجت إلى شهادة طبية لصاحب العمل.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 57, speaker: "S3", german: "Die Arzthelferin war sehr aufmerksam.", arabic: "مساعدة الطبيب كانت مهتمة جداً.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 58, speaker: "S3", german: "Der Sanitäter half mir beim Einsteigen.", arabic: "المسعف ساعدني في الصعود.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 59, speaker: "S1", german: "Ich kam nüchtern zur Blutentnahme.", arabic: "أتيت صائماً لسحب الدم.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 60, speaker: "S1", german: "Das Medikament wirkte sehr schnell.", arabic: "الدواء أظهر مفعولاً سرياً جداً.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 61, speaker: "S1", german: "Ich vergaß meine Schmerzmittel nicht.", arabic: "لم أنسَ مسكنات الألم الخاصة بي.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 5]] ] },
      { id: 62, speaker: "S3", german: "Der Röntgenraum war im Erdgeschoss.", arabic: "غرفة الأشعة كانت في الطابق الأرضي.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 63, speaker: "S1", german: "Ich hatte keine Angst vor der Behandlung.", arabic: "لم أكن خائفاً من العلاج.", map: [ [[0, 2], [0, 2]], [[3, 5], [3, 4]] ] },
      { id: 64, speaker: "S2", german: "Die Ärztin gab mir wertvolle Ratschläge.", arabic: "عززتني الطبيبة بنصائح قيمة.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 65, speaker: "S1", german: "Ich trug eine Maske im Wartezimmer.", arabic: "ارتديت كمامة في غرفة الانتظار.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 66, speaker: "S3", german: "Der Terminkalender der Praxis war voll.", arabic: "جدول مواعيد العيادة كان ممتلئاً.", map: [ [[0, 1], [0, 2]], [[2, 4], [3, 4]] ] },
      { id: 67, speaker: "S1", german: "Ich rief den Notdienst am Wochenende an.", arabic: "اتصلت بطوارئ الإسعاف في نهاية الأسبوع.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 68, speaker: "S1", german: "Mein Hals war nicht mehr entzündet.", arabic: "حلقي لم يعد ملتهباً.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 69, speaker: "S1", german: "Ich atmete tief und ruhig durch.", arabic: "تنفست بعمق وهدوء.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 70, speaker: "S3", german: "Das Krankenpfleger-Team war fantastisch.", arabic: "طاقم التمريض كان رائعاً.", map: [ [[0, 1], [0, 1]], [[2, 3], [2, 3]] ] },
      { id: 71, speaker: "S1", german: "Ich erholte mich von Tag zu Tag besser.", arabic: "تعافيت بشكل أفضل يوماً بعد يوم.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 72, speaker: "S3", german: "Der Krankenwagen kam innerhalb von fünf Minuten.", arabic: "سيارة الإسعاف وصلت خلال خمس دقائق.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 73, speaker: "S1", german: "Ich hielt meine Krankschreibung fest in den Händen.", arabic: "أمسكت إجازتي المرضية بإحكام في يدي.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 74, speaker: "S1", german: "Die Spritze tat überhaupt nicht weh.", arabic: "الحقنة لم تكن مؤلمة على الإطلاق.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 75, speaker: "S1", german: "Ich trank ein Glas warmes Wasser.", arabic: "شربت كوباً من الماء الدافئ.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 76, speaker: "S2", german: "Der Arzt war sehr geduldig mit mir.", arabic: "كان الطبيب صبوراً جداً معي.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 77, speaker: "S1", german: "Ich bedankte mich für die Hilfe.", arabic: "شكرت على المساعدة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 2]] ] },
      { id: 78, speaker: "S1", german: "Meine Körpertemperatur sank auf normale Werte.", arabic: "انخفضت حرارة جسمي للمعدل الطبيعي.", map: [ [[0, 1], [1, 2]], [[2, 5], [0, 0]] ] },
      { id: 79, speaker: "S1", german: "Ich ging beruhigt nach Hause zurück.", arabic: "عدت إلى البيت مطمئناً.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 80, speaker: "S1", german: "Ich wünsche allen Kranken gute Besserung.", arabic: "أتمنى لجميع المرضى الشفاء العاجل.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 81, speaker: "S2", german: "Der Zahnarzt empfahl eine professionelle Zahnreinigung.", arabic: "نصح طبيب الأسنان بتنظيف أسنان احترافي.", map: [ [[0, 1], [1, 2]], [[2, 4], [0, 0]] ] },
      { id: 82, speaker: "S2", german: "Die HNO-Ärztin untersuchte meine Ohren.", arabic: "طبيبة الأنف والأذن فحصت أذني.", map: [ [[0, 1], [0, 1]], [[2, 3], [2, 3]] ] },
      { id: 83, speaker: "S1", german: "Ich kaufte noch Vitamin C Tabletten.", arabic: "اشتريت أيضاً حبوب فيتامين سي.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 84, speaker: "S3", german: "Der Gipsverband wurde vorsichtig entfernt.", arabic: "تم إزالة الجبيرة الجبسية بحذر.", map: [ [[0, 1], [2, 2]], [[2, 4], [0, 1]] ] },
      { id: 85, speaker: "S1", german: "Ich fühlte mich wie neu geboren.", arabic: "شعرت وكأنني ولدت من جديد.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 86, speaker: "S1", german: "Die Schwellung am Knie ging zurück.", arabic: "خف التورم في الركبة.", map: [ [[0, 2], [1, 3]], [[3, 4], [0, 0]] ] },
      { id: 87, speaker: "S1", german: "Ich trug eine elastische Bandage.", arabic: "ارتديت رباطاً ضاغطاً مرناً.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 88, speaker: "S2", german: "Der Hautarzt untersuchte den Muttermal.", arabic: "طبيب الجلدية فحص الشامة.", map: [ [[0, 1], [0, 1]], [[2, 3], [2, 3]] ] },
      { id: 89, speaker: "S1", german: "Ich nahm die Augentropfen regelmäßig ein.", arabic: "استخدمت قطرة العين بانتظام.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 90, speaker: "S3", german: "Das Krankenpfleger-Team war sehr aufmerksam.", arabic: "طاقم التمريض كان مهتماً للغاية.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 3]] ] }
    ]
  },
  {
    id: "cat-2",
    title: "2. 📚 قصة الذهاب للمدرسة والتعلم (Lernen & Schule)",
    sentences: [
      { id: 91, speaker: "S1", german: "Heute Morgen standen wir früh auf und gingen zur Schule.", arabic: "استيقظنا صباح اليوم مبكراً وذهبنا إلى المدرسة.", map: [ [[0, 2], [0, 2]], [[3, 7], [3, 6]] ] },
      { id: 92, speaker: "S2", german: "Im Klassenzimmer trafen wir unsere Freunde und den Lehrer.", arabic: "في الفصل التقينا بأصدقائنا والمعلم.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 93, speaker: "S3", german: "Der Unterricht begann pünktlich um acht Uhr.", arabic: "بدأ الدرس في تمام الساعة الثامنة.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 94, speaker: "S1", german: "Zuerst hatten wir Deutsch und lernten neue Wörter.", arabic: "أولاً كان لدينا لغة ألمانية وتعلمنا كلمات جديدة.", map: [ [[0, 3], [0, 3]], [[4, 6], [4, 6]] ] },
      { id: 95, speaker: "S2", german: "Wir lernten, wie man richtige Sätze baut.", arabic: "تعلمنا كيف نبني جملاً صحيحة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 96, speaker: "S3", german: "Danach erklärten der Lehrer die schwierige Grammatik.", arabic: "بعد ذلك شرح المعلم القواعد الصعبة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 97, speaker: "S1", german: "Wir schrieben die Notizen sorgfältig in unsere Hefte.", arabic: "كتبنا الملاحظات بعناية في دفاترنا.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 98, speaker: "S2", german: "In Mathematik lösten wir schwierige Aufgaben an der Tafel.", arabic: "في الرياضيات حللنا مسائل صعبة على السبورة.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 99, speaker: "S3", german: "Der Lehrer korrigierte unsere Fehler freundlich.", arabic: "صحح المعلم أخطاءنا بلطف.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 100, speaker: "S1", german: "In der Pause gingen wir auf den Schulhof und spielten.", arabic: "في الاستراحة ذهبنا إلى فناء المدرسة ولعبنا.", map: [ [[0, 2], [0, 1]], [[3, 7], [2, 5]] ] },
      { id: 101, speaker: "S3", german: "Nach der Pause lernten wir Geschichte und Geografie.", arabic: "بعد الاستراحة تعلمنا التاريخ والجغرافيا.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 3]] ] },
      { id: 102, speaker: "S1", german: "Wir lasen ein spannendes Buch in der Bibliothek.", arabic: "قرأنا كتاباً ممتعاً في المكتبة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 103, speaker: "S1", german: "Ich stellte dem Lehrer eine wichtige Frage.", arabic: "سألت المعلم سؤالاً مهماً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 104, speaker: "S3", german: "Er antwortete geduldig und erklärte es noch einmal.", arabic: "أجاب بصبر وشرح الأمر مرة أخرى.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 105, speaker: "S2", german: "Wir arbeiteten in Gruppen zusammen an einem Projekt.", arabic: "عملنا معا في مجموعات على مشروع.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 106, speaker: "S3", german: "Am Ende des Tages bekamen wir Hausaufgaben.", arabic: "في نهاية اليوم حصلنا على واجبات منزلية.", map: [ [[0, 3], [0, 2]], [[4, 5], [3, 5]] ] },
      { id: 107, speaker: "S1", german: "Ich lerne jeden Tag zu Hause, um gute Noten zu bekommen.", arabic: "أدرس كل يوم في البيت لأحصل على درجات جيدة.", map: [ [[0, 4], [0, 3]], [[5, 9], [4, 7]] ] },
      { id: 108, speaker: "S3", german: "Morgen schreiben wir einen wichtigen Test.", arabic: "غداً سنكتب اختباراً مهماً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 109, speaker: "S1", german: "Ich benutze mein Wörterbuch, um Vokabeln nachzuschlagen.", arabic: "أستخدم قاموسي للبحث عن المفردات.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 4]] ] },
      { id: 110, speaker: "S1", german: "Lernen macht zusammen mit Freunden viel mehr Spaß.", arabic: "التعلم مع الأصدقاء يكون أكثر متعة بكثير.", map: [ [[0, 0], [0, 0]], [[1, 6], [1, 6]] ] },
      { id: 111, speaker: "S3", german: "Wir übten das Hörverstehen im Sprachlabor.", arabic: "تدربنا على فهم الاستماع في مختبر اللغات.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 112, speaker: "S1", german: "Ich bestand meine A1-Prüfung mit Auszeichnung.", arabic: "اجتزت امتحان A1 بامتياز.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 113, speaker: "S1", german: "Unser Schulleiter hielt eine motivierende Rede.", arabic: "ألقى مدير مدرستنا كلمة تحفيزية.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 114, speaker: "S2", german: "Wir benutzten Buntstifte für die Zeichnungen.", arabic: "استخدمنا أقلام تلوين للرسومات.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 115, speaker: "S2", german: "Der Physikunterricht war heute sehr faszinierend.", arabic: "حصص الفيزياء كانت ممتعة جداً اليوم.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 116, speaker: "S1", german: "Wir machten ein Experiment im Chemielabor.", arabic: "أجرينا تجربة في معامل الكيمياء.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 117, speaker: "S1", german: "Ich vergaß mein Federkästchen nicht auf dem Tisch.", arabic: "لم أنس مقلمتي على الطاولة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 118, speaker: "S1", german: "Wir wiederholten die unregelmäßigen Verben.", arabic: "راجعنا الأفعال غير المنتظمة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 119, speaker: "S3", german: "Die Lehrerin lobte meine saubere Handschrift.", arabic: "أشادت المعلمة بخط اليد النظيف.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 120, speaker: "S3", german: "Wir bekamen neue Schulbücher für das Semester.", arabic: "حصلنا على كتب مدرسية جديدة للفصل الدراسي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 121, speaker: "S1", german: "Ich meldete mich für den Fortgeschrittenenkurs an.", arabic: "سجلت في دورة المستوى المتقدم.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 122, speaker: "S2", german: "Die Prüfungsergebnisse wurden an der Pinnwand ausgehängt.", arabic: "عُلقت نتائج الاختبارات على لوحة الإعلانات.", map: [ [[0, 1], [1, 2]], [[2, 5], [0, 0]] ] },
      { id: 123, speaker: "S3", german: "Wir diskutierten über ein interessantes literarisches Thema.", arabic: "ناقشنا موضوعاً أدبياً ممتعاً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 124, speaker: "S1", german: "Ich lieh mir zwei Bücher aus der Bücherei aus.", arabic: "استعرت كتابين من المكتبة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 125, speaker: "S2", german: "Der Sportlehrer organisierte ein Basketballturnier.", arabic: "نظم معلم الرياضة بطولة كرة سلة.", map: [ [[0, 1], [1, 2]], [[2, 3], [0, 0]] ] },
      { id: 126, speaker: "S1", german: "Wir lernten Gedichte auswendig aufzufragen.", arabic: "تعلمنا إلقاء القصائد عن ظهر قلب.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 127, speaker: "S2", german: "Ich verbesserte meine Aussprache von Tag zu Tag.", arabic: "تحسنت لفظي يوماً بعد يوم.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 128, speaker: "S2", german: "Wir nutzten Lern-Apps auf unseren Tablets.", arabic: "استخدمنا تطبيقات تعليمية على أجهزة الأجهزة اللوحية.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 129, speaker: "S2", german: "Der Unterricht endete um dreizehn Uhr.", arabic: "انتهى الدرس في الساعة الواحدة ظهراً.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 130, speaker: "S2", german: "Wir verabschiedeten uns herzlich von Lehrer.", arabic: "ودعنا المعلم بحرارة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 2]] ] },
      { id: 131, speaker: "S1", german: "Ich ging zufrieden nach Hause und machte Hausaufgaben.", arabic: "ذهبت إلى البيت راضياً وقمت بالواجبات.", map: [ [[0, 3], [0, 3]], [[4, 6], [4, 5]] ] },
      { id: 132, speaker: "S3", german: "Bildung ist der Schlüssel zur erfolgreichen Zukunft.", arabic: "التعليم هو المفتاح لمستقبل ناجح.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 133, speaker: "S1", german: "Ich verstand die Übersetzung ohne Probleme.", arabic: "فهمت الترجمة بدون مشاكل.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 134, speaker: "S1", german: "Wir hielten ein kurzes Referat vor der Klasse.", arabic: "ألقيت عرضاً قصيراً أمام الفصل.", map: [ [[0, 2], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 135, speaker: "S3", german: "Mein Sprachniveau verbesserte sich spürbar.", arabic: "تحسن مستواي اللغوي بشكل ملحوظ.", map: [ [[0, 1], [1, 2]], [[2, 3], [0, 0]] ] },
      { id: 136, speaker: "S1", german: "Ich spitzte meinen Bleistift mit dem Anspitzer.", arabic: "بريت قلم الرصاص بمبراة الأقلام.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 137, speaker: "S2", german: "Der Geografiehrer zeigte uns die Weltkarte.", arabic: "عرض معلم الجغرافيا علينا خريطة العالم.", map: [ [[0, 1], [2, 3]], [[2, 4], [0, 1]] ] },
      { id: 138, speaker: "S2", german: "Wir lernten die Hauptstädte Europas.", arabic: "تعلمنا عواصم قارة أوروبا.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 139, speaker: "S1", german: "Ich radierte den Fehler mit dem Radiergummi aus.", arabic: "مسحت الخطأ بالممحاة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 2]] ] },
      { id: 140, speaker: "S1", german: "Die Schulglocke klingelte laut zur Pause.", arabic: "رن جرس المدرسة للإعلان عن الاستراحة.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 141, speaker: "S1", german: "Wir lasen die Aufgabenstellung aufmerksam durch.", arabic: "قرأنا قراءة الأسئلة باهتمام شديد.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 142, speaker: "S1", german: "Ich fasste den Inhalt des Textes zusammen.", arabic: "تلخصت محتوى النص.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 2]] ] },
      { id: 143, speaker: "S1", german: "Der Biologieunterricht war im Schulgarten.", arabic: "حصص الأحياء كانت في حديقة المدرسة.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 144, speaker: "S1", german: "Wir mikroskopierten Pflanzenzellen im Labor.", arabic: "فحصنا خلايا النباتات بالمجهر في المعمل.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 5]] ] },
      { id: 145, speaker: "S1", german: "Ich bekam die maximale Punktzahl in Test.", arabic: "حصلت على الدرجة النهائية في الاختبار.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 146, speaker: "S1", german: "Der Lehrer lobte mein großes Engagement.", arabic: "أثنى المعلم على التزامني وتميزي.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 147, speaker: "S2", german: "Wir lernten die Grammatikregeln Schritt für Schritt.", arabic: "تعلمنا قواعد اللغة خطوة بخطوة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 148, speaker: "S1", german: "Ich kaufte mir ein neues Notizbuch.", arabic: "اشتريت لنفسي دفتر ملاحظات جديد.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 149, speaker: "S1", german: "Wir übten Freies Sprechen in Deutschkurs.", arabic: "تدربنا على المحادثة الحرة في كورس الألمانية.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 5]] ] },
      { id: 150, speaker: "S1", german: "Das Zeugnis war sehr erfreulich.", arabic: "الشهادة الدراسية كانت مفرحة جداً.", map: [ [[0, 1], [0, 1]], [[2, 3], [2, 3]] ] },
      { id: 151, speaker: "S1", german: "Ich beantragte meinen Studentenausweis.", arabic: "تقدمت بطلب للحصول على بطاقة طالب.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 5]] ] },
      { id: 152, speaker: "S1", german: "Wir besuchten ein Museum mit der Klasse.", arabic: "زرنا متحفاً مع الفصل الدراسي.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 153, speaker: "S3", german: "Der Geschichtsunterricht war sehr lehrreich.", arabic: "درس التاريخ كان مفيداً والمعلومات.", map: [ [[0, 1], [1, 1]], [[2, 3], [0, 0]] ] },
      { id: 154, speaker: "S1", german: "Ich vergaß mein Geodreieck zu Hause.", arabic: "نسيت مسطرة المثلث في البيت.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 155, speaker: "S3", german: "Wir schrieben eine Diktatprüfung auf Deutsch.", arabic: "كتبنا اختبار إملاء باللغة الألمانية.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 156, speaker: "S1", german: "Der Informatikraum war mit neuen PCs ausgestattet.", arabic: "معمل الحاسوب كان مجهزاً بأجهزة كمبيوتر جديدة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 157, speaker: "S1", german: "Wir programmierten eine einfache Website.", arabic: "برمجنا موقع إنترنت بسيطاً.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 158, speaker: "S1", german: "Wir lernten die Rechenregeln schnell.", arabic: "فهمنا قواعد الحساب بسرعة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 159, speaker: "S1", german: "Die Nachhilfe half mir sehr viel.", arabic: "الدروس الخصوصية ساعدتني كثيراً.", map: [ [[0, 1], [0, 0]], [[2, 4], [2, 3]] ] },
      { id: 160, speaker: "S1", german: "Ich bin motiviert weiterzulernen.", arabic: "أنا متحمس لمواصلة التعلم.", map: [ [[0, 1], [0, 0]], [[2, 3], [2, 2]] ] },
      { id: 161, speaker: "S1", german: "Wir lernten Fachbegriffe aus dem Bereich Medizin.", arabic: "تعلمنا مصطلحات مختصة في مجال الطب.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 162, speaker: "S1", german: "Der Sprachunterricht fand dreimal wöchentlich statt.", arabic: "دروس اللغة كانت تقام ثلاث مرات أسبوعياً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 163, speaker: "S1", german: "Ich legte die B1-Prüfung erfolgreich ab.", arabic: "نجحت في امتحان B1.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 164, speaker: "S3", german: "Wir übten den schriftlichen Ausdruck im Kurs.", arabic: "تدربنا على التعبير الكتابي في الكورس.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 165, speaker: "S3", german: "Die Lehrerin gab uns wertvolles Feedback.", arabic: "أعطتنا المعلمة ملاحظات قيمة.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 166, speaker: "S1", german: "Ich benutze Textmarker für wichtige Wörter.", arabic: "أستخدم أقلام التظليل للكلمات المهمة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 167, speaker: "S2", german: "Wir erstellten Lernplakate für den Raum.", arabic: "صممنا ملصقات تعليمية للغرفة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 168, speaker: "S1", german: "Der Austauschschüler sprach fließend Deutsch.", arabic: "طالب التبادل كان يتحدث الألمانية بطلاقة.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 169, speaker: "S2", german: "Wir machten eine Exkursion in die Natur.", arabic: "قمنا برحلة ميدانية علمية في الطبيعة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 170, speaker: "S1", german: "Ich habe viel gelernt und bin stolz.", arabic: "تعلمت الكثير وأنا فخور.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 3]] ] },
      { id: 171, speaker: "S3", german: "Die Vorlesung im Hörsaal war gut besucht.", arabic: "المحاضرة في المدرج كان بها حضور كبير.", map: [ [[0, 2], [0, 2]], [[3, 5], [3, 5]] ] },
      { id: 172, speaker: "S1", german: "Ich machte mir Stichpunkte während des Vortrags.", arabic: "سجلت نقاطاً مختصرة أثناء العرض.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 173, speaker: "S2", german: "Wir klärten alle offenen Fragen mit dem Dozenten.", arabic: "وضحنا جميع الأسئلة المعلقة مع المحاضر.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 174, speaker: "S1", german: "Ich kaufte ein neues Fachbuch für Informatik.", arabic: "اشتريت كتاباً تخصيصياً جديداً للحاسوب.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 175, speaker: "S3", german: "Die Online-Lernplattform war sehr nützlich.", arabic: "منصة التعلم عبر الإنترنت كانت مفيدة جداً.", map: [ [[0, 1], [0, 3]], [[2, 3], [4, 5]] ] },
      { id: 176, speaker: "S2", german: "Wir luden die Lernmaterialien als PDF herunter.", arabic: "حملنا المواد التعليمية بصيغة PDF.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 177, speaker: "S1", german: "Der Lerngruppe half mir beim Verstehen.", arabic: "مجموعة الدراسة ساعدتني على الفهم.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 178, speaker: "S1", german: "Ich wiederholte die Vokabeln jeden Abend.", arabic: "راجعت المفردات كل مساء.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 179, speaker: "S2", german: "Wir machten eine kurze Kaffeepause im Foyer.", arabic: "أخذنا استراحة قهوة قصيرة في البهو.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 180, speaker: "S1", german: "Ich freue mich auf das neue Schuljahr.", arabic: "أنا متطلع بشوق للعام الدراسي الجديد.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 4]] ] }
    ]
  },
  {
    id: "cat-3",
    title: "3. 🛒 قصة جولة التسوق والشراء (Einkaufen & Geld)",
    sentences: [
      { id: 181, speaker: "S1", german: "Am Samstagnachmittag ging ich ins Einkaufszentrum.", arabic: "ظهر يوم السبت ذهبت إلى مركز التسوق.", map: [ [[0, 1], [0, 2]], [[2, 4], [3, 5]] ] },
      { id: 182, speaker: "S1", german: "Ich brauchte frische Lebensmittel und Kleidung.", arabic: "احتجت مواد غذائية طازجة وملابس.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 183, speaker: "S1", german: "Zuerst nahm ich einen Einkaufswagen am Eingang.", arabic: "أولاً أخذت عربة تسوق عند المدخل.", map: [ [[0, 2], [0, 2]], [[3, 5], [3, 4]] ] },
      { id: 184, speaker: "S1", german: "Im Supermarkt kaufte ich Brot, Butter und Milch.", arabic: "في السوبرماركت اشتريت خبزاً وزبدة وحليباً.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 185, speaker: "S2", german: "Die Gemüsetheke hatte frische Äpfel und Tomaten.", arabic: "قسم الخضروات كان به تفاح وطماطم طازجة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 186, speaker: "S1", german: "Ich verglich die Preise sorgfältig.", arabic: "قارنت الأسعار بعناية فائقة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 187, speaker: "S1", german: "Manche Artikel waren im Angebot reduziert.", arabic: "بعض المنتجات كانت مخفضة في العروض.", map: [ [[0, 1], [0, 1]], [[8, 8], [2, 4]] ] },
      { id: 188, speaker: "S1", german: "Danach ging ich in ein Bekleidungsgeschäft.", arabic: "بعد ذلك ذهبت إلى محل ملابس.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 189, speaker: "S1", german: "Ich suchte nach einer warmen Winterjacke.", arabic: "بحث عن معطف شتوي دافئ.", map: [ [[0, 1], [0, 1]], [[2, 4], [1, 3]] ] },
      { id: 190, speaker: "S2", german: "Die Verkäuferin war sehr nett und hilfsbereit.", arabic: "الباعة كانت لطيفة ومحبة للخدمة ومعدة جداً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 191, speaker: "S1", german: "Ich probierte die Jaacke in der Umkleidekabine an.", arabic: "قست الجاكيت في غرفة قياس الملابس.", map: [ [[0, 1], [0, 0]], [[5, 5], [2, 5]] ] },
      { id: 192, speaker: "S3", german: "Sie passte mir perfekt und sah toll aus.", arabic: "عادة تناسبني تماماً وبدت رائعة.", map: [ [[0, 2], [0, 1]], [[3, 6], [2, 3]] ] },
      { id: 193, speaker: "S1", german: "An der Kasse fragte ich nach den Preis.", arabic: "عند الصندوق سألت عن السعر.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 3]] ] },
      { id: 194, speaker: "S1", german: "Ich bezahlte kontaktlos mit meiner Kreditkarte.", arabic: "دفع بدون تلامس ببطاقتي الائتمانية.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 195, speaker: "S2", german: "Die Kassiererin gab mir den Kassenbon.", arabic: "أعطتني مراقبة الصندوق إيصال الشراء.", map: [ [[0, 1], [1, 2]], [[2, 4], [0, 0]] ] },
      { id: 196, speaker: "S1", german: "Ich packte die Einkäufe in eine Papiertüte.", arabic: "رفعت المشتريات في كيس ورقي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 197, speaker: "S1", german: "Vor dem Laden hob ich Geld am Geldautomaten ab.", arabic: "أمام المحل سحبت نقوداً من الصراف الآلي.", map: [ [[0, 2], [0, 1]], [[3, 6], [2, 5]] ] },
      { id: 198, speaker: "S1", german: "Ich brauchte noch Kleingeld für den Parkschein.", arabic: "احتجت أيضاً فكة تذكرة التذكرة الجراج.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 199, speaker: "S1", german: "Der Einkauf war erfolgreich und gut organisiert.", arabic: "التسوق الناجح ومرتباً بشكل جيد.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 200, speaker: "S1", german: "Ich kehrte zufrieden mit meinen Taschen nach Hause zurück.", arabic: "عدت إلى البيت زاهداً بحقائبي.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 201, speaker: "S1", german: "Ich tauschte eine Hose um, die zu klein war.", arabic: "استبدلت بنطالاً كان صغيراً جداً.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 202, speaker: "S3", german: "Der Verkäufer erstattete mir das Geld zurück.", arabic: "أعاد لي البائع النقود.", map: [ [[0, 1], [2, 2]], [[2, 5], [0, 1]] ] },
      { id: 203, speaker: "S1", german: "Ich kaufte mir noch ein schönes Hemd.", arabic: "اشتريت لنفسي قميصاً جميلًا.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 204, speaker: "S1", german: "Die Qualität des Stoffs war hervorragend.", arabic: "جودة القماش كانت ممتازة.", map: [ [[0, 2], [0, 1]], [[3, 4], [2, 3]] ] },
      { id: 205, speaker: "S1", german: "Ich nutzte einen Gutschein für zehn Euro Rabatt.", arabic: "استخدمت قسيمة مهمة عشرة يورو.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 206, speaker: "S2", german: "Der Pfandautomat nahm meine leeren Flaschen an.", arabic: "آلة إعادة زجاجاتي الفارغة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 207, speaker: "S1", german: "Ich löste den Pfandbon an der Kasse ein.", arabic: "صرفت إيصال الارتجاع عند الكاشير.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 208, speaker: "S1", german: "Ich kaufte Bioprodukte aus der Region.", arabic: "اشتريت منتجات عضوية من المنطقة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 209, speaker: "S3", german: "Der Bäcker verkaufte frische Sonntagsbrötchen.", arabic: "الخبز كان يبيع مخبوزات الأحد الطازجة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 3]] ] },
      { id: 210, speaker: "S1", german: "Ich kontrollierte die Quittung auf Fehler.", arabic: "تفقدت الإيصال للتأكد من عدم وجود أخطاء.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 5]] ] },
      { id: 211, speaker: "S3", german: "Die Bäckerei hatte eine große Auswahl an Kuchen.", arabic: "كان بالمخبز تشكيلة كبيرة من الكعكة.", map: [ [[0, 1], [2, 2]], [[2, 6], [1, 5]] ] },
      { id: 212, speaker: "S1", german: "Ich bezahlte die Monatsrechnung pünktlich online.", arabic: "دفع فاتورة الشهر في موعدها عبر الإنترنت.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 213, speaker: "S2", german: "Die Versandkosten bei der Bestellung waren kostenlos.", arabic: "تكاليف الشحن هذه الطلبيات مجانية.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 214, speaker: "S1", german: "Ich kaufte eine neue Geldbörse aus Leder.", arabic: "اشتريت محفظة جديدة جلدية.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 215, speaker: "S2", german: "Die Preise im Supermarkt sind leicht gestiegen.", arabic: "الأسعار في السوبرماركت ارتفعت قليلاً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 216, speaker: "S1", german: "Ich sparte Geld für meinen nächsten Urlaub.", arabic: "وفرت نقوداً من أجل إجازتي القادمة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 217, speaker: "S1", german: "Der Elektronikmarkt hatte ein tolles Sonderangebot.", arabic: "متجر الإلكترونيات كان لديه عرض رائع.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 5]] ] },
      { id: 218, speaker: "S1", german: "Ich kaufte Kopfhörer mit zwei Jahren Garantie.", arabic: "اشتريت سماعات أذن مع ضمان لمدة سنتين.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 219, speaker: "S3", german: "Der Verkäufer verpackte das Geschenk sehr schön.", arabic: "لف البائع الهدية بشكل جميل جداً.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 220, speaker: "S1", german: "Ich schätzte den freundlichen Kundenservice sehr.", arabic: "أهديت خدمة العملاء اللطيفة جداً.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 221, speaker: "S1", german: "Ich bestellte Haushaltswaren über eine App.", arabic: "أجدت أدوات منزلية عبر التطبيق.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 222, speaker: "S2", german: "Der Paketbote lieferte das Paket pünktlich ab.", arabic: "ساعي البريد سلم الطرد في الموعد المحدد.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 223, speaker: "S1", german: "Ich unterschrieb die Empfangsbestätigung an der Tür.", arabic: "وقعت إيصال الاستلام عند الباب.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 224, speaker: "S2", german: "Der Supermarkt öffnet morgens um sieben Uhr.", arabic: "يفتح السوبرماركت صباحاً في الساعة السابعة.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 225, speaker: "S2", german: "Am Sonntag bleiben die meisten Geschäfte geschlossen.", arabic: "الأحد تبقى معظم المحلات مغلقة.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 226, speaker: "S1", german: "Ich kaufte frischen Fisch auf dem Wochenmarkt.", arabic: "اشتريت طازجاً من السوق الأسبوعي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 227, speaker: "S3", german: "Die Händler waren sehr freundlich und aufgeschlossen.", arabic: "التجار كانوا لطيفين ومنفتحين للغاية.", map: [ [[0, 1], [1, 1]], [[2, 5], [1, 4]] ] },
      { id: 228, speaker: "S1", german: "Ich kaufte mir eine moderne Sonnenbrille.", arabic: "اشتريت لنفسي نظارة شمسية حديثة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 229, speaker: "S2", german: "Der Rabatt wurde direkt an der Kasse abgezogen.", arabic: "تم خصم الخصم مباشرة عند الكاشير.", map: [ [[0, 1], [2, 3]], [[2, 6], [0, 1]] ] },
      { id: 230, speaker: "S1", german: "Ich war vollkommen zufrieden mit meinen Einkäufen.", arabic: "جئت راضياً تماماً من مشترياتي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 231, speaker: "S1", german: "Ich kaufte eine Packung Kaffee im Angebot.", arabic: "اشتريت عبوة قهوة من العروض.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 232, speaker: "S3", german: "Die Gewürze rochen sehr intensiv und frisch.", arabic: "التوابل كانت رائحتها قوية وطازجة.", map: [ [[0, 1], [1, 1]], [[2, 5], [1, 4]] ] },
      { id: 233, speaker: "S1", german: "Ich vergaß meinen Einkaufszettel auf dem Tisch.", arabic: "نسيت ورقة المشتريات على الطاولة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 234, speaker: "S2", german: "Die Schlange an der Kasse war recht kurz.", arabic: "الخابور عند الكاشير كان قصيراً للغاية.", map: [ [[0, 1], [0, 2]], [[2, 4], [3, 4]] ] },
      { id: 235, speaker: "S1", german: "Ich zahlte mit einer Ein-Euro-Münze.", arabic: "دفعته بعملة معدنية من فئة يورو.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 236, speaker: "S3", german: "Die Drogeriemarkt hatte günstige Kosmetikartikel.", arabic: "متجر أدوات التجميل كان لديه منتجات رخيصة.", map: [ [[0, 1], [0, 2]], [[2, 4], [3, 5]] ] },
      { id: 237, speaker: "S1", german: "Ich nahm mir ein Prospekt mit den Angeboten mit.", arabic: "أخذت معي مجلة العروض المطبوعة.", map: [ [[0, 1], [1, 1]], [[2, 6], [2, 4]] ] },
      { id: 238, speaker: "S2", german: "Die Ware wurde sicher in Kartons verpackt.", arabic: "البضاعة تم تجميعها بأمان في كراتين.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 5]] ] },
      { id: 239, speaker: "S1", german: "Ich bewahrte den Garantieschein sorgfältig auf.", arabic: "استحفظ بحالة الضمان بعناية شديدة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 240, speaker: "S1", german: "Das Einkaufen hat mir heute viel Freude gemacht.", arabic: "التسوق أسعدني كثيراً اليوم.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] }
    ]
  },
  {
    id: "cat-4",
    title: "4. 🚗 قصة السفر والانتقال (Reisen & Verkehr)",
    sentences: [
      { id: 241, speaker: "S1", german: "Letzte Woche plante ich eine Reise nach Berlin.", arabic: "الأسبوع الماضي خططت لرحلة إلى برلين.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 242, speaker: "S1", german: "Ich buchte eine Fahrkarte online über die App.", arabic: "حجزت تذكرة سفر عبر الإنترنت بواسطة التطبيق.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 243, speaker: "S1", german: "Am Reisetag packte ich meinen Koffer morgens.", arabic: "في يوم السفر حزمت حقيبتي صباحاً.", map: [ [[0, 1], [0, 2]], [[2, 5], [3, 4]] ] },
      { id: 244, speaker: "S1", german: "Ich fuhr mit dem Bus zum Hauptbahnhof.", arabic: "ذهبت بالحافلة إلى المحطة الرئيسية.", map: [ [[0, 1], [0, 0]], [[1, 1], [1, 1]], [[2, 5], [1, 4]] ] },
      { id: 245, speaker: "S2", german: "Der Bahnhof war voller Reisender mit Gepäck.", arabic: "المحطة كانت ممتهلة بالمسافرين بحقائبهم.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 246, speaker: "S1", german: "Ich schaute auf die Anzeigetafel nach meinem Gleis.", arabic: "نظرت إلى لوحة المواعيد لمعرفة رصيفي.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 247, speaker: "S2", german: "Der Zug hatte leider fünf Minuten Verspätung.", arabic: "القطار كان متأخراً خمس دقائق.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 248, speaker: "S1", german: "Als der Zug ankam, stieg ich zügig ein.", arabic: "عندما وصل القطار، صعدت بسرعة.", map: [ [[0, 3], [0, 2]], [[4, 6], [3, 4]] ] },
      { id: 249, speaker: "S1", german: "Ich fand meinen reservierten Sitzplatz am Fenster.", arabic: "وجدت مقعدي المحجوز بجوار النافذة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 250, speaker: "S3", german: "Der Zugbegleiter kontrollierte freundlich mein Ticket.", arabic: "مفتش القطار فحص تذكري بلطف.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 3]] ] },
      { id: 251, speaker: "S2", german: "Die Fahrt dauerte ungefähr drei Stunden.", arabic: "الرحلة استغرقت حوالي ثلاث ساعات.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 252, speaker: "S1", german: "Ich genoss die schöne Landschaft während der Fahrt.", arabic: "استمتعت بالمناظر الطبيعية أثناء الرحلة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 253, speaker: "S2", german: "Pünktlich kamen wir am Zielbahnhof an.", arabic: "وصلنا في الموعد إلى محطة الوصول.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 254, speaker: "S3", german: "Ich nahm die U-Bahn zum Hotel im Zentrum.", arabic: "ركبت مترو الأنفاق إلى الفندق في المركز.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 255, speaker: "S3", german: "An der Rezeption bekam ich mein Zimmerschlüssel.", arabic: "في الاستقبال حصلت على مفتاح الغرفة.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 4]] ] },
      { id: 256, speaker: "S1", german: "Das Zimmer war sehr sauber und gemütlich.", arabic: "الغرفة كانت نظيفة وواسعة جيدة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 257, speaker: "S1", german: "Ich machte einen Spaziergang durch die historische Altstadt.", arabic: "قمت بنزهة مميزة في المدينة القديمة التاريخية.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 258, speaker: "S1", german: "Ich fotografierte viele schöne Sehenswürdigkeiten.", arabic: "التقطت صوراً للكثير من المعالم الجميلة.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 259, speaker: "S1", german: "Am Abend nahm ich ein Taxi zurück zum Hotel.", arabic: "في المساء أخذت تاكسي عائداً للفندق.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 260, speaker: "S1", german: "Die Reise war ein unvergessliches Erlebnis für mich.", arabic: "الرحلة كانت تجربة لا تُنسى بالنسبة لي.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 261, speaker: "S1", german: "Ich verpasste meinen Anschlusszug wegen der Verzögerung.", arabic: "فائتي قطار التحويلة بسبب التأخير.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 262, speaker: "S3", german: "Die Information half mir, eine neue Verbindung zu finden.", arabic: "مكتب الاستعلامات ساعدني في إيجاد وصلة آمنة أخرى.", map: [ [[0, 1], [0, 1]], [[2, 6], [1, 5]] ] },
      { id: 263, speaker: "S1", german: "Ich kaufte eine Tageskarte für alle öffentlichen Verkehrsmittel.", arabic: "اشتريت تذكرة يومية لعدة وسائل النقل.", map: [ [[0, 1], [0, 0]], [[2, 8], [1, 4]] ] },
      { id: 264, speaker: "S1", german: "Die Straßenbahn hielt direkt vor dem Museum.", arabic: "الترام توقف أمام المتحف مباشرة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 265, speaker: "S1", german: "Ich mietete ein Fahrrad für eine Erkundungstour.", arabic: "استأجرت دراجة لمشاهدة الاستكشافات.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 266, speaker: "S1", german: "Der Flug hatte wegen des Wetters zwei Stunden Verspätung.", arabic: "الرحلة الجوية تأخرت ساعتين بسبب سوء الأحوال.", map: [ [[0, 1], [0, 1]], [[2, 7], [2, 5]] ] },
      { id: 267, speaker: "S1", german: "Am Flughafen ging ich zügig durch die Sicherheitskontrolle.", arabic: "في المطار مررت بسرعة عبر التفتيش الأمني.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 268, speaker: "S2", german: "Das Flugzeug startete pünktlich von der Landebahn.", arabic: "الطائرة أقدمت في الموعد من مدرج الهبوط.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 269, speaker: "S1", german: "Ich schnallte meinen Sicherheitsgurt während des Flugs an.", arabic: "ربطت حزام الأمان أثناء الرحلة الجوية.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 270, speaker: "S3", german: "Die Flugbegleiterin servierte kalte Getränke und Snacks.", arabic: "مضيفة الطيران قدمت مشروبات باردة ووجبات خفيفة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 271, speaker: "S2", german: "Wir landeten sicher auf dem Zielflughafen.", arabic: "هبطنا بسلم في مطار الوصول.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 272, speaker: "S1", german: "Ich holte mein Gepäck an der Gepäckausgabe ab.", arabic: "استلمت أمتعنتي من مهر استلام الأمتعة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 273, speaker: "S1", german: "Das Navigationssystem zeigte uns den schnellsten Weg.", arabic: "نظام الملاحة أظهر لنا الطريق الأسرع.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 274, speaker: "S2", german: "Wir fuhren vorsichtig über die steile Bergstraße.", arabic: "قُدنا بحذر عبر الجبل الصاعد.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 275, speaker: "S2", german: "Die Autobahn war frei von Stau und Baustellen.", arabic: "الطريق السريع كان خالياً من الازدحام والأشغال.", map: [ [[0, 1], [1, 1]], [[2, 6], [0, 0]] ] },
      { id: 276, speaker: "S1", german: "Wir machten eine Kaffeepause an der Raststätte.", arabic: "أخذنا استراحة قهوة في محطة الاستراحة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 277, speaker: "S1", german: "Ich tankte das Auto voll an der Tankstelle.", arabic: "ملأت السيارة بالوقود في محطة البنزين.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 278, speaker: "S3", german: "Der Parkplatz vor dem Hotel war kostenlos.", arabic: "جراج السيارات أمام الفندق كان مجانياً.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 279, speaker: "S1", german: "Ich zeigte meinen Reisepass bei der Passkontrolle vor.", arabic: "أبرزت جواز میری عند نفحة التفتيش.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 280, speaker: "S3", german: "Gute Reise und kommen Sie gut an!", arabic: "رحلة معبدة ووصلت بسلامة الله.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 281, speaker: "S1", german: "Ich entwertete die Fahrkarte am Entwerter.", arabic: "ختمت تذكرة السفر في جهاز الختم.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 282, speaker: "S2", german: "Die Fähre setzte uns über den breiten Fluss.", arabic: "العبارة نقلتنا عبر النهر العريض.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 283, speaker: "S1", german: "Ich kaufte eine Rückfahrkarte mit Rabatt.", arabic: "اشتريت تذكرة عودة مخفضة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 284, speaker: "S2", german: "Der Schifffahrtsausflug war wunderschön.", arabic: "الرحلة السَفَرية البحرية كانت جميلة جداً.", map: [ [[0, 1], [0, 2]], [[2, 3], [3, 4]] ] },
      { id: 285, speaker: "S1", german: "Ich verstauate meine Tasche in der Gepäckablage.", arabic: "رفعت حقيبتي في رف الأمتعة العلوي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 286, speaker: "S2", german: "Der Zug fuhr durch einen langen Tunnel.", arabic: "القطار مر عبر نفق طويل.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 287, speaker: "S1", german: "Ich stieg an der falschen Haltestelle aus.", arabic: "نزلت في محطة خاطئة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 288, speaker: "S1", german: "Ein freundlicher Passant erklärte mir den Weg.", arabic: "مار توجّه خرج لي الطريق.", map: [ [[0, 2], [0, 1]], [[3, 5], [2, 3]] ] },
      { id: 289, speaker: "S2", german: "Ich nutzte eine digitale Karte auf meinem Smartphone.", arabic: "استخدمت خريطة مريحة على هاتفي الذكي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 290, speaker: "S2", german: "Wir erreichten den Gipfel des Berges mit der Seilbahn.", arabic: "وصلنا قمة الجبل بالتلفريك.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 291, speaker: "S1", german: "Ich reservierte einen Fensterplatz im Flugzeug.", arabic: "حجزت مقعداً بجوار النافذة للطائرة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 292, speaker: "S2", german: "Die Ampal schaltete auf Grün um.", arabic: "تحولت إشارة المرور إلى اللون الأخضر.", map: [ [[0, 1], [1, 2]], [[2, 4], [0, 0]] ] },
      { id: 293, speaker: "S1", german: "Der Taxifahrer war sehr höflich und fuhr sicher.", arabic: "سائق التاكسي كان مؤدباً وبقي بأمان.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 294, speaker: "S1", german: "Ich bewunderte die Aussicht aus dem Zugfenster.", arabic: "أعجبت بالمشهد من نافذة القطار.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 295, speaker: "S2", german: "Wir kehrten nach einer Woche voller Abenteuer zurück.", arabic: "عدنا بعد أسبوع مليء بالمغامرات.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] }
    ]
  },
  {
    id: "cat-5",
    title: "5. 🏠 قصة اليوم والروتين المنزلي (Zuhause & Alltag)",
    sentences: [
      { id: 296, speaker: "S1", german: "Jeden Morgen weckt mich mein Wecker um sechs Uhr.", arabic: "كل صباح يوقظني المنبه في الساعة السادسة.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 297, speaker: "S1", german: "Ich stehe auf, öffne das Fenster und lüfte das Zimmer.", arabic: "أستيقظ، أفتح النافذة وأهوي الغرفة.", map: [ [[0, 2], [0, 0]], [[3, 7], [1, 4]] ] },
      { id: 298, speaker: "S1", german: "Im Badezimmer putze ich meine Zähne und dusche warm.", arabic: "في الحمام أنظف أسنانى وأتحمم بماء دافئ.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 299, speaker: "S1", german: "Ich ziehe mir saubere Kleidung an und kämme mich.", arabic: "أرتدي ملابسة نظيفة وأمشط شعري.", map: [ [[0, 4], [0, 2]], [[5, 6], [3, 3]] ] },
      { id: 300, speaker: "S1", german: "In der Küche bereite ich ein leckeres Frühstück zu.", arabic: "في المطبخ أعد إفطاراً شهياً.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 3]] ] },
      { id: 301, speaker: "S1", german: "Ich trinke eine Tasse heißen Kaffee mit Milch.", arabic: "أشرب كوباً من القهوة الساخنة مع الحليب.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 302, speaker: "S1", german: "Nach dem Essen räume ich den Tisch ab und spüle ab.", arabic: "بعد الأكل أنظف الطاولة وأغسل الأطباق.", map: [ [[0, 1], [0, 1]], [[2, 7], [2, 5]] ] },
      { id: 303, speaker: "S1", german: "Ich gieße die Blumen auf dem Balkon mit Wasser.", arabic: "أسقي الزهور على الشرفة بالماء.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 304, speaker: "S1", german: "Um acht Uhr verlasse ich das Haus und schließe ab.", arabic: "في الساعة الثامنة أغادر المنزل وأقفل الباب.", map: [ [[0, 2], [0, 1]], [[3, 7], [2, 5]] ] },
      { id: 305, speaker: "S1", german: "Am Nachmittag komme ich müde nach Hause zurück.", arabic: "في بعد الظهر أعود متعباً إلى البيت.", map: [ [[0, 1], [0, 2]], [[2, 5], [3, 5]] ] },
      { id: 306, speaker: "S1", german: "Ich ziehe meine Schuhe aus und ziehe Hausschuhe an.", arabic: "أخلع حذائي وأرتدي الحذاء المنزلي.", map: [ [[0, 3], [0, 1]], [[4, 6], [2, 4]] ] },
      { id: 307, speaker: "S1", german: "Ich sauge den Teppich im Wohnzimmer gründlich.", arabic: "أكنس سجادة غرفة المعيشة بعناية.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 308, speaker: "S1", german: "Ich schalte die Waschmaschine ein, um Wäsche zu waschen.", arabic: "أشغل الغسالة لغسل الملابس.", map: [ [[0, 3], [0, 1]], [[4, 6], [2, 3]] ] },
      { id: 309, speaker: "S1", german: "Später hänge ich die feuchte Wäsche zum Trocknen auf.", arabic: "لاحقاً أنشر الملابس الرطبة لتجف.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 310, speaker: "S1", german: "Ich koche ein frisches Abendessen für die Familie.", arabic: "أطبخ عشاءً طازجاً لعائلتي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 311, speaker: "S2", german: "Wir sitzen alle zusammen am Esstisch und reden.", arabic: "نجلس جميعاً حول طاولة الطعام ونتحدث.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 312, speaker: "S1", german: "Nach dem Essen mache ich es mir auf dem Sofa bequem.", arabic: "بعد الأكل أستريح على الأريكة.", map: [ [[0, 1], [0, 1]], [[2, 7], [2, 4]] ] },
      { id: 313, speaker: "S1", german: "Ich sehe mir einen interessanten Film im Fernsehen an.", arabic: "أشاهد فيلمنا ممتعاً في التلفاز.", map: [ [[0, 2], [0, 0]], [[3, 6], [1, 4]] ] },
      { id: 314, speaker: "S1", german: "Ich lese ein paar Seiten in meinem Lieblingsbuch.", arabic: "أقرأ بضع صفحات من كتابي المفضل.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 315, speaker: "S1", german: "Um zweiundzwanzig Uhr gehe ich schlafen und träume schön.", arabic: "في الساعة العاشرة مساءً أنام وأحلم جميلة.", map: [ [[0, 2], [0, 2]], [[3, 7], [3, 6]] ] },
      { id: 316, speaker: "S1", german: "Ich wische den Staub von den Holzregalen ab.", arabic: "أمسح الغبار من الرفوف الخشبية.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 317, speaker: "S3", german: "Der Postbote brachte ein Paket und klingelte an der Tür.", arabic: "ساعي البريد أحضر طرداً ورن الجرس عند الباب.", map: [ [[0, 1], [0, 1]], [[2, 7], [2, 6]] ] },
      { id: 318, speaker: "S1", german: "Ich bügelte meine Hemden für die Arbeitswoche.", arabic: "كويت قمصاني لأسبوع العمل.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 319, speaker: "S1", german: "Der Mülleimer war voll, also brachte ich ihn raux.", arabic: "سلة القامة كانت مملوءة، لذا أفرغتها للخارج.", map: [ [[0, 1], [0, 1]], [[2, 7], [2, 5]] ] },
      { id: 320, speaker: "S2", german: "Ich stellte die frische Milch in den Kühlschrank.", arabic: "وقعت الحليب الطازج في الثلاجة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 321, speaker: "S1", german: "Die Schlüssel lagen auf der Kommode im Flur.", arabic: "المفاتيح كانت موضوعة على الخزانة في الممر.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 322, speaker: "S1", german: "Ich putzte die Fenster in Schlafzimmer streifenfrei.", arabic: "نظفت نوافذ غرفة النوم بدون بيع.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 323, speaker: "S2", german: "Ich zündete eine wohlriechende Kerze im Zimmer an.", arabic: "أضئت شمعة مبخرة في الغرفة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 324, speaker: "S1", german: "Das Badezimmer war frisch geputzt und duftete gut.", arabic: "الحمام كان نظيفاً منتعشاً ورائحته طيبة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 325, speaker: "S1", german: "Ich wechselte die Bettwäsche am Wochenende.", arabic: "غيرت أهدية السرير في نهاية الأسبوع.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 326, speaker: "S2", german: "Der Backofen war vorgeheizt für den Kuchen.", arabic: "الفرن كان مسخناً مسبقاً لتجهيز الكعكة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 327, speaker: "S1", german: "Ich räumte die Geschirrspülmaschine am Morgen aus.", arabic: "أفرغت غسالة الأطباق في الصباح.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 328, speaker: "S3", german: "Die Nachbarn im Haus waren sehr ruhig und nett.", arabic: "الجيران في العمارة كانوا هادئين ولطيفين جداً.", map: [ [[0, 2], [0, 2]], [[3, 6], [3, 5]] ] },
      { id: 329, speaker: "S1", german: "Ich schaltete die Heizung ein, weil es kalt war.", arabic: "شغلت التدفئة لأن الجو كان بارداً.", map: [ [[0, 3], [0, 1]], [[4, 6], [2, 4]] ] },
      { id: 330, speaker: "S1", german: "Das Sofa war sehr bequem zum Entspannen.", arabic: "الأريكة كانت مريحة جداً للاسترخاء.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 331, speaker: "S1", german: "Ich steckte das Ladekabel in die Steckdose.", arabic: "وقعت كابل الشاحن في مقبس الكهرباء.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 332, speaker: "S1", german: "Der Spiegel im Flur hing an der Wand.", arabic: "المرآة في الممر كانت معلقة على الحائط.", map: [ [[0, 2], [0, 2]], [[3, 5], [3, 5]] ] },
      { id: 333, speaker: "S1", german: "Ich kochte eine heiße Suppe am Abend.", arabic: "طباخت شوربة ساخنة في المساء.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 334, speaker: "S1", german: "Das Bett war sehr weich und gemütlich.", arabic: "السرير كان ناعماً ومريحاً للغاية.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 335, speaker: "S1", german: "Ich machte das Licht im Flur aus.", arabic: "أطفأت الضوء في الممر.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 336, speaker: "S1", german: "Ich schloss die Fenster wegen des Lärms.", arabic: "أغلقت النوافذ بسبب الضوضاء.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 337, speaker: "S1", german: "Ich stellte den Wecker auf sieben Uhr morgens.", arabic: "ضبطت المنبه على الساعة السابعة صباحاً.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 338, speaker: "S1", german: "Die Wohnung war sauber und gut aufgeräumt.", arabic: "الشقة كانت نظيفة وم مرتبة جداً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 339, speaker: "S1", german: "Ich trank ein Glas kalte Milch vor dem Schlafen.", arabic: "شربت كوباً من الحليب البارد قبل النوم.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 340, speaker: "S1", german: "Ich schlief schnell und tief ein.", arabic: "نمت بسرعة وبشكل عميق.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] }
    ]
  },
  {
    id: "cat-6",
    title: "6. 🍕 قصة تجربة المطعم والأكل (Essen & Trinken)",
    sentences: [
      { id: 341, speaker: "S1", german: "Gestern Abend reservierten wir einen Tisch im Restaurant.", arabic: "مساء أمس حجزنا طاولة في المطعم.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 342, speaker: "S1", german: "Der Ober begrüßte uns freundlich und brachte die Speisekarte.", arabic: "رحب بنا الشامل بلطف وأحضر قائمة الطعام.", map: [ [[0, 1], [2, 2]], [[2, 7], [0, 5]] ] },
      { id: 343, speaker: "S1", german: "Als Vorspeise bestellten wir eine warme Tomatensuppe.", arabic: "كمقبلات طلبنا شوربة طماطم دافئة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 344, speaker: "S1", german: "Als Hauptgericht wählte ich ein gegrilltes Hähnchen mit Reis.", arabic: "كطبق رئيسي اخترت دجاجاً مشوياً مع الأرز.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 345, speaker: "S3", german: "Meine Frau nahm einen frischen Salat mit Olivenöl.", arabic: "زوجتي أخذت سلطة طازجة بزيت الزيتون.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 346, speaker: "S1", german: "Wir tranken dazu frisches Mineralwasser ohne Kohlensäure.", arabic: "شربنا مع ذلك ماء معدنياً بدون غازات.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 347, speaker: "S1", german: "Das Essen war hervorragend gewürzt und sehr lecker.", arabic: "الطعام كان متقناً ومتبلاً ولذيذاً جداً.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 348, speaker: "S1", german: "Zum Nachtisch bestellten wir zwei Stücke Apfelkuchen mit Eis.", arabic: "ستنتعمة حديداً قدمنا كعكة تفاح مع أيس كريم.", map: [ [[0, 1], [0, 0]], [[2, 7], [1, 6]] ] },
      { id: 349, speaker: "S2", german: "Der Kellner fragte: 'Hat alles gut geschmeckt?'", arabic: "سأل النادل: 'هل كان كل شيء لذيذاً؟'", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 4]] ] },
      { id: 350, speaker: "S1", german: "Wir antworteten: 'Ja, es war absolut köstlich!'", arabic: "أجبنا: 'نعم، كان رائع المذاق تماماً'.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 351, speaker: "S1", german: "Am Ende verlangten wir die Rechnung und zahlten getrennt.", arabic: "في النهاية طلبنا الفاتورة ودفعنا بشكل تماماً.", map: [ [[0, 1], [0, 0]], [[2, 7], [2, 5]] ] },
      { id: 352, speaker: "S1", german: "Ich gab dem aufmerksamen Kellner ein gutes Trinkgeld.", arabic: "أعطيت للنادل المهتم إكرامية جيدة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 353, speaker: "S1", german: "Wir verließen das Restaurant sehr satt und zufrieden.", arabic: "غادرنا المطعم ونحن شبعانون وراضون جداً.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 354, speaker: "S3", german: "Am Wochenende kochen wir gerne selbst zu Hause.", arabic: "في نهاية الأسبوع نحب أن نطبخ بأنفسنا في البيت.", map: [ [[0, 1], [0, 0]], [[2, 6], [2, 7]] ] },
      { id: 355, speaker: "S2", german: "Guten Appetit und Prost auf die Gesundheit!", arabic: "بالهناء والشفاء ومتاع وتهب الصحة!", map: [ [[0, 1], [2, 5], [2, 5]] ] },
      { id: 356, speaker: "S1", german: "Ich bestellte eine Steinofenpizza mit Käse und Pilzen.", arabic: "طلبت بيزا بحجر مع جبن وفطر.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 357, speaker: "S1", german: "Das Fleisch war unglaublich zart und saftig.", arabic: "الللحم كان طرياً وشديد اللعارة بشكل لا يصدق.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 358, speaker: "S3", german: "Wir tranken einen frischen Orangensaft zum Frühstück.", arabic: "فريتنا عصير برتقال طازجاً من الإفطار.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 359, speaker: "S2", german: "Der Koch verwendete nur frische Bio-Zutaten.", arabic: "الطباخ استخدم مكونات حيوية طازجة فقط.", map: [ [[0, 1], [0, 1]], [[2, 5], [1, 4]] ] },
      { id: 360, speaker: "S1", german: "Ich trinke meinen Kaffee immer ohne Zucker.", arabic: "أنا أحب قهوتي دائماً بدون سكر.", map: [ [[0, 1], [0, 0]], [[2, 5], [2, 4]] ] },
      { id: 361, speaker: "S1", german: "Das Brot aus der Bäckerei war noch warm.", arabic: "الخبز من المخبز كان لا يزال دافئاً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 362, speaker: "S1", german: "Wir bestellten Essen zum Mitnehmen für die Feier.", arabic: "طلبنا طعاماً معبأً للحفلة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 363, speaker: "S1", german: "Die Gemüsesuppe war perfekt für den kalten Winterabend.", arabic: "شوربة الخضار كانت مثالية لتهمة الشتاء الباردة.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 364, speaker: "S1", german: "Ich esse lieber Fisch als Rindfleisch.", arabic: "أفضل أكل السمك على لحم البقر.", map: [ [[0, 1], [0, 0]], [[2, 4], [2, 4]] ] },
      { id: 365, speaker: "S2", german: "Das Restaurant bot ein vegetarisches Menü an.", arabic: "المطعم قدم قائمة طعام نباتية.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 366, speaker: "S1", german: "Wir genossen ein Drei-Gänge-Menü in Kerzenschein.", arabic: "استمتعنا بقائمة من 3 أطباق على ضوء الشموع.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 6]] ] },
      { id: 367, speaker: "S1", german: "Ich reichte das Salz und den Pfeffer rüber.", arabic: "مررت الملح والفلفل الأسود.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 368, speaker: "S3", german: "Der Kuchen schmeckte wie von meiner Oma.", arabic: "الكعكة كانت طعمها حميمياً مثل كعكة جدتي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 369, speaker: "S1", german: "Wir tranken heiße Schokolade mit Schlagsahne.", arabic: "شربت شوكولاتة ساخنة مع كريمة خفق.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 370, speaker: "S1", german: "Das Dessert war eine perfekte Abrundung des Essens.", arabic: "الحلوى كانت خاتمة معدلها للتوجية.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 371, speaker: "S1", german: "Ich schnitt das frische Brot mit dem Messer.", arabic: "لحمة الخبز الخارج بالسفنين.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 372, speaker: "S3", german: "Wir deckten den Tisch für die Gäste festlich.", arabic: "جهزنا الطاولة لتشهود بشكل احتفالي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 373, speaker: "S2", german: "Der Käse hatte ein sehr starkes Aroma.", arabic: "الجبن كان له نكهة رائعة قوية جداً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 374, speaker: "S1", german: "Ich trank ein kaltes Glas Apfelsaftschorle.", arabic: "شربت كوباً بارداً من عصير التفاح الفوار.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 375, speaker: "S2", german: "Das Buffet bot viele orientalische Spezialitäten.", arabic: "البوفيه قدم العديد من الأطباق الشرقية المتميزة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 376, speaker: "S1", german: "Ich probierte zum ersten Mal Sushi.", arabic: "جربت السوشي لأول مرة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 377, speaker: "S1", german: "Die Pasta war mit frischer Basilikumsoße serviert.", arabic: "المكرونة قدمت مع منحة الريحان الطازجة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 378, speaker: "S1", german: "Ich hatte nach dem Sport großen Durst.", arabic: "كان لدي عطش شديد بعد الرياضة.", map: [ [[0, 1], [0, 0]], [[2, 4], [2, 4]] ] },
      { id: 379, speaker: "S1", german: "Wir frühstückten im sonnigen Biergarten.", arabic: "تناولنا الإفطار في جلسة البهجي المشمسة.", map: [ [[0, 1], [0, 1]], [[2, 3], [2, 3]] ] },
      { id: 380, speaker: "S1", german: "Das Essen war reichlich und sehr schmackhaft.", arabic: "الطعام كان وفيراً وشديداً للغماية.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 381, speaker: "S1", german: "Ich strich Butter auf mein Brötchen.", arabic: "مددت زبدة على خبزي.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 382, speaker: "S3", german: "Wir bestellten zusätzliche Pommes frites dazu.", arabic: "طلبنا بطاطس مقلية إضافية مع الطبق.", map: [ [[0, 1], [0, 0]], [[3, 4], [1, 4]] ] },
      { id: 383, speaker: "S1", german: "Der Fisch war ohne Gräten zubereitet.", arabic: "السمك طُبخ بدون شوك.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 384, speaker: "S1", german: "Ich trank Kräutertee zur Beruhigen des Magens.", arabic: "تريد هي أخشاب لت تهدئة المعدة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 385, speaker: "S2", german: "Das Restaurant lag direkt an Ufer des Sees.", arabic: "المطعم كان يقع مباشرة على ضفة البحيرة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] }
    ]
  },
  {
    id: "cat-7",
    title: "7. 💼 قصة يوم العمل والمهام (Arbeit & Büro)",
    sentences: [
      { id: 386, speaker: "S1", german: "Jeden Morgen komme ich pünktlich ins Büro.", arabic: "كل صباح أصل إلى المكتب في الموعد.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 387, speaker: "S1", german: "Zuerst schalte ich meinen Computer an und lese E-Mails.", arabic: "أولاً أتشغل الكمبيوتر وأقرأ الرسائل الإلكترونية.", map: [ [[0, 1], [0, 0]], [[2, 7], [1, 4]] ] },
      { id: 388, speaker: "S2", german: "Mein Chef organisierte eine wichtige Teambesprechung um neun.", arabic: "مديري نظم اجتماع فريق مهم في الساعة التاسعة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 389, speaker: "S1", german: "Wir besprachen die neuen Ziele für das Projekt.", arabic: "ناقشنا الأهداف الجديدة للمشروع.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 390, speaker: "S1", german: "Ich erstellte eine Präsentation mit vielen Grafiken.", arabic: "أنشأت عرضاً تقديمياً برسومات كثيرة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 391, speaker: "S1", german: "Mein Kollege half mir beim Ausdrucken der Berichte.", arabic: "زميلي ساعدني في طباعة التقارير.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 392, speaker: "S1", german: "Um zwölf Uhr machten wir eine gemeinsame Mittagspause.", arabic: "في الساعة 12 أخذنا استراحة غذاء مشتركة.", map: [ [[0, 2], [0, 3]], [[3, 6], [4, 5]] ] },
      { id: 393, speaker: "S1", german: "Am Nachmittag schrieb ich Verträge für die Kunden.", arabic: "في بعد الظهر كتبت عقوداً للعملاء.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 3]] ] },
      { id: 394, speaker: "S1", german: "Ich ordnete die Dokumente bei der Personalabteilung ein.", arabic: "قدمت الوثائق لقسم الموارد البشرية.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 395, speaker: "S1", german: "Um siebzehn Uhr beendete ich meine Arbeit zufrieden.", arabic: "في الساعة الخامسة أنهيت عملي راهناً.", map: [ [[0, 2], [0, 2]], [[3, 5], [3, 4]] ] },
      { id: 396, speaker: "S1", german: "Ich wünschte meinen Kollegen einen schönen Feierabend.", arabic: "تمهيد لزميلتي وقت استراحة معهد.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 397, speaker: "S1", german: "Ich speicherte alle Dateien sicher auf den Server.", arabic: "سجلت جميع الملفات بأمان على السيرفر.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 398, speaker: "S1", german: "Nächste Woche habe ich drei Tage Urlaub.", arabic: "الأسبوع القادم لدي 3 أيام إجازة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 399, speaker: "S1", german: "Ich hatte ein erfolgreiches Vorstellungsgespräch am Dienstag.", arabic: "كان لدي مقابلة عمل ناجحة يوم الثلاثاء.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 400, speaker: "S1", german: "Wir arbeiteten heute im Homeoffice über das Internet.", arabic: "عملنا اليوم من المنزل عبر الإنترنت.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 401, speaker: "S1", german: "Ich schickte die Bestätigung per E-Mail raus.", arabic: "أرسلت التأكيد عبر البريد الإلكتروني.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 402, speaker: "S1", german: "Der Kopierer brauchte neues Papier und Tinte.", arabic: "ماكينة التصوير احتاجت ورَقاً وحبراً جديداً.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 403, speaker: "S1", german: "Ich trug alle Termine sorgfältig in den Kalender ein.", arabic: "سجلت جميع المواعيد بعناية في التقويم.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 404, speaker: "S1", german: "Mein Gehalt wurde am Monatsende überwiesen.", arabic: "تحول راتبي في نهاية الشهر.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 405, speaker: "S2", german: "Der Arbeitsplatz war sehr sauber und ordentlich.", arabic: "مكان العمل كان نظيفاً ومنظماً جداً.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 406, speaker: "S2", german: "Wir verhandelten über das neue Projektbudget.", arabic: "تفاوضنا حول ميزانية المشروع الجديدة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 407, speaker: "S3", german: "Der Kunde lobte unsere schnelle Bearbeitung.", arabic: "أثنى العميل على إنجازنا السريع.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 408, speaker: "S1", german: "Ich machte heute zwei Stunden Überstunden.", arabic: "عملت اليوم ساعتين إضافيتين.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 409, speaker: "S1", german: "Die Konferenz fand im großen Festsaal statt.", arabic: "المؤتمر أقيم في القاعة الكبرى.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 410, speaker: "S1", german: "Ich schaltete mein Diensthandy am Feierabend aus.", arabic: "أطفأت هاتف العمل عند انتهاء الدوام.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 411, speaker: "S1", german: "Wir organisierten einen Teamausflug am Freitag.", arabic: "نظمنا رحلة فريق عمل يوم الجمعة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 412, speaker: "S2", german: "Ich leitete die Anfrage an die Fachabteilung weiter.", arabic: "أعدت توجيه الطلب للقسم المختص.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 3]] ] },
      { id: 413, speaker: "S2", german: "Die Frist für das Projekt läuft morgen ab.", arabic: "الموعد النهائي للمشروع ينتهي غداً.", map: [ [[0, 3], [0, 2]], [[4, 5], [3, 3]] ] },
      { id: 414, speaker: "S1", german: "Ich bekam eine Rückmeldung vom Abteilungsleiter.", arabic: "تلقيت مني رد من رئيس القسم.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 415, speaker: "S1", german: "Wir erreichten unsere Monatsziele ohne Probleme.", arabic: "حققت أهدافنا الشهرية بدون مشاكل.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 416, speaker: "S1", german: "Ich bestellte neue Büromaterialien für das Team.", arabic: "حجزت أدوات مكتبية جديدة للتفريق.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 417, speaker: "S3", german: "Der IT-Support löste mein Computerproblem schnell.", arabic: "الدعم الفني حل مشكلة كمبيوتري بسرعة.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 3]] ] },
      { id: 418, speaker: "S1", german: "Ich stellte die Kaffeemaschine in der Küche bereit.", arabic: "جهزت ماكينة القهوة في المطبخ.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 419, speaker: "S2", german: "Wir besprachen die Ergebnisse des letzten Quartals.", arabic: "ناقشنا نتائج الربع السابق من السنة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 420, speaker: "S1", german: "Ich verließ das Büro mit einem guten Gefühl.", arabic: "تركت المكتب يتصور إيجابي طيبا.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 421, speaker: "S1", german: "Ich heftete die Dokumente in den Ordner ein.", arabic: "رفعت الوثائق في المجلد.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 422, speaker: "S2", german: "Wir planten eine Schulung für die neuen Mitarbeiter.", arabic: "خططنا لدورة تدريبية للموظفين الجدد.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 423, speaker: "S2", german: "Der Chef bedankte sich für den vollen Einsatz.", arabic: "شكر المدير الجميع على المجهود الكامل.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 424, speaker: "S1", german: "Ich verschickte die Einladungen für das Seminar.", arabic: "أرسلت الدعوات للندوة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 425, speaker: "S3", german: "Das Arbeitsklima im Büro war sehr angenehm.", arabic: "بيئة العمل في المكتب كانت سليمة جداً.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] }
    ]
  },
  {
    id: "cat-8",
    title: "8. ⚽ قصة ممارسة الرياضة والأنشطة (Sport & Freizeit)",
    sentences: [
      { id: 426, speaker: "S1", german: "Am Wochenende mache ich gerne Sport im Park.", arabic: "في نهاية الأسبوع أحب ممارسة الرياضة بالحديقة.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 427, speaker: "S1", german: "Ich gehe dreimal die Woche ins Fitnessstudio.", arabic: "أذهب ثلاث مرات أسبوعياً لصالة الألعاب.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 428, speaker: "S2", german: "Wir spielten gestern ein spannendes Fußballspiel mit Freunden.", arabic: "لعبنا بالأمس مباراة كرة قدم حماسية مع الأصدقاء.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 429, speaker: "S2", german: "Meine Mannschaft gewann das Spiel mit drei zu zwei.", arabic: "فاز فريقي بالمباراة بنتيجة 3 إلى 2.", map: [ [[0, 1], [1, 1]], [[2, 7], [0, 0]] ] },
      { id: 430, speaker: "S1", german: "Im Sommer gehe ich oft im See schwimmen.", arabic: "في الصيف أذهب كثيراً للسباحة بالبحيرة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 431, speaker: "S1", german: "Ich fahre gerne mit dem Fahrrad durch den Wald.", arabic: "أحب ركوب الدراجة عبر الغابة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 432, speaker: "S2", german: "Wir machten eine lange Wanderung in den Bergen.", arabic: "قمنا برحلة مشي طويلة في الجبال.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 433, speaker: "S3", german: "Am Abend spiele ich Schach mit meinem Bruder.", arabic: "في المساء ألعب الشطرنج مع أخي.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 434, speaker: "S1", german: "Meine Hobbies sind Lesen, Fotografie und Reisen.", arabic: "هواياتي هي القراءة والتصوير والسفر.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 435, speaker: "S3", german: "Sport hält den Körper gesund und fit.", arabic: "الرياضة تحافظ على صحة الجسم ونشاطه.", map: [ [[0, 1], [0, 0]], [[3, 5], [1, 4]] ] },
      { id: 436, speaker: "S2", german: "Wir bauten ein Zelt auf dem Campingplatz auf.", arabic: "نصبنا خيمة في موقع التخييم.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 437, speaker: "S1", german: "Ich nahm an einem Fünf-Kilometer-Lauf teil.", arabic: "شاركت في سباق جري 5 كيلومترات.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 438, speaker: "S3", german: "Er spielt hervorragend Tennis und Tischtennis.", arabic: "هو يلعب التنس وكرة الطاولة بمستوى ممتاز.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 5]] ] },
      { id: 439, speaker: "S2", german: "Wir mieteten ein Boot für einen Ausflug auf dem Fluss.", arabic: "استأجرنا قاربّاً لرحلة نزهة على النهر.", map: [ [[0, 1], [0, 0]], [[2, 7], [1, 3]] ] },
      { id: 440, speaker: "S1", german: "Ich mache jeden Morgen Dehnübungen zum Aufwärmen.", arabic: "أقوم بتمارين إطالة كل صباح للإحماء.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 441, speaker: "S2", german: "Wir schauten das Finale in voll besetzten Stadion an.", arabic: "شاهدنا النهائي في الاستاد الممتلئ.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 442, speaker: "S1", german: "Ich lerne seit zwei Monaten Gitarre spielen.", arabic: "أتعلم عاز الجيتار منذ شهرين.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 443, speaker: "S1", german: "Wir spielten Karten im schattigen Garten.", arabic: "لعبنا الورق في الحديقة المظللة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 444, speaker: "S1", german: "Ich gehe an Samstagabend gerne zum Kegeln.", arabic: "أحب الذهاب للعب البولينج مساء السبت.", map: [ [[0, 1], [0, 0]], [[3, 5], [1, 4]] ] },
      { id: 445, speaker: "S1", german: "Das Training war anstrengend aber sehr effektiv.", arabic: "التدريب كان شاقاً ولكنه مفيد جداً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 446, speaker: "S1", german: "Ich kletterte an der Kletterwand in der Halle.", arabic: "تسلق أداة التسلق في الصالة المغطاة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 447, speaker: "S2", german: "Wir machten ein Picknick auf der grünen Wiese.", arabic: "قمنا بنزهة على العشب الأخضر.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 3]] ] },
      { id: 448, speaker: "S1", german: "Ich fahre im Winter gerne Ski in den Alpen.", arabic: "أحب التزلج في الشتاء بجبال الألب.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 449, speaker: "S3", german: "Der Schiedsrichter pfiff das Spiel pünktlich ab.", arabic: "أطلق الحكم صافرة النهاية في الموعد.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 450, speaker: "S1", german: "Ich entspannte mich bei einer ruhigen Yoga-Sitzung.", arabic: "استرخيحت في جلسة يوماً هادئة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 451, speaker: "S2", german: "Wir liefen zehn Runden um den Sportplatz.", arabic: "ركضنا 10 دورات حول الملعب الرياضي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 452, speaker: "S1", german: "Ich kaufte mir neue Laufschuhe für das Training.", arabic: "اشتريت لنفسي حذاء جديد للتدريب.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 453, speaker: "S2", german: "Wir spielten Beachvolleyball am feinen Sandstrand.", arabic: "لعبنا كرة طائرة شاطئية على الرمال.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 454, speaker: "S1", german: "Ich hörte Musik während des Lauftrainings.", arabic: "استمعت للموسيقى أثناء تدريب الجري.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 455, speaker: "S3", german: "Der Verein organisierte ein großes Sommerfest.", arabic: "النادي نظم حفل صيف كبير.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 456, speaker: "S1", german: "Ich schwamm zwanzig Bahnen im Hallenbad.", arabic: "سبحت 20 شوطاً في حمام السباحة المغطى.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 457, speaker: "S2", german: "Wir fuhren Inlineskates entlang der Promenade.", arabic: "تزلجنا بالزلاجات على الممشى.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 458, speaker: "S1", german: "Ich gewann den ersten Preis im Schachwettbewerb.", arabic: "فزت بالجائزة الأولى في مسابقة الشطرنج.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 459, speaker: "S1", german: "Wir schauten ein Basketballspiel live in der Halle.", arabic: "شاهدنا مباراة كرة سلة بثاً حي في القاعة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 460, speaker: "S1", german: "Freizeit ist wichtig für die Erholung der Seele.", arabic: "وقت الفراغ مهم لاستراحة الروح.", map: [ [[0, 1], [0, 1]], [[1, 6], [2, 3]] ] },
      { id: 461, speaker: "S1", german: "Ich tauchte im klaren Wasser des Meeres.", arabic: "غمت في مياه البحر الصافية.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 462, speaker: "S2", german: "Wir machten eine Fahrradtour durch die Dörfer.", arabic: "قمنا بجولة دراجات عبر القرى.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 463, speaker: "S1", german: "Ich trainierte meine Muskeln mit Hanteln.", arabic: "دربت عضلاتي بالأثقال.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 464, speaker: "S2", german: "Wir spielten Badminton auf dem Rasen.", arabic: "لعبنا الريشة الطائرة على العشب.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 465, speaker: "S1", german: "Ich verbrachte den Nachmittag im Garten.", arabic: "قضيت فترة بعد الظهر في الحديقة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] }
    ]
  },
  {
    id: "cat-9",
    title: "9. 👋 قصة التعارف والعائلة (Vorstellen & Familie)",
    sentences: [
      { id: 466, speaker: "S1", german: "Hallo, ich heiße Loeay und komme aus Ägypten.", arabic: "مرحباً، اسمي لؤي وأنا من مصر.", map: [ [[0, 2], [0, 2]], [[3, 6], [3, 5]] ] },
      { id: 467, speaker: "S1", german: "Ich wohne seit zwei Jahren in Kairo.", arabic: "أسكن في القاهرة منذ سنتين.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 468, speaker: "S1", german: "Ich bin zwanzig Jahre alt und ledig.", arabic: "عمري عشرون عاماً وأنا أعزب.", map: [ [[0, 3], [0, 2]], [[4, 5], [3, 4]] ] },
      { id: 469, speaker: "S1", german: "Ich arbeite als Webentwickler und lerne Deutsch.", arabic: "أعمل كمطور ويب وأتعلم الألمانية.", map: [ [[0, 2], [0, 1]], [[2, 5], [2, 3]] ] },
      { id: 470, speaker: "S1", german: "Meine Muttersprache ist Arabisch und ich spreche Englisch.", arabic: "لغتي الأم العربية وأتحدث الإنجليزية.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 471, speaker: "S1", german: "Meine Familie ist groß und sehr herzlich.", arabic: "عائلتي كبيرة ومودة جداً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 472, speaker: "S2", german: "Mein Vater ist Lehrer und meine Mutter ist Ärztin.", arabic: "والدي معلم ووالدتي طبيبة.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 3]] ] },
      { id: 473, speaker: "S3", german: "Ich habe eine jüngere Schwester und einen älteren Bruder.", arabic: "لدي أخت أصغر وأخ أكبر.", map: [ [[0, 1], [0, 0]], [[2, 7], [1, 4]] ] },
      { id: 474, speaker: "S3", german: "Meine Oma kocht das leckerste Essen der Welt.", arabic: "جدتي تطبخ أذذ طعام في العالم.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 475, speaker: "S3", german: "Mein Opa erzählt uns immer spannende Geschichten.", arabic: "جدي يحكي لنا دائماً ققماً ممتعة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 476, speaker: "S1", german: "Wir feiern Geburtstage immer alle zusammen.", arabic: "نحتفل بأعياد الميلاد جميعاً معاً دائماً.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 4]] ] },
      { id: 477, speaker: "S1", german: "Ich habe viele gute Freunde aus der Schulzeit.", arabic: "لدي أصدقاء كثيرون من المدرسة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 478, speaker: "S2", german: "Mein bester Freund heißt Omar und hilft mir immer.", arabic: "صديقي المفضّل اسمه عمر ويساعدني دائماً.", map: [ [[0, 2], [0, 1]], [[3, 7], [2, 4]] ] },
      { id: 479, speaker: "S4", german: "Freut mich sehr, Sie kennenzulernen!", arabic: "يسعدني جداً بمعرفتك!", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 1]] ] },
      { id: 480, speaker: "S1", german: "Wie ist Ihr Name und woher kommen Sie?", arabic: "ما هو اسمك ومن أين أنت؟", map: [ [[0, 2], [0, 2]], [[3, 6], [3, 5]] ] },
      { id: 481, speaker: "S2", german: "Meine Tante wohnen in einer anderen Stadt.", arabic: "عمتي/خالتي تسكن في مدينة أخرى.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 482, speaker: "S3", german: "Mein Onkel arbeitet bei einer großen Firma.", arabic: "عمي/خالي يعمل بشركة كبيرة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 483, speaker: "S1", german: "Ich habe zwei kleine Neffen als Haustiere.", arabic: "لدي ابن أخت/أخ صغير كحيوانات أليفة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 484, speaker: "S1", german: "Unsere Nachbarn sind sehr freundlich und hilfsbereit.", arabic: "جيراننا لطيفون ومحبون للتعاون وخدمة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 485, speaker: "S1", german: "Wir verstehen uns alle sehr gut miteinander.", arabic: "نتفاهم جميعاً مع بعضنا جيداً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 486, speaker: "S1", german: "Mein Schwager lud uns zum Abendessen ein.", arabic: "زوج أختي دعانا لتناول وجبة العشاء.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 3]] ] },
      { id: 487, speaker: "S1", german: "Meine Cousine studiert Medizin an der Universität.", arabic: "ابنة عمي تدرس الطب بالجامعة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 3]] ] },
      { id: 488, speaker: "S1", german: "Wir machten ein großes Familienfoto in Garten.", arabic: "التقطنا صورة عائلية كبيرة بالحديقة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 489, speaker: "S1", german: "Ich habe ein Haustier, eine kleine Katze.", arabic: "لدي حيوان أليف، قطة صغيرة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 490, speaker: "S1", german: "Ich spiele oft mit meinen Geschwistern.", arabic: "ألعب كثيراً مع إخوتي.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 491, speaker: "S2", german: "Mein Bruder heiratete im letzten Sommer.", arabic: "تزوج أخي في الصيف الماضي.", map: [ [[0, 1], [1, 1]], [[2, 4], [0, 0]] ] },
      { id: 492, speaker: "S2", german: "Wir besuchten unsere Verwandten am Feiertag.", arabic: "زرنا أقاربنا في العيد/العطلة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 493, speaker: "S1", german: "Ich bin stolz auf meine Herkunft und Familie.", arabic: "أنا فخور بأصلي وعائلتي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 494, speaker: "S3", german: "Sie hat ein fröhliches und offenes Wesen.", arabic: "لديها شخصية بهيجة ومفتحة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 495, speaker: "S1", german: "Wir verbrachten einen wunderschönen Tag zusammen.", arabic: "قضينا يوماً رائعاً معاً.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 496, speaker: "S1", german: "Mein Schwiegervater ist ein sehr kluger Mann.", arabic: "حماي رجل مقهم جداً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 497, speaker: "S1", german: "Wir tauschten alte Erinnerungen aus.", arabic: "تبادلنا الذكريات القديمة.", map: [ [[0, 1], [0, 0]], [[2, 3], [1, 2]] ] },
      { id: 498, speaker: "S2", german: "Ich habe zwei Kousinx, die in Deutschland leben.", arabic: "لدي أيضاً عم مهمشان في ألمانيا.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 499, speaker: "S1", german: "Meine Familie gibt mir immer Kraft und Unterstützung.", arabic: "عائلتي تمنحني القوة والدعم دائماً.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 500, speaker: "S1", german: "Ich liebe meine Familie von ganzem Herzen.", arabic: "أحب عائلتي من كل قلبي.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 501, speaker: "S1", german: "Ich zeigte meinen Freunden alte Familienfotos.", arabic: "عرضت صور العائلة القديمة لأصدقائي.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 502, speaker: "S2", german: "Wir tranken zusammen Tee und erzählten Geschichten.", arabic: "شربنا الشاي معا وحكينا قصصاً.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 503, speaker: "S3", german: "Mein Nichte zeichnete ein schönes Bild für mich.", arabic: "ابنة أختي رسمت لي صورة جميلة.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 504, speaker: "S4", german: "Wir verabschiedeten uns mit herzlichen Umarmungen.", arabic: "ودعنا بعضنا بمعانق حارة.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 2]] ] },
      { id: 505, speaker: "S4", german: "Familie ist der wichtigste Anker im Leben.", arabic: "العائلة هي أهم مرساة في الحياة.", map: [ [[0, 0], [0, 0]], [[1, 5], [1, 4]] ] }
    ]
  },
  {
    id: "cat-10",
    title: "10. ☀️ قصة الطقس والمشاعر اليومية (Wetter & Gefühle)",
    sentences: [
      { id: 506, speaker: "S1", german: "Heute Morgen schien die Sonne wunderschön am Himmel.", arabic: "صباح اليوم أشرقت الشمس بجمال في السماء.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 5]] ] },
      { id: 507, speaker: "S1", german: "Das Wetter war angenehm und nicht zu kalt.", arabic: "الطقس كان لطيفاً وليس بارداً جداً.", map: [ [[0, 1], [0, 1]], [[2, 6], [1, 4]] ] },
      { id: 508, speaker: "S1", german: "Ich fühlte mich glücklich, voller Energie und Motivation.", arabic: "شعرت بالسعادة الممتلئة بالنشاط والحافز.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 509, speaker: "S2", german: "Am Nachmittag zogen dunkle Wolken auf.", arabic: "في بعد الظهر تجسدت سحب داكنة.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 3]] ] },
      { id: 510, speaker: "S2", german: "Es fing an stark zu regnen und zu winden.", arabic: "بدأت تمطر بغزارة وتهب الرياح.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 511, speaker: "S1", german: "Ich öffnete meinen Regenschirm und ging weiter.", arabic: "فتحت مظلتي وواصلت السير.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 512, speaker: "S2", german: "Es gab ein kurzes Gewitter mit Donner und Blitz.", arabic: "حدثت عاصفة رعدية قصيرة برعد وبرق.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 513, speaker: "S1", german: "Ich stand am Fenster und beobachtete den Regen.", arabic: "وقفت عند النافذة وراقبت المطر.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 514, speaker: "S1", german: "Ich war erstaunt über dieses Naturschauspiel.", arabic: "ندهشت من هذه الظاهرة الطبيعية.", map: [ [[0, 1], [0, 0]], [[2, 4], [1, 3]] ] },
      { id: 515, speaker: "S1", german: "Am Abend wurde die Luft sehr kühl und frisch.", arabic: "في المساء أصبحت الهواء باردة ومنعشة جداً.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 516, speaker: "S1", german: "Ich blicke optimistisch und dankbar in die Zukunft.", arabic: "أنظر بتفاؤل وامتنان إلى المستقبل.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 517, speaker: "S3", german: "Alles wird gut sein, mach dir keine Sorgen!", arabic: "أكل شيء سيكون بخير، لا تقلق.", map: [ [[0, 3], [0, 2]], [[4, 6], [3, 4]] ] },
      { id: 518, speaker: "S1", german: "Ich drücke dir die Daumen für deinen Erfolg!", arabic: "أتمنى لك التوفيق من قلبي بنجاح.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 519, speaker: "S1", german: "Gute Nacht und träum was Schönes!", arabic: "تصبح على خير وأحلام جميلة.", map: [ [[0, 1], [0, 1]], [[2, 4], [2, 4]] ] },
      { id: 520, speaker: "S2", german: "Das Thermometer zeigte heute dreißig Grad an.", arabic: "سجل الترموستير اليوم 30 درجة.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 521, speaker: "S2", german: "Im Winter schneit es oft in den Bergen.", arabic: "تسقط الثلوج كثيراً بالجبال في الشتاء.", map: [ [[0, 1], [4, 4]], [[2, 6], [0, 3]] ] },
      { id: 522, speaker: "S2", german: "Ich war traurig über die schlechten Nachrichten.", arabic: "كنت حزيناً بسبب الأخبار السيئة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 523, speaker: "S3", german: "Er war sehr stolz auf seine Leistungen.", arabic: "كان فخوراً جداً بإنجازاته.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 524, speaker: "S1", german: "Die Dämmerung begann am späten Nachmittag.", arabic: "بدأ الغسق في وقت متأخر بعد الظهر.", map: [ [[0, 1], [1, 1]], [[2, 5], [0, 0]] ] },
      { id: 525, speaker: "S1", german: "Ich war erleichtert nach dem Bestehen der Prüfung.", arabic: "ارتست كثيراً بعد النجاح في الامتحان.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 526, speaker: "S1", german: "Der Wind blies die bunten Blätter vom Baum.", arabic: "الرياح هبت الأوراق الملونة من الشجرة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 527, speaker: "S1", german: "Ich liebe die frische Frühlingsluft in April.", arabic: "أحب هواء الربيع المتمتع في شهر أبريل.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 528, speaker: "S2", german: "Es war dichter Nebel auf den Straßen.", arabic: "كان هناك ضباب كثيف على الطرقات.", map: [ [[0, 1], [0, 1]], [[2, 5], [2, 4]] ] },
      { id: 529, speaker: "S1", german: "Ich war überrascht über die schöne Überraschung.", arabic: "تفاجأت بالمفاجأة الجميلة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 2]] ] },
      { id: 530, speaker: "S3", german: "Wir hoffen auf schönes Wetter an Wochenende.", arabic: "نأمل في طقس جميل في نهاية الأسبوع.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 531, speaker: "S3", german: "Ich schätze deine ehrliche und offene Meinung.", arabic: "أقدر رأيك الصادق والمفتح.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 532, speaker: "S3", german: "Pass gut auf dich auf und bleib gesund!", arabic: "اعتني بنفسك جيداً وابق بصحة جيدة.", map: [ [[0, 1], [0, 1]], [[2, 6], [2, 4]] ] },
      { id: 533, speaker: "S2", german: "Der Herbst bringt wunderschöne Farben mit.", arabic: "الخريف يحضر معه ألواناً رائعة جميلة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] },
      { id: 534, speaker: "S1", german: "Ich bin dankbar für jeden neuen Tag.", arabic: "أنا ممتن لكل يوم جديد.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 535, speaker: "S3", german: "Möge dein Tag voller Freude und Glück sein!", arabic: "أتمنى أن يكون يومك ممتلئاً بالفرح والسعادة.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 5]] ] },
      { id: 536, speaker: "S1", german: "Ich war sehr wütend über den Fehler.", arabic: "كنت غاضباً جداً بخصوص الخطأ.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 537, speaker: "S2", german: "Die Hitze in Sommer war kaum auszuhalten.", arabic: "الحرارة في الصيف كان يسهل تحمّلها.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 538, speaker: "S1", german: "Ich genoss die Stille des ruhigen Abends.", arabic: "استمتعت بهدوء المساء الساكن.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 3]] ] },
      { id: 539, speaker: "S2", german: "Es fror stark in der kalten Nacht.", arabic: "تجمد الجو بشدة في الليلة الباردة.", map: [ [[0, 1], [0, 0]], [[2, 5], [1, 4]] ] },
      { id: 540, speaker: "S1", german: "Ich blicke voller Hoffnung auf das neue Jahr.", arabic: "أنظر بتطور من الأمل للعام الجديد.", map: [ [[0, 1], [0, 0]], [[2, 6], [1, 4]] ] }
    ]
  }
];

// دالة تنظيف النصوص تماماً من أي أقواس أو أرقام
const cleanTextDisplay = (text) => {
  return text.replace(/\s*\(#\d+\)\.?/g, '').trim();
};

export default function GermanSentencesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const totalSentencesCount = categoriesData.reduce(
    (acc, cat) => acc + cat.sentences.length,
    0
  );

  const speakGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = cleanTextDisplay(text);
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'de-DE';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
    }
  };

  const scrollToCategory = (catId) => {
    const element = document.getElementById(catId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // دالة تلوين الكلمات المتطابقة بدقة وتكيف الألوان التلقائي (أبيض/أسود) حسب الوضع
  const renderMappedSentence = (germanStr, arabicStr, mapArray) => {
    const cleanGerman = cleanTextDisplay(germanStr);
    const cleanArabic = cleanTextDisplay(arabicStr);

    const gerWords = cleanGerman.split(' ');
    const arbWords = cleanArabic.split(' ');

    const safeMapArray = Array.isArray(mapArray) ? mapArray : [];

    if (safeMapArray.length === 0) {
      return {
        germanRender: <span>{cleanGerman}</span>,
        arabicRender: <span>{cleanArabic}</span>
      };
    }

    const gerWordColors = new Array(gerWords.length).fill('currentColor');
    const arbWordColors = new Array(arbWords.length).fill('currentColor');

    safeMapArray.forEach((mapping, pairIdx) => {
      if (
        Array.isArray(mapping) &&
        mapping.length >= 2 &&
        Array.isArray(mapping[0]) &&
        Array.isArray(mapping[1])
      ) {
        const color = WORD_COLOR_PALETTE[pairIdx % WORD_COLOR_PALETTE.length];
        const [gStart, gEnd] = mapping[0];
        const [aStart, aEnd] = mapping[1];

        for (let i = gStart; i <= gEnd && i < gerWords.length; i++) {
          gerWordColors[i] = color;
        }
        for (let j = aStart; j <= aEnd && j < arbWords.length; j++) {
          arbWordColors[j] = color;
        }
      }
    });

    const germanRender = gerWords.map((word, idx) => (
      <span key={idx} style={{ color: gerWordColors[idx], fontWeight: 'bold' }}>
        {word}{' '}
      </span>
    ));

    const arabicRender = arbWords.map((word, idx) => (
      <span key={idx} style={{ color: arbWordColors[idx], fontWeight: 'bold' }}>
        {word}{' '}
      </span>
    ));

    return { germanRender, arabicRender };
  };

  return (
    <div style={{ padding: '15px 10px 40px 10px', color: 'currentColor', background: 'transparent', width: '100%', boxSizing: 'border-box' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 12px;
          color: inherit;
          width: 100%;
        }
        .total-count-badge {
          text-align: center;
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 25px;
          color: #22c55e;
          direction: rtl;
          background: rgba(34, 197, 94, 0.1);
          padding: 8px 18px;
          border-radius: 20px;
          display: inline-block;
          margin-left: auto;
          margin-right: auto;
        }
        .badge-wrapper {
          text-align: center;
          width: 100%;
        }
        .nav-header-box {
          width: 100%;
          max-width: 520px;
          margin: 0 auto 30px auto;
          padding: 15px;
          border: 2px dashed #00bfff;
          border-radius: 15px;
          box-sizing: border-box;
          direction: rtl;
        }
        .nav-instruction {
          font-weight: bold;
          font-size: 1.15rem;
          margin-bottom: 12px;
          color: #00bfff;
          text-align: center;
        }
        .nav-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-item-btn {
          background: transparent;
          border: 1px solid currentColor;
          color: inherit;
          padding: 9px 12px;
          border-radius: 8px;
          text-align: right;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: bold;
          line-height: 1.4;
        }
        .nav-item-btn:hover {
          background-color: #00bfff;
          color: #ffffff;
          border-color: #00bfff;
        }
        .category-title {
          text-align: center;
          font-size: 1.3rem;
          font-weight: bold;
          margin: 45px auto 20px auto;
          color: #22c55e;
          width: 100%;
          max-width: 520px;
          direction: rtl;
          scroll-margin-top: 30px;
          line-height: 1.5;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }
        .search-input {
          width: 100%;
          max-width: 520px;
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
          gap: 22px;
          align-items: center;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }
        .vocab-card {
          position: relative;
          width: 100%;
          max-width: 520px;
          border: 2px solid currentColor;
          border-radius: 20px 8px;
          padding: 18px 18px 14px 18px;
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
          min-width: 24px;
          height: 22px;
          padding: 0 6px;
          border-radius: 12px;
          background-color: #ff3333;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: bold;
          z-index: 2;
        }
        .speaker-badge {
          position: absolute;
          top: -11px;
          right: 20px;
          padding: 2px 10px;
          border-radius: 12px;
          color: #ffffff;
          font-size: 0.75rem;
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
          flex-direction: column;
          width: 100%;
          gap: 8px;
          margin-top: 6px;
        }
        .german-sentence {
          font-size: 1.05rem;
          font-weight: bold;
          direction: ltr;
          text-align: left;
          word-break: break-word;
          line-height: 1.5;
        }
        .arabic-sentence {
          font-size: 1.05rem;
          font-weight: bold;
          text-align: right;
          direction: rtl;
          word-break: break-word;
          line-height: 1.5;
        }
      `}</style>

      <h1 className="page-title">تعلم من خلال قصة</h1>

      <div className="badge-wrapper">
        <div className="total-count-badge">
          إجمالي الجمل المتاحة في القصص: <span>{totalSentencesCount}</span> جملة
        </div>
      </div>

      <div className="nav-header-box">
        <div className="nav-instruction">اختر القصة للذهاب إليها مباشرة:</div>
        <div className="nav-list">
          {categoriesData.map((cat) => (
            <button
              key={cat.id}
              className="nav-item-btn"
              onClick={() => scrollToCategory(cat.id)}
            >
              {cat.title} ({cat.sentences.length} جملة)
            </button>
          ))}
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن كلمة أو جملة بالقصص..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {categoriesData.map((category) => {
        const filteredSentences = category.sentences.filter(
          (item) =>
            cleanTextDisplay(item.german).toLowerCase().includes(searchTerm.toLowerCase()) ||
            cleanTextDisplay(item.arabic).includes(searchTerm)
        );

        if (filteredSentences.length === 0) return null;

        return (
          <div key={category.id} style={{ width: '100%' }}>
            <h3 id={category.id} className="category-title">{category.title}</h3>

            <div className="cards-container">
              {filteredSentences.map((item) => {
                const { germanRender, arabicRender } = renderMappedSentence(
                  item.german,
                  item.arabic,
                  item.map
                );

                const speakerName = formatSpeaker(item.speaker);
                const speakerBgColor = SPEAKER_COLORS[speakerName] || "#00bfff";

                return (
                  <div
                    key={item.id}
                    className="vocab-card"
                    onClick={() => speakGerman(item.german)}
                  >
                    <div className="item-number">{item.id}</div>
                    <div className="speaker-badge" style={{ backgroundColor: speakerBgColor }}>
                      {speakerName}
                    </div>
                    <div className="audio-icon">🔊</div>
                    <div className="sentence-row">
                      <div className="arabic-sentence">{arabicRender}</div>
                      <div className="german-sentence">{germanRender}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}