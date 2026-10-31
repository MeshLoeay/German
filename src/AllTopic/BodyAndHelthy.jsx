import React, { useState } from 'react';

// بنك كلمات الجسم والصحة الشامل والموسع (أعضاء، أمراض، أطباء، أدوية، صيدلية، غرفة المريض، العمليات، التمريض، العظام وتنفسي)
const bodyHealthBankData = [
  // --- القسم الأول: أعضاء الجسم والوجه الرئيسية ---
  { id: 1, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'der Körper', pronunciation: 'در كوربر', arabic: 'الجسم' },
  { id: 2, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'der Kopf', pronunciation: 'در كوبف', arabic: 'الرأس' },
  { id: 3, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'das Haar', pronunciation: 'داس هار', arabic: 'الشعر' },
  { id: 4, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'das Gesicht', pronunciation: 'داس غزيشت', arabic: 'الوجه' },
  { id: 5, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'die Stirn', pronunciation: 'دي شتيرن', arabic: 'الجبهة' },
  { id: 6, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'das Auge', pronunciation: 'داس آوغه', arabic: 'العين' },
  { id: 7, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'die Nase', pronunciation: 'دي نازه', arabic: 'الأنف' },
  { id: 8, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'der Mund', pronunciation: 'در مونت', arabic: 'الفم' },
  { id: 9, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'das Ohr', pronunciation: 'داس أور', arabic: 'الأذن' },
  { id: 10, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'der Zahn', pronunciation: 'در تسان', arabic: 'السن' },
  { id: 11, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'die Zunge', pronunciation: 'دي تسونغه', arabic: 'اللسان' },
  { id: 12, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'der Hals', pronunciation: 'در هالس', arabic: 'الرقبة' },
  { id: 13, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'die Schulter', pronunciation: 'دي شولتر', arabic: 'الكتاف' },
  { id: 14, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'die Wange', pronunciation: 'دي فانغه', arabic: 'الخد' },
  { id: 15, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'die Lippe', pronunciation: 'دي ليبه', arabic: 'الشفة' },
  { id: 16, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'das Kinn', pronunciation: 'داس كين', arabic: 'الذقن' },
  { id: 17, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'die Augenbraue', pronunciation: 'دي آوغن براوه', arabic: 'الحاجب' },
  { id: 18, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'die Wimper', pronunciation: 'دي فيمبر', arabic: 'الرمش' },
  { id: 19, categoryNum: 1, categoryTitle: 'أعضاء الجسم والوجه', german: 'der Bart', pronunciation: 'در بارت', arabic: 'اللحية' },

  // --- القسم الثاني: الأطراف والجذع ---
  { id: 20, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Arm', pronunciation: 'در آرم', arabic: 'الذراع' },
  { id: 21, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'die Hand', pronunciation: 'دي هانت', arabic: 'اليد' },
  { id: 22, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Finger', pronunciation: 'در فينغر', arabic: 'الإصبع' },
  { id: 23, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Daumen', pronunciation: 'در داومن', arabic: 'الإبهام' },
  { id: 24, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'die Brust', pronunciation: 'دي بروست', arabic: 'الصدر' },
  { id: 25, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Bauch', pronunciation: 'در باوخ', arabic: 'البطن' },
  { id: 26, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Rücken', pronunciation: 'در ريوكن', arabic: 'الظهر' },
  { id: 27, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'das Bein', pronunciation: 'داس باين', arabic: 'الساق' },
  { id: 28, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'das Knie', pronunciation: 'داس كني', arabic: 'الركبة' },
  { id: 29, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Fuß', pronunciation: 'در فوس', arabic: 'القدم' },
  { id: 30, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Zeh', pronunciation: 'در تسيه', arabic: 'إصبع القدم' },
  { id: 31, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Ellbogen', pronunciation: 'در إلليبوغن', arabic: 'المرفق' },
  { id: 32, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'das Handgelenk', pronunciation: 'داس هانت غيلينك', arabic: 'معصم اليد' },
  { id: 33, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'der Nagel', pronunciation: 'در ناغل', arabic: 'الظفر' },
  { id: 34, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'die Hüfte', pronunciation: 'دي هوفته', arabic: 'الورك / الخصر' },
  { id: 35, categoryNum: 2, categoryTitle: 'الأطراف والجذع', german: 'die Faust', pronunciation: 'دي فاوست', arabic: 'قبضة اليد' },

  // --- القسم الثالث: الأعضاء الداخلية وأجهزة الجسم ---
  { id: 36, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'die Haut', pronunciation: 'دي هاوت', arabic: 'الجلد' },
  { id: 37, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'das Blut', pronunciation: 'داس بلوت', arabic: 'الدم' },
  { id: 38, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'der Knochen', pronunciation: 'در كنوخن', arabic: 'العظم' },
  { id: 39, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'das Herz', pronunciation: 'داس هيرتس', arabic: 'القلب' },
  { id: 40, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'das Gehirn', pronunciation: 'داس غهيرن', arabic: 'الدماغ' },
  { id: 41, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'die Lunge', pronunciation: 'دي لونغه', arabic: 'الرئة' },
  { id: 42, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'der Magen', pronunciation: 'در ماكن', arabic: 'المعدة' },
  { id: 43, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'die Leber', pronunciation: 'دي ليبر', arabic: 'الكبد' },
  { id: 44, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'die Niere', pronunciation: 'دي نيره', arabic: 'الكلية' },
  { id: 45, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'der Muskel', pronunciation: 'در موسكل', arabic: 'العضلة' },
  { id: 46, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'der Darm', pronunciation: 'در دارم', arabic: 'الأمعاء' },
  { id: 47, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'der Nerv', pronunciation: 'در نيرف', arabic: 'العصب' },
  { id: 48, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'die Ader', pronunciation: 'دي آدر', arabic: 'الوريد / العِرق' },
  { id: 49, categoryNum: 3, categoryTitle: 'الأعضاء الداخلية وأجهزة الجسم', german: 'die Galle', pronunciation: 'دي غاله', arabic: 'المرارة' },

  // --- القسم الرابع: الطاقم الطبي والتخصصات الطبية ---
  { id: 50, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Arzt', pronunciation: 'در آرتست', arabic: 'الطبيب / الدكتور' },
  { id: 51, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'die Ärztin', pronunciation: 'دي آرتستين', arabic: 'الطبيبة / الدكتورة' },
  { id: 52, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Krankenpfleger', pronunciation: 'در كرانكن فليغر', arabic: 'الممرض' },
  { id: 53, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'die Krankenschwester', pronunciation: 'دي كرانكن شوستر', arabic: 'الممرضة' },
  { id: 54, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Chirurg', pronunciation: 'در شيرورغ', arabic: 'الجراح' },
  { id: 55, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Zahnarzt', pronunciation: 'در تسان آرتست', arabic: 'طبيب الأسنان' },
  { id: 56, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Kinderarzt', pronunciation: 'در كيندر آرتست', arabic: 'طبيب الأطفال' },
  { id: 57, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Augenarzt', pronunciation: 'در آوغن آرتست', arabic: 'طبيب العيون' },
  { id: 58, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Hautarzt', pronunciation: 'در هاوت آرتست', arabic: 'طبيب الجلدية' },
  { id: 59, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Orthopäde', pronunciation: 'در أورتوبيده', arabic: 'طبيب العظام' },
  { id: 60, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Internist', pronunciation: 'در إنترنيست', arabic: 'طبيب الباطنة' },
  { id: 61, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Psychiater', pronunciation: 'در بسيشياتر', arabic: 'الطبيب النفسي' },
  { id: 62, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Physiotherapeut', pronunciation: 'در فيزيوتيرابويت', arabic: 'أخصائي العلاج الطبيعي' },
  { id: 63, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Kardiologe', pronunciation: 'در كارديلوغه', arabic: 'طبيب القلب' },
  { id: 64, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Spezialist', pronunciation: 'در شبيسياليست', arabic: 'الطبيب الأخصائي' },
  { id: 65, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Patient', pronunciation: 'در باتشينت', arabic: 'المريض' },
  { id: 66, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'das Krankenhaus', pronunciation: 'داس كرانكن هاوس', arabic: 'المستشفى' },
  { id: 67, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'die Klinik', pronunciation: 'دي كلينيك', arabic: 'العيادة الكبرى / المستشفى التخصصي' },
  { id: 68, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'die Praxis', pronunciation: 'دي براكسيس', arabic: 'العيادة الطبية الخاصة' },
  { id: 69, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'die Notaufnahme', pronunciation: 'دي نوت أوفنامه', arabic: 'قسم الطوارئ' },
  { id: 70, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Operationssaal', pronunciation: 'در أوبيراتسيونس زال', arabic: 'غرفة العمليات' },
  { id: 71, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'die Intensivstation', pronunciation: 'دي إنتنسيف شتاتسيون', arabic: 'غرفة العناية المركزة' },
  { id: 72, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'die Apotheke', pronunciation: 'دي أبوتيكه', arabic: 'الصيدلية' },
  { id: 73, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Apotheker', pronunciation: 'در أبوتيكر', arabic: 'الصيدلي' },
  { id: 74, categoryNum: 4, categoryTitle: 'الأطباء والتخصصات الطبية', german: 'der Krankenwagen', pronunciation: 'در كرانكن فاغن', arabic: 'سيارة الإسعاف' },

  // --- القسم الخامس: الأمراض، الأدوية والأدوات الطبية العامة ---
  { id: 75, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Gesundheit', pronunciation: 'دي غزوندهايت', arabic: 'الصحة' },
  { id: 76, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Krankheit', pronunciation: 'دي كرانكهايت', arabic: 'المرض' },
  { id: 77, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'der Schmerz', pronunciation: 'در شميرتس', arabic: 'الألم' },
  { id: 78, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'das Fieber', pronunciation: 'داس فيبر', arabic: 'الحمى / الحرارة' },
  { id: 79, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Erkältung', pronunciation: 'دي إركيلتونغ', arabic: 'الزكام' },
  { id: 80, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'der Husten', pronunciation: 'در هوستن', arabic: 'الكحة' },
  { id: 81, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Grippe', pronunciation: 'دي غريبه', arabic: 'الإنفلونزا' },
  { id: 82, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Allergie', pronunciation: 'دي أليرغي', arabic: 'الحساسية' },
  { id: 83, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'der Durchfall', pronunciation: 'در دورخ فال', arabic: 'الإسهال' },
  { id: 84, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Verstopfung', pronunciation: 'دي فيرشتوبفونغ', arabic: 'الإمساك' },
  { id: 85, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Übelkeit', pronunciation: 'دي أوبلكايت', arabic: 'الغثيان' },
  { id: 86, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Wunde', pronunciation: 'دي فونده', arabic: 'الجرح' },
  { id: 87, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Medizin', pronunciation: 'دي ميديتسين', arabic: 'الدواء' },
  { id: 88, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Tablette', pronunciation: 'دي تابليته', arabic: 'الحبة / القرص الدوائي' },
  { id: 89, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'das Antibiotikum', pronunciation: 'داس أنتيبايوتيكوم', arabic: 'المضاد الحيوي' },
  { id: 90, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Vitamin', pronunciation: 'دي فيتامين', arabic: 'الفيتامينات' },
  { id: 91, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'das Pflaster', pronunciation: 'داس فلاستر', arabic: 'بلاستر جروح' },
  { id: 92, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Spritze', pronunciation: 'دي شبريتسه', arabic: 'الحقنة / الإبرة' },
  { id: 93, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'der Verband', pronunciation: 'در فيرباند', arabic: 'الضمادة / الشاش' },
  { id: 94, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'das Rezept', pronunciation: 'داس ريتسبت', arabic: 'الروشتة الطبية' },
  { id: 95, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'der Schnupfen', pronunciation: 'در شنوپفن', arabic: 'سيلان الأنف / الرشح' },
  { id: 96, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'das Thermometer', pronunciation: 'داس تيرموميتر', arabic: 'مقياس الحرارة' },
  { id: 97, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'der Blutdruck', pronunciation: 'در بلوت دروك', arabic: 'ضغط الدم' },
  { id: 98, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'der Puls', pronunciation: 'در بولس', arabic: 'النبض' },
  { id: 99, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Infusion', pronunciation: 'دي إنفوزيون', arabic: 'المحاليل الطبية' },
  { id: 100, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Untersuchung', pronunciation: 'دي أونترزوخونغ', arabic: 'الفحص الطبي' },
  { id: 101, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'die Blutanalyse', pronunciation: 'دي بلوت أَناليزه', arabic: 'تحليل الدم' },
  { id: 102, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'das Röntgenbild', pronunciation: 'داس رينتغن بيلد', arabic: 'صورة الأشعة' },
  { id: 103, categoryNum: 5, categoryTitle: 'الأمراض، الأدوية والأدوات الطبية', german: 'das Ultraschall', pronunciation: 'داس أولتراشال', arabic: 'أشعة السونار' },

  // --- القسم السادس: أعراض الجسم، الإفرازات والحالات الحيوية ---
  { id: 104, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'der Schweiß', pronunciation: 'در شفايس', arabic: 'العرق' },
  { id: 105, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'die Träne', pronunciation: 'دي ترينه', arabic: 'الدمعة / الدموع' },
  { id: 106, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'der Speichel', pronunciation: 'در شبايكل', arabic: 'اللعاب' },
  { id: 107, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'das Erbrechen', pronunciation: 'داس إربليشن', arabic: 'القيء / الاستفراغ' },
  { id: 108, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'der Schleim', pronunciation: 'در شلايم', arabic: 'البلغم / المخاط' },
  { id: 109, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'das Zittern', pronunciation: 'داس تسيتيرن', arabic: 'الرعشة / الارتجاف' },
  { id: 110, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'die Ohnmacht', pronunciation: 'دي أونماخت', arabic: 'الإغماء' },
  { id: 111, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'die Erschöpfung', pronunciation: 'دي إرشوبفونغ', arabic: 'الإرهاق الشديد' },
  { id: 112, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'der Bluthochdruck', pronunciation: 'در بلوت هوخ دروك', arabic: 'ارتفاع ضغط الدم' },
  { id: 113, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'der niedrige Blutdruck', pronunciation: 'در نيدريغه بلوت دروك', arabic: 'انخفاض ضغط الدم' },
  { id: 114, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'die Schwellung', pronunciation: 'دي شفيلونغ', arabic: 'التورم / الانتفاخ' },
  { id: 115, categoryNum: 6, categoryTitle: 'أعراض الجسم، الإفرازات والحالات الحيوية', german: 'der Juckreiz', pronunciation: 'در يوكرايتس', arabic: 'الحكة' },

  // --- القسم السابع: العمليات الجراحية، الإصابات والجبائر ---
  { id: 116, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'der Bruch', pronunciation: 'در بروخ', arabic: 'الكسر' },
  { id: 117, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'der Gips', pronunciation: 'در غيبس', arabic: 'الجبيرة / الجبس' },
  { id: 118, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'die Operation', pronunciation: 'دي أوبيراتسيون', arabic: 'العملية الجراحية' },
  { id: 119, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'die Naht', pronunciation: 'دي نات', arabic: 'الغرز الطبية / الخياطة' },
  { id: 120, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'die Verletzung', pronunciation: 'دي فيرليتسونغ', arabic: 'الإصابة' },
  { id: 121, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'die Verbrennung', pronunciation: 'دي فيربرنونغ', arabic: 'الحرق' },
  { id: 122, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'die Narkose', pronunciation: 'دي ناركوزه', arabic: 'التخدير / البنج' },
  { id: 123, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'die Prothese', pronunciation: 'دي پروتيزه', arabic: 'الطرف الصناعي / التركيبة' },
  { id: 124, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'der Rollstuhl', pronunciation: 'در رول شتول', arabic: 'الكرسي المتحرك' },
  { id: 125, categoryNum: 7, categoryTitle: 'العمليات الجراحية، الإصابات والجبائر', german: 'die Krücke', pronunciation: 'دي كروكه', arabic: 'عكاز المشي' },

  // --- القسم الثامن: الصيدلية والأدوية المتخصصة ---
  { id: 126, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'das Schmerzmittel', pronunciation: 'داس شميرتس ميتل', arabic: 'مسكن الألم' },
  { id: 127, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'die Augentropfen', pronunciation: 'دي آوغن تروبفن', arabic: 'قطرة العين' },
  { id: 128, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'die Ohrentropfen', pronunciation: 'دي أورين تروبفن', arabic: 'قطرة الأذن' },
  { id: 129, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'die Salbe', pronunciation: 'دي زالبِه', arabic: 'المرهم / الكريم الطبي' },
  { id: 130, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'der Hustensaft', pronunciation: 'در هوستن زافت', arabic: 'شراب الكحة / السعال' },
  { id: 131, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'die Schlaftablette', pronunciation: 'دي شلاف تابليته', arabic: 'حبوب المنوم' },
  { id: 132, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'das Desinfektionsmittel', pronunciation: 'داس دزينفكتسيونس ميتل', arabic: 'مطهر الجروح / المعقم' },
  { id: 133, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'die Pinzette', pronunciation: 'دي بينسيتِه', arabic: 'الملقط الطبي' },
  { id: 134, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'die Mullbinde', pronunciation: 'دي مول بينده', arabic: 'شاش الربط الطبي' },
  { id: 135, categoryNum: 8, categoryTitle: 'الصيدلية والأدوية المتخصصة', german: 'das Brandwangensalbe', pronunciation: 'داس براند فاونغن زالبه', arabic: 'مرهم الحروق' },

  // --- القسم التاسع: الفحوصات الطبية المتقدمة والأجهزة ---
  { id: 136, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'das Kernspintomogramm', pronunciation: 'داس كيرن شبين توغرام', arabic: 'أشعة الرنين المغناطيسي (MRI)' },
  { id: 137, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'das EKG (Elektrokardiogramm)', pronunciation: 'داس إيكا غي', arabic: 'تخطيط رسم القلب (ECG)' },
  { id: 138, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'der Sauerstoff', pronunciation: 'در زاويرستوف', arabic: 'الأكسجين الطبي' },
  { id: 139, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'das Blutzuckermessgerät', pronunciation: 'داس بلوتسوتشر ميس غريت', arabic: 'جهاز قياس السكر' },
  { id: 140, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'das Hörgerät', pronunciation: 'داس هير غريت', arabic: 'سماعة الأذن الطبية' },
  { id: 141, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'der Herzschrittmacher', pronunciation: 'در هيرتس شريت ماخر', arabic: 'جهاز تنظيم ضربات القلب' },
  { id: 142, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'die Urinanalyse', pronunciation: 'دي اورين أَناليزه', arabic: 'تحليل البول' },
  { id: 143, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'die Biopsie', pronunciation: 'دي بيوبسي', arabic: 'خزعة الأنسجة الطبية' },
  { id: 144, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'die Dialyse', pronunciation: 'دي دياليزه', arabic: 'غسيل الكلى' },
  { id: 145, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'die Rehabilitation', pronunciation: 'دي ريهابيليتاتسيون', arabic: 'التأهيل الصحي المكثف' },
  { id: 146, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'das Fieberthermometer', pronunciation: 'داس فيبر تيرموميتر', arabic: 'مقياس حرارة الجسم الرقمي' },
  { id: 147, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'die Trage', pronunciation: 'دي تراغه', arabic: 'نقالة المرضى والإسعاف' },
  { id: 148, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'die Halskrause', pronunciation: 'دي هالس كراوزه', arabic: 'طوق الرقبة الطبي للفقرات' },
  { id: 149, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'die Augenklappe', pronunciation: 'دي آوغن كلابه', arabic: 'رقعة العين الطبية' },
  { id: 150, categoryNum: 9, categoryTitle: 'الفحوصات الطبية المتقدمة والأجهزة', german: 'der Stethoskop', pronunciation: 'در شتيتوسكوب', arabic: 'سماعة الطبيب الكلاسيكية' },

  // --- القسم العاشر: مكونات غرفة المريض وأغراضه ---
  { id: 151, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'das Krankenbett', pronunciation: 'داس كرانكن بيت', arabic: 'سرير المريض الطبي' },
  { id: 152, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'das Bettlaken', pronunciation: 'داس بيت لاكن', arabic: 'ملاءة السرير / الشرشف' },
  { id: 153, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'das Kopfkissen', pronunciation: 'داس كوبف كيسن', arabic: 'وسادة السرير / المخدة' },
  { id: 154, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'die Bettdecke', pronunciation: 'دي بيت ديكه', arabic: 'غطاء السرير / البطانية' },
  { id: 155, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'der Mülleimer', pronunciation: 'در مول إيمر', arabic: 'سلة المهملات / الزبالة' },
  { id: 156, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'der Müllbeutel', pronunciation: 'در مول بويتل', arabic: 'كيس القمامة / الزبالة' },
  { id: 157, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'der Beistelltisch', pronunciation: 'در باي شتل تيش', arabic: 'الطاولة الجانبية للسرير' },
  { id: 158, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'die Rufanlage', pronunciation: 'دي روف أنلاغه', arabic: 'جرس / زر استدعاء الممرضة' },
  { id: 159, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'der Infusionsständer', pronunciation: 'در إنفوزيونس شتيندر', arabic: 'حامل المحاليل الطبية' },
  { id: 160, categoryNum: 10, categoryTitle: 'مكونات غرفة المريض وأغراضه', german: 'die Bettpfanne', pronunciation: 'دي بيت فافنه', arabic: 'نونية المريض / وعاء قضاء الحاجة' },

  // --- القسم الحادي عشر: العناية اليومية والنظافة الشخصية للمريض ---
  { id: 161, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'die Körperpflege', pronunciation: 'دي كوربر فليغه', arabic: 'العناية بالجسم والنظافة' },
  { id: 162, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'das Waschen', pronunciation: 'داس فاشن', arabic: 'الاستحمام / غسيل الجسم' },
  { id: 163, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'die Zahnpflege', pronunciation: 'دي تسان فليغه', arabic: 'العناية بالأسنان' },
  { id: 164, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'das Haarewaschen', pronunciation: 'داس هاره فاشن', arabic: 'غسيل الشعر' },
  { id: 165, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'das Kämmen', pronunciation: 'داس كيمن', arabic: 'تمشيط الشعر' },
  { id: 166, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'das Rasieren', pronunciation: 'داس رازيرين', arabic: 'حلاقة اللحية / الشعر' },
  { id: 167, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'der Waschlappen', pronunciation: 'در فاش لابن', arabic: 'فوطة / ليفة الاستحمام الصغيرة' },
  { id: 168, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'das Handtuch', pronunciation: 'داس هانت توخ', arabic: 'منشفة اليدين والجسم' },
  { id: 169, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'die Seife', pronunciation: 'دي زايفر', arabic: 'الصابون' },
  { id: 170, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'das Duschgel', pronunciation: 'داس دوش جيل', arabic: 'جل الاستحمام' },
  { id: 171, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'die Zahnpasta', pronunciation: 'دي تسان باستا', arabic: 'معجون الأسنان' },
  { id: 172, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'die Zahnbürste', pronunciation: 'دي تسان بورشته', arabic: 'فرشاة الأسنان' },
  { id: 173, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'die Windel', pronunciation: 'دي فيندل', arabic: 'حفاضة الكبار / الحفاظات' },
  { id: 174, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'der Toilettenstuhl', pronunciation: 'در تواليتن شتول', arabic: 'كرسي الحمام المتحرك' },
  { id: 175, categoryNum: 11, categoryTitle: 'العناية اليومية والنظافة الشخصية للمريض', german: 'das Feuchttuch', pronunciation: 'داس فويشت توخ', arabic: 'المناديل المبللة المعقمة' },

  // --- القسم الثاني عشر: الأطعمة، المشروبات والنظام الغذائي للمريض ---
  { id: 176, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'die Kost', pronunciation: 'دي كوست', arabic: 'النظام الغذائي / الوجبة' },
  { id: 177, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'die Diät', pronunciation: 'دي دييت', arabic: 'الحمية الغذائية العلاجية' },
  { id: 178, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'die Suppe', pronunciation: 'دي زووبه', arabic: 'الشوربة / الحساء الدافئ' },
  { id: 179, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'der Tee', pronunciation: 'در تيه', arabic: 'الشاي' },
  { id: 180, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'das Wasser', pronunciation: 'داس فاسر', arabic: 'الماء' },
  { id: 181, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'der Saft', pronunciation: 'در زافت', arabic: 'العصير الطبيعي' },
  { id: 182, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'die Milch', pronunciation: 'دي ميلخ', arabic: 'الحليب' },
  { id: 183, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'das Frühstück', pronunciation: 'داس فريشتوك', arabic: 'وجبة الإفطار' },
  { id: 184, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'das Mittagessen', pronunciation: 'داس ميتاغ إيسن', arabic: 'وجبة الغداء' },
  { id: 185, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'das Abendessen', pronunciation: 'داس آبند إيسن', arabic: 'وجبة العشاء' },
  { id: 186, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'das Brot', pronunciation: 'داس بروت', arabic: 'الخبز' },
  { id: 187, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'das Obst', pronunciation: 'داس أوبست', arabic: 'الفواكه الطازجة' },
  { id: 188, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'das Gemüse', pronunciation: 'داس غيموزه', arabic: 'الخضروات' },
  { id: 189, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'der Löffel', pronunciation: 'در لوفيل', arabic: 'الملعقة' },
  { id: 190, categoryNum: 12, categoryTitle: 'الأطعمة، المشروبات والنظام الغذائي للمريض', german: 'der Becher', pronunciation: 'در بيشر', arabic: 'كوب الشرب' },

  // --- القسم الثالث عشر: حالات الطوارئ والتواصل الإسعافي ---
  { id: 191, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'der Notfall', pronunciation: 'در نوت فال', arabic: 'حالة طوارئ' },
  { id: 192, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Hilfe!', pronunciation: 'هيلفه!', arabic: 'النجدة / المساعدة!' },
  { id: 193, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Rufen Sie einen Arzt!', pronunciation: 'روفين زي آينين آرتست!', arabic: 'اتصل بالطبيب!' },
  { id: 194, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Ich habe Schmerzen.', pronunciation: 'إيخ هابي شميرتسن.', arabic: 'أنا أتعرض للألم / أشعر بألم' },
  { id: 195, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Mir ist schlecht.', pronunciation: 'مير إست شليخت.', arabic: 'أشعر بالغثيان / إعياء شديد' },
  { id: 196, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Achtung!', pronunciation: 'أخ تونغ!', arabic: 'انتبه / احذر!' },
  { id: 197, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Gefahr!', pronunciation: 'غيفار!', arabic: 'خطر!' },
  { id: 198, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Ich brauche Hilfe.', pronunciation: 'إيخ براوخه هيلفه.', arabic: 'أنا بحاجة للمساعدة' },
  { id: 199, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Keine Sorge.', pronunciation: 'كاينه زورغه.', arabic: 'لا تقلق / اطمئن' },
  { id: 200, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Alles wird gut.', pronunciation: 'آليس فيرد غوت.', arabic: 'كل شيء سيصبح على ما يرام' },
  { id: 201, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Atmen Sie tief ein.', pronunciation: 'آتمين زي تيف آين.', arabic: 'تنفس بعمق' },
  { id: 202, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Haben Sie Angst?', pronunciation: 'هابين زي آنغست؟', arabic: 'هل تشعر بالخوف؟' },
  { id: 203, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Wo tut es weh?', pronunciation: 'وو توت إست فيه؟', arabic: 'أين يشعر المريض بالألم؟' },
  { id: 204, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Bleiben Sie liegen.', pronunciation: 'بليبن زي ليغن.', arabic: 'ابقَ مستلقياً في السرير' },
  { id: 205, categoryNum: 13, categoryTitle: 'حالات الطوارئ والتواصل الإسعافي', german: 'Gute Besserung!', pronunciation: 'غوطه بيسيرونغ!', arabic: 'الشفاء العاجل / سلامتك' },

  // --- القسم الرابع عشر: غرفة العمليات والأجهزة الطبية بداخلهـا ---
  { id: 206, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'der OP-Tisch', pronunciation: 'در أو بي تيش', arabic: 'طاولة العمليات الجراحية' },
  { id: 207, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'das Narkosegerät', pronunciation: 'داس ناركوزه غريت', arabic: 'جهاز التخدير الاصطناعي' },
  { id: 208, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'der Überwachungsmonitor', pronunciation: 'در أوبرفاخونغس مونيتور', arabic: 'شاشة مراقبة العلامات الحيوية' },
  { id: 209, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'die OP-Lampe', pronunciation: 'دي أو بي لامبه', arabic: 'مصباح/كشاف العمليات الجراحية' },
  { id: 210, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'das Skalpell', pronunciation: 'داس اسکالبيل', arabic: 'المشرط الجراحي' },
  { id: 211, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'die chirurgische Pinzette', pronunciation: 'دي شيرورغيستشه بينسيتِه', arabic: 'الملقط الجراحي' },
  { id: 212, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'die chirurgische Schere', pronunciation: 'دي شيرورغيستشه شيرِه', arabic: 'مقص الجراحة' },
  { id: 213, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'die Absaugpumpe', pronunciation: 'دي أبزاوغ بومبه', arabic: 'جهاز الشفط الجراحي' },
  { id: 214, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'der Defibrillator', pronunciation: 'در ديفيبريلاتور', arabic: 'جهاز الصدمات الكهربائية للقلب' },
  { id: 215, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'die Herz-Lungen-Maschine', pronunciation: 'دي هيرتس لونغن ماشينه', arabic: 'جهاز القلب والرئة الاصطناعي' },
  { id: 216, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'die Klemme', pronunciation: 'دي كليمه', arabic: 'الكلاب/المشبك الجراحي لوقف النزيف' },
  { id: 217, categoryNum: 14, categoryTitle: 'غرفة العمليات والأجهزة الطبية', german: 'der Elektrokauter', pronunciation: 'در إلكترو كاوتر', arabic: 'جهاز الكي الكهربائي الجراحي' },

  // --- القسم الخامس عشر: الأدوية والمحاليل الطبية الوريدية بالمستشفى ---
  { id: 218, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'die Infusionslösung', pronunciation: 'دي إنفوزيونس لويزونغ', arabic: 'محلول وريدي طبي' },
  { id: 219, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'die Kochsalzlösung (NaCl)', pronunciation: 'دي كوخ زالتس لويزونغ', arabic: 'محلول الملح الطبي' },
  { id: 220, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'die Glukoselösung', pronunciation: 'دي غلوكوزه لويزونغ', arabic: 'محلول الجلوكوز/السكر' },
  { id: 221, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'das Schmerzzäpfchen', pronunciation: 'داس شميرتس تسيبشن', arabic: 'لبوس مسكن للألم' },
  { id: 222, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'das Fiebersenkungsmittel', pronunciation: 'داس فيبر زينكونغس ميتل', arabic: 'خافض للحرارة' },
  { id: 223, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'der Magenschutz', pronunciation: 'در ماغن شوتس', arabic: 'واقي المعدة (أدوية القرحة)' },
  { id: 224, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'die Magensonde', pronunciation: 'دي ماغن زونده', arabic: 'أنبوب التغذية المعوية' },
  { id: 225, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'der Blasenkatheter', pronunciation: 'در بلازن كاتيتر', arabic: 'القسطرة البولية' },
  { id: 226, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'die Spritzenpumpe', pronunciation: 'دي شبريتسن بومبه', arabic: 'مضخة الحقن الآلية للمحاليل الدقيقة' },
  { id: 227, categoryNum: 15, categoryTitle: 'الأدوية والمحاليل الطبية بالمستشفى', german: 'das Beruhigungsmittel', pronunciation: 'داس بيروهيجونغس ميتل', arabic: 'دواء مهدئ' },

  // --- القسم السادس عشر: الإجراءات التمريضية والقياسات الحيوية ---
  { id: 228, categoryNum: 16, categoryTitle: 'الإجراءات التمريضية والقياسات الحيوية', german: 'die Temperatur messen', pronunciation: 'دي تيمبراتور ميسين', arabic: 'قياس درجة الحرارة' },
  { id: 229, categoryNum: 16, categoryTitle: 'الإجراءات التمريضية والقياسات الحيوية', german: 'den Blutdruck messen', pronunciation: 'در بلوت دروك ميسين', arabic: 'قياس ضغط الدم' },
  { id: 230, categoryNum: 16, categoryTitle: 'الإجراءات التمريضية والقياسات الحيوية', german: 'den Blutzucker messen', pronunciation: 'در بلوتسوتشر ميسين', arabic: 'قياس نسبة السكر في الدم' },
  { id: 231, categoryNum: 16, categoryTitle: 'الإجراءات التمريضية والقياسات الحيوية', german: 'den Verband wechseln', pronunciation: 'در فيرباند فيكسلن', arabic: 'تغيير غيار/شاش الجرح' },
  { id: 232, categoryNum: 16, categoryTitle: 'الإجراءات التمريضية والقياسات الحيوية', german: 'Medikamente geben', pronunciation: 'ميديكامينته غيبين', arabic: 'إعطاء الأدوية للمريض' },
  { id: 233, categoryNum: 16, categoryTitle: 'الإجراءات التمريضية والقياسات الحيوية', german: 'den Patienten lagern', pronunciation: 'در باتشينتن لاغيرن', arabic: 'تعديل وضعية نوم/جلوس المريض' },
  { id: 234, categoryNum: 16, categoryTitle: 'الإجراءات التمريضية والقياسات الحيوية', german: 'eine Spritze geben', pronunciation: 'آينه شبريتسه غيبين', arabic: 'إعطاء الحقنة/الإبرة الطبية' },
  { id: 235, categoryNum: 16, categoryTitle: 'الإجراءات التمريضية والقياسات الحيوية', german: 'Blut abnehmen', pronunciation: 'بلوت آبنيمين', arabic: 'سحب عينة دم للتحليل' },

  // --- القسم السابع عشر: الأعراض العامة ومؤشرات الألم المتقدمة ---
  { id: 236, categoryNum: 17, categoryTitle: 'الأعراض ومؤشرات الألم المتقدمة', german: 'starke Schmerzen', pronunciation: 'شٹاركِه شميرتسن', arabic: 'ألم حاد / شديد' },
  { id: 237, categoryNum: 17, categoryTitle: 'الأعراض ومؤشرات الألم المتقدمة', german: 'pochende Schmerzen', pronunciation: 'پوشيندِه شميرتسن', arabic: 'ألم نابض' },
  { id: 238, categoryNum: 17, categoryTitle: 'الأعراض ومؤشرات الألم المتقدمة', german: 'anhaltende Schmerzen', pronunciation: 'آنحالتندِه شميرتسن', arabic: 'ألم مستمر / دائم' },
  { id: 239, categoryNum: 17, categoryTitle: 'الأعراض ومؤشرات الألم المتقدمة', german: 'ein brennendes Gefühl', pronunciation: 'آين برينيندِس غيڤول', arabic: 'شعور بالحرقة' },
  { id: 240, categoryNum: 17, categoryTitle: 'الأعراض ومؤشرات الألم المتقدمة', german: 'ein Druckgefühl', pronunciation: 'آين دروك غيڤول', arabic: 'شعور بالضغط أو الثقل' },
  { id: 241, categoryNum: 17, categoryTitle: 'الأعراض ومؤشرات الألم المتقدمة', german: 'ein blauer Fleck', pronunciation: 'آين بلاوير فليك', arabic: 'كدمة زرقاء / رضوض' },
  { id: 242, categoryNum: 17, categoryTitle: 'الأعراض ومؤشرات الألم المتقدمة', german: 'starke Schwellung', pronunciation: 'شٹاركِه شفيلونغ', arabic: 'تورم وانتفاخ واضح' },
  { id: 243, categoryNum: 17, categoryTitle: 'الأعراض ومؤشرات الألم المتقدمة', german: 'Schüttelfrost', pronunciation: 'شيتل فروست', arabic: 'قشعريرة / رعشة البرد' },

  // --- القسم الثامن عشر: أدوات ووسائل الحركة والمساعدة البدنية ---
  { id: 244, categoryNum: 18, categoryTitle: 'أدوات ووسائل الحركة والمساعدة البدنية', german: 'der Unterarmgehstock', pronunciation: 'در اونتر آرم غه شتوك', arabic: 'العكاز الطبي للساعد' },
  { id: 245, categoryNum: 18, categoryTitle: 'أدوات ووسائل الحركة والمساعدة البدنية', german: 'der Rollator', pronunciation: 'در رولاتور', arabic: 'مشاية متحركة بعجلات للمسنين' },
  { id: 246, categoryNum: 18, categoryTitle: 'أدوات ووسائل الحركة والمساعدة البدنية', german: 'der Gehbock', pronunciation: 'در غه بوك', arabic: 'مشاية طبية ثابتة' },
  { id: 247, categoryNum: 18, categoryTitle: 'أدوات ووسائل الحركة والمساعدة البدنية', german: 'die Kompressionsstrümpfe', pronunciation: 'دي كومبريسيونس سترومپفه', arabic: 'جوارب ضاغطة للدوالي' },
  { id: 248, categoryNum: 18, categoryTitle: 'أدوات ووسائل الحركة والمساعدة البدنية', german: 'der Rückengurt', pronunciation: 'در ريوكن غورت', arabic: 'حزام دعم الظهر الطبي' },
  { id: 249, categoryNum: 18, categoryTitle: 'أدوات ووسائل الحركة والمساعدة البدنية', german: 'das Antidekubitus-Kissen', pronunciation: 'داس أنتي ديكوبيتوس كيسن', arabic: 'وسادة طبية مانعة لقرحة الفراش' },

  // --- القسم التاسع عشر: إصابات ومشاكل العظام والمفاصل ---
  { id: 250, categoryNum: 19, categoryTitle: 'إصابات ومشاكل العظام والمفاصل', german: 'die Verstauchung', pronunciation: 'دي فيرشتاوخونغ', arabic: 'التواء مفصلي / التواء الكاحل' },
  { id: 251, categoryNum: 19, categoryTitle: 'إصابات ومشاكل العظام والمفاصل', german: 'der Bänderriss', pronunciation: 'در بيندريس', arabic: 'تمزق الأربطة' },
  { id: 252, categoryNum: 19, categoryTitle: 'إصابات ومشاكل العظام والمفاصل', german: 'die Gelenkentzündung', pronunciation: 'دي غيلينك إنتشيندونغ', arabic: 'التهاب المفاصل' },
  { id: 253, categoryNum: 19, categoryTitle: 'إصابات ومشاكل العظام والمفاصل', german: 'der Gelenkverschleiß (Arthrose)', pronunciation: 'در غيلينك فيرشلويس', arabic: 'خشونة / تآكل المفاصل' },
  { id: 254, categoryNum: 19, categoryTitle: 'إصابات ومشاكل العظام والمفاصل', german: 'die Schulterverrenkung', pronunciation: 'دي شولتر فيرينكونغ', arabic: 'خلع الكتف' },
  { id: 255, categoryNum: 19, categoryTitle: 'إصابات ومشاكل العظام والمفاصل', german: 'der Muskelkater', pronunciation: 'در موسكل كاتر', arabic: 'آلام وشد العضلات بعد الإجهاد' },

  // --- القسم العشرون: أعراض ومشاكل الجهاز التنفسي والقلب ---
  { id: 256, categoryNum: 20, categoryTitle: 'أعراض الجهاز التنفسي والقلب', german: 'die Atemnot', pronunciation: 'دي آتم نوت', arabic: 'ضيق التنفس الحاد' },
  { id: 257, categoryNum: 20, categoryTitle: 'أعراض الجهاز التنفسي والقلب', german: 'das Herzrasen', pronunciation: 'داس هيرتس رازين', arabic: 'تسارع ضربات القلب' },
  { id: 258, categoryNum: 20, categoryTitle: 'أعراض الجهاز التنفسي والقلب', german: 'der Asthmaanfall', pronunciation: 'در آستما أنفال', arabic: 'نوبة الربو الحادة' },
  { id: 259, categoryNum: 20, categoryTitle: 'أعراض الجهاز التنفسي والقلب', german: 'der trockene Husten', pronunciation: 'در تروكنه هوستن', arabic: 'السعال الجاف / الكحة الجافة' },
  { id: 260, categoryNum: 20, categoryTitle: 'أعراض الجهاز التنفسي والقلب', german: 'die Brustschmerzen', pronunciation: 'دي بروست شميرتسن', arabic: 'آلام الصدر الضاغطة' },
  { id: 261, categoryNum: 20, categoryTitle: 'أعراض الجهاز التنفسي والقلب', german: 'die Halsschmerzen', pronunciation: 'دي هالس شميرتسن', arabic: 'احتقان / ألام الحلق' },

  // --- القسم الحادي والعشرون: الأدوية والعقاقير التخصصية المتقدمة ---
  { id: 262, categoryNum: 21, categoryTitle: 'الأدوية والعقاقير التخصصية', german: 'das Blutdruckmedikament', pronunciation: 'داس بلوت دروك ميديكامينت', arabic: 'دواء ضغط الدم' },
  { id: 263, categoryNum: 21, categoryTitle: 'الأدوية والعقاقير التخصصية', german: 'das Insulin', pronunciation: 'داس إنسولين', arabic: 'الإنسولين (مرض السكري)' },
  { id: 264, categoryNum: 21, categoryTitle: 'الأدوية والعقاقير التخصصية', german: 'der Blutverdünner', pronunciation: 'در بلوت فيردونر', arabic: 'مسيل الدم / مضاد التجلط' },
  { id: 265, categoryNum: 21, categoryTitle: 'الأدوية والعقاقير التخصصية', german: 'das Cholesterinsenkungsmittel', pronunciation: 'داس كوليسترين زينكونغس ميتل', arabic: 'خافض الكوليسترول' },
  { id: 266, categoryNum: 21, categoryTitle: 'الأدوية والعقاقير التخصصية', german: 'das Antidepressivum', pronunciation: 'داس أنتيبيدريسيفوم', arabic: 'مضاد الاكتئاب' },
  { id: 267, categoryNum: 21, categoryTitle: 'الأدوية والعقاقير التخصصية', german: 'das Asthma-Spray', pronunciation: 'داس آستما شبراي', arabic: 'بخاخ الربو الموسع للشعب' },

  // --- القسم الثاني والعشرون: الحالات والشكاوى العصبية والنفسية ---
  { id: 268, categoryNum: 22, categoryTitle: 'الحالات والشكاوى العصبية والنفسية', german: 'der epileptische Anfall', pronunciation: 'در إيبيلبتيستشه أنفال', arabic: 'نوبة صرع / تشنج عصبي' },
  { id: 269, categoryNum: 22, categoryTitle: 'الحالات والشكاوى العصبية والنفسية', german: 'die Depression', pronunciation: 'دي ديبريسيون', arabic: 'مرض الاكتئاب النفسي' },
  { id: 270, categoryNum: 22, categoryTitle: 'الحالات والشكاوى العصبية والنفسية', german: 'die Angststörung', pronunciation: 'دي آنغست شتورونغ', arabic: 'اضطراب القلق الهلعي' },
  { id: 271, categoryNum: 22, categoryTitle: 'الحالات والشكاوى العصبية والنفسية', german: 'die Demenz', pronunciation: 'دي ديمينتس', arabic: 'مرض الخرف / الزهايمر' },
  { id: 272, categoryNum: 22, categoryTitle: 'الحالات والشكاوى العصبية والنفسية', german: 'die Schlafstörung', pronunciation: 'دي شلاف شتورونغ', arabic: 'اضطرابات واختلالات النوم' },

  // --- القسم الثالث والعشرون: فحوصات وعلامات الجسم الحيوية والقياسات ---
  { id: 273, categoryNum: 23, categoryTitle: 'فحوصات وعلامات الجسم الحيوية', german: 'die Blutanalyse', pronunciation: 'دي بلوت أَناليزه', arabic: 'تحليل وفحص الدم' },
  { id: 274, categoryNum: 23, categoryTitle: 'فحوصات وعلامات الجسم الحيوية', german: 'die Sauerstoffsättigung', pronunciation: 'دي زاويرستوف زيتيجونغ', arabic: 'نسبة تشبع الأكسجين' },
  { id: 275, categoryNum: 23, categoryTitle: 'فحوصات وعلامات الجسم الحيوية', german: 'das EEG (Elektroenzephalogramm)', pronunciation: 'داس إي إي غي', arabic: 'مخطط موجات الدماغ (EEG)' },
  { id: 276, categoryNum: 23, categoryTitle: 'فحوصات وعلامات الجسم الحيوية', german: 'die Lungenfunktionsprüfung', pronunciation: 'دي لونغن فونكتسيونس بروفونغ', arabic: 'فحص وظائف الرئة' },
  { id: 277, categoryNum: 23, categoryTitle: 'فحوصات وعلامات الجسم الحيوية', german: 'das Langzeit-EKG', pronunciation: 'داس لانغ تسايت إيكا غي', arabic: 'هولتر تخطيط القلب على مدار 24 ساعة' },

  // --- القسم الرابع والعشرون: الخدمات الاجتماعية والتأمين الصحي ---
  { id: 278, categoryNum: 24, categoryTitle: 'الخدمات الاجتماعية والتأمين الصحي', german: 'die Krankenversicherung', pronunciation: 'دي كرانكن فيرزيشيرونغ', arabic: 'التأمين الصحي / الضمان الصحي' },
  { id: 279, categoryNum: 24, categoryTitle: 'الخدمات الاجتماعية والتأمين الصحي', german: 'die Krankschreibung', pronunciation: 'دي كرانك شرايبونغ', arabic: 'إجازة مرضية معتمدة' },
  { id: 280, categoryNum: 24, categoryTitle: 'الخدمات الاجتماعية والتأمين الصحي', german: 'der Pflegegrad', pronunciation: 'دي فليغه غرات', arabic: 'درجة استحقاق رعاية المسنين' },
  { id: 281, categoryNum: 24, categoryTitle: 'الخدمات الاجتماعية والتأمين الصحي', german: 'der Schwerbehindertenausweis', pronunciation: 'در شوير بيهينديرتن آيسفايس', arabic: 'بطاقة إثبات الإعاقة / ذوي الاحتياجات' },
  { id: 282, categoryNum: 24, categoryTitle: 'الخدمات الاجتماعية والتأمين الصحي', german: 'die Zuzahlung', pronunciation: 'دي تسو تزالونغ', arabic: 'المساهمة المالية / التحمل الشخصي للتأمين' },

  // --- القسم الخامس والعشرون: الشكاوى والأعراض التفصيلية للمريض ---
  { id: 283, categoryNum: 25, categoryTitle: 'الشكاوى والأعراض التفصيلية للمريض', german: 'Ich habe Kopfschmerzen.', pronunciation: 'إيخ هابي كوبف شميرتسن.', arabic: 'أعاني من صداع في الرأس' },
  { id: 284, categoryNum: 25, categoryTitle: 'الشكاوى والأعراض التفصيلية للمريض', german: 'Mir ist schwindelig.', pronunciation: 'مير إست شفيندليغ.', arabic: 'أشعر بالدوار / الدوخة' },
  { id: 285, categoryNum: 25, categoryTitle: 'الشكاوى والأعراض التفصيلية للمريض', german: 'Ich kann nicht schlafen.', pronunciation: 'إيخ كان نيت شلافين.', arabic: 'لا أستطيع النوم' },
  { id: 286, categoryNum: 25, categoryTitle: 'الشكاوى والأعراض التفصيلية للمريض', german: 'Ich habe Bauchschmerzen.', pronunciation: 'إيخ هابي باوخ شميرتسن.', arabic: 'أعاني من آلام في البطن' },
  { id: 287, categoryNum: 25, categoryTitle: 'الشكاوى والأعراض التفصيلية للمريض', german: 'Meine Wunde blutet.', pronunciation: 'ماينه فونده بلوديت.', arabic: 'جرحي ينزف' },
  { id: 288, categoryNum: 25, categoryTitle: 'الشكاوى والأعراض التفصيلية للمريض', german: 'Mir ist kalt.', pronunciation: 'مير إست كالت.', arabic: 'أشعر بالبرد الشديد' },
  { id: 289, categoryNum: 25, categoryTitle: 'الشكاوى والأعراض التفصيلية للمريض', german: 'Ich habe keine Luft.', pronunciation: 'إيخ هابي كاينه لوفت.', arabic: 'لا أستطيع التنفس / اختناق' },
  { id: 290, categoryNum: 25, categoryTitle: 'الشكاوى والأعراض التفصيلية للمريض', german: 'Ich habe Rückenschmerzen.', pronunciation: 'إيخ هابي ريوكن شميرتسن.', arabic: 'أعاني من آلام الظهر' },

  // --- القسم السادس والعشرون: الحالات والشكاوى المرضية الجلدية والخارجية ---
  { id: 291, categoryNum: 26, categoryTitle: 'الحالات والشكاوى المرضية الجلدية', german: 'der Hautausschlag', pronunciation: 'در هاوت آوشلاغ', arabic: 'طفح جلدي / حساسية جلدية' },
  { id: 292, categoryNum: 26, categoryTitle: 'الحالات والشكاوى المرضية الجلدية', german: 'die Dekubitusgeschwür', pronunciation: 'دي ديكوبيتوس غيشوئر', arabic: 'قرحة الفراش' },
  { id: 293, categoryNum: 26, categoryTitle: 'الحالات والشكاوى المرضية الجلدية', german: 'die Hautrötung', pronunciation: 'دي هاوت روتونغ', arabic: 'احمرار الجلد' },
  { id: 294, categoryNum: 26, categoryTitle: 'الحالات والشكاوى المرضية الجلدية', german: 'der Abszess', pronunciation: 'در آبسيتس', arabic: 'دمل / خراج جلدي' },
  { id: 295, categoryNum: 26, categoryTitle: 'الحالات والشكاوى المرضية الجلدية', german: 'die Narbe', pronunciation: 'دي ناربه', arabic: 'أثر الجرح / ندبة' },

  // --- القسم السابع والعشرون: أعراض ومشاكل الحواس والإدراك ---
  { id: 296, categoryNum: 27, categoryTitle: 'أعراض ومشاكل الحواس والإدراك', german: 'Ich höre schlecht.', pronunciation: 'إيخ هورِه شليخت.', arabic: 'أعاني من صعوبة في السمع' },
  { id: 297, categoryNum: 27, categoryTitle: 'أعراض ومشاكل الحواس والإدراك', german: 'Ich sehe verschwommen.', pronunciation: 'إيخ زيه فيرشڤومن.', arabic: 'أرى بصورة مشوشة / ضبابية' },
  { id: 298, categoryNum: 27, categoryTitle: 'أعراض ومشاكل الحواس والإدراك', german: 'Ich habe Gedächtnisprobleme.', pronunciation: 'إيخ هابي غيشتشنيس پروبليمِه.', arabic: 'أعاني من مشاكل في الذاكرة' },
  { id: 299, categoryNum: 27, categoryTitle: 'أعراض ومشاكل الحواس والإدراك', german: 'Ich kann mich nicht konzentrieren.', pronunciation: 'إيخ كان ميش نيت كونتسنتيرين.', arabic: 'لا أستطيع التركيز' },
  { id: 300, categoryNum: 27, categoryTitle: 'أعراض ومشاكل الحواس والإدراك', german: 'Mir kribbeln die Hände.', pronunciation: 'مير كريبلن دي هاندِه.', arabic: 'أشعر بتململ/تنميل في يدي' },
  { id: 301, categoryNum: 27, categoryTitle: 'أعراض ومشاكل الحواس والإدراك', german: 'Ich habe Taubheitsgefühle.', pronunciation: 'إيخ هابي توبهايتس غيڤولِه.', arabic: 'أشعر بخدر / فقدان الإحساس' },

  // --- القسم الثامن والعشرون: التجهيزات والمرافق الطبية الإضافية بالمستشفى ---
  { id: 302, categoryNum: 28, categoryTitle: 'التجهيزات والمرافق الطبية بالمستشفى', german: 'der Aufzug (Fahrstuhl)', pronunciation: 'در آوف تسوگ', arabic: 'مصعد المستشفى / الأسانسير' },
  { id: 303, categoryNum: 28, categoryTitle: 'التجهيزات والمرافق الطبية بالمستشفى', german: 'das Wartezimmer', pronunciation: 'داس فارتس تسيمر', arabic: 'صالة / غرفة الانتظار' },
  { id: 304, categoryNum: 28, categoryTitle: 'التجهيزات والمرافق الطبية بالمستشفى', german: 'die Anmeldung (Rezeption)', pronunciation: 'دي آنملدونغ', arabic: 'مكتب الاستقبال / التسجيل' },
  { id: 305, categoryNum: 28, categoryTitle: 'التجهيزات والمرافق الطبية بالمستشفى', german: 'das Isolierzimmer', pronunciation: 'داس إزولير تسيمر', arabic: 'غرفة العزل الطبي' },
  { id: 306, categoryNum: 28, categoryTitle: 'التجهيزات والمرافق الطبية بالمستشفى', german: 'der Erste-Hilfe-Kasten', pronunciation: 'در إيرسته هيلفه كاستن', arabic: 'صندوق الإسعافات الأولية' },
  { id: 307, categoryNum: 28, categoryTitle: 'التجهيزات والمرافق الطبية بالمستشفى', german: 'der Medikamentenschrank', pronunciation: 'در ميديكامينتن شرانك', arabic: 'دولاب حفظ الأدوية' },
  { id: 308, categoryNum: 28, categoryTitle: 'التجهيزات والمرافق الطبية بالمستشفى', german: 'die Sterilisation', pronunciation: 'دي ستيريليساتسيون', arabic: 'وحدة وعملية التعقيم الطبي' },

  // --- القسم التاسع والعشرون: الخروج من المستشفى والرعاية المنزلية ---
  { id: 309, categoryNum: 29, categoryTitle: 'الخروج من المستشفى والرعاية المنزلية', german: 'die Entlassung', pronunciation: 'دي إنتلاسونغ', arabic: 'الخروج من المستشفى' },
  { id: 310, categoryNum: 29, categoryTitle: 'الخروج من المستشفى والرعاية المنزلية', german: 'der Entlassungsbrief', pronunciation: 'در إنتلاسونغس بريف', arabic: 'خطاب / تقرير الخروج الطبي' },
  { id: 311, categoryNum: 29, categoryTitle: 'الخروج من المستشفى والرعاية المنزلية', german: 'der Kontrolltermin', pronunciation: 'در كونت롤 تيرمين', arabic: 'موعد الفحص / المراجعة القادمة' },
  { id: 312, categoryNum: 29, categoryTitle: 'الخروج من المستشفى والرعاية المنزلية', german: 'häusliche Pflege', pronunciation: 'هويزليشِه فليغه', arabic: 'الرعاية والتمريض المنزلي' },
  { id: 313, categoryNum: 29, categoryTitle: 'الخروج من المستشفى والرعاية المنزلية', german: 'ärztliche Anweisungen', pronunciation: 'آرتستليشِه آنفايزونغن', arabic: 'تعليمات وإرشادات الطبيب' },
  { id: 314, categoryNum: 29, categoryTitle: 'الخروج من المستشفى والرعاية المنزلية', german: 'Krankentransport', pronunciation: 'كرانكن ترانسبورت', arabic: 'خدمة نقل المرضى' },

  // --- القسم الثلاثون: أقسام المستشفى والتخصصات ---
  { id: 315, categoryNum: 30, categoryTitle: 'أقسام المستشفى والتخصصات', german: 'die Innere Medizin', pronunciation: 'دي إنيريه ميديتسين', arabic: 'قسم الباطنة' },
  { id: 316, categoryNum: 30, categoryTitle: 'أقسام المستشفى والتخصصات', german: 'die Chirurgie', pronunciation: 'دي شيرورغي', arabic: 'قسم الجراحة' },
  { id: 317, categoryNum: 30, categoryTitle: 'أقسام المستشفى والتخصصات', german: 'die Orthopädie', pronunciation: 'دي أورتوبيدي', arabic: 'قسم العظام' },
  { id: 318, categoryNum: 30, categoryTitle: 'أقسام المستشفى والتخصصات', german: 'die Kardiologie', pronunciation: 'دي كارديلوغي', arabic: 'قسم أمراض القلب' },
  { id: 319, categoryNum: 30, categoryTitle: 'أقسام المستشفى والتخصصات', german: 'die Radiologie', pronunciation: 'دي راديولوجي', arabic: 'قسم الأشعة' },
  { id: 320, categoryNum: 30, categoryTitle: 'أقسام المستشفى والتخصصات', german: 'die Physiotherapie', pronunciation: 'دي فيزيوتيرابي', arabic: 'قسم العلاج الطبيعي' },
  { id: 321, categoryNum: 30, categoryTitle: 'أقسام المستشفى والتخصصات', german: 'die Gynäkologie', pronunciation: 'دي غينيكولوجي', arabic: 'قسم النساء والتوليد' },
  { id: 322, categoryNum: 30, categoryTitle: 'أقسام المستشفى والتخصصات', german: 'die Pädiatrie', pronunciation: 'دي بيدياتري', arabic: 'قسم الأطفال' },

  // --- القسم الحادي والثلاثون: الحالات البدنية والصفات الصحية ---
  { id: 323, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'müde', pronunciation: 'ميوده', arabic: 'متعب' },
  { id: 324, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'krank', pronunciation: 'كرانك', arabic: 'مريض' },
  { id: 325, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'gesund', pronunciation: 'غزونت', arabic: 'سليم / معافى' },
  { id: 326, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'stark', pronunciation: 'شٹارك', arabic: 'قوي' },
  { id: 327, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'schwach', pronunciation: 'شفاخ', arabic: 'ضعيف' },
  { id: 328, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'schlank', pronunciation: 'شلانك', arabic: 'نحيف' },
  { id: 329, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'fit', pronunciation: 'فيت', arabic: 'لائق بدنياً' },
  { id: 330, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'schmerzfrei', pronunciation: 'شميرتس فراي', arabic: 'خالٍ من الألم' },
  { id: 331, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'dick', pronunciation: 'ديك', arabic: 'سمين / بدين' },
  { id: 332, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'schwindelig', pronunciation: 'شفيندليغ', arabic: 'يشعر بالدوار' },
  { id: 333, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'fieberhaft', pronunciation: 'فيبر هافت', arabic: 'مُحموم / مصاب بالحمى' },
  { id: 334, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'erschöpft', pronunciation: 'إرشوبفت', arabic: 'منهك / شديد التعب' },
  { id: 335, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'atemlos', pronunciation: 'آتملوس', arabic: 'لاهث / منقطع النفس' },
  { id: 336, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'schweißgebadet', pronunciation: 'شفايس غيباديت', arabic: 'مُتصبب عرقاً' },
  { id: 337, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'schmerzhaft', pronunciation: 'شميرتس هافت', arabic: 'مؤلم / موجع' },
  { id: 338, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'entzündet', pronunciation: 'إنتشيندات', arabic: 'متهيج / ملتهب' },
  { id: 339, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'geschwollen', pronunciation: 'غيشوولين', arabic: 'متورم / منتفخ' },
  { id: 340, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'gelähmt', pronunciation: 'غيليمات', arabic: 'مشلول / فاقد الحركة' },
  { id: 341, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'bewusstlos', pronunciation: 'بيوستم لوس', arabic: 'فاقد الوعي / مغشي عليه' },
  { id: 342, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'stabil', pronunciation: 'شتابيل', arabic: 'مستقر (الحالة الصحية)' },
  { id: 343, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'kritisch', pronunciation: 'كريتيش', arabic: 'حرج / خطير (للحالات الطبية)' },
  { id: 344, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'infektionsanfällig', pronunciation: 'إنفيكتسيونس أنفاليغ', arabic: 'عرضة للعدوى / مناعته ضعيفة' },
  { id: 345, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'bettlägerig', pronunciation: 'بيت ليغريغ', arabic: 'طريح الفراش / لازم للسرير' },
  { id: 346, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'pflegebedürftig', pronunciation: 'فليغه بيديورفتيغ', arabic: 'بحاجة ماسة للرعاية التمريضية' },
  { id: 347, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'desorientiert', pronunciation: 'ديزورينتيرت', arabic: 'فقدان التوجيه / مشتت الذهن' },
  { id: 348, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'genesend', pronunciation: 'غينيزيند', arabic: 'في مرحلة التعافي / النقاهة' },
  { id: 349, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'blass', pronunciation: 'بلاس', arabic: 'شاحب الوجه' },
  { id: 350, categoryNum: 31, categoryTitle: 'الحالات البدنية والصفات الصحية', german: 'trocken', pronunciation: 'تروكن', arabic: 'جاف (للبشرة أو الحلق)' },

  // --- القسم الثاني والثلاثون: أجهزة ووحدات القياس الطبي المتقدمة ---
  { id: 351, categoryNum: 32, categoryTitle: 'أجهزة ووحدات القياس الطبي', german: 'das Ultraschallgerät', pronunciation: 'داس أولتراشال غريت', arabic: 'جهاز الموجات فوق الصوتية (السونار)' },
  { id: 352, categoryNum: 32, categoryTitle: 'أجهزة ووحدات القياس الطبي', german: 'das Röntgengerät', pronunciation: 'داس رينتغن غريت', arabic: 'جهاز الأشعة السينية' },
  { id: 353, categoryNum: 32, categoryTitle: 'أجهزة ووحدات القياس الطبي', german: 'das CT-Gerät', pronunciation: 'داس تسيه تيه غريت', arabic: 'جهاز الأشعة المقطعية' },
  { id: 354, categoryNum: 32, categoryTitle: 'أجهزة ووحدات القياس الطبي', german: 'das Beatmungsgerät', pronunciation: 'داس بئاتمونغس غريت', arabic: 'جهاز التنفس الصناعي' },
  { id: 355, categoryNum: 32, categoryTitle: 'أجهزة ووحدات القياس الطبي', german: 'der Pulsoxymeter', pronunciation: 'در بولس أوكسيميتر', arabic: 'جهاز قياس الأكسجين والنبض بالإصبع' },

  // --- القسم الثالث والثلاثون: مستلزمات العناية بالجروح المتقدمة والقرح ---
  { id: 356, categoryNum: 33, categoryTitle: 'مستلزمات العناية بالجروح والقرح', german: 'die sterile Kompresse', pronunciation: 'دي ستيريله كومبريسه', arabic: 'كمادة / شاش معقم للجروح' },
  { id: 357, categoryNum: 33, categoryTitle: 'مستلزمات العناية بالجروح والقرح', german: 'das Fixierpflaster', pronunciation: 'داس فيكسير فلاستر', arabic: 'لاصف تثبيت الشاش والضمادات' },
  { id: 358, categoryNum: 33, categoryTitle: 'مستلزمات العناية بالجروح والقرح', german: 'die Hydrokolloid-Wundauflage', pronunciation: 'دي هايدروكولويد فونداوفلاغه', arabic: 'ضمادة هيدروكولويد لعلاج قرح الفراش' },
  { id: 359, categoryNum: 33, categoryTitle: 'مستلزمات العناية بالجروح والقرح', german: 'die elastische Binde', pronunciation: 'دي إلاستيشه بينده', arabic: 'رباط مطاطي ضاغط' },
  { id: 360, categoryNum: 33, categoryTitle: 'مستلزمات العناية بالجروح والقرح', german: 'das Nahtmaterial', pronunciation: 'داس نات ميتريال', arabic: 'خيوط وأدوات الخياطة الجراحية' },

  // --- القسم الرابع والثلاثون: الطوارئ المتقدمة والتعامل مع الإصابات الحرجة ---
  { id: 361, categoryNum: 34, categoryTitle: 'الطوارئ المتقدمة والإصابات الحرجة', german: 'der Herz-Kreislauf-Stillstand', pronunciation: 'در هيرتس كرايس لوف شتيلستاند', arabic: 'توقف القلب والدورة الدموية' },
  { id: 362, categoryNum: 34, categoryTitle: 'الطوارئ المتقدمة والإصابات الحرجة', german: 'die Reanimation', pronunciation: 'دي ريهانيماسيون', arabic: 'الإنعاش القلبي الرئوي' },
  { id: 363, categoryNum: 34, categoryTitle: 'الطوارئ المتقدمة والإصابات الحرجة', german: 'der anaphylaktische Schock', pronunciation: 'در أنافيلاتيستشه شوك', arabic: 'صدمة الحساسية المفرطة' },
  { id: 364, categoryNum: 34, categoryTitle: 'الطوارئ المتقدمة والإصابات الحرجة', german: 'die innere Blutung', pronunciation: 'دي إنيريه بلودونغ', arabic: 'نزيف داخلي خطير' },
  { id: 365, categoryNum: 34, categoryTitle: 'الطوارئ المتقدمة والإصابات الحرجة', german: 'der Vergiftungsnotfall', pronunciation: 'در فيرغيتبونغس نوتفال', arabic: 'حالة تسمم طارئة' },

  // --- القسم الخامس والثلاثون: تخصصات تمريض العناية المركزة والشيخوخة ---
  { id: 366, categoryNum: 35, categoryTitle: 'تمريض العناية المركزة والشيخوخة', german: 'die Altenpflege', pronunciation: 'دي آلتن فليغه', arabic: 'رعاية المسنين والشيخوخة' },
  { id: 367, categoryNum: 35, categoryTitle: 'تمريض العناية المركزة والشيخوخة', german: 'die Palliativpflege', pronunciation: 'دي بالياتيف فليغه', arabic: 'الرعاية التلطيفية للمرضى الحالات المتأخرة' },
  { id: 368, categoryNum: 35, categoryTitle: 'تمريض العناية المركزة والشيخوخة', german: 'der Rollstuhlfahrer', pronunciation: 'در رول شتول فاهرير', arabic: 'مستخدم الكرسي المتحرك' },
  { id: 369, categoryNum: 35, categoryTitle: 'تمريض العناية المركزة والشيخوخة', german: 'die Sturzprophylaxe', pronunciation: 'دي شتورز بروفالاكسه', arabic: 'الوقاية من السقوط للمسنين' },
  { id: 370, categoryNum: 35, categoryTitle: 'تمريض العناية المركزة والشيخوخة', german: 'die Kontinenzberatung', pronunciation: 'دي كونتينينتس بيراتونغ', arabic: 'استشارات واضطرابات الإخراج والتحكم' },

  // --- القسم السادس والثلاثون: التحاليل المخبرية الدقيقة ---
  { id: 371, categoryNum: 36, categoryTitle: 'التحاليل المخبرية الدقيقة', german: 'das Blutbild', pronunciation: 'داس بلوت بيلد', arabic: 'صورة الدم الكاملة' },
  { id: 372, categoryNum: 36, categoryTitle: 'التحاليل المخبرية الدقيقة', german: 'der Blutzuckerwert', pronunciation: 'در بلوتسوتشر فيرت', arabic: 'مستوى سكر الدم' },
  { id: 373, categoryNum: 36, categoryTitle: 'التحاليل المخبرية الدقيقة', german: 'die Leberwerte', pronunciation: 'دي ليبر فيرته', arabic: 'قيم وظائف الكبد' },
  { id: 374, categoryNum: 36, categoryTitle: 'التحاليل المخبرية الدقيقة', german: 'die Nierenwerte', pronunciation: 'دي نيرين فيرته', arabic: 'قيم وظائف الكلى' },
  { id: 375, categoryNum: 36, categoryTitle: 'التحاليل المخبرية الدقيقة', german: 'der Entzündungswert', pronunciation: 'در إنتشيندونغس فيرت', arabic: 'مؤشر الالتهاب في الدم' },

  // --- القسم السابع والثلاثون: أعضاء الجهاز الهضمي والغدد ---
  { id: 376, categoryNum: 37, categoryTitle: 'أعضاء الجهاز الهضمي والغدد', german: 'die Speiseröhre', pronunciation: 'دي شبيزه روريه', arabic: 'المريء' },
  { id: 377, categoryNum: 37, categoryTitle: 'أعضاء الجهاز الهضمي والغدد', german: 'die Bauchspeicheldrüse', pronunciation: 'دي باوخ شبيشل دروزه', arabic: 'بنكرياس / غدة البنكرياس' },
  { id: 378, categoryNum: 37, categoryTitle: 'أعضاء الجهاز الهضمي والغدد', german: 'die Schilddrüse', pronunciation: 'دي شيلد دروزه', arabic: 'الغدة الدرقية' },
  { id: 379, categoryNum: 37, categoryTitle: 'أعضاء الجهاز الهضمي والغدد', german: 'die Milz', pronunciation: 'دي ميلتس', arabic: 'الطحال' },
  { id: 380, categoryNum: 37, categoryTitle: 'أعضاء الجهاز الهضمي والغدد', german: 'der Blinddarm', pronunciation: 'در بليند دارم', arabic: 'الزائدة الدودية' },

  // --- القسم الثامن والثلاثون: أدوية الأمراض المزمنة والأوعية الدموية ---
  { id: 381, categoryNum: 38, categoryTitle: 'أدوية الأمراض المزمنة والأوعية الدموية', german: 'der Betablocker', pronunciation: 'در بيتا بلوكر', arabic: 'حاصرات بيتا (لضغط الدم والقلب)' },
  { id: 382, categoryNum: 38, categoryTitle: 'أدوية الأمراض المزمنة والأوعية الدموية', german: 'der ACE-Hemmer', pronunciation: 'در آسيه هيمير', arabic: 'مثبطات إنزيم تحويل الأنجيوتنسين (للضغط)' },
  { id: 383, categoryNum: 38, categoryTitle: 'أدوية الأمراض المزمنة والأوعية الدموية', german: 'das Diuretikum', pronunciation: 'داس ديوريتيكوم', arabic: 'مدر البول / حبوب تصريف السوائل' },
  { id: 384, categoryNum: 38, categoryTitle: 'أدوية الأمراض المزمنة والأوعية الدموية', german: 'das Antidiabetikum', pronunciation: 'داس أنتي ديابيتيكوم', arabic: 'أدوية مرض السكري الفموية' },
  { id: 385, categoryNum: 38, categoryTitle: 'أدوية الأمراض المزمنة والأوعية الدموية', german: 'das Schilddrüsenhormon', pronunciation: 'داس شيلد دروزين هورمون', arabic: 'هرمون الغدة الدرقية التخليقي' },

  // --- القسم التاسع والثلاثون: العناية الخاصة بقرح الفراش والأجهزة التعويضية ---
  { id: 386, categoryNum: 39, categoryTitle: 'العناية الخاصة والأجهزة التعويضية', german: 'die Weichlagerungsmatratze', pronunciation: 'دي فايخ لاغيرونغس ماتراتسه', arabic: 'مرتبة طبية هوائية لمنع قرحة الفراش' },
  { id: 387, categoryNum: 39, categoryTitle: 'العناية الخاصة والأجهزة التعويضية', german: 'die Gehhilfe', pronunciation: 'دي غه هيلفه', arabic: 'وسيلة المساعدة على المشي' },
  { id: 388, categoryNum: 39, categoryTitle: 'العناية الخاصة والأجهزة التعويضية', german: 'die Armprothese', pronunciation: 'دي آرم پروتيزه', arabic: 'طرف صناعي للذراع' },
  { id: 389, categoryNum: 39, categoryTitle: 'العناية الخاصة والأجهزة التعويضية', german: 'die Beinprothese', pronunciation: 'دي باين پروتيزه', arabic: 'طرف صناعي للساق' },
  { id: 390, categoryNum: 39, categoryTitle: 'العناية الخاصة والأجهزة التعويضية', german: 'die Zahnprothese', pronunciation: 'دي تسان پروتيزه', arabic: 'طقم أسنان صناعي / تركيبات الأسنان' },

  // --- القسم الأربعون: الفحوصات التشخيصية والعصبية الدقيقة ---
  { id: 391, categoryNum: 40, categoryTitle: 'الفحوصات التشخيصية والعصبية الدقيقة', german: 'die Nervenleitgeschwindigkeit', pronunciation: 'دي نيرفن لايت غيشڤيندغكايت', arabic: 'سرعة التوصيل العصبي' },
  { id: 392, categoryNum: 40, categoryTitle: 'الفحوصات التشخيصية والعصبية الدقيقة', german: 'das Belastungs-EKG', pronunciation: 'داس بيلاستونغس إيكا غي', arabic: 'رسم قلب بالمجهود (فحص الإجهاد)' },
  { id: 393, categoryNum: 40, categoryTitle: 'الفحوصات التشخيصية والعصبية الدقيقة', german: 'die Koronarangiographie', pronunciation: 'دي كورونار أنجيوجرافي', arabic: 'قسطرة الشرايين التاجية للقلب' },
  { id: 394, categoryNum: 40, categoryTitle: 'الفحوصات التشخيصية والعصبية الدقيقة', german: 'die Sonographie der Halsschlagader', pronunciation: 'دي سونوجرافي در هالس شلاغ آدر', arabic: 'سونار على شرايين الرقبة' },
  { id: 395, categoryNum: 40, categoryTitle: 'الفحوصات التشخيصية والعصبية الدقيقة', german: 'die Knochendichtemessung', pronunciation: 'دي كنوخن ديشته ميسونغ', arabic: 'قياس كثافة العظام (لهشاشة العظام)' },

  // --- القسم الحادي والأربعون: إفرازات وإعراض ومخلفات الجسم الشاملة ---
  { id: 396, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der Schleim', pronunciation: 'در شلايم', arabic: 'مخاط / بلغم' },
  { id: 397, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der Auswurf', pronunciation: 'در آوسوورف', arabic: 'بلغم' },
  { id: 400, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der Eiter', pronunciation: 'در آيتير', arabic: 'صديد' },
  { id: 401, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'die Wundkruste', pronunciation: 'دي ووندكروسته', arabic: 'قشرة جرح' },
  { id: 402, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'die Schuppen', pronunciation: 'دي شوبن', arabic: 'قشرة الرأس' },
  { id: 403, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'das Ohrenschmalz', pronunciation: 'داس أورينشمالتس', arabic: 'شمع الأذن' },
  { id: 404, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'die Galle', pronunciation: 'دي غاله', arabic: 'عصارة الصفراء' },
  { id: 405, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'die Gase', pronunciation: 'دي غازه', arabic: 'غازات' },
  { id: 406, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der üble Geruch', pronunciation: 'در أوبله غيروخ', arabic: 'رائحة كريهة' },
  { id: 407, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der Schmutz', pronunciation: 'در شموتس', arabic: 'أوساخ' },
  { id: 408, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der Schweiß', pronunciation: 'در شفايس', arabic: 'عرق' },
  { id: 409, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der Speichel', pronunciation: 'در شبايكل', arabic: 'لعاب' },
  { id: 410, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der Nasenschleim', pronunciation: 'در ناتسنشلايم', arabic: 'مخاط الأنف' },
  { id: 411, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der zähe Schleim', pronunciation: 'در تسيهه شلايم', arabic: 'مخاط لزج' },
  { id: 412, categoryNum: 41, categoryTitle: 'إفرازات وإعراض ومخلفات الجسم', german: 'der Ausfluss', pronunciation: 'در آوسفلوس', arabic: 'إفرازات' },

  // --- القسم الثاني والأربعون: الأمراض والحالات المرضية الشاملة ---
  { id: 413, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Nebenhöhlenentzündung', pronunciation: 'دي نيبينهويلين إنتشيندونغ', arabic: 'التهاب الجيوب الأنفية' },
  { id: 414, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Mandelentzündung', pronunciation: 'دي ماندل إنتشيندونغ', arabic: 'التهاب اللوزتين' },
  { id: 415, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Blinddarmentzündung', pronunciation: 'دي بليند دارم إنتشيندونغ', arabic: 'التهاب الزائدة الدودية' },
  { id: 416, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Gelenkentzündung', pronunciation: 'دي غيلينك إنتشيندونغ', arabic: 'التهاب المفاصل' },
  { id: 417, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Bronchitis', pronunciation: 'دي برونشيتيس', arabic: 'التهاب الشعب الهوائية' },
  { id: 418, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Lungenentzündung', pronunciation: 'دي لونغن إنتشيندونغ', arabic: 'الالتهاب الرئوي' },
  { id: 419, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Magenschleimhautentzündung', pronunciation: 'دي ماغن شلايم هاوت إنتشيندونغ', arabic: 'التهاب المعدة' },
  { id: 420, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Migräne', pronunciation: 'دي ميغرينه', arabic: 'الصداع النصفي' },
  { id: 421, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Zuckerkrankheit', pronunciation: 'دي تسوكر كرانكهايت', arabic: 'مرض السكري' },
  { id: 422, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'das Asthma', pronunciation: 'داس آستما', arabic: 'الربو' },
  { id: 423, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Neurodermitis', pronunciation: 'دي نويروديرميتيس', arabic: 'الأكزيما' },
  { id: 424, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Blutarmut', pronunciation: 'دي بلوت آرموت', arabic: 'فقر الدم' },
  { id: 425, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Schlafstörung', pronunciation: 'دي شلاف شتورونغ', arabic: 'الأرق' },
  { id: 426, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Knochenerweichung', pronunciation: 'دي كنوخن إيرفايخونغ', arabic: 'هشاشة العظام' },
  { id: 427, categoryNum: 42, categoryTitle: 'الأمراض والحالات المرضية الشاملة', german: 'die Bindehautentzündung', pronunciation: 'دي بينده هاوت إنتشيندونغ', arabic: 'التهاب الملتحمة' }
];

export default function BodyHealthBankPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // استخراج الأقسام الفريدة تلقائياً للفهرس
  const uniqueCategories = Array.from(
    new Set(bodyHealthBankData.map((item) => item.categoryNum))
  ).map((num) => {
    const found = bodyHealthBankData.find((item) => item.categoryNum === num);
    return { num, title: found ? found.categoryTitle : '' };
  });

  // دالة التعامل مع التمرير الداخلي في نفس الصفحة بدقة تامة
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // دالة النطق الصوتي المباشر باستخدام Web Speech API
  const speakGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const renderColoredGermanWord = (germanStr) => {
    const parts = germanStr.split(' ');
    if (parts.length > 0) {
      const firstWord = parts[0].toLowerCase();
      let wordColor = 'inherit';

      if (firstWord === 'der') wordColor = '#00bfff';
      else if (firstWord === 'das') wordColor = '#22c55e';
      else if (firstWord === 'die') wordColor = '#ec4899';

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

  const filteredData = bodyHealthBankData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let lastCategoryNum = null;

  return (
    <div style={{ width: '100%', padding: '15px 0 40px 0', color: 'inherit', background: 'transparent', boxSizing: 'border-box' }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .page-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 10px;
          color: inherit;
        }
        .page-subtitle {
          text-align: center;
          font-size: 1.0rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #00bfff;
        }
        .nav-instruction-text {
          text-align: center;
          font-size: 0.88rem;
          font-weight: 900;
          margin-bottom: 12px;
          color: #ff3333;
          direction: rtl;
        }
        /* شريط التنقل السريع للأقسام داخل نفس الصفحة */
        .sections-nav-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          width: 90%;
          max-width: 90%;
          margin: 0 auto 25px auto;
          direction: rtl;
        }
        .section-nav-btn {
          background: rgba(0, 191, 255, 0.15);
          color: inherit;
          border: 1px solid #00bfff;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 0.75rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .section-nav-btn:hover {
          background-color: #00bfff;
          color: #ffffff;
        }
        .search-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
        }
        .search-input {
          width: 90%;
          max-width: 90%;
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
          width: 100%;
          scroll-margin-top: 25px;
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
          width: 90%;
          max-width: 90%;
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
          width: 22px;
          height: 22px;
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

      <h1 className="page-title">بنك كلمات الجسم والصحة</h1>
      <p className="page-subtitle">أعضاء الجسم، التمريض، الأقسام الطبية، والحواس باللغة الألمانية</p>

      {/* النص المطلوب */}
      <div className="nav-instruction-text">اضغط على القسم الذي تود الذهاب إليه</div>

      {/* شريط التنقل السريع للأقسام داخل نفس الصفحة */}
      <div className="sections-nav-container">
        {uniqueCategories.map((cat) => (
          <button
            key={cat.num}
            onClick={(e) => handleScrollToSection(e, `section-${cat.num}`)}
            className="section-nav-btn"
          >
            {cat.num}. {cat.title}
          </button>
        ))}
      </div>

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

      {/* حاوية الكروت */}
      <div className="cards-container">
        {filteredData.map((item) => {
          const showHeading = item.categoryNum !== lastCategoryNum;
          lastCategoryNum = item.categoryNum;

          return (
            <React.Fragment key={item.id}>
              {showHeading && (
                <div
                  id={`section-${item.categoryNum}`}
                  className="category-heading"
                >
                  <span className="category-badge">{item.categoryNum}</span>
                  <span>{item.categoryTitle}</span>
                </div>
              )}
              <div
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
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}