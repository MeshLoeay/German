import React, { useState } from 'react';

// قائمة موسوعة المنزل الشاملة لكل ما يوجد في البيت وما يحيط به باللغة الألمانية
const allHouseItemsData = [
  // --- القسم الأول: غرف ومرافق وأقسام المنزل الأساسية ---
  { id: 1, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Haus', pronunciation: 'داس هاوس', arabic: 'المنزل' },
  { id: 2, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'die Wohnung', pronunciation: 'دي فونونغ', arabic: 'الشقة' },
  { id: 3, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Zimmer', pronunciation: 'داس تسيمر', arabic: 'الغرفة' },
  { id: 4, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Schlafzimmer', pronunciation: 'داس شلاف تسيمر', arabic: 'غرفة النوم' },
  { id: 5, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Wohnzimmer', pronunciation: 'داس فون تسيمر', arabic: 'غرفة المعيشة / الجلوس' },
  { id: 6, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Kinderzimmer', pronunciation: 'داس كيندر تسيمر', arabic: 'غرفة الأطفال' },
  { id: 7, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Arbeitszimmer', pronunciation: 'داس أربايتس تسيمر', arabic: 'غرفة العمل / المكتب' },
  { id: 8, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Esszimmer', pronunciation: 'داس إس تسيمر', arabic: 'غرفة الطعام' },
  { id: 9, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Gästezimmer', pronunciation: 'داس غيسته تسيمر', arabic: 'غرفة الضيوف' },
  { id: 10, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Flur', pronunciation: 'در فلور', arabic: 'الردهة / الممر' },
  { id: 11, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Keller', pronunciation: 'در كيلر', arabic: 'القبو / البدروم' },
  { id: 12, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Dachboden', pronunciation: 'در داخبودن', arabic: 'العلية' },
  { id: 13, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Garten', pronunciation: 'در غارتن', arabic: 'الحديقة' },
  { id: 14, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Balkon', pronunciation: 'در بالكون', arabic: 'الشرفة' },
  { id: 15, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'die Garage', pronunciation: 'دي غاراجِ', arabic: 'المرآب / الكراج' },
  { id: 16, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'die Terrasse', pronunciation: 'دي تراسه', arabic: 'التراس / الفناء' },
  { id: 101, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Auto', pronunciation: 'داس أوتو', arabic: 'السيارة' },
  { id: 102, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Stellplatz', pronunciation: 'در شتيل بلاتس', arabic: 'موقف / باكة السيارات' },
  { id: 103, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Parkplatz', pronunciation: 'در بارك بلاتس', arabic: 'موقف السيارات العام / الخاص' },
  { id: 104, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Garagentor', pronunciation: 'داس غاراجن طور', arabic: 'بوابة / باب الكراج' },
  { id: 105, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'die Einfahrt', pronunciation: 'دي آين فارت', arabic: 'مدخل / مدق السيارات' },
  { id: 106, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Fahrrad', pronunciation: 'داس فاراد', arabic: 'الدراجة الهوائية' },
  { id: 107, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Motorrad', pronunciation: 'داس موتورراد', arabic: 'الدراجة النارية' },
  { id: 108, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der E-Scooter', pronunciation: 'در إي سكوتر', arabic: 'السكوتر الكهربائي' },
  { id: 156, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'das Gäste-WC', pronunciation: 'داس غيسته في سي', arabic: 'حمام الضيوف الصغير' },
  { id: 157, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'der Waschkeller', pronunciation: 'در فاش كيلر', arabic: 'غرفة الغسيل المشتركة / في البدروم' },
  { id: 158, categoryNum: 1, categoryTitle: 'غرف ومرافق وأقسام المنزل', german: 'die Haustür', pronunciation: 'دي هاوس تيور', arabic: 'باب المنزل الرئيسي' },

  // --- القسم الثاني: هيكل البناء ومكونات الغرف ---
  { id: 17, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Tür', pronunciation: 'دي تيور', arabic: 'الباب' },
  { id: 18, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'das Tor', pronunciation: 'داس طور', arabic: 'البوابة الكبيرة' },
  { id: 19, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'das Fenster', pronunciation: 'داس فينستر', arabic: 'النافذة' },
  { id: 20, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Wand', pronunciation: 'دي فانت', arabic: 'الجدار الداخلي' },
  { id: 21, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Mauer', pronunciation: 'دي ماوير', arabic: 'الجدار الخارجي / السور' },
  { id: 22, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'der Boden', pronunciation: 'در بودن', arabic: 'الأرضية' },
  { id: 23, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Decke', pronunciation: 'دي ديكه', arabic: 'السقف' },
  { id: 24, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Treppe', pronunciation: 'دي تريبه', arabic: 'الدرج / السلم' },
  { id: 25, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'der Aufzug', pronunciation: 'در أوفتسوغ', arabic: 'المصعد' },
  { id: 26, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'der Zaun', pronunciation: 'در تساون', arabic: 'السياج' },
  { id: 159, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Schwelle', pronunciation: 'دي شفيله', arabic: 'عتبة الباب' },
  { id: 160, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'der Balkon', pronunciation: 'در بالكون', arabic: 'الشرفة' },
  { id: 161, categoryNum: 2, categoryTitle: 'هيكل البناء ومكونات الغرف', german: 'die Dachrinne', pronunciation: 'دي داخبينه', arabic: 'مزراب تصريف مياه الأمطار بالسقف' },

  // --- القسم الثالث: المطبخ وأدواته ومستلزماته الكاملة ---
  { id: 27, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Küche', pronunciation: 'دي كيوشه', arabic: 'المطبخ' },
  { id: 28, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Kühlschrank', pronunciation: 'در كيولشرانك', arabic: 'الثلاجة' },
  { id: 29, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Gefrierschrank', pronunciation: 'در غفيرشرانك', arabic: 'الفريزر / المجمد' },
  { id: 30, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Herd', pronunciation: 'در هيرت', arabic: 'الموقد' },
  { id: 31, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Ofen', pronunciation: 'در أوفن', arabic: 'الفرن' },
  { id: 32, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Mikrowelle', pronunciation: 'دي ميكروفيله', arabic: 'الميكروويف' },
  { id: 33, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Spülmaschine', pronunciation: 'دي شبيولماشينه', arabic: 'غسالة الأطباق' },
  { id: 34, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Dunstabzugshaube', pronunciation: 'دي دونست أبزوغ هاوبه', arabic: 'شفاط المطبخ' },
  { id: 35, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Tisch', pronunciation: 'در تيش', arabic: 'طاولة الطعام' },
  { id: 36, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Stuhl', pronunciation: 'در شتول', arabic: 'الكرسي' },
  { id: 37, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Küchenschrank', pronunciation: 'در كوشين شرانك', arabic: 'خزانة المطبخ' },
  { id: 38, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'das Regal', pronunciation: 'داس ريغال', arabic: 'الرف' },
  { id: 39, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Teller', pronunciation: 'در تلر', arabic: 'الصحن / الطبق' },
  { id: 40, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'das Messer', pronunciation: 'داس مسر', arabic: 'السكين' },
  { id: 41, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Gabel', pronunciation: 'دي غابل', arabic: 'الشوكة' },
  { id: 42, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Löffel', pronunciation: 'در لوفل', arabic: 'الملعقة' },
  { id: 43, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'das Glas', pronunciation: 'داس غلاس', arabic: 'الكوب / الكأس' },
  { id: 44, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Tasse', pronunciation: 'دي تاسه', arabic: 'الفنجان' },
  { id: 45, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Topf', pronunciation: 'در توبف', arabic: 'القدر / الحلة' },
  { id: 46, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Pfanne', pronunciation: 'دي فافنه', arabic: 'المقلاة' },
  { id: 47, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Wasserkocher', pronunciation: 'در فاسركوخر', arabic: 'غلاية الماء' },
  { id: 48, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Kaffeemaschine', pronunciation: 'دي كافيه ماشينه', arabic: 'صانعة القهوة' },
  { id: 49, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Toaster', pronunciation: 'در توستر', arabic: 'محمصة الخبز' },
  { id: 50, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'die Schüssel', pronunciation: 'دي شويسيل', arabic: 'السلطانية / وعاء' },
  { id: 162, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'das Schneidebrett', pronunciation: 'داس شنايد بريت', arabic: 'لوح تقطيع الخضروات' },
  { id: 163, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'der Dosenöffner', pronunciation: 'در دوزن أوفنر', arabic: 'فتاحة العلب' },
  { id: 164, categoryNum: 3, categoryTitle: 'المطبخ ومستلزماته', german: 'das Sieb', pronunciation: 'داس سيب', arabic: 'المصفاة' },

  // --- القسم الرابع: الحمام وأدواته ومستلزماته الكاملة ---
  { id: 51, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Badezimmer', pronunciation: 'داس بادتسيمر', arabic: 'الحمام' },
  { id: 52, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Waschbecken', pronunciation: 'داس فاشبكن', arabic: 'المغسلة / حوض الوجه' },
  { id: 53, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Dusche', pronunciation: 'دي دوشه', arabic: 'الدش / الشاور' },
  { id: 54, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Badewanne', pronunciation: 'دي بادفانه', arabic: 'حوض الاستحمام' },
  { id: 55, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Toilette', pronunciation: 'دي تواليته', arabic: 'المرحاض' },
  { id: 56, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Handtuch', pronunciation: 'داس هاندتوخ', arabic: 'المنشفة' },
  { id: 57, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Badetuch', pronunciation: 'داس باديتوخ', arabic: 'منشفة الاستحمام الكبيرة' },
  { id: 58, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Seife', pronunciation: 'دي زايفه', arabic: 'الصابون' },
  { id: 59, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'das Shampoo', pronunciation: 'داس شامبو', arabic: 'الشامبو' },
  { id: 60, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Duschgel', pronunciation: 'دي دوش غيل', arabic: 'جل الاستحمام' },
  { id: 61, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Bürste', pronunciation: 'دي بيورسته', arabic: 'الفرشاة' },
  { id: 62, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'der Kamm', pronunciation: 'در كام', arabic: 'المشط' },
  { id: 63, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Zahnbürste', pronunciation: 'دي تسانبيورسته', arabic: 'فرشاة الأسنان' },
  { id: 64, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Zahnpasta', pronunciation: 'دي تسانباستا', arabic: 'معجون الأسنان' },
  { id: 65, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'der Föhn', pronunciation: 'در فيون', arabic: 'مجفف الشعر' },
  { id: 66, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'der Toilettenpapier', pronunciation: 'در تواليت بابير', arabic: 'ورق المرحاض' },
  { id: 67, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Waage', pronunciation: 'دي فاغه', arabic: 'ميزان الحمام' },
  { id: 165, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Duschkabine', pronunciation: 'دي دوش كابينه', arabic: 'كبينة الاستحمام الزجاجية' },
  { id: 166, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'der Toilettenbürste', pronunciation: 'دي تواليت بيورسته', arabic: 'فرشاة تنظيف المرحاض' },
  { id: 167, categoryNum: 4, categoryTitle: 'الحمام ومستلزماته', german: 'die Duschvorhang', pronunciation: 'در دوش فور هانغ', arabic: 'ستارة الحمام' },

  // --- القسم الخامس: أثاث وغرفة النوم والمعيشة ---
  { id: 68, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Sofa', pronunciation: 'داس زوفا', arabic: 'الأريكة / الكنبة' },
  { id: 69, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Sessel', pronunciation: 'در زسل', arabic: 'الكرسي المريح (فوتيه)' },
  { id: 70, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Bett', pronunciation: 'داس بيت', arabic: 'السرير' },
  { id: 71, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Nachttisch', pronunciation: 'در ناخت تيش', arabic: 'طاولة بجانب السرير (كومودينو)' },
  { id: 72, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Kleiderschrank', pronunciation: 'در كلايدر شرانك', arabic: 'خزانة الملابس' },
  { id: 73, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Kommode', pronunciation: 'دي كوموده', arabic: 'خزانة أدراج' },
  { id: 74, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Lampe', pronunciation: 'دي لامبه', arabic: 'المصباح' },
  { id: 75, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Stehlampe', pronunciation: 'دي شتي لامبه', arabic: 'مصباح أرضي' },
  { id: 76, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Spiegel', pronunciation: 'در شبيغل', arabic: 'المرآة' },
  { id: 77, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Teppich', pronunciation: 'در تيبيش', arabic: 'السجادة' },
  { id: 78, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Kissen', pronunciation: 'داس كيسن', arabic: 'الوسادة / المخدة' },
  { id: 79, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Decke', pronunciation: 'دي ديكه', arabic: 'الغطاء / البطانية' },
  { id: 80, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Vorhänge', pronunciation: 'دي فور هينغه', arabic: 'الستائر' },
  { id: 81, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Bild', pronunciation: 'داس بيلد', arabic: 'الصورة / اللوحة الفنية' },
  { id: 82, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Vase', pronunciation: 'دي فازه', arabic: 'مزهرية الورود' },
  { id: 168, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'das Doppelbett', pronunciation: 'داس دوبل بيت', arabic: 'سرير مزدوج / كبير' },
  { id: 169, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'der Couchtisch', pronunciation: 'در كوتش تيش', arabic: 'طاولة القهوة الصغيرة أمام الكنبة' },
  { id: 170, categoryNum: 5, categoryTitle: 'أثاث وغرف النوم والمعيشة', german: 'die Matratze', pronunciation: 'دي ماتراتسه', arabic: 'مرتبة السرير' },

  // --- القسم السادس: الأجهزة الكهربائية والأدوات المنزلية ---
  { id: 83, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Waschmaschine', pronunciation: 'دي فاشماشينه', arabic: 'الغسالة' },
  { id: 84, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Wäschetrockner', pronunciation: 'در فيشه تروكنر', arabic: 'مجفف الملابس' },
  { id: 85, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Staubsauger', pronunciation: 'در شتاوبزاوغر', arabic: 'المكنسة الكهربائية' },
  { id: 86, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Bügeleisen', pronunciation: 'داس بيوغلايزن', arabic: 'المكواة' },
  { id: 87, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Bügelbrett', pronunciation: 'داس بيغل بريت', arabic: 'طاولة الكي' },
  { id: 88, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Fernseher', pronunciation: 'در فيرنزيهر', arabic: 'التلفاز' },
  { id: 89, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Radio', pronunciation: 'داس راديو', arabic: 'الراديو' },
  { id: 90, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Klimaanlage', pronunciation: 'دي كليما أنلاغه', arabic: 'المكيف' },
  { id: 91, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Heizung', pronunciation: 'دي هايتسونغ', arabic: 'الدفّاية / التدفئة' },
  { id: 92, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Ventilator', pronunciation: 'در فنتيلاتور', arabic: 'المروحة' },
  { id: 93, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Steckdose', pronunciation: 'دي شتيكدوزه', arabic: 'مقبس الكهرباء (الفيشة)' },
  { id: 94, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Stecker', pronunciation: 'در شتكر', arabic: 'قابس الكهرباء' },
  { id: 95, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Lichtschalter', pronunciation: 'در ليشت شالتر', arabic: 'مفتاح الإضاءة' },
  { id: 96, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Glühbirne', pronunciation: 'دي غليوبيرنه', arabic: 'لمبة الإضاءة' },
  { id: 97, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Schlüssel', pronunciation: 'در شليوسل', arabic: 'المفتاح' },
  { id: 98, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Schloss', pronunciation: 'داس شلوس', arabic: 'القفل' },
  { id: 99, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'die Uhr', pronunciation: 'دي أوهر', arabic: 'الساعة' },
  { id: 100, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Mülleimer', pronunciation: 'در مول إيمر', arabic: 'سلة المهملات' },
  { id: 171, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Wasserkocher', pronunciation: 'در فاسركوخر', arabic: 'غلاية المياه' },
  { id: 172, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'der Wecker', pronunciation: 'در فيكر', arabic: 'ساعة المنبه' },
  { id: 173, categoryNum: 6, categoryTitle: 'الأجهزة الكهربائية والأدوات المنزلية', german: 'das Verlängerungskabel', pronunciation: 'داس فيرلينغروغس كابل', arabic: 'وصلة الكهرباء / المشترك' },

  // --- القسم السابع: أدوات النظافة والغسيل ---
  { id: 109, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'der Besen', pronunciation: 'در بيزن', arabic: 'المكنسة اليدوية / المقشة' },
  { id: 110, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'der Mopp', pronunciation: 'در موب', arabic: 'الممسحة' },
  { id: 111, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'der Eimer', pronunciation: 'در إيمر', arabic: 'الدلو / السطل' },
  { id: 112, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'das Waschmittel', pronunciation: 'داس فاش ميتل', arabic: 'مسحوق الغسيل' },
  { id: 113, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'der Weichspüler', pronunciation: 'در فايش شبيولر', arabic: 'منعم الأقمشة' },
  { id: 114, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'das Reinigungsmittel', pronunciation: 'داس راينيغونغس ميتل', arabic: 'مستحضر التنظيف' },
  { id: 115, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'der Schwamm', pronunciation: 'در شفام', arabic: 'الإسفنجة' },
  { id: 116, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'das Putztuch', pronunciation: 'داس بوتس توخ', arabic: 'خرقة / قماش التنظيف' },
  { id: 117, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'der Wäscheständer', pronunciation: 'در فيشه شتندر', arabic: 'منشر الغسيل' },
  { id: 118, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'die Wäscheklammer', pronunciation: 'دي فيشه كلامر', arabic: 'مشبك الغسيل' },
  { id: 174, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'der Staubsaugerbeutel', pronunciation: 'در شتاوبزاوغر بوتل', arabic: 'كيس المكنسة الكهربائية' },
  { id: 175, categoryNum: 7, categoryTitle: 'أدوات النظافة والغسيل', german: 'die Müllbeutel', pronunciation: 'دي مول بوتل', arabic: 'أكياس القمامة' },

  // --- القسم الثامن: أدوات الحديقة والزراعة ---
  { id: 119, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'der Rasenmäher', pronunciation: 'در رازن ميهر', arabic: 'جازة العشب / آلة قص الحشائش' },
  { id: 120, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'der Gartenschlauch', pronunciation: 'در غارتن شلاوخ', arabic: 'خرطوم المياه للحديقة' },
  { id: 121, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'die Schaufel', pronunciation: 'دي شاوفل', arabic: 'المجرفة' },
  { id: 122, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'die Gießkanne', pronunciation: 'دي غيس كانه', arabic: 'مرش النباتات / إبريق السقي' },
  { id: 123, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'die Heckenschere', pronunciation: 'دي هيكن شيره', arabic: 'مقص السياج الشجري' },
  { id: 124, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'die Schubkarre', pronunciation: 'دي شوب كاريه', arabic: 'عربة اليد للحديقة' },
  { id: 125, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'der Blumentopf', pronunciation: 'در بلومن توبف', arabic: 'وعاء النباتات / أصيص الزهور' },
  { id: 126, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'die Harke', pronunciation: 'دي هاركه', arabic: 'المشط / المذراة الزراعية' },
  { id: 176, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'die Gartenbank', pronunciation: 'دي غارتن بانك', arabic: 'مقعد الحديقة' },
  { id: 177, categoryNum: 8, categoryTitle: 'أدوات الحديقة والزراعة', german: 'der Grill', pronunciation: 'در غريل', arabic: 'شواية الحديقة' },

  // --- القسم التاسع: أدوات الصيانة والورشة المنزلية ---
  { id: 127, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'der Hammer', pronunciation: 'در هامر', arabic: 'المطرقة' },
  { id: 128, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'der Schraubenzieher', pronunciation: 'در شراوبين تسيهر', arabic: 'المفك / مفك البراغي' },
  { id: 129, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'die Zange', pronunciation: 'دي تسانغه', arabic: 'الزردية / الكماشة' },
  { id: 130, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'die Bohrmaschine', pronunciation: 'دي بور ماشينه', arabic: 'مثقاب الكهرباء / الشيمور' },
  { id: 131, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'die Schraube', pronunciation: 'دي شراوبه', arabic: 'المسمار القلاووظ' },
  { id: 132, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'der Nagel', pronunciation: 'در ناغل', arabic: 'المسمار العادي' },
  { id: 133, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'die Leiter', pronunciation: 'دي لايتر', arabic: 'السلم المتنقل' },
  { id: 134, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'das Klebeband', pronunciation: 'داس كليبه باند', arabic: 'شريط اللصق اللاصق' },
  { id: 135, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'die Säge', pronunciation: 'دي زاغه', arabic: 'المنشار' },
  { id: 178, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'der Zollstock', pronunciation: 'در تسول شتوك', arabic: 'شريط القياس الخشبي / المتر' },
  { id: 179, categoryNum: 9, categoryTitle: 'أدوات الصيانة والورشة المنزلية', german: 'die Taschenlampe', pronunciation: 'دي تاشين لامبه', arabic: 'الكشاف اليدوي' },

  // --- القسم العاشر: مستلزمات مكتب العمل والتكنولوجيا ---
  { id: 136, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'der Computer', pronunciation: 'در كمبيوتر', arabic: 'الحاسوب / الكمبيوتر' },
  { id: 137, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'der Laptop', pronunciation: 'در لابتوب', arabic: 'الحاسوب المحمول' },
  { id: 138, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'der Drucker', pronunciation: 'در دروكر', arabic: 'الطابعة' },
  { id: 139, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'der Schreibtisch', pronunciation: 'در شرايب تيش', arabic: 'مكتب العمل' },
  { id: 140, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'der Bürostuhl', pronunciation: 'در بيرو شتول', arabic: 'كرسي المكتب' },
  { id: 141, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'die Schreibtischlampe', pronunciation: 'دي شرايب تيش لامبه', arabic: 'مصباح المكتب' },
  { id: 142, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'das Papier', pronunciation: 'داس بابير', arabic: 'الورق' },
  { id: 143, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'der Kugelschreiber', pronunciation: 'در كوجل شرايبر', arabic: 'القلم الجاف' },
  { id: 144, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'die Schere', pronunciation: 'دي شيره', arabic: 'المقص المكتبي' },
  { id: 145, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'der Router', pronunciation: 'در روتر', arabic: 'راوتر الإنترنت' },
  { id: 180, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'die Tastatur', pronunciation: 'دي تاستاتور', arabic: 'لوحة المفاتيح' },
  { id: 181, categoryNum: 10, categoryTitle: 'مستلزمات مكتب العمل والتكنولوجيا', german: 'die Maus', pronunciation: 'دي ماوس', arabic: 'فأرة الحاسوب' },

  // --- القسم الحادي عشر: ألعاب وأنشطة التسلية المنزلية ---
  { id: 146, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'das Spiel', pronunciation: 'داس سبيل', arabic: 'اللعبة' },
  { id: 147, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'das Brettspiel', pronunciation: 'داس بريت سبيل', arabic: 'لعبة لوحية' },
  { id: 148, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'die Spielkonsole', pronunciation: 'دي سبيل كونصوله', arabic: 'جهاز ألعاب الفيديو / السوني' },
  { id: 149, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'der Controller', pronunciation: 'در كونتراولر', arabic: 'يد التحكم / دراع الألعاب' },
  { id: 150, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'die Spielkarte', pronunciation: 'دي سبيل كارته', arabic: 'ورقة اللعب / الكوتشينة' },
  { id: 151, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'das Puzzle', pronunciation: 'داس بوزل', arabic: 'لعبة التركيب / البازل' },
  { id: 152, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'der Ball', pronunciation: 'در بال', arabic: 'الكرة' },
  { id: 153, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'die Puppe', pronunciation: 'دي بوبه', arabic: 'الدمية / العروسة' },
  { id: 154, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'das Buch', pronunciation: 'داس بوخ', arabic: 'الكتاب' },
  { id: 155, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'die Schaukel', pronunciation: 'دي شاوكل', arabic: 'الأرجوحة' },
  { id: 182, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'das Schachspiel', pronunciation: 'داس شاخ سبيل', arabic: 'لعبة الشطرنج' },
  { id: 183, categoryNum: 11, categoryTitle: 'ألعاب وأنشطة التسلية المنزلية', german: 'die Tischtennisplatte', pronunciation: 'دي تيش تينيس بلاته', arabic: 'طاولة تنس الطاولة / البينج بونج' }
];

// استخراج الأقسام الفريدة ديناميكياً مع أرقامها وعناوينها
const categoriesList = Array.from(
  new Set(allHouseItemsData.map((item) => JSON.stringify({ num: item.categoryNum, title: item.categoryTitle })))
).map((str) => JSON.parse(str));

export default function HousePage() {
  const [searchTerm, setSearchTerm] = useState('');

  // دالة النطق الصوتي المباشر عبر Web Speech API
  const speakGerman = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const scrollToCategory = (catNum) => {
    const element = document.getElementById(`category-${catNum}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  const filteredData = allHouseItemsData.filter(
    (item) =>
      item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.arabic.includes(searchTerm) ||
      item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let lastCategoryNum = null;

  return (
    <div style={{ width: '100%', padding: '15px 0 40px 0', color: 'inherit', background: 'transparent', boxSizing: 'border-box' }}>
      <style>{`
        .page-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 10px;
          color: inherit;
        }
        .page-subtitle {
          text-align: center;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #00bfff;
        }
        .nav-instruction-title {
          text-align: center;
          font-size: 0.95rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: inherit;
          opacity: 0.9;
        }
        .nav-index-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          width: 90%;
          max-width: 90%;
          margin: 0 auto 25px auto;
          padding: 8px;
          box-sizing: border-box;
        }
        .nav-index-btn {
          background-color: transparent;
          border: 1px solid #00bfff;
          color: inherit;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }
        .nav-index-btn:hover {
          background-color: #00bfff;
          color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 191, 255, 0.45);
        }
        .nav-index-btn:active {
          box-shadow: 0 0 15px rgba(0, 191, 255, 0.7);
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
          scroll-margin-top: 20px;
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
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          min-height: 55px;
        }
        .vocab-card:hover {
          border-color: #00bfff;
          box-shadow: 0 0 8px rgba(0, 191, 255, 0.3);
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

      <h1 className="page-title">المنزل</h1>
      <p className="page-subtitle">كل ما يوجد في البيت وما يحيط به باللغة الألمانية</p>

      {/* عنوان التوجيه */}
      <div className="nav-instruction-title">اضغط على القسم الذي تود الذهاب إليه</div>

      {/* فهرس الانتقال السريع للأقسام */}
      <div className="nav-index-container">
        {categoriesList.map((cat) => (
          <button
            key={cat.num}
            className="nav-index-btn"
            onClick={() => scrollToCategory(cat.num)}
          >
            <span className="category-badge">{cat.num}</span>
            <span>{cat.title}</span>
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
                <div id={`category-${item.categoryNum}`} className="category-heading">
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